class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }
  preload() {

  }
  create() {
    game.pointer = this.add.circle(500, 500, 8, 0x000000);
    game.pointer.visible = false;
    this.input.on("pointerdown", function () {
      game.pointer.visible = true;
    });
    this.input.on("pointerup", function () {
      game.pointer.visible = false;
    });
  }
  update() {
    game.pointer.x = this.input.mousePointer.x;
    game.pointer.y = this.input.mousePointer.y;
  }
}
