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
