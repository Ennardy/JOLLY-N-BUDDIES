class Configs extends Phaser.Scene {
    constructor() {
        super("Configs"); // nome da cena
    }

    preload() {
        // carregamento (por enquanto vazio)
        
        
        
    }

    create() {
        // todo código inicial da cena vai aqui
        this.cameras.main.fadeIn(800);
        this.add.image(0, 0, 'select').setOrigin(0, 0)
        .setScale(0.7, 0.7);
        this.noiteum = this.add.image(100, 100, 'noiteUm').setScale(0.5, 0.5);
        this.noiteum.setInteractive();
        this.noiteum.on('pointerdown', () => {
          this.noiteum.setScale(0.6, 0.6);
        });
        this.noiteum.on('pointerup', () => {
          this.noiteum.setScale(0.5, 0.5);
          this.cameras.main.fadeOut(800, 0, 0, 0);
          this.cameras.main.once('camerafadeoutcomplete', () => {
          this.scene.start("Noiteum")
          });
          this.noiteum.disableInteractive()
        });
        
        
    }
    update() {
        // atualização contínua (vazio)
    }
}


