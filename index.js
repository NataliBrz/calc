
function plus() {
    a = prompt('a');
    b = prompt('b');
    console.log(summ(a, b))
    alert(summ(a, b));
}

function summ(a, b) {
    return Number(a) + Number(b);
}

document.getElementById('minus').onclick = minus;

function minus() {
    a = prompt('a');
    b = prompt('b');
    console.log(rest(a, b))
    alert(rest(a, b));
}

function rest(a, b) {
    return Number(a) - Number(b);
}

function multiplication() {
    a = prompt('a')
    b = prompt('b')
    alert(a * b)
}

function division() {
    a = prompt('a')
    b = prompt('b')
    alert(a / b)
}


