// // // 걷기반 1일차
// // // const word = "Hello World!";
// // // console.log(word);

// // // word - 변수 이름

// // // const let var
// // // var 는 사용하지 않음

// // // const 와 let 사용해서 변수를 만들 것

// // // c / l 다음 오는 문자가 변수 이름
// // // 변수값 - 할당되는 값 -> 헬로월드

// // // 변수 할당 - 변수값을 변수에 저장하는 행위
// // // const word 변수 선언
// // // hello world 변수 할당

// // // console.log () -> 변수를 참조하다 (메모리에 있는걸 찾다)


// // // --------------------------------------------------------
// // // 데이터 타입 : 변수에 어떤 타입이 저장될 수 있는가?

// // // const word = "Hello World!";
// // // console.log(word);

// // // 문자열 -> 따옴표 필요
// // // .length -> 많이 사용하는 기능 중 하나
// // // ex. 아이디 : 닉네임.length는 10글자 이하만 통과

// // // const lenght0fStr = str.

// // // const word = 1;

// // // -> 정수 : 따옴표 금지

// // // const word = 1.1;
// // // 실수 

// // // const str = "this is java script!";

// // // // replece - 대체하다

// // // // const replacedStr = str, replace()

// // // const 남자여부 = true;

// // // if (남자여부 !== false) { 
// // //   console.log("저는 여자입니다!!")
// // // }

// // // if (!남자여부) {
// // //   console.log("저는 여자입니다!")
// // // }

// // // 논리곱 (&&)
// // const bool1 = false;
// // const bool2 = true;
// // const result = bool && bool2;

// // console.log(result);
// // 모든게 t 여도 단하라도 f면 f임



// // 논리합

// const bool1 = true
// const bool2 = true;
// const result = bool1 || bool2;


// // 함수
// // 이름, 인풋 ( 매개변수, 파라미터), 아웃

// // 함수 선언문
// function 함수이름 ( 인풋1, 인풋2, 인풋3 ) { 
//   // 어떠한 동작 1 
//   // 어떠한 동작 2
//   // 어떠한 동작 3
// return 아웃풋;
// }


// // 함수 표현식
// const 함수이름 = ( 인풋1, 인풋2, 인풋3 ) {
//   // 어떠한 동작 1 
//   // 어떠한 동작 2
//   // 어떠한 동작 3
//   return 아웃풋

// }
// 함수의 선언! (함수는 선언하고 사용한다 선언은 한번 사용은 여러번)
function add (숫자1, 숫자2) {
  return 숫자1 + 숫자2;
}
console.log("숫자1 =>", 숫자1);
console.log("숫자2=>", 숫자2)

// 함수의 사용
add (3, 5)

