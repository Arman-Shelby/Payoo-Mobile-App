const validPin = 1234;
// Function to get input values

function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);

  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;

  return inputFieldValue;
}

// Function to get innerText as number
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);

  return elementValueNumber;
}

// function to set innertext
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}
//function to toggle
function handleToggle(id) {
  const forms = document.getElementsByClassName("form");
  for (const form of forms) {
    form.style.display = "none";
  }

  document.getElementById(id).style.display = "block";
}

//function to toggle buttons
function handleButtonToggle(id) {
  const formBtns = document.getElementsByClassName("form-btn");
  for (const btn of formBtns) {
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }

  document.getElementById(id).classList.remove("border-gray-300");

  document
    .getElementById(id)
    .classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// Add Money Feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = getInputValue("bank");

    const accountNumberInput = getInputValue("account-number");

    const amount = getInputValueNumber("add-amount");

    const pin = getInputValueNumber("add-pin");

    const availableBalance = getInnerText("available-balance");

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

    setInnerText(totalNewAvailableBalance);
  });

// Cashout Money feature

document.getElementById("Withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault();

  const amount = getInputValueNumber("withdraw-amount");

  const availableBalance = getInnerText("available-balance");

  const pin = getInputValueNumber("withdraw-pin");

  const accountNumberInput = getInputValue("withdraw-account-number");

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

  setInnerText(totalNewAvailableBalance);
});

//--------------------------------------------------
// toggling feature

// Add Money
document.getElementById("add-button").addEventListener("click", function () {
  handleToggle("add-money-parent");
  handleButtonToggle("add-button");
});

// cashout
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    handleToggle("cash-out-parent");
    handleButtonToggle("cash-out-button");
  });

//Transfer Money

document
  .getElementById("transfer-button")
  .addEventListener("click", function () {
    handleToggle("transfer-money-parent");
    handleButtonToggle("transfer-button");
  });
// Get Bonus
document.getElementById("bonus-button").addEventListener("click", function () {
  handleToggle("get-bonus-parent");
  handleButtonToggle("bonus-button");
});
