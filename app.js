let cardDetails = `<div  class="card" style="height: 100rem; width: 100rem;">
<div class="card-body">
                <h5 class="card-title">%title%</h5>
            <p class="card-text">%content%
            </p>

            </div>`;
const item = document.querySelector('#check1');
const cardCont = document.querySelector('#card1');

console.log(item, cardCont)
item.addEventListener('click', () => {

    //cardCont.insertAdjacentHTML('beforebegin', "")
    // alert("the button was clicked");

    var newText = cardDetails.replace("%title%", "Itay Cohen");
    newText = newText.replace("%content%", "my name is momomgfog");
    console.log(newText)
    cardCont.insertAdjacentHTML('afterbegin', newText)
})