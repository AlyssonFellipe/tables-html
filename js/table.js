btnGravar.onclick = gravar;
btnOpenPopup.onclick = openPopup;
btnClose.onclick = closePopup;

function gravar(){
    let linha = document.createElement("tr");
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");

    c1.innerText = inBanda.value;
    c2.innerText = inMusica.value;
    inBanda.value = "";
    inMusica.value = "";
    inBanda.focus();

    linha.appendChild(c1);
    linha.appendChild(c2);
    musicas.appendChild(linha);
    closePopup();
}

function openPopup(){
    popup.style.display = "block";
}

function closePopup(){
    popup.style.display = "none";
}