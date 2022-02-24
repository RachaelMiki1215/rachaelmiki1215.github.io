console.log("3D animation script loaded");

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x404040);
scene.background = new THREE.Color(0x000000);

var headerArea = Array.from(document.getElementsByTagName('header'))[0];
var footerArea = Array.from(document.getElementsByTagName('footer'))[0];
var mainArea = Array.from(document.getElementsByTagName('main'))[0];

const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.set(0, 0, 10);
camera.rotation.set(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
mainArea.appendChild(renderer.domElement);

//const controls = new OrbitControls(camera, renderer.domElement);

const axesHelper = new THREE.AxesHelper( 5 );
scene.add(axesHelper);

const floorGeo = new THREE.PlaneGeometry(5, 5);
const floorMaterial = new THREE.MeshLambertMaterial({color: 0xff0000, side: THREE.DoubleSide});
const floor = new THREE.Mesh(floorGeo, floorMaterial);
floor.rotation.x = Math.PI / 2;
scene.add(floor);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
cube.position.y += 1;
scene.add(cube);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
scene.add(dirLight);

/*const gui = new GUI();
const cubeFolder = gui.addFolder('Cube');
cubeFolder.add(cube.rotation, 'x', 0, Math.PI * 2);
cubeFolder.add(cube.rotation, 'y', 0, Math.PI * 2);
cubeFolder.add(cube.rotation, 'z', 0, Math.PI * 2);
cubeFolder.open();
const cameraFolder = gui.addFolder('Camera');
cameraFolder.add(camera.position, 'z', 0, 10);
cameraFolder.open();*/

// Based on https://stackoverflow.com/questions/29884485/threejs-canvas-size-based-on-container.
function resizeCanvasToDisplaySize() {
    const canvas = renderer.domElement;
    const targetWidth = window.innerWidth - 20;
    const targetHeight = window.innerHeight - headerArea.offsetHeight - footerArea.offsetHeight;

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        renderer.setSize(targetWidth, targetHeight, false);
        camera.aspect = targetWidth / targetHeight;
        camera.updateProjectionMatrix();
    }
}

function animate() {
    resizeCanvasToDisplaySize();

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);

}
requestAnimationFrame(animate);