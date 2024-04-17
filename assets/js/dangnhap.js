const name = document.querySelector("#name");
const pass = document.querySelector("#pass");
const user = JSON.parse(localStorage.getItem("user"));
const dangNhapBtn = document.querySelector("#btnDangNhap");

dangNhapBtn.addEventListener("click", () => {
  if (name.value == user.name && pass.value == user.pass) {
    localStorage.setItem("login", true);
    window.location.href = "../index.html";
  } else {
    document.querySelector("#error").innerHTML =
      "Tên hoặc mật khẩu chưa chính xác";
  }
});
