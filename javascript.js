function calculateEntropy() {
    var password = document.getElementById('password').value;
    var charsetSize = calculateCharsetSize(password);
    var passwordLength = password.length;
    var entropy = Math.log2(charsetSize) * passwordLength;

    document.getElementById('entropy').innerHTML = entropy.toFixed(2);
}

function calculateCharsetSize(password) {
    var charset = new Set();
    for (var i = 0; i < password.length; i++) {
        charset.add(password.charAt(i));
    }
    return charset.size;
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var showPasswordBtn = document.getElementById('showPasswordBtn');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordBtn.textContent = 'Hide Password';
    } else {
        passwordInput.type = 'password';
        showPasswordBtn.textContent = 'Show Password';
    }
}