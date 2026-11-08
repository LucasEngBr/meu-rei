# Zé Roque: perfil e roteiro de voz

Personagem do app de xadrez **Meu rei!**. Este documento reúne quem ele é, como ele deve soar e todas as falas que ele diz no app, prontas para gerar áudio.

**Total: 259 falas.** São 133 na versão com censura, 120 na versão sem censura e 6 falas de apoio novas.

A planilha `ze-roque-roteiro.csv` tem as mesmas falas, uma por linha, para importar no programa de áudio.

---

## Quem é o Zé Roque

| | |
|---|---|
| **Nome** | Zé Roque. O "Roque" é trocadilho com o lance de xadrez. |
| **Papel no app** | É o bot adversário, o comentarista da partida e o "professor" da análise e do treino. |
| **Origem** | Baiano de Salvador. Fala o baianês das ruas: "oxe", "véi", "meu rei", "barril", "ó paí ó". |
| **Idade aparente** | Uns 40 anos. É um tiozão da praça, que joga xadrez no banco e dá pitaco em tudo. |
| **Personalidade** | Marrento, debochado e convencido, mas com tom de brincadeira e nunca maldoso de verdade. Provoca como se provoca um amigo. |
| **Quando ganha** | Fica insuportável de tão convencido. Tira onda e manda o jogador tentar um nível mais baixo. |
| **Quando perde** | Fica **muito irritadinho**. Explode ("NÃO! Isso foi o lag!"), arruma desculpa (o tabuleiro, o relógio, o mouse), emburra e, no fim, pede revanche sem admitir que quer. |
| **Quando o jogador acerta** | Disfarça o incômodo: "sorte de principiante", "não espalha". Elogia a contragosto. |
| **Quando ele mesmo erra** | Nunca assume: "foi de propósito", "escorregou o mouse". |
| **Regra de ouro** | Durante a partida **ele não dá dica**: só reage e provoca. As explicações ficam para a análise. |

### As duas versões

- **Com censura:** só gíria baiana. É marrento, mas sem palavrão.
- **Sem censura:** entram palavrões e xingamentos baianos ("miséra", "disgraça", "cabrunco", "porra", "vá se lenhar"). No falar baiano, muitos deles são **vocativo e intimidade, não ofensa**. O tom continua sendo o de zoeira entre amigos, nunca de raiva real contra a pessoa.
- Ficaram **de fora** termos preconceituosos, como ofensas homofóbicas, mesmo que apareçam no dicionário de referência.

---

## Direção de voz

| | |
|---|---|
| **Timbre** | Masculino, grave e um pouco rouco. |
| **Sotaque** | Baiano de Salvador: vogais abertas, fala cantada e arrastada, frases que sobem e descem como pergunta. |
| **Ritmo padrão** | Relaxado e sem pressa, de quem tem certeza de que vai ganhar. |
| **Debochado** | Sorriso na voz, alongando as vogais ("Ó paí óóó"). Às vezes uma risadinha curta antes da frase. |
| **Irritado** | Mais rápido, mais agudo e mais alto. Atropela as palavras. Nas falas de derrota, é quase um grito. |
| **Irritado (emburrado)** | Baixo, resmungando, mais devagar. |
| **Surpreso a contragosto** | Começa surpreso e termina seco, como quem se arrepende de ter elogiado. |
| **Neutro marrento** | Voz normal dele: tranquila, mas sempre um pouco superior. |
| **Duração** | De 1 a 5 segundos por fala. Não precisa de pausa longa no fim. |

### Guia de pronúncia

O programa de voz tende a ler a grafia ao pé da letra. Se ele aceitar texto fonético ou dicionário de pronúncia, use estas formas:

| Escrito | Como se fala | Observação |
|---|---|---|
| oxe | **ó-chi** [ˈɔʃi] | "o" aberto, "x" com som de ch, "e" final vira "i" |
| oxente | **ó-chên-ti** | |
| vixe | **ví-chi** | |
| ó paí ó | **ó, pa-í, ó** | três batidas, com pausa curta entre elas |
| véi | **véi** | "é" aberto |
| meu rei | **meu rêi** | |
| miséra | **mi-zé-ra** | |
| miseravão | **mi-ze-ra-vão** | |
| barril | **ba-rríu** | o "l" final vira "u" |
| xoxo | **chô-cho** | |
| pivete | **pi-vé-ti** | |
| aonde | **a-ôn-di** | |
| é niuma | **é ni-ú-ma** | |
| cabrunco | **ca-brún-co** | |
| porreta | **po-rrê-ta** | |
| armengado | **ar-men-gá-du** | |
| espótico | **is-pó-ti-cu** | |
| Ctrl+Z | **con-tról zê** | |

---

## Como nomear os arquivos de áudio

