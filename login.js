var pro = document.querySelectorAll(".pro");
function createLocalStorage(key) {
  const stores = JSON.parse(localStorage.getItem(key)) ?? {};
  const save = () => {
    localStorage.setItem(key, JSON.stringify(stores));
  };
  const storage = {
    get(key) {
      return stores[key];
    },
    set(key, value) {
      stores[key] = value;
      save();
    },
    remove(key) {
      delete stores[key];
      save();
    },
    update(key, value) {
      stores[key] = value;
    },
  };
  return storage;
}
// data administrators

const admin = createLocalStorage("user_admin");
admin.set("user", "phanbinh");
admin.set("password", "123456");
const isLogin = createLocalStorage("Login");
var user = admin.get("user");
var password = admin.get("password");
// login user
var btnSubmit = document.getElementById("submit-account");
var inputUser = document.querySelector(".user");
var inputPassword = document.querySelector(".password");
var login_user = document.getElementById("login-user");
var closeLogin = document.querySelector("#close-login");
function closeHandleLogin() {
  closeLogin.addEventListener("click", (e) => {
    login_user.style.animation = "endLogin 1s ease forwards";
  });
}
var isSuccess = false;
function addCart() {
  const addCart = document.querySelectorAll("#product1 .pro");
  addCart.forEach((item, index) => {
    item.addEventListener("click", () => {
      if (isSuccess === true) {
        window.location.href = `sproduct${index}.html`;
        isLogin.set("isLogin", true);
      } else {
        alert("Bạn Cần Phải Đăng Nhập Để Tiếp Tục");
        login_user.style.animation = "showLogin 01s ease forwards";
        login_user.style.position = "fixed";
      }
    });
  });
}
isSuccess = isLogin.get("isLogin");
function checkAccount() {
  btnSubmit.addEventListener("click", () => {
    if (
      inputUser.value.trim() === user &&
      inputPassword.value.trim() === password
    ) {
      alert("Login successful!");
      isLogin.set("isLogin", true);
      login_user.style.animation = "endLogin 1s ease forwards";
    } else {
      alert("Login failed!");
      window.location.reload() = none;
    }
  });
}
function App() {
  addCart();
  closeHandleLogin();
  checkAccount();
}
App();
