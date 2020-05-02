// client verificiation- so no invalid data is inputted
function validation() {
  var bitCoinAddr = document.paymentForm.bitCoinAddress.value;
  if ((bitCoinAddr.length < 26) || (bitCoinAddr.length > 35)) {
    alert("Your Bitcoin address needs to be between 26-35 characters long!");
    return false;
  }
  // if matches with symbols
  if (bitCoinAddr.match(/(\W)/)) {
    alert("The BitCoin address cannot have symbols and other characters!");
    return false;
  }
  if (!bitCoinAddr.match(/(1|3|bc1)/)) {
    alert("Every BitCoin address must begin with either 1, 3 or bc1!");
    return false;
  }
  var moneyAmount = document.paymentForm.amount.value;

  if (!moneyAmount.match(/^\d+(\.\d+)?$/)) {
    alert("Invalid money format!");
    return false;
  }

  var phoneNumber = document.paymentForm.phoneNumber.value;
  if (phoneNumber.length != 8) {
    alert("Please enter a valid Singapore phone number below!");
    return false;
  }
  alert("Please check your phone for the newly generated OTP number!");
  return true;
}
