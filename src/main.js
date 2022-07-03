
window.addEventListener('load', function () {
const config = {
    type: Phaser.AUTO,
    disableContextMenu: true,
    banner: true,
    backgroundColor: "24a159",
    scale: {
        pixelArt: true,
		width: 900,
        height: 600,
        parent: 'canvas',
        mode: Phaser.Scale.NONE,
        autoRound: true,
        resolution: 3,
    },
    render: {
        roundPixels: true,
    },

    physics: {
        default: "arcade",
        arcade: {
            debug: false,
        }
    }
    }
	var game = new Phaser.Game(config);
	
	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.add("Boot", Boot, true);
});
let sanime = true;
class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Preload"));
	}
}