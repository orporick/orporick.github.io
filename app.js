 const particlesJSON = {
    "particles": {
        "number": {
            "value": 70,
            "density": {
                "enable": true,
                "value_area": 500
            }
        },
        "color": {
            "value": "#ff9800"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 2,
                "color": "#ff9800"
            },
            "polygon": {
                "nb_sides": 3
            },
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 10,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 300,
            "color": "#ff5722",
            "opacity": 0.5,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "top",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": [
                    "grab",
                    "bubble"
                ]
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.7
                }
            },
            "bubble": {
                "distance": 600,
                "size": 12,
                "duration": 1,
                "opacity": 0.8,
                "speed": 2
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 20
            },
            "remove": {
                "particles_nb": 10
            }
        }
    },
    "retina_detect": true
}

particlesJS("particles-js", particlesJSON)

