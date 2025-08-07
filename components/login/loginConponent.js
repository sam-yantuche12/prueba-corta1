export function login(){
    let login = document.createElement('div');
    login.className = "login";
    login.textContent = "hola login";

    login.appendChild(login());

    return login;

}

document.body.appendChild(login());
