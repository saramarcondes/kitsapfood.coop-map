import map, { addPopupEvents } from "./map";
import * as farms from "./farms";

map.on("load", () => {
	map.addSource("farms", farms.farms);
	map.addLayer(farms.layer);
	addPopupEvents(map, farms.layer.id);
});
