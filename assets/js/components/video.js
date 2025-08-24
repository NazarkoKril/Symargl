document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("videoPopup");
  const openBtn = document.getElementById("videoBtn");
  const closeBtn = popup.querySelector(".video-popup__close");
  const overlay = popup.querySelector(".video-popup__overlay");
  const iframe = document.getElementById("videoFrame");

  function stopVideo() {
    iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
  }

  openBtn.addEventListener("click", () => {
    popup.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("active");
    stopVideo();
  });

  overlay.addEventListener("click", () => {
    popup.classList.remove("active");
    stopVideo();
  });
});
