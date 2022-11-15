const SLIDER_PETS = document.querySelector(".__slider_pets");
const LEFT_BTN = document.querySelector(".main_pets_arrow_left");
const RIGHT_BTN = document.querySelector(".main_pets_arrow_right");

function sortCardsWithPets(array) {
  for (let i = array.children.length; i >= 0; i--) {
    array.appendChild(array.children[(Math.random() * i) | 0]);
  }
}

sortCardsWithPets(SLIDER_PETS.firstElementChild);


function cloneArrRight() {
  let newCard = SLIDER_PETS.firstElementChild.cloneNode(true);
  newCard.classList.add("new-card");
  newCard.style.marginRight = `-100%`;
  setTimeout(() => {
    newCard.style.marginLeft = `0`;
    newCard.style.marginRight = `0`;
    }, 100);
  sortCardsWithPets(newCard);
  SLIDER_PETS.firstElementChild.style.marginLeft =`-100%`;
  SLIDER_PETS.append(newCard);
  RIGHT_BTN.removeEventListener("click", cloneArrRight);
  LEFT_BTN.removeEventListener("click", cloneArrLeft);
    setTimeout(() => {
    SLIDER_PETS.firstElementChild.remove();
    SLIDER_PETS.firstElementChild.classList.remove("new-card");
    RIGHT_BTN.addEventListener("click", cloneArrRight);
    LEFT_BTN.addEventListener("click", cloneArrLeft);
  }, 1200);
}

function cloneArrLeft() {
  let newCard = SLIDER_PETS.firstElementChild.cloneNode(true);
  newCard.classList.add("new-card");
  sortCardsWithPets(newCard);
  newCard.style.marginLeft = `-100%`;
  setTimeout(() => {
    newCard.style.marginLeft = `0`;
  
    },100);
  SLIDER_PETS.prepend(newCard);
  SLIDER_PETS.lastElementChild.style.marginRight =`-100%`;
  LEFT_BTN.removeEventListener("click", cloneArrLeft);
  RIGHT_BTN.removeEventListener("click", cloneArrRight);
  setTimeout(() => {
    SLIDER_PETS.lastElementChild.remove();
    SLIDER_PETS.firstElementChild.classList.remove("new-card");
    LEFT_BTN.addEventListener("click", cloneArrLeft);
    RIGHT_BTN.addEventListener("click", cloneArrRight);
  }, 1200);
}


RIGHT_BTN.addEventListener("click", cloneArrRight);
LEFT_BTN.addEventListener("click", cloneArrLeft);

