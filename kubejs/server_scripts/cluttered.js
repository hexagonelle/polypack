ServerEvents.recipes(event => {

	///////// CLUTTERED MOD STUFF //////////

	// redundant recipe
	event.remove({id:"luphieclutteredmod:luphie_purple_plank_set_stick_recipe"})
	event.remove({id:"luphieclutteredmod:luphie_glow_wood_set_stick_recipe"})

	// incorrect recipe
	event.remove({id:'luphieclutteredmod:luphie_green_planks_recipe'})
	event.shapeless(
		Item.of('luphieclutteredmod:luphie_green_planks', 4),
		['luphieclutteredmod:luphie_green_log']
	)

	event.remove({id:'luphieclutteredmod:luphie_flowering_pink_planks_recipe'})
	event.shapeless(
		Item.of('luphieclutteredmod:luphie_flowering_pink_planks', 4),
		['luphieclutteredmod:luphie_flowering_pink_log']
	)

	event.remove({id:'luphieclutteredmod:luphie_flowering_yellow_planks_recipe_alt'})
	event.remove({id:'luphieclutteredmod:luphie_flowering_yellow_planks_recipe_alt_2'})
	event.shapeless(
		Item.of('luphieclutteredmod:luphie_flowering_yellow_planks', 4),
		['luphieclutteredmod:stripped_luphie_flowering_log']
	)
	event.shapeless(
		Item.of('luphieclutteredmod:luphie_flowering_yellow_planks', 4),
		['luphieclutteredmod:stripped_luphie_flowering_wood']
	)

	event.replaceInput(
		{id: "luphieclutteredmod:stripped_f_lowering_purple_wood_recipe"},
		"luphieclutteredmod:luphie_flowering_purple_log",
		"luphieclutteredmod:stripped_luphie_flowering_purple_log"
	)
	event.replaceOutput(
		{id: "luphieclutteredmod:stripped_f_lowering_purple_wood_recipe"},
		"luphieclutteredmod:luphie_flowering_purple_wood",
		"luphieclutteredmod:stripped_luphie_flowering_purple_wood"
	)

	event.remove({id:"luphieclutteredmod:luphie_glow_planks_recipe"})
	event.shapeless(
		Item.of('luphieclutteredmod:luphie_glow_planks', 4),
		['luphieclutteredmod:luphie_glow_log']
	)

	event.replaceInput(
		{id:"luphieclutteredmod:luphie_flowering_purple_plank_recipe"},
		"luphieclutteredmod:luphie_flowering_purple_log",
		"luphieclutteredmod:luphie_flowering_purple_wood"
	)

	// conflict with luphiecluttered:muffin
	event.replaceInput(
		{id: "luphieclutteredmod:luphie_pancake_stack_recipe"},
		"minecraft:sweet_berries",
		"minecraft:red_dye"
	)

	// conflict with luphie closed cardboard box
	event.remove({id:"supplementaries:present"})
	event.shaped(
		Item.of("supplementaries:present",1),
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: "minecraft:paper",
			B: "#forge:string"
		}
	)

	// conflict with luphie heart armchair
	event.replaceInput(
		{id:"luphieclutteredmod:luphie_heart_armchair_recipe"},
		"minecraft:peony",
		"miencraft:pink_petals"
	)

	// conflict with magic vibe small stack of books
	// better recipe parity
	event.remove({id:"magic_vibe_decorations:smallbooksrecipe"})
	event.shapeless("luphieclutteredmod:luphie_stack_of_small_books",["magic_vibe_decorations:booksstacksmall"])
	event.shapeless("magic_vibe_decorations:booksstacksmall",["luphieclutteredmod:luphie_stack_of_small_books"])

	event.remove({id:"magic_vibe_decorations:bigbookstack"})
	event.shapeless("magic_vibe_decorations:bigbookstack",
		[
			"magic_vibe_decorations:booksstacksmall",
			"magic_vibe_decorations:booksstacksmall"
		]
	)
	event.shapeless("luphieclutteredmod:luphie_tall_stack_of_small_books",["magic_vibe_decorations:bigbookstack"])
	event.shapeless("magic_vibe_decorations:bigbookstack",["luphieclutteredmod:luphie_tall_stack_of_small_books"])

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