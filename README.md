# Kitsap Food Coop - Farms Map

[Kitsap Food Coop's](https://kitsapfood.coop/) partner farm map. The built version of this is embedded into the coop's website.

# Development

## Modifying farms (adding/updating)

To add or modify a farm, simply add a new `Feature` in [`src/farms.js`](src/farms.js) or update the existing one.

Note that `coordinates` is reversed from the normal way in MapBox's API and goes Long/Lat rather than Lat/Long. The easiest way to get the coordinates is to copy them from the Google Maps URL for the location. The coordinates are located after the `@` symbol in the URL when you've selected a location.

## Environment

The development environment is powered through [Snowpack](https://www.snowpack.dev/). The build is also managed by Snowpack.

Use `yarn start` to run the app in development mode. It will automatically open your browser to http://localhost:8080. The page will automattically reload when you make changes.

Use `yarn build` to create a production version in the `dist/` folder.
