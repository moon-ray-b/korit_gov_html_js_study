const student = {
    name: "배찬익",
    age: 24,
    address: "부산",
    phone: "010-111-222",
};

const { name, address } = student;
console.log(name, address);

// REST 문법 속성들을 빼고 나머지 객체들을 묶어주는 역할이다.
const { age, phone, ...other } = student;
console.log(age);
console.log(phone);
console.log(other);

const numbers = [1, 2, 3, 4];
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);

//Spread 문법
//기존 객체의 모든 속성을 새로운 객체에 복사하거나,
//새로운 속성을 추가할 때 사용
const newStudent = {
    ...student,
    gender: "남",
};
console.log(newStudent);

const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);

let names = [];

function addName(name) {
    names = [...names, name];
}

addName("배찬익");
addName("이동윤");
addName("박윤호");

console.log(names);

let obj = {
    data1: "data1",
    data2: "data2",
};
const newobj = {
    ...obj,
    data3: "data3",
    data4: "data4",
};
console.log(newobj);

// function addobj(props) {
//     obj = { ...obj, ...props };
// }
// addProps({ data3: "data3", data4: "data4", data5: "data5" });
// console.log(obj);

//1.title, author, publisherYear 속성을 포함하는 book 객체 생성
//해리포터, j.k롤링, 1997
const book = {
    title: "해리포터",
    author: "j.k롤링",
    publisherYear: 1997,
};
//2. book객체의 title과 author 속성 값을 출력( 점 표기법, 대괄호 표기법)
console.log(book.title);
console.log(book.author);
console.log("---------------------------");
console.log(book["title"]);
console.log(book["author"]);
//3. book객체에 getAge()라는 메소드 추가
//  현제 연도( new Data().getFullTear())에서 publichserTear를 뺀 값을 리턴
book.getAge = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - book.publisherYear;
};
//4. getAge()호출해서 출력
console.log(book.getAge());
//5. book 객체에 새로운 속성 genre를 추가하고 값을 할당("판타지")
const newbook = {
    ...book,
    genre: "판타지",
};
console.log(newbook);
//6. book 객체의 publisherTear를 2000으로 수정
book.publisherYear = 2000;
console.log(book); // 2000

//------------------------------------------------------
const products = [
    { id: 1, name: "노트북", price: 1200000, category: "전자제품" },
    { id: 2, name: "티셔츠", price: 25000, category: "의류" },
    { id: 3, name: "모니터", price: 300000, category: "전자제품" },
    { id: 4, name: "청바지", price: 50000, category: "의류" },
    { id: 5, name: "마우스", price: 15000, category: "전자제품" },
];
//1. 50000원 이상인 제품만 필터링해서 expensiveProducts 배열에 넣고 출력
const expensiveProducts = products.filter((product) => product.price >= 50000);
console.log(expensiveProducts);

//2. products배열에서 각 제품의 이름과 가격만 포함하는 productNamesAndPrices배열 만들기
//map
// [{name: "노트북", price: 1200000}, {}...]
const productNamesAndPrices = products.map((product) => ({
    name: product.name,
    price: product.price,
}));
console.log(productNamesAndPrices);

//3. products배열에서 category가 전자제품인 제품만 선택해서 각 제품의 이름과 가격을
//10%할인한 discountProducts배열을 만드세요
const discountProducts = products
    .filter((product) => product.category === "전자제품")
    .map((product) => ({
        name: product.name,
        price: product.price * 0.9,
    }));
console.log(discountProducts);
