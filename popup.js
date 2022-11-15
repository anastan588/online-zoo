const comment = document.querySelectorAll(
  ".main_testimonials_body_comments_block_border"
);

comment.forEach((comblock) => {
  comblock.addEventListener("click", popUp);
});



function popUp() {
  if (window.innerWidth > 640) {
    return;
  }
  OVERLAY_MOBILE.classList.add("open");
  let div = document.createElement("div");
  div.setAttribute("id", "testimonials_popup");
let divclone = this.cloneNode(true);
let divclose = document.createElement("div");
divclose.setAttribute("id", "close");
divclone.style.zIndex = `102`;
divclose.innerHTML = '<div class ="comment_close"></div>';
divclone.append(divclose);
  div.prepend(divclone);
  reviews.prepend(div);
  const closeIcon = document.querySelector('.comment_close');
closeIcon.addEventListener("click", popUpClose);
OVERLAY_MOBILE.addEventListener("click", popUpClose);

function popUpClose() {
  div.remove();
  OVERLAY_MOBILE.classList.remove("open");
}
}
