let torchLanternList = [
	//torch, lantern, isSoul, isWall
	['minecraft:torch',false,false],
	['minecraft:soul_torch',true,false],
	['minecraft:wall_torch',false,true],
	['minecraft:soul_wall_torch',true,true]
];

function upgradeTorchToLantern(torchTypeKeyValue){

	// define the housing used to upgrade torches
	let housing = 'kubejs:lantern_housing';

	// get torch type
	let torch = torchTypeKeyValue[0];

	// check if torch is soul; check if on wall
	let isSoul = torchTypeKeyValue[1];
	let isWall = torchTypeKeyValue[2];

	// initialize lantern
	let lantern = '';

	// set lantern type
	if(isWall){
		lantern = 'amendments:wall_lantern'		
	} else if(isSoul){
		lantern = 'minecraft:soul_lantern'
	} else {
		lantern = 'minecraft:lantern'
	}

	BlockEvents.rightClicked(torch, event => {
		
		// grab:
		// the player that rightClicked
		// the block being rightClicked
		// the item used to rightClick
		const {player, block, item} = event;

		// make sure it's a real player who is standing AND has a lantern housing
		if (player=null || player.isCrouching() || item != housing) return

		// remove housing, prioritize mainHand
		if (player.mainHandItem.id == housing){
			player.mainHandItem.count -= 1;
		} else if (player.offHandItem.id == housing){
			player.offHandItem.count -= 1;
		}
		
		// replace torch with lantern

		// if the torch is on the wall, get the direction
		if(isWall){
			// torch blockstates will always be strings
			// the direction follows the phrase 'facing='
			// and is followed by a comma or square bracket

			// split blockstate string at equals sign
			let blockstateArray = block.blockState.toString().split('facing=');
			// grab the part after 'facing='
			let direction = blockstateArray[1].toString();
			// split at comma, if it exists
			blockstateArray = direction.split(',');
			// grab first part
			direction = blockstateArray[0]
			// split at square bracket, if it exists
			blockstateArray = direction.split(']');
			// grab first part
			direction = blockstateArray[0]

			player.level
				.getBlock(block.x, block.y, block.z)
				.set(lantern,{facing:direction});

			// amendments wall soul lanterns are set with block entity data
			if(isSoul){
				player.level
					.getBlock(block.x, block.y, block.z)
					.mergeEntityData({Lantern:{Name:"minecraft:soul_lantern"}});
			}

		// if torch is NOT on wall, just place appropriate lantern
		} else {
			player.level
				.getBlock(block.x, block.y, block.z)
				.set(lantern);
		}
	})
}

torchLanternList.forEach(item => upgradeTorchToLantern(item));

ServerEvents.recipes(event => {
	event.shaped(
		Item.of('kubejs:lantern_housing', 2),
		[
			'AAA',
			'ABA', // arg 2: the shape (array of strings)
			'AAA'
		],
		{
			A: 'minecraft:iron_nugget',
			B: 'minecraft:chain'
		}
	)
})