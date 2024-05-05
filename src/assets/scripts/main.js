const app = document.getElementById("app");
const simpleBar = new SimpleBar(app, {
  autoHide: false,
  direction: document.dir,
});
// simpleBar.recalculate();

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

const scrollToTop = () => {
  // console.dir(app);
  simpleBar.getScrollElement().scrollTop = 0;
};

scrollToTopBtn.addEventListener("click", scrollToTop);
