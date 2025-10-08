var cityPop = [
	{ city: 'Madison', population: 233209 },
	{ city: 'Milwaukee', population: 594833 },
	{ city: 'Green Bay', population: 104057 },
	{ city: 'Superior', population: 27244 }
];

function addColumns(cityPop){
	document.querySelectorAll("tr").forEach(function(row, i){

		if (i == 0){
			// fixed typo: insertAdjacntHTML → insertAdjacentHTML
			row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
		} else {
			var citySize;

			if (cityPop[i-1].population < 100000){
				citySize = 'Small';
			} else if (cityPop[i-1].population < 500000){
				citySize = 'Medium'; // fixed variable name typo: citysize → citySize
			} else {
				citySize = 'Large';
			};

			// fixed syntax: use insertAdjacentHTML instead of assignment
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
		};
	});
};

function addEvents(){
	var table = document.querySelector("table");

	table.addEventListener("mouseover", function(){
		var color = "rgb(";

		for (var i = 0; i < 3; i++){
			var random = Math.round(Math.random() * 255);
			color += random; // removed quotes around random

			if (i < 2){
				color += ",";
			} else {
				color += ")";
			}
		}

		// fixed property: .style.color instead of .color
		table.style.color = color;
	});

	function clickme(){
		alert('Hey, you clicked me!');
	};

	table.addEventListener("click", clickme);
};
