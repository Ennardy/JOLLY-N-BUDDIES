class Menu extends Phaser.Scene {
    constructor() {
        super("Menu"); // nome da cena
    }

    preload() {
        // carregamento (por enquanto vazio)
        this.scale.startFullscreen();
       this.load.image('menubg', "sprites/menubg.png");
       this.load.image('playbtn', "sprites/start.png");
       this.load.image('title', "sprites/title.png");
    }

    create() {
        this.cameras.main.fadeIn(800);
        // todo código inicial da cena vai aqui
        this.add.image(640, 360, 'menubg').setScale(2, 2);
        this.add.image(300, 0, 'title').setOrigin(0.1, 0.1)
        .setScale(0.4, 0.4);
        this.playbtn = this.add.image(150, 500, 'playbtn').setInteractive()
        .setScale(0.6, 0.6);
        
        this.playbtn.on('pointerdown', () => {
          this.playbtn.setScale(0.63, 0.63);
          }); 
        this.playbtn.on('pointerup', () => {
          this.playbtn.setScale(0.6, 0.6)
        this.cameras.main.fadeOut(800, 0, 0, 0);
        this.cameras.main.once('camerafadeoutcomplete', () => {
          this.scene.start('Configs'); 
          });
        this.playbtn.disableInteractive();
        });
    }
    update() {
        // atualização contínua (vazio)
    }
}


