import "../components/app-filters.js";
import "../components/app-times-trip.js";

class AppLayoutSelectTime extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="row justify-content-center align-items-start m-0 p-0">
        <aside class="__aside__filter col d-xl-flex d-none flex-column justify-content-start align-items-xl-center align-items-start h-100">
            <app-filters></app-filters>
        </aside>
        <section class="__section__layouts col-xl-8 col-12 justify-content-center align-items-start h-100">
            <app-times-trip></app-times-trip>
        </section>
      </div>
    `;
  }
}

customElements.define("layout-select-time", AppLayoutSelectTime);