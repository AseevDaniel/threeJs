var planeGeometry = new THREE.PlaneGeometry(200,200,1,1);
var planeMaterial = new THREE.MeshLambertMaterial({color: 0xcccccc});
var plane = new THREE.Mesh(planeGeometry,planeMaterial);
plane.rotation.x=-0.5*Math.PI;
// plane.position.x = 15;
plane.position.y = -10;
plane.position.z = -5;
plane.receiveShadow = true
