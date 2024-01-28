const inputEl = document.getElementById("text-input");
const resultEl = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");

// function to check Palindrome
function updateResult() {
  // Getting User Value
  const userEnteredValue = inputEl.value;

  //   Checking if user have entered value
  if (userEnteredValue) {
    const newValue = validateString(userEnteredValue);
    // Checking Palindrome or not
    if (isPalindrome(newValue)) {
      resultEl.innerHTML = `<p><span id="result-highlight">${userEnteredValue}</span> is a palindrome.</p>`;
    } else {
      resultEl.innerHTML = `<p><span id="result-highlight">${userEnteredValue}</span> is not a palindrome.</p>`;
    }
  } else {
    alert("Please input a value");
  }
}

// Function for removing spaces and special characters
function validateString(str) {
  const regex = /[^a-zA-Z0-9]+/g;
  const updatedValue = str.replace(regex, "").toLowerCase();
  return updatedValue;
}

// Function for checking if value is palindrome
function isPalindrome(str) {
  let result = str === str.split("").reverse().join("") ? true : false;
  return result;
}

checkBtn.addEventListener("click", updateResult);
