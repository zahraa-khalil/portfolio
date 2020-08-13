


window.addEventListener("scroll", function () {
  var navbarToggle = document.getElementById("navbar")
  navbarToggle.classList.toggle("sticky", window.scrollY > 0)
})


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../particles.json', function () {
  console.log('callback - particles.js config loaded');
});




