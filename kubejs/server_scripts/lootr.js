// spawn a lootr chest with a dragon egg in it when the dragon is defeated
const ServerPlayer = Java.loadClass('net.minecraft.server.level.ServerPlayer')

EntityEvents.death("minecraft:ender_dragon", event => {
	const { source, entity, level } = event
	level.runCommandSilent(
		`execute in ${level.dimension} positioned 0 57 0 run setblock 0 57 0 minecraft:air`
	)
	level.runCommandSilent(
		`execute in ${level.dimension} positioned 0 57 0 run lootr chest dragon_egg:chests/dragon_defeated`
	)
})