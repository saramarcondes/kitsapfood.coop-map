import Feature from "./Feature";

Feature({
	properties: {
		title: "Roots Farm",
		description:
			"Roots Farm is a small farm in Poulsbo, that is grounded in the principles of environmental sensitivity. Roots Farm relies on heavy mulching, a permaculture method that decreases the need for watering. Soil cultivated with heavy mulching shows increased nutrient levels and is full of beneficial organisms, including mycorrhizae and other fungi, and earthworms. Their animals are rotated in fields and pastures for insect control, tilling and fertilizing - virtually eliminating the need for gas power implements.",
		href: "https://www.facebook.com/Roots-Farm-1153287064705322/",
	},
	coordinates: [-122.63939, 47.8193696],
});

Feature({
	properties: {
		title: "The Sheepish Pig",
		description:
			"Mangalitsa Pork from the Sheepish Pig Farm is served by many of the finest chefs in the world, including a number of talented farm-to-table chefs in Kitsap. Their sheep and lambs are fed hay, that they grow using organic practices on Grandma's 80 acre historic farm which has been continually farmed since 1900.",
		href: "https://www.thesheepishpig.com/",
	},
	coordinates: [-122.504478, 47.8018292],
});

Feature({
	properties: {
		title: "Kitsap Farms - Aquaponics",
		description:
			"Angela and Howard met in the Puget Sound area over 10 years ago and started Kitsap Farms in 2016. It became their mission to provide healthy, locally grown food to their community through sustainable farming methods.  All of the growing practices at Kitsap Farms are sustainable, environmentally friendly (compostable packing, solar power, responsibly sourced fish feed etc.), use substantially less water than traditional farming and eliminate the use of herbicides; therefore, producing healthful, flavorful, safe and sustainable food products.",
		href: "https://www.kitsapfarm.com/",
	},
	coordinates: [-122.557738, 47.9164916],
});

Feature({
	properties: {
		title: "Full Tilth Farm",
		description:
			"Full Tilth Farm is five acres, operated by Renee Ziemann, Luke Yoder, and Becky Zaneski. They grow a variety of berries and vegetables using sustainable farming methods that enhance the soil and protect the farm ecosystem.",
		href: "https://fulltilthfarm.wordpress.com/",
	},
	coordinates: [-122.5765409, 47.7563124],
});

Feature({
	properties: {
		title: "Pheasant Fields Farms",
		description:
			"Pheasant Fields is a family-run operation owned by Nikki and Allen Johanson. The farm has been in the family for over 50 years.  Not only do they grow great food, but their farm is open for visiting to observe the changing seasons and current farm activities – a great way to renew and deepen your relationship to community and the land we all share.",
		href: "https://www.pheasantfields.com/",
	},
	coordinates: [-122.6933755, 47.6839922],
});

export const layer = {
	id: "farms",
	type: "symbol",
	source: "farms",
	layout: {
		"icon-image": "{icon}-15",
		"icon-allow-overlap": true,
	},
};

export const farms = {
	type: "geojson",
	data: {
		type: "FeatureCollection",
		features: Feature.features,
	},
};
