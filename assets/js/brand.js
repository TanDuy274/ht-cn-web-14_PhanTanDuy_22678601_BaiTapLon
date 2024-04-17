import products from "./data.js";

const brand = localStorage.getItem("brand");
let string = "";

products.forEach((product) => {
  if (product.thuongHieu == brand) {
    string += `
    <div class="col l-3  m-4 c-6">
    <a href="./html/product.html" class="top__list__item"  id = "${product.id}">
        <div class="top__list__item__img"
            style="background-image: url(${product.link}-main.jpg);">
            <div class="top__list__item__name">${product.name}
            </div>
            <div class="top__list__item__price">
                <span class="top__list__item__price--old">${product.oldPrice} VNĐ</span>
                <span class="top__list__item__price--current">${product.currentPrice} VNĐ</span>
            </div>
            <div class="top__list__item__action">
                <div class="top__list__item__action__rating">
                    <i class="home-product-item--gold fa-solid fa-star"></i>
                    <i class="home-product-item--gold fa-solid fa-star"></i>
                    <i class="home-product-item--gold fa-solid fa-star"></i>
                    <i class="home-product-item--gold fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="top__list__item__action--sold">${product.sold} đã bán</div>
            </div>
        </div>
    </a>
  </div>
        `;
  }
});

document.querySelector(".top__list").innerHTML = string;

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
