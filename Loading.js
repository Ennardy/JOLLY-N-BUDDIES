class Loading extends Phaser.Scene{
  constructor(){
    super("Loading")
  }
  
  preload(){
    //Loading
    this.load.font('dsttf', "fontes/ds.ttf");
    this.load.video('intro', "sprites/intro.mp4");
    this.load.image('flor', "sprites/flor.png");
    // menu
    
    this.load.image('menubg', "sprites/menubg.png");
    this.load.image('playbtn', "sprites/start.png");
    this.load.image('title', "sprites/title.png");
    
    
    
    // configs
    this.load.image('select', "sprites/select.png");
    this.load.image('noiteUm', "sprites/noiteUm.png");
    
    
    // noite um
          //cam anims
      this.load.image('cam_btn', "sprites/cam_btn.png");
      this.load.image('ab_cam1', "sprites/camera_anim1.png");
      this.load.image('ab_cam2', "sprites/camera_anim2.png");
      this.load.image('ab_cam3', "sprites/camera_anim3.png");
      this.load.image('ab_cam4', "sprites/camera_anim4.png");
      this.load.image('ab_cam5', "sprites/camera_anim5.png");
      this.load.image('ab_cam6', "sprites/camera_anim6.png");
      //fim cam anims
      //cams normais
      this.load.image('cam1', "sprites/cam_1.png");
      this.load.image('cam2', "sprites/cam_2.png");
      this.load.image('cam3', "sprites/cam_3.png");
      this.load.image('cam4', "sprites/cam_4.png");
      this.load.image('cam5', "sprites/cam_5.png");
      this.load.image('cam6', "sprites/cam_6.png");
      this.load.image('cam7', "sprites/cam_7.png");
      this.load.image('cam8', "sprites/cam_8.png");
      this.load.image('cam9', "sprites/cam_9.png");
      this.load.image('cam10', "sprites/cam_10.png");
      this.load.image('cam11', "sprites/cam_11.png");
      this.load.image('cam12', "sprites/cam_1a.png");
      this.load.image('cam13', "sprites/cam_2a.png");
      this.load.image('cam14', "sprites/cam_3a.png");
      this.load.image('mapa', "sprites/mapa.png");
      // cam btn
      this.load.image("camsbtn1", "sprites/cambtn1.png");
      this.load.image("camsbtn2", "sprites/cambtn2.png");
      this.load.image("camsbtn3", "sprites/cambtn3.png");
      this.load.image("camsbtn4", "sprites/cambtn4.png");
      this.load.image("camsbtn5", "sprites/cambtn5.png");
      this.load.image("camsbtn6", "sprites/cambtn6.png");
      this.load.image("camsbtn7", "sprites/cambtn7.png");
      this.load.image("camsbtn8", "sprites/cambtn8.png");
      this.load.image("camsbtn9", "sprites/cambtn9.png");
      this.load.image("camsbtn10", "sprites/cambtn10.png");
      this.load.image("camsbtn11", "sprites/cambtn11.png");
      this.load.image("camsbtn12", "sprites/cambtn1a.png");
      this.load.image("camsbtn13", "sprites/cambtn2a.png");
      this.load.image("camsbtn14", "sprites/cambtn3a.png");
      // jolly
      this.load.image("Jolly2_1", "sprites/jolly_cam2_1.png");
      this.load.image("Jolly2_2", "sprites/jolly_cam2_2.png");
      this.load.image("Jolly2_3", "sprites/jolly_cam2_3.png");
      this.load.image("Jolly5", "sprites/jolly_cam5.png");
      this.load.image("Jolly7_1", "sprites/jolly_cam7_1.png");
      this.load.image("Jolly7_2", "sprites/jolly_cam7_2.png");
      this.load.image("Jolly8_1", "sprites/jolly_cam8_1.png");
      this.load.image("Jolly8_2", "sprites/jolly_cam8_2.png");
      // backdoor 
      this.load.image("backdoor", "sprites/backdoor.png");
      this.load.image("backdoor2", "sprites/backdoor2.png");
      this.load.image("mover1", "sprites/mover1.png");
      this.load.image("mover2", "sprites/mover2.png");
      
  }
  
  create(){
    
    this.scene.start("Intro");
    
    
    
    
    
  }
}