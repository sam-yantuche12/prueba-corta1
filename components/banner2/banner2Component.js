export function banner2() {
    let div = document.createElement('div');
    div.className = "div-banner2";

    let h2 = document.createElement('h2');
    div.appendChild(h2);
    h2.innerHTML = "<br><span>Geeta.</span>";


    let pBold = document.createElement('p');
    let boldText = document.createElement('b');
    boldText.textContent = "Create your fashion in your own way";
    pBold.appendChild(boldText);
    div.appendChild(pBold);

    let pNormal = document.createElement('p');
    pNormal.textContent = "Each men and women has their own style, Geeta help you to create your unique style. ";
    div.appendChild(pNormal);

    let loginBtn = document.createElement('div');
    loginBtn.textContent = "LOG IN";
    loginBtn.className = "btn-login";
    div.appendChild(loginBtn);

    // corregido:
    loginBtn.addEventListener('click', () => {
        div.classList.add("ocultar");
    });

    let spanOr = document.createElement('span');
    let boldOr = document.createElement('b');
    boldOr.textContent = "--OR---";
    spanOr.appendChild(boldOr);
    div.appendChild(spanOr);

    let registerBtn = document.createElement('div');
    registerBtn.className = "btn-register";
    registerBtn.textContent = "REGISTER";
    div.appendChild(registerBtn);

    return div;
}
