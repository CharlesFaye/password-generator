const passwordDisplay = document.getElementById('passwordDisplay');
const passwordForm = document.getElementById('passwordForm');
const length = document.getElementById('length');
const includeLowercase = document.getElementById('includeLowercase');
const includeUppercase = document.getElementById('includeUppercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');
const generateBtn = document.querySelector('[type="submit"]');
const copyBtn = document.getElementById('copyBtn');

const uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ["!", "@", "#", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "{", "}", "[", "]", ":", ";", "<", ">", "?", "/"];
let allCharacters = [...uppercaseLetters, ...lowercaseLetters, ...numbers, ...symbols];




let str = "";

/**
 * Generates a random password based on the specified length and character set,
 * then displays it in the designated password display element.
 * 
 * @param {Event} e - The event object from the form submission.
 * @returns {void}
 */
const generatePassword = (e) => {
    e.preventDefault();
    let value = length.value;
    for(let i = value ; i > 0; i--) {
        let randomChar = Math.floor(Math.random() * allCharacters.length);
        let randomlyReturnedChar = allCharacters[randomChar];
        str += randomlyReturnedChar;
    }
    
     passwordDisplay.textContent = str;
     str = "";
   
}



generateBtn.addEventListener('click', generatePassword);





/**
 * Updates the global `allCharacters` array based on the user's selected options.
 * Concatenates character sets (uppercase, lowercase, numbers, symbols) according to the state of their respective checkboxes.
 *
 * Assumes the existence of the following variables in the outer scope:
 * - includeUppercase: Checkbox input for including uppercase letters.
 * - includeLowercase: Checkbox input for including lowercase letters.
 * - includeNumbers: Checkbox input for including numbers.
 * - includeSymbols: Checkbox input for including symbols.
 * - uppercaseLetters: Array of uppercase letter characters.
 * - lowercaseLetters: Array of lowercase letter characters.
 * - numbers: Array of number characters.
 * - symbols: Array of symbol characters.
 * - allCharacters: Array to be updated with the selected character sets.
 */
function updateAllCharacters() {
    let chars = [];
    if (includeUppercase.checked) chars = chars.concat(uppercaseLetters);
    if (includeLowercase.checked) chars = chars.concat(lowercaseLetters);
    if (includeNumbers.checked) chars = chars.concat(numbers);
    if (includeSymbols.checked) chars = chars.concat(symbols);
    allCharacters = chars;
}


includeUppercase.addEventListener('change', updateAllCharacters);
includeLowercase.addEventListener('change', updateAllCharacters);
includeNumbers.addEventListener('change', updateAllCharacters);
includeSymbols.addEventListener('change', updateAllCharacters);


updateAllCharacters();


/**
 * Copies the generated password displayed in the UI to the user's clipboard.
 * Updates the copy button text to indicate success, then resets it after 5 seconds.
 *
 * @function
 * @returns {void}
 */
const copyPassword = () => {
    navigator.clipboard.writeText(passwordDisplay.textContent);
    copyBtn.textContent = "Mot de passe copié !";
   setTimeout(() => {
        copyBtn.textContent = "Copy the password";
   }, 5000);
}


copyBtn.addEventListener('click', copyPassword);


