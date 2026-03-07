const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const loginForm = document.getElementById("loginForm");

  // ============================
  // AUTO REDIRECT IF ALREADY LOGGED IN
  // ============================
  const isLoggedIn = localStorage.getItem("loggedIn");

  if (isLoggedIn === "true") {
    window.location.href = "dashboard.html";
  }
  // ============================
  // SIGN UP
  // ============================
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("signupName").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const password = document.getElementById("signupPassword").value;

      let users = JSON.parse(localStorage.getItem("users")) || [];

      const exists = users.find((user) => user.email === email);

      if (exists) {
        alert("Account already exists!");
        return;
      }

      const newUser = { name, email, password };
      users.push(newUser);

      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(newUser));

      alert("Account Created Successfully 🎉");

      window.location.href = "dashboard.html";
    });
  }

  // ============================
  // LOGIN
  // ============================
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;

      let users = JSON.parse(localStorage.getItem("users")) || [];

      const validUser = users.find(
        (user) => user.email === email && user.password === password,
      );

      if (!validUser) {
        alert("Invalid Email or Password");
        return;
      }

      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(validUser));

      // ===== AUTO CART CHECK =====
      const urlParams = new URLSearchParams(window.location.search);
      const auto = urlParams.get("auto");

      if (auto === "cart") {
        window.location.href = "/cart.html";
      } else {
        window.location.href = "dashboard.html";
      }
    });
  }
});
