// from mvp_data.js
const tableData = mvp_data;

// get table references
var tbodym = d3.select("#mvp_table");
var tbodyml = d3.select("#ml_table");
function buildTable(data) {

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table bod
    let row = tbodym.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}
 
// Build the table when the page loads
buildTable(tableData);

// from ml_data.js
const tableData2 = ml_data;

// get table references


function buildTable2(data) {
  // First, clear out any existing data
  tbodyml.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbodyml.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.

let filtered_item = {};
// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changeElement = d3.select(this);
    // 4b. Save the value that was changed as a variable.
    let valElement =  changeElement.property("value");
    // 4c. Save the id of the filter that was changed as a variable.
    let filteredId = changeElement.attr("id");
  
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if(valElement) {
      filtered_item[filteredId] = valElement;
    }
    else {
      delete filtered_item[filteredId];
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData2;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    Object.entries(filtered_item).forEach(function([key, value]){
      filteredData = filteredData.filter((row) => row[key] === value);
    })
  
    // 10. Finally, rebuild the table using the filtered data
    
    buildTable2(filteredData)
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);

  // Build the table when the page loads
buildTable2(tableData2);