export function section2() {

    let titulo = document.createElement("h2");
    titulo.className = "titulo";
    titulo.textContent = "Welcome Back!";
    columna1.appendChild(titulo);

    let parrafo1 = document.createElement("p");
    parrafo1.className = "texto1";
    parrafo1.textContent = "Yay! You're back! Thanks for shopping with us. We have excited deals and promotions going on, grab your pick now!";
    columna1.appendChild(parrafo1);

    let subtitulo = document.createElement("h3");
    subtitulo.className = "subtitulo";
    subtitulo.textContent = "LOG IN";
    columna1.appendChild(subtitulo);

    let columna2 = document.createElement("div");
    columna2.className = "columna2";
    section.appendChild(columna2);

    let labelEmail = document.createElement("label");
    labelEmail.textContent = "Email address";
    columna2.appendChild(labelEmail);

    let divInputEmail = document.createElement("div");
    divInputEmail.className = "input-con-icono";
    let iconEmail = document.createElement("img");
    iconEmail.src = "../assets/Correo-Icono.svg";
    let inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.placeholder = "Enter your email";
    divInputEmail.appendChild(iconEmail);
    divInputEmail.appendChild(inputEmail);
    columna2.appendChild(divInputEmail);

    let labelPass = document.createElement("label");
    labelPass.textContent = "Password";
    columna2.appendChild(labelPass);

    let divInputPass = document.createElement("div");
    divInputPass.className = "input-con-icono";
    let iconPass = document.createElement("img");
    iconPass.src = "../assets/Bloqueo-Icono.svg";
    let inputPass = document.createElement("input");
    inputPass.type = "password";
    inputPass.placeholder = "Enter your password";
    divInputPass.appendChild(iconPass);
    divInputPass.appendChild(inputPass);
    columna2.appendChild(divInputPass);

    let opciones = document.createElement("div");
    opciones.className = "opciones";
    let labelRemember = document.createElement("label");
    let check = document.createElement("input");
    check.type = "checkbox";
    labelRemember.appendChild(check);
    labelRemember.appendChild(document.createTextNode(" Remember me"));
    let linkForgot = document.createElement("a");
    linkForgot.href = "#";
    linkForgot.textContent = "Forgot Password?";
    opciones.appendChild(labelRemember);
    opciones.appendChild(linkForgot);
    columna2.appendChild(opciones);

    let btnLogin = document.createElement("button");
    btnLogin.className = "btn-login";
    btnLogin.textContent = "LOG IN";
    columna2.appendChild(btnLogin);

    let footer = document.createElement("p");
    footer.className = "footer-text";
    footer.innerHTML = `Not registered yet? <a href="#">Create an Account</a>`;
    columna2.appendChild(footer);

    return section;
}