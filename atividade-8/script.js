let cont_sorte = 0;
    let cont_azar = 0;


function sorte(){
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);
    

    if(num > 50){
        cont_sorte++;
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `<p>Sorte: ${cont_sorte}</p>
                            <p>Azar: ${cont_azar}</p>
                            <img src= https://i.ytimg.com/vi/Qxn-7P8XFa8/maxresdefault.jpg> `;
    }else {
        cont_azar++;
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `<p>Sorte: ${cont_sorte}</p>
                            <p>Azar: ${cont_azar}</p>
                            <img src= https://criticalhits.com.br/wp-content/uploads/2026/11/godzilla-minus-zero-entenda-o-final-e-o-destino-dos-personagens-featured-696x487.webp> `;
    }
}