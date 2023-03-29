const inputButton = document.getElementById('inputButton')
const submitButton = document.getElementById('submitButton')
const wordCountDisplay = document.getElementById('wordCount')
const vowelCountDisplay = document.getElementById('vowelCount')
const resetButton = document.getElementById('reset')

const mainProject = () => {
  if (document.getElementById('textInput').value.trim() === '') {
    document.getElementById('textInput').value = ''
    return
  }
  const wordCount = getWordCount()
  const vowelCount = vowelFinder(wordCount)
  const display = updateDisplay(wordCount, vowelCount)

  return wordCount, vowelCount, display
}

const getWordCount = () => {
  const textInput = document.getElementById('textInput').value.trim()
  const textSplit = textInput.split(' ')
  const filteredText = textSplit.filter((word) => word !== '')

  return filteredText
}

const vowelFinder = (wordArray) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const splitWords = wordArray.toString().toLowerCase().split('')
  const vowelArray = splitWords.filter((word) => vowels.includes(word))

  splitWords.forEach((letter) => {
    if (vowels.includes(letter)) {
      vowelArray.push(letter)
    }
  })

  return vowelArray
}

const updateDisplay = (wordCount, vowelCount) => {
  wordCountDisplay.textContent = wordCount.length
  vowelCountDisplay.textContent = vowelCount.length
}

const resetDisplay = () => {
  wordCountDisplay.textContent = ''
  vowelCountDisplay.textContent = ''
}

inputButton.addEventListener('click', mainProject)
resetButton.addEventListener('click', resetDisplay)
