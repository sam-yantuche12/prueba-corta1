export function banner2() {
    let div = document.createElement('div');
    div.className = "div-banner2";

    
    let h2 = document.createElement('h2');
    h2.innerHTML = "<br><span>Geeta.</span>";
    h2.className = "h2";
    h2.style.fontWeight = "bold";
    div.appendChild(h2);


    let pBold = document.createElement('p');
    let boldText = document.createElement('b');
    boldText.textContent = "Create your fashion in your own way";
    pBold.appendChild(boldText);
    pBold.className = "p1";
    div.appendChild(pBold);

    
    let pNormal = document.createElement('p');
    pNormal.textContent = "Each men and women has their own style, Geeta help you to create your unique style.";
    pNormal.className = "p2";
    div.appendChild(pNormal);

    
    let loginBtn = document.createElement('a');
    loginBtn.textContent = "LOG IN";
    loginBtn.className = "btn-login";
    loginBtn.style.fontWeight = "bold";
    loginBtn.href = "#";
    

    loginBtn.addEventListener('click', (event) => {
        event.preventDefault();
        div.classList.add("ocultar");
        document.body.appendChild(section2());
    });
    div.appendChild(loginBtn);


    let spanOr = document.createElement('span');
    let boldOr = document.createElement('b');
    boldOr.textContent = "--OR--";
    spanOr.appendChild(boldOr);
    spanOr.className = "or-Span";
    spanOr.style.fontWeight = "bold";
    div.appendChild(spanOr);


    let registerBtn = document.createElement('a');
    registerBtn.textContent = "REGISTER";
    registerBtn.className = "btn-register";
    registerBtn.style.fontWeight = "bold";
    registerBtn.href = "#register";
    

    registerBtn.addEventListener('click', (event) => {
        event.preventDefault();
        div.classList.add("ocultar");

    });
    div.appendChild(registerBtn);

    return div;
}