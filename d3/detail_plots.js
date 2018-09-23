var gWidth = 600;
var gHeight = 400;

var graph = d3.select("#stemplot");
var table = graph.append("table");
				

//var histogram = d3.histogram();	
		
function drawHistogram(gunData, cityName){
	var cityData = gunData.filter(incident => (incident.age > 1 && incident.age < 100))
						.sort(function(a,b){
							return a.age - b.age;
						});
	if(cityName != "All Cities"){
		cityData = cityData.filter(incident => incident.city == cityName)
	}
	var digitMap = d3.nest()
			.key(function(d) {return Math.floor(d.age/10);})
			.sortKeys(d3.ascending)
			.entries(cityData);
	//console.log(digitMap.length);
	d3.select("#graphTitle").select('h2').text(cityName);
	d3.select("#totalDeaths").text("Total Deaths: " + cityData.length);
	d3.select("#averageAge").text( "Average Age: " + d3.mean( cityData, function(d) {return d.age;}).toFixed(0) );
	d3.select("#tablehead").text("Stem-Leaf Plot of age distribution of deaths");

	var headers = d3.selectAll('th')
					.data(digitMap);
		
	headers.text(function(d){
		return d.key;
	});
	headers.exit().remove();
	tablerows = headers.append('td')
				.text(function(d){
					var innertext = "| ";
					console.log(d);
					d.values.forEach(function(e){
						innertext += e.age%10
					});
					return innertext;
				});

	// var datas = d3.nest()
			// .key(function(d) {return d.city})
			// .map(gunData, d3.map)
			// .get(cityName);
	// datas = datas.filter(incident => incident.age > 0)
				// .map(incident => [Math.floor(incident.age/10), incident.age%10, incident.gender])
				// .sort(function(a,b){
					// return ((a[1] < b[1]) ? -1 : ((a[1] > b[1]) ? 1 : 0));
				// });
					
	// var sortedDatas = d3.nest()
		// .key(function(d) { return d[0] })
		// .sortKeys(d3.ascending)
		// .map(datas,d3.map);
	// var stems = sortedDatas.keys().sort();
	// //let leaves = sortedDatas.values();
	// for(var idx = 0; idx < stems.length; idx++){
		// var stem = stems[idx];
		// d3.select("#row" + stem).text(stem);
	// }
	// for(var idx = 0; idx < datas.length; idx++){
		// var entry = datas[idx];
		// var color = "pink";
		// if(entry[2] == "M"){
			// color = "blue";
		// }
		// d3.select("#row" + entry[0])
			// .append('td')
			// .text(function(d){ return entry[1]; })
			// .attr("style", "color:" + color);
	// }
	
	
	//d3.select("#stemplot")
	//	.attr("width", calcWidth(sortedDatas.values()));
		
	// let sortedDatas = d3.nest()
				// .key(function(d) { return d[0] })
				// .sortKeys(d3.ascending)
				// .map(datas,d3.map);
	// let stems = sortedDatas.keys().sort();
	// let leaves = sortedDatas.values();
	// for( var i = 0; i < leaves.length; i++){
		// leaves[i] = leaves[i].map(x => x[1]).sort();
	// }
	
	// var tr = table.selectAll('tr')
				// .data(stems)
				// .enter().append('g')
				// .attr('class','stems')
				// .append('tr')
				// .text(function(d) {return d})
				// .append('td');
	//tr.exit().remove();
	// tr.append('td')
		// .text(function(d,i) 
		// {return leaves[i].join(' ');});

}
