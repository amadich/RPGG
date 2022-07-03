
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// map
		const map = this.add.tilemap("map");
		map.addTilesetImage("RTS_medieval@2", "RTS_medieval@2");

		// map_1
		const map_1 = this.add.tilemap("map");
		map_1.addTilesetImage("RTS_medieval@2", "RTS_medieval@2");

		// back_1
		const back_1 = map.createLayer("back", ["RTS_medieval@2"], 0, 0);

		// zone_map
		const zone_map = this.add.ellipse(486, 347, 128, 128);
		zone_map.scaleX = 8;
		zone_map.scaleY = 8;
		zone_map.visible = false;
		zone_map.alpha = 0.05;
		zone_map.isFilled = true;
		zone_map.fillColor = 2486530;

		// medievalEnvironment_03
		const medievalEnvironment_03 = this.add.sprite(644, 455, "medievalEnvironment_03");
		medievalEnvironment_03.scaleX = 1.5;
		medievalEnvironment_03.scaleY = 1.5;

		// medievalEnvironment_01
		const medievalEnvironment_01 = this.add.sprite(87, 491, "medievalEnvironment_01");
		medievalEnvironment_01.scaleX = 1.5;
		medievalEnvironment_01.scaleY = 1.5;

		// medievalEnvironment
		const medievalEnvironment = this.add.sprite(84, 138, "medievalEnvironment_03");
		medievalEnvironment.scaleX = 1.5;
		medievalEnvironment.scaleY = 1.5;

		// medievalEnvironment_1
		const medievalEnvironment_1 = this.add.sprite(121, 180, "medievalEnvironment_01");

		// medievalEnvironment_2
		const medievalEnvironment_2 = this.add.sprite(674, 502, "medievalEnvironment_01");

		// medievalEnvironment_3
		const medievalEnvironment_3 = this.add.sprite(721, 112, "medievalEnvironment_03");
		medievalEnvironment_3.scaleX = 1.5;
		medievalEnvironment_3.scaleY = 1.5;

		// medievalEnvironment_4
		const medievalEnvironment_4 = this.add.sprite(239, 263, "medievalEnvironment_03");
		medievalEnvironment_4.scaleX = 1.5;
		medievalEnvironment_4.scaleY = 1.5;

		// medievalEnvironment_5
		const medievalEnvironment_5 = this.add.sprite(584, 258, "medievalEnvironment_01");
		medievalEnvironment_5.scaleX = 1.5;
		medievalEnvironment_5.scaleY = 1.5;

		// tree_1
		const tree_1 = map_1.createLayer("tree", ["RTS_medieval@2"], 0, 0);
		tree_1.visible = false;

		// monsterB
		const monsterB = this.add.container(550, 300);

		// zone_monster1
		const zone_monster1 = this.add.ellipse(0, 5, 128, 128);
		zone_monster1.alpha = 0.2;
		zone_monster1.isFilled = true;
		monsterB.add(zone_monster1);

		// shade_2
		const shade_2 = this.add.ellipse(4, 23, 128, 128);
		shade_2.scaleX = 0.5;
		shade_2.scaleY = 0.15;
		shade_2.alpha = 0.5;
		shade_2.isFilled = true;
		shade_2.fillColor = 2236962;
		monsterB.add(shade_2);

		// monster1
		const monster1 = this.add.sprite(0, 0, "goblrn", "2D_GOBLIN__Idle_Blinking_000.png");
		monster1.scaleX = 0.13;
		monster1.scaleY = 0.13;
		monsterB.add(monster1);

		// bubble_m_1
		const bubble_m_1 = this.add.sprite(4, -47, "vector_style1", "emote__.png");
		bubble_m_1.scaleX = 0.8;
		bubble_m_1.scaleY = 0.8;
		monsterB.add(bubble_m_1);

		// monsterB_1
		const monsterB_1 = this.add.container(473, 252);

		// zone_monster
		const zone_monster = this.add.ellipse(0, 5, 128, 128);
		zone_monster.alpha = 0.2;
		zone_monster.isFilled = true;
		monsterB_1.add(zone_monster);

		// shade_1
		const shade_1 = this.add.ellipse(1, 23, 128, 128);
		shade_1.scaleX = 0.5;
		shade_1.scaleY = 0.15;
		shade_1.alpha = 0.5;
		shade_1.isFilled = true;
		shade_1.fillColor = 2236962;
		monsterB_1.add(shade_1);

		// monster
		const monster = this.add.sprite(0, 0, "goblrn", "2D_GOBLIN__Idle_Blinking_000.png");
		monster.scaleX = 0.13;
		monster.scaleY = 0.13;
		monsterB_1.add(monster);

		// bubble_m
		const bubble_m = this.add.sprite(5, -46, "vector_style1", "emote__.png");
		bubble_m.scaleX = 0.8;
		bubble_m.scaleY = 0.8;
		monsterB_1.add(bubble_m);

		// user_inerface
		const user_inerface = this.add.container(355, 547);

		// b1
		const b1 = this.add.image(2, 0, "ui_block");
		user_inerface.add(b1);

		// b2
		const b2 = this.add.image(60, 0, "ui_block");
		user_inerface.add(b2);

		// b3
		const b3 = this.add.image(120, 0, "ui_block");
		user_inerface.add(b3);

		// b4
		const b4 = this.add.image(180, 0, "ui_block");
		user_inerface.add(b4);

		// select_b
		const select_b = this.add.rectangle(2, 0, 128, 128);
		select_b.scaleX = 0.3;
		select_b.scaleY = 0.3;
		select_b.alpha = 0.2;
		select_b.isFilled = true;
		select_b.fillColor = 11496;
		user_inerface.add(select_b);

		// sword01
		const sword01 = this.add.image(4, 0, "Sword01");
		sword01.scaleX = 0.1;
		sword01.scaleY = 0.1;
		sword01.angle = -90;
		user_inerface.add(sword01);

		// gun01
		const gun01 = this.add.image(61, 0, "Gun01");
		gun01.scaleX = 0.07;
		gun01.scaleY = 0.1;
		gun01.angle = -90;
		user_inerface.add(gun01);

		// player
		const player = this.add.container(153, 327);

		// shade
		const shade = this.add.ellipse(-3, 28, 128, 128);
		shade.scaleX = 0.5;
		shade.scaleY = 0.15;
		shade.alpha = 0.5;
		shade.isFilled = true;
		shade.fillColor = 2236962;
		player.add(shade);

		// character
		const character = this.add.sprite(0, 0, "player", "JK_P_Sword__Idle_000.png");
		character.scaleX = 0.15;
		character.scaleY = 0.15;
		player.add(character);

		// player_name
		const player_name = this.add.text(-18, 34, "", {});
		player_name.text = "Tomi";
		player_name.setStyle({ "color": "#ffffffff", "fontFamily": "monospace" });
		player.add(player_name);

		// bubble
		const bubble = this.add.sprite(-4, -50, "vector_style1", "emote__.png");
		bubble.scaleX = 0.8;
		bubble.scaleY = 0.8;
		player.add(bubble);

		// blood
		const blood = this.add.container(-153, -327);
		player.add(blood);

		// back_blood
		const back_blood = this.add.rectangle(153, 381, 128, 128);
		back_blood.scaleX = 0.5;
		back_blood.scaleY = 0.05;
		back_blood.alpha = 0.5;
		back_blood.isFilled = true;
		back_blood.fillColor = 2236962;
		blood.add(back_blood);

		// set_blood
		const set_blood = this.add.rectangle(153, 381, 128, 128);
		set_blood.scaleX = 0.5;
		set_blood.scaleY = 0.03;
		set_blood.alpha = 0.7;
		set_blood.isFilled = true;
		set_blood.fillColor = 16711680;
		blood.add(set_blood);

		// lists
		const atree = [medievalEnvironment_03, medievalEnvironment_01, medievalEnvironment, medievalEnvironment_1, medievalEnvironment_2, medievalEnvironment_3, medievalEnvironment_4, medievalEnvironment_5];

		// player (components)
		new movement(player);

		// character (components)
		new player_anims(character);

		this.back_1 = back_1;
		this.zone_map = zone_map;
		this.tree_1 = tree_1;
		this.monsterB = monsterB;
		this.zone_monster1 = zone_monster1;
		this.monster1 = monster1;
		this.bubble_m_1 = bubble_m_1;
		this.monsterB_1 = monsterB_1;
		this.zone_monster = zone_monster;
		this.monster = monster;
		this.bubble_m = bubble_m;
		this.user_inerface = user_inerface;
		this.b1 = b1;
		this.b2 = b2;
		this.b3 = b3;
		this.b4 = b4;
		this.select_b = select_b;
		this.player = player;
		this.character = character;
		this.bubble = bubble;
		this.set_blood = set_blood;
		this.map = map;
		this.map_1 = map_1;
		this.atree = atree;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Tilemaps.TilemapLayer} */
	back_1;
	/** @type {Phaser.GameObjects.Ellipse} */
	zone_map;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	tree_1;
	/** @type {Phaser.GameObjects.Container} */
	monsterB;
	/** @type {Phaser.GameObjects.Ellipse} */
	zone_monster1;
	/** @type {Phaser.GameObjects.Sprite} */
	monster1;
	/** @type {Phaser.GameObjects.Sprite} */
	bubble_m_1;
	/** @type {Phaser.GameObjects.Container} */
	monsterB_1;
	/** @type {Phaser.GameObjects.Ellipse} */
	zone_monster;
	/** @type {Phaser.GameObjects.Sprite} */
	monster;
	/** @type {Phaser.GameObjects.Sprite} */
	bubble_m;
	/** @type {Phaser.GameObjects.Container} */
	user_inerface;
	/** @type {Phaser.GameObjects.Image} */
	b1;
	/** @type {Phaser.GameObjects.Image} */
	b2;
	/** @type {Phaser.GameObjects.Image} */
	b3;
	/** @type {Phaser.GameObjects.Image} */
	b4;
	/** @type {Phaser.GameObjects.Rectangle} */
	select_b;
	/** @type {Phaser.GameObjects.Container} */
	player;
	/** @type {Phaser.GameObjects.Sprite} */
	character;
	/** @type {Phaser.GameObjects.Sprite} */
	bubble;
	/** @type {Phaser.GameObjects.Rectangle} */
	set_blood;
	/** @type {Phaser.Tilemaps.Tilemap} */
	map;
	/** @type {Phaser.Tilemaps.Tilemap} */
	map_1;
	/** @type {Phaser.GameObjects.Sprite[]} */
	atree;

	/* START-USER-CODE */

	// Write more your code here

	create() {
		this.input.setDefaultCursor('url(assets/cursor.png), pointer');

		this.editorCreate();

		this.cameras.main.zoom = 1;

			// camera

			this.cameras.main.setBounds(0, 0, this.back_1.displayWidth, this.back_1.displayHeight);
			//this.cameras.main.startFollow(this.user_inerface);
			this.cameras.main.startFollow(this.player);
			//this.user_inerface.fixedToCamera = true;
			this.user_inerface.setScrollFactor(0)
			this.user_inerface.setDepth(+3);
			//

		// Background
		this.back_1.setDepth(-1);
		// Player 
		this.player.setSize(32,64);
		this.physics.world.enable(this.player);
		this.character.smoothed = false;
		this.character.antialiasing = false;

		// Objet tiles -- tree(s)
		this.tree_1.smoothed = false;
		this.tree_1.antialiasing = false;

		this.back_1.smoothed = false;
		this.back_1.antialiasing = false;

		// Monster1
		this.monster1.anims.play("monster1_idle",true);
		this.monster1.smoothed = false;
		this.monster1.antialiasing = false;
		// Monster
		this.monster.anims.play("monster1_idle",true);
		this.monster.smoothed = false;
		this.monster.antialiasing = false;

		// Tailent King
		this.player.setInteractive();
		this.player.on("pointerdown", () => {
			this.character.anims.play("player_att",true);
		});

		this.bubble.anims.play("msg_wait",true);
		this.bubble_m.anims.play("msg_sleep",true);
		this.bubble_m_1.anims.play("msg_sleep",true);
			// Inverntorie

			this.b1.setInteractive();
			this.b1.on("pointerdown", ()=> {
				this.tweens.add({
					targets: this.select_b,
					x: 2,
					ease: 'Power1',
					duration: 300,
					yoyo: false,
					repeat: 0,
				});
			})

			this.b2.setInteractive();
			this.b2.on("pointerdown", ()=> {

				this.tweens.add({
					targets: this.select_b,
					x: 60,
					ease: 'Power1',
					duration: 300,
					yoyo: false,
					repeat: 0,
				});
			})


				//console.log(this.atree[0]);

				 this.cursors = this.input.keyboard.createCursorKeys();





					// Collider -- - overlap
					this.physics.world.enable(this.zone_monster);
					this.physics.world.enable(this.zone_monster1);
					this.physics.world.enable(this.monsterB);
					this.physics.world.enable(this.monsterB_1);
					this.monsterB.body.setCircle(16,-15,-15);
					this.zone_monster1.body.setCircle(64,0,0);

					this.monsterB_1.body.setCircle(16,-15,-15);
					this.zone_monster.body.setCircle(64,0,0);

						this.physics.add.collider(this.monsterB_1,this.monsterB);

					this.physics.add.overlap(this.zone_monster1, this.player, () => {
						//this.monsterB.body.velocity.setTo(100, 100);
						//console.log(this.monsterB.body.x)
						//this.monsterB.body.x = this.player.body.x;
						//this.monsterB.body.y = this.player.body.y;
						//
						this.bubble_m.anims.play("msg_what",true);
						this.bubble_m_1.anims.play("msg_what",true);
						this.bubble.anims.play("msg_anger",true);
						//
					this.monster1.anims.play("monster1_run",true);
					this.monster.anims.play("monster1_run",true);
					this.ok = true;

					}, null);


					this.physics.add.overlap(this.zone_monster, this.player, () => {
						//this.monsterB.body.velocity.setTo(100, 100);
						//console.log(this.monsterB.body.x)
						//this.monsterB.body.x = this.player.body.x;
						//this.monsterB.body.y = this.player.body.y;
						//
						this.bubble_m.anims.play("msg_what",true);
						this.bubble_m_1.anims.play("msg_what",true);
						this.bubble.anims.play("msg_anger",true);
						//
					this.monster.anims.play("monster1_run",true);
					this.monster1.anims.play("monster1_run",true);
					this.ok = true;

					}, null);





			// damege player

						this.physics.add.overlap(this.monsterB,this.player, () => {
							//console.log("he is damege");

								//sanime = false;

							//this.character.anims.play("player_damege",true);
						}, null);

						this.physics.world.enable(this.zone_map);
						this.physics.add.overlap(this.zone_map,this.player, () => {
							//console.log("in zone");

								//sanime = false;
								//this.character.anims.play("player_idle",true);

						}, null);



					// damage

					this.physics.add.overlap(this.monsterB,this.player, () => {
						sanime = false;
						this.character.anims.play("player_damege",true);
						this.cameras.main.shake(20,0.005);

							if(this.set_blood.scaleX >= 0) {
							this.set_blood.scaleX = this.set_blood.scaleX - 0.0030;
						}

						this.character.on("animationcomplete", ()=> {
								sanime = true;
							});

					}, null);


					this.physics.add.overlap(this.monsterB_1,this.player, () => {
						sanime = false;
						this.character.anims.play("player_damege",true);
						this.cameras.main.shake(20,0.005);


						if(this.set_blood.scaleX >= 0) {
							this.set_blood.scaleX = this.set_blood.scaleX - 0.0030;
						}


					this.character.on("animationcomplete", ()=> {
						sanime = true;
					});

					}, null);











				this.input.on("pointerdown", ()=> {
					sanime = false;
					this.character.anims.play("player_att",true);
					this.character.on("animationcomplete", ()=> {
						sanime = true;
					});
				})








				// Full screen Page
                var FKey = this.input.keyboard.addKey('F');

                FKey.on('down', function () {

                    if (this.scale.isFullscreen)
                    {
                        //button.setFrame(0);
                        this.scale.stopFullscreen();
                    }
                    else
                    {
                       // button.setFrame(1);
                        this.scale.startFullscreen();
                    }

                }, this);
                // End Full_Screen







	}

	update() {
				
			// monster follower player
		if(this.ok == true) {
				this.physics.moveToObject(this.monsterB, {x: this.player.body.x , y: this.player.body.y}, 60);
				this.physics.moveToObject(this.monsterB_1, {x: this.player.body.x , y: this.player.body.y}, 40);
			}

		if(this.monsterB.body.x < this.player.body.x) {
			this.monster1.flipX = true;
		}
		else {
			this.monster1.flipX = false;
		}


		if(this.monsterB_1.body.x < this.player.body.x) {
			this.monster.flipX = true;
		}
		else {
			this.monster.flipX = false;
		}
			//console.log(this.monsterB.y , this.player.body.y)



		// depth
		for(let i =0; i<this.atree.length; i++) {
			if((this.player.y <= this.atree[i].y)&& (this.player.y+200 >= this.atree[i].y) && (this.player.x >= this.atree[i].x) && (this.player.x <= this.atree[i].x) ) {
				this.atree[i].alpha = 0.5;
				this.atree[i].setDepth(+1);
			}
			else if (this.player.y <= this.atree[i].y) {
				this.atree[i].setDepth(+1);
			}
			else if((this.player.y >= this.atree[i].y)){
				this.atree[i].alpha = 1;
				this.atree[i].setDepth(-1);

			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
