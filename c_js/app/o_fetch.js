// HTTP 통신 해보기
import {KAKAOBOOK_API_KEY} from './assets/js/config';
const API_URL ='https://dapi.kakao.com/v3/search/book?';
const params = {
  query: '해리포터',
  size: '2'
}

// 원본
// const queryString = new URLSearchParams(params).toString();
// const response = fetch(API_URL+queryString, {
//   headers: {Authorization : KAKAOBOOK_API_KEY}
// }).then(response => response.json())
// .then(data => {
//   console.log(data.documents[0].title);
// });

//await 구조로 변경
const queryString = new URLSearchParams(params).toString();

(async () => {
  const response = await fetch(API_URL+queryString, {
    headers: {Authorization : KAKAOBOOK_API_KEY}
});

  const data = await response.json();
  const {
    documents:[{title}]
  } = data;
  console.log(title);
})();