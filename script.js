const lengthInput = document.getElementById("length");
const lowercaseCheckbox = document.getElementById("lowercase");
const uppercaseCheckbox = document.getElementById("uppercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const passwordDisplay = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyToClipboard);

function generatePassword() {
    let characters = "";
    let passwordLength = parseInt(lengthInput.value);

    if (lowercaseCheckbox.checked) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if (uppercaseCheckbox.checked) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (numbersCheckbox.checked) {
        characters += "0123456789";
    }

    if (symbolsCheckbox.checked) {
        characters += "!@#$%^&*()_+-=[]{};':\"\\|,.<>/?";
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordDisplay.textContent = password;
}

function copyToClipboard() {
    const passwordText = passwordDisplay.textContent;

    navigator.clipboard.writeText(passwordText)
        .then(() => {
           
            console.log("Password copied to clipboard!");
        })
        .catch((error) => {
            console.error('Unable to copy to clipboard', error);
           
        });
}

