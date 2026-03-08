class Intro extends Phaser.Scene{
  constructor(){
    super("Intro")
  }
  preload(){
    this.playintro = false;
    this.eventoflor = false;
    
  }
  create(){
    this.cameras.main.fadeIn(800);
    this.intro = this.add.video(640, 360, 'intro').setScale(1.5, 1.5);
    this.flor = this.add.image(640, 360, 'flor').setInteractive();
    this.flor.on('pointerdown', () => {
      this.eventoflor = true;
    });
      this.intro.on('complete', () => {
        this.scene.start("Menu");
      });
    this.txt = this.add.text(520, 100, 'TOQUE NA IMAGEM!', {
      fontFamily: 'dsttf', 
      fontSize: '32px',
      color: '#00FF00',
    });
  }
  update(dt){
    if (this.flor.alpha <= 0){
      this.playintro = true;
      this.intro.setLoop(false);
      this.intro.play();
    }
    if (this.eventoflor && this.flor.alpha >= 0){
      this.flor.alpha -= 0.05;
      this.txt.alpha -= 0.05;
    }
  }
}