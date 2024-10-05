const body = document.querySelector("body");
const ball = document.querySelector(".ball");
body.addEventListener("click", function (e) {
    ball.style.transform = `translateY(${e.clientY}px)`;
    ball.style.transform += `translateX(${e.clientX}px)`;
});
