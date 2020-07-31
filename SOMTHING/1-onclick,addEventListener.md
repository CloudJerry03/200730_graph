# .onclick vs .addEventListener
### 200731

## 도입 - onclick과 addEventListener에 대하여

### 1. onclick이란

<pre><code><button id="left">left</button>
var left_bt= document.getElementById("left");
left_bt.onclick = function() {
    alert("left_click");};
</code></pre>
위와 같은 형태로 쓰인다.

- 해당요소에 접근하여 onclick 프로퍼티에 함수를 대입하는 방법이다.
- 장점은 모든 버전에서 적용된다.

+ 추가설명 : 프로퍼티(Property)?
    + 기본적으로 프로퍼티는 어떤 값을 나타낸다. 그런데 이 값이 다른 연관을 가지고 있을 때 프로퍼티라고 한다. 
    + ex) length
### 2. addEventLisener이란
- 이벤트를 등록하는 가장 권장되는 방식
- 여러개의 이벤트 핸들러를 등록할 수 있음
- 복수의 동일 이벤트 타입 리스너를 등록할 수 있음. = onclick 이벤트가 2개 시행되게 할 수 있다는 소리
- 단, ie8이하에서 호환 되지 않음