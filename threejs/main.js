"use strict";

/* Get or create the application global variable */
var App = App || {};

/* IIFE to initialize the main entry of the application*/
(function() {

    // setup the pointer to the scope 'this' variable
    var self = this;

    /* Entry point of the application */
    App.start = function()
    {
        // create a new scene
        App.scene = new Scene({container:"scene"});

        // initialize the particle system
        var particleSystem = new ParticleSystem('http://localhost:8080//data/058.csv');
		console.log( particleSystem.filterPlane.getWorldPosition() );

        //add the particle system to the scene
        App.scene.addObject( particleSystem.getSceneObject() );
        // render the scene
        App.scene.render();
		document.getElementById("display").addEventListener('wheel',function(event){
			if(event.deltaY < 0){
				particleSystem.slidePlane(.2)
			}
			else{
				particleSystem.slidePlane(-.2);
			}
		});
		//App.scene.scene.updateMatrixWorld();
		//App.scene.render();

    };

}) ();