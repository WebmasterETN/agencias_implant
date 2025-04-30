class AppFirstFloor extends HTMLElement {
  constructor() {
    super();
    this._handleSeatClick = this.handleSeatClick.bind(this);
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="tab-pane fade" id="piso1" role="tabpanel" aria-labelledby="piso1-tab">
        <div class="container col-12 p-2">
          <div class="d-flex flex-xl-row flex-column justify-content-between flex-nowrap w-100 mt-2">
            <div class="d-xl-flex d-none me-3">
              <img src="src/assets/icons/icons-img/bus/front-bus-vertical.svg" alt="Frente del camión" class="img-fluid"/>
            </div>
            <div class="d-xl-none d-flex justify-content-center align-items-center w-100">
              <img src="src/assets/icons/icons-img/bus/front-bus-horizontal.svg" alt="Frente del camión" class="img-fluid"/>
            </div>

            <div id="seats-table-desktop-p1" class="tab-content__floor__two__front__table-sits col-8 mt-3 pe-5 d-xl-flex d-none justify-content-center">
              <table>
                <tr>
                  <td class="seat free" data-asiento="4"><span class="numero-asiento">4</span></td>
                  <td class="seat air nothing" data-asiento="escaleras"><span class="icon-stairs" style="font-size: 30px"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span></td>
                  <td class="seat free" data-asiento="8"><span class="numero-asiento">8</span></td>
                </tr>
                <tr>
                  <td class="seat free" data-asiento="3"><span class="numero-asiento">3</span></td>
                  <td class="seat air nothing" data-asiento="escaleras"><span class="icon-stairs" style="font-size: 30px"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span></td>
                  <td class="seat free" data-asiento="7"><span class="numero-asiento">7</span></td>
                </tr>
                <tr><td class="seat nothing" data-asiento="espacio"><span class="numero-asiento"></span></td></tr>
                <tr>
                  <td class="seat free" data-asiento="2"><span class="numero-asiento">2</span></td>
                  <td class="seat nothing" data-asiento="pasillo"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="6"><span class="numero-asiento">6</span></td>
                </tr>
                <tr>
                  <td class="seat free" data-asiento="1"><span class="numero-asiento">1</span></td>
                  <td class="seat nothing" data-asiento="pasillo"><span class="numero-asiento"></span></td>
                  <td class="seat taken" data-asiento="5"><span class="numero-asiento">5</span></td>
                </tr>
              </table>
            </div>

            <div id="seats-table-mobile-p1" class="tab-content__floor__two__front__table-sits col-8 mt-3 d-xl-none d-flex justify-content-center align-items-center w-100">
              <table>
                <tr>
                  <td class="seat free" data-asiento="1"><span class="numero-asiento">1</span></td>
                  <td class="seat free" data-asiento="2"><span class="numero-asiento">2</span></td>
                  <td class="seat air nothing" data-asiento="escaleras"><span class="icon-stairs" style="font-size: 30px"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span></td>
                  <td class="seat air nothing" data-asiento="escaleras"><span class="icon-stairs" style="font-size: 30px"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span></td>
                  <td class="seat free" data-asiento="3"><span class="numero-asiento">3</span></td>
                  <td class="seat free" data-asiento="4"><span class="numero-asiento">4</span></td>
                </tr>
                <tr>
                  <td class="seat taken" data-asiento="5"><span class="numero-asiento">5</span></td>
                  <td class="seat free" data-asiento="6"><span class="numero-asiento">6</span></td>
                  <td class="seat nothing" data-asiento="pasillo"><span class="numero-asiento"></span></td>
                  <td class="seat nothing" data-asiento="pasillo"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="7"><span class="numero-asiento">7</span></td>
                  <td class="seat free" data-asiento="8"><span class="numero-asiento">8</span></td>
                </tr>
              </table>
            </div>

            <div class="d-xl-flex d-none ms-3">
              <img src="src/assets/icons/icons-img/bus/back-bus-vertical.svg" alt="Trasera del camión" class="img-fluid"/>
            </div>
            <div class="d-xl-none d-flex justify-content-center align-items-center w-100">
              <img src="src/assets/icons/icons-img/bus/back-bus-horizontal.svg" alt="Trasera del camión" class="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    `;
    this.addEventListeners();
  }

  disconnectedCallback() {
    const desktopTable = this.querySelector("#seats-table-desktop-p1");
    if (desktopTable) {
      desktopTable.removeEventListener("click", this._handleSeatClick);
    }
    const mobileTable = this.querySelector("#seats-table-mobile-p1");
    if (mobileTable) {
      mobileTable.removeEventListener("click", this._handleSeatClick);
    }
  }

  addEventListeners() {
    const desktopTable = this.querySelector("#seats-table-desktop-p1");
    if (desktopTable) {
      desktopTable.addEventListener("click", this._handleSeatClick);
    }
    const mobileTable = this.querySelector("#seats-table-mobile-p1");
    if (mobileTable) {
      mobileTable.addEventListener("click", this._handleSeatClick);
    }
  }

  handleSeatClick(event) {
    const seatElement = event.target.closest("td.seat");

    if (
      !seatElement ||
      seatElement.classList.contains("nothing") ||
      seatElement.classList.contains("taken")
    ) {
      return;
    }

    const seatNumber = seatElement.dataset.asiento;

    seatElement.classList.toggle("free");
    seatElement.classList.toggle("selected");

    this.dispatchEvent(
      new CustomEvent("seat-selection-changed", {
        bubbles: true,
        composed: true,
      })
    );
  }
}
customElements.define("app-first-floor", AppFirstFloor);
