
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class camerame {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__camerame"] = this;

		/* START-USER-CTR-CODE */
		const scene = this.gameObject.scene;
		this.gameObject.setSize(1200,0)
		this.cursors = scene.input.keyboard.createCursorKeys();
		scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	/** @returns {camerame} */
	static getComponent(gameObject) {
		return gameObject["__camerame"];
	}

	/** @type {Phaser.GameObjects.mecamera} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.
	update() {
		if (this.cursors.left.isDown) {
			this.gameObject.body.setVelocityX(-300);
		}
		else if (this.cursors.right.isDown) {
			this.gameObject.body.setVelocityX(300);
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
