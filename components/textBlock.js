let font = new THREE.FontLoader().parse(fontJSON);
var geometryt = new THREE.TextGeometry("Space Whale", {font: font, size: 6, height: 10, material: 0, bevelThickness: 1, extrudeMaterial: 1});  //TextGeometry(text, parameters)

var text = new THREE.Mesh(
  geometryt,
  new THREE.MeshLambertMaterial({color: 0x0000ff})
)
text.position.x = -25
text.position.y = -19.9
text.rotation.x = -1.55
text.position.z = 20
text.castShadow = true
// text.rotation.z = -0.5
