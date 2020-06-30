//
// cube
//
var geometry = new THREE.BoxGeometry( 10, 10, 10 );
var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );

cube.position.y = -14.999
cube.castShadow = true

var rotz = 0
var roty = 0

function rotateMesh(){
  cube.rotation.z = rotz;
  cube.rotation.y = roty;
}

var hover = () => {
  rotz += 0.02;
  roty += 0.02;
}

//
// cylinder
//
var cyl  = new THREE.Mesh(
  new THREE.CylinderGeometry(6.5, 6.5, 10, 3),
  new THREE.MeshLambertMaterial({color: 0x00ff00})
)
cyl.position.y = -8
cyl.rotation.x = -1.59
sphere.castShadow = true