Cada fala tem um **ID**. Salve o áudio com o nome do ID, por exemplo `C_greet_01_n3.mp3` (a coluna `arquivo` da planilha já traz o nome pronto). Assim cada áudio é ligado automaticamente à fala certa no app.

- `C_...` = versão com censura
- `S_...` = versão sem censura
- `A_...` = falas de apoio (servem para as duas versões)
- `_n1` a `_n5` = variações com o número do nível do bot
- `_brancas` e `_pretas` = variações com o lado vencedor

Os formatos MP3, OGG e WAV servem. Se der, use MP3 em mono, a 64 a 96 kbps, para o app ficar leve.

### O que não vira áudio

Algumas falas no app têm partes que mudam a cada partida, como o nome de um lance ("O certo era Dama e7") ou uma porcentagem ("Tua precisão: 77%"). Essas partes continuam só no balão de texto. As **falas de apoio** cobrem o começo dessas frases, para que a voz não fique faltando nessas horas.

---

## Roteiro com censura

### Apresentação
*Quando toca:* Ao abrir o jogo ou trocar a linguagem. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_hello_01` | Colé, meu rei! Eu sou o Zé Roque. Escolhe o nível aí que eu te amasso, viu? |
| `C_hello_02` | Oxe, chegou mais um pra apanhar. Zé Roque, prazer. O prazer é seu, viu? |

### Início de partida contra o Zé
*Quando toca:* Ao começar uma partida contra o bot ({lvl} = nível escolhido). *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_greet_01` | Bora, pae. Isso vai ser rapidinho. |
| `C_greet_02_n1` | Nível 1? Oxe, que coragem pra quem joga desse jeito. |
| `C_greet_02_n2` | Nível 2? Oxe, que coragem pra quem joga desse jeito. |
| `C_greet_02_n3` | Nível 3? Oxe, que coragem pra quem joga desse jeito. |
| `C_greet_02_n4` | Nível 4? Oxe, que coragem pra quem joga desse jeito. |
| `C_greet_02_n5` | Nível 5? Oxe, que coragem pra quem joga desse jeito. |
| `C_greet_03` | Se plante aí e prepara o lenço, viu? |
| `C_greet_04` | Pega a visão: tenta durar mais de vinte lances. |
| `C_greet_05` | Bó! Eu já sei como isso termina. |

### Início de partida entre 2 jogadores
*Quando toca:* Ao começar uma partida a dois; o Zé assiste. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `C_greet2p_01` | Dois abestalhados no mesmo tabuleiro. Vou pegar a pipoca, meu rei. |
| `C_greet2p_02` | Que vença o menos pior, viu? |

### Lance comum do jogador
*Quando toca:* Às vezes, depois de um lance sem nada especial. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `C_idle_01` | Hum. |
| `C_idle_02` | Tá, e daí, véi? |
| `C_idle_03` | Já vi esse filme, mermão. Termina barril pra tu. |
| `C_idle_04` | Se adiante aí que eu tenho compromisso. |
| `C_idle_05` | Interessante. Errado, mas interessante. |
| `C_idle_06` | Oxe. Que lance... existente. |
| `C_idle_07` | Bocejo, viu. |

### Jogador entrega peça ou erra feio
*Quando toca:* O jogador piorou muito a própria posição. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_playerBlunder_01` | Ó paí ó! Obrigado pelo presente, meu rei. |
| `C_playerBlunder_02` | Oxe, tu tá jogando do meu lado, foi? |
| `C_playerBlunder_03` | Vixe! Foi de propósito? Fala que foi. |
| `C_playerBlunder_04` | Eu ia brocar de qualquer jeito, mas valeu a ajuda, viu? |
| `C_playerBlunder_05` | Que lance armengado, véi. Anotado. |

### Jogador acerta um lance forte
*Quando toca:* O jogador melhorou a posição; o Zé disfarça o incômodo. *Emoção:* irritado.

| ID | Fala |
|---|---|
| `C_playerGood_01` | Sorte de principiante, viu? |
| `C_playerGood_02` | Tá, esse foi massa. Não espalha. |
| `C_playerGood_03` | Alguém andou assistindo vídeo de xadrez, foi? |
| `C_playerGood_04` | É niuma, tô só te deixando confiante. |
| `C_playerGood_05` | Hum. Peguei ar com esse. |

### Zé vê mate a favor dele
*Quando toca:* O Zé enxergou um mate forçado. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_botMating_01` | Já era, pae. Tu só não sabe ainda. |
| `C_botMating_02` | Pode ir arrumando as peças pra próxima, viu? |
| `C_botMating_03` | Tá sentindo esse cheirinho? É de mate, meu rei. |

### Zé vai levar mate
*Quando toca:* O jogador tem mate forçado contra o Zé. *Emoção:* irritado.

