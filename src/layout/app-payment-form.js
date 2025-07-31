import "../components/app-card-select-ticket.js";

class AppPaymentForm extends HTMLElement {
    constructor() {
        super();
        // Vincular métodos para asegurar que 'this' se refiera a la instancia de la clase
        this._handleNumericInput = this._handleNumericInput.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    connectedCallback() {
        this.render();
        this.addEventListeners();
    }

    disconnectedCallback() {
        this.removeEventListeners();
    }

    addEventListeners() {
        const form = this.querySelector('#payment-form');
        if (form) {
            form.addEventListener('submit', this._handleSubmit);
        }

        const numericInputs = this.querySelectorAll('input[type="numeric"], input[inputmode="numeric"]');
        numericInputs.forEach(input => {
            input.addEventListener('input', this._handleNumericInput);
        });

        const paymentMethodsContainer = this.querySelector("#payment-methods-container");
        if (paymentMethodsContainer) {
            // Guardar la referencia a la función para poder removerla después
            this._handlePaymentMethodClick = (e) => {
                const clickedButton = e.target.closest('button');
                if (!clickedButton) return;

                const allButtons = paymentMethodsContainer.querySelectorAll('button');
                allButtons.forEach(btn => btn.classList.remove('selected')); // 'selected' class should be defined in CSS
                clickedButton.classList.add('selected');
            };
            paymentMethodsContainer.addEventListener('click', this._handlePaymentMethodClick);
        }
    }

    removeEventListeners() {
        const form = this.querySelector('#payment-form');
        if (form) {
            form.removeEventListener('submit', this._handleSubmit);
        }

        const numericInputs = this.querySelectorAll('input[type="numeric"], input[inputmode="numeric"]');
        numericInputs.forEach(input => {
            input.removeEventListener('input', this._handleNumericInput);
        });

        const paymentMethodsContainer = this.querySelector("#payment-methods-container");
        if (paymentMethodsContainer && this._handlePaymentMethodClick) {
            paymentMethodsContainer.removeEventListener('click', this._handlePaymentMethodClick);
        }
    }

    _handleNumericInput(event) {
        // Reemplaza cualquier caracter que no sea un dígito
        event.target.value = event.target.value.replace(/\D/g, "");
    }

    _handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        if (!form.checkValidity()) {
            event.stopPropagation();
            console.log("El formulario no es válido.");
        } else {
            console.log("Formulario válido, procesando pago...");
            // Aquí iría la lógica para procesar el pago
            const formData = new FormData(form);
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
            alert('¡Compra finalizada con éxito! (Simulación)');
        }

        // Siempre agregar la clase para mostrar los mensajes de validación de Bootstrap
        form.classList.add('was-validated');
    }

