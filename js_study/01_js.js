//변수 선언 => let, const
let name = "배찬익";
console.log(name);
console.log("helloword");
name = "이찬익";
console.log(name);

const age = 27;
console.log(age);
// age = 18
// console.age(age) 상수이기때문에 변할수 없다

//연산자
let data1 = 10;
let data2 = "10";

//동등 연산자
let result = data1 == data2;
console.log(result);

//일치 연산자
let result2 = data1 === data2;
console.log(result2);

//타입을 확인하고 싶다
console.log(typeof data1, typeof data2);

console.log("1" + "2");
console.log(1, 2);
console.log(1 + 2);

//not 연산자
console.log(!1); //false
console.log(!0); //true
console.log(!"a"); //false 문자열에 어떠한 것이 들어가있으면 true
console.log(!""); //true
console.log(!null); //true null은 false의 값을 들고 있기 때문
console.log(!!null); //false
//   z!! => 값을 명시적으로 boolean타입으로 변환하는 일반적인 방법

console.log("abc".length); //3
console.log("avs".length > 0); //true
console.log(!!"" === false); // true

let data = {
    name: "배찬익",
    age: 24,
};

if (!data) {
    console.log("사용자 정보가 없습니다");
} else if (data.name === "이찬익" && data.age === 24) {
    console.log("사용자 이름과 나이 모두 일치합니다");
} else if (data.name === "이찬익") {
    console.log("사용자 정보가 일치합니다");
} else if (data.age === 24) {
    console.log("일치하지 않지만 나이는 일치합니다");
} else {
    console.log("사용자가 일치하지 않습니다");
}

for(let i = 0; i<10; i++){
    console.log(i)
}