| ID | Fala |
|---|---|
| `C_botMated_01` | Oxe... isso não tá acontecendo. |
| `C_botMated_02` | Para de olhar pra mim assim, véi. |
| `C_botMated_03` | Calma, Zé. Não pegue ar. Não pegue ar. |

### Jogador dá xeque
*Quando toca:* Depois de um xeque do jogador. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `C_playerCheck_01` | Xeque? Que fofo, véi. |
| `C_playerCheck_02` | Vixe, xeque. Tô tremendo, viu? |
| `C_playerCheck_03` | Xeque por xeque. Clássico de quem não tem plano. |

### Jogador captura peça do Zé
*Quando toca:* Depois de uma captura do jogador. *Emoção:* irritado.

| ID | Fala |
|---|---|
| `C_playerCapture_01` | Ei! Isso era meu, discarado! |
| `C_playerCapture_02` | Pegou minha peça? Isso é crocodilagem, viu? |
| `C_playerCapture_03` | Tá, pega. Eu tenho outras, meu rei. |

### Jogador faz roque
*Quando toca:* Depois de um roque do jogador. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `C_playerCastle_01` | Rocou? Amoitando o rei, é? Medroso. |
| `C_playerCastle_02` | Roque. Prudente. Xoxo, mas prudente. |

### Jogador promove peão
*Quando toca:* Depois de uma promoção do jogador. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `C_playerPromo_01` | Dama nova? Espótico. |
| `C_playerPromo_02` | Promoveu. Quer um troféu, pivete? |

### Zé dá xeque
*Quando toca:* Depois de um xeque do Zé. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_botCheck_01` | Xeque! Sente o drama, véi. |
| `C_botCheck_02` | Xeque! Arrudeia, reizinho, arrudeia. |
| `C_botCheck_03` | Toc toc. Xeque, meu rei. |

### Zé captura peça
*Quando toca:* Depois de uma captura do Zé. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_botCapture_01` | Essa eu vou levar, viu? |
| `C_botCapture_02` | Nham. Peça fresquinha, zero bala. |
| `C_botCapture_03` | Uma peça a menos pra tu se preocupar. |

### Jogador desfaz lance
*Quando toca:* Ao usar o botão Desfazer. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_undo_01` | Voltando lance, véi? Na vida real não tem Ctrl+Z não. |
| `C_undo_02` | Desfaz, desfaz. Eu finjo que não vi, viu? |
| `C_undo_03` | Arrependido? Deixe de migué. |

### Jogador pede dica
*Quando toca:* Ao usar o botão Dica. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_hint_01` | Pedindo cola pro computador. Que bonito, viu? |
| `C_hint_02` | Essa dica aí não fui eu que dei não, tá? Eu não ajudo inimigo. |
| `C_hint_03` | Usa a dica, meu rei. Eu broco do mesmo jeito. |

### Zé vence
*Quando toca:* Xeque-mate a favor do Zé. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_botWins_01` | Xeque-mate! Pode chorar, eu espero, viu? |
| `C_botWins_02` | Mate, meu rei. Foi massa. Pra mim. |
| `C_botWins_03` | Acabou. Quer tentar num nível mais baixo, abestalhado? |
| `C_botWins_04` | Quem brocou fui eu. Mais um pra coleção. |

### Jogador abandona
*Quando toca:* O jogador desistiu da partida. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_playerResigns_01` | Pipocou, foi? Decisão mais inteligente da partida. |
| `C_playerResigns_02` | Deu um zig, foi? Eu entendo, eu também teria medo de mim. |

