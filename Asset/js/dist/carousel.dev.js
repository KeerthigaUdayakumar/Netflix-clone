"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(document).ready(function () {
  var _$$owlCarousel;

  $("#slider-1").owlCarousel((_$$owlCarousel = {
    margin: 0,
    padding: 24,
    loop: true,
    nav: true
  }, _defineProperty(_$$owlCarousel, "padding", 5), _defineProperty(_$$owlCarousel, "navText", ["<span class='fa-solid fa-chevron-left'></span>", "<span class='fa-solid fa-chevron-right'></span>"]), _defineProperty(_$$owlCarousel, "responsiveClass", true), _defineProperty(_$$owlCarousel, "responsive", {
    0: {
      items: 3,
      loop: false,
      nav: false
    },
    300: {
      items: 1,
      nav: false
    },
    600: {
      items: 3,
      nav: false
    },
    1000: {
      items: 4.5,
      nav: true,
      loop: false
    }
  }), _$$owlCarousel));
});