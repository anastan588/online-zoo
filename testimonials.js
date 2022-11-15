const reviews = document.querySelector(".main_testimonials_body_comments");
const sizeMove =
  document.querySelector(".main_testimonials_body_comments_block_border")
    .offsetWidth + 30;
const input = document.querySelector(".testi_range");
input.addEventListener("input", moveSlide);

function moveSlide() {
  const sizeMove =
    document.querySelector(".main_testimonials_body_comments_block_border")
      .offsetWidth + 30;
  let move = +input.value;
  if (move === 1) {
    reviews.style.left = `0px`;
  } else reviews.style.left = -((move - 1) * sizeMove) + "px";
}
