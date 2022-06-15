// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.
describe("codedMessage", () => {
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    const secretCodeWord1 = "Lackadaisical"
     // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
     // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
     // Expected output: "3cc3ntr1c"
    expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})
// FAIL  ./code-challenges.test.js
// codedMessage
//   ✕ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)
// ● codedMessage › takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
//   ReferenceError: codedMessage is not defined


// b) Create the function that makes the test pass.
// Declare a function named codedMessage
// Assign parameter as a string
// Use a method to replace the letters with numbers
// g is used to find the vowel in the string
// i is used to find both lower and upper case letters
// Then give replace method the number we want to replace the letter with 
// Return coded message

const codedMessage = (string) => {
    return string.replace(/a/gi, 4).replace(/e/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0)
}
// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0. (2 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.
describe("wordLetter", () => {
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    expect(wordLetter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(wordLetter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})
// FAIL  ./code-challenges.test.js
// wordLetter
//   ✕ takes in an array of words and a single letter and returns all the words that contain that particular letter
// ● wordLetter › takes in an array of words and a single letter and returns all the words that contain that particular letter
//   ReferenceError: wordLetter is not defined

// b) Create the function that makes the test pass.

// Declare a function named wordLetter 
// Assign parameters array and string
// Use filter method to iterate through array
// Use a method to lower case the words in the array so all letters are included
// Use a built-in method that looks to see if the words include the letter

const wordLetter = (array, string) => {
    return array.filter(value => value.toLowerCase().includes(string))
}
// PASS  ./code-challenges.test.js
// wordLetter
//   ✓ takes in an array of words and a single letter and returns all the words that contain that particular letter (2 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})
// FAIL  ./code-challenges.t FAIL  ./code-challenges.test.js
//   fullHouse
//     ✕ takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind
//   ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind
//     ReferenceError: fullHouse is not defined


// b) Create the function that makes the test pass.
// Declare a function named fullHouse
// Assign array as parameter
// Use if else statement to determine if the condition is met (a pair and three of a kind) by checking the indexes of the values and checking if the values are equal. Return true if condition met
// Return false if condition is not met

const fullHouse = (array) => {
    if (array[0] === array[1,2] && array[3] === array[4] || 
        array[0] === array[2,3] && array[1] === array[4] ||
        array[0] === array[3,4] && array[1] === array[2]) {
        return true
    }  else {
        return false
    }
 }
//  PASS  ./code-challenges.test.js
//   fullHouse
//     ✓ takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind (1 ms)
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
