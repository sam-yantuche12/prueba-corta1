import { banner2 } from "../banner2/banner2Component.js";
export function login(){
    let login=document.createElement("div");
    login.className="login";

    login.appendChild(banner2());

    let titulo1=document.createElement("h1");
    titulo1.textContent="Geeta";
    login.appendChild(titulo1);

    return login;
}