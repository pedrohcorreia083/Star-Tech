particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 150,
        "density": { "enable": true, "value_area": 400 }
      },
      "color": { "value": "#00625F" },
      "shape": { "type": "polygon" },
      "opacity": {
        "value": 0.7,
        "random": true,
        "anim": { "enable": false }
      },
      "size": {
        "value": 6,
        "random": true,
        "anim": { "enable": false }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#00aaff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "repulse" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "repulse": { "distance": 100, "duration": 0.4 },
        "push": { "particles_nb": 4 }
      }
    }
  });
  