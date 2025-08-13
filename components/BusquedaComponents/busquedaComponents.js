export function busquedaComponent() {
  const container = document.createElement('div');
  container.className = "login-container";

  // Parte superior morada
  const topDiv = document.createElement('div');
  topDiv.className = "login-top";
  container.appendChild(topDiv);

  // Imagen de fondo
  const imageDiv = document.createElement('div');
  imageDiv.className = "login-image";
  topDiv.appendChild(imageDiv);

  // Contenido de bienvenida
  const welcomeDiv = document.createElement('div');
  welcomeDiv.className = "welcome-content";
  topDiv.appendChild(welcomeDiv);

  const welcomeTitle = document.createElement('h1');
  welcomeTitle.className = "welcome-title";
  welcomeTitle.innerHTML = "Welcome<br>Back!";
  welcomeDiv.appendChild(welcomeTitle);

  const welcomeText = document.createElement('p');
  welcomeText.className = "welcome-text";
  welcomeText.textContent = "You? You're back! Thanks for shopping with us. We have excited deals and promotions going on, grab your pick now!";
  welcomeDiv.appendChild(welcomeText);

  const bottomDiv = document.createElement('div');
  bottomDiv.className = "login-bottom";
  container.appendChild(bottomDiv);

  const card = document.createElement('div');
  card.className = "login-card";
  bottomDiv.appendChild(card);
  // FORMULARIO

  const form = document.createElement('form');
  form.className = 'login-form';

  
  const emailGroup = document.createElement('div');
  emailGroup.className = 'input-group';
  
  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email address';
  emailLabel.htmlFor = 'email';
  emailGroup.appendChild(emailLabel);

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.id = 'email';
  emailInput.className = 'input-field';
  emailInput.placeholder = 'blog@acta.cq';
  emailInput.required = true;
  emailGroup.appendChild(emailInput);
  
  form.appendChild(emailGroup);

  
  const passGroup = document.createElement('div');
  passGroup.className = 'input-group';
  
  const passLabel = document.createElement('label');
  passLabel.textContent = 'Password';
  passLabel.htmlFor = 'password';
  passGroup.appendChild(passLabel);

  const passInput = document.createElement('input');
  passInput.type = 'password';
  passInput.id = 'password';
  passInput.className = 'input-field';
  passInput.placeholder = 'Enter your password';
  passInput.required = true;
  passGroup.appendChild(passInput);
  
  form.appendChild(passGroup);

  // Opciones
  const optionsDiv = document.createElement('div');
  optionsDiv.className = 'options';

  const rememberLabel = document.createElement('label');
  rememberLabel.className = 'remember-me';
  const rememberInput = document.createElement('input');
  rememberInput.type = 'checkbox';
  rememberLabel.appendChild(rememberInput);
  rememberLabel.appendChild(document.createTextNode('Remember me'));
  optionsDiv.appendChild(rememberLabel);

  const forgotPass = document.createElement('a');
  forgotPass.href = '#';
  forgotPass.textContent = 'Forgot Password?';
  forgotPass.className = 'forgot-pass';
  optionsDiv.appendChild(forgotPass);

  form.appendChild(optionsDiv);

  // Botón de login
  const loginBtn = document.createElement('button');
  loginBtn.type = 'submit';
  loginBtn.className = 'btn-login';
  loginBtn.textContent = 'LOG IN';
  form.appendChild(loginBtn);

  card.appendChild(form);

  // Texto de registro
  const registerText = document.createElement('p');
  registerText.className = 'register-text';
  registerText.innerHTML = 'Not registered yet? <a href="#">Create an Account</a>';
  card.appendChild(registerText);

  // Eventos
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Lógica de autenticación aquí
    console.log('Formulario enviado');
  });

  return container;
}
