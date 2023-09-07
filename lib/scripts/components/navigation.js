/**
 * Manage the main site navigation
 * @params {*} none
 * @return {function} initializes the main site navigation
 */
const navigation = (function() {
  const init = () => {
    // get the path from the window.location object and delete leading and trailing "/"
    let loc = window.location.pathname.replace(/(^\/)|(\/$)/g, "");
    loc = loc || "home";
    document.body.setAttribute("pageName", loc);

    // any specific navigation code here...

    // indicate that page starts scrolling
    const scrollObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        document.body.classList.remove("is-scrolling");
      } else {
        document.body.classList.add("is-scrolling");
      }
    });
    const header = document.querySelector(".js-header");
    scrollObserver.observe(header);
  };

  return { init };
})();

export default navigation;
