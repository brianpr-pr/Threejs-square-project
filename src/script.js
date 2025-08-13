import * as THREE from 'three';
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry( 1, 1, 1);
let color = 'red'; 
const material = new THREE.MeshBasicMaterial( { color } ); 
const sphere = new THREE.Mesh( geometry, material ); 
scene.add( sphere );

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 800
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

function animate(){
    requestAnimationFrame(animate);
    renderer.setSize(sizes.width/2, sizes.height/2)
    renderer.render(scene, camera)
}
animate()


document.getElementById("left-arrow-image").addEventListener("click",event => {
    console.log("Funciona");
    sphere.rotation.y++;
});

document.getElementById("right-arrow-image").addEventListener("click",event => {
    console.log("Funciona");
    sphere.rotation.y--; 
});