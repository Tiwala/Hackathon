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

let octaLength = document.getElementById('lengthTwo');
let octaWidth = document.getElementById('widthTwo');
let octaHeight = document.getElementById('heightTwo');

let capLength = document.getElementById('lengthThree');
let capWidth = document.getElementById('widthThree');
let capHeight = document.getElementById('heightThree');

let outputLength = 0;
let outputWidth = 0;
let outputHeight = 0;

let outputLengthTwo = 0;
let outputWidthTwo = 2;
let outputHeightTwo = 0;

let outputLengthThree = 0;
let outputWidthThree = 0;
let outputHeightThree = 0;

let updateLength = () => {
    outputLength = length.value;
}

let updateWidth = () => {
    outputWidth = width.value;
}

let updateHeight = () => {
    outputHeight = height.value;
}

let updateLengthTwo = () => {
    outputLengthTwo = octaLength.value;
}

let updateWidthTwo = () => {
    outputWidthTwo = octaWidth.value;
}

let updateHeightTwo = () => {
    outputHeightTwo = octaHeight.value;
}

let updateLengthThree = () => {
    outputLengthThree = capLength.value;
}

let updateWidthThree = () => {
    outputWidthThree = capWidth.value;
}

let updateHeightThree = () => {
    outputHeightThree = capHeight.value;
}

length.addEventListener('input', updateLength);
width.addEventListener('input', updateWidth);
height.addEventListener('input', updateHeight);
octaLength.addEventListener('input', updateLengthTwo);
octaWidth.addEventListener('input', updateWidthTwo);
octaHeight.addEventListener('input', updateHeightTwo);
capLength.addEventListener('input', updateLengthThree);
capWidth.addEventListener('input', updateWidthThree);
capHeight.addEventListener('input', updateHeightThree);

updateLength();
updateWidth();
updateHeight();
updateLengthTwo();
updateWidthTwo();
updateHeightTwo();
updateLengthThree();
updateWidthThree();
updateHeightThree();

// Creating a cube
const texture = new THREE.TextureLoader().load('lavatile.jpeg')
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({map: texture});
const cube = new THREE.Mesh(geometry, material);
cube.position.x = -4
cube.position.z = 0
scene.add(cube);

// Creating an Octahedron
const octaGeometry = new THREE.OctahedronGeometry(1, 1);
const octaMaterial = new THREE.MeshBasicMaterial({map: texture});
const octa = new THREE.Mesh(octaGeometry, octaMaterial);
octa.position.x = 0;
octa.position.z = 0;
scene.add(octa);

// Creating a Capsule
const capGeometry = new THREE.CapsuleGeometry(1, 1, 3, 5)
const capMaterial = new THREE.MeshBasicMaterial({map: texture});
const cap = new THREE.Mesh(capGeometry, capMaterial);
cap.position.x = 5;
cap.position.z = 0;
scene.add(cap);


camera.position.z = 5;


function animate() {
    cube.rotation.x += 0.05;
    cube.rotation.y += 0.05;
    cube.scale.set(outputLength, outputWidth, outputHeight);
    octa.rotation.x += 0.05;
    octa.rotation.y += 0.05;
    octa.scale.set(outputLengthTwo, outputWidthTwo, outputHeightTwo);
    cap.rotation.x += 0.05;
    cap.rotation.z += 0.05;
    cap.scale.set(outputLengthThree, outputWidthThree, outputHeightThree);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
};

animate();

// background texture
// const loader = new THREE.TextureLoader();
// loader.load('')
