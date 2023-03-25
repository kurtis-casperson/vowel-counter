const inputButton = document.getElementById('inputButton')
const submitButton = document.getElementById('submitButton')
const wordCountDisplay = document.getElementById('wordCount')
const vowelCountDisplay = document.getElementById('vowelCount')

const mainProject = () => {
  const wordCount = getWordCount()
  const vowelCount = vowelFinder(wordCount)
  const display = updateDisplay(wordCount, vowelCount)

  return wordCount, vowelCount, display
}

const getWordCount = () => {
  const textInput = document.getElementById('textInput').value
  const textSplit = textInput.split(' ')
  console.log('textSplit', textSplit)
  return textSplit
}

const vowelFinder = (wordArray) => {
  const vowelArray = []
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const splitWords = wordArray.toString().split('')

  splitWords.forEach((letter) => {
    if (vowels.includes(letter)) {
      vowelArray.push(letter)
      console.log(vowelArray, 'vowelArray')
    }
  })

  return vowelArray
}

const updateDisplay = (wordCount, vowelCount) => {
  wordCountDisplay.textContent = wordCount.length
  vowelCountDisplay.textContent = vowelCount.length
}

inputButton.addEventListener('click', mainProject)
