class AppModalDetailsPayment extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
          <!-- Modal -->
          <div
              class="modal trip-details fade"
              id="details-trip-payment-modal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
          >
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h2>Detalles del viaje</h2>
                          <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          ></button>
                      </div>
                      <div class="modal-body">
                          <div class="tab-content" id="myTabContent">
                              <div
                                  class="tab-pane fade show active"
                                  id="itinerary-tab-pane"
                                  role="tabpanel"
                                  aria-labelledby="itinerary-tab"
                                  tabindex="0"
                              >
                                  <div class="trip-details__itinerary__step">
                                      <div class="trip-details__itinerary__step--hour">
                                          <p>11:00 a.m</p>
                                      </div>
                                      <div class="trip-details__itinerary__step--icon">
                                          <span class="icon-bus-bg-blue-rounded fs-2"><span class="path1"></span><span class="path2"></span></span>
                                      </div>
                                      <div class="trip-details__itinerary__step--place" style="::before {background-color: var(--primary);}">
                                          <p class="trip-details__itinerary__step--place__title">Uruapan</p>
                                          <p class="trip-details__itinerary__step--place__from">Sale de: Uruapan</p>
                                          <p class="trip-details__itinerary__step--place__adress">
                                              Dirección: Carretera Nacional Uruapan - Patzcuaro s/n km 1
                                              (interior 4), Col. Lomas Del Valle CP 601110 Teléfono: 01
                                              (452) 524-1710 / 01 452 523 8608 / 01 452 523 8754
                                          </p>
                                          <a
                                              href="#"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              class=""
                                              >Ver ubicación
                                          </a>
                                      </div>
                                  </div>
                                  <div class="trip-details__itinerary__step">
                                      <div class="trip-details__itinerary__step--hour">
                                          <p>06:00 a.m</p>
                                      </div>
                                      <div class="trip-details__itinerary__step--icon">
                                          <span class="icon-end-point fs-6"><span class="path1"></span><span class="path2"></span></span>
                                      </div>
                                      <div class="trip-details__itinerary__step--place">
                                          <p class="trip-details__itinerary__step--place__title">Uruapan</p>
                                          <p class="trip-details__itinerary__step--place__from">Sale de: Uruapan</p>
                                          <p class="trip-details__itinerary__step--place__adress">
                                              Dirección: Carretera Nacional Uruapan - Patzcuaro s/n km 1
                                              (interior 4), Col. Lomas Del Valle CP 601110 Teléfono: 01
                                              (452) 524-1710 / 01 452 523 8608 / 01 452 523 8754
                                          </p>
                                          <a
                                              href="#"
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              class=""
                                              >Ver ubicación
                                          </a>
                                      </div>
                                  </div>
                                  <div class="trip-details__itinerary__step d-flex flex-column align-items-center justify-content-center">
                                      <h3 class="text-start gap-2 w-100">Amenidades del viaje</h3>
                                      <ul class="trip-details__itinerary__step--amenitiesd-flex flex-wrap justify-content-start align-items-center list-unstyled w-100 gap-3">
                                          <li class="d-flex align-items-center justify-content-start gap-2">
                                              <span class="icon-wc"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span>
                                              <p class="m-0 p-0">Baño</p>
                                          </li>
                                          <li class="d-flex align-items-center justify-content-start gap-2">
                                              <span class="icon-tv"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>
                                              <p class="m-0 p-0">TV</p>
                                          </li>
                                          <li class="d-flex align-items-center justify-content-start gap-2">
                                              <span class="icon-boleto-electronico"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>
                                              <p class="m-0 p-0">Boleto electrónico</p>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;
  }
}
customElements.define("app-modal-details-payment", AppModalDetailsPayment);
