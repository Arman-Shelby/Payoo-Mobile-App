// Add Money Feature
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

// Cashout Money feature

document.getElementById("Withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const amount = parseInt(document.getElementById("withdraw-amount").value);

  const availableBalance = parseInt(
    document.getElementById("available-balance").innerText
  );

  const pin = parseInt(document.getElementById("withdraw-pin").value);
  const accountNumberInput = document.getElementById("withdraw-account-number").value;

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount to withdraw.");
    return;
  }

  if (amount > availableBalance) {
    alert("Insufficient balance.");
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

  const totalNewAvailableBalance = availableBalance - amount;

  document.getElementById("available-balance").innerText =
    totalNewAvailableBalance;
});


//--------------------------------------------------
// toggling feature

// Add Money
document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "none";

  document.getElementById("add-money-parent").style.display = "block";
});

// cashout
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
  });
