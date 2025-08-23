document
  .getElementById("add-money-btn")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;

    const accountNumber = document.getElementById("account-number").value;

    const amount = parseInt(document.getElementById("add-amount").value);

    const pin = document.getElementById("add-pin").value;

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    console.log(availableBalance);

    // Validate that amount and availableBalance are numbers
    if (isNaN(amount) || isNaN(availableBalance)) {
      alert("Please enter valid numbers for amount and available balance.");
      return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    document.getElementById('available-balance').innerText = totalNewAvailableBalance;

    
  });
