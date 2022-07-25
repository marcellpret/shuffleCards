const cards = document.querySelector("#cards");
const play = document.querySelector("#get-cards");

play.addEventListener("click", () => {
    fetch("http://deckofcardsapi.com/api/deck/new/draw/?count=2")
        .then((resp) => resp.json())
        .then((data) => {
            let cardSet = "";
            data.cards.forEach((card) => {
                cardSet += `<img src=${card.image}></img>`;
            });
            cards.innerHTML = cardSet;
        });
});
