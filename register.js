const registerUrl = 'https://testapi.io/api/Stanelisa/resource/Arnoldas';

const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  sendDataToApi();
});

function sendDataToApi() {
  const username = document.getElementById('username-register').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password-register').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  const data = {
    username: username,
    email: email,
    password: password,
    'confirm-password': confirmPassword
  };

  fetch(registerUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('API response:', data);
    hideRegisterForm(); 
  })
 
}

function hideRegisterForm() {
    const registerContainer = document.querySelector('.register-container');
    registerContainer.style.display = 'none';
}