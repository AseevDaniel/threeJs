var camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 1, 5000 );

camera.position.y = 30
camera.rotation.x = 100
camera.position.z = 150;

var delta = 0

function changeCamera (){
  camera.lookAt(cube.position)
  camera.position.x = Math.sin(delta) * 100;
  camera.position.z = Math.cos(delta) * 100;
}

var cameraRotate = () => {
  delta += 0.01
}
