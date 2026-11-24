let contador = 0;

function proximoNumero() {
    if (contador > 10) {
        return;
    }
    const fileira = document.getElementById("fileira");
    
    const item = document.createElement("div");
    item.style.padding = "10px 15px";
    item.style.borderRadius = "6px";
    item.style.fontWeight = "500";
    item.style.fontFamily = "sans-serif";

    if (contador % 2 === 0) {
        item.innerText = `${contador} (Par)`;
        item.style.backgroundColor = "#e0f2fe"; 
        item.style.color = "#0369a1";
        item.style.border = "1px solid #bae6fd";
    } else {
        item.innerText = `${contador} (Ímpar)`;
        item.style.backgroundColor = "#fef9c3"; 
        item.style.color = "#854d0e";
        item.style.border = "1px solid #fef08a";
    }

    fileira.appendChild(item);

    if (contador === 10) {
        const botao = document.getElementById("btnProximo");
        botao.disabled = true;
        botao.innerText = "Fim (Chegou ao 10)";
    }

    contador++;
}
