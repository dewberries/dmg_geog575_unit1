//Initialize function to be called when the document has loaded
function initialize(){
    createTable();
    addColumns(cityPop);
    addEvents();
};

// Define cityPop array with city names and populations
var cityPop = [
	{ city: 'Madison', population: 233209 },
	{ city: 'Milwaukee', population: 594833 },
	{ city: 'Green Bay', population: 104057 },
	{ city: 'Superior', population: 27244 }
];

// Function to create a table and populate it with city data
function createTable(){
// Create a table element and add a header row
    var table = document.createElement("table");
    var headerRow = document.createElement("tr");
    headerRow.insertAdjacentHTML('beforeend', '<th>City</th><th>Population</th>');
    table.appendChild(headerRow);
// Loop to add each city's data as a new row in the table
    for (var i = 0; i < cityPop.length; i++){
        var tr = document.createElement("tr");
        tr.insertAdjacentHTML('beforeend', '<td>' + cityPop[i].city + '</td><td>' + cityPop[i].population + '</td>');
        table.appendChild(tr);
    }
// Append the table to the div with id "mydiv"
    document.querySelector("#mydiv").appendChild(table);
}

// Function to add a new column indicating city size based on population
function addColumns(cityPop){
// Loop through each row in the table
	document.querySelectorAll("tr").forEach(function(row, i){
// Add a header for the new column in the first row
		if (i == 0){
			row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
// Determine city size for other rows based on population
		} else {
			var citySize;
			if (cityPop[i-1].population < 100000){
				citySize = 'Small';
			} else if (cityPop[i-1].population < 500000){
				citySize = 'Medium'; 
			} else {
				citySize = 'Large';
			};
// Add the city size to the current row
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
		};
	});
};

// Function to add event listeners for mouseover and click events on the table
function addEvents(){
// Select the table element
	var table = document.querySelector("table");
// Add a mouseover event listener to change the text color randomly
	table.addEventListener("mouseover", function(){
		var color = "rgb(";
// Generate three random numbers for RGB values
		for (var i = 0; i < 3; i++){
			var random = Math.round(Math.random() * 255);
			color += random; // removed quotes around random
// Add commas between RGB values and close the parentheses
			if (i < 2){
				color += ",";
			} else {
				color += ")";
			}
		}
// Apply the generated color to the table's text
		table.style.color = color;
	});

// Click event handler function to show an alert
	function clickme(){
		alert('Hey, you clicked me!');
	};

	table.addEventListener("click", clickme);
};
// Call the initialize function when the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', initialize);