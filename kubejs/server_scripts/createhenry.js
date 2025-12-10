//////// CREATE RECIPES /////////

ServerEvents.recipes(event => {

	// Remove Create:Henry coal piece (used in hex's custom tiny coals)
	event.remove({ output:"create_henry:coal_piece" })
})