document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('show-password-checkbox');
  
    showPasswordCheckbox.addEventListener('change', function () {

      if (showPasswordCheckbox.checked) {
        passwordInput.type = 'text'; 
      } else {
        passwordInput.type = 'password'; 
      }
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
    });
  });