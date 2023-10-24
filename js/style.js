const divA = document.getElementById("divA");
const divB = document.getElementById("divB");
const divC = document.getElementById("divC");
const showButtonA = document.getElementById("showButtonA");
const hideButtonA = document.getElementById("hideButtonA");
const showButtonB = document.getElementById("showButtonB");
const hideButtonB = document.getElementById("hideButtonB");
const showButtonC = document.getElementById("showButtonC");
const hideButtonC = document.getElementById("hideButtonC");

showButtonA.addEventListener("click", () => {
  divA.style.display = "block";
});
hideButtonA.addEventListener("click", () => {
  divA.style.display = "none";
});
showButtonB.addEventListener("click", () => {
  divB.style.display = "block";
});
hideButtonB.addEventListener("click", () => {
  divB.style.display = "none";
});

showButtonC.addEventListener("click", () => {
  divC.style.display = "block";
});

hideButtonC.addEventListener("click", () => {
  divC.style.display = "none";
});
