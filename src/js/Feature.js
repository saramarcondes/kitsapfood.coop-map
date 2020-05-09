// default icon
const icon = "garden";

const featureHtml = ({ href, title, description }) =>
	`
	<strong>
		<a href="${href}" target="_blank">${title}</a>
	</strong>
	
	<p>${description}</p>
`;

/**
 * Creates a map feature. Automattically adds it to the static `features`
 * array on the function.
 *
 * Hopefully this makes it easier for folks to add farms in the future,
 * less places to track down that need to be updated.
 *
 * @param {object} attrs
 * @param {object} attrs.properties
 * @param {string} attrs.properties.title
 * @param {string} attrs.properties.description
 * @param {?string} attrs.properties.icon
 * @param {number[]} attrs.coordinates
 */
const Feature = ({ properties, coordinates }) => {
	const feature = {
		type: "Feature",
		properties: {
			icon,
			html: featureHtml(properties),
			...properties,
		},
		geometry: {
			type: "Point",
			coordinates,
		},
	};

	Feature.features.push(feature);

	return feature;
};

Feature.features = [];

export default Feature;
