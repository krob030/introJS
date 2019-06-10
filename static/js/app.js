// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the submit button
var filter = d3.select("#filter");

filter.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);

  // Array with the values
  var day = filteredData.map(tableData => tableData.datetime);
  var cities = filteredData.map(tableData => tableData.city);
  var place = filteredData.map(tableData => tableData.state);
  var where = filteredData.map(tableData => tableData.country);
  var type = filteredData.map(tableData => tableData.shape);
  var time = filteredData.map(tableData => tableData.durationMinutes);
  var extra = filteredData.map(tableData => tableData.comments);

  // Finally, add the summary stats to the `ul` tag
  d3.select(".summary")
    .append("li").text(`Date: ${day}`)
    .append("li").text(`City: ${city}`)
    .append("li").text(`State: ${place}`)
    .append("li").text(`Country: ${where}`)
    .append("li").text(`Shape: ${type}`)
    .append("li").text(`Duration in minutes: ${time}`)
    .append("li").text(`Comments: ${extra}`);
});