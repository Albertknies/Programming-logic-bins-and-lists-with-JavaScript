let xAtor = 60;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}
function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yAtor += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    xAtor -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xAtor += 3;
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarro,
      xAtor,
      yAtor,
      15
    );
    if (colisao) {
      voltaAtorParaPosicaoInicial();
      somDaColisao.play();
      somDaColisao.setVolume(0.4);

      if (pontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 366;
}

function incluiPontos() {
  fill(color(255, 0, 255));
  textAlign(CENTER);
  textSize(25);
  text(meusPontos, width / 5, 25);
}

function marcaPonto() {
  if (yAtor < 0) {
    meusPontos += 1;
    somDosPontos.play();
    somDosPontos.setVolume(0.4);
    voltaAtorParaPosicaoInicial();
  }
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}
function podeSeMover() {
  return yAtor < 366;
}
