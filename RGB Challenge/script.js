let answer;
let options;
let point = 0;
const correctModalEl = document.querySelector(".correct-modal");
const wrongModalEl = document.querySelector(".wrong-modal");

// rgb 컬러 코드를 만들어 주는 함수
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// 컬러를 클릭하면 정답 또는 오답 화면 띄우는 코드
document.querySelectorAll(".option").forEach((optionEl, index) => {
  optionEl.addEventListener("click", e => {
    if (answer === index) {
      point++;
      correctModalEl.classList.add("open");
      optionEl.classList.add("open");
    } else {
      document.querySelector(".point-in-modal").textContent = point;
      point = 0;
      wrongModalEl.classList.add("open");
      optionEl.classList.add("open");
    }
    document.querySelector(".point").textContent = point;
  });
});

// 게임의 다음 stage를 만듦(모든값 랜덤 초기화)
function newStage() {
  options = [randomColor(), randomColor(), randomColor()];
  document.querySelectorAll(".option").forEach((optionEl, index) => {
    optionEl.style.backgroundColor = options[index];
  });
  answer = Math.floor(Math.random() * 3);
  document.querySelector(".color-text").textContent = options[answer];
}

newStage();

// 'next color' button 누르면 next stage
document.querySelector(".next-color").addEventListener("click", e => {
  correctModalEl.classList.remove("open");
  document.querySelectorAll(".option").forEach((optionEl, index) => {
    optionEl.classList.remove("open");
  });
  newStage();
});

// 'play again' button 누르면 새 게임
document.querySelector(".play-again").addEventListener("click", e => {
  wrongModalEl.classList.remove("open");
  document.querySelectorAll(".option").forEach((optionEl, index) => {
    optionEl.classList.remove("open");
  });
  newStage();
});
