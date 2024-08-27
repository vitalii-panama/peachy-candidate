import Swiper, { Autoplay, Pagination } from "swiper"

import "swiper/css"
import "swiper/css/autoplay"
import "swiper/css/pagination"

import "@/shopify/snippets/variant-swatch"
import cart from "shopify-cartjs"

const FeaturedProducts = {
  onLoad() {
    this._init()
  },

  _init() {
    this._addEventListeners()
    this._initSlider()
  },

  _addEventListeners() {
    const atc = this.container.querySelectorAll("button[type='submit']")

    atc.forEach((button) => {
      button.addEventListener("click", this._onAddToCart.bind(this))
    })
  },

  _onAddToCart(event) {
    event.preventDefault()
    event.stopPropagation()
    const form = event.target.closest("form")
    const id = form.querySelector("input[name='id']").value
    cart.addItem(id, 1, {}, {
      "error": function(jqXHR) {
        const {responseJSON} = jqXHR
         alert(responseJSON.message)
      }
    })
  },

  _initSwiper() {
    this.sliderWrapper = this.container.querySelector(".swiper")
    if (!this.sliderWrapper) return
    if (window.innerWidth > 768) return
    this.slider = new Swiper(this.sliderWrapper, {
      slidesPerView: 1,
      autoplay: true,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      modules: [Autoplay, Pagination],
    })
  },

  _initSlider() {
    this._initSwiper()
    window.addEventListener("resize", () => {
      window.innerWidth > 768 ? this.slider && this.slider.destroy() : this.slider === undefined && this._initSwiper()
    })
  }
}

export default FeaturedProducts
