/*------------- Import moal filters here -----------*/
import "./app-modal-filters.js";

class AppFilters extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <article class="__filter d-flex flex-column justify-content-start align-items-start w-100 h-100 gap-3">
                <h2 class="__filter__title fw-bold text-start w-100">
                    Personaliza tu búsqueda
                </h2>
                <div class="__filter__input-group d-flex flex-wrap justify-content-start align-items-center w-100 gap-3">

                    <!-- button open modal filters -->

                    <button  data-bs-toggle="modal" data-bs-target="#filters-modal" class="__filter__button-filter btn shadowa rounded-3 p-0 m-0 position-relative gap-1 fw-bold" type="button" aria-label="Abrir filtros">

                        <i class="__filter__icon-filter icon-filters rounded-2" aria-hidden="true"></i>
                        Filtros
                        <div class="__filter__input-group__count shadow-sm position-absolute top-0 start-100 translate-middle badge rounded-pill">
                            5
                        </div>
                    </button>
                    <button class="text-uppercase btn btn-white shadow">insen</button>
                    <button class="text-uppercase btn btn-white shadow">estudiante</button>
                    <button class="text-uppercase btn btn-white shadow">directo</button>
                </div>
            </article>
            
            <!-- insert modal filters here -->
            <app-modal-filters></app-modal-filters>
        `;
    }
}
customElements.define("app-filters", AppFilters);