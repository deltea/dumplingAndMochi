class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }
  preload() {
    // Load images
    this.load.image("pointer", "assets/pointer.png");
  }
  create() {
    const phaser = this;

    // Sprites
    game.draggable = this.add.circle(700, 300, 100, 0x4ED4FC);

    // Sprite setup
    game.draggable.setInteractive();

    // Mouse input
    this.input.on("pointerdown", function () {
      game.pointerDown = true;
    });
    this.input.on("pointerup", function () {
      game.pointerDown = false;
    });
    this.input.on("drag", function (pointer, sprite, x, y) {
      sprite.x = x;
      sprite.y = y;
    });
    this.input.setDraggable(game.draggable);
  }
  update() {

  }
}
