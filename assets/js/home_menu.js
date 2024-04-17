const menuBtn = document.querySelectorAll(".header_btn__icon");
const list = document.querySelectorAll(".btn-list");
const overlay = document.querySelectorAll(".overlay");

let show = false;
for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener("click", () => {
    if (!show) {
      for (let j = 0; j < list.length; j++) {
        list[j].style.transform = "translateX(0)";
        for (let k = 0; k < overlay.length; k++) {
          overlay[k].classList.add("active");
        }
      }
      show = true;
    } else {
      for (let j = 0; j < list.length; j++) {
        list[j].style.transform = "translateX(200px)";
        for (let k = 0; k < overlay.length; k++) {
          overlay[k].classList.remove("active");
        }
      }
      show = false;
    }
  });
}

for (let i = 0; i < overlay.length; i++) {
  overlay[i].addEventListener("click", () => {
    for (let j = 0; j < list.length; j++) {
      list[j].style.transform = "translateX(200px)";
      for (let k = 0; k < overlay.length; k++) {
        overlay[k].classList.remove("active");
      }
    }
    show = false;
  });
}
