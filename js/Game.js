class Game extends Phaser.Scene {
  constructor() {
    super("Game");
  }
  preload() {

  }
  create() {
    const phaser = this;

    // Sprites
    game.draggable = this.physics.add.sprite(500, 0, "").setCollideWorldBounds(true);

    // Sprite setup
    game.draggable.setInteractive();
    game.draggable.setDragX(500);
    this.input.setDraggable(game.draggable);

    // Mouse input
    this.input.on("pointerdown", function () {
      game.pointerDown = true;
    });
    this.input.on("pointerup", function () {
      game.pointerDown = false;
    });
    this.input.on("drag", function (pointer, sprite, x, y) {
      sprite.setGravityY(-config.physics.arcade.gravity.y);
      sprite.x = x;
      sprite.y = y;
    });
    this.input.on("dragend", function (pointer, sprite) {
      sprite.setGravityY(config.physics.arcade.gravity.y);
      if (pointer.x < sprite.x) {
        sprite.setVelocityX(-800);
      } else if (pointer.x > sprite.x) {
        sprite.setVelocityX(800);
      } else {
        sprite.setVelocityX(0);
      }
    })
  }
  update() {

  }
}
