const modal = document.querySelector(".modal");
const modalCom = document.querySelector(".modal-comfort");
const modalComLight = document.querySelector(".modal-com-light");
const modalLuxeLight = document.querySelector(".modal-light-luxe");
const modalLuxe = document.querySelector(".modal-luxe");
const btnClas = document.querySelector(".classic");
const btnCom = document.querySelector(".comfort");
const btnComLight = document.querySelector(".comfort-light");
const btnLuxeLight = document.querySelector(".luxe-light");
const btnLuxe = document.querySelector(".luxe");
const modalActive = document.querySelector(".modal-active");
const send = document.querySelector(".select-largus__input-send");
const modalWait = document.querySelector(".modal-wait");
const modalWaitClose = document.querySelector(".modal-wait__close");
const modalCloseClassic = document.querySelector(".class");
const modalCloseCom = document.querySelector(".com");
const modalCloseComLight = document.querySelector(".com-light");
const modalCloseLuxeLight = document.querySelector(".light-luxe");
const modalCloseLuxe = document.querySelector(".luxe-close");

send.addEventListener("click", () => {
  modalWait.classList.add("modal-active");
});

modalWaitClose.addEventListener("click", () => {
  modalWait.classList.remove("modal-active");
});

btnClas.addEventListener("click", () => {
  modal.classList.add("modal-active");
});

modalCloseClassic.addEventListener("click", () => {
  modal.classList.remove("modal-active");
});

btnCom.addEventListener("click", () => {
  modalCom.classList.add("modal-active");
});

modalCloseCom.addEventListener("click", () => {
  modalCom.classList.remove("modal-active");
});

btnComLight.addEventListener("click", () => {
  modalComLight.classList.add("modal-active");
});

modalCloseComLight.addEventListener("click", () => {
  modalComLight.classList.remove("modal-active");
});

btnLuxeLight.addEventListener("click", () => {
  modalLuxeLight.classList.add("modal-active");
});

modalCloseLuxeLight.addEventListener("click", () => {
  modalLuxeLight.classList.remove("modal-active");
});

btnLuxe.addEventListener("click", () => {
  modalLuxe.classList.add("modal-active");
});

modalCloseLuxe.addEventListener("click", () => {
  modalLuxe.classList.remove("modal-active");
});

// modalClose.addEventListener("click", () => {
//   modal.classList.remove("modal-active");
//   modalCom.classList.remove("modal-active");
// });

// modalClose.forEach((el) =>
//   el.addEventListener("click", () => {
//     modal.classList.remove("modal-active");
//   })
// );
