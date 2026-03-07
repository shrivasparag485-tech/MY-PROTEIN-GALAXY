// Get data
const orders = JSON.parse(localStorage.getItem("orders")) || [];
const ratings = JSON.parse(localStorage.getItem("ratings")) || [];

// =======================
// TOTAL ORDERS
// =======================

document.getElementById("totalOrders").textContent = orders.length;

// =======================
// TOTAL REVENUE
// =======================

let revenue = 0;

orders.forEach((order) => {
  if (order.items) {
    order.items.forEach((item) => {
      let qty = item.quantity || 1;

      revenue += item.price * qty;
    });
  }
});

document.getElementById("totalRevenue").textContent = "₹" + revenue;
