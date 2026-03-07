function addToCart(name, price) {
  if (typeof name !== "string" || typeof price !== "number") {
    alert("Product info missing ❌");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existing = cart.find((item) => item.name === name);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      qty: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "../cart.html";
}

function buyNow(name, price) {
  if (typeof name !== "string" || typeof price !== "number") {
    alert("Product info missing ❌");
    return;
  }

  localStorage.setItem(
    "cart",
    JSON.stringify([
      {
        name: name,
        price: price,
        qty: 1,
      },
    ]),
  );

  window.location.href = "../cart.html";
}
//add review

const productId = window.location.pathname.split("/").pop();

let currentrating = 0;
function setrating(num) {
  currentrating = num;
  document.getElementById("seletedrating").innerText = "rating" + num + "⭐";
}
function addReview() {
  let rating = document.getElementById("rating").value;
  let text = document.getElementById("reviewText").value;

  if (rating === "" || text === "") {
    alert("Please give rating and review");
    return;
  }

  let reviews = JSON.parse(localStorage.getItem("reviews" + productId)) || [];

  reviews.push({
    rating: Number(rating),
    text: text,
  });

  localStorage.setItem("reviews" + productId, JSON.stringify(reviews));

  displayReview();

  document.getElementById("reviewText").value = "";
  document.getElementById("rating").value = "";
}

function displayReview() {
  let reviews = JSON.parse(localStorage.getItem("reviews" + productId)) || [];

  let list = document.getElementById("reviewList");

  list.innerHTML = "";

  reviews.forEach(function (r, index) {
    let div = document.createElement("div");

    div.className = "review";

    div.innerHTML =
      "⭐".repeat(r.rating) +
      "<p>" +
      r.text +
      "</p>" +
      "<button onclick='deleteReview(" +
      index +
      ")'>Delete</button>";

    list.appendChild(div);
  });

  calculateAverage();
}

function deleteReview(index) {
  let reviews = JSON.parse(localStorage.getItem("reviews" + productId)) || [];

  reviews.splice(index, 1);

  localStorage.setItem("reviews" + productId, JSON.stringify(reviews));

  displayReview();
}
function calculateAverage() {
  let reviews = JSON.parse(localStorage.getItem("reviews" + productId)) || [];

  let total = 0;

  reviews.forEach(function (r) {
    total += Number(r.rating);
  });

  let averageRating = 0;

  if (reviews.length > 0) {
    averageRating = (total / reviews.length).toFixed(1);
  }

  document.getElementById("averageRating").innerText = averageRating + "⭐";
  document.getElementById("totalReviews").innerText =
    reviews.length + " reviews";
}
// PAGE LOAD
window.onload = displayReview;
