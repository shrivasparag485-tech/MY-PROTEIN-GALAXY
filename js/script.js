// Animate Progress Bar on Page Load
window.addEventListener("load", function () {
  let progressBar = document.getElementById("progressBar");
  let progressText = document.getElementById("progressText");

  let currentProtein = 65; // demo value
  let goalProtein = 100;

  let percent = (currentProtein / goalProtein) * 100;

  setTimeout(() => {
    progressBar.style.width = percent + "%";
    progressText.innerText =
      currentProtein + "g / " + goalProtein + "g Completed";
  }, 500);
});

// Smooth Scroll when Get Started Clicked
document.querySelector(".btn").addEventListener("click", function () {
  document.querySelector(".features").scrollIntoView({
    behavior: "smooth",
  });
});

// Optional: Motivational Message
setTimeout(() => {
  console.log("Stay consistent. Protein Galaxy activated 🚀");
}, 2000);

// Get Started button navigation

const getStartedBtn = document.getElementById("getStartedBtn");

getStartedBtn.addEventListener("click", function () {
  window.location.href = "ai-coach.html";
});
