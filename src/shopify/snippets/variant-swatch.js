
class VariantSwatch extends HTMLElement {
  constructor() {
    super();
    this._init();
  }

  _onSelectChange(event) {
    const input = this.querySelector("input[name='id']")
    input.value = event.target.value
  }

  _init() {
    const select = this.querySelector("select")
    select.addEventListener("change", this._onSelectChange.bind(this))
  }
}

customElements.define("variant-swatch", VariantSwatch);
