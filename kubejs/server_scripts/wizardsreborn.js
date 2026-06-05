ServerEvents.recipes(event => {
	const { kubejs } = event.recipes;

	kubejs
	.shapeless("wizards_reborn:arcane_gold_scythe",
		[
			"wizards_reborn:arcane_gold_ingot",
			"wizards_reborn:arcane_gold_scythe"
		]
	)
	.modifyResult((grid,result)=> {

	let scythe = grid.find(Item.of("wizards_reborn:arcane_gold_scythe"));

	const nbt = scythe.nbt || {};
	if ('Damage' in nbt) {
		nbt.Damage = Math.max(0, nbt.Damage - 200); // Reset the damage value
		scythe.setNbt(nbt); // Apply the modified NBT
	}

	// returnScythe.putInt('Damage',newDamage);
	return scythe

})
	// )

	kubejs
	.shapeless("wizards_reborn:raw_arcane_gold",
		[
			"wizards_reborn:arcanum_dust",
			"minecraft:raw_gold"
		]
	)
})

// ServerEvents.modifyRecipeResult('wizards_reborn:repair_scythe')


const PROTECTED_TOOLS = [
	"wizards_reborn:arcane_gold_scythe"
];

function isToolBroken(item) {
	const isDamageable = item.maxDamage > 0;
	const isProtected = PROTECTED_TOOLS.includes(item.id);
	const broken = item.damageValue >= item.maxDamage - 1;

	return isDamageable && isProtected && broken;
}

function handleToolUse(event, actionDescription, cancelMessage) {
	const player = event.player;
	if (!player) return;

	const item = player.mainHandItem;
	if (item.empty) return;

	if (isToolBroken(item)) {
	player.tell(cancelMessage);
	event.cancel();
	}
}

BlockEvents.leftClicked(event => {
	handleToolUse(event, "left-clicked", "§cThis tool is broken and cannot break blocks!");
});

BlockEvents.rightClicked(event => {
	handleToolUse(event, "right-clicked", "§cThis tool is broken and cannot be used!");
});

EntityEvents.hurt(event => {
	const victim = event.entity;
	const source = event.source;

	// This safely gets the attacker — either direct or indirect
	const attacker = source.entity ?? source.immediate;

	if (!attacker || !attacker.isPlayer()) {
	return;
	}

	const item = attacker.mainHandItem;
	if (item.empty) return;

	if (item.damageValue >= item.maxDamage - 1) {	
	attacker.tell(Text.of("§cYour tool is too damaged to use!"));
	event.cancel();
	}
});

ItemEvents.rightClicked(event => {
	const player = event.player;
	const item = event.item;
	if (!item.empty && isToolBroken(item)) {
	if (item.id === "minecraft:shield") {
		player.tell("§cYour shield is too damaged to block!");
		event.cancel();	// Prevent blocking animation/use
	}
	}
});