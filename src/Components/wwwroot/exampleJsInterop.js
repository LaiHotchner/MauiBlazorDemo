window.renderMap = () => {
    require(["esri/config", "esri/Map", "esri/views/MapView"], function (esriConfig, Map, MapView) {

        esriConfig.apiKey = "AAPK6feb7f74e7304f62967a618d0fa6a76dBooXKnQZy3T9ZkJ7WqH__hgOsQxT0w8kBcJCx53FUQkde1mrp7uwSeBrzgCL8m61";

        const map = new Map({
            basemap: "arcgis-topographic" // Basemap layer service
        });

        const view = new MapView({
            map: map,
            center: [-118.805, 34.027], // Longitude, latitude
            zoom: 13, // Zoom level
            container: "view-div" // Div element
        });
    });
};