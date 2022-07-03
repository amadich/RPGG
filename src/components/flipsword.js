
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class flipsword {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__flipsword"] = this;

		/* START-USER-CTR-CODE */
		const scene = this.gameObject.scene;
		this.cursors = scene.input.keyboard.createCursorKeys();
		scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	/** @returns {flipsword} */
	static getComponent(gameObject) {
		return gameObject["__flipsword"];
	}

	/** @type {Phaser.GameObjects.sword} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.
	update() {
		if (this.cursors.left.isDown) {
			this.gameObject.flipX = true;
			this.gameObject.x = -30;
			this.gameObject.angle = +30;
		}

		else if (this.cursors.right.isDown) {
			this.gameObject.flipX = false;
			this.gameObject.x =  30;
			this.gameObject.angle = -30;
		}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
