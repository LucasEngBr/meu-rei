// Deixa o www pronto para rodar offline dentro do app: baixa as fontes do Google Fonts para www/fonts
// e troca o <link> externo por um CSS local.
const fs = require('fs');
const path = require('path');
const WWW = path.join(__dirname, 'www');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

(async () => {
  let html = fs.readFileSync(path.join(WWW, 'index.html'), 'utf8');
  const m = html.match(/<link rel="stylesheet" href="(https:\/\/fonts\.googleapis\.com\/[^"]+)">/);
  if (!m) throw new Error('link das fontes não encontrado');
  let css = await (await fetch(m[1].replace(/&amp;/g, '&'), { headers: { 'User-Agent': UA } })).text();
  fs.mkdirSync(path.join(WWW, 'fonts'), { recursive: true });
  const urls = [...new Set([...css.matchAll(/url\((https:[^)]+)\)/g)].map(x => x[1]))];
  let i = 0;
  for (const u of urls) {
    const nome = `f${i++}.woff2`;
    fs.writeFileSync(path.join(WWW, 'fonts', nome), Buffer.from(await (await fetch(u)).arrayBuffer()));
    css = css.split(u).join(`${nome}`);
  }
  fs.writeFileSync(path.join(WWW, 'fonts', 'fonts.css'), css);
  html = html.replace(/<link rel="preconnect"[^>]*>\s*/g, '').replace(m[0], '<link rel="stylesheet" href="fonts/fonts.css">');
  fs.writeFileSync(path.join(WWW, 'index.html'), html);
  console.log('fontes locais:', urls.length, 'arquivos');
})().catch(e => { console.error('ERRO', e.message); process.exit(1); });
