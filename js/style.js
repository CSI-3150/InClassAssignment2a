const showC = document.getElementById("buttonC");
const hideC = document.getElementById("hideButtonC");
const imageC = document.getElementById("imgC");

//Listeners for C
showC.addEventListener("click", () => {
  hideC.style.display = "block";
  imageC.style.display = "block";
  showC.style.display = "none";
});

hideC.addEventListener("click", () => {
  hideC.style.display = "none";
  imageC.style.display = "none";
  showC.style.display = "block";
});
