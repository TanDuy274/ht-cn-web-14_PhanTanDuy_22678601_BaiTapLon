function kiemTraHoTen() {
  const name = document.querySelector("#name").value.trim();
  const regexHoTen = /^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/;
  const test = regexHoTen.test(name);
  if (test) {
    document.querySelector("#tbName").innerHTML = "";
    return true;
  } else {
    document.querySelector("#tbName").innerHTML =
      "Tên đăng nhập chưa đúng (VD: Van Teo)";
    return false;
  }
}

function kiemTraMatKhau() {
  const pass = document.querySelector("#pass").value.trim();
  const regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const test = regexPass.test(pass);
  if (test) {
    document.querySelector("#tbPass").innerHTML = "";
    return true;
  } else {
    document.querySelector("#tbPass").innerHTML =
      "Mật khẩu tối thiểu tám ký tự, ít nhất một chữ cái và một số";
    return false;
  }
}

function kiemTraXNMatKhau() {
  const pass = document.querySelector("#pass").value.trim();
  const checkPass = document.querySelector("#checkpass").value.trim();
  if (!(checkPass == pass)) {
    document.querySelector("#tbCheckPass").innerHTML =
      "Xác nhận mật khẩu phải giống mật khẩu";
    return false;
  } else {
    document.querySelector("#tbCheckPass").innerHTML = "";
    return true;
  }
}

const dangKyBtn = document.querySelector("#btnDangKy");

dangKyBtn.addEventListener("click", () => {
  if (kiemTraHoTen() && kiemTraMatKhau() && kiemTraXNMatKhau()) {
    const name = document.querySelector("#name").value.trim();
    const pass = document.querySelector("#pass").value.trim();
    const user = { name, pass };
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = "../index.html";
  }
});
