export function busquedaComponent() {
  const container = document.createElement('div');
  container.className = "busqueda-container";

  // Parte superior con la imagen
  const topDiv = document.createElement('div');
  topDiv.className = "busqueda-top";
  container.appendChild(topDiv);

  // Parte inferior con el contenido
  const bottomDiv = document.createElement('div');
  bottomDiv.className = "busqueda-bottom";

  // Flecha atrás
  const backBtn = document.createElement('button');
  backBtn.className = 'back-btn';
  backBtn.textContent = '←';
  bottomDiv.appendChild(backBtn);

  const welcomeTitle = document.createElement('h2');
  welcomeTitle.textContent = 'Welcome Back!';
  topDiv.appendChild(welcomeTitle);

  const welcomeText = document.createElement('p');
  welcomeText.textContent = "Yay! You're back! Thanks for shopping with us. We have exciting deals and promotions going on!";
  topDiv.appendChild(welcomeText);
  // Welcome

  const loginBtn = document.createElement('button');
  loginBtn.className = 'btn-login';
  loginBtn.textContent = 'LOG IN';
  topDiv.appendChild(welcomeText);

  // FORMULARIO
  const form = document.createElement('form');
  form.className = 'login-form';

  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email address';
  form.appendChild(emailLabel);

  const emailInputDiv = document.createElement('div');
  emailInputDiv.className = 'input-icon';

  const emailIcon = document.createElement('span');
  emailIcon.className = 'icon-email';
  emailIcon.textContent = '📧';
  emailInputDiv.appendChild(emailIcon);

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.placeholder = 'hlo@geeta.co';
  emailInput.required = true;
  emailInputDiv.appendChild(emailInput);
  form.appendChild(emailInputDiv);

  const passLabel = document.createElement('label');
  passLabel.textContent = 'Password';
  form.appendChild(passLabel);

  const passInputDiv = document.createElement('div');
  passInputDiv.className = 'input-icon';

  const passIcon = document.createElement('span');
  passIcon.className = 'icon-pass';
  passIcon.textContent = '🔒';
  passInputDiv.appendChild(passIcon);

  const passInput = document.createElement('input');
  passInput.type = 'password';
  passInput.placeholder = 'Enter your password';
  passInput.required = true;
  passInputDiv.appendChild(passInput);
  form.appendChild(passInputDiv);

  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options';

  const rememberDiv = document.createElement('label');
  rememberDiv.className = 'remember-me';
  const rememberInput = document.createElement('input');
  rememberInput.type = 'checkbox';
  rememberDiv.appendChild(rememberInput);
  rememberDiv.appendChild(document.createTextNode('Remember me'));
  optionsDiv.appendChild(rememberDiv);

  const forgotPass = document.createElement('a');
  forgotPass.href = '#';
  forgotPass.textContent = 'Forgot Password?';
  forgotPass.className = 'forgot-pass';
  optionsDiv.appendChild(forgotPass);

  form.appendChild(optionsDiv);

  const bigLoginBtn = document.createElement('button');
  bigLoginBtn.type = 'submit';
  bigLoginBtn.className = 'btn-login-big';
  bigLoginBtn.textContent = 'LOG IN';
  form.appendChild(bigLoginBtn);

  bottomDiv.appendChild(form);

  const footerText = document.createElement('p');
  footerText.className = 'footer-text';
  footerText.innerHTML = 'Not registered yet? <a href="#">Create an Account</a>';
  bottomDiv.appendChild(footerText);

  // Eventos
  loginBtn.addEventListener('click', () => {
    alert('Log in clicked!');
  });

  bigLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Submit login form');
  });

  backBtn.addEventListener('click', () => {
    window.history.back();
  });

  container.appendChild(bottomDiv);
  return container;
}
