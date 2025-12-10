ServerEvents.recipes(event => {

	///////// CLUTTERED MOD STUFF //////////

	// conflict with magic vibe small stack of books
	// better recipe parity
	event.remove({id:"magic_vibe_decorations:smallbooksrecipe"})
	
	event.shapeless(
		"cluttered:stack_of_books",
		["magic_vibe_decorations:booksstacksmall"]
	)
	event.shapeless(
		"magic_vibe_decorations:booksstacksmall",
		["cluttered:stack_of_books"]
	)

	event.remove({id:"magic_vibe_decorations:bigbooksrecipe"})
	event.shapeless("magic_vibe_decorations:bigbookstack",
		[
			"magic_vibe_decorations:booksstacksmall",
			"magic_vibe_decorations:booksstacksmall"
		]
	)
	event.shapeless(
		"cluttered:stack_of_books_tall",
		["magic_vibe_decorations:bigbookstack"]
	)
	event.shapeless(
		"magic_vibe_decorations:bigbookstack",
		["cluttered:stack_of_books_tall"]
	)

});