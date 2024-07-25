// 주어진 배열의 숫자들을 거꾸로 콘솔에 출력하는 함수 printReversed를 작성하세요.
function printReversed(arr) {
  for(let i = arr.length - 1; i -- ) {
    console.log(arr[i]);
  }
}
// 예시 출력
printReversed([1, 2, 3, 4, 5]); // 출력: 5, 4, 3, 2, 1
printReversed([10, 20, 30, 40]); // 출력: 40, 30, 20, 10