    render() {
        this.innerHTML = `
            <article class="payment-form">
                <form id="payment-form" class="needs-validation" novalidate>
                    <label class="form-label fs-4 fw-semibold text-black text-left">¡Asegura tus asientos!</label>

                    <fieldset class="__direction-trip">
                        <span class="icon"></span>
                        <p class="__origin"></p>
                        <span class="icon"></span>
                        <p class="__destination"></p>
                    </fieldset>
                    <fieldset class="__type-ticket row mb-3">
                        <div class="col-sm-4 mb-3 mb-sm-0">
                            <app-card-select-ticket
                                typecards='[{"typeCard": "Elegir horario"}]'
                                prices='[{"price": "$955"}]'
                            ></app-card-select-ticket>
                        </div>
                        <div class="col-sm-4">
                            <app-card-select-ticket
                                typecards='[{"typeCard": "Boleto abierto"}]'
                                prices='[{"price": "$945"}]'
                            ></app-card-select-ticket>
                        </div>
                    </fieldset>

                    <label class="form-label fs-4 fw-semibold text-black text-left">Datos del comprador</label>

                    <fieldset class="form-group form-check form-switch align-items-center mb-3">
                        <input class="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked>
                        <label class="form-check-label" for="switchCheckChecked">Usar datos del comprador</label>
                    </fieldset>

                    <fieldset class="form-group d-flex flex-column gap-3 mb-3">
                        <label for="method-payment" class="form-label fs-4 fw-semibold text-black">Selecciona tu forma de pago</label>
                        <fieldset class="d-flex gap-3" id="payment-methods-container">
                            <div class="method-payment-wrapper __payment-selector-badge">
                                <button type="button" class="btn bg-light shadow" style="max-width: 200px; width: 100%; height: 100px;">
                                    <div class="d-flex justify-content-center align-items-center gap-1 w-100">
                                        <span class="__method-payment-icon icon-currency-dollar"></span>
                                    </div>
                                    <p title="" class="m-0 p-0">Efectivo</p>
                                </button>
                            </div>
                            <div class="method-payment-wrapper __payment-selector-badge">
                                <button type="button" class="btn bg-light shadow text-center" style="max-width: 200px; width: 100%; height: 100px;">
                                    <div class="__new-method">
                                        <span>Nuevo</span>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center gap-1 w-100">
                                        <span class="__method-payment-one-icon icon-kueskipay"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span></span>
                                    </div>
                                    <p title="" class="m-0 p-0">Préstamo a plazos</p>
                                </button>
                            </div>
                            <div class="method-payment-wrapper __payment-selector-badge">
                                <button type="button" class="btn bg-light shadow align-items-center" style="max-width: 200px; width: 100%; height: 100px;">
                                    <div class="d-flex justify-content-center align-items-center gap-1 w-100">
                                        <span class="__method-payment-one-icon icon-paypal"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span>
                                    </div>
                                    <p title="" class="m-0 p-0">Crédito o débito</p>
                                </button>
                            </div>
                        </fieldset>
                        
                    </fieldset>

                    <fieldset class="form-group d-flex flex-column gap-3 mb-3">
                        <label for="first-name" class="form-label fs-4 fw-semibold text-black">Datos del comprador</label>
                        <fieldset class="row mb-3">
                          <!-- Nombres -->
                          <div class="col-12 col-xl">
                            <label for="passengers[0].firstName" class="form-label">Nombre (s) *</label>
                            <input id="passengers[0].firstName" type="text" name="passengers[0].firstName" placeholder="Nombre (s)" class="form-control form-control-lg" value="" required>
                            <div class="invalid-feedback">
                                Por favor ingrese su nombre.
                            </div>
                          </div>
                          <!-- Apellido Paterno -->
                          <div class="col-12 col-xl">
                            <div class="field-renderer">
                              <label for="passengers[0].lastName" class="form-label">Apellido Paterno *</label>
                              <input id="passengers[0].lastName" type="text" name="passengers[0].lastName" placeholder="Apellido Paterno" class="form-control form-control-lg" value="" required>
                              <div class="invalid-feedback">
                                Por favor ingrese su apellido paterno.
                              </div>
                            </div>
                          </div>
                          <!-- Apellido Materno (mitad del ancho) -->
                          <div class="col-12 col-xl">
                            <div class="field-renderer">
                              <label for="passengers[0].secondLastName" class="form-label">Apellido Materno</label>
                              <input id="passengers[0].secondLastName" type="text" name="passengers[0].secondLastName" placeholder="Apellido Materno (opcional)" class="form-control form-control-lg" value="">
                            </div>
                          </div>
                        </fieldset>
                        <fieldset class="row mb-3">
                            <!-- input phone -->
                            
                            <label for="phone" class="form-label">Teléfono celular *</label>
                            <div class="col">
                                <select name="phoneCountry" class="form-select form-select-lg" id="phoneCountry" required >
                                    <option value="" disabled="">Código de país</option>
                                    <optgroup label="Más usados">
                                        <option value="US">Estados Unidos +1</option>
                                        <option value="MX">México +52</option>
                                        <option value="CO">Colombia +57</option>
                                        <option value="BR">Brasil +55</option>
                                    </optgroup>
                                    <optgroup label="Otros">
                                        <option value="AF">Afganistán +93</option>
                                        <option value="AL">Albania +355</option>
                                        <option value="DE">Alemania +49</option>
                                        <option value="AD">Andorra +376</option>
                                        <option value="AO">Angola +244</option>
                                        <option value="AI">Anguila +1</option>
                                        <option value="AG">Antigua y Barbuda +1</option>
                                        <option value="SA">Arabia Saudita +966</option>
                                        <option value="DZ">Argelia +213</option>
                                        <option value="AR">Argentina +54</option>
                                        <option value="AM">Armenia +374</option>
                                        <option value="AW">Aruba +297</option>
                                        <option value="AU">Australia +61</option>
                                        <option value="AT">Austria +43</option>
                                        <option value="AZ">Azerbaiyán +994</option>
                                        <option value="BS">Bahamas +1</option>
                                        <option value="BD">Bangladés +880</option>
                                        <option value="BB">Barbados +1</option>
                                        <option value="BH">Baréin +973</option>
                                        <option value="BE">Bélgica +32</option>
                                        <option value="BZ">Belice +501</option>
                                        <option value="BJ">Benín +229</option>
                                        <option value="BM">Bermudas +1</option>
                                        <option value="BY">Bielorrusia +375</option>
                                        <option value="MM">Birmania +95</option>
                                        <option value="BO">Bolivia +591</option>
                                        <option value="BA">Bosnia y Herzegovina +387</option>
                                        <option value="BW">Botsuana +267</option>
                                        <option value="BN">Brunéi +673</option>
                                        <option value="BG">Bulgaria +359</option>
                                        <option value="BF">Burkina Faso +226</option>
                                        <option value="BI">Burundi +257</option>
                                        <option value="BT">Bután +975</option>
                                        <option value="CV">Cabo Verde +238</option>
                                        <option value="KH">Camboya +855</option>
                                        <option value="CM">Camerún +237</option>
                                        <option value="CA">Canadá +1</option>
                                        <option value="BQ">Caribe Neerlandés +599</option>
                                        <option value="TD">Chad +235</option>
                                        <option value="CL">Chile +56</option>
                                        <option value="CN">China +86</option>
                                        <option value="CY">Chipre +357</option>
                                        <option value="KM">Comoras +269</option>
                                        <option value="CD">Congo +243</option>
                                        <option value="CG">Congo +242</option>
                                        <option value="KP">Corea del Norte +850</option>
                                        <option value="KR">Corea del Sur +82</option>
                                        <option value="CI">Costa de Marfil +225</option>
                                        <option value="CR">Costa Rica +506</option>
                                        <option value="HR">Croacia +385</option>
                                        <option value="CU">Cuba +53</option>
                                        <option value="CW">Curaçao +599</option>
                                        <option value="DK">Dinamarca +45</option>
                                        <option value="DM">Dominica +1</option>
                                        <option value="EC">Ecuador +593</option>
                                        <option value="EG">Egipto +20</option>
                                        <option value="SV">El Salvador +503</option>
                                        <option value="AE">Emiratos Árabes Unidos +971</option>
                                        <option value="ER">Eritrea +291</option>
                                        <option value="SK">Eslovaquia +421</option>
                                        <option value="SI">Eslovenia +386</option>
                                        <option value="ES">España +34</option>
                                        <option value="EE">Estonia +372</option>
                                        <option value="ET">Etiopía +251</option>
                                        <option value="RU">Federación Rusa +7</option>
                                        <option value="FJ">Fiji +679</option>
                                        <option value="PH">Filipinas +63</option>
                                        <option value="FI">Finlandia +358</option>
                                        <option value="FR">Francia +33</option>
                                        <option value="GA">Gabón +241</option>
                                        <option value="GM">Gambia +220</option>
                                        <option value="GE">Georgia +995</option>
                                        <option value="GH">Ghana +233</option>
                                        <option value="GI">Gibraltar +350</option>
                                        <option value="GD">Granada +1</option>
                                        <option value="GR">Grecia +30</option>
                                        <option value="GL">Groenlandia +299</option>
                                        <option value="GP">Guadalupe +590</option>
                                        <option value="GU">Guam +1</option>
                                        <option value="GT">Guatemala +502</option>
                                        <option value="GF">Guayana Francesa +594</option>
                                        <option value="GG">Guernsey +44</option>
                                        <option value="GN">Guinea +224</option>
                                        <option value="GQ">Guinea Ecuatorial +240</option>
                                        <option value="GW">Guinea-Bisáu +245</option>
                                        <option value="GY">Guyana +592</option>
                                        <option value="HT">Haití +509</option>
                                        <option value="NL">Holanda +31</option>
                                        <option value="HN">Honduras +504</option>
                                        <option value="HK">Hong Kong +852</option>
                                        <option value="HU">Hungría +36</option>
                                        <option value="IN">India +91</option>
                                        <option value="ID">Indonesia +62</option>
                                        <option value="IQ">Irak +964</option>
                                        <option value="IR">Irán +98</option>
                                        <option value="IE">Irlanda +353</option>
                                        <option value="AC">Isla Ascensión +247</option>
                                        <option value="IM">Isla de Man +44</option>
                                        <option value="CX">Isla de Navidad +61</option>
                                        <option value="NF">Isla Norfolk +672</option>
                                        <option value="IS">Islandia +354</option>
                                        <option value="AX">Islas Åland +358</option>
                                        <option value="KY">Islas Caimán +1</option>
                                        <option value="CC">Islas Cocos +61</option>
                                        <option value="CK">Islas Cook +682</option>
                                        <option value="FO">Islas Feroe +298</option>
                                        <option value="FK">Islas Malvinas +500</option>
                                        <option value="MP">Islas Marianas del Norte +1</option>
                                        <option value="MH">Islas Marshall +692</option>
                                        <option value="SB">Islas Salomón +677</option>
                                        <option value="TC">Islas Turcas y Caicos +1</option>
                                        <option value="VG">Islas Vírgenes Británicas +1</option>
                                        <option value="VI">Islas Vírgenes, EE.UU. +1</option>
                                        <option value="IL">Israel +972</option>
                                        <option value="IT">Italia +39</option>
                                        <option value="LY">Jamahiriya Árabe Libia +218</option>
                                        <option value="JM">Jamaica +1</option>
                                        <option value="JP">Japón +81</option>
                                        <option value="JE">Jersey +44</option>
                                        <option value="JO">Jordan +962</option>
                                        <option value="KZ">Kazajstán +7</option>
                                        <option value="KE">Kenya +254</option>
                                        <option value="KG">Kirguistán +996</option>
                                        <option value="KI">Kiribati +686</option>
                                        <option value="XK">Kosovo +383</option>
                                        <option value="KW">Kuwait +965</option>
                                        <option value="LS">Lesotho +266</option>
                                        <option value="LV">Letonia +371</option>
                                        <option value="LB">Líbano +961</option>
                                        <option value="LR">Liberia +231</option>
                                        <option value="LI">Liechtenstein +423</option>
                                        <option value="LT">Lituania +370</option>
                                        <option value="LU">Luxemburgo +352</option>
                                        <option value="MO">Macao +853</option>
                                        <option value="MK">Macedonia +389</option>
                                        <option value="MG">Madagascar +261</option>
                                        <option value="MW">Malawi +265</option>
                                        <option value="MY">Malaysia +60</option>
                                        <option value="MV">Maldivas +960</option>
                                        <option value="ML">Mali +223</option>
                                        <option value="MT">Malta +356</option>
                                        <option value="MA">Marruecos +212</option>
                                        <option value="MQ">Martinica +596</option>
                                        <option value="MU">Mauricio +230</option>
                                        <option value="MR">Mauritania +222</option>
                                        <option value="YT">Mayotte +262</option>
                                        <option value="FM">Micronesia +691</option>
                                        <option value="MD">Moldavia +373</option>
                                        <option value="MC">Mónaco +377</option>
                                        <option value="MN">Mongolia +976</option>
                                        <option value="ME">Montenegro +382</option>
                                        <option value="MS">Montserrat +1</option>
                                        <option value="MZ">Mozambique +258</option>
                                        <option value="NA">Namibia +264</option>
                                        <option value="NR">Nauru +674</option>
                                        <option value="NP">Nepal +977</option>
                                        <option value="NI">Nicaragua +505</option>
                                        <option value="NE">Níger +227</option>
                                        <option value="NG">Nigeria +234</option>
                                        <option value="NU">Niue +683</option>
                                        <option value="NO">Noruega +47</option>
                                        <option value="NC">Nueva Caledonia +687</option>
                                        <option value="NZ">Nueva Zelanda +64</option>
                                        <option value="OM">Omán +968</option>
                                        <option value="PK">Pakistán +92</option>
                                        <option value="PW">Palau +680</option>
                                        <option value="PA">Panamá +507</option>
                                        <option value="PG">Papúa Nueva Guinea +675</option>
                                        <option value="PY">Paraguay +595</option>
                                        <option value="PE">Perú +51</option>
                                        <option value="PF">Polinesia Francesa +689</option>
                                        <option value="PL">Polonia +48</option>
                                        <option value="PT">Portugal +351</option>
                                        <option value="PR">Puerto Rico +1</option>
                                        <option value="QA">Qatar +974</option>
                                        <option value="GB">Reino Unido +44</option>
                                        <option value="SY">República Árabe Siria +963</option>
                                        <option value="CF">República Centroafricana +236</option>
                                        <option value="CZ">República Checa +420</option>
                                        <option value="LA">República Democrática Popular Lao +856</option>
                                        <option value="DO">República Dominicana +1</option>
                                        <option value="RE">Reunión +262</option>
                                        <option value="RW">Ruanda +250</option>
                                        <option value="RO">Rumania +40</option>
                                        <option value="EH">Sáhara Occidental +212</option>
                                        <option value="WS">Samoa +685</option>
                                        <option value="AS">Samoa Americana +1</option>
                                        <option value="BL">San Bartolomé +590</option>
                                        <option value="KN">San Cristóbal y Nieves +1</option>
                                        <option value="SM">San Marino +378</option>
                                        <option value="MF">San Martín +590</option>
                                        <option value="PM">San Pedro y Miquelón +508</option>
                                        <option value="VC">San Vicente y las Granadinas +1</option>
                                        <option value="SH">
                                        Santa Helena, Ascensión y Tristán Da Cunha +290
                                        </option>
                                        <option value="LC">Santa Lucía +1</option>
                                        <option value="VA">Santa Sede (Ciudad del Vaticano) +39</option>
                                        <option value="ST">Santo Tomé y Príncipe +239</option>
                                        <option value="SN">Senegal +221</option>
                                        <option value="RS">Serbia +381</option>
                                        <option value="SC">Seychelles +248</option>
                                        <option value="SL">Sierra Leona +232</option>
                                        <option value="SG">Singapur +65</option>
                                        <option value="SX">Sint Maarten +1</option>
                                        <option value="SO">Somalia +252</option>
                                        <option value="LK">Sri Lanka +94</option>
                                        <option value="ZA">Sudáfrica +27</option>
                                        <option value="SD">Sudán +249</option>
                                        <option value="SE">Suecia +46</option>
                                        <option value="CH">Suiza +41</option>
                                        <option value="SS">Sur de Sudán +211</option>
                                        <option value="SR">Surinam +597</option>
                                        <option value="SJ">Svalbard y Jan Mayen +47</option>
                                        <option value="SZ">Swazilandia +268</option>
                                        <option value="TH">Tailandia +66</option>
                                        <option value="TW">Taiwán +886</option>
                                        <option value="TZ">Tanzania +255</option>
                                        <option value="TJ">Tayikistán +992</option>
                                        <option value="IO">
                                        Territorio Británico del Océano Índico +246
                                        </option>
                                        <option value="PS">Territorio Palestino Ocupado +970</option>
                                        <option value="TL">Timor-Leste +670</option>
                                        <option value="TG">Togo +228</option>
                                        <option value="TK">Tokelau +690</option>
                                        <option value="TO">Tonga +676</option>
                                        <option value="TT">Trinidad y Tobago +1</option>
                                        <option value="TA">Tristán da Cunha +290</option>
                                        <option value="TN">Túnez +216</option>
                                        <option value="TM">Turkmenistán +993</option>
                                        <option value="TR">Turquía +90</option>
                                        <option value="TV">Tuvalu +688</option>
                                        <option value="UA">Ucrania +380</option>
                                        <option value="UG">Uganda +256</option>
                                        <option value="UY">Uruguay +598</option>
                                        <option value="UZ">Uzbekistán +998</option>
                                        <option value="VU">Vanuatu +678</option>
                                        <option value="VE">Venezuela +58</option>
                                        <option value="VN">Vietnam +84</option>
                                        <option value="WF">Wallis y Futuna +681</option>
                                        <option value="YE">Yemen +967</option>
                                        <option value="DJ">Yibuti +253</option>
                                        <option value="ZM">Zambia +260</option>
                                        <option value="ZW">Zimbabwe +263</option>
                                    </optgroup>
                                </select>
                            </div>
                            <!-- Celular -->
                            <div class="col-6">
                                <input id="phone" type="tel" name="phone" placeholder="Teléfono celular" class="form-control form-control-lg" value="" required/>
                                <div class="invalid-feedback">
                                    Por favor ingrese su número de teléfono.
                                </div>
                            </div>
                        </fieldset>
                    </fieldset>

                    <fieldset class="form-group mb-4">

                        <label for="num-target" class="form-label">Número de la tarjeta *</label>
                        <input type="numeric" class="form-control form-control-lg" id="num-target" placeholder="Número de la tarjeta" required>
                        <div class="invalid-feedback">
                            Por favor ingrese el número de la tarjeta.
                        </div>

                        <label for="expirationMonth" class="form-label">Fecha de vencimiento *</label>
                        <fieldset class="d-flex gap-3">

                            <select name="expirationMonth" id="expirationMonth" class="form-select form-select-lg" required>
                                <option value="" disabled selected>Mes</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>

                            <select name="expirationYear" id="expirationYear" class="form-select form-select-lg" required>
                                <option value="" disabled selected>Año</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                                <option value="2032">2032</option>
                                <option value="2033">2033</option>
                                <option value="2034">2034</option>
                                <option value="2035">2035</option>
                            </select>
                        </fieldset>
                        <div class="invalid-feedback d-block" style="margin-top: -1rem;">
                           Por favor seleccione mes y año de vencimiento.
                        </div>

                        <label for="cvv" class="form-label">CVV *</label>
                        <input type="text" id="cvv" name="cvv" class="form-control form-control-lg" placeholder="CVV" maxlength="4" inputmode="numeric" pattern="\\d{3,4}"  required>
                        <div class="invalid-feedback">
                            Por favor ingrese el CVV.
                        </div>

                        <label for="name-target" class="form-label">Nombre del titular *</label>
                        <input type="text" class="form-control form-control-lg" id="name-target" placeholder="Nombre del titular" required>
                        <div class="invalid-feedback">
                            Por favor ingrese el nombre del titular.
                        </div>
                    </fieldset>

                    <button class="btn btn-continue d-flex justify-content-between align-items-center text-light" type="submit">
                      Finalizar compra por
                      <div class="container justify-content-start m-0">
                        <div class="arrow">&gt;</div>
                      </div>
                    </button>
                </form>
            </article>
        `;
    }

