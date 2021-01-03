import 'bootstrap/dist/css/bootstrap.min.css'
import 'slick-carousel/slick/slick.scss'
import '../stylesheets/style.scss'

import $ from 'jquery'
import 'bootstrap/js/dist/dropdown'
import { jarallax } from 'jarallax'
import 'slick-carousel'
import '../../components/notes-card'
import Rellax from 'rellax'

/**
 * Hero Prallax
 * @method
 */
jarallax(document.querySelectorAll('.jarallax'), {
  speed: 0.9,
  disableParallax: /iPad|iPhone|iPod|Android/,
})

// jQuery
$(document).ready(function () {
  $('.ds-notes-slide').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    fade: true,
  })

  var rellax = new Rellax('.rellax', {
    center: true,
  })
})
