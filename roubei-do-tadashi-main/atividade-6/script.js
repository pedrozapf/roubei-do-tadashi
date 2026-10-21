function site() {
    let nome;
    let rasc = "";
    let agora = new Date();

    nome = prompt("Qual seu nome?");
    rasc = document.getElementById("resultado");

    rasc.innerHTML = `<p>Olá, <strong>${nome}</strong>! Acabei de puxar do sistema a seguinte informação: <br> Hoje é dia <strong>${agora}</strong>!</p>`;