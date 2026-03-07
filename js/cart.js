function loadCart() {
  const cartContainer = document.getElementById("cartContainer");
  const totalPriceElement = document.getElementById("totalPrice");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceElement.innerText = "0";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    if (!item.qty) {
      item.qty = 1;
    }

    total += item.price * item.qty;

    cartContainer.innerHTML += `
            <div class="cart-item">
                <div>
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>
                </div>

                <div>
                    <button onclick="changeQty(${index}, -1)">-</button>
                    ${item.qty}
                    <button onclick="changeQty(${index}, 1)">+</button>
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
  });

  totalPriceElement.innerText = total;

  localStorage.setItem("cart", JSON.stringify(cart));
}

function changeQty(index, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart[index].qty += change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}

function placeOrder() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  const newOrder = {
    userEmail: currentUser.email,
    date: new Date().toLocaleString(),
    items: cart,
  };

  orders.push(newOrder);

  localStorage.setItem("orders", JSON.stringify(orders));

  // cart empty
  localStorage.removeItem("cart");

  alert("Order placed successfully!");

  window.location.href = "dashboard.html";
}
function loadCart() {
  const cartContainer = document.getElementById("cartContainer");
  const totalPriceElement = document.getElementById("totalPrice");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cartContainer.innerHTML = "";

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalPriceElement.innerText = "0";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    if (!item.qty) {
      item.qty = 1;
    }

    total += item.price * item.qty;

    cartContainer.innerHTML += `
            <div class="cart-item">
                <div>
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>
                </div>

                <div>
                    <button onclick="changeQty(${index}, -1)">-</button>
                    ${item.qty}
                    <button onclick="changeQty(${index}, 1)">+</button>
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
  });

  totalPriceElement.innerText = total;

  localStorage.setItem("cart", JSON.stringify(cart));
}

function changeQty(index, change) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart[index].qty += change;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

function clearCart() {
  localStorage.removeItem("cart");
  loadCart();
}

function placeOrder() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  const newOrder = {
    userEmail: currentUser.email,
    date: new Date().toLocaleString(),
    items: cart,
  };

  orders.push(newOrder);

  localStorage.setItem("orders", JSON.stringify(orders));

  localStorage.removeItem("cart");

  alert("Order placed successfully!");

  window.location.href = "dashboard.html";
}
function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const product = {
    name: name,
    price: price,
    image: image,
    quantity: 1,
  };

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Added to cart");
}

// ✅ PAGE LOAD PAR CART SHOW
window.onload = loadCart;
