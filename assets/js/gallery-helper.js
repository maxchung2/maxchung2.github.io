function bodyHideOverflow() {
  scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  origWidth = document.getElementsByClassName("lum-lightbox-image-wrapper")[0].style.width;
  newWidth = 'calc(' + origWidth + ' + ' + scrollbarWidth + 'px)';
  lightboxWrappers = document.getElementsByClassName("lum-lightbox-image-wrapper");
  document.getElementsByTagName("body")[0].style.overflowY = "hidden";

  // Stop gallery from shifting when scrollbar is removed
  for(i = 0; i < lightboxWrappers.length; i++) {
    lightboxWrappers[i].style.width = newWidth;
    lightboxWrappers[i].style.maxWidth = newWidth;
  }

}

function bodyShowOverflow() {
  document.getElementsByTagName("body")[0].style.overflowY = "";
}
