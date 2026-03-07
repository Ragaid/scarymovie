const modal = document.getElementById("trailerModal");
const openBtn = document.getElementById("openTrailer");
const closeBtn = document.getElementById("closeTrailer");
const trailerFrame = document.getElementById("trailerFrame");
const trailerSrc = "https://www.youtube-nocookie.com/embed/0fZ58S-7QP0?autoplay=1&rel=0";

if (modal && openBtn && closeBtn) {
  const closeModal = () => {
    modal.close();
    if (trailerFrame) {
      trailerFrame.setAttribute("src", "");
    }
  };

  openBtn.addEventListener("click", () => {
    modal.showModal();
    if (trailerFrame) {
      trailerFrame.setAttribute("src", trailerSrc);
    }
  });

  closeBtn.addEventListener("click", () => {
    closeModal();
  });

  modal.addEventListener("click", (event) => {
    const bounds = modal.getBoundingClientRect();
    const inDialog =
      event.clientX >= bounds.left &&
      event.clientX <= bounds.right &&
      event.clientY >= bounds.top &&
      event.clientY <= bounds.bottom;

    if (!inDialog) {
      closeModal();
    }
  });

  modal.addEventListener("close", () => {
    if (trailerFrame) {
      trailerFrame.setAttribute("src", "");
    }
  });
}
