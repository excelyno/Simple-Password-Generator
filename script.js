document.getElementById('generateBtn').addEventListener('click', generatePassword);

function generatePassword() {
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    let characterPool = '';
    if (includeUppercase) characterPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) characterPool += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) characterPool += '0123456789';
    if (includeSymbols) characterPool += '!@#$%^&*()_+[]{}|;:,.<>?';

    if (characterPool === '') {
        alert('Please select at least one character type.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    document.getElementById('password').textContent = password;
}
