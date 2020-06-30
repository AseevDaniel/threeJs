var sphere = new THREE.Mesh(
  new THREE.SphereGeometry(10, 10, 100),
  new THREE.MeshPhongMaterial({color: 0x0000ff})
)
sphere.position.x = -20
sphere.castShadow = true
