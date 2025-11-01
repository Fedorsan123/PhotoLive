  const reviewList = document.getElementById("reviewList");
  const slides = reviewList.children;
  const nextBtn = document.getElementById("nextBtn");

  let isMoving = false;

  nextBtn.addEventListener("click", () => {
    if (isMoving) return;
    isMoving = true;

    // добавляем анимацию движения влево
    reviewList.style.transition = "transform 0.5s ease";
    reviewList.style.transform = "translateX(-100%)";

    // когда анимация завершилась — переставляем элементы
    reviewList.addEventListener("transitionend", function handler() {
      reviewList.style.transition = "none";       // убираем анимацию
      reviewList.appendChild(slides[0]);          // первый элемент → в конец
      reviewList.style.transform = "translateX(0)"; // возвращаем позицию
      reviewList.removeEventListener("transitionend", handler);
      isMoving = false;
    });
  });


document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeMenu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });

  closeBtn.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});
