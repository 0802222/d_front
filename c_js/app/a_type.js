// 자바 스크립트 실행 환경 1. browser, 2.node.js
console.log('hello world!')

// 자바스크립트는 Interpreter 언어
// compile | interpreter 언어
// 2. 자바스크립트는 타입추론을 지원하는 언어
// 컴파일러가 자동 타입캐스팅을 지원해준다.

// 변수
// var 변수명   : 변수, es6 이전 사용, 함수 레벨스코프 지원, 변수 호이스팅 가능
// let 변수명   : 변수, es6 이후 사용, block 레벨스코프 지원, 변수 호이스팅 불가능
// const 변수명 : 상수, es6 이후 사용, block 레벨스코프 지원, 변수 호이스팅 불가능


// 변수 호이스팅
// 아직 선언되지 않은 변수를 사용
console.log(vStr);      // 2
var vStr;              // 실행순서 1
vStr = 'var';            // 3
console.log(vStr);

// console.log(lStr);
// let lStr = 'let';

// console.log(cStr);
// const cStr = 'const';
// cStr = 'modify'; // 상수라서 수정 불가


// class 없어도 함수선언가능
// scope : 선언된 변수가 유효한 범위
function studyScope(){
  if(true){
    const cScope = 'block level scope';
    var vScope = '함수레벨스코프';
    console.log(cScope);
  }
console.log(vScope);

}

studyScope();

// 자바스크립트는 순수객체지향프로그래밍 언어
// 모든 것이 객체

// primitive type : String, Number, Boolean, Null, Undefined
// reference type :Object

// Null      : 개발자가 명시적으로 값이 없음을 나타내기 위해 할당하는 값
// Undefined : 변수가 선언된 이후 초기화 되지 않았음. 자바스크립트 엔진이 자동으로 넣어주는 값

const username = '이초롱';
const age = 20;
const flg = true;
const empty = null;
let _undefined;
const obj = {name: '이초롱', subject:['java', 'html', 'css']}

console.log(username, typeof(username));
console.log(age, typeof(age));
console.log(flg, typeof(flg));
console.log(empty, typeof(empty));
console.log(_undefined, typeof(_undefined));
console.log(obj, typeof(obj));












