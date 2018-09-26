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
	var table = d3.selectAll("#thetable");
	var headers = table.selectAll('.stem')
					.data(digitMap);
					
	headers.enter().append('tr')
		.merge(headers)
		.attr('class','stem')
		.text(function(d){
			return d.key;
		})
		.append('td')
		.text(function(d){
			var innertext = "| ";
			//console.log(d);
			d.values.forEach(function(e){
				innertext += e.age%10
			});
			return innertext;
		});
				
	headers.exit().remove();
}
