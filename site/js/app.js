


window.addEventListener("scroll", function () {
  var navbarToggle = document.getElementById("navbar")
  navbarToggle.classList.toggle("sticky", window.scrollY > 0)
})


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../particles.json', function () {
  console.log('callback - particles.js config loaded');
});


/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 40,
            "density": {
                "enable": true,
                "value_area": 250
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": ["circle", "triangle"],
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 6
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": true
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 20,
                "size_min": 0.1,
                "sync": true
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 170,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 900,
                "rotateY": 1700
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 80,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

