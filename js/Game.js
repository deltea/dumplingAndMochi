class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }
  preload() {

  }
  create() {
    // Sprites
    game.draggable = this.add.circle(700, 300, 100, 0x4ED4FC);
    game.pointer = this.add.circle(500, 500, 8, 0x000000);

    // Sprite setup
    game.pointer.visible = false;
    game.draggable.setInteractive();

    // Mouse input
    this.input.on("pointerdown", function () {
      game.pointer.visible = true;
    });
    this.input.on("pointerup", function () {
      game.pointer.visible = false;
    });
    this.input.on("drag", function (pointer, sprite, x, y) {
      sprite.x = x;
      sprite.y = y;
    });
    this.input.setDraggable(game.draggable);
  }
  update() {
    game.pointer.x = this.input.mousePointer.x;
    game.pointer.y = this.input.mousePointer.y;
  }
}
