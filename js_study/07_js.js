// 비구조할당(구조 분해)
// 배열이나 객체의 속성을 해체하여 개별 변수에할당하는 문법

const student = {
    name: "배찬익",
    age: 24,
    address: "대연동",
};
// const studentName = student.name
// const studentAge = student.age

// const { name: studentName, age: studentAge, address: studentAddress } = student; //비구조
// console.log(studentName);
// console.log(studentAge);
// console.log(studentAddress);

const { name, age, address } = student;
console.log(name, age, address); //각각 바로 가져오는 것

// function printInfo(studentObj) {
//     console.log(studentObj.name);
//     console.log(studentObj.age);
//     console.log(studentObj.address);
// }
// printInfo(student);

function printInfo({ name: studentName, age, address }) {
    console.log(studentName);
    console.log(age);
    console.log(address);
}
printInfo(student); // 비구조 할당을 할수 있다

const s1 = {
    name: "배찬익",
    age: 24,
};

const s2 = {
    name: "배찬찬찬익익익",
    age: 30,
};
//서로 다른 객체지만 속성명이 같아서 충돌이 일어날 수 있다
const { name: n1, age:a1 } = s1;
const { name: n2, age:a2 } = s2;

const numbers = [1, 2, 3, 4, 5]
const [num1, num2, num3, num4, num5] = numbers;
console.log(num1)
console.log(num2)
console.log(num3)