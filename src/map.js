import "./map.css";

const mapboxgl = window.mapboxgl;

mapboxgl.accessToken =
	"pk.eyJ1Ijoic2FyYXlvdXJmcmllbmQiLCJhIjoiY2s5eno1OHl6MGp5YzNucXJvaHk5dzZ6NyJ9.vU-8Bc62vQ6L_ij8-5VkQg";

export default new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/mapbox/streets-v11",
	center: [-122.739546, 47.5315526],
	zoom: 8.25,
	interactive: false,
});

export const addPopupEvents = (map, source) => {
	/**
	 * Taken from the mapbox-gl demo
	 * https://docs.mapbox.com/mapbox-gl-js/example/popup-on-click/
	 */
	// When a click event occurs on a feature in the places layer, open a popup at the
	// location of the feature, with description HTML from its properties.

	map.on(
		"click",
		source,
		({ features: [{ geometry, properties }], lngLat }) => {
			const coordinates = geometry.coordinates.slice();

			// Ensure that if the map is zoomed out such that multiple
			// copies of the feature are visible, the popup appears
			// over the copy being pointed to.
			while (Math.abs(lngLat.lng - coordinates[0]) > 180) {
				coordinates[0] += lngLat.lng > coordinates[0] ? 360 : -360;
			}

			new mapboxgl.Popup()
				.setLngLat(coordinates)
				.setHTML(properties.html)
				.addTo(map);
		},
	);

	// Change the cursor to a pointer when the mouse is over the places layer.

	map.on("mouseenter", source, function () {
		map.getCanvas().style.cursor = "pointer";
	});

	// Change it back to a pointer when it leaves.
	map.on("mouseleave", source, function () {
		map.getCanvas().style.cursor = "";
	});
};
