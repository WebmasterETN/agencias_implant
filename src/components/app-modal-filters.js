class AppModalFilters extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <!-- Modal filters-->

            <div class="__modal-filters modal fade" id="filters-modal" tabindex="-1" aria-labelledby="filters-modal-label" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">

                        <header class="modal-header text-black">
                            <h2 class="modal-title h-5" id="filterModalLabel">Personaliza tu busqueda</h2>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                        </header>

                        <section class="modal-body w-100">
                            <form id="filtersForm">
                                <fieldset class="__checkbox-options d-flex flex-wrap gap-2 mb-4">
                                    <legend>Ordenar por</legend>
                                    <div class="__checkbox">
                                        <input class="form-check-input" type="radio" name="orderBy" id="orderPrice" checked>
                                        <label class="form-check-label" for="orderPrice">Precio</label>
                                    </div>
                                    <div class="__checkbox">
                                        <input class="form-check-input" type="radio" name="orderBy" id="orderDuration">
                                        <label class="form-check-label" for="orderDuration">Duración</label>
                                    </div>
                                    <div class="__checkbox">
                                        <input class="form-check-input" type="radio" name="orderBy" id="orderDeparture">
                                        <label class="form-check-label" for="orderDeparture">Hora de salida</label>
                                    </div>
                                    <div class="__checkbox">
                                        <input class="form-check-input" type="radio" name="orderBy" id="orderArrival">
                                        <label class="form-check-label" for="orderArrival">Hora de llegada</label>
                                    </div>
                                </fieldset>
                                
                                <!-- Categorías -->

                                <fieldset class="__checkbox-options d-flex flex-wrap gap-2 mb-4">
                                    <legend>Categoría</legend>
                                    <div class="__checkbox">
                                        <input class="form-check-input" type="checkbox" id="adulto">
                                        <label class="form-check-label" for="adulto">Adulto</label>
                                    </div>
                                    <div class="__checkbox">
                                        <input class="form-check-input" type="checkbox" id="menor">
                                        <label class="form-check-label" for="menor">Menor (3 a 11 años)</label>
                                    </div>
                                    <div class="__checkbox">
                                        <input class="form-check-input" type="checkbox" id="insen">
                                        <label class="form-check-label" for="insen">INSEN</label>
                                    </div>
                                    <div class="__checkbox">
                                        <input class="form-check-input" type="checkbox" id="estudiante">
                                        <label class="form-check-label" for="estudiante">Estudiante</label>
                                    </div>
                                    <div class="__checkbox">
                                        <input class="form-check-input" type="checkbox" id="profesor">
                                        <label class="form-check-label" for="profesor">Profesor</label>
                                    </div>
                                    <div class="__checkbox">
                                        <input class="form-check-input" type="checkbox" id="pcd">
                                        <label class="form-check-label" for="pcd">PCD</label>
                                    </div>
                                </fieldset>
                                
                                <!-- Horarios -->

                                <fieldset class="__checkbox-options d-flex flex-wrap gap-2 mb-4">
                                    <legend>Horarios</legend>
                                    <div class="__checkbox">
                                        <input class="form-check-input" type="checkbox" id="manana">
                                        <label class="form-check-label" for="manana">Mañana (7:00 am - 11:59 am)</label>
                                    </div>
                                    <div class="__checkbox">
                                        <input class="form-check-input" type="checkbox" id="tarde">
                                        <label class="form-check-label" for="tarde">Tarde (12:00 pm - 6:59 pm)</label>
                                    </div>
                                    <div class="__checkbox">
                                        <input class="form-check-input" type="checkbox" id="noche">
                                        <label class="form-check-label" for="noche">Noche (7:00 pm - 11:59 pm)</label>
                                    </div>
                                    <div class="__checkbox">
                                        <input class="form-check-input" type="checkbox" id="madrugada">
                                        <label class="form-check-label" for="madrugada">Madrugada (12:00 am - 6:59 am)</label>
                                    </div>
                                </fieldset>

                                <!-- Opciones de viaje -->

                                <fieldset class="__checkbox-options d-flex flex-wrap gap-2 mb-4">
                                    <legend>Opciones de viaje</legend>
                                    <div class="__checkbox">
                                        <input class="form-check-input" type="checkbox" id="directo">
                                        <label class="form-check-label" for="directo">Directo (sin escalas)</label>
                                    </div>
                                    <div class="__checkbox">
                                        <input class="form-check-input" type="checkbox" id="mascota" disabled>
                                        <label class="form-check-label text-muted" for="mascota">Mascota <small class="text-danger">*No disponible en esta ruta</small></label>
                                    </div>
                                </fieldset>
                            </form>
                        </section>

                        <footer class="__modal-footer">
                            <button type="reset" form="filtersForm" class="__btn-aply btn-resset btn btn-outline-secondary">Limpiar</button>
                            <button type="submit" form="filtersForm" class="__btn-aply btn-aply btn btn-primary">Aplicar</button>
                        </footer>

                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("app-modal-filters", AppModalFilters);