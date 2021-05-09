function createAccount(pin, balance = 0) {
  return {
    checkBalance: function (inputPin) {
      if (inputPin !== pin) return `Invalid PIN.`;
      return "$" + balance;
    },
    deposit: function (inputPin, dollars) {
      if (inputPin !== pin) return `Invalid PIN.`;
      balance += dollars;
      return `Successfully deposited $${dollars}. Current balance: $${balance}.`;
    },
    withdraw: function (inputPin, dollars) {
      if (inputPin !== pin) return `Invalid PIN.`;
      if (dollars > balance)
        return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
      balance -= dollars;
      return `Successfully withdrew $${dollars}. Current balance: $${balance}.`;
    },

    changePin: function (inputPin, newPin) {
      if (inputPin !== pin) return `Invalid PIN.`;
      pin = newPin;
      return `PIN successfully changed!`;
    },
  };
}

module.exports = { createAccount };
