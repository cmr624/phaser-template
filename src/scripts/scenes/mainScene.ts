import { defaultText } from './../cm-phaser-library/src/objects/textStyles';
export default class MainScene extends Phaser.Scene {
  fpsText: Phaser.GameObjects.Text

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.add.text(800, 600, 'hello', defaultText).setOrigin(.5);
  }

  update() {
    
  }
}
