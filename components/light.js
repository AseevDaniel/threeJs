var light = new THREE.AmbientLight(0x555555);
light.position.set(-1000,30000,0);
// light.castShadow = true
// light.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(100, 1, 500, 1000))
// light.shadow.bias = 0.1
// light.shadow.MapSize.width = 2048 * 2
// light.shadow.MapSize.height = 2048 * 2


var light2 = new THREE.PointLight(0xffffff)
light2.position.x = 20
light2.position.z = 100
light2.position.y = 30
light2.castShadow = true
