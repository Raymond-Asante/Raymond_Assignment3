const $ = (selector) => document.querySelector(selector);

const processEntry = () => {
    let income = parseFloat($("#income").value);

    if (isNaN(income) || income <= 0) {
        alert("Enter a number greater than 0");
        $("#income").focus();
        return;
    }

    const tax = calculateTax(income);
    $("#tax").value = tax.toFixed(2);

    $("#income").focus();
};

const calculateTax = (income) => {
    income = parseInt(income);
    
    let tax = 0;

    if (income <= 9875) {
        tax = income * 0.10;
    }
    else if (income <= 40125) {
        tax = 987.50 + (income - 9875) * 0.12;
    }
    else if (income <= 85525) {
        tax = 4617.50 + (income - 40125) * 0.22;
    }
    else if (income <= 163300) {
        tax = 14605.50 + (income - 85525) * 0.24;
    }
    else if (income <= 207350) {
        tax = 33271.50 + (income - 163300) * 0.32;
    }
    else if (incom <= 518400) {
        tax = 47367.59 + (income - 207350) * 0.35;
    }
    else {
        tax = 156235 + (income - 518400) * 0.37;
    }
    return tax;
}

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate_tax").addEventListener("click", processEntry);
    $("#income").focus();
});