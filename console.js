document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const showPasswordCheckbox = document.getElementById('show-password-checkbox');
  const successMessage = document.getElementById('success-message');

  showPasswordCheckbox.addEventListener('change', function () {
    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
      alert('Please fill in both email and password.');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);

    successMessage.textContent = "Login successful!";
    successMessage.style.display = 'block';

    form.reset();

    setTimeout(function () {
      successMessage.style.display = 'none';
      window.location.href = 'https://aws.amazon.com/';
    }, 2000);
  });
});


