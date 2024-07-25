// 주어진 배열에서 짝수 숫자만 콘솔에 출력하는 함수 printEvenNumbers를 작성하세요.
function printEvenNumbers(arr) {
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0 ){
      console.log(arr[i]);
    }
  }
  // 여기에 for 문과 if 문을 작성하세요
}
// 예시 출력
printEvenNumbers([1, 2, 3, 4, 5, 6]); // 출력: 2, 4, 6

printEvenNumbers([10, 15, 20, 25, 30]); // 출력: 10, 20, 30


// .length 는 문자열에만 쓰이는게 아니고 숫자에도 쓰이나요?
// 인덱스를 비교한다는게 뭐지 if 문 왜 i % 0 은 안되는지 궁금
// for 문에서 arr[i]라고 안써도 되는 이유


function printTest(arr){
for(let i = 0; i < arr.length; i++){
  if(arr[i] % 3 === 0){
    console.log(arr[i])
  }
}

}

// print 값 작성하기