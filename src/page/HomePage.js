class HomePage {
  constructor($main) {
    this.$main = $main;
  }

  createCardData(cardId, cardFront, cardBack) {
    const card_div = document.createElement('div');
    card_div.setAttribute('class', 'card');
    card_div.setAttribute('id', cardId);

    const card_front = document.createElement('div');
    card_front.setAttribute('class', 'card_plane card_plane--front');
    card_front.textContent = cardFront;
    const card_back = document.createElement('div');
    card_back.setAttribute('class', 'card_plane card_plane--back');
    card_back.textContent = cardBack;

    card_div.appendChild(card_front);
    card_div.appendChild(card_back);

    return card_div;
  }

  render() {
    const cards_container = document.createElement('div');
    cards_container.setAttribute('id', 'cards_container');

    const card_div = this.createCardData(1, 'Heedo', 'ENTJ');

    cards_container.appendChild(card_div);
    this.$main.appendChild(cards_container);
  }
}

export default HomePage;

{
  /* 
<div id="cards_container">
  <div idx="1" class="card">
    <div class="card_plane card_plane--front">Heedo</div>
    <div class="card_plane card_plane--back">ESTJ</div>
  </div>
</div>; 
*/
}
