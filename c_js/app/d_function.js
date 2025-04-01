// 함수
// 함수 선언식 : 함수 호이스팅이 가능하다.
// 선언되기 전인 함수를 갖다 쓸 수 있다.

console.log(add(100, 200));

function add(a, b){
  return a + b;
}

console.log(' a + b = ', add(10, 15));


// 자바스크립트에서 함수는 1급 객체 (Java Class)
// 1급 객체 : 값으로 다룰 수 있다. (변수에 담을 수 있다.)
// 변수, 매개변수, 반환값으로 사용가능


// 함수 표현식 (변수 호이스팅이 막히면서 함수 호이스팅도 불가능)
// 함수를 변수에 넣게되면 익명함수로 써야됨
const FncExpr = function (a, b){
  return a + b;
}

console.log(FncExpr)
console.log(FncExpr(1000,3000));



// 매개변수로 함수 받기
const argFnc = function(fnc){
  fnc();
}

argFnc(function (){console.log('저는 callback 함수 입니다.')});


// 함수반환해보기
const returnFnc = function(){
  let name = '이초롱';
  let counter = 0;
  // 자바스크립트의 함수는 함수객체가 생성되는 시점에
  // 함수가 실행되기 위한 환경을 메모리에 저장
  // 반환되는 함수 : Closure 클로저
  return function(){
    counter++;
    console.log(name, counter);
  }
}
//반환된 함수를 실행
returnFnc()();


// var <-> let, const 차이점
// var 는 전역객체의 속성으로 등록됨
var varTest = 'a';
const cTest = 'A';
console.dir(window);


const rf = returnFnc();
rf();
rf();
rf();
rf();
rf();





