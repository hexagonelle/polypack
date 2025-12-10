ServerEvents.recipes(event => {

	//add quiver recipe

	event.shaped('supplementaries:quiver',
		[
			'BBB',
			'AAA'
		],
		{
			A: 'supplementaries:rope',
			B: 'minecraft:leather'
		}
	)
	
});