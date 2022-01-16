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
    game.pointer = this.add.image(0, 0, "pointer");

    // Sprite groups
    game.pointerTrail = this.physics.add.staticGroup();

    // Sprite setup
    game.pointer.visible = false;
    game.draggable.setInteractive();

    // Mouse input
    this.input.on("pointerdown", function () {
      game.pointer.visible = true;
      game.pointer.down = true;
    });
    this.input.on("pointerup", function () {
      game.pointer.down = false;
      game.pointer.visible = false;
    });
    this.input.on("drag", function (pointer, sprite, x, y) {
      sprite.x = x;
      sprite.y = y;
    });
    this.input.setDraggable(game.draggable);
  }
  update() {
    if (game.pointer.down) {
      let trail = game.pointerTrail.create(game.pointer.x, game.pointer.y, "pointer");
      trail.counter = 0;
    }
    game.pointer.x = this.input.mousePointer.x;
    game.pointer.y = this.input.mousePointer.y;
    game.pointerTrail.getChildren().forEach(sprite => {
      sprite.counter++;
      sprite.alpha = sprite.counter * 0.15;
      if (sprite.counter >= 5) {
        sprite.destroy();
      }
    });
  }
}
