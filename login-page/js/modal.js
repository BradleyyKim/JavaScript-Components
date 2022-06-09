const modal = document.querySelector("#modal");
const modalButton = document.querySelector(".modal-button");
const exitBtn = document.querySelector(".exitBtn");
const loginForm = document.querySelector(".loginForm");
const loginIdInput = document.querySelector(".loginIdInput");
const loginPwInput = document.querySelector(".loginPwInput");

modalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

exitBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (loginIdInput.value.length === 0) {
    loginIdInput.classList.add("empty");
    document.querySelector(".inputEmpty.loginEt").classList.add("on");
    document.querySelector(".inputEmpty.error").classList.remove("on");
  } else if (loginPwInput.value.length === 0) {
    loginPwInput.classList.add("empty");
    document.querySelector(".inputEmpty.pwEt").classList.add("on");
    document.querySelector(".inputEmpty.error").classList.remove("on");
  }

  if (loginIdInput.value.length !== 0) {
    loginIdInput.classList.remove("empty");
    document.querySelector(".inputEmpty.loginEt").classList.remove("on");
  }
  if (loginPwInput.value.length !== 0) {
    loginPwInput.classList.remove("empty");
    document.querySelector(".inputEmpty.pwEt").classList.remove("on");
  }
  if (loginIdInput.value.length !== 0 && loginPwInput.value.length !== 0) {
    document.querySelector(".inputEmpty.error").classList.add("on");
  }
});