### Jogador perde no tempo
*Quando toca:* O relógio do jogador zerou. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_playerFlag_01` | Acabou teu tempo, véi. Relógio também é xadrez, viu? |
| `C_playerFlag_02` | Tic tac, aluado. Perdeu no tempo. |

### Zé perde (primeira reação)
*Quando toca:* O jogador deu mate no Zé. *Emoção:* irritado (explosão).

| ID | Fala |
|---|---|
| `C_botLoses_01` | NÃO! Oxe, não, não, não. Isso foi o lag! |
| `C_botLoses_02` | Ah, que massa. Parabéns. Tá feliz? Tá feliz agora, é? |
| `C_botLoses_03` | Eu tava jogando com uma mão só, viu? E de olho fechado! |
| `C_botLoses_04` | Isso não conta, véi. O tabuleiro tava armengado! |
| `C_botLoses_05` | Tô na bruxa. Tô virado no cão agora. |

### Zé perde (resmungo seguinte)
*Quando toca:* Uns 3 segundos depois da primeira reação. *Emoção:* irritado (emburrado).

| ID | Fala |
|---|---|
| `C_botLoses2_01` | E não, eu não quero revanche não. |
| `C_botLoses2_02` | Vou fingir que essa partida não existiu, viu? |
| `C_botLoses2_03` | Quer saber? Revanche. Agora. Se adiante! |
| `C_botLoses2_04` | Vou contar pra todo mundo que foi empate, viu? |

### Zé perde no tempo
*Quando toca:* O relógio do Zé zerou. *Emoção:* irritado.

| ID | Fala |
|---|---|
| `C_botFlag_01` | O relógio tá contra mim. Isso é crocodilagem! |
| `C_botFlag_02` | Perdi no tempo?! Eu tava castelando um lance barril dobrado! |

### Empate
*Quando toca:* Partida empatada. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `C_draw_01` | Empate. Considera uma vitória moral, viu? Sua, que é o máximo que dá. |
| `C_draw_02` | Empate? Que coisa xoxa. |
| `C_draw_03` | Ninguém ganhou. Principalmente tu. |

### Afogamento com o Zé ganhando
*Quando toca:* Empate por afogamento quando o Zé estava na frente. *Emoção:* irritado.

| ID | Fala |
|---|---|
| `C_stalemateMad_01` | Afogamento?! Oxe, eu tava GANHANDO! |
| `C_stalemateMad_02` | Afogamento. Aonde! Eu me recuso a aceitar isso. |

### Comentário de arquibancada
*Quando toca:* Partida a 2: depois de uma captura. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `C_spec_01` | Ó paí ó, sangue no tabuleiro. |
| `C_spec_02` | Tá ficando barril. |
| `C_spec_03` | Vixe, hein. |
| `C_spec_04` | Hum. Corajoso, viu? |

### Xeque na arquibancada
*Quando toca:* Partida a 2: depois de um xeque. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `C_specCheck_01` | Xeque! Agora ficou massa. |
| `C_specCheck_02` | Xeque. Alguém tá avexado. |

### Fim da partida a 2
*Quando toca:* Partida a 2 terminada ({w} = Brancas ou Pretas). *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_specEnd_01_brancas` | Brancas venceram. O outro lado pode ir treinar, viu? |
| `C_specEnd_01_pretas` | Pretas venceram. O outro lado pode ir treinar, viu? |

### Início da análise
*Quando toca:* Ao abrir a análise de uma partida. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `C_anaStart_01` | Bora ver o estrago, véi. |
| `C_anaStart_02` | Se plante aí que lá vem análise. |

### Análise vazia
*Quando toca:* Ao abrir a aba Analisar sem partida. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `C_noAna_01` | Oxe, nada pra analisar. Joga primeiro, depois a gente conversa. |

### Resumo da análise (partida a 2)
*Quando toca:* Ao terminar a análise; vem depois das porcentagens lidas em texto. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_sum2p_01` | Ninguém aqui vai pra torneio não, viu? Aperta o play que eu comento. |

### Resumo: jogador jogou bem
*Quando toca:* Precisão de 85% ou mais. *Emoção:* irritado (contrariado).

| ID | Fala |
|---|---|
| `C_sumHigh_01` | Até que brocou, viu? Não vou repetir isso não. Aperta o play. |

### Resumo: jogador mediano
*Quando toca:* Precisão entre 65% e 85%. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_sumMid_01` | Mediano, véi. Bem xoxo. Aperta o play que eu te mostro onde doeu. |

### Resumo: jogador jogou mal
*Quando toca:* Precisão abaixo de 65%. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_sumLow_01` | Ó paí ó... a precisão fala por si. Aperta o play e segura o coração. |

### Análise: melhor lance do jogador
*Quando toca:* Revisão de um lance perfeito do jogador. *Emoção:* surpreso a contragosto.

| ID | Fala |
|---|---|
| `C_aBest_01` | Achou o melhor lance. Relógio parado também acerta duas vezes por dia, viu? |
| `C_aBest_02` | Melhor lance. Não se acostume não. |
| `C_aBest_03` | Brocou. Vou fingir que não fiquei surpreso. |

### Análise: lance excelente
*Quando toca:* Revisão de um lance quase perfeito. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `C_aExc_01` | Massa. Não vou aplaudir de pé, mas tá aceitável. |
| `C_aExc_02` | Quase perfeito, véi. Quase. |

### Análise: lance bom
*Quando toca:* Revisão de um lance ok. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `C_aGood_01` | Lance ok. Nada que vá pro livro de história. |
| `C_aGood_02` | Passável. Bora. |
| `C_aGood_03` | Normalzinho. Próximo. |

### Análise: imprecisão
*Quando toca:* Revisão de um lance impreciso. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_aInacc_01` | Hum. Meio aluado esse. |
| `C_aInacc_02` | Dava pra caprichar mais, né não? |
| `C_aInacc_03` | Lance armengado, daqueles que depois cobra caro. |

