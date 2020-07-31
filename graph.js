let leftcount = 0;
let rightcount = 0;

let left_bt = document.getElementById("left_img");
left_bt.addEventListener('click', function(){
    leftcount += 1;
    alert("짬뽕 " + leftcount + "번 선택하였습니다.");
});
    

let right_bt = document.getElementById("right_img");
right_bt.addEventListener('click', function(){
    rightcount += 1;
    alert("짜장면 " + rightcount + "번 선택하였습니다.");
});