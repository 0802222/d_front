// 자바 스크립트의 에러는 모두 unchecked error (예외처리를 강제하지 않음)

// 커스텀 에러 만들기
class CommonError extends Error{
  constructor(message) {
    super(message);
  }
}


//try-catch 처리
const throwCommonException = () => {
  console.log('throwCommonException 호출');
  throw new CommonError('정책 예외');
}

try {
  console.log('try block');
  throwCommonException();
}catch (error){
  console.trace(error);
  console.error(error);
}finally {
  console.log('finally');
}