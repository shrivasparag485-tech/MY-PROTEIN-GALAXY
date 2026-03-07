let goal = 120;
let todayProtein = 0;

function addProtein() {
  let input = document.getElementById("proteinInput").value;

  if (!input) return;

  todayProtein += Number(input);

  document.getElementById("proteinToday").innerText = todayProtein;

  let percent = (todayProtein / goal) * 100;

  document.getElementById("progressBar").style.width = percent + "%";
}

function resetProtein() {
  todayProtein = 0;

  document.getElementById("proteinToday").innerText = 0;

  document.getElementById("progressBar").style.width = "0%";
}
