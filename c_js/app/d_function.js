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
// 함수를 변수에 대입 시, 함수명이 필요없어서 익명함수로 쓴다.
const FncExpr = function (a, b){
  return a + b;
}

console.log(FncExpr) //Node.js 내부 디버깅 포맷 스타일
console.log(FncExpr(1000,3000));



// callback 함수 :
//  다른 함수에 인자로 전달되어, 특정시점에 호출되는 함수
//  매개변수로 받은 함수를 호출
//  용도 : 비동기 작업 끝난 후 실행, 순서보장, 이벤트 처리 등
// 함수 선언
const argFnc = function(fnc){
  fnc();
}

// 함수 출력
argFnc(function (){
  console.log('저는 callback 함수 입니다.')
});


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
// console.dir(window);


const rf = returnFnc();
rf();
rf();


//250402(수)
console.log('==================');
// 즉시실행함수 IIFE
// 함수의 선언과 동시에 실행
// 자바스크립트는 function 으로 시작하면 함수라고 생각함

(function iife(){
  console.log('선언과 동시에 실행')
})();

// 이렇게 써도 동일함
// !function iife(){
//   console.log('선언과 동시에 실행')
// }();


// 함수 표현식
// (arg...) => {};
// 1. 매개변수가 1개라면 매개변수 선언부의 괄호 생략 가능
// 2. 코드블록에 return 문 만 있다면 함수body 의 {} 생략 가능

let arr = [
    '감자', '고구마', '옥수수'
];

arr.forEach(e =>{
  console.log(e);
});


// 매개변수, 인덱스, 순회하고있는 배열도 확인가능
arr.forEach((e, idx, arr) =>{
  console.log(e);
  console.log(idx);
  console.log(arr);
});


// 자바스크립트는 오버로딩/오버라이딩 개념이 없고,
// 전달된 인자 수에 상관없이 함수는 정의된 매개변수로만 동작함
const argFunction = (t,s,u) => {
  console.log(t);
}

argFunction('hi');