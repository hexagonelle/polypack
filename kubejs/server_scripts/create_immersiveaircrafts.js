ServerEvents.recipes(event => {

	const mod = "immersive_aircraft:";

	// materials
	const casing = "create:andesite_casing"
	const copperSheet = "create:copper_sheet";
	const ironSheet = "create:iron_sheet";
	const goldSheet = "create:golden_sheet";
	const brassSheet = "create:brass_sheet";
	const sturdySheet = "create:sturdy_sheet";
	const precMech = "create:precision_mechanism";
	const prop = "create:propeller";
	const sail = "create:white_sail";
	const tank = "create:fluid_tank";
	const seats = "#create:seats";

	const hull = mod+"hull"
	const engine = mod+"boiler";
	const advEngine = mod+"engine";
	const bigSail = mod+"sail";
	const bigProp = mod+"propeller";
	const brassProp = mod+"enhanced_propeller";
	const gyro = mod+"gyroscope";

	const airship = mod+"airship";
	const biplane = mod+"biplane";

	const iron = "minecraft:iron_ingot";
	const water = "minecraft:water_bucket";
	const lava = "minecraft:lava_bucket";
	const string = "minecraft:string"



	// RECIPES
	event.remove({output:hull})
	event.shaped(
		hull,
		[
			'ABA',
			'ABA'
		],{
			A: casing,
			B: iron
		}
	)

	event.remove({output:bigProp})
	event.shaped(
		bigProp,
		[
			' A ',
			'ABA',
			' A '
		],{
			A: ironSheet,
			B: prop
		}
	)

	event.remove({output:bigSail})
	event.shaped(
		bigSail,
		[
			'AAA',
			'AAA'
		],
		{A: sail}
	)

	event.remove({output:engine})
	event.shaped(
		engine,
		[
			' A ',
			' B ',
			' C '
		],{
			A:"create:steam_engine",
			B:tank,
			C:"create:blaze_burner"
		}
	)

	event.remove({output:advEngine})
	event.shaped(
		advEngine,
		[
			'ABA',
			'CDC'
		],{
			A: brassSheet,
			B: precMech,
			C: sturdySheet,
			D: engine
		}
	)

	event.remove({output:airship})
	event.recipes.create.mechanical_crafting(
		airship,
		[
			'AAAAA',
			' B B ',
			' CDEF',
			' CCC '
  		],{
			A: bigSail,
			B: string,
			C: hull,
			D: seats,
			E: advEngine,
			F: prop
		}
	)

	event.remove({output:mod+"cargo_airship"})
	event.shaped(
		mod+"cargo_airship",
		[
			'ABA',
			'ACA'
		],{
			A: "minecraft:chest",
			B: airship,
			C: hull
		}
	)

	event.remove({output:mod+"warship"})
	event.shaped(
		mod+"warship",
		[
			'ABA',
			'CDC',
			'BEB'
		],{
			A: bigSail,
			B: hull,
			C: advEngine,
			D: airship,
			E: hull
		}
	)

	event.remove({output:biplane})
	event.recipes.create.mechanical_crafting(
		biplane,
		[
			'   A ',
			'A  A ',
			'BBCDE',
			'A  A ',
			'   A '
  		],{
			A: bigSail,
			B: hull,
			C: seats,
			D: advEngine,
			E: bigProp
		}
	)

	event.remove({output:mod+"gyrodyne"})
	event.shaped(
		mod+"gyrodyne",
		[
			' A ',
			'BCB',
			'DED'
		],{
			A: bigProp,
			B: bigSail,
			C: goldSheet,
			D: hull,
			E: seats
		}
	)

	event.remove({output:mod+"quadrocopter"})
	event.shaped(
		mod+"quadrocopter",
		[
			'ABA',
			' C ',
			'ADA'
		],{
			A: prop,
			B: casing,
			C: string,
			D: engine
		}
	)

	event.remove({output:mod+"bamboo_hopper"})
	event.shaped(
		mod+"bamboo_hopper",
		[
			'ABA',
			'CDC',
			'CCC'
		],{
			A: biplane,
			B: hull,
			C: "minecraft:bamboo_block",
			D: advEngine
		}
	)

	event.remove({output:brassProp})
	event.shaped(
		brassProp,
		[
			' A ',
			'ABA',
			' A '
		],{
			A: brassSheet,
			B: prop
		}
	)

	event.remove({output:mod+"eco_engine"})
	event.shaped(
		mod+"eco_engine",
		[
			'ABA',
			'CDC'
		],{
			A: ironSheet,
			B: water,
			C: copperSheet,
			D: engine
		}
	)

	event.remove({output:mod+"nether_engine"})
	event.shaped(
		mod+"nether_engine",
		[
			'ABA',
			'CDC'
		],{
			A: ironSheet,
			B: lava,
			C: sturdySheet,
			D: engine
		}
	)

	event.remove({output:mod+"steel_boiler"})
	event.shaped(
		mod+"steel_boiler",
		[
			'ABA'
		],{
			A: ironSheet,
			B: tank
		}
	)

	event.remove({output:mod+"industrial_gears"})
	event.shaped(
		mod+"industrial_gears",
		[
			'ABA'
		],{
			A: ironSheet,
			B: "create:cogwheel"
		}
	)

	event.remove({output:mod+"sturdy_pipes"})
	event.shaped(
		mod+"sturdy_pipes",
		[
			'ABA'
		],{
			A: ironSheet,
			B: "create:fluid_pipe"
		}
	)

	event.remove({output:mod+"hull_reinforcement"})
	event.shaped(
		mod+"hull_reinforcement",
		[
			'ABA'
		],{
			A: ironSheet,
			B: hull
		}
	)

	event.remove({output:gyro})
	event.shaped(
		gyro,
		[
			' A ',
			' B '
		],{
			A: "create:electron_tube",
			B: "minecraft:compass"
		}
	)

	event.remove({output:mod+"improved_landing_gear"})
	event.shaped(
		mod+"improved_landing_gear",
		[
			'AB',
			'C '
		],{
			A: ironSheet,
			B: iron,
			C: "create:belt_connector"
		}
	)
})