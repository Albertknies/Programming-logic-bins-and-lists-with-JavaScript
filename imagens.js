let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

//sons do jogo

let somDaTrilha;
let somDaColisao;
let somDoPonto;

function preload() {
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/mae.PNG");
  imagemCarro = loadImage("imagens/pai.png");
  imagemCarro2 = loadImage("imagens/tefa.PNG");
  imagemCarro3 = loadImage("imagens/alisson.PNG");
  imagemCarro4 = loadImage("imagens/albert.PNG");
  imagemCarro5 = loadImage("imagens/gi.PNG");
  imagemCarro6 = loadImage("imagens/rafa.PNG");

  imagemCarros = [
    imagemCarro,
    imagemCarro2,
    imagemCarro3,
    imagemCarro4,
    imagemCarro5,
    imagemCarro6,
  ];

  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.ogg");
  somDosPontos = loadSound("sons/pontos.ogg");
}
