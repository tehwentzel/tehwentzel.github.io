
/* Get or create the application global variable */
var App = App || {};

class ParticleSystem {
	constructor(file){
		// scene graph group for the particle system
		this.sceneObject = new THREE.Group();
		this.filterWidth = .1;
		this.bottomPlaneIdx = 0;
		// bounds of the data
		this.bounds = {};
		this.loadData();
		this.setupSVG();
		this.drawBox();
		this.drawPoints();
		//console.log(this.data);
		this.sceneObject.add( this.points );
		this.sceneObject.add( this.filterPlane );
	}
	
	loadData(){
		var bounds = {};
		particleData.forEach(function(d) {
                // get the min bounds
                bounds.minX = Math.min(bounds.minX || Infinity, d.X);
                bounds.minY = Math.min(bounds.minY || Infinity, d.Y);
                bounds.minZ = Math.min(bounds.minZ || Infinity, d.Z);

                // get the max bounds
                bounds.maxX = Math.max(bounds.maxX || -Infinity, d.X);
                bounds.maxY = Math.max(bounds.maxY || -Infinity, d.Y);
                bounds.maxZ = Math.max(bounds.maxY || -Infinity, d.Z);

				bounds.maxC = Math.max(bounds.maxC || -Infinity, d.concentration);
            });
		this.data = particleData;
		console.log(JSON.stringify(this.data));
		this.bounds = bounds;
		this.yRange = (bounds.maxY - bounds.minY)/2;
		this.zRange = (bounds.maxZ - bounds.minZ)/2;
    };

    drawContainment(){

        // get the radius and height based on the data bounds
        var radius = (this.bounds.maxX - this.bounds.minX)/2.0 + 1;
        var height = (this.bounds.maxY - this.bounds.minY) + 1;
	
        // create a cylinder to contain the particle system
        var geometry = new THREE.CylinderGeometry( radius, radius, height, 32 );
        var material = new THREE.MeshBasicMaterial( {color: 0xffff00, wireframe: true} );
        var cylinder = new THREE.Mesh( geometry, material );
		return cylinder;
        // add the containment to the scene
        //sceneObject.add(cylinder);
    };
	
	drawBox(){
		var radius = this.zRange + 1;
		var geometry = new THREE.BoxGeometry( 2*radius, 2*this.yRange, this.filterWidth);
		var material = new THREE.MeshBasicMaterial({
			color: 0xf0f0f0,
			opacity: .1,
			transparent: true});
		var plane = new THREE.Mesh(geometry, material);
		plane.name = "filterPlane";
		this.filterPlane = plane;
		this.filterBox = new THREE.Box3()
		this.filterBox.setFromObject(this.filterPlane);
		//sceneObject.add(plane);
	}

    // creates the particle system
    drawPoints(){

        // create a cylinder to contain the particle system
        var pointGeometry = new THREE.Geometry();
		var pointMaterial = new THREE.PointsMaterial({size: .035,
			vertexColors: THREE.VertexColors});
		for(var i = 0; i < this.data.length; i++){
			var flowPoint  = new THREE.Vector3(this.data[i].X, this.data[i].Y- (this.bounds.maxY - this.bounds.minY)/2 , this.data[i].Z);
			pointGeometry.vertices.push( flowPoint );
		}
		pointGeometry.colorsNeedUpdate = true;
		var pointCloud = new THREE.Points( pointGeometry, pointMaterial );
		pointCloud.name = "pointCloud";
		this.points = pointCloud;
		var colorPoints = this.upDateColor();
		this.drawThings(colorPoints);
		//sceneObject.add(pointCloud);
        // use self.data to create the particle system

    };
	
	upDateColor(up = null, minZ = -Infinity, maxZ = Infinity){
		var containedPoints = [];
		var isFirst = true;
		var start = (up)? this.bottomPlaneIdx : 0;
		for(var i = 0; i < this.points.geometry.vertices.length; i++){
			let flowPoint = this.points.geometry.vertices[i];
			if((up && flowPoint.z > maxZ) || (!up && flowPoint.Z > maxZ + .2)){
				break;
			}
			if(this.filterBox.containsPoint(flowPoint)){
				if(isFirst){
					isFirst = false;
					this.bottomPlaneIdx = i;
				}
				var color = new THREE.Color( 
					"hsl(360, 100%, "+ 
					Math.round( 100*Math.pow((this.data[i].concentration/this.bounds.maxC),.3)) +
					"%)" );
					containedPoints.push({ x: flowPoint.x, 
						y: flowPoint.y, 
						color: "#" + color.getHexString(),
						hsl: color.getHSL() });
			} else {
				var color = new THREE.Color( 
					"hsl(120, 0%, "+ 
					Math.round( 100*Math.pow((this.data[i].concentration/this.bounds.maxC),.6)) +
					"%)" );
			}
			this.points.geometry.colors[i] = color;
			//console.log(flowPoint);
		}
		this.points.geometry.colorsNeedUpdate = true;
		//console.log(containedPoints);
		return containedPoints;
	}
	
	setupSVG(){
		this.svgWidth = .86*d3.select('.particleDiv').node().clientWidth;
		this.svgHeight = this.svgWidth;
		
		this.xScale = this.svgWidth/(this.bounds.maxY + 7);
		this.yScale = this.svgHeight/(this.bounds.maxY + 2);
		this.svg = d3.select("#lense").append("svg")
			.attr("width", this.svgWidth)
			.attr("height", this.svgHeight)
			.attr("style", "background:rgba(242,242,255,.5)");
		this.svg.append("text")
			.attr("x", this.svgWidth/2)
			.attr("y", this.svgHeight/18)
			.attr("text-anchor", "middle")
			.attr("font-size", "1.5em")
			.attr("font-color", "black")
			.text("Particles in Intersecting Plane")
	}
	
	drawThings(points){
			
		//this.svg.selectAll(".nodes").remove();
		
		var nodes = this.svg.selectAll("circle")
			.data(points, function(d) {return d.x.toString() + d.y.toString();})
		nodes.exit().remove();
		var xScale = this.xScale;
		var yScale = -this.yScale;
		var xOffset = this.svgWidth/2;
		var yOffset = this.svgHeight/2;
		
		nodes.enter().append("circle").merge(nodes)
			.attr("cx", function(d){return xScale*d.x + xOffset})
			.attr("cy", function (d) {return yScale*d.y + yOffset})
			.attr("r", 2)
			.attr("fill", function(d){ return d.color })
			.attr("fill-opacity", function(d) { 
			return d.hsl.l
			});
		nodes.exit().remove();
	}

	getSceneObject(){
		//console.log(this.sceneObject);
		return this.sceneObject;
	}
	
	getData(){
		return this.data;
	}
	
	getPlane(){
		return this.filterPlane;
	}
	
	slidePlane(x){
		if( (x > 0 && this.filterBox.max.z < this.yRange) || (x < 0 && this.filterBox.min.z > -this.yRange)){
			this.filterPlane.geometry.translate(0,0,x);
			this.filterPlane.updateMatrixWorld();
			this.filterBox.setFromObject(this.filterPlane);
				//.expandByVector( new THREE.Vector3(0, this.filterWidth, 0) );
			var colors = this.upDateColor((x > 0), this.filterBox.min.z, this.filterBox.max.z);
			this.drawThings(colors);
		}else{ 
			//console.log(this.filterBox.min.y);
			console.log(this.filterBox.max.z); 
		}
		//console.log(this.filterBox);
	}


};