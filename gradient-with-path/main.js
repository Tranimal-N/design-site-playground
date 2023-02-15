let c = document.getElementById('canv');
let $ = c.getContext('2d');


let col = function(x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1,1);
}

let R = function(x, y, t) {
  return( Math.floor(150 + 64 * Math.cos((x * x - y * y) / 300 + t )));
}

let G = function(x, y, t) {
  return( Math.floor(10 + 64 * Math.sin( (x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300 )));
}

let B = function(x, y, t) {
  return( Math.floor(180 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
}

let t = 0;

let run = function() {
  for(let x = 0; x <= 35; x++) {
    for(let y = 0; y <= 35; y++) {
      col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
    }
  }

  t = t + 0.015;
  window.requestAnimationFrame(run);
}

run();


// let c = document.getElementById('canv');
// let $ = c.getContext('2d');


// let col = function(x, y, r, g, b) {
//   $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
//   $.fillRect(x, y, 1,1);
// }

// let R = function(x, y, t) {
//   return( Math.floor(110 + 64 * Math.cos((x * x - y * y) / 300 + t )));
// }

// let G = function(x, y, t) {
//   return( Math.floor(10 + 64 * Math.sin( (x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300 )));
// }

// let B = function(x, y, t) {
//   return( Math.floor(120 + 64 * Math.sin(5 * Math.sin(t / 9) + ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100)));
// }

// let t = 0;

// let run = function() {
//   for(let x = 0; x <= 35; x++) {
//     for(let y = 0; y <= 35; y++) {
//       col(x, y, R(x, y, t), G(x, y, t), B(x, y, t));
//     }
//   }
//   t = t + 0.015;
//   window.requestAnimationFrame(run);
// }

// run();



// function JsIsWorking() {
//     console.log("JS is working");
// }

// JsIsWorking();