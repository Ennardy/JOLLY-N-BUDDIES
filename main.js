const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 400,
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