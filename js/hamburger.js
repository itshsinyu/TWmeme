let hamburgerBtn = document.getElementsByClassName("hamburger")[0];


hamburgerBtn.addEventListener("click", () => {
// console.log('抓到了');
let currentState = hamburgerBtn.getAttribute("data-state");
let menuRwd = document.getElementsByClassName("menu")[0];
if (!currentState || currentState === "closed") {
    hamburgerBtn.setAttribute("data-state", "opened");
    hamburgerBtn.setAttribute("aria-expanded", "true");
    menuRwd.setAttribute("style", "display:block;");;
} else {
    hamburgerBtn.setAttribute("data-state", "closed");
    hamburgerBtn.setAttribute("aria-expanded", "false");
    menuRwd.setAttribute("style", "display:none;");;
}
});