function horas(){
    let agora = new Date;
    let hora = agora.getHours();
    let min = agora.getMinutes();
    let mostrar = document.getElementById('resultado');

    mostrar.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.</p>`;

    if(min >= 11 && min <=20){
        mostrar.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.</p>
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPj1zpNsowg-AE0G7HObiR6o7W6jBBIJp_m6wz1K9VHHGqbl9iSBTn9KrPGEhCOo_34i60w32oLJsBtaOX_u-eYbnEybVLFriOmk--iL2h&s=10"</img>`;

if(min >= 21 && min <=30){
        mostrar.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.</p>
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPj1zpNsowg-AE0G7HObiR6o7W6jBBIJp_m6wz1K9VHHGqbl9iSBTn9KrPGEhCOo_34i60w32oLJsBtaOX_u-eYbnEybVLFriOmk--iL2h&s=10"</img>`;


    }
}
    }