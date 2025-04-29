class AppModalDetail extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <!-- Modal -->
        <div
            class="modal trip-details fade"
            id="details-trip-modal"
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
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button
                                class="nav-link active"
                                id="itinerary-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#itinerary-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="itinerary-tab-pane"
                                aria-selected="true"
                                >
                                <i class="icon-place"></i>
                                Itinerario
                                </button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button
                                class="nav-link"
                                id="discounts-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#discounts-tab-pane"
                                type="button"
                                role="tab"
                                aria-controls="discounts-tab-pane"
                                aria-selected="false"
                                >
                                <span class="icon-discount"
                                    ><span class="path1"></span><span class="path2"></span
                                    ><span class="path3"></span><span class="path4"></span
                                ></span>
                                Descuentos
                                </button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div
                                class="tab-pane fade show active"
                                id="itinerary-tab-pane"
                                role="tabpanel"
                                aria-labelledby="itinerary-tab"
                                tabindex="0"
                            >
                                <div class="toast-info">
                                    <span class="icon-info"
                                        ><span class="path1"></span><span class="path2"></span
                                    ></span>
                                    <p class="p-0 m-0">Viaje de paso</p>
                                </div>

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
                            <div
                                class="tab-pane fade"
                                id="discounts-tab-pane"
                                role="tabpanel"
                                aria-labelledby="discounts-tab"
                                tabindex="0"
                            >   
                                <h3 class="pb-2">Descuento disponibles</h3>
                                <ul class="container">
                                    <li class="row text-left">
                                        <i class="col-md-auto icon-list"></i>
                                        <p class="col-4 text-left p-0 m-0">adulto</p>
                                        <p class="col text-left p-0 m-0">8 asientos</p>
                                        <span class="col text-left text-danger fw-semibold">$997.5</span>
                                    </li>
                                    <li class="row text-left">
                                        <i class="col-md-auto icon-list"></i>
                                        <p class="col-4 p-0 m-0">Profesor</p>
                                        <p class="col text-left p-0 m-0">2 asientos</p>
                                        <span class="col text-left text-danger fw-semibold">$787.5</span>
                                    </li>
                                    <li class="row text-left">
                                        <i class="col-md-auto icon-list"></i>
                                        <p class="col-4 p-0 m-0">PCD</p>
                                        <p class="col text-left p-0 m-0">1 asiento</p>
                                        <span class="col text-left text-danger fw-semibold">$525.0</span>
                                    </li>
                                    <li class="row text-left">
                                        <i class="col-md-auto icon-list"></i>
                                        <p class="col-4 p-0 m-0">Menor</p>
                                        <p class="col text-left p-0 m-0">0 asientos</p>
                                        <span class="col text-left fst-italic">No disponible</span>
                                    </li>
                                    <li class="row text-left">
                                        <i class="col-md-auto icon-list"></i>
                                        <p class="col-4 p-0 m-0">INSEN</p>
                                        <p class="col text-left p-0 m-0">0 asientos</p>
                                        <span class="col text-left fst-italic">No disponible</span>
                                    </li>
                                    <li class="row text-left">
                                        <i class="col-md-auto icon-list"></i>
                                        <p class="col-4 p-0 m-0">Estudiante</p>
                                        <p class="col text-left p-0 m-0">0 asientos</p>
                                        <span class="col text-left fst-italic">No disponible</span>
                                    </li>
                                    <li class="row text-left">
                                        <i class="col-md-auto icon-list"></i>
                                        <p class="col-4 p-0 m-0">Mascota</p>
                                        <p class="col text-left p-0 m-0">0 asientos</p>
                                        <span class="col text-left fst-italic">No disponible</span>
                                    </li>
                                </ul>
                                <h3 class="pb-2">Descuentos viajero anticipado</h3>
                                <ul class="container">
                                    <li class="row text-left">
                                        <i class="col-md-auto icon-list"></i>
                                        <p class="col-4 p-0 m-0">Tarifa de internet</p>
                                        <p class="col text-left p-0 m-0">8 asientos</p>
                                        <span class="col text-left text-danger fw-semibold">$997.5</span>
                                    </li>
                                </ul>
                                <small>* Los descuentos de viaje anticipado sólo se aplican a boletos para adultos y están sujetos a disponibilidad.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
  }
}
customElements.define("app-modal-details", AppModalDetail);