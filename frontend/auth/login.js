const textSwitcherBtn = document.getElementById("text-switcher-btn");
const heading = document.querySelector("h2");
const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const usernameLabel = document.getElementById("usernameLabel");

textSwitcherBtn.addEventListener("click", function () {
  if (heading.textContent === "Login") {
    switcher("Sign up", "Already have an account? Login", true);
  } else {
    switcher("Login", "Don't have an account? Sign up", false);
  }
});

function switcher(a, b, c) {
  loginBtn.value = a;
  heading.textContent = a;
  textSwitcherBtn.value = b;
  if (c) {
    usernameInput.classList.remove("hidden");
    usernameLabel.classList.remove("hidden");
  } else {
    usernameInput.classList.add("hidden");
    usernameLabel.classList.add("hidden");
  }
}

loginBtn.addEventListener("click", function () {
  if (loginBtn.value === "Sign up") {
    register();
  } else {
    login();
  }
});
