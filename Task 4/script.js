var toTop = document.getElementById("to-top-button"); //Calls the element from the document

//Changes the display style for the top div based on window scroll state
window.onscroll = () => {
  if (document.body.scrollTop == 0 && document.documentElement.scrollTop == 0) {
    toTop.style.display = "none";
  } else {
    toTop.style.display = "initial";
  }
};

//Brings the page to the top
function Top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
