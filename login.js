const loginUrl = 'https://testapi.io/api/Stanelisa/resource/User';

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 
  sendDataToApi();
});

function sendDataToApi() {
  const username = document.getElementById('username-login').value;
  const password = document.getElementById('password-login').value;
  const data = { username, password };
  
  fetch(loginUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    hideLoginForm(); 
  })
  
}

function hideLoginForm() {
  const loginContainer = document.querySelector('.login-container');
  loginContainer.style.display = 'none';
}