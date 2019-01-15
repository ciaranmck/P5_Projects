let snow = [];
let gravity;

let zOff = 0;

let spritesheet;
let textures = [];

function preload() {
  spritesheet = loadImage('http://localhost:3000/static/flakes32.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0, 0.08);
  for (let x = 0; x < spritesheet.width; x+= 32) {
    for (let y = 0; y < spritesheet.height; y+= 32) {
      let img = spritesheet.get(x, y, 32, 32);
      image(img, x, y);
      textures.push(img);
    }
  }

  for (let i = 0; i < 600; i++) {
    let x = random(width);
    let y = random(height);
    let design = random(textures);
    snow.push(new Snowflake(x, y, design));
  }



}

function draw() {
  background(0);
  // let wx = map(mouseX, 0, width, -0.05, -0.05)  ;
  // let wind = createVector(wx, 0);
  // image(textures, 0, 0);   
  // snow.push(new Snowflake());

  zOff += 0.01;

  for (flake of snow) {
    let xOff = flake.pos.x / width;
    let yOff = flake.pos.y / height;
    let wAngle = noise(xOff, yOff, zOff) * TWO_PI;
    let wind = p5.Vector.fromAngle(wAngle);
    wind.mult(0.02);
    xOff += 0.05;

    flake.applyForce(gravity);
    flake.applyForce(wind);
    flake.update();
    flake.render();
  }

  // for (let i = snow.length-1; i >=0; i--) {
  //   if(flake.offScreen()) {
  //     snow.splice(i, 1);
  //   }
  // }
}