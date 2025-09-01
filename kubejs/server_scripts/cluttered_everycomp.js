ServerEvents.recipes(event => {

	///////// CLUTTERED MOD STUFF //////////

	// conflict with everycompat purple bookshelf
	// requires plushies mod
	event.remove({id:"luphieclutteredmod:luphie_calico_purple_bookshelf_recipe"})
	event.shaped(
		Item.of("luphieclutteredmod:luphie_calico_cat_purple_bookshelf",1),
		[
			'AAA',
			'BCB',
			'AAA'
		],
		{
			A: "luphieclutteredmod:luphie_purple_planks",
			B: "minecraft:book",
			C: "plushies:cat_plushie"
		}
	)

});