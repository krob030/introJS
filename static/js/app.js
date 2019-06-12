// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

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

  var tbody = d3.select("tbody");
  data.forEach((date) => {
    var row = tbody.append("tr");
    Object.entries(date).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

});