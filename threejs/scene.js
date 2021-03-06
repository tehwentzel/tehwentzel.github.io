"use strict";

/* Get or create the application global variable */
var App = App || {};

/* Create the scene class */
var Scene = function(options) {

    // setup the pointer to the scope 'this' variable
    var self = this;

    // scale the width and height to the screen size
    var width = .99*d3.select('.particleDiv').node().clientWidth;
    var height = width * 0.85;
	
    // create the scene
    self.scene = new THREE.Scene();

    // setup the camera
    self.camera = new THREE.PerspectiveCamera( 75, width / height, 5, 100 );
	
	self.controls = new THREE.OrbitControls( self.camera, document.getElementById('scene'));
	self.controls.enablePan = false;
	self.controls.enableZoom = false;
	
    self.camera.position.set(2,2,12);
    self.camera.lookAt(0,0,0);
	self.controls.update();

    // Add a directional light to show off the objects
    var light = new THREE.DirectionalLight( 0xffffff, 1.5);
    // Position the light out from the scene, pointing at the origin
    light.position.set(0,2,20);
    light.lookAt(0,0,0);

    // add the light to the camera and the camera to the scene
    self.camera.add(light);
    self.scene.add(self.camera);

    // create the renderer
    self.renderer = new THREE.WebGLRenderer();

    // set the size and append it to the document
    self.renderer.setSize( width, height );
    document.getElementById(options.container).appendChild( self.renderer.domElement );

    /* add the checkboard floor to the scene */

    self.public =  {
		
		scene: self.scene,

        addObject: function(obj) {
            self.scene.add( obj );
        },

        render: function() {
            requestAnimationFrame( self.public.render );
			self.controls.update();
            self.renderer.render( self.scene, self.camera );
        }

    };

    return self.public;
};