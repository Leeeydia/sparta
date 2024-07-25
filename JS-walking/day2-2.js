function assignGrade(score) {


  if(score >= 90){
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  }
}


assignGrade(95); // 출력: "A"
assignGrade(85); // 출력: "B"
assignGrade(75); // 출력: "C"
assignGrade(65); // 출력: "D"
assignGrade(50); // 출력: "F"