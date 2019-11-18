const tags = {
    item: document.querySelector('#check1'),
    cardCont: document.querySelector('#card1')

}

let cardDetails = `<div  class="card" style="height: 100rem; width: 100rem;">
<div class="card-body">
                <h5 class="card-title">%title%</h5>
            <p class="card-text">%content%
            </p>

            </div>`;


console.log(tags.item, tags.cardCont)
tags.item.addEventListener('click', () => {
    var newText = cardDetails.replace("%title%", "Itay Cohen");
    newText = newText.replace("%content%", "my name is momomgfog");
    console.log(newText)
    tags.cardCont.insertAdjacentHTML('afterbegin', newText)
})