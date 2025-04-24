class AppSecondFloor extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="tab-pane fade show active"id="piso2"role="tabpanel" aria-labelledby="piso2-tab">
        <div class="container w-100 p-2">
          <div class="d-flex flex-xl-row flex-column justify-content-between flex-nowrap w-100 mt-2">
            <div
              class="d-xl-flex d-none me-3"
            >
              <img
                src="src/assets/icons/icons-img/bus/front-bus-vertical.svg"
                alt=""
                class="img-fluid"
              />
            </div>
            <div
              class="d-xl-none d-flex justify-content-center align-items-center w-100"
            >
              <img
                src="src/assets/icons/icons-img/bus/front-bus-horizontal.svg"
                alt=""
                class="img-fluid"
              />
            </div>
            <div class="tab-content__floor__two__front__table-sits d-xl-flex d-none mt-3 p-0">
              <table>
                <tr>
                  <td class="free" data-asiento="1A">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >12</span
                    >
                  </td>
                  <td class="nothing" data-asiento="1B">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="free" data-asiento="1C">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >18</span
                    >
                  </td>
                  <td class="taken" data-asiento="1D">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >22</span
                    >
                  </td>
                  <td class="free" data-asiento="1A">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >26</span
                    >
                  </td>
                  <td class="free" data-asiento="1B">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >30</span
                    >
                  </td>
                  <td class="nothing" data-asiento="1C">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="nothing" data-asiento="1C">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="free" data-asiento="1D">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >38</span
                    >
                  </td>
                  <td class="free" data-asiento="1A">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >42</span
                    >
                  </td>
                  <td class="free" data-asiento="1B">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >46</span
                    >
                  </td>
                  <td class="free" data-asiento="1B">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >50</span
                    >
                  </td>
                </tr>
                <tr>
                  <td class="free" data-asiento="1A">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >11</span
                    >
                  </td>
                  <td class="nothing" data-asiento="1B">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="free" data-asiento="1C">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >17</span
                    >
                  </td>
                  <td class="free" data-asiento="1D">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >21</span
                    >
                  </td>
                  <td class="free" data-asiento="1A">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >25</span
                    >
                  </td>
                  <td class="free" data-asiento="1B">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >29</span
                    >
                  </td>
                  <td class="nothing" data-asiento="1C">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="nothing" data-asiento="1C">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="free" data-asiento="1D">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >37</span
                    >
                  </td>
                  <td class="free" data-asiento="1A">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >41</span
                    >
                  </td>
                  <td class="free" data-asiento="1B">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >45</span
                    >
                  </td>
                  <td class="free" data-asiento="1B">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >49</span
                    >
                  </td>
                </tr>
                <tr>
                  <td class="nothing" data-asiento="3A">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"></span>
                  </td>
                </tr>
                <tr>
                  <td class="free" data-asiento="1A">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >10</span
                    >
                  </td>
                  <td class="free" data-asiento="1B">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >14</span
                    >
                  </td>
                  <td class="free" data-asiento="1C">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >16</span
                    >
                  </td>
                  <td class="free" data-asiento="1D">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >20</span
                    >
                  </td>
                  <td class="free" data-asiento="1A">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >24</span
                    >
                  </td>
                  <td class="free" data-asiento="1B">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >28</span
                    >
                  </td>
                  <td class="free" data-asiento="1C">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >32</span
                    >
                  </td>
                  <td class="free" data-asiento="1D">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >34</span
                    >
                  </td>
                  <td class="free" data-asiento="1A">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >36</span
                    >
                  </td>
                  <td class="free" data-asiento="1B">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >40</span
                    >
                  </td>
                  <td class="free" data-asiento="1C">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >44</span
                    >
                  </td>
                  <td class="free" data-asiento="1D">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >48</span
                    >
                  </td>
                </tr>
                <tr>
                  <td class="free" data-asiento="2A">
                    <img
                      src="resources/asiento_ocupado.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >9</span
                    >
                  </td>
                  <td class="free" data-asiento="2B">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >13</span
                    >
                  </td>
                  <td class="free" data-asiento="2C">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >15</span
                    >
                  </td>
                  <td class="free" data-asiento="2D">
                    <img
                      src="resources/asiento_ocupado.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >19</span
                    >
                  </td>
                  <td class="free" data-asiento="2A">
                    <img
                      src="resources/asiento_ocupado.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >23</span
                    >
                  </td>
                  <td class="free" data-asiento="2B">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >27</span
                    >
                  </td>
                  <td class="free" data-asiento="2C">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >31</span
                    >
                  </td>
                  <td class="free" data-asiento="2D">
                    <img
                      src="resources/asiento_ocupado.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >33</span
                    >
                  </td>
                  <td class="free" data-asiento="2A">
                    <img
                      src="resources/asiento_ocupado.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >35</span
                    >
                  </td>
                  <td class="free" data-asiento="2B">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >39</span
                    >
                  </td>
                  <td class="free" data-asiento="2C">
                    <img
                      src="resources/asiento_disponible.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >43</span
                    >
                  </td>
                  <td class="free" data-asiento="2D">
                    <img
                      src="resources/asiento_ocupado.webp"
                      alt=""
                    />
                    <span class="numero-asiento"
                      >47</span
                    >
                  </td>
                </tr>
              </table>
            </div>

            <!-- movile version -->
            <div class="tab-content__floor__two__front__table-sits d-xl-none d-flex justify-content-center align-items-center w-100 mt-3 p-0">
              <table>
                <!-- Fila 1 (equivale a la primera columna original) -->
                <tr>
                  <td class="free" data-asiento="1A">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">12</span>
                  </td>
                  <td class="free" data-asiento="1A">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">11</span>
                  </td>
                  <td class="nothing" data-asiento="3A">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="free" data-asiento="1A">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">10</span>
                  </td>
                  <td class="free" data-asiento="2A">
                    <img src="resources/asiento_ocupado.webp" alt="" />
                    <span class="numero-asiento">9</span>
                  </td>
                </tr>

                <!-- Fila 2 (equivale a la segunda columna original) -->
                <tr>
                  <td class="nothing" data-asiento="1B">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="nothing" data-asiento="1B">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="nothing"></td>
                  <td class="free" data-asiento="1B">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">14</span>
                  </td>
                  <td class="free" data-asiento="2B">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">13</span>
                  </td>
                </tr>

                <!-- Fila 3 -->
                <tr>
                  <td class="free" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">18</span>
                  </td>
                  <td class="free" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">17</span>
                  </td>
                  <td class="nothing" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="free" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">16</span>
                  </td>
                  <td class="free" data-asiento="2C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">15</span>
                  </td>
                </tr>

                <!-- Fila 4 -->
                <tr>
                  <td class="taken" data-asiento="1D">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">22</span>
                  </td>
                  <td class="free" data-asiento="1D">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">21</span>
                  </td>
                  <td class="nothing" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="free" data-asiento="1D">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">20</span>
                  </td>
                  <td class="free" data-asiento="2D">
                    <img src="resources/asiento_ocupado.webp" alt="" />
                    <span class="numero-asiento">19</span>
                  </td>
                </tr>

                <tr>
                  <td class="free" data-asiento="1A">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">26</span>
                  </td>
                  <td class="free" data-asiento="1A">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">25</span>
                  </td>
                  <td class="nothing" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="free" data-asiento="1A">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">24</span>
                  </td>
                  <td class="free" data-asiento="2A">
                    <img src="resources/asiento_ocupado.webp" alt="" />
                    <span class="numero-asiento">23</span>
                  </td>
                </tr>
                <tr>
                  <td class="free" data-asiento="1B">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">30</span>
                  </td>
                  <td class="free" data-asiento="1B">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">29</span>
                  </td>
                  <td class="nothing" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="free" data-asiento="1B">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">28</span>
                  </td>
                  <td class="free" data-asiento="2B">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">27</span>
                  </td>
                </tr>
                <tr>
                  <td class="nothing" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="nothing" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="nothing" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="free" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">32</span>
                  </td>
                  <td class="free" data-asiento="2C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">31</span>
                  </td>
                </tr>
                <tr>
                  <td class="nothing" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="nothing" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="nothing" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="free" data-asiento="1D">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">34</span>
                  </td>
                  <td class="free" data-asiento="2D">
                    <img src="resources/asiento_ocupado.webp" alt="" />
                    <span class="numero-asiento">33</span>
                  </td>
                </tr><tr>
                  <td class="free" data-asiento="1D">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">38</span>
                  </td>
                  <td class="free" data-asiento="1D">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">37</span>
                  </td>
                  <td class="nothing" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="free" data-asiento="1A">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">36</span>
                  </td>
                  <td class="free" data-asiento="2A">
                    <img src="resources/asiento_ocupado.webp" alt="" />
                    <span class="numero-asiento">35</span>
                  </td>
                </tr>
                <tr>
                  <td class="free" data-asiento="1A">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">42</span>
                  </td>
                  <td class="free" data-asiento="1A">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">41</span>
                  </td>
                  <td class="nothing" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="free" data-asiento="1B">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">40</span>
                  </td>
                  <td class="free" data-asiento="2B">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">39</span>
                  </td>
                </tr>
                <tr>
                  <td class="free" data-asiento="1B">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">46</span>
                  </td>
                  <td class="free" data-asiento="1B">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">45</span>
                  </td>
                  <td class="nothing" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="free" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">44</span>
                  </td>
                  <td class="free" data-asiento="2C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">43</span>
                  </td>
                </tr>
                <tr>
                  <td class="free" data-asiento="1B">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">50</span>
                  </td>
                  <td class="free" data-asiento="1B">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">49</span>
                  </td>
                  <td class="nothing" data-asiento="1C">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento"></span>
                  </td>
                  <td class="free" data-asiento="1D">
                    <img src="resources/asiento_disponible.webp" alt="" />
                    <span class="numero-asiento">48</span>
                  </td>
                  <td class="free" data-asiento="2D">
                    <img src="resources/asiento_ocupado.webp" alt="" />
                    <span class="numero-asiento">47</span>
                  </td>
                </tr>
              </table>
            </div>
            <div class="d-xl-flex d-none me-3">
              <img src="src/assets/icons/icons-img/bus/back-bus-vertical.svg" alt="" class="img-fluid"/>
            </div>
            <div class="d-xl-none d-flex justify-content-center align-items-center w-100">
              <img
                src="src/assets/icons/icons-img/bus/back-bus-horizontal.svg"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("app-second-floor", AppSecondFloor);
