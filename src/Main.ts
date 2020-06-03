import * as Phaser from 'phaser';

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'demo',
 
  type: Phaser.AUTO,
  
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    width: 800,
    height: 600,
    parent: 'content'
  },
 
  backgroundColor: '#000000',
  scene:  [],
};
 
const Game = new Phaser.Game(gameConfig);


