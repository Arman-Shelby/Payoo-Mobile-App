const validPin = 1234;
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumberInput = document.getElementById("account-number").value;
    const accountNumber = parseInt(accountNumberInput);
    const amountInput = document.getElementById("add-amount").value;
    const amount = parseInt(amountInput);

    const pin = parseInt(document.getElementById("add-pin").value);

    const availableBalance = parseInt(
      document.getElementById("available-balance").innerText
    );
    if (!bank || bank === "Select Bank") {
      alert("Please select a bank.");
      return;
    }

    if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount to add.");
      return;
    }

    if (accountNumberInput.length < 11) {
      alert("Please Provide a Valid Account Number");
      return;
    }

    if (pin !== validPin) {
      alert("Please Provide Valid Pin Number");
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    document.getElementById("available-balance").innerText =
      totalNewAvailableBalance;
  });
