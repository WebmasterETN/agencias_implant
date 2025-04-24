/*---import de las cards para seleccion de horarios--*/
import "./app-card-select-trip.js";

/**--------import del modal para ingresar los codigos de promocion----------*/
import "./app-modal-code-promo.js";

/*----------import del modal para ver detalles de las cards para seleccion de horarios---------------------*/
import "./app-modal-details.js";

class AppTimesTrip extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <!-- Modal para los detalles del viaje -->
      <app-modal-details></app-modal-details>

      <article class="__article-trip d-flex flex-column justify-content-between align-items-center w-100 h-100 gap-3">
        <h2 class="__section__travel__title fw-bold w-100">
          Seleccionar horario de ida
          <span class="fw-light fs-6">15-mar-25</span>
        </h2>
        <div class="__section__travel__subtitle d-flex justify-content-start align-items-center w-100 gap-3" >
          <p class="__section__travel__subtitle__text fw-bold m-0">
            Viajes recomendados
            <small class="__section__travel__subtitle__text--bg rounded-3 pt-1 pb-1 ps-2 pe-2 text-uppercase text-white m-0">
              para ti
            </small>
          </p>
        </div>
        <div class="__section__items d-flex flex-column p-1 gap-2 w-100">

          <!-- Cards para seleccionar horario de ida -->
          <app-card-select-trip
            floors='[
              {"floorNumber": "1 piso"}
            ]'
            icon-class-names='[
              {"class": "icon-by-day"}
            ]'
            times-trips='[
              {"exitTime": "11:59 AM", "arrivalTime": "06:15 PM"}
            ]'
            info-details='[
              {"link": "#"}
            ]'
            info-available='[
              {"category": "6 menores"},
              {"category": "3 INSEN"}
            ]'
            prices='[
              {"price": "679.3"}
            ]'
            ponits-doters='[
              {"name": "26,127"}
            ]'
          ></app-card-select-trip>
          <app-card-select-trip
            floors='[
              {"floorNumber": "1 piso"}
            ]'
            icon-class-names='[
              {"class": "icon-by-day"}
            ]'
            times-trips='[
              {"exitTime": "11:59 AM", "arrivalTime": "06:15 PM"}
            ]'
            info-details='[
              {"link": "#"}
            ]'
            info-available='[
              {"category": "6 menores"},
              {"category": "3 INSEN"}
            ]'
            prices='[
              {"price": "679.3"}
            ]'
            ponits-doters='[
              {"name": "26,127"}
            ]'
          ></app-card-select-trip>
          <app-card-select-trip
            floors='[
              {"floorNumber": "1 piso"}
            ]'
            icon-class-names='[
              {"class": "icon-night"}
            ]'
            times-trips='[
              {"exitTime": "11:59 PM", "arrivalTime": "06:15 AM"}
            ]'
            info-details='[
              {"link": "#"}
            ]'
            info-available='[
              {"category": "6 menores"},
              {"category": "3 INSEN"}
            ]'
            prices='[
              {"price": "679.3"}
            ]'
            ponits-doters='[
              {"name": "26,127"}
            ]'
          ></app-card-select-trip>
          <app-card-select-trip
            floors='[
              {"floorNumber": "1 piso"}
            ]'
            icon-class-names='[
              {"class": "icon-night"}
            ]'
            times-trips='[
              {"exitTime": "11:59 PM", "arrivalTime": "06:15 AM"}
            ]'
            info-details='[
              {"link": "#"}
            ]'
            info-available='[
              {"category": "6 menores"},
              {"category": "3 INSEN"}
            ]'
            prices='[
              {"price": "679.3"}
            ]'
            ponits-doters='[
              {"name": "26,127"}
            ]'
          ></app-card-select-trip>
        </div>
        <nav class="__section__direction d-flex justify-content-lg-between justify-content-start align-items-center flex-lg-row flex-column border-0 rounded-3 shadow-sm w-100">
          <p class="main__section__direction__origin m-0">
            <i class="icon-filled-pointer"></i>
            Origen <a class="text-dark" href="#">Uruapan, Uruapan</a>
          </p>
          <p class="main__section__direction__destination m-0">
            <i class="icon-filled-pointer"></i>
            Destino
            <a class="text-dark" href="#">México Norte, Ciudad de México</a>
          </p>
        </nav>
        <p class="__section__live text-body-secondary m-0" aria-live="polite">
          Mostrando todos los viajes disponibles
        </p>
        <div class="__section__promotional__button d-flex justify-content-start align-items-center w-100">
          
          <!-- Modal con el boton para ingresar el codigo de promocion -->
          <app-code-promo></app-code-promo>
        </div>
        <div class="d-flex justify-content-center align-items-center w-100 gap-3">
          <button class="__button-dates btn disabled border-0 shadow-lg rounded-5 d-flex justify-content-center align-items-center gap-2"
            type="button">
            <i class="icon-back-circle fs-2"></i>
            <div class="__btn-text d-flex flex-column justify-content-center align-items-end">
              <p class="m-0 p-0 fw-semibold">14 mar</p>
              <small class="__btn-text-size m-0 p-0">desde: <span class="fw-semibold">$357.5 mxn</span></small>
            </div>
          </button>
          <button class="__button-dates btn border-0 shadow-lg rounded-5 d-flex justify-content-center align-items-center gap-2" type="button">
            <div class="__btn-text d-flex flex-column justify-content-center align-items-start">
              <p class="m-0 p-0 fw-semibold">16 mar</p>
              <small class="__btn-text-size m-0 p-0">desde: <span class="fw-semibold">$357.5 mxn</span></small>
            </div>
            <i class="icon-next-circle fs-2"></i>
          </button>
        </div>
      </article>
    `;
  }
}
customElements.define("app-times-trip", AppTimesTrip);
