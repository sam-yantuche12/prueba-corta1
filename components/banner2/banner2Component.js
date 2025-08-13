import { section2 } from "../login2/login.js";

export function banner2() {
    let div = document.createElement('div');
    div.className = "div-banner2";

    // Título con formato HTML del primer código
    let h2 = document.createElement('h2');
    h2.innerHTML = "<br><span>Geeta.</span>";
    h2.className = "h2";
    h2.style.fontWeight = "bold";
    div.appendChild(h2);

    // Párrafo en negrita (combinando ambos enfoques)
    let pBold = document.createElement('p');
    let boldText = document.createElement('b');
    boldText.textContent = "Create your fashion in your own way";
    pBold.appendChild(boldText);
    pBold.className = "p1";
    div.appendChild(pBold);

    // Párrafo normal
    let pNormal = document.createElement('p');
    pNormal.textContent = "Each men and women has their own style, Geeta help you to create your unique style.";
    pNormal.className = "p2";
    div.appendChild(pNormal);

    // Botón LOG IN (combinando características)
    let loginBtn = document.createElement('a'); // Cambiado a <a> como en el segundo código
    loginBtn.textContent = "LOG IN";
    loginBtn.className = "btn-login";
    loginBtn.style.fontWeight = "bold";
    loginBtn.href = "#";
    loginBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Previene la recarga como en el segundo código
        div.classList.add("ocultar");
        document.body.appendChild(section2()); // Usando section2 del segundo código
    });
    div.appendChild(loginBtn);

    // Texto OR (combinando ambos)
    let spanOr = document.createElement('span');
    let boldOr = document.createElement('b');
    boldOr.textContent = "--OR--";
    spanOr.appendChild(boldOr);
    spanOr.className = "or-Span";
    spanOr.style.fontWeight = "bold";
    div.appendChild(spanOr);

    // Botón REGISTER (combinando ambos)
    let registerBtn = document.createElement('a'); // Cambiado a <a> como en el segundo código
    registerBtn.textContent = "REGISTER";
    registerBtn.className = "btn-register";
    registerBtn.style.fontWeight = "bold";
    registerBtn.href = "#register"; // Añadido href como en el segundo código
    div.appendChild(registerBtn);

    return div;
}