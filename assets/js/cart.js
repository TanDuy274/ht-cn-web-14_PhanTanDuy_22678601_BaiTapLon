import products from "./data.js";

const tableBody = document.querySelector("#myTable");

const listProducts = JSON.parse(localStorage.getItem("arr"));
// console.log(listProducts);

let string = "";
let count = 1;

listProducts.forEach((item) => {
  products.forEach((product) => {
    if (product.id == item) {
      string += `
        <tr>
        <td class="table-stt value">${count}</td>
        <td class="table-img value"><img width="200"
              src="${product.link}-main.jpg">
            </td>
        <td class="table-name value">${product.name}</td>
        <td class="table-dg value">${product.currentPrice}</td>
        <td class="table-sl value"">1</td>
        <td class="table-tt value">${product.currentPrice} VND</td>
        </tr>
    `;
    }
  });
  count++;
});

tableBody.innerHTML = string;

let tongTien = 0;
listProducts.forEach((item) => {
  const price = products[item].currentPrice.replaceAll(",", "");
  tongTien += parseInt(price);
});

document.querySelector("#lblTongtien").innerHTML = tongTien + " VND";
console.log(tongTien);

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
