
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class player_anims {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__player_anims"] = this;

		/* START-USER-CTR-CODE */
		const scene = this.gameObject.scene;
		this.cursors = scene.input.keyboard.createCursorKeys();
		scene.events.on(Phaser.Scenes.Events.UPDATE, this.update, this);
		/* END-USER-CTR-CODE */
	}

	/** @returns {player_anims} */
	static getComponent(gameObject) {
		return gameObject["__player_anims"];
	}

	/** @type {Phaser.GameObjects.anims_player} */
	gameObject;

	/* START-USER-CODE */

	update() {
		
		if (this.cursors.left.isDown && sanime == true) {

			this.gameObject.anims.play("player_run",true);
			this.gameObject.flipX = true;
			
		}

		else if (this.cursors.right.isDown && sanime == true) {

			this.gameObject.anims.play("player_run",true);
			this.gameObject.flipX = false;
			
		}

		else if (this.cursors.up.isDown && sanime == true) {
			this.gameObject.anims.play("player_run",true);
			
		}

		else if (this.cursors.down.isDown && sanime == true) {
			this.gameObject.anims.play("player_run",true);
			
		}

		else if(sanime == true) {
				
			this.gameObject.anims.play("player_idle",true);

		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
