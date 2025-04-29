class AppSecondFloor extends HTMLElement {
  constructor() {
    super();
    this._handleSeatClick = this.handleSeatClick.bind(this);
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="tab-pane fade show active" id="piso2" role="tabpanel" aria-labelledby="piso2-tab">
        <div class="container w-100 p-2">
          <div class="d-flex flex-xl-row flex-column justify-content-between flex-nowrap w-100 mt-2">

            <div class="d-xl-flex d-none me-3">
              <img src="src/assets/icons/icons-img/bus/front-bus-vertical.svg" alt="Frente del camión" class="img-fluid"/>
            </div>
            <div class="d-xl-none d-flex justify-content-center align-items-center w-100">
              <img src="src/assets/icons/icons-img/bus/front-bus-horizontal.svg" alt="Frente del camión" class="img-fluid"/>
            </div>


            <div id="seats-table-desktop-p2" class="tab-content__floor__two__front__table-sits d-xl-flex d-none mt-3 p-0">
              <table>
                <tr>
                  <td class="seat free" data-asiento="12"><span class="numero-asiento">12</span></td>
                  <td class="seat nothing" data-asiento="pasillo"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="18"><span class="numero-asiento">18</span></td>
                  <td class="seat taken" data-asiento="22"><span class="numero-asiento">22</span></td>
                  <td class="seat free" data-asiento="26"><span class="numero-asiento">26</span></td>
                  <td class="seat free" data-asiento="30"><span class="numero-asiento">30</span></td>
                  <td class="seat nothing" data-asiento="pasillo"><span class="numero-asiento"></span></td>
                  <td class="seat nothing" data-asiento="pasillo"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="38"><span class="numero-asiento">38</span></td>
                  <td class="seat free" data-asiento="42"><span class="numero-asiento">42</span></td>
                  <td class="seat free" data-asiento="46"><span class="numero-asiento">46</span></td>
                  <td class="seat free" data-asiento="50"><span class="numero-asiento">50</span></td>
                </tr>
                <tr>
                  <td class="seat free" data-asiento="11"><span class="numero-asiento">11</span></td>
                  <td class="seat nothing" data-asiento="pasillo"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="17"><span class="numero-asiento">17</span></td>
                  <td class="seat free" data-asiento="21"><span class="numero-asiento">21</span></td>
                  <td class="seat free" data-asiento="25"><span class="numero-asiento">25</span></td>
                  <td class="seat free" data-asiento="29"><span class="numero-asiento">29</span></td>
                  <td class="seat nothing" data-asiento="pasillo"><span class="numero-asiento"></span></td>
                  <td class="seat nothing" data-asiento="pasillo"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="37"><span class="numero-asiento">37</span></td>
                  <td class="seat free" data-asiento="41"><span class="numero-asiento">41</span></td>
                  <td class="seat free" data-asiento="45"><span class="numero-asiento">45</span></td>
                  <td class="seat free" data-asiento="49"><span class="numero-asiento">49</span></td>
                </tr>
                <tr><td class="seat nothing" data-asiento="espacio"><span class="numero-asiento"></span></td></tr>
                <tr>
                  <td class="seat free" data-asiento="10"><span class="numero-asiento">10</span></td>
                  <td class="seat free" data-asiento="14"><span class="numero-asiento">14</span></td>
                  <td class="seat free" data-asiento="16"><span class="numero-asiento">16</span></td>
                  <td class="seat free" data-asiento="20"><span class="numero-asiento">20</span></td>
                  <td class="seat free" data-asiento="24"><span class="numero-asiento">24</span></td>
                  <td class="seat free" data-asiento="28"><span class="numero-asiento">28</span></td>
                  <td class="seat free" data-asiento="32"><span class="numero-asiento">32</span></td>
                  <td class="seat free" data-asiento="34"><span class="numero-asiento">34</span></td>
                  <td class="seat free" data-asiento="36"><span class="numero-asiento">36</span></td>
                  <td class="seat free" data-asiento="40"><span class="numero-asiento">40</span></td>
                  <td class="seat free" data-asiento="44"><span class="numero-asiento">44</span></td>
                  <td class="seat free" data-asiento="48"><span class="numero-asiento">48</span></td>
                </tr>
                <tr>
                  <td class="seat taken" data-asiento="9"><span class="numero-asiento">9</span></td>
                  <td class="seat free" data-asiento="13"><span class="numero-asiento">13</span></td>
                  <td class="seat free" data-asiento="15"><span class="numero-asiento">15</span></td>
                  <td class="seat taken" data-asiento="19"><span class="numero-asiento">19</span></td>
                  <td class="seat taken" data-asiento="23"><span class="numero-asiento">23</span></td>
                  <td class="seat free" data-asiento="27"><span class="numero-asiento">27</span></td>
                  <td class="seat free" data-asiento="31"><span class="numero-asiento">31</span></td>
                  <td class="seat taken" data-asiento="33"><span class="numero-asiento">33</span></td>
                  <td class="seat taken" data-asiento="35"><span class="numero-asiento">35</span></td>
                  <td class="seat free" data-asiento="39"><span class="numero-asiento">39</span></td>
                  <td class="seat free" data-asiento="43"><span class="numero-asiento">43</span></td>
                  <td class="seat taken" data-asiento="47"><span class="numero-asiento">47</span></td>
                </tr>
              </table>
            </div>


            <div id="seats-table-mobile-p2" class="tab-content__floor__two__front__table-sits d-xl-none d-flex justify-content-center align-items-center w-100 mt-3 p-0">
              <table>
                 <tr>
                  <td class="seat free" data-asiento="12"><span class="numero-asiento">12</span></td>
                  <td class="seat free" data-asiento="11"><span class="numero-asiento">11</span></td>
                  <td class="seat nothing" data-asiento="espacio"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="10"><span class="numero-asiento">10</span></td>
                  <td class="seat taken" data-asiento="9"><span class="numero-asiento">9</span></td>
                </tr>
                <tr>
                  <td class="seat nothing" data-asiento="pasillo"><span class="numero-asiento"></span></td>
                  <td class="seat nothing" data-asiento="pasillo"><span class="numero-asiento"></span></td>
                  <td class="seat nothing" data-asiento="espacio"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="14"><span class="numero-asiento">14</span></td>
                  <td class="seat free" data-asiento="13"><span class="numero-asiento">13</span></td>
                </tr>
                <tr>
                  <td class="seat free" data-asiento="18"><span class="numero-asiento">18</span></td>
                  <td class="seat free" data-asiento="17"><span class="numero-asiento">17</span></td>
                  <td class="seat nothing" data-asiento="espacio"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="16"><span class="numero-asiento">16</span></td>
                  <td class="seat free" data-asiento="15"><span class="numero-asiento">15</span></td>
                </tr>
                <tr>
                  <td class="seat taken" data-asiento="22"><span class="numero-asiento">22</span></td>
                  <td class="seat free" data-asiento="21"><span class="numero-asiento">21</span></td>
                  <td class="seat nothing" data-asiento="espacio"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="20"><span class="numero-asiento">20</span></td>
                  <td class="seat taken" data-asiento="19"><span class="numero-asiento">19</span></td>
                </tr>
                <tr>
                  <td class="seat free" data-asiento="26"><span class="numero-asiento">26</span></td>
                  <td class="seat free" data-asiento="25"><span class="numero-asiento">25</span></td>
                  <td class="seat nothing" data-asiento="espacio"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="24"><span class="numero-asiento">24</span></td>
                  <td class="seat taken" data-asiento="23"><span class="numero-asiento">23</span></td>
                </tr>
                <tr>
                  <td class="seat free" data-asiento="30"><span class="numero-asiento">30</span></td>
                  <td class="seat free" data-asiento="29"><span class="numero-asiento">29</span></td>
                  <td class="seat nothing" data-asiento="espacio"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="28"><span class="numero-asiento">28</span></td>
                  <td class="seat free" data-asiento="27"><span class="numero-asiento">27</span></td>
                </tr>
                <tr>
                  <td class="seat nothing" data-asiento="pasillo"><span class="numero-asiento"></span></td>
                  <td class="seat nothing" data-asiento="pasillo"><span class="numero-asiento"></span></td>
                  <td class="seat nothing" data-asiento="espacio"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="32"><span class="numero-asiento">32</span></td>
                  <td class="seat free" data-asiento="31"><span class="numero-asiento">31</span></td>
                </tr>
                <tr>
                  <td class="seat nothing" data-asiento="pasillo"><span class="numero-asiento"></span></td>
                  <td class="seat nothing" data-asiento="pasillo"><span class="numero-asiento"></span></td>
                  <td class="seat nothing" data-asiento="espacio"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="34"><span class="numero-asiento">34</span></td>
                  <td class="seat taken" data-asiento="33"><span class="numero-asiento">33</span></td>
                </tr>
                <tr>
                  <td class="seat free" data-asiento="38"><span class="numero-asiento">38</span></td>
                  <td class="seat free" data-asiento="37"><span class="numero-asiento">37</span></td>
                  <td class="seat nothing" data-asiento="espacio"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="36"><span class="numero-asiento">36</span></td>
                  <td class="seat taken" data-asiento="35"><span class="numero-asiento">35</span></td>
                </tr>
                <tr>
                  <td class="seat free" data-asiento="42"><span class="numero-asiento">42</span></td>
                  <td class="seat free" data-asiento="41"><span class="numero-asiento">41</span></td>
                  <td class="seat nothing" data-asiento="espacio"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="40"><span class="numero-asiento">40</span></td>
                  <td class="seat free" data-asiento="39"><span class="numero-asiento">39</span></td>
                </tr>
                <tr>
                  <td class="seat free" data-asiento="46"><span class="numero-asiento">46</span></td>
                  <td class="seat free" data-asiento="45"><span class="numero-asiento">45</span></td>
                  <td class="seat nothing" data-asiento="espacio"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="44"><span class="numero-asiento">44</span></td>
                  <td class="seat free" data-asiento="43"><span class="numero-asiento">43</span></td>
                </tr>
                <tr>
                  <td class="seat free" data-asiento="50"><span class="numero-asiento">50</span></td>
                  <td class="seat free" data-asiento="49"><span class="numero-asiento">49</span></td>
                  <td class="seat nothing" data-asiento="espacio"><span class="numero-asiento"></span></td>
                  <td class="seat free" data-asiento="48"><span class="numero-asiento">48</span></td>
                  <td class="seat taken" data-asiento="47"><span class="numero-asiento">47</span></td>
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
    const desktopTable = this.querySelector("#seats-table-desktop-p2");
    if (desktopTable) {
      desktopTable.removeEventListener("click", this._handleSeatClick);
    }
    const mobileTable = this.querySelector("#seats-table-mobile-p2");
    if (mobileTable) {
      mobileTable.removeEventListener("click", this._handleSeatClick);
    }
  }

  addEventListeners() {
    const desktopTable = this.querySelector("#seats-table-desktop-p2");
    if (desktopTable) {
      desktopTable.addEventListener("click", this._handleSeatClick);
    }
    const mobileTable = this.querySelector("#seats-table-mobile-p2");
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

    // Solo alterna las clases, no cambia estilos directamente
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
customElements.define("app-second-floor", AppSecondFloor);
