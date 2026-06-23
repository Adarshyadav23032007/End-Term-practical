function checkArmstrong() {
    let num = document.getElementById("number").value;
    let originalNum = num;
    let digits = num.length;
    let sum = 0;

    for (let digit of num) {
        sum += Math.pow(Number(digit), digits);
    }

    let result = document.getElementById("result");

    if (sum == originalNum) {
        result.textContent = originalNum + " is an Armstrong Number";
    } else {
        result.textContent = originalNum + " is Not an Armstrong Number";
    }
}