class Noiteum extends Phaser.Scene {
    constructor() {
        super("Noiteum"); // nome da cena
    }
  
    preload(){
      this.cam_ab = false;
      this.cam_esq = false;
      this.cam_dir = true;
      this.cam_select = 0;
      this.load.image('escritorio', "sprites/escritorio.png");
      this.load.image('cam_down', "sprites/cam_down.png");
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
      this.load.image('mapa', "sprites/mapa.png");
    }
  
    create(){
      this.cameras.main.fadeIn(800);
      this.esc = this.add.image(640, 360, 'escritorio');
      this.cam_btn = this.add.image(700, 322, 'cam_btn').setScale(0.15, 0.12);
      this.cams = this.add.sprite(640, 360, 'cam1').setVisible(false);
      this.cam_down = this.add.image(640, 640, 'cam_down').setScale(0.3, 0.3)
      .setVisible(false)
      .setInteractive();
      this.cam_btn.setInteractive();
      this.input.on('pointerdown', (pointer) => {
        if (pointer.x <= 220) {
          this.cam_esq = true;
          this.cam_dir = false;
          
        }
        if (pointer.x >= 800){
          if (this.cam_esq == true){
            this.cam_dir = true;
            this.cam_esq = false;
          }
        }
      });
      //cam anim
      
      this.anims.create({
        key: 'abrir_cam',
        frames: [
          {key: 'ab_cam1'},
          {key: 'ab_cam2'},
          {key: 'ab_cam3'},
          {key: 'ab_cam4'},
          {key: 'ab_cam5'},
          {key: 'ab_cam6'}
        ],
        frameRate: 18,
        repeat: 0
      });
      this.anims.create({
        key: 'fechar_cam',
        frames: [
          {key: 'ab_cam6'},
          {key: 'ab_cam5'},
          {key: 'ab_cam4'},
          {key: 'ab_cam3'},
          {key: 'ab_cam2'},
          {key: 'ab_cam1'}
        ],
        frameRate: 18,
        repeat: 0
      });
      this.cam_btn.on("pointerdown", () => {
        if (this.cam_anim) {
          this.cam_anim.destroy();
        }
        this.cam_anim = this.add.sprite(640, 360, 'ab_cam1').setScale(0.68, 0.68);
        this.cam_anim.play('abrir_cam');
        this.cam_ab = true;
        this.cam_anim.on('animationcomplete', (anim, frame) => {
           if (anim.key === 'abrir_cam') {
             this.cam_anim.destroy();
             this.cams.setVisible(true);
             this.mapa = this.add.image(1000, 410, 'mapa').setScale(0.6, 0.6);
             this.cam_down.setVisible(true);
           // terminou essa anim
      }
       });
        
        
      });
      this.cam_down.on('pointerdown', () => {
        
        this.mapa.setVisible(false);
        this.cams.setVisible(false);
        this.cam_down.setVisible(false);
        this.cam_anim = this.add.sprite(640, 360, 'ab_cam1').setScale(0.68, 0.68);
        this.cam_anim.play('fechar_cam');
        this.cam_anim.on('animationcomplete', (anim, frame) => {
          if (anim.key === 'fechar_cam'){
            this.cam_anim.destroy();
          }
          
        });
      });
      //fim cam anim
      //cams 
      
      
    }
  
    update(){
    if (this.cam_esq){
      if (this.esc.x <= 950 && this.cam_dir == false){
        this.esc.x += 11; 
        this.cam_btn.x += 11;
      }
    } 
    if (this.cam_dir){
      if (this.esc.x >= 640 && this.cam_esq == false){
        this.esc.x -= 11;
        this.cam_btn.x -= 11;
      }
    }
    
    if (this.cams && this.cams.visible){
      this.cams.setTexture('cam' + (this.cam_select + 1));
    }
    
    }
}