class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }
  preload() {

  }
  create() {
    game.pointer = this.add.circle(500, 500, 8, 0x000000);
  }
  update() {

  }
}
