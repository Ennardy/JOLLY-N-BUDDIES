class Loading extends Phaser.Scene{
  constructor(){
    super("Loading")
  }
  
  preload(){
    // menu
    this.scale.startFullscreen();
    this.load.image('menubg', "sprites/menubg.png");
    this.load.image('playbtn', "sprites/start.png");
    this.load.image('title', "sprites/title.png");
    
    
    
    // configs
    this.load.image('select', "sprites/select.png");
    this.load.image('noiteUm', "sprites/noiteUm.png");
    
    
    // noite um
  }
  
  create(){
    
    this.scene.start("Menu");
    
  }
}