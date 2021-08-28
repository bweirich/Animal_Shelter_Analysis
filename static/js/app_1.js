// import the data from data.js
const tableData = data;

// reference the HTML table using D3
var tbody = d3.select("tbody");

// create table function
function buildTable (data) {
    // clear existing table
    tbody.html("");

    // loop through each object in data and append row and cells
    // for each value in row
    data.forEach((dataRow) => {
       let row = tbody.append('tr');

       // loop through each field in the dataRow and add each value
       // as table cel 
       Object.values(dataRow).forEach((val) => {
           let cell = row.append('td');
           cell.text(val);
       }); 
    });
}

// create filter by button click
function handleClick () {
    // grab datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // check to see if a date was entered and use to filter
    if (date) {
        // apply filter to table and keep rows match datetime
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild table with filtered data
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);