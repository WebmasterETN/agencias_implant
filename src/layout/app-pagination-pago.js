class AppPaginationPago extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
              <section class="container w-100">
                <nav>
                  <ul class="nav nav-tabs w-100 main-tabs" id="myTab" role="tablist">
                    <li class="nav-item flex-fill" role="presentation">
                      <a class="nav-link text-black active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" >Asientos de ida</a>
                    </li>
                    <li class="nav-item flex-fill" role="presentation">
                      <a class="nav-link text-black" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" >Pasajeros</a>
                    </li>
                    <li class="nav-item flex-fill" role="presentation">
                      <a class="nav-link text-black" id="payment-tab" data-bs-toggle="tab" href="#payment" role="tab" aria-controls="contact" aria-selected="false" >Pago</a>
                    </li>
                    <li class="nav-item ms-auto nav-item-small" id="tabStatus">
                      <span class="nav-link disabled" aria-current="page" id="statusText">Paso 1 de 3</span>
                    </li>
                  </ul>
                </nav>
                <article class="tab-content" id="myTabContent">
                  <section class="tab-pane fade show active w-100 p-0" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <app-pag-sit-select></app-pag-sit-select>
                  </section>
                  <section class="tab-pane fade w-100 p-0" id="profile" role="tabpanel" aria-labelledby="profile-tab" >
                      <app-passangers-form></app-passangers-form>
                  </section>
                  <section class="tab-pane fade w-100 p-0" id="payment" role="tabpanel" aria-labelledby="contact-tab">
                    <app-payment-form></app-payment-form>
                  </section>
                </article>
              </section>
            
              `;
    const tabLinks = this.querySelectorAll('.main-tabs .nav-link:not(.disabled)'); // Excluimos el disabled
    const statusText = this.querySelector('#statusText'); // Busca el ID dentro del componente

    // 3. Añade los event listeners
    if (statusText) { // Comprueba si statusText se encontró
      tabLinks.forEach((link, index) => {
        // Escucha el evento 'shown.bs.tab' de Bootstrap que se dispara DESPUÉS de que la pestaña se muestra
        link.addEventListener('shown.bs.tab', () => {
          // El índice + 1 nos da el número de paso correcto
          statusText.textContent = `Paso ${index + 1} de ${tabLinks.length}`;
        });
      });
    } else {
      console.error("Elemento #statusText no encontrado dentro de app-pagination-pago.");
    }
  }
}
customElements.define("app-pagination-pago", AppPaginationPago);
