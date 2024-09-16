const input = document.querySelectorAll('input');
const fieldset = document.querySelector('fieldset');

function Calculate() {
    for (let n = 0; n < 4; n++) {
        if (Number(input[n].value) > Number(input[n+1].value)) {
            let a = input[n].value;
            input[n].value = input[n+1].value;
            input[n+1].value = a;
            n = -1;
        };
    };
    fieldset.style.display = "block";
    fieldset.innerHTML = "<legend>Aqui estão os números em ordem</legend>";
    for (let n = 0; n < 5; n++) {
        fieldset.innerHTML += " " + input[n].value;
    };
};