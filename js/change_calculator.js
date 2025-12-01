const $ = (selector) => document.querySelector(selector);

const processEntry = () => {
  const cents = parseInt($("#cents").value);

  if (isNaN(cents) || cents < 0 || cents > 99) {
    alert("Cents must be between 0 and 99");
    $("#cents").focus();
    return;
  } 
  makeChange(cents);
};

const makeChange = (amount) => {
  let cents = amount;

  const quarters = parseInt(cents / 25);
  cents = cents % 25;

  const dimes = parseInt(cents / 10);
  cents = cents % 10;

  const nickels = parseInt(cents / 5);
  cents = cents % 5;

  const pennies = cents;

  $("#quarters").value = quarters;
  $("#dimes").value = dimes;
  $("#nickels").value = nickels;
  $("#pennies").value = pennies;
};

document.addEventListener("DOMContentLoaded", () => {
  $("#make_change").addEventListener("click", processEntry);
  $("#cents").focus();
});