import map, { addPopupEvents } from "./map";
import * as farms from "./farms";
import * as kitsap from "./kitsap";

map.on("load", () => {
	map.addSource("farms", farms.farms);
	map.addLayer(farms.layer);
	addPopupEvents(map, farms.layer.id);

	map.addSource("kitsap", kitsap.feature);
	map.addLayer(kitsap.layer);
});
