ServerEvents.recipes(event => {
	//remove exchangers bloat
	event.remove({ output: 'exchangers:golden_exchanger' })
	event.remove({ output: 'exchangers:copper_exchanger' })
	event.remove({ output: 'exchangers:emerald_exchanger' })
	event.remove({ output: 'exchangers:obsidian_exchanger' })
	event.remove({ output: 'exchangers:amethyst_exchanger' })
	event.remove({ output: 'exchangers:end_exchanger' })
	event.remove({ output: 'exchangers:bee_exchanger' })


	event.remove({ output: 'exchangers:diamond_exchanger' })
	event.shaped(
		'exchangers:diamond_exchanger',
		[
			'ABA',
			'CDC',
			'AAA'
		],
		{
			A: 'minecraft:diamond',
			B: 'exchangers:exchanger_core_tier2',
			C: 'minecraft:ender_eye',
			D: 'exchangers:iron_exchanger'
		}
	)

	event.replaceInput(
		{ output: 'exchangers:netherite_exchanger'},
		'exchangers:amethyst_exchanger',
		'exchangers:diamond_exchanger'
	)
})