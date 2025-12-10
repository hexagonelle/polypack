ServerEvents.tags('item', event => {
	// Add silent gear tools to the vanilla tags lists
	// Lets them perform vanilla functions

	const swordsList = [
		"sword",
		"katana",
		"machete"
	];

	const pickaxesList = [
		"pickaxe",
		"paxel"
	];

	const axesList = [
		"axe",
		"machete",
		"paxel",
		"mattock"
	];

	const shovelsList = [
		"shovel",
		"paxel"
	];

	const hoesList = [
		"hoe",
		"mattock"
	];

	const knivesList = [
		"knife"
	];

	const armorsList = [
		"helmet",
		"chestplate",
		"leggings",
		"boots"
	];

	var toolID = "";
	function addToolToTag(tool,tag,event){
		toolID = "silentgear:" + tool;
		event.add(tag, toolID);
	};

	var armorID = "";
	var tagID = "";
	function addArmorToTag(armor,event){
		armorID = "silentgear:" + armor;
		if (armor.slice(-1) == "s"){
			tagID = "forge:armors/" + armor;
		} else {
			tagID = "forge:armors/" + armor + "s";
		}

		event.add(tagID, armorID);
	};

	swordsList.forEach(sword => {
		addToolToTag(sword,"minecraft:swords",event)
		addToolToTag(sword,"forge:tools/swords",event)
	})

	pickaxesList.forEach(pickaxe => {
		addToolToTag(pickaxe,"minecraft:pickaxes",event)
		addToolToTag(pickaxe,"forge:tools/pickaxes",event)
	})

	axesList.forEach(axe => {
		addToolToTag(axe,"minecraft:axes",event)
		addToolToTag(axe,"forge:tools/axes",event)
	})

	shovelsList.forEach(shovel => {
		addToolToTag(shovel,"minecraft:shovels",event)
		addToolToTag(shovel,"forge:tools/shovels",event)
	})

	hoesList.forEach(hoe => {
		addToolToTag(hoe,"minecraft:hoes",event)
	})

	armorsList.forEach(armor => {
		addArmorToTag(armor,event)
	})

	const AxeItem = Java.loadClass('net.minecraft.world.item.AxeItem');
	
})

ServerEvents.compostableRecipes(event => {
	event.add("silentgear:flax_seeds", 0.1)
	event.add("silentgear:fluffy_seeds", 0.1)
})

let blockList = [
	'minecraft:dirt',
	'minecraft:grass_block',
	'minecraft:podzol',
	'minecraft:mycelium',
	'minecraft:coarse_dirt',
	'minecraft:rooted_dirt'
]
BlockEvents.rightClicked(e => {
	if (!e.item.hasTag('minecraft:shovels')) return
	if (!blockList.includes(e.block.id)) return
	e.block.set('minecraft:dirt_path')
	e.player.swing(e.hand,true);
    e.level.runCommandSilent(`playsound minecraft:block.gravel.place block @a ${e.block.x} ${e.block.y} ${e.block.z}`)

})