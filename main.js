const config = {
    type: Phaser.WEBGL,
    width: 1280,
    height: 720,
    scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
   },
    backgroundColor: "#000000",

    // aqui você coloca suas cenas (por enquanto só uma cena vazia)
    scene: [
      Loading,
      Intro,
      Menu,
      Configs,
      Noiteum
      ]
};

// INICIA O JOGO
const game = new Phaser.Game(config);