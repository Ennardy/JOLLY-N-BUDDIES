const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
   },
    backgroundColor: "#1d1d1d",

    // aqui você coloca suas cenas (por enquanto só uma cena vazia)
    scene: [
      Menu,
      Configs,
      Noiteum
      ]
};

// INICIA O JOGO
const game = new Phaser.Game(config);