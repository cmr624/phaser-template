import { PRELOADED_KEYS } from './../../utils/dist/preloadedKeyObject';
export default class PreloadScene extends Phaser.Scene {
  constructor() {
  
    super({ key: 'PreloadScene' });
  }
  preload() {
    Object.keys(PRELOADED_KEYS).forEach((e) => {
      this.load.image(e['key'], e['path']);
    })
  }
  create() {
    this.scene.start('MainScene');
  }
}
