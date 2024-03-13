// const btnLocation = document.querySelector(".btn-location");
// const center = document.querySelector(".center");
// const btnClose = document.querySelector(".btn-close");

// btnLocation.addEventListener("click", () => {
//   center.style.display = "block";
// });
// btnClose.addEventListener("click", () => {
//   center.style.display = "none";
//   // if(sidebar.classList.contains("show")){
//   //     sidebar.classList.remove("show")
//   // }else{
//   //     sidebar.classList.add("show")
//   // }
// });

const btnModel = document.querySelector(".btn-model");
const center = document.querySelector(".center");
const btnClose = document.querySelector(".btn-close");

btnModel.addEventListener("click", () => {
  center.style.display = "block";
  // black.style.display = "block";
  black.style.opacity = "1";
  black.style.zIndex = "10";
});

btnClose.addEventListener("click", () => {
  center.style.display = "none";
  // black.style.display = "none";
  black.style.opacity = "0";
  black.style.zIndex = "-10";
});

const navItems = document.querySelector(".nav-items");
const all = document.querySelector(".n");
const X = document.querySelector(".bx-x");
const black = document.querySelector(".black");

all.addEventListener("click", () => {
  navItems.style.margin = "0px";
  // black.style.display = "block";
  black.style.opacity = "1";
  black.style.zIndex = "10";
});
let ml = `margin-left`;
X.addEventListener("click", () => {
  navItems.style.marginLeft = "-500px";
  // black.style.display = "none";
  black.style.opacity = "0";
  black.style.zIndex = "-10";
});
