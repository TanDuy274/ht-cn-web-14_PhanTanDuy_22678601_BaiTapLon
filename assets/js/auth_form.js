// auth form

const authBtn = document.querySelector(".header__btn__auth");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
const authForm = document.querySelectorAll(".auth-form");
const authSwitch = document.querySelectorAll(".auth-form__switch-btn");
const backBtns = document.querySelectorAll(".auth-form__controls-back");

authBtn.addEventListener("click", () => {
  modal.classList.add("active");
  authForm[0].classList.add("active");
  authForm[1].classList.remove("active");
});

modalOverlay.addEventListener("click", () => {
  authForm[0].classList.remove("active");
  authForm[1].classList.remove("active");
  modal.classList.remove("active");
});

authSwitch[0].addEventListener("click", () => {
  authForm[0].classList.remove("active");
  authForm[1].classList.add("active");
});

authSwitch[1].addEventListener("click", () => {
  authForm[1].classList.remove("active");
  authForm[0].classList.add("active");
});

for (let i = 0; i < backBtns.length; i++) {
  backBtns[i].addEventListener("click", () => {
    authForm[0].classList.remove("active");
    authForm[1].classList.remove("active");
    modal.classList.remove("active");
  });
}
