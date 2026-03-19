class Noiteum extends Phaser.Scene {
    constructor() {
        super("Noiteum"); // nome da cena
    }
  
    preload(){
      this.last_cam = null
      this.cam_ab = false;
      this.cam_esq = false;
      this.cam_dir = true;
      this.cam_select = 1;
      this.load.image('escritorio', "sprites/escritorio.png");
      this.load.image('cam_down', "sprites/cam_down.png");
      this.min = 0;
      this.hora = 12;
      this.txtrel = (this.hora.toString().padStart(2,'0') + ":" + this.min.toString().padStart(2,'0'))
    }  
    create(){
      this.IABase();
      
      this.cameras.main.fadeIn(800);
      this.esc = this.add.image(640, 360, 'escritorio');
      this.mover = this.add.image(40, 280, "mover1")
      .setVisible(false)
      .setInteractive();
      this.mover.setScale(0.35, 0.35);
      this.cam_btn = this.add.image(700, 322, 'cam_btn').setScale(0.15, 0.12);
      this.cams = this.add.sprite(640, 360, 'cam1').setVisible(false);
      this.cams.setOrigin(0.5);
      this.cams.setDisplaySize(1280, 720);
      this.cam_down = this.add.image(640, 640, 'cam_down').setScale(0.3, 0.3)
      .setVisible(false)
      .setInteractive();
      this.mapa = this.add.image(1000, 410, 'mapa').setScale(0.6, 0.6) 
      .setVisible(false);
      this.backdoor = this.add.image(640, 360, "backdoor")
      .setVisible(false);
      this.backdoor.setScale(0.7, 0.7);
      
      this.moverdois = this.add.image(1100, 360, "mover2")
      .setInteractive();
      this.moverdois.setScale(0.3, 0.3)
      this.moverdois.setVisible(false);
      
      
      this.relogio = this.add.text(50, 50, this.txtrel, {
        fontFamily:"dsttf",
        fontSize: "55px",
        color: "#00FF00",
      });
      
      for (let i = 1; i <= 14; i++) {
  this['cb' + i] = this.add.image(1000, 410, 'camsbtn' + i)
    .setScale(0.6)
    .setInteractive({ pixelPerfect: true })
    .setVisible(false);

  this['cb' + i].on('pointerdown', () => {
    this.cam_select = i;
  });
}
      
      this.cam_btn.setInteractive();
      this.esc.setInteractive();
      this.esc.on('pointermove', (pointer) => {
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
        this.cam_btn.disableInteractive();
        this.cam_anim = this.add.sprite(640, 360, 'ab_cam1').setScale(0.68, 0.68);
        this.cam_anim.play('abrir_cam');
        this.cam_ab = true;
        
        this.cam_anim.on('animationcomplete', (anim, frame) => {
           if (anim.key === 'abrir_cam') {
             this.cam_anim.destroy();
             this.cams.setVisible(true);
             
             this.mapa.setVisible(true);
             this.cb1.setVisible(true);
             this.cb2.setVisible(true);
             this.cb3.setVisible(true);
             this.cb4.setVisible(true);
             this.cb5.setVisible(true);
             this.cb6.setVisible(true);
             this.cb7.setVisible(true);
             this.cb8.setVisible(true);
             this.cb9.setVisible(true);
             this.cb10.setVisible(true);
             this.cb11.setVisible(true);
             this.cb12.setVisible(true);
             this.cb13.setVisible(true);
             this.cb14.setVisible(true);
             this.cam_down.setVisible(true);
           // terminou essa anim
      };
       });
        
        
      });
      this.mover.on('pointerdown', () => {
        this.cameras.main.fadeOut(500);
        this.backdoor.setVisible(true);
        this.moverdois.setVisible(true);
        this.cameras.main.fadeIn(500);
      });
      this.moverdois.on('pointerdown', () => {
        this.cameras.main.fadeOut(500);
        this.backdoor.setVisible(false);
        this.moverdois.setVisible(false);
        this.cameras.main.fadeIn(500);
      });
      this.cam_down.on('pointerdown', () => {
        
        this.mapa.setVisible(false);
        this.cams.setVisible(false);
        this.cam_down.setVisible(false);
        this.cb1.setVisible(false);
        this.cb2.setVisible(false); 
        this.cb3.setVisible(false);
        this.cb4.setVisible(false);
        this.cb5.setVisible(false);
        this.cb6.setVisible(false);
        this.cb7.setVisible(false);
        this.cb8.setVisible(false); 
        this.cb9.setVisible(false);
        this.cb10.setVisible(false);
        this.cb11.setVisible(false);
        this.cb12.setVisible(false);
        this.cb13.setVisible(false);
        this.cb14.setVisible(false);
        
        this.cam_anim = this.add.sprite(640, 360, 'ab_cam1').setScale(0.68, 0.68);
        this.cam_anim.play('fechar_cam');
        
        this.cam_anim.on('animationcomplete', (anim, frame) => {
          if (anim.key === 'fechar_cam'){
            this.cam_anim.destroy();
            this.cam_btn.setInteractive();
          }
          
        }); 
        
      });
      //fim cam anim
      //cams 

    }
  
  update(time, delta){
  this.min += delta / 1000; 

  if (this.min >= 60) {
   this.hora += 1;
    this.min = 0;
  }

  if (this.hora >= 13) {
    this.hora = 1;
  }

  this.txtrel = this.hora.toString().padStart(2,'0') + ":" + Math.floor(this.min).toString().padStart(2,'0');

  this.relogio.setText(this.txtrel);
    if (this.cam_esq){
      if (this.esc.x <= 950 && this.cam_dir == false){
        this.esc.x += 11; 
        this.cam_btn.x += 11;
        this.mover.setVisible(true);
        this.mover.x += 11;
      }
    } 
    if (this.cam_dir){
      if (this.esc.x >= 640 && this.cam_esq == false){
        this.esc.x -= 11;
        this.cam_btn.x -= 11;
        this.mover.setVisible(false);
        this.mover.x -= 11;
      }
    }
    
    if (this.cams.visible){
        switch(this.cam_select){
          case this.Jcam:
            if(this.Janim == 0){
            this.cams.setTexture('Jolly' + this.cam_select);
            this.last_cam = this.cam_select;
            
            } else {
              this.cams.setTexture('Jolly' + this.cam_select + "_" + this.Janim);
              this.last_cam = this.cam_select;
            }
            break;
          
          default:
            this.cams.setTexture('cam' + this.cam_select);
            this.last_cam = this.cam_select;
        }
      }
    
    
    this.IAt += delta;
    if (this.IAt >= this.IAtimer){
      this.action = Phaser.Math.Between(0, 10);
      
      this.reload();
      console.log("tic tac");
      this.IAt = 0;
    }
 }


IABase(){
  this.IAtimer = 10000
  this.IAt = 0;
  this.action = 0;
  this.jolly = 2;
  this.Janim = 1;
  this.Jpath = false;
  this.Jcam = 2;
  this.yum = 3;
  this.Ypath = false;
  this.Yanim = 0;
  
 }
 reload(){
    switch (true){
      case (this.action <= this.jolly):
        this.Jpath = true;
        console.log("j");
        break;
      case (this.action <= this.yum):
        this.Ypath = true;
        break;
      default:
      break;
    }
    if (this.Jpath == true){
      switch (true){
        
        case (this.Jcam == 2 && this.Janim == 1):
          this.Jcam = 2;
          this.Janim = 2;
          this.Jpath = false;
          break
        case (this.Jcam == 2 && this.Janim == 2):
          this.Jcam = 2; 
          this.Janim = 3;
          this.Jpath = false;
          break
        case (this.Jcam == 2 && this.Janim == 3):
          this.Jcam = 5; 
          this.Janim = 0;
          this.Jpath = false;
          break
        case ( this.Jcam == 5 && this.Janim == 0):
          this.Jcam = 7; 
          this.Janim = 1;
          this.Jpath = false;
          break
        case ( this.Jcam == 7 && this.Janim == 1):
          this.Jcam = 7; 
          this.Janim = 2;
          this.Jpath = false;
          break
        case ( this.Jcam == 7 && this.Janim == 2):
          this.Jcam = 8; 
          this.Janim = 1;
          this.Jpath = false;
          break
          case ( this.Jcam == 8 && this.Janim == 1):
            this.Jcam = 8; 
            this.Janim = 2;
            this.Jpath = false;
          break
          default:
            break;
      }
    }
  }
}