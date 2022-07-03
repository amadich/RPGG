
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class movement {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__movement"] = this;

		/* START-USER-CTR-CODE */
		const scene = this.gameObject.scene;
		this.cursors = scene.input.keyboard.createCursorKeys();
		scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	/** @returns {movement} */
	static getComponent(gameObject) {
		return gameObject["__movement"];
	}

	/** @type {Phaser.GameObjects.chracter} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.
	update() {
		if (this.cursors.left.isDown) {
			this.gameObject.body.setVelocityX(-60);
			//this.gameObject.anims.play("player_run",true);
			//this.gameObject.flipX = true;
		}

		else if (this.cursors.right.isDown) {
			this.gameObject.body.setVelocityX(60);
			//this.gameObject.anims.play("player_run",true);
			//this.gameObject.flipX = false;
		}

		else if (this.cursors.up.isDown) {
			this.gameObject.body.setVelocityY(-60);
		}

		else if (this.cursors.down.isDown) {
			this.gameObject.body.setVelocityY(60);
		}

		else {
			this.gameObject.body.setVelocityX(0);
			this.gameObject.body.setVelocityY(0);
			//this.character.anims.play("player_idle",true);

		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
