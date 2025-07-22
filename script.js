document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("logout-box").classList.remove("hidden");
});

document.querySelector(".logout-btn").addEventListener("click", function () {
  document.getElementById("logout-box").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
});
