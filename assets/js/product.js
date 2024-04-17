import products from "./data.js";

const id = localStorage.getItem("id");
const photo = document.querySelector(".product__header__photo");
const detail = document.querySelector(
  ".product__header__detail__info-detail__list"
);
const name = document.querySelector(".product__header__detail__name");

const stringPhoto = `
    
  <div class="col l-5 product__header__photo">
  <img src="" alt="sony" class="product__header__photo__img">

  <div class="product__header__photo__slider">
      <div class="product__header__photo__slider__list">
          <img src="${products[id - 1].link}-main.jpg" alt="sony zv-e1"
              class="product__header__photo__slider__img active">
          <img src="${products[id - 1].link}-01.jpg" alt="sony zv-e1"
              class="product__header__photo__slider__img">
          <img src="${products[id - 1].link}-02.jpg" alt="sony zv-e1"
              class="product__header__photo__slider__img">
          <img src="${products[id - 1].link}-03.jpg" alt="sony zv-e1"
              class="product__header__photo__slider__img">
          <img src="${products[id - 1].link}-04.jpg" alt="sony zv-e1"
              class="product__header__photo__slider__img">
      </div>
  </div>
</div>
  `;

const stringDetail = `
  <li class="product__header__detail__info-detail__item">
  <span class="product__header__detail__info-detail__item__lable">Mã Sản Phẩm</span>
  <span class="product__header__detail__info-detail__item__content">${
    products[id - 1].maSanPham
  }</span>
</li>
<li class="product__header__detail__info-detail__item">
  <span class="product__header__detail__info-detail__item__lable">Số Lượng</span>
  <span class="product__header__detail__info-detail__item__content">10 sản phẩm</span>
</li>
<li class="product__header__detail__info-detail__item">
  <span class="product__header__detail__info-detail__item__lable">Giá Bán</span>
  <span
      class="product__header__detail__info-detail__item__content product__price--old">${
        products[id - 1].oldPrice
      }
      VNĐ</span>
</li>
<li class="product__header__detail__info-detail__item">
  <span class="product__header__detail__info-detail__item__lable">Giá Khuyến Mãi</span>
  <span
      class="product__header__detail__info-detail__item__content product__price--current">${
        products[id - 1].currentPrice
      }
      VNĐ</span>
</li>
<li class="product__header__detail__info-detail__item">
  <span class="product__header__detail__info-detail__item__lable">Thương Hiệu</span>
  <span class="product__header__detail__info-detail__item__content">${
    products[id - 1].thuongHieu
  }</span>
</li>
<li class="product__header__detail__info-detail__item">
  <span class="product__header__detail__info-detail__item__lable">Bảo Hành</span>
  <span class="product__header__detail__info-detail__item__content">24 tháng</span>
</li>
  `;

photo.innerHTML = stringPhoto;
detail.innerHTML = stringDetail;
name.innerHTML = `${products[id - 1].name}`;
// });

const showContentBtn = document.querySelector("#showContent");
const hideContentBtn = document.querySelector("#hideContent");

showContentBtn.addEventListener("click", () => {
  document.querySelector("#showContent.active").classList.remove("active");
  document.querySelector("#hideContent").classList.add("active");
  document.querySelector(".view-content").classList.add("active");
});

hideContentBtn.addEventListener("click", () => {
  document.querySelector("#hideContent.active").classList.remove("active");
  document.querySelector("#showContent").classList.add("active");
  document.querySelector(".view-content").classList.remove("active");
});

// product slider

const link = document.querySelectorAll(".product__header__photo__slider__img");

document
  .querySelector(".product__header__photo__img")
  .setAttribute("src", link[0].src);

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", () => {
    document
      .querySelector(".product__header__photo__img")
      .setAttribute("src", link[i].src);

    for (let j = 0; j < link.length; j++) {
      link[j].classList.remove("active");
    }
    link[i].classList.add("active");
  });
}

const quantityBtns = document.querySelectorAll(
  ".product__header__detail__option__quantity__selection__icon"
);
let quantityValue = document.querySelector(
  ".product__header__detail__option__quantity__selection__current"
);

quantityValue.addEventListener("blur", () => {
  if (quantityValue.value < 1) {
    quantityValue.value = 1;
  }
});

quantityBtns[0].addEventListener("click", () => {
  if (quantityValue.value > 1) {
    quantityValue.value--;
  }
});

quantityBtns[1].addEventListener("click", () => {
  quantityValue.value++;
});

const buyBtn = document.querySelector(
  ".product__header__detail__option__btn__add-to-cart"
);

let buyArr = JSON.parse(localStorage.getItem("arr"));
console.log(buyArr);

buyBtn.addEventListener("click", () => {
  if (buyArr.indexOf(id) === -1) {
    buyArr.push(id);
  }
  localStorage.setItem("arr", JSON.stringify(buyArr));
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
  document.querySelector(".header_btn_cart").href = "../html/dangnhap.html";
}
