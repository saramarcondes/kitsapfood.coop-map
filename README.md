# Kitsap Food Coop - Farms Map

[Kitsap Food Coop's](https://kitsapfood.coop/) partner farm map. The built version of this is embedded into the coop's website.

# Development

## Modifying farms (adding/updating)

To add or modify a farm, simply add a new `Feature` in [`src/js/farms.js`](src/farms.js) or update the existing one.

Note that `coordinates` is reversed from the normal way in MapBox's API and goes Long/Lat rather than Lat/Long. The easiest way to get the coordinates is to copy them from the Google Maps URL for the location. The coordinates are located after the `@` symbol in the URL when you've selected a location.

## Environment

Use `yarn start` to run the app in development mode then open your browser to http://localhost:1234. The page will automattically reload when you make changes.

Use `yarn build` to create a production version in the `dist/` folder.

## Demoing

The site is automattically deployed to https://kitsapfoodcoop-farm-map.netlify.app/ using Netlify. To deploy a new version simply merge to master.
