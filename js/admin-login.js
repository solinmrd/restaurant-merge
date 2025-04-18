const adminBtn = document.getElementById("admin-login");
const adminDialog = document.getElementById("admin-dialog");
const closeBtn = document.getElementById("close-btn");
adminBtn.addEventListener("click", () => {
  // Popup'ı aç
  dialog.showModal();
  // Popup açıldığında arka plana scroll olmaması için
  document.body.style.overflow = "hidden";
});
