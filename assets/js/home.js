import products from "../js/data.js";

let string1 = "";
let string2 = "";

for (let i = 0; i < 4; i++) {
  string1 += `
  <div class="col l-3  m-4 c-6">
  <a href="./html/product.html" class="top__list__item"  id = "${products[i].id}">
      <div class="top__list__item__img"
          style="background-image: url(${products[i].linkHome}-main.jpg);">
          <div class="top__list__item__name">${products[i].name}
          </div>
          <div class="top__list__item__price">
              <span class="top__list__item__price--old">${products[i].oldPrice} VNĐ</span>
              <span class="top__list__item__price--current">${products[i].currentPrice} VNĐ</span>
          </div>
          <div class="top__list__item__action">
              <div class="top__list__item__action__rating">
                  <i class="home-product-item--gold fa-solid fa-star"></i>
                  <i class="home-product-item--gold fa-solid fa-star"></i>
                  <i class="home-product-item--gold fa-solid fa-star"></i>
                  <i class="home-product-item--gold fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
              </div>
              <div class="top__list__item__action--sold">${products[i].sold} đã bán</div>
          </div>
      </div>
  </a>
</div>
  `;
}
for (let i = 10; i < 14; i++) {
  string2 += `
  <div class="col l-3  m-4 c-6">
  <a href="./html/product.html" class="top__list__item"  id = "${products[i].id}">
      <div class="top__list__item__img"
          style="background-image: url(${products[i].linkHome}-main.jpg);">
          <div class="top__list__item__name">${products[i].name}
          </div>
          <div class="top__list__item__price">
              <span class="top__list__item__price--old">${products[i].oldPrice} VNĐ</span>
              <span class="top__list__item__price--current">${products[i].currentPrice} VNĐ</span>
          </div>
          <div class="top__list__item__action">
              <div class="top__list__item__action__rating">
                  <i class="home-product-item--gold fa-solid fa-star"></i>
                  <i class="home-product-item--gold fa-solid fa-star"></i>
                  <i class="home-product-item--gold fa-solid fa-star"></i>
                  <i class="home-product-item--gold fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
              </div>
              <div class="top__list__item__action--sold">${products[i].sold} đã bán</div>
          </div>
      </div>
  </a>
</div>
  `;
}

const topList = document.querySelectorAll(".top__list");
topList[0].innerHTML = string1;
topList[1].innerHTML = string2;

if (localStorage.getItem("arr") == null) {
  localStorage.setItem("arr", "[]");
}
const checkData = JSON.parse(localStorage.getItem("arr"));

// move to product
const productList = document.querySelectorAll(".top__list__item");
productList.forEach((product) => {
  product.addEventListener("click", () => {
    localStorage.setItem("id", product.id);
    localStorage.setItem("arr", JSON.stringify(checkData));
  });
});

const listImages = document.querySelector(".list-images");
const imgs = document.querySelectorAll(".slide-img");
const btnLeft = document.querySelector(".slide-btn__left");
const btnRight = document.querySelector(".slide-btn__right");
const length = imgs.length;
let current = 0;

const handleChangeSlide = () => {
  if (current == length - 1) {
    current = 0;
    let width = imgs[0].offsetWidth;
    listImages.style.transform = `translateX(0px)`;
  } else {
    current++;
    let width = imgs[0].offsetWidth;
    listImages.style.transform = `translateX(${width * -1 * current}px)`;
  }
};

let hanhdlAutoChangeSlide = setInterval(handleChangeSlide, 4000);

btnRight.addEventListener("click", () => {
  clearInterval(hanhdlAutoChangeSlide);
  handleChangeSlide();
  hanhdlAutoChangeSlide = setInterval(handleChangeSlide, 4000);
});

btnLeft.addEventListener("click", () => {
  clearInterval(hanhdlAutoChangeSlide);
  if (current == 0) {
    current = length - 1;
    let width = imgs[0].offsetWidth;
    listImages.style.transform = `translateX(${width * -1 * current}px)`;
  } else {
    current--;
    let width = imgs[0].offsetWidth;
    listImages.style.transform = `translateX(${width * -1 * current}px)`;
  }
  hanhdlAutoChangeSlide = setInterval(handleChangeSlide, 4000);
});

const brandBtns = document.querySelectorAll(".category__item");

brandBtns.forEach((brandBtn) => {
  brandBtn.addEventListener("click", () => {
    localStorage.setItem("brand", brandBtn.id);
  });
});

const isLogin = JSON.parse(localStorage.getItem("login"));
const user = JSON.parse(localStorage.getItem("user"));

if (isLogin == true) {
  document.querySelector(".header_btn_question").innerHTML = user.name;
  document.querySelector(".header__btn__auth").innerHTML = "Đăng xuất";
  document.querySelector(".header_btn_question").href = "#";
  document.querySelector(".header__btn__auth").href = "#";

  document.querySelector(".header__btn__auth").addEventListener("click", () => {
    localStorage.setItem("login", false);
    location.reload();
  });
}

if (isLogin == false) {
  document.querySelector(".header_btn_cart").href = "./html/dangnhap.html";
}
