let leftcount = 0;
let rightcount = 0;

let left_bt = document.getElementById("left_img");
left_bt.addEventListener('click', function(){
    leftcount += 1;
    result_view();
    delete_draw();
    draw();
});
    

let right_bt = document.getElementById("right_img");
right_bt.addEventListener('click', function(){
    rightcount += 1;
    result_view();
    delete_draw();
    draw();
});

//퍼센트로 바꾸기 위한 부분
let sum = 0; //총합
let left_per = 50; //왼쪽
let right_per = 50; //오른쪽

function result_view(){
    result_per();
    document.getElementById("result").innerHTML="짬뽕 "+ left_per +"% : 짜장 " + right_per + "%";
}

function result_per(){
    sum = leftcount + rightcount;
    left_per = leftcount/sum * 100;
    left_per=left_per.toFixed();
    right_per = rightcount/sum *100;
    right_per = right_per.toFixed();  
}


// 그림 그리는 부분
function draw() {

    var canvas = document.getElementById('canvas');
    
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      //색 정하는 코드  
      ctx.fillStyle = "#5798D5";
      ctx.fillRect(0, 0, left_per*5, 30);
    }
}

function delete_draw() {
    var canvas2 = document.getElementById('canvas');
    
    canvas2.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
}