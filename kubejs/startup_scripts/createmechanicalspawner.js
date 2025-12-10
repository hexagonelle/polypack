StartupEvents.registry('fluid', event => {

	event.create('spawn_fluid_guardian')
		.thinTexture(0x3d807e)
		.bucketColor(0x3d807e)
		.displayName('Spawn Fluid Guardian')
								 
	event.create('spawn_fluid_shulker')
		.thinTexture(0x9870c2)
		.bucketColor(0x9870c2)
		.displayName('Spawn Fluid Shulker')
								 
	event.create('spawn_fluid_phantom')
		.thinTexture(0x2521a3)
		.bucketColor(0x2521a3)
		.displayName('Spawn Fluid Phantom')
})