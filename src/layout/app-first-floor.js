class AppFirstFloor extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
             <div class="tab-pane fade" id="piso1" role="tabpanel" aria-labelledby="piso1-tab">
                                <div class="container col-12 p-2">
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
                                    <div
                                      class="tab-content__floor__two__front__table-sits col-8 mt-3 pe-5 d-xl-flex d-none justify-content-center"
                                    >
                                      <table>
                                        <tr>
                                          <td class="free" data-asiento="1A">
                                            <img
                                              src="resources/asiento_disponible.webp"
                                              alt=""
                                            />
                                            <span class="numero-asiento"
                                              >4</span
                                            >
                                          </td>
                                          <td class="air" data-asiento="1B">
                                            <span
                                              class="icon-stairs"
                                              style="font-size: 30px"
                                              ><span class="path1"></span
                                              ><span class="path2"></span
                                              ><span class="path3"></span
                                            ></span>
                                          </td>
                                          <td class="free" data-asiento="1C">
                                            <img
                                              src="resources/asiento_disponible.webp"
                                              alt=""
                                            />
                                            <span class="numero-asiento"
                                              >8</span
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
                                              >3</span
                                            >
                                          </td>
                                          <td class="air" data-asiento="1B">
                                            <span
                                              class="icon-stairs"
                                              style="font-size: 30px"
                                              ><span class="path1"></span
                                              ><span class="path2"></span
                                              ><span class="path3"></span
                                            ></span>
                                          </td>
                                          <td class="free" data-asiento="1C">
                                            <img
                                              src="resources/asiento_disponible.webp"
                                              alt=""
                                            />
                                            <span class="numero-asiento"
                                              >7</span
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
                                          <td class="free" data-asiento="1B">
                                            <img
                                              src="resources/asiento_disponible.webp"
                                              alt=""
                                            />
                                            <span class="numero-asiento"
                                              >2</span
                                            >
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
                                              >6</span
                                            >
                                          </td>
                                        </tr>
                                        <tr>
                                          <td class="free" data-asiento="2B">
                                            <img
                                              src="resources/asiento_disponible.webp"
                                              alt=""
                                            />
                                            <span class="numero-asiento"
                                              >1</span
                                            >
                                          </td>
                                          <td class="nothing" data-asiento="2C">
                                            <img
                                              src="resources/asiento_disponible.webp"
                                              alt=""
                                            />
                                            <span class="numero-asiento"></span>
                                          </td>
                                          <td class="free" data-asiento="2D">
                                            <img
                                              src="resources/asiento_ocupado.webp"
                                              alt=""
                                            />
                                            <span class="numero-asiento"
                                              >5</span
                                            >
                                          </td>
                                        </tr>
                                      </table>
                                    </div>
                                    <div
                                      class="tab-content__floor__two__front__table-sits col-8 mt-3 d-xl-none d-flex justify-content-center align-items-center w-100"
                                    >
                                      <table class="">
                                        <tr>
                                          <td class="free" data-asiento="2B">
                                            <img src="resources/asiento_disponible.webp" alt="" />
                                            <span class="numero-asiento">1</span>
                                          </td>
                                          <td class="free" data-asiento="1B">
                                            <img src="resources/asiento_disponible.webp" alt="" />
                                            <span class="numero-asiento">2</span>
                                          </td>
                                          <td class="air" data-asiento="1B">
                                            <span class="icon-stairs" style="font-size: 30px">
                                              <span class="path1"></span><span class="path2"></span><span class="path3"></span>
                                            </span>
                                          </td>
                                          <td class="air" data-asiento="1B">
                                            <span class="icon-stairs" style="font-size: 30px">
                                              <span class="path1"></span><span class="path2"></span><span class="path3"></span>
                                            </span>
                                          </td>
                                          <td class="free" data-asiento="1A">
                                            <img src="resources/asiento_disponible.webp" alt="" />
                                            <span class="numero-asiento">3</span>
                                          </td>
                                          <td class="free" data-asiento="1A">
                                            <img src="resources/asiento_disponible.webp" alt="" />
                                            <span class="numero-asiento">4</span>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td class="free" data-asiento="2D">
                                            <img src="resources/asiento_ocupado.webp" alt="" />
                                            <span class="numero-asiento">5</span>
                                          </td>
                                          <td class="free" data-asiento="1D">
                                            <img src="resources/asiento_disponible.webp" alt="" />
                                            <span class="numero-asiento">6</span>
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
                                            <span class="numero-asiento">7</span>
                                          </td>
                                          <td class="free" data-asiento="1C">
                                            <img src="resources/asiento_disponible.webp" alt="" />
                                            <span class="numero-asiento">8</span>
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
customElements.define("app-first-floor", AppFirstFloor);
