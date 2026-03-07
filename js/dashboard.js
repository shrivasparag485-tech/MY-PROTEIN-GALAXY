// =============================
// ELEMENTS
// =============================
const welcomeUser = document.getElementById("welcomeUser");
const logoutBtn = document.getElementById("logoutBtn");
const orderHistory = document.getElementById("orderHistory");

const isLoggedIn = localStorage.getItem("loggedIn");

// =============================
// AUTO REDIRECT IF LOGGED IN
// =============================

if (isLoggedIn && window.location.pathname.includes("login")) {
  window.location.href = "menu.html";
}

if (isLoggedIn && window.location.pathname.includes("signup")) {
  window.location.href = "dashboard.html";
}

// =============================
// DASHBOARD PROTECTION
// =============================

if (welcomeUser) {
  if (!isLoggedIn) {
    window.location.href = "login.html";
  } else {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      welcomeUser.textContent = "Welcome, " + currentUser.name + " 👋";
    }
  }
}

// =============================
// LOGOUT
// =============================
if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");

    window.location.href = "index.html";
  });
}

// =============================
// SHOW ORDER HISTORY
// =============================
const orders = JSON.parse(localStorage.getItem("orders")) || [];
const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (orderHistory) {
  if (!currentUser || !currentUser.email) {
    orderHistory.innerHTML = "<p>Please login first.</p>";
  } else {
    const userOrders = orders.filter(
      (order) => order.userEmail === currentUser.email,
    );

    if (userOrders.length === 0) {
      orderHistory.innerHTML = "<p>No orders yet.</p>";
    } else {
      userOrders.forEach((order) => {
        let itemsHTML = "";

        order.items.forEach((item) => {
          itemsHTML += `
            <li>
              ${item.name} - ₹${item.price} × ${item.quantity}
            </li>
          `;
          let qty = item.quantity || 1;

          itemsHTML += `
<li>
${item.name} - ₹${item.price} × ${qty}
</li>
`;
        });

        orderHistory.innerHTML += `
          <div style="background:#1f1f1f;padding:20px;margin:20px 0;border-radius:10px;color:white;">
            <h3>Order Date: ${order.date}</h3>
            <ul>
              ${itemsHTML}
            </ul>
          </div>
        `;
      });
    }
  }
}
