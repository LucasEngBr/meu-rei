// Gera os ícones do app (normal, redondo e adaptativo) e as telas de abertura a partir da logo do rei de cacto.
const sharp = require(process.env.SHARP || 'sharp');
const fs = require('fs');
const path = require('path');
const RES = path.join(__dirname, 'android/app/src/main/res');
// ícone do app: rei de cacto recortado de arte-icone/icone-original.webp (as telas de abertura seguem com a logo)
const ICONE = path.join(__dirname, 'arte-icone/rei-icone.png');
const LOGO = path.join(__dirname, 'www/arte/logo.webp');
const BG_ICONE = { r: 253, g: 232, b: 195, alpha: 1 }; // creme da arte do ícone
const BG = { r: 246, g: 241, b: 232, alpha: 1 }; // off-white do app

async function logo(px, arq = LOGO) { return sharp(arq).resize(px, px, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer(); }
async function quadro(size, logoFrac, shape) {
  const l = Math.round(size * logoFrac);
  let img = sharp({ create: { width: size, height: size, channels: 4, background: BG_ICONE } })
    .composite([{ input: await logo(l, ICONE), left: Math.round((size - l) / 2), top: Math.round((size - l) / 2) }]);
  let buf = await img.png().toBuffer();
  if (shape) {
    const r = shape === 'round' ? size / 2 : size * 0.18;
    const mask = Buffer.from(`<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${r}" ry="${r}"/></svg>`);
    buf = await sharp(buf).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
  }
  return buf;
}

(async () => {
  const dens = { mdpi: 1, hdpi: 1.5, xhdpi: 2, xxhdpi: 3, xxxhdpi: 4 };
  for (const [d, k] of Object.entries(dens)) {
    const dir = path.join(RES, `mipmap-${d}`);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'ic_launcher.png'), await quadro(Math.round(48 * k), .78, 'rounded'));
    fs.writeFileSync(path.join(dir, 'ic_launcher_round.png'), await quadro(Math.round(48 * k), .72, 'round'));
    // adaptativo: 108dp, com a logo dentro da zona segura de 66dp
    const f = Math.round(108 * k), l = Math.round(66 * k);
    fs.writeFileSync(path.join(dir, 'ic_launcher_foreground.png'),
      await sharp({ create: { width: f, height: f, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
        .composite([{ input: await logo(l, ICONE), left: Math.round((f - l) / 2), top: Math.round((f - l) / 2) }]).png().toBuffer());
  }
  // cor de fundo do ícone adaptativo
  const bgXml = path.join(RES, 'values/ic_launcher_background.xml');
  fs.writeFileSync(bgXml, '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#FDE8C3</color>\n</resources>\n');
  // telas de abertura: substitui cada splash.png do modelo pelo mesmo tamanho, com a logo no centro
  let n = 0;
  if (process.env.SO_ICONE) { console.log('ícones ok (telas de abertura mantidas)'); return; }
  for (const dir of fs.readdirSync(RES).filter(d => d.startsWith('drawable'))) {
    const f = path.join(RES, dir, 'splash.png');
    if (!fs.existsSync(f)) continue;
    const { width, height } = await sharp(f).metadata();
    const l = Math.round(Math.min(width, height) * .32);
    const buf = await sharp({ create: { width, height, channels: 4, background: BG } })
      .composite([{ input: await logo(l), left: Math.round((width - l) / 2), top: Math.round((height - l) / 2) }]).png().toBuffer();
    fs.writeFileSync(f, buf); n++;
  }
  console.log('ícones ok, telas de abertura:', n);
})().catch(e => { console.error('ERRO', e.message); process.exit(1); });
