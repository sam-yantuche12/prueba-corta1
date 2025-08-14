export function login(){
    let login = document.createElement('div');
    login.className = "login";
    let divUsuario = document.createElement("div");
    let icoUsuario = document.createElement("img");
    icoUsuario.src = "";
    divUsuario.appendChild(icoUsuario);
    let inputUsuario = document.createElement("input");
    inputUsuario.placeholder = "correo";
    divUsuario.appendChild(inputUsuario);

    login.appendChild(login());

    return login;

}

document.body.appendChild(login());
