import cart from "shopify-cartjs";

const cart_section = {
  init: () => {
    cart.init(window.cart)
  }
}

export default cart_section
