(function () {
  // site title
  const siteTitle = document.querySelectorAll(".title");

  siteTitle.forEach(name => {
    name.innerText = "design";
  });
  // end site title

  // header
  const toggleList = document.querySelector(".list");
  const navbarLists = document.querySelector(".navbar-lists");

  toggleList.addEventListener("click", function () {
    navbarLists.classList.toggle("navbar-active");
  });

  const logo = document.querySelector(".logo .title");

  logo.onclick = () => {
    window.scrollTo({
      top: 0,
    })
  }


  const navbarLinks = document.querySelectorAll('.navbar-items a[href^="#"]');
    navbarLinks.forEach(targetLink => {
        targetLink.onclick = function(event) {
            event.preventDefault();
            const hash = this.getAttribute('href');
            const target = document.querySelector(hash);
            const sectionPosition = target.offsetTop;
            const offsetPosition = sectionPosition - 120;

            window.scrollTo({
                top: offsetPosition,
            });
        };
    });
  // end header


  // about
  const aboutSection = document.querySelector(".about");
  const aboutContent = document.querySelector(".about-content");

  window.onscroll = () => {
    this.scrollY > aboutSection.offsetTop -200 &&
    aboutContent.classList.add("about-animation");
  }
  // end about

})();
