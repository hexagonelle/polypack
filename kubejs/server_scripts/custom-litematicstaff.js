ServerEvents.recipes(event => {
	event.shaped(
		Item.of("kubejs:litematic_staff",1),
		[
			' BC',
			' AB',
			'A  '
		],
		{
			A: "#forge:rods/wooden",
			B: "#forge:string",
			C: "#forge:dyes/yellow"
		}
	)
})