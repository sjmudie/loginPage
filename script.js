const createAccount = document.getElementById("create-account");
const loginOuterContainer = document.getElementById("login-outer-container");
const signupOuterContainer = document.getElementById("signup-outer-container");
const exitSignup = document.getElementById("exit-signup");

createAccount.addEventListener("click", () => {
  loginOuterContainer.style.visibility = "hidden";
  signupOuterContainer.classList.add("transition");
  loginOuterContainer.style.opacity = 0;
  signupOuterContainer.style.visibility = "visible";
  signupOuterContainer.style.opacity = 1;
});

exitSignup.addEventListener("click", () => {
  signupOuterContainer.style.opacity = 0;
  signupOuterContainer.style.visibility = "hidden";
  loginOuterContainer.classList.add("transition");
  loginOuterContainer.style.visibility = "visible";
  loginOuterContainer.style.opacity = 1;
});
