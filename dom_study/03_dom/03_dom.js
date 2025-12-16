const inputButton = document.querySelector(".input_button");

const students = [];

let count = 1;

inputButton.onclick = () => {
    const nameInput= document.querySelector(".inputs_name");
    const ageInput = document.querySelector(".inputs_age");
    const addressInput = document.querySelector(".inputs_adress");

    const nameValue = nameInput.value;
    const ageValue = ageInput.value;
    const addressValue = addressInput.value;

    if (
        nameValue.value === "" ||
        ageValue.value === "" ||
        addressValue.value === ""
    ) {
        alert("모든 항목을 입력하세요");
        return;
    }

    const tbody = document.querySelector("#t_tbody");

    tbody.innerHTML += `
    <tr>
    <td>${count++}</td>
    <td>${input1.value}</td>
    <td>${input2.value}</td>
    <td>${input3.value}</td>
    </tr>
    `;
    nameValue.value = "";
    ageValue.value = "";
    addressValue.value = "";
};
