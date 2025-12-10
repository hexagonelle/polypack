ServerEvents.recipes(event => {

	// remove default recipes
	event.remove({ type: 'create_mechanical_spawner:spawner' })

	let disableFluids = [
		"evoker",
		"parrot",
		"bat",
		"wolf",
		"villager",
		"pig",
		"fox",
		"cow",
		"bee",
		"rabbit",
		"panda",
		"horse",
		"chicken",
		"random_legacy",
		"enchantment_industry_experience",
		"enchantment_industry_hyper_experience"
	]

	for (let fluid of disableFluids) {
		event.remove({id: `create_mechanical_spawner:mixing/spawn_fluid_${fluid}`})
	}

	// BASE FLUIDS
	event.recipes.create.mixing(
		Fluid.of("create_mechanical_spawner:spawn_fluid_random", 100),
		[
			Fluid.of('minecraft:water', 90),
			Fluid.of('create_enchantment_industry:experience', 10)

		]
	).heated()

	event.recipes.create.mixing(
		Fluid.of("create_mechanical_spawner:spawn_fluid_random", 5000),
		[
			Fluid.of('minecraft:water', 4500),
			Fluid.of('create_enchantment_industry:hyper_experience', 10)
		]
	).superheated()

	// MOB FLUIDS

	event.recipes.create.mixing(
		Fluid.of("create_mechanical_spawner:spawn_fluid_guardian", 250),
		[
			Fluid.of("create_mechanical_spawner:spawn_fluid_random", 100),
			"minecraft:prismarine_shard"
		]
	).heated()

	event.recipes.create.mixing(
		Fluid.of("create_mechanical_spawner:spawn_fluid_phantom", 250),
		[
			Fluid.of("create_mechanical_spawner:spawn_fluid_random", 100),
			"minecraft:phantom_membrane"
		]
	).heated()

	event.recipes.create.mixing(
		Fluid.of("create_mechanical_spawner:spawn_fluid_shulker", 250),
		[
			Fluid.of("create_mechanical_spawner:spawn_fluid_random", 100),
			"minecraft:shulker_shell"
		]
	).heated()


	// MOB LOOT //

	// function lootGenerator(lootList){
	// 	var lootArray = [];
	// 	for (let loot of lootList){
	// 		lootArray.append(Item.of(`minecraft:${loot}`).withChance(${chance}))
	// 	}
	// 	return lootArray
	// }

	// let charredLootList = [
	// 	{loot:"create:experience_block"}
	// 	{loot:"coal", chance: 0.333},
	// 	{loot:"bone", chance: 0.333},
	// 	{loot:"bone", chance: 0.333},
	// 	{loot:"wither_skeleton_skull", chance: 0.025}
	// ]

	// const charredLoot = lootGenerator(charredLootList);

	//Specific MOBS


	// let mobs = [
	// 	{
	// 		mod:"minecraft", entity:"wither_skeleton", fluidAmt:100, time:1000,
	// 		loot:[
	// 			Item.of("create:experience_block"),
	// 			Item.of("minecraft:coal").withChance(0.3333),
	// 			Item.of("minecraft:bone").withChance(0.3333),
	// 			Item.of("minecraft:bone").withChance(0.3333),
	// 			Item.of("minecraft:wither_skeleton_skull").withChance(0.025)
	// 		]
	// 	}
	// ]

	// for (let mob of mobs) {
	// 	event.recipes.createMechanicalSpawnerSpawner(
	// 		Fluid.of(`create_mechanical_spawner:spawn_fluid_${mob.entity}`, fluidAmt)
	// 	).processingTime(mob.time)
	// 	.mob(`${mob.mod}:${mob.entity}`)
	// }

	event.recipes.createMechanicalSpawnerSpawner(
		Fluid.of("create_mechanical_spawner:spawn_fluid_wither_skeleton", 100)
		).processingTime(1000)
		 .mob("minecraft:wither_skeleton")
		 .customLoot([
			Item.of("create:experience_block"),
			Item.of("minecraft:coal").withChance(0.3333),
			Item.of("minecraft:bone").withChance(0.3333),
			Item.of("minecraft:bone").withChance(0.3333),
			Item.of("minecraft:wither_skeleton_skull").withChance(0.025)
		]);

	event.recipes.createMechanicalSpawnerSpawner(
		Fluid.of("create_mechanical_spawner:spawn_fluid_pigling", 100)
		).processingTime(1000)
		 .mob("minecraft:piglin")
		 .customLoot([]);

	event.recipes.createMechanicalSpawnerSpawner(
		Fluid.of("create_mechanical_spawner:spawn_fluid_magma_cube", 100)
		).processingTime(1000)
		 .mob("minecraft:magma_cube")
		 .customLoot([
			Item.of("create:experience_block"),
			Item.of("minecraft:magma_cream").withChance(0.2)
		]);

	event.recipes.createMechanicalSpawnerSpawner(
		Fluid.of("create_mechanical_spawner:spawn_fluid_drowned", 100)
		).processingTime(1000)
		 .mob("minecraft:drowned")
		 .customLoot([
			Item.of("create:experience_block"),
			Item.of("minecraft:nautilus_shell").withChance(0.03),
			Item.of("minecraft:trident").withChance(0.005),
			Item.of("minecraft:copper_ingot").withChance(0.11),
			Item.of("minecraft:rotten_flesh").withChance(0.3333),
			Item.of("minecraft:rotten_flesh").withChance(0.3333)
		]);

	event.recipes.createMechanicalSpawnerSpawner(
		Fluid.of("create_mechanical_spawner:spawn_fluid_enderman", 100)
		).processingTime(1000)
		 .mob("minecraft:enderman")
		 .customLoot([
			Item.of("create:experience_block"),
			Item.of("minecraft:ender_pearl"),
			Item.of("minecraft:ender_pearl").withChance(0.1)
		]);

	event.recipes.createMechanicalSpawnerSpawner(
		Fluid.of("create_mechanical_spawner:spawn_fluid_witch", 100)
		).processingTime(1000)
		 .mob("minecraft:witch")
		 .customLoot([]);

	event.recipes.createMechanicalSpawnerSpawner(
		Fluid.of("create_mechanical_spawner:spawn_fluid_zombie", 100)
		).processingTime(1000)
		 .mob("minecraft:zombie")
		 .customLoot([
			Item.of("create:experience_block"),
			Item.of("minecraft:iron_ingot").withChance(0.083),
			Item.of("minecraft:carrot").withChance(0.083),
			Item.of("minecraft:potato").withChance(0.083),
			Item.of("minecraft:copper_ingot").withChance(0.11),
			Item.of("minecraft:rotten_flesh"),
			Item.of("minecraft:rotten_flesh").withChance(0.1)
		]);

	event.recipes.createMechanicalSpawnerSpawner(
		Fluid.of("create_mechanical_spawner:spawn_fluid_spider", 100)
		).processingTime(1000)
		 .mob("minecraft:spider")
		 .customLoot([
			Item.of("create:experience_block",1),
			Item.of("minecraft:string").withChance(0.3333),
			Item.of("minecraft:string").withChance(0.3333),
			Item.of("minecraft:spider_eye"),
			Item.of("minecraft:spider_eye").withChance(0.1)
		]);

	event.recipes.createMechanicalSpawnerSpawner(
		Fluid.of("create_mechanical_spawner:spawn_fluid_creeper", 100)
		).processingTime(1000)
		 .mob("minecraft:creeper")
		 .customLoot([
			Item.of("create:experience_block"),
			Item.of("minecraft:gunpowder"),
			Item.of("minecraft:gunpowder").withChance(0.1)
		]);

	event.recipes.createMechanicalSpawnerSpawner(
		Fluid.of("create_mechanical_spawner:spawn_fluid_skeleton", 100)
		).processingTime(1000)
		 .mob("minecraft:skeleton")
		 .customLoot([
			Item.of("create:experience_block"),
			Item.of("minecraft:bone"),
			Item.of("minecraft:bone").withChance(0.1),
			Item.of("minecraft:arrow").withChance(0.3333),
			Item.of("minecraft:arrow").withChance(0.3333)
		]);

	event.recipes.createMechanicalSpawnerSpawner(
		Fluid.of("create_mechanical_spawner:spawn_fluid_slime", 100)
		).processingTime(1000)
		 .mob("minecraft:slime")
		 .customLoot([
			Item.of("create:experience_block"),
			Item.of("minecraft:slimeball").withChance(0.5),
			Item.of("minecraft:slimeball").withChance(0.5)
		]);

	event.recipes.createMechanicalSpawnerSpawner(
		Fluid.of("create_mechanical_spawner:spawn_fluid_blaze", 100)
		).processingTime(1000)
		 .mob("minecraft:blaze")
		 .customLoot([
			Item.of("create:experience_block"),
			Item.of("minecraft:blaze_rod"),
			Item.of("minecraft:blaze_rod").withChance(0.1)
		]);

	event.recipes.createMechanicalSpawnerSpawner(
		Fluid.of("create_mechanical_spawner:spawn_fluid_ghast", 100)
		).processingTime(1000)
		 .mob("minecraft:ghast")
		 .customLoot([
			Item.of("create:experience_block"),
			Item.of("minecraft:ghast_tear"),
			Item.of("minecraft:ghast_tear").withChance(0.1),
			Item.of("minecraft:gunpowder").withChance(0.3333),
			Item.of("minecraft:gunpowder").withChance(0.3333)
		]);

	event.recipes.createMechanicalSpawnerSpawner(
		Fluid.of("kubejs:spawn_fluid_guardian", 100)
		).processingTime(1000)
		 .mob("minecraft:guardian")
		 .customLoot([
			Item.of("create:experience_block"),
			Item.of("minecraft:prismarine_shard"),
			Item.of("minecraft:prismarine_shard").withChance(0.1),
			Item.of("minecraft:prismarine_crystals").withChance(0.4),
			Item.of("minecraft:raw_cod").withChance(0.4),
			Item.of("minecraft:raw_salmon").withChance(0.4),
			Item.of("minecraft:pufferfish").withChance(0.0033),
			Item.of("minecraft:tropical_fish").withChance(0.0005)
		]);

	event.recipes.createMechanicalSpawnerSpawner(
		Fluid.of("kubejs:spawn_fluid_shulker", 100)
		).processingTime(1000)
		 .mob("minecraft:shulker")
		 .customLoot([
			Item.of("create:experience_block"),
			Item.of("minecraft:shulker_shell"),
			Item.of("minecraft:shulker_shell").withChance(0.1)
		]);

	event.recipes.createMechanicalSpawnerSpawner(
		Fluid.of("kubejs:spawn_fluid_phantom", 100)
		).processingTime(1000)
		 .mob("minecraft:phantom")
		 .customLoot([
			Item.of("create:experience_block"),
			Item.of("minecraft:phantom_membrane"),
			Item.of("minecraft:phantom_membrane").withChance(0.1)
		]);




})