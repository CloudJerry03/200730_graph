let sketchbook = document.getElementById("sketch");

let left = 80;
let right = 20;
let x_ptr = 25;

sketchbook.addEventListener("click",function() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      
      //(x, y, width, height)
      //채워진 사각형
      //ctx.fillRect(25, 25, 100, 100);
      //아무것도 안그려진 것 같은 사각형
      //ctx.clearRect(45, 45, 60, 60);
      //테두리가 있는 사각형
      //ctx.strokeRect(50, 50, 50, 50);

      ctx.fillRect(25, 25, left, 30);
      ctx.strokeRect(left+x_ptr, 25, right, 30);
    }
});