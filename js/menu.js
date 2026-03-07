// CART SYSTEM
function addToCart(event, name, price) {
  event.preventDefault();
  event.stopPropagation();

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price });

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  alert(name + " added to cart 🛒");
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cartCount").innerText = cart.length;
}

updateCartCount();

// WISHLIST
function toggleWishlist(event) {
  event.stopPropagation();
  event.target.style.color = "red";
}

// SEARCH
document.getElementById("searchInput").addEventListener("keyup", function () {
  let filter = this.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(filter) ? "block" : "none";
  });
});
