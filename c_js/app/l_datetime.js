import dayjs from 'dayjs';

const studyDayjs = () => {
  const now = dayjs();
  console.log('연', now.year());
  console.log('월', now.month() + 1); //4월인데 3월나옴 -> 자바스크립트 월이 0부터 시작한다고함, 그래서 +1 해서써야함
  console.log('일', now.date());
  console.log('시', now.hour());
  console.log('분', now.minute());
  console.log('초', now.second());
  console.log('요일', now.day());


  // 7 일뒤 날짜
  console.log(now.add(7, 'day').toString());
  console.log(now.add(7, 'hour').toString());
}

studyDayjs();

const studyDateTime = () => {
  const now = new Date();
  console.log('연', now.getFullYear());
  console.log('월', now.getMonth()); //4월인데 3월나옴
  console.log('일', now.getDate());
  console.log('시', now.getHours());
  console.log('분', now.getMinutes());
  console.log('초', now.getSeconds());
  console.log('요일', now.getDay());
}

studyDateTime();