import * as THREE from 'three';
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
//scene.background = new THREE.Color(0x6666);

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry( 1, 1, 1);
let color = 'red'; 
const material = new THREE.MeshStandardMaterial( { color } ); 
const sphere = new THREE.Mesh( geometry, material ); 
sphere.castShadow= true;
sphere.position.set(0,0,-18)
sphere.rotation.y=-6;
scene.add(sphere);

//Plane
let planeGeometry = new THREE.PlaneGeometry(20,20,32,32);
let planeMaterial = new THREE.MeshStandardMaterial({color:'yellow'});
let plane = new THREE.Mesh(planeGeometry,planeMaterial);
plane.position.set(0,0,-20);
plane.receiveShadow = true;
scene.add(plane);

//Grid 
/*let grid = new THREE.GridHelper(100,100);
scene.add(grid);
*/
//Light
let light = new THREE.DirectionalLight('white',1,100);
light.position.set(0,-51,61);
light.castShadow = true
scene.add(light);
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
camera.position.set(0,-5,-14);
camera.rotation.x=1;
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    alpha:true,
    canvas: canvas
})
renderer.setSize(sizes.width/2, sizes.height/2)
function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera)
}

animate()

document.getElementById("left-arrow-image").addEventListener("click", event => {
    console.log("Funciona");
    sphere.rotation.y++;
});

document.getElementById("right-arrow-image").addEventListener("click", event => {
    console.log("Funciona");
    sphere.rotation.y--;
});




document.getElementById("square-right").addEventListener("click", event => {
    sphere.position.x++;
});
document.getElementById("square-left").addEventListener("click", event => {
    sphere.position.x--;
});

document.getElementById("square-up").addEventListener("click", event => {
    sphere.position.y++;
});
document.getElementById("square-down").addEventListener("click", event => {
    sphere.position.y--;
});

document.getElementById("square-plus").addEventListener("click", event => {
    sphere.position.z++;
});
document.getElementById("square-minus").addEventListener("click", event => {
    sphere.position.z--;
});






document.getElementById("light-right").addEventListener("click", event => {
    light.position.x = light.position.x+4;
});
document.getElementById("light-left").addEventListener("click", event => {
    light.position.x = light.position.x-4;
});

document.getElementById("light-up").addEventListener("click", event => {
    light.position.y = light.position.y+4;
});
document.getElementById("light-down").addEventListener("click", event => {
    light.position.y = light.position.y-4;
});

document.getElementById("light-plus").addEventListener("click", event => {
    light.position.z = light.position.z-4;
});
document.getElementById("light-minus").addEventListener("click", event => {
    light.position.z = light.position.z+4;
});




document.getElementById("camera-right").addEventListener("click", event => {
    camera.position.x=camera.position.x+2;
});
document.getElementById("camera-left").addEventListener("click", event => {
    camera.position.x=camera.position.x-2;

});

document.getElementById("camera-up").addEventListener("click", event => {
    camera.position.y=camera.position.y+2;

});
document.getElementById("camera-down").addEventListener("click", event => {
    camera.position.y=camera.position.y-2;
});

document.getElementById("camera-plus").addEventListener("click", event => {
    camera.position.z=camera.position.z+2;
});
document.getElementById("camera-minus").addEventListener("click", event => {
    camera.position.z=camera.position.z-2;
});

document.getElementById("camera-rotate-left").addEventListener("click", event => {
    camera.rotation.y =camera.rotation.y + 0.5;
});
document.getElementById("camera-rotate-right").addEventListener("click", event => {
    camera.rotation.y =camera.rotation.y - 0.5;
});


document.getElementById("camera-rotate-up").addEventListener("click", event => {
    camera.rotation.x =camera.rotation.x + 0.5;
});
document.getElementById("camera-rotate-down").addEventListener("click", event => {
    camera.rotation.x =camera.rotation.x - 0.5;
});


console.log("SQUARE:", sphere);
console.log("LIGHT:", light);
console.log("CAMERA:", camera);