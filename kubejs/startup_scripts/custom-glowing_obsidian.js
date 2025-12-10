StartupEvents.registry("block", (event) => {

	event.create("glowing_obsidian")
		.displayName("Glowing Obsidian")
		.stoneSoundType()
		.mapColor('color_black')
		.hardness(50)
		.resistance(1200)
		.requiresTool(true)
		.tagBlock("mineable/pickaxe")
		.tagBlock('minecraft:needs_diamond_tool');
})