### Análise: erro
*Quando toca:* Revisão de um erro. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_aMist_01` | Oxe! Pensou nisso por quantos segundos? |
| `C_aMist_02` | Erro, véi. E não foi pequeno. |
| `C_aMist_03` | Ó paí ó. Que coisa feia. |

### Análise: gafe
*Quando toca:* Revisão de uma gafe. *Emoção:* debochado (escandalizado).

| ID | Fala |
|---|---|
| `C_aBlun_01` | GAFE! Eu vi, o tabuleiro viu, o Pelourinho inteiro viu. |
| `C_aBlun_02` | Isso foi uma doação, não um lance, viu? |
| `C_aBlun_03` | Vixe Maria. Precisava de duas mãos pra cobrir a cara agora. |

### Análise: lance bom do próprio Zé
*Quando toca:* Revisão de um lance bom do Zé. *Emoção:* convencido.

| ID | Fala |
|---|---|
| `C_aOwnGood_01` | Lance meu. Porreta, obviamente. |
| `C_aOwnGood_02` | Pega a visão: é assim que se faz. |
| `C_aOwnGood_03` | Brocou, como sempre. |

### Análise: erro do próprio Zé
*Quando toca:* Revisão de um erro do Zé; ele dá desculpa. *Emoção:* irritado (sem graça).

| ID | Fala |
|---|---|
| `C_aOwnBad_01` | Isso foi de propósito, viu? Tava te dando uma chance. |
| `C_aOwnBad_02` | Escorregou o mouse. Acontece com os grandes. |
| `C_aOwnBad_03` | Não comenta. Na moral, não comenta. |

### Volta da linha melhor
*Quando toca:* Depois de mostrar a sequência melhor na revisão guiada. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `C_back_01` | Bora voltar pro jogo de verdade. |
| `C_back_02` | Pronto. Agora volta pra realidade triste, viu? |
| `C_back_03` | De volta ao que aconteceu de fato, meu rei. |

### Início de exercício
*Quando toca:* Ao abrir um exercício no Treino. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_trainStart_01` | Bora ver se aprendeu alguma coisa, pivete. |
| `C_trainStart_02` | Mesma posição em que tu vacilou. Sem pressão, viu? |
| `C_trainStart_03` | Acha o lance aí. Eu espero, de prega. |

### Exercício: errou
*Quando toca:* O jogador errou o exercício. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_trainWrong_01` | Errou de novo, véi. Consistência admirável. |
| `C_trainWrong_02` | Aonde! Tenta outra vez, meu rei. |
| `C_trainWrong_03` | Quase. Mentira, nem perto. |

### Exercício: acertou
*Quando toca:* O jogador acertou o exercício. *Emoção:* surpreso a contragosto.

| ID | Fala |
|---|---|
| `C_trainRight_01` | Brocou! Milagre acontece, viu? |
| `C_trainRight_02` | Correto. Viu como não doía? |
| `C_trainRight_03` | Ó paí ó, tem salvação. |

### Exercício: pediu a solução
*Quando toca:* O jogador clicou em Ver solução. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `C_trainSol_01` | Pipocou rápido, hein. Tá aí a resposta. |

## Roteiro sem censura

### Apresentação
*Quando toca:* Ao abrir o jogo ou trocar a linguagem. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_hello_01` | Colé, disgraça! Eu sou o Zé Roque. Escolhe o nível aí que eu vou te amassar, viu? |
| `S_hello_02` | Oxe, chegou mais um miséra pra apanhar. Zé Roque, prazer, porra. |

### Início de partida contra o Zé
*Quando toca:* Ao começar uma partida contra o bot ({lvl} = nível escolhido). *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_greet_01` | Bora, miséra. Isso vai ser rapidinho, porra. |
| `S_greet_02_n1` | Nível 1? Tu é corajoso ou é abestalhado mesmo, disgraça? |
| `S_greet_02_n2` | Nível 2? Tu é corajoso ou é abestalhado mesmo, disgraça? |
| `S_greet_02_n3` | Nível 3? Tu é corajoso ou é abestalhado mesmo, disgraça? |
| `S_greet_02_n4` | Nível 4? Tu é corajoso ou é abestalhado mesmo, disgraça? |
| `S_greet_02_n5` | Nível 5? Tu é corajoso ou é abestalhado mesmo, disgraça? |
| `S_greet_03` | Se plante aí, seu puto, e prepara o lenço. |
| `S_greet_04` | Pega a visão, cabrunco: tenta durar mais de vinte lances. |

### Início de partida entre 2 jogadores
*Quando toca:* Ao começar uma partida a dois; o Zé assiste. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `S_greet2p_01` | Dois tabacudos no mesmo tabuleiro. Vou pegar a pipoca, porra. |
| `S_greet2p_02` | Que vença o menos jumento. |

### Lance comum do jogador
*Quando toca:* Às vezes, depois de um lance sem nada especial. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `S_idle_01` | Hum. |
| `S_idle_02` | Tá, e daí, porra? |
| `S_idle_03` | Já vi esse filme, miséra. Termina barril pra tu. |
| `S_idle_04` | Se adiante, bago mole, que eu tenho compromisso. |
| `S_idle_05` | Que lance existente da porra. |
| `S_idle_06` | Oxe, roda presa, joga logo. |

### Jogador entrega peça ou erra feio
*Quando toca:* O jogador piorou muito a própria posição. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_playerBlunder_01` | Ó paí ó, que presente da porra! Valeu, miséra. |
| `S_playerBlunder_02` | Tu tá jogando do meu lado, seu tabacudo? |
| `S_playerBlunder_03` | Caralho, véi! Foi de propósito? Fala que foi, disgraça. |
| `S_playerBlunder_04` | Que lance armengado da porra. Obrigado, abestalhado. |
| `S_playerBlunder_05` | Besta quadrada! Anotado, viu? |

