// Listen to item registry event
StartupEvents.registry('item', event => {
	event.create('recall_gem')
		.maxStackSize(1)
		.glow(true)
		.useAnimation('bow')
		.useDuration(itemstack => 64)
	.use((level, player, hand) => true)
	.finishUsing((itemstack, level, entity) => {
		if(itemstack.nbt != null){
			let coords = itemstack.nbt.coords;
			let dim = itemstack.nbt.dimension;
			itemstack.shrink(1)
			if(itemstack.nbt.coords != null){
				if (entity.player) {
					// entity.tell("Coords are: " + coords.x);
					entity.teleportTo(
						dim,
						coords.x, coords.y, coords.z,
						0.0,0.0
					);
				let potion = entity.potionEffects
				
				//potion.add(effect, duration, amplifier, ambient, showParticles)
				potion.add(
					'minecraft:resistance',
					1200, 5, true, false
				)
				potion.add(
					'minecraft:invisibility',
					1200, 5, true, false
				)
				potion.add(
					'minecraft:water_breathing',
					1200, 5, true, false
				)
				}
			}
		}
		return itemstack
	})
})