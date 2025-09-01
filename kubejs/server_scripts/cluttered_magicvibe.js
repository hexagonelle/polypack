ServerEvents.recipes(event => {

	///////// CLUTTERED MOD STUFF //////////

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

});