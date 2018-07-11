function calculateSum() {
    debugger;
    let firstNumber = Number(document.getElementById('num1').value);
    let secondNumber = Number(document.getElementById('num2').value);

    let sum = firstNumber + secondNumber;
    console.log(sum);
    let result = document.getElementById('result');

    result.innerHTML = "<script>alert('Hacknat si, jajaj')</script>";

}

function expression() {
}