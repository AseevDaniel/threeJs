
window.onload = function () {

  var scene = new THREE.Scene();

  scene.add(light); // light.js
  scene.add(light2); //
  scene.add(plane); // plane.js
  scene.add(cube); // house.js
  scene.add(cyl); //
  scene.add(sphere); // sphere.js
  scene.add(text); // textBlock.js


  var renderer = new THREE.WebGLRenderer()//({canvas: canvas});
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild(renderer.domElement)
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;




  //
  // animation
  //
  var domEvents = new THREEx.DomEvents(camera, renderer.domElement)

  //
  // intro - house to up
  //
  new TimelineMax().delay(1).to(cube.position, 2, {y: 0, ease: Expo.easeInOut})
  new TimelineMax().delay(1).to(cyl.position, 2, {y: 8, ease: Expo.easeInOut})


  //
  // rotation cube
  //
  var isClicked = false

  domEvents.addEventListener(cube, 'click', e => {
    if(!isClicked){
      new TimelineMax().to(cyl.position, 1, {y: 12, ease: Expo.ease})
      setTimeout(function () {
        isClicked = !isClicked
      }, 500);
    }else{
      isClicked = !isClicked
      setTimeout(function () {
        new TimelineMax().to(cyl.position, 1, {y: 8, ease: Expo.ease})
      }, 500);
    }
  })


  //
  // move house when moved sphere
  //
  var isRotate = false

  var move = () => {
    new TimelineMax().delay(4).to(cube.position, 1, {z: -20, ease: Expo.linear})
      .to(cube.position, 1, {z: 0, ease: Expo.linear})
    new TimelineMax().delay(4).to(cyl.position, 1, {z: -20, ease: Expo.linear})
      .to(cyl.position, 1, {z: 0, ease: Expo.linear})
  }


  //
  // move sphere
  //
  domEvents.addEventListener(sphere, 'click', e => {
    this.tl = new TimelineMax();
    this.tl.to(sphere.position, .5, {y: 20, ease: Expo.ease})
    this.tl.to(sphere.position, 1, {x: 20, ease: Expo.easeOut})
    this.tl.to(sphere.position, 2, {y: 0, ease: Expo.easeIn})
    move()
    this.tl.to(sphere.position, 3, {x: -20, ease: Expo.easeInOut})
  })


  //
  // up/down text
  //
  domEvents.addEventListener(text, 'click', e => {
    if (text.position.y < -16){
      new TimelineMax().to(text.position, 1, {y: -16, ease: Expo.ease})
      new TimelineMax().to(text.rotation, 1, {x: -0.7, ease: Expo.ease})
    }else{
      new TimelineMax().to(text.position, 1, {y: -19.9, ease: Expo.ease})
      new TimelineMax().to(text.rotation, 1, {x: -1.55, ease: Expo.ease})
    }
  })


  //
  // when keyup space camera will move
  //
  var isEntered = false

  document.body.onkeyup = e =>{
    if(e.keyCode == 32){
      isEntered = !isEntered
    }
  }



  //
  // view all
  //
  var animate = function () {
  	requestAnimationFrame( animate );
    if(isClicked){
      hover()
    }

    if(isEntered){
      cameraRotate()
    }

    changeCamera()
  	rotateMesh()

  	renderer.render( scene, camera );
  };

  //
  // when you resize window
  //
  function onWindowResize(event) {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  // canvas.addEventListener('mousemove', hover)
  window.addEventListener('resize', onWindowResize)
  animate();
}
