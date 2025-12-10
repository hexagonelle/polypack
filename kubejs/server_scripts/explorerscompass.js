ServerEvents.recipes(event => {

	//explorers compass needs ender pearls and obsidian
	event.remove({ output: 'explorerscompass:explorerscompass' })

	event.shaped('explorerscompass:explorerscompass',
		[
			'ABA',
			'BCB',
			'ABA'
		],
		{
			A: 'minecraft:ender_pearl',
			B: 'minecraft:obsidian',
			C: 'minecraft:compass'
		}
	)
	
});