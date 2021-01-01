import 'bootstrap/dist/css/bootstrap.min.css'
import '../stylesheets/style.scss'
import 'bootstrap/js/dist/dropdown'
import { jarallax } from 'jarallax'

/**
 * Hero Prallax
 * @method
 */
jarallax(document.querySelectorAll('.jarallax'), {
  speed: 0.9,
  disableParallax: /iPad|iPhone|iPod|Android/,
})
