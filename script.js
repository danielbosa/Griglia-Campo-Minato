//prendo il bottone dall'html
const btn = document.getElementById('btn-start');

//aggiungo event listener al bottone
btn.addEventListener('click',function(){
    const squareWrapper = document.createElement('div');
    squareWrapper.className = 'd-flex flex-wrap align-items-start align-content-start debug';
    squareWrapper.setAttribute('id','board');

    let tempHtml = '';

    for(let i = 0; i < 100; i++){
        //nella scatola inserisco la stringa con i valori derivanti dal ciclo SENZA SOVRASCRIVERE: la aggiungo. Così ho tutti i div, da 1 a 100.
        tempHtml += `
        <div class="square debug2">
                ${i + 1}
        </div>
        `
        console.log('tempHtml: ', tempHtml);
    };

    squareWrapper.innerHTML = tempHtml;

    document.querySelector('main').append(squareWrapper);
});
/*
//creo elemento square
// const square = document.createElement('div');

//creo contenitore di tutti gli square
const squareWrapper = document.createElement('div');
squareWrapper.className = 'd-flex flex-wrap align-items-start align-content-start debug';
squareWrapper.setAttribute('id','board');

//scatola in cui inserire stringa generata da ciclo, senza inserirlo subito in pagina html --> se no, ricaricherebbe ogni volta la pagina
let tempHtml = '';

for(let i = 0; i < 100; i++){
    //nella scatola inserisco la stringa con i valori derivanti dal ciclo SENZA SOVRASCRIVERE: la aggiungo. Così ho tutti i div, da 1 a 100.
    tempHtml += `
    <div class="square debug2">
            ${i + 1}
    </div>
    `
    console.log('tempHtml: ', tempHtml);
};

//inserisco la scatola con i div nella scatola che poi inserisco in html
squareWrapper.innerHTML = tempHtml;
//seleziono il container in html in cui inserire la scatola squareWrapper
//inserisco scatola in html
document.querySelector('main').append(squareWrapper);

/*
//ciclo for per generare gli square
for (i = 0; i < 100; i++){
    const square = document.createElement('div');
    square.innerHTML = 
    `<span> 
    ${i} 
    </span>`;
    console.log(square);
};
*/

/*COSA VOGLIO FARE: 
- generare un elemento
- assegnare classi ad elemento, per renderlo una cella
- inserire elemento in scatola
- inserire scatola in html


*/