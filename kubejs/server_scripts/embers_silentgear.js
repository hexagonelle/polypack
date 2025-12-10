ServerEvents.tags('item', event => {

		// add silentgear hammers to embers hammer tags
		// and vice versa
		event.add("forge:tools/hammers", "silentgear:hammer");
		event.add("forge:tools/hammers", "silentgear:prospector_hammer");
		event.add("forge:hammers", "embers:tinker_hammer");
		event.add("forge:hammers", "embers:grandhammer");

})