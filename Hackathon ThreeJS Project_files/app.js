const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xff0000)
// First attribute is Field of View, measured in degrees. Next is aspect ratio, near clipping plane, far clipping plane
// Objects farther or nearer than the boundary clipping planes do not get rendered
// Modifying clipping plane only affects
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 1, 500);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

let length = document.getElementById('length');
let width = document.getElementById('width');
let height = document.getElementById('height');
// let sliders = document.querySelectorAll('.slider')
// let outputLength = document.getElementById('outputLength')
// let outputWidth = document.getElementById('outputWidth')
// let outputHeight = document.getElementById('outputHeight')

let outputLength = 0;
let outputWidth = 0;
let outputHeight = 0;

let updateLength = () => {
    outputLength = length.value;
}

let updateWidth = () => {
    outputWidth = width.value;
}

let updateHeight = () => {
    outputHeight = height.value;
}

length.addEventListener('input', updateLength);
width.addEventListener('input', updateWidth);
height.addEventListener('input', updateHeight);
updateLength();
updateWidth();
updateHeight();

// Creating a cube
const texture = new THREE.TextureLoader().load('lavatile.jpeg')
let geometry = new THREE.BoxGeometry(outputLength, outputWidth, outputHeight);
const material = new THREE.MeshBasicMaterial({map: texture});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);




camera.position.z = 7;


function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.05
    cube.rotation.y += 0.05
    renderer.render(scene, camera);
};

animate();

// background texture
// const loader = new THREE.TextureLoader();
// loader.load('')
