//배열
const arr1 = []; //빈 배열
const arr2 = new Array(); //빈 배열

//배열의 끝에 요소를 추가
arr1.push(10);
arr1.push(20);
arr1.push(30);
console.log(arr1);

arr2.push(10);
arr2.push(20);
arr2.push(30);
console.log(arr2);

console.log(arr1 === arr2);

const json1 = JSON.stringify(arr1);
const json2 = JSON.stringify(arr2);
console.log(json1);
console.log(json1 === json2);

const arr3 = JSON.parse(json1);
console.log(arr3);

const names = ["배찬익", "유노윤호", "s2희원s2"];
names.push("심재원");

//요소 제거 (배열의 요소중에 마지막 요소) 이후 제거된 요소를 반환
//pop
console.log(names.pop());

//요소 수정/삽입/제거 => splice (삽입될 인덱스, 제거할 개수, 추가할 요소...)
names.splice(1, 0, "오영진");
console.log(names);

names[0] = "빠니찬익";
console.log(names);

//요소 찾기 => 주어진 조건 함수를 만족하는 배열의 첫번쨰 요소를 반환
const findFx = (str) => str === "s2희원s2";
const foundName = names.find(findFx);
console.log(foundName);

console.log(names.find((name) => name === "s2희원s2"));

const student = [
    { name: "배찬익", age: 23 },
    { name: "박윤호", age: 6 },
    { name: "정희원", age: 15 },
    { name: "심재원", age: 18 },
];
console.log(
    student.find((student) => student.name === "박윤호" && student.age === 6)
);

console.log(names.includes("빠니찬익")); //있고 없고를 찾는 용어

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter((n) => n % 2 == 0)); //짝수를 가져와라 용어

console.log(student.filter((student) => student.age === 6)); // 나이를 6살인 애를 가지고 와라

console.log(numbers.map((n) => n * 10)); // n기준에서 10식 곱해라

console.log(
    student.map((student) => {
        if (student.age === 18) {
            return {
                name: student.name,
            };
        }
        return student;
    })//18세 해당하는 사람은 이름만 출력 되는것이고 나머지는 18세가 아니기 때문에 출력한다
);

