import { PRELOADED_KEYS } from './preloadScene';

import { defaultText } from './../cm-phaser-library/src/objects/textStyles';

export default class MainScene extends Phaser.Scene {

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.add.text(800, 600, 'hello', defaultText).setOrigin(.5);
    this.add.sprite(800, 800, PRELOADED_KEYS.ORANGEBTN);
  }

  update() {
    
  }
}