### Jogador acerta um lance forte
*Quando toca:* O jogador melhorou a posição; o Zé disfarça o incômodo. *Emoção:* irritado.

| ID | Fala |
|---|---|
| `S_playerGood_01` | Sorte de principiante, seu puto. |
| `S_playerGood_02` | Tá, esse foi bom, miseravão. Não espalha, porra. |
| `S_playerGood_03` | Ô disgraça, quem te ensinou isso? |
| `S_playerGood_04` | Peguei ar com essa, seu cabrunco. |

### Zé vê mate a favor dele
*Quando toca:* O Zé enxergou um mate forçado. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_botMating_01` | Já era, miséra. Tu só não sabe ainda. |
| `S_botMating_02` | Pode ir arrumando as peças, seu Zé ruela. |
| `S_botMating_03` | Sente o cheiro, disgraça? É de mate. |

### Zé vai levar mate
*Quando toca:* O jogador tem mate forçado contra o Zé. *Emoção:* irritado.

| ID | Fala |
|---|---|
| `S_botMated_01` | Que porra é essa?! |
| `S_botMated_02` | Para de olhar pra mim assim, seu sacana. |
| `S_botMated_03` | Calma, Zé. Não pega ar, porra. Não pega ar. |

### Jogador dá xeque
*Quando toca:* Depois de um xeque do jogador. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `S_playerCheck_01` | Xeque? Que fofo, seu bocó. |
| `S_playerCheck_02` | Xeque por xeque, seu bago mole. Não tem plano não, é? |

### Jogador captura peça do Zé
*Quando toca:* Depois de uma captura do jogador. *Emoção:* irritado.

| ID | Fala |
|---|---|
| `S_playerCapture_01` | Ei, seu discarado da porra! Isso era meu! |
| `S_playerCapture_02` | Pegou minha peça, crocodilo? Vou lembrar disso, viu, disgraça. |
| `S_playerCapture_03` | Pega, seu fuleiro. Eu tenho outras. |

### Jogador faz roque
*Quando toca:* Depois de um roque do jogador. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `S_playerCastle_01` | Amoitou o rei, seu cagão? Ó paí ó. |
| `S_playerCastle_02` | Roque. Xoxo da porra, mas prudente. |

### Jogador promove peão
*Quando toca:* Depois de uma promoção do jogador. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `S_playerPromo_01` | Dama nova, seu espótico do caralho? |

### Zé dá xeque
*Quando toca:* Depois de um xeque do Zé. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_botCheck_01` | Xeque, porra! Arrudeia, reizinho. |
| `S_botCheck_02` | Toc toc, disgraça. Xeque. |

### Zé captura peça
*Quando toca:* Depois de uma captura do Zé. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_botCapture_01` | Essa é minha, seu miséra. |
| `S_botCapture_02` | Nham. Peça fresquinha, abestalhado. |
| `S_botCapture_03` | Toma, seu Zé mané. Uma a menos. |

### Jogador desfaz lance
*Quando toca:* Ao usar o botão Desfazer. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_undo_01` | Voltando lance, seu migueloso? Na vida real não tem Ctrl+Z não, porra. |
| `S_undo_02` | Desfaz, desfaz, seu xibiateiro. |

### Jogador pede dica
*Quando toca:* Ao usar o botão Dica. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_hint_01` | Pedindo cola, seu boca de me-dê? Que vergonha da porra. |
| `S_hint_02` | Essa dica não fui eu não, viu, disgraça. Eu não ajudo inimigo. |

### Zé vence
*Quando toca:* Xeque-mate a favor do Zé. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_botWins_01` | Xeque-mate, porra! Pode chorar, seu tabacudo. |
| `S_botWins_02` | Mate, miséra. Vá se lenhar, viu? Com carinho. |
| `S_botWins_03` | Acabou, jumento. Quer tentar no nível 1? |
| `S_botWins_04` | Quem brocou fui eu, caralho! Mais um pra coleção. |

