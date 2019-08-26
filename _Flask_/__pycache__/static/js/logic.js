// Create the tile layer that will be the background of our map
var myMap = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 11
});
// Create the tile layer that will be the background of our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

let info = `/samples/${sample}`;

function buildMetadata(sample) {
  //Build the metadata panel
// Use `d3.json` to fetch the metadata for a sample
    d3.json(info).then(function(sample){
    // Use d3 to select the panel with id of `#sample-metadata`
      var sample_metadata = d3.select(`#sample-metadata`);
    // Use `.html("") to clear any existing metadata
      sample_metadata.html("")
    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
      Object.entries(sample).forEach(function ([key, value]) {
        var row = sample_metadata.append("p");
        row.text(`${key}: ${value}`);
      })
    });
}

function buildfilter(infores) {  
  // @TODO: Build a map using the data
  d3.json(info).then(function(infores){
    var country_name = info.data.country;
    var country_magnitude = info.data.magnitude;
    var country_year = info.data.year;
    var id = info.data.id;
    // Initialize a info_key, which will be used as a key to access the appropriate country, magnitude, and year count for earthquake group
    var info_key;

    // Loop through the earthquakes (they're the same size and have partially matching data)
    for (var i = 0; i <id.length; i++) {

        /// Select the buttons. These are dropdowns and need tp ne on  the
        var button1 = d3.select("#filter-btn1").value;
        var button2 = d3.select("#filter-btn2").value;
      
        
        button1.on("change", function() {
          var newText1 = d3.event.target.value 
          var get_mag= document.getElementById("filter-btn1");
          var strUser1 = get_mag.options[get_mag.selectedIndex].value ;
              console.log(strUser1)
        // Select the input element and get the raw HTML node

        button2.on("change", function() {
            var newText2 = d3.event.target.value;
            var get_year = document.getElementById("filter-btn2");
            var strUser2 = get_year.options[get_year.selectedIndex].value ;
                console.log(strUser2)
        // Select the input element and get the raw HTML node

  var filteredData = meta_data.filter(meta_data => meta_data.country_year === inputValue);

  console.log(filteredData);

  // Remove any reportings from the list to
   tbody.html("");


function buildmap(sample) {
    d3.json(meta_data, function(sample){
  // Create a new choropleth layer
    geojson = L.choropleth(data, {
    // Define what  property in the features to use
    valueProperty: "Magnitude",

    // Set color scale
    scale: ["#ffffb2", "#b10026"],

    // Number of breaks in step range
    steps: 10,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },

    // Binding a pop-up to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.year + ", " + feature.properties.country ", "+ feature.properties.magnitude);
    }
  }).addTo(myMap);

  // Set up the legend
  var legend = L.control({ position: "bottomright" });
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits;
    var colors = geojson.options.colors;
    var labels = [];

    // Add min & max
    var legendInfo = "<h1>Media</h1>" +
      "<div class=\"labels\">" +
        "<div class=\"min\">" + limits[0] + "</div>" +
        "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
      "</div>";

    div.innerHTML = legendInfo;

    limits.forEach(function(limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  // Adding legend to the map
  legend.addTo(myMap);
  
  var newMarker = L.marker([id.lat, id.lon], {
        icon: icons["circle"]
      });
      newMarker.addTo(myMap);

}});
