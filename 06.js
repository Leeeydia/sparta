// // // 연산자 {+ - * / %}

// // // 더하기 연산자 - 우선순위 문자열
// // console.log(1+1);
// // console.log(1+"1");


// // // 빼기 연산자
// // //  우선순위가 숫자,
// // console.log(1-"2");
// // console.log(1- 2);

// // // 곱하기 연산자
// // // (암시적 형변환)더하기 빼고는 문자열보다 숫자가 우선
// // console.log(2 * 3);
// // console.log("2"*3);
// // // 나누기 연산자
// // // (암시적 형변환)
// // console.log(4/2);
// // console.log("4"/2);

// // // 나누기 연산자 / vs 나머지 연산자 %
// // console.log(5/2);
// // console.log(5%2);

// // // 할당연산자 (assigment)
// // // 등호연산자 (=)
// let x = 10;
// console.log(x);
// // // 더하기 등호 연산자
// // x+5;
// // console.log(x);

// x+=5;
// console.log(x);

// // 빼기 연산자
// x-=5;
// console.log(x);
// // x=x-5;

// // x를 -10으로
// x-=20;
// console.log(x);

// 곱하기 등호연산자

let a =10;
a *= 2;
console.log(a); 

// 비교연산자 (true 또는 false를 반환하는 연산자)
// 일치 연산자(===)
// 타입까지 일치해야 true를 반환하는 연산자

// 숫자 2랑 숫자 2가 같니?
console.log(2 === 2); 
console.log("2"===2);
console.log(2==="2");  

// 불일치 연산자(!==)
// 타입까지 일치해야 false를 반환하는 연산자

// 숫자 2가 숫자 2와 다르니? 아니!(false) 같아
console.log(2 !== 2);
console.log("2"!== 2); 
console.log(2 !== "2");  

