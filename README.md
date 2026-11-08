# Meu rei!

Xadrez só que barril dobrado. Um jogo de xadrez com o **Zé Roque**, bot baiano marrento que joga contra você, comenta a partida com voz e explica os erros na análise.

- **Jogar:** https://meu-rei.web.app
- **Android:** app Capacitor com atualização automática (o app avisa quando há versão nova)

## O que tem

- Contra o Zé Roque (5 níveis, motor próprio em JavaScript rodando num Web Worker)
- Lado a lado (duas pessoas no mesmo aparelho)
- Amigo online por link de convite (Firebase Realtime Database), com perfil e placar contra cada amigo
- Análise com precisão, gráfico, revisão guiada e exercícios a partir dos seus erros
- Cinco tabuleiros ilustrados; o rei racha em xeque e quebra no xeque-mate
- Voz do Zé gravada (com e sem censura) e voz sintética como reserva

## Estrutura

| Caminho | O que é |
|---|---|
| `www/peao.html` | **A fonte do jogo** (HTML, CSS e JS num arquivo só) |
| `www/arte/`, `www/terracota/` | Peças, tabuleiros, ícones e logo |
| `www/voz/` | Falas do Zé em pacotes JSON (áudio em base64) |
| `www/vendor/` | SDK do Firebase (para funcionar sem CDN) |
| `www/versao.json` | Número da versão publicada (contador do `publicar.js`) |
| `android/` | Projeto Android do Capacitor |
| `publicar.js` | Gera a versão nova, o pacote de atualização e faz o deploy |
| `preparar.js` | Baixa as fontes do Google para funcionar offline |
| `icones.js` | Gera os ícones do Android a partir de `arte-icone/` |
| `database.rules.json` | Regras do banco do modo online |
| `docs/ze-roque/` | Perfil, direção de voz e roteiro das falas do Zé |

## Como publicar

```bash
npm install
node publicar.js              # versão nova + deploy no Firebase Hosting
node publicar.js --sem-deploy # só prepara
node publicar.js --apk        # também gera o APK (precisa de JDK e Android SDK)
```

O app Android confere `versao.json` ao abrir e oferece **Atualizar**; o pacote baixado (`atualizacao/meurei-N.zip`, com checksum SHA-256) substitui o jogo embutido. Só mudanças nativas (plugins, permissões, ícone) precisam de APK novo.

Para testar no computador, sirva a pasta `www` (ex.: `npx http-server www`) e abra `/peao.html`.
