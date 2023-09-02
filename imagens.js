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
  imagemDaEstrada = loadImage("img/estrada.png");
  imagemDoAtor = loadImage("img/mae.png");
  imagemCarro = loadImage("img/1.png");
  imagemCarro2 = loadImage("img/tefa.png");
  imagemCarro3 = loadImage("img/alisson.png");
  imagemCarro4 = loadImage("img/albert.png");
  imagemCarro5 = loadImage("img/gi.png");
  imagemCarro6 = loadImage("img/rafa.png");

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
