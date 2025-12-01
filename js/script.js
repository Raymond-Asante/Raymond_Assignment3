const $ = (selector) => document.querySelector(selector);

const processEntries = () => {
  const subtotal = parseFloat($("#subtotal").value);
  const taxRate = parseFloat($("#tax_rate").value);

  if (isNaN(subtotal) || subtotal <= 0 || subtotal >= 10000) {
    alert("Subtotal must be greater the 0 and less than 10,000");
    $("#subtotal").focus();
    return;
  }
  if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12) {
    alert("Tax Rate must be greater than 0 and less than 12");
    $("#tax_rate").focus();
    return;
  }

  const salesTax = subtotal * (taxRate / 100);
  const total = subtotal + salesTax;

  $("#sales_tax").value = salesTax.toFixed(2);
  $("#total").value = total.toFixed(2);

  $("#subtotal").focus();
};

const clearSubtotal = () => {
  $("#subtotal").value = "";
};
const clearTaxRate = () => {
  $("#tax_rate").value = "";
};

const clearAll = () => {
  clearSubtotal();
  clearTaxRate();
  $("#sales_tax").value = "";
  $("#total").value = "";
  $("#subtotal").focus();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#calculate").addEventListener("click", processEntries);
  $("#clear").addEventListener("click", clearAll);

  $("#subtotal").addEventListener("click", clearSubtotal);
  $("#tax_rate").addEventListener("click", clearTaxRate);

  $("#subtotal").focus();
});
