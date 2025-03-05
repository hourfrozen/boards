// jello

import * as THREE from 'https://unpkg.com/three@0.174.0/build/three.cjs';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
// initial

// objects
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// renderer
function animate() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // rend
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );

// rn its a spinning cube, omg can you believe it
