export default class PreloadScene extends Phaser.Scene {
  constructor() {
  
    super({ key: 'PreloadScene' });
  }
  preload() {
    this.load.image('bluebtn', 'src/assets/img/default/bluebtn.png');
    this.load.image('circle', 'src/assets/img/default/circle.png');
    this.load.image('orangebtn', 'src/assets/img/default/orangebtn.png');
    this.load.image('pointy', 'src/assets/img/default/pointy.png');
    this.load.image('square', 'src/assets/img/default/square.png');
    this.load.image('triangle', 'src/assets/img/default/triangle.png');
  }
  create() {
    this.scene.start('MainScene');
  }
}
export const PRELOADED_KEYS = {"BLUEBTN":"bluebtn","CIRCLE":"circle","ORANGEBTN":"orangebtn","POINTY":"pointy","SQUARE":"square","TRIANGLE":"triangle"}