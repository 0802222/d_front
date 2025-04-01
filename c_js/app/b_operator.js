// 산술 : +, -, *, /, %
// 비교 : < > <= => == != === !=== (엄격하게 다르다)
// 논리 : &&, ||
// 문자열 결합 : +
// 단항 연산 : ++, --

// == 동등연산자, === 일치연산자
// 동등연산자 : 값으로 비교
// 일치연산자 : 값과 타입으로 비교

const num = 0;
const str = '0';
const arr = [];
const empty ='';
const _null = null;
let _undefined;

console.log('======================');
console.log('0 == \'0\' : ', num == str);
console.log(`[] == '' :`, arr == empty);

console.log('===정확한 타입비교 ===');
console.log('0 == \'0\' : ', num === str);
console.log(`[] == '' :`, arr === empty);

console.log('======================');



// 자바 스크립트 boolean 변환
// 1. false : 0, '', null, undefined, Nan(number 가 아닌 타입을 사용해 산술연산을 이용할 경우 발생)

// 숫자가 아닌타입과 숫자를 연산했을경우 'NaN' 반환
console.log('a'/100);

if('a'/100){
  console.log('true');
}else{
  console.log('false');
}
