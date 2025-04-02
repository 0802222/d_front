// 도서 정보
let top1 = {
  title : '소년이 온다',
  awards : ['노벨문학상', '이상문학상'],
  category : {depth1: '문학', depth2: '소설'},
  'categoryCode':12,
}

let top2 = {
  title : '당신의 이름을 지어다가 며칠은 먹었다',
  awards : ['젊은 예술가상'],
  category : {depth1: '문학', depth2: '시'},
  'categoryCode':12,
}

let top3 = {
  title : 'Object',
  awards : [],
  category : {depth1: '기술', depth2: 'IT'},
  'categoryCode':15,
}


console.log('==========C========');
// C
// MDN에 가보면 add 대신 push 가 있음
// push : 배열의 뒤에 요소를 추가해줌
const studyPush = () => {
  const arr = ['a', 'b', 'c', 'd', 100];
  arr.push('e');
  console.log('push : ', arr);
}

studyPush();



// unshift : 배열의 앞에 요소를 추가해줌
const studyUnshift = () => {
  const arr = ['a', 'b', 'c', 'd', 100];
  arr.unshift('e');
  console.log('unshift : ',arr);
}

studyUnshift();


// splice : 배열에서 요소를 선택해 자르거나 교체
// deleteCount 를 0으로 하면 중간에 적용됨
// 2번인덱스 뒤에 추가하고싶으면 start 2, delete 0, 추가할 아이템 순으로 넣으면 됨

// deleteCount 를 주면 삭제 후 추가됨 => 교체
const studySplice = () => {
  const arr = ['a', 'b', 'c', 'd', 100];
  arr.splice(2, 0, 'ㄱ', 'ㄴ');
  console.log('splice : ',arr);
}

studySplice();



console.log('==========R========');
// R
const studyRead = () => {
  const arr = ['a', 'b', 'c', 'd', 100];
  for (let i = 0; i < arr.length; i++) {
    console.log('read : ',arr[i]);
  }
}

studyRead();

console.log('==========U========');
// U
const studyUpdate = () => {
  const arr = ['a', 'b', 'c', 'd', 100];
  arr.splice(2, 2, 'ㄱ', 'ㄴ');
  console.log('update : ',arr);
}

studyUpdate();


console.log('==========D========');
// // D
const studyDelete = () => {
  const arr = ['a', 'b', 'c', 'd', 100];
  arr.splice(2, 2);
  console.log('delete : ',arr);
}

studyDelete();




console.log('=======map===========');
// map filter reduce
// map 함수는 배열의 각 요소를 일정한 로직으로 변형해서 새로운 배열을 만들어 줌(원본 변경x)
const studyMap = () => {
  const arr = [1,2,3,4,5,6];

  // arr 의 각 요소에 10을 곱한 배열이 필요하다.
  const res = arr.map(e => e * 10);
  console.log(res);

  const books = [top1, top2, top3];
  const titles = books.map(e => e.title);
  console.log(titles);
}
studyMap();





console.log('========filter==========');

const studyFilter = () => {
  const arr = [1,2,3,4,5,6];

  // 짝수만 출력
  const even = arr.filter(e => e % 2 === 0);
  console.log(even);

  // 상 2개이상 받은 도서만 출력
  const books = [top1, top2, top3];
  console.log(books.filter(e => e.awards.length > 1));
}

studyFilter();




console.log('========reduce==========');
// reduce : 배열의 모든 요소를 하나의 결과값으로 축약하는 함수
// arr.reduce((누적값, 현재값) => {}, 초기값)
const studyReduce = () => {
  const arr = [1,2,3,4,5,6];

  const oddSum = arr.reduce((acc, cur) => {
    if(cur % 2 === 1){
      acc += cur;
    }

    return acc;
  } , 0)

  console.log(oddSum);
}
studyReduce();



console.log('=========quizReduce=========');
// arr의 각 요소에 10을 곱한 배열이 필요하다.
// reduce 를 이용해 구현

// reduce 는 배열을 돌면서 누적 계산을 하거나, 배열/객체/숫자 등 원하는 형태로 하나의 결과값을 만들 때 쓰는 함수
const quizReduce = () => {
  const arr = [1,2,3,4,5,6];
  const res = arr.reduce((acc , cur) => {
    acc.push(cur * 10);
    return acc;
  }, [])

  console.log(res);
}
quizReduce();

console.log('========join==========');
// 배열 요소들을 문자열로 합칠 때, 각 요소 사이에 ‘구분자’를 끼워 넣는 메서드
const studyJoin = () => {
  const arr = ['a', 'b', 'c', 'd'];
  console.dir(arr.join('****'));
}
studyJoin();

//막막하면 함수정보 다 찍어보기


console.log('==================');
// 유사배열객체
// length 속성이 있다.
// 객체의 속성이 index 이다.

// 배열이 아니기때문에 filter, forEach 못씀 -> 대신 for문 사용 => 배열로 변환하면 사용가능
// 비슷한걸로는 DOM의 Nodelist 가 있다.
const similarArray = {
  0: 'hi',
  1: 'hello',
  2: 'bye',
  length: 3
}

const studySimilarArray = () => {
  const arr = Array.from(similarArray);
  arr.forEach(e => console.log(e));
}
studySimilarArray();