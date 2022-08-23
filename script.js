// selectarea butonului
const increaseButton = document.querySelector(".increase");
const decreaseButton = document.querySelector(".decrease");
const changeStyleButton = document.querySelector(".button");
const newBox = document.querySelector(".box");
// pe button am un eveniment-care by default primeste doi parametri-tipul evenimentul si functia
// tipul evenomentului este click, functia este changeText
increaseButton.addEventListener("click", increaseCount);
decreaseButton.addEventListener("click", decreaseCount);
changeStyleButton.addEventListener("click", changeBackground);
// initializez prima data contorul cu 0
let val = 0;

// functie pentru cresterea contorului
function increaseCount() {
  if (val === 0) {
    val += 1;
  } else {
    val += 1;
  }
  newBox.innerHTML = val;
}
newBox.innerHTML = val;

//functia pentru scaderea contorului
function decreaseCount() {
  if (val > 0) {
    val -= 1;
  } else {
    val;
  }
  newBox.innerHTML = val;
}

//functie pentru generarea random a culorii de fundal
function changeBackground() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}
