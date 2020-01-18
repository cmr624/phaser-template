export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {
    this.loadDefault();

  }

  private loadDefault() {
    this.load.image('blue-btn', '/assets/img/default/bluebtn.png');
    this.load.image('orange-btn', '/assets/img/default/orangebtn.png');
    this.load.image('circle', '/assets/img/default/circle.png');
    this.load.image('pointy', '/assets/img/default/pointy.png');
    this.load.image('triangle', '/assets/img/default/triangle.png');
    this.load.image('square', '/assets/img/default/square.png');
  }

  create() {
    this.scene.start('MainScene');
  }
}