### Jogador abandona
*Quando toca:* O jogador desistiu da partida. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_playerResigns_01` | Pipocou, seu bago mole? Melhor decisão da partida, porra. |
| `S_playerResigns_02` | Deu um zig, foi, cagão? Eu também teria medo de mim. |

### Jogador perde no tempo
*Quando toca:* O relógio do jogador zerou. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_playerFlag_01` | Acabou teu tempo, seu aluado da porra. Relógio também é xadrez. |
| `S_playerFlag_02` | Tic tac, roda presa. Perdeu no tempo, disgraça. |

### Zé perde (primeira reação)
*Quando toca:* O jogador deu mate no Zé. *Emoção:* irritado (explosão).

| ID | Fala |
|---|---|
| `S_botLoses_01` | PORRA! Não, não, não, isso foi o lag, caralho! |
| `S_botLoses_02` | Seu filho de uma égua! Tá feliz? Tá feliz agora, é? |
| `S_botLoses_03` | Que disgraça é essa?! Eu tava jogando com uma mão só! |
| `S_botLoses_04` | Tô virado no cão, véi! Esse tabuleiro é armengado da porra! |
| `S_botLoses_05` | Seu cabrunco da desgraça! Ganhou na sorte! |

### Zé perde (resmungo seguinte)
*Quando toca:* Uns 3 segundos depois da primeira reação. *Emoção:* irritado (emburrado).

| ID | Fala |
|---|---|
| `S_botLoses2_01` | E não, eu não quero revanche não, porra. |
| `S_botLoses2_02` | Vá se lascar, viu? ... Tá, revanche. Agora. |
| `S_botLoses2_03` | Vou contar pra todo mundo que foi empate, seu pombo sujo. |
| `S_botLoses2_04` | Se pique da minha frente! ... Não, espera, joga de novo. |

### Zé perde no tempo
*Quando toca:* O relógio do Zé zerou. *Emoção:* irritado.

| ID | Fala |
|---|---|
| `S_botFlag_01` | Que porra de relógio é esse?! Isso é crocodilagem! |
| `S_botFlag_02` | Perdi no tempo, caralho?! Eu tava castelando um lance barril dobrado! |

### Empate
*Quando toca:* Partida empatada. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `S_draw_01` | Empate, porra. Considera vitória moral, miséra. |
| `S_draw_02` | Empate? Que coisa xoxa do caralho. |

### Afogamento com o Zé ganhando
*Quando toca:* Empate por afogamento quando o Zé estava na frente. *Emoção:* irritado.

| ID | Fala |
|---|---|
| `S_stalemateMad_01` | Afogamento?! Que disgraça é essa?! Eu tava GANHANDO, porra! |
| `S_stalemateMad_02` | Afogamento. Aonde, porra! Eu me recuso. |

### Comentário de arquibancada
*Quando toca:* Partida a 2: depois de uma captura. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `S_spec_01` | Ó paí ó, sangue no tabuleiro, porra. |
| `S_spec_02` | Tá ficando barril, caralho. |
| `S_spec_03` | Vixe, disgraça. |

### Xeque na arquibancada
*Quando toca:* Partida a 2: depois de um xeque. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `S_specCheck_01` | Xeque, porra! Agora ficou massa. |
| `S_specCheck_02` | Xeque. Alguém tá se cagando. |

### Fim da partida a 2
*Quando toca:* Partida a 2 terminada ({w} = Brancas ou Pretas). *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_specEnd_01_brancas` | Brancas venceram, porra. O outro lado é bago mole. |
| `S_specEnd_01_pretas` | Pretas venceram, porra. O outro lado é bago mole. |

### Início da análise
*Quando toca:* Ao abrir a análise de uma partida. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `S_anaStart_01` | Bora ver o estrago, disgraça. |
| `S_anaStart_02` | Se plante aí, seu puto, que lá vem análise. |

### Análise vazia
*Quando toca:* Ao abrir a aba Analisar sem partida. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `S_noAna_01` | Oxe, analisar o quê, porra? Joga primeiro. |

### Resumo da análise (partida a 2)
*Quando toca:* Ao terminar a análise; vem depois das porcentagens lidas em texto. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_sum2p_01` | Dois bago mole. Aperta o play, porra. |

### Resumo: jogador jogou bem
*Quando toca:* Precisão de 85% ou mais. *Emoção:* irritado (contrariado).

| ID | Fala |
|---|---|
| `S_sumHigh_01` | Ô miseravão, até que brocou, porra. Aperta o play. |

### Resumo: jogador mediano
*Quando toca:* Precisão entre 65% e 85%. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_sumMid_01` | Mediano da porra. Aperta o play que eu te mostro onde doeu. |

### Resumo: jogador jogou mal
*Quando toca:* Precisão abaixo de 65%. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_sumLow_01` | Que disgraça foi essa, véi? Aperta o play e segura o coração. |

### Análise: melhor lance do jogador
*Quando toca:* Revisão de um lance perfeito do jogador. *Emoção:* surpreso a contragosto.

| ID | Fala |
|---|---|
| `S_aBest_01` | Ô miseravão, achou o melhor lance! |
| `S_aBest_02` | Melhor lance, disgraça. Não se acostume não. |
| `S_aBest_03` | Brocou, porra. Tô até surpreso. |

### Análise: lance excelente
*Quando toca:* Revisão de um lance quase perfeito. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `S_aExc_01` | Massa, miséra. Não vou aplaudir, mas tá aceitável. |
| `S_aExc_02` | Quase perfeito, seu puto. Quase. |

### Análise: lance bom
*Quando toca:* Revisão de um lance ok. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `S_aGood_01` | Lance ok. Nada demais, porra. |
| `S_aGood_02` | Passável, seu Zé ruela. Bora. |

### Análise: imprecisão
*Quando toca:* Revisão de um lance impreciso. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_aInacc_01` | Hum. Aluado da porra esse. |
| `S_aInacc_02` | Lance armengado, seu bago mole. |
| `S_aInacc_03` | Dava pra caprichar mais, né não, disgraça? |

### Análise: erro
*Quando toca:* Revisão de um erro. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_aMist_01` | Que porra é essa?! Pensou quantos segundos? |
| `S_aMist_02` | Erro, seu abestalhado. E dos grandes. |
| `S_aMist_03` | Ó paí ó, que merda. |

### Análise: gafe
*Quando toca:* Revisão de uma gafe. *Emoção:* debochado (escandalizado).

| ID | Fala |
|---|---|
| `S_aBlun_01` | GAFE, caralho! O Pelourinho inteiro viu, seu tabacudo! |
| `S_aBlun_02` | Isso foi doação, seu jumento da porra! |
| `S_aBlun_03` | Que disgraça é essa?! Vá se lenhar com esse lance! |

### Análise: lance bom do próprio Zé
*Quando toca:* Revisão de um lance bom do Zé. *Emoção:* convencido.

| ID | Fala |
|---|---|
| `S_aOwnGood_01` | Lance meu. Porreta da porra. |
| `S_aOwnGood_02` | Pega a visão, miséra: é assim que se faz. |
| `S_aOwnGood_03` | Brocou, caralho. Como sempre. |

### Análise: erro do próprio Zé
*Quando toca:* Revisão de um erro do Zé; ele dá desculpa. *Emoção:* irritado (sem graça).

| ID | Fala |
|---|---|
| `S_aOwnBad_01` | Foi de propósito, porra! Tava te dando chance. |
| `S_aOwnBad_02` | Escorregou o mouse, caralho. Acontece. |
| `S_aOwnBad_03` | Não comenta, disgraça. Na moral. |

### Volta da linha melhor
*Quando toca:* Depois de mostrar a sequência melhor na revisão guiada. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `S_back_01` | Bora voltar pro desastre de verdade, miséra. |
| `S_back_02` | Pronto. De volta à tua realidade triste da porra. |

### Início de exercício
*Quando toca:* Ao abrir um exercício no Treino. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_trainStart_01` | Bora ver se aprendeu alguma coisa, seu jumento. |
| `S_trainStart_02` | Mesma posição em que tu vacilou, miséra. Sem pressão. |

### Exercício: errou
*Quando toca:* O jogador errou o exercício. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_trainWrong_01` | Errou de novo, seu tabacudo. |
| `S_trainWrong_02` | Aonde, porra! Tenta outra vez. |
| `S_trainWrong_03` | Besta quadrada. Vai de novo. |

### Exercício: acertou
*Quando toca:* O jogador acertou o exercício. *Emoção:* surpreso a contragosto.

| ID | Fala |
|---|---|
| `S_trainRight_01` | Ô miseravão! Brocou! |
| `S_trainRight_02` | Ó paí ó, a disgraça acertou! |
| `S_trainRight_03` | Correto, porra. Tem salvação. |

### Exercício: pediu a solução
*Quando toca:* O jogador clicou em Ver solução. *Emoção:* debochado.

| ID | Fala |
|---|---|
| `S_trainSol_01` | Pipocou rápido, seu bago mole. Tá aí a resposta. |

## Falas de apoio (novas)

### Falas de apoio (novas)
*Quando toca:* Antes de mostrar o melhor lance na análise. *Emoção:* neutro marrento.

| ID | Fala |
|---|---|
| `A_apoio_certo` | O certo era esse aqui, ó. |
| `A_apoio_certo_proprio` | Tá, o certo era esse aqui. |
| `A_apoio_linha` | Olha como era pra ser. |
| `A_apoio_brancas` | Brancas: |
| `A_apoio_pretas` | Pretas: |
| `A_apoio_fim_revisao` | Fim da revisão. |
