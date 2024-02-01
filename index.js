const checkBtn = document.getElementById('check-btn')
const resultDiv = document.getElementById('result')

// helper
function checkPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const reversedStr = cleanedStr.split('').reverse().join('')
  return cleanedStr === reversedStr
}

checkBtn.addEventListener('click', () => {
  const userInput = document.getElementById('text-input').value.toLowerCase()

  if (!userInput) {
    alert('Please input value')
  } else {
    const isPalindrome = checkPalindrome(userInput)

    if (isPalindrome) {
      resultDiv.innerText = `${userInput} is a palindrome`
    } else {
      resultDiv.textContent = `${userInput} is not a palindrome`
    }
  }
})
