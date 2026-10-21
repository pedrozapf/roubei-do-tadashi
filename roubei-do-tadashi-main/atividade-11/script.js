function horas(){
    let agora = new Date;
    let hora = agora.getHours();
    let min = agora.getMinutes();
    let mostrar = document.getElementById('resultado');

    mostrar.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.</p>`;
}