export default class MainScene extends Phaser.Scene {
  fpsText: Phaser.GameObjects.Text

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.add.text(800, 600, 'hello').setOrigin(.5);
  }

  update() {
    
  }
}
