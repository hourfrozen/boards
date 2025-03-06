// jello

import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

let webglenabled = false;
if ( WebGL.isWebGL2Available() ) {
    webglenabled = true;
}
console.log("copyright 2025 hourfrozen/hhiojj55 and other contributors")
console.log(`
██████╗  ██████╗  █████╗ ██████╗ ██████╗ ███████╗    
██╔══██╗██╔═══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝    
██████╔╝██║   ██║███████║██████╔╝██║  ██║███████╗    
██╔══██╗██║   ██║██╔══██║██╔══██╗██║  ██║╚════██║    
██████╔╝╚██████╔╝██║  ██║██║  ██║██████╔╝███████║    
╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝    
                                                     `);
console.warn(`psst hey you. yeah you! 
  if you were told to paste something here or dont know what your doing close this window now.`);
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
if ( webglenabled == false ) {
  console.error(`
    ██████╗  ██████╗  █████╗ ██████╗ ██████╗ ███████╗    
    ██╔══██╗██╔═══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝    
    ██████╔╝██║   ██║███████║██████╔╝██║  ██║███████╗    
    ██╔══██╗██║   ██║██╔══██║██╔══██╗██║  ██║╚════██║    
    ██████╔╝╚██████╔╝██║  ██║██║  ██║██████╔╝███████║    
    ╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚══════╝    
                                                         
    error: webgl not supported/enabled.`);
}
// renderer
function animate() {
  if ( webglenabled == true ) {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  
    // rend
    renderer.render( scene, camera );
  
  }
}
renderer.setAnimationLoop( animate );

// rn its a spinning cube, omg can you believe it
