PlayerEvents.respawned(event => {
    const data = event.player.persistentData;
    let deathLoc = event.player.nbt.LastDeathLocation;

    // event.player.tell("Welcome Back");
    // event.player.tell("Last death: " + deathLoc.pos);
    // event.player.tell("DeathDim: " + deathLoc.dimension);

    let recallGem =
        Item.of(
            'kubejs:recall_gem',
            {
                "coords":{
                    "x": deathLoc.pos[0],
                    "y": deathLoc.pos[1],
                    "z": deathLoc.pos[2]
                },
                "dimension": deathLoc.dimension
            }
        ).weakNBT();

    event.player.give(recallGem);
})