    addEventListeners() {
        this.querySelector("#num-target")?.addEventListener("input", this._handleNumericInput);
        this.querySelector("#cvv")?.addEventListener("input", this._handleNumericInput);
        this.querySelector("#payment-form")?.addEventListener("submit", this._handleSubmit);
    }

    removeEventListeners() {
        this.querySelector("#num-target")?.removeEventListener("input", this._handleNumericInput);
        this.querySelector("#cvv")?.removeEventListener("input", this._handleNumericInput);
        this.querySelector("#payment-form")?.removeEventListener("submit", this._handleSubmit);
    }

    _handleNumericInput(event) {
        // Reemplaza cualquier caracter que no sea un dígito
        event.target.value = event.target.value.replace(/\D/g, "");
    }

    _handleSubmit(event) {
        event.preventDefault();
        const form = event.target;

        // Lógica de validación de Bootstrap
        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add('was-validated');
            console.log("El formulario no es válido.");
            // Opcional: mostrar una alerta o mensaje general
            // alert('Por favor, complete todos los campos requeridos.');
        } else {
            form.classList.add('was-validated');
            console.log("Formulario válido, procesando pago...");
            // Aquí iría la lógica para procesar el pago
            // Por ejemplo, recolectar los datos y enviarlos a un backend
            const formData = new FormData(form);
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
            alert('¡Compra finalizada con éxito! (Simulación)');
        }
    }
}
customElements.define("app-payment-form", AppPaymentForm);