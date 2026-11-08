// Publica uma versão nova do Meu rei!: copia o jogo para o www, carimba o número da versão,
// gera o pacote de atualização (zip) que o app baixa sozinho, sincroniza com o Android e faz o deploy.
//
//   node publicar.js                 -> versão nova + deploy no Firebase
//   node publicar.js --sem-deploy    -> só prepara (para testar antes)
//   node publicar.js --apk           -> também gera o APK em ./MeuRei.apk
//
// A fonte do jogo é www/peao.html, com as artes, vozes e vendor ao lado, no próprio www.
// Ele vira www/index.html com o número da versão e as fontes locais; o peao.html não vai para o site nem para o pacote.
// --fonte <pasta> lê peao.html, arte, terracota, voz e vendor de outra pasta.
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const AdmZip = require('adm-zip');

const args = process.argv.slice(2);
const opt = n => args.includes(n);
const iFonte = args.indexOf('--fonte');
const RAIZ = __dirname, WWW = path.join(RAIZ, 'www'), PASTA_PACOTE = path.join(WWW, 'atualizacao');
const FONTE = iFonte >= 0 ? path.resolve(args[iFonte + 1]) : WWW;
const FORA_DO_PACOTE = new Set(['.well-known', 'atualizacao', 'versao.json', 'peao.html']);
const run = (cmd, cwd = RAIZ, env) => execSync(cmd, { cwd, stdio: 'inherit', env: { ...process.env, ...env } });

// 1. número da versão
let anterior = 0;
try { anterior = JSON.parse(fs.readFileSync(path.join(WWW, 'versao.json'), 'utf8')).versao || 0; } catch (e) {}
const versao = anterior + 1;
console.log(`\n== Meu rei! versão ${versao} ==`);

// 2. jogo + artes + vozes da pasta fonte
let html = fs.readFileSync(path.join(FONTE, 'peao.html'), 'utf8');
if (!/const APP_VERSAO=\d+;/.test(html)) throw new Error('peao.html sem a linha const APP_VERSAO=...;');
html = html.replace(/const APP_VERSAO=\d+;/, `const APP_VERSAO=${versao};`);
fs.writeFileSync(path.join(WWW, 'index.html'), html);
if (FONTE !== WWW) {
  const copia = (de, filtro) => fs.existsSync(path.join(FONTE, de)) && fs.cpSync(path.join(FONTE, de), path.join(WWW, de), { recursive: true, filter: filtro });
  copia('arte', f => !f.endsWith('.json'));
  copia('terracota');
  copia('voz', f => !/\.mp3$/i.test(f));
  copia('vendor');
}
run('node preparar.js'); // fontes locais

// 3. Android recebe a mesma versão (o pacote de atualização fica fora do APK)
fs.rmSync(PASTA_PACOTE, { recursive: true, force: true });
run('npx cap sync android');

if (opt('--apk')) {
  run(`"${path.join(RAIZ, 'android', 'gradlew.bat')}" assembleDebug --no-daemon -q`, path.join(RAIZ, 'android'),
    { JAVA_HOME: 'C:/Users/l1soa/android-build/jdk', ANDROID_HOME: 'C:/Users/l1soa/android-build/sdk' });
  fs.copyFileSync(path.join(RAIZ, 'android/app/build/outputs/apk/debug/app-debug.apk'), path.join(RAIZ, 'MeuRei.apk'));
  console.log('APK em', path.join(RAIZ, 'MeuRei.apk'));
}

// 4. pacote de atualização: tudo do www, menos o que é só do site
fs.rmSync(PASTA_PACOTE, { recursive: true, force: true });
fs.mkdirSync(PASTA_PACOTE, { recursive: true });
const zip = new AdmZip();
for (const nome of fs.readdirSync(WWW)) {
  if (FORA_DO_PACOTE.has(nome)) continue;
  const p = path.join(WWW, nome);
  if (fs.statSync(p).isDirectory()) zip.addLocalFolder(p, nome); else zip.addLocalFile(p);
}
const nomePacote = `meurei-${versao}.zip`;
zip.writeZip(path.join(PASTA_PACOTE, nomePacote));
const mb = (fs.statSync(path.join(PASTA_PACOTE, nomePacote)).size / 1048576).toFixed(1);
// o plugin só aceita o pacote com o SHA-256 dele (em hexadecimal)
const checksum = require('crypto').createHash('sha256').update(fs.readFileSync(path.join(PASTA_PACOTE, nomePacote))).digest('hex');
fs.writeFileSync(path.join(WWW, 'versao.json'), JSON.stringify({ versao, pacote: `atualizacao/${nomePacote}`, checksum, data: new Date().toISOString() }, null, 2));
console.log(`pacote ${nomePacote} (${mb} MB)`);

// 5. deploy
if (!opt('--sem-deploy')) run('firebase.cmd deploy --only hosting --project meu-rei --non-interactive');
console.log(`\nPronto: versão ${versao}${opt('--sem-deploy') ? ' (sem deploy)' : ' publicada'}.`);
