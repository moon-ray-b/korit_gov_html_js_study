//단축 평가 논리 연산
// && ||

const name = "배찬익";
console.log(!!name && !!"배찬익"); //!! 붙으면 불리언이 선언되기 때문에 true 참참이기때문

//앞의 값이 true일때 뒤의 값을 리턴한다, false일때 false
console.log(true && false); // 앞이 참일 경우는 그냥 뒤에꺼를 출력한다

const data = [];
console.log(data.length != 0 && "데이터 출력");
// 배열안에 숫자가 있을경우에는 참임으로 데이터가출력 문구가뜸
// 하지만 배열안에 숫자가 아무것도 없으면 false로 출력됨

// or 앞의 갑싱 false일때 뒤의 "값"을 리턴, true일때 true
console.log(true || 10);

//??
//앞의 값이 null 또는 undifined가 아니면 앞의 값, 그 외에는 뒤의 값
console.log(null ?? 100);
console.log(undefined ?? 100);
console.log(20 ?? 100);
console.log(0 ?? 100);
console.log("" ?? 100);
