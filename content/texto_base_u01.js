// content/texto_base_u01.js

const pag_texto_base_u01 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-20">
        <span class="text-blue-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fab fa-html5 text-lg"></i> TEXTO BASE / UNIDAD 1
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            DISEÑO DE SITIOS WEB CON<br>
            <span class="text-blue-600">LENGUAJES DE MARCAS HTML</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Fundamentos de la Web, arquitectura cliente-servidor, estándares W3C, evolución histórica de versiones, estructuras semánticas y control total sobre formularios en HTML5.
        </p>
        <div class="h-2 w-24 bg-blue-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <!-- SECCIÓN 1: HISTORIA Y GUERRA DE NAVEGADORES -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. Historia de la Web y la Guerra de los Navegadores
            </h3>
            
            <div class="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-8 border-blue-600 rounded-r-3xl shadow-sm mb-8">
                <h4 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">El Origen de la World Wide Web</h4>
                <p class="text-xl text-slate-800 leading-relaxed font-semibold italic">
                    "En 1989, Sir Tim Berners-Lee inventó la World Wide Web en el CERN para compartir información entre científicos de todo el mundo, unificando el hipertexto con la infraestructura de Internet."
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div class="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-globe"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-lg mb-1">Nacimiento (1989-1991)</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Tim Berners-Lee creó los pilares conceptuales: el lenguaje HTML, el protocolo HTTP y el sistema de direccionamiento URL, junto con el primer navegador y servidor Web (NeXTSTEP).
                    </p>
                </div>

                <div class="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div class="w-10 h-10 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-swords"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-lg mb-1">Guerra de Navegadores</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        En los años 90, Netscape Navigator e Internet Explorer compitieron añadiendo etiquetas propietarias no compatibles, fragmentando la web hasta la llegada del W3C para estandarizarla.
                    </p>
                </div>

                <div class="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div class="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-certificate"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-lg mb-1">Era del W3C y HTML5</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        El World Wide Web Consortium (W3C) unificó los estándares. HTML5 surgió como un estándar vivo con semántica moderna, multimedia nativa y soporte móvil.
                    </p>
                </div>
            </div>

            <hr class="border-slate-100 my-12">

            <!-- TABLA HISTÓRICA DE VERSIONES DE HTML -->
            <h4 class="text-2xl font-black text-[#003366] uppercase mb-6">Evolución Cronológica y Versiones de HTML</h4>
            <div class="overflow-x-auto bg-white rounded-2xl shadow-lg border border-slate-200 mb-12">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase text-xs tracking-widest">
                            <th class="p-4 font-black">Versión</th>
                            <th class="p-4 font-black">Año</th>
                            <th class="p-4 font-black">Organismo / Autor</th>
                            <th class="p-4 font-black">Características Principales e Hitos</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-slate-700">
                        <tr class="border-b border-slate-100 hover:bg-blue-50/50">
                            <td class="p-4 font-bold text-slate-800">HTML 1.0</td>
                            <td class="p-4 font-mono text-blue-600">1991</td>
                            <td class="p-4 text-xs font-semibold">Tim Berners-Lee (CERN)</td>
                            <td class="p-4 text-xs">Versión borrador básica con 18 etiquetas elementales orientadas a texto e hipervínculos.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-blue-50/50">
                            <td class="p-4 font-bold text-slate-800">HTML 2.0</td>
                            <td class="p-4 font-mono text-blue-600">1995</td>
                            <td class="p-4 text-xs font-semibold">IETF (Internet Engineering Task Force)</td>
                            <td class="p-4 text-xs">Primer estándar formal. Incluyó soporte inicial para formularios simples y tablas básicas.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-blue-50/50">
                            <td class="p-4 font-bold text-slate-800">HTML 3.2</td>
                            <td class="p-4 font-mono text-blue-600">1997</td>
                            <td class="p-4 text-xs font-semibold">W3C</td>
                            <td class="p-4 text-xs">Primera recomendación oficial del W3C. Integró tablas complejas, applets de Java y texto alrededor de imágenes.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-blue-50/50">
                            <td class="p-4 font-bold text-slate-800">HTML 4.01</td>
                            <td class="p-4 font-mono text-blue-600">1999</td>
                            <td class="p-4 text-xs font-semibold">W3C</td>
                            <td class="p-4 text-xs">Consolidó la separación entre contenido y presentación mediante la introducción oficial de CSS.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-blue-50/50">
                            <td class="p-4 font-bold text-slate-800">XHTML 1.0</td>
                            <td class="p-4 font-mono text-blue-600">2000</td>
                            <td class="p-4 text-xs font-semibold">W3C</td>
                            <td class="p-4 text-xs">Reformulación de HTML bajo reglas sintácticas estrictas de XML (cierre obligatorio de todas las etiquetas).</td>
                        </tr>
                        <tr class="hover:bg-blue-50/50">
                            <td class="p-4 font-bold text-blue-600 font-black">HTML5</td>
                            <td class="p-4 font-mono text-blue-600">2014 - Presente</td>
                            <td class="p-4 text-xs font-semibold">WHATWG / W3C</td>
                            <td class="p-4 text-xs">Estándar moderno con etiquetas semánticas, multimedia nativa (&lt;audio&gt;, &lt;video&gt;), APIs de Geolocalización y formularios avanzados.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- TRÍADA FUNDAMENTAL DE LA WEB -->
            <h4 class="text-2xl font-black text-[#003366] uppercase mb-6">Tríada Fundamental de la Web</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <span class="text-xs font-black text-blue-600 uppercase tracking-widest block mb-1">Lenguaje de Marcado</span>
                    <h5 class="text-xl font-bold text-slate-800 mb-2">HTML</h5>
                    <p class="text-xs text-slate-400 font-mono mb-3">HyperText Markup Language</p>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Lenguaje estructurado basado en etiquetas que define la organización, jerarquía y contenido de los documentos web.
                    </p>
                </div>

                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <span class="text-xs font-black text-blue-600 uppercase tracking-widest block mb-1">Direccionamiento</span>
                    <h5 class="text-xl font-bold text-slate-800 mb-2">URL</h5>
                    <p class="text-xs text-slate-400 font-mono mb-3">Uniform Resource Locator</p>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Cadena única que asigna la dirección exacta de acceso a cualquier recurso (páginas, imágenes, archivos) en la red.
                    </p>
                </div>

                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <span class="text-xs font-black text-blue-600 uppercase tracking-widest block mb-1">Protocolo de Red</span>
                    <h5 class="text-xl font-bold text-slate-800 mb-2">HTTP / HTTPS</h5>
                    <p class="text-xs text-slate-400 font-mono mb-3">HyperText Transfer Protocol (Secure)</p>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Protocolo de comunicación cliente-servidor para la transferencia segura de datos e hipertexto en la Web.
                    </p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 2: ESTRUCTURA BÁSICA Y ETIQUETAS -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. Estructura Básica de un Documento HTML5
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Todo documento HTML5 debe seguir un esquema estandarizado compuesto por la declaración del tipo de documento, metadatos en el <code>&lt;head&gt;</code> y el contenido visible en el <code>&lt;body&gt;</code>.
            </p>

            <div class="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm text-slate-200 mb-8">
                <div class="bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-700/50">
                    <span class="text-xs text-slate-400 font-bold"><i class="fab fa-html5 text-orange-500 mr-2"></i> estructura_base.html</span>
                    <div class="flex gap-1.5">
                        <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                        <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                        <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                    </div>
                </div>
                <pre class="p-6 overflow-x-auto leading-relaxed text-xs md:text-sm bg-slate-950"><code><span class="text-slate-500">&lt;!DOCTYPE html&gt;</span>
<span class="text-blue-400">&lt;html</span> <span class="text-yellow-400">lang</span>=<span class="text-emerald-400">"es"</span><span class="text-blue-400">&gt;</span>
<span class="text-blue-400">&lt;head&gt;</span>
    <span class="text-blue-400">&lt;meta</span> <span class="text-yellow-400">charset</span>=<span class="text-emerald-400">"UTF-8"</span><span class="text-blue-400">&gt;</span>
    <span class="text-blue-400">&lt;meta</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"viewport"</span> <span class="text-yellow-400">content</span>=<span class="text-emerald-400">"width=device-width, initial-scale=1.0"</span><span class="text-blue-400">&gt;</span>
    <span class="text-blue-400">&lt;title&gt;</span>Diseño Web I - UPDS<span class="text-blue-400">&lt;/title&gt;</span>
<span class="text-blue-400">&lt;/head&gt;</span>
<span class="text-blue-400">&lt;body&gt;</span>
    <span class="text-blue-400">&lt;header&gt;</span>
        <span class="text-blue-400">&lt;h1&gt;</span>Título Principal (H1)<span class="text-blue-400">&lt;/h1&gt;</span>
    <span class="text-blue-400">&lt;/header&gt;</span>

    <span class="text-blue-400">&lt;main&gt;</span>
        <span class="text-blue-400">&lt;p&gt;</span>Párrafo descriptivo con un <span class="text-blue-400">&lt;a</span> <span class="text-yellow-400">href</span>=<span class="text-emerald-400">"#"</span><span class="text-blue-400">&gt;</span>enlace de hipertexto<span class="text-blue-400">&lt;/a&gt;</span>.<span class="text-blue-400">&lt;/p&gt;</span>
    <span class="text-blue-400">&lt;/main&gt;</span>
<span class="text-blue-400">&lt;/body&gt;</span>
<span class="text-blue-400">&lt;/html&gt;</span></code></pre>
            </div>
        </section>

        <!-- SECCIÓN 3: EXPLICACIÓN DETALLADA DE FORMULARIOS Y SUS ELEMENTOS -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Formularios Web: La Etiqueta &lt;form&gt; y sus Atributos
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                El elemento <code>&lt;form&gt;</code> es el contenedor maestro encargado de recolectar la información ingresada por un usuario para enviarla a un servidor o procesarla mediante JavaScript.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <h5 class="font-black text-[#003366] text-base mb-2"><code>action</code></h5>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Define la ruta o URL de destino a la que se enviarán los datos del formulario (ejemplo: <code>action="/guardar.php"</code> o un endpoint de API).
                    </p>
                </div>

                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <h5 class="font-black text-[#003366] text-base mb-2"><code>method</code></h5>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Especifica el método HTTP de envío: <code>GET</code> (envía datos expuestos en la URL, ideal para búsquedas) o <code>POST</code> (envía datos ocultos en el cuerpo de la petición, ideal para contraseñas o registros).
                    </p>
                </div>

                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <h5 class="font-black text-[#003366] text-base mb-2"><code>enctype</code></h5>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Indica cómo se codifican los datos. Para subir archivos o imágenes es estrictamente necesario utilizar <code>enctype="multipart/form-data"</code>.
                    </p>
                </div>

                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <h5 class="font-black text-[#003366] text-base mb-2"><code>novalidate</code></h5>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Atributo booleano opcional que deshabilita la validación automática por defecto del navegador en HTML5.
                    </p>
                </div>
            </div>

            <!-- OTROS ELEMENTOS DE FORMULARIO QUE PUEDES USAR -->
            <h4 class="text-2xl font-black text-[#003366] uppercase mb-4">Otros Elementos Fundamentales de Formulario</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <h5 class="font-bold text-slate-800 text-sm mb-1"><code>&lt;label&gt;</code></h5>
                    <p class="text-slate-500 text-xs">
                        Asocia un texto descriptivo a un campo mediante el atributo <code>for="id_del_campo"</code>, mejorando la accesibilidad y el área de clic.
                    </p>
                </div>

                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <h5 class="font-bold text-slate-800 text-sm mb-1"><code>&lt;fieldset&gt; y &lt;legend&gt;</code></h5>
                    <p class="text-slate-500 text-xs">
                        <code>&lt;fieldset&gt;</code> agrupa secciones complejas dentro de un recuadro, mientras que <code>&lt;legend&gt;</code> define el título de dicho grupo.
                    </p>
                </div>

                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <h5 class="font-bold text-slate-800 text-sm mb-1"><code>&lt;select&gt; y &lt;option&gt;</code></h5>
                    <p class="text-slate-500 text-xs">
                        Crea menús desplegables de selección única o múltiple mediante opciones individuales definidos con <code>&lt;option&gt;</code>.
                    </p>
                </div>

                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <h5 class="font-bold text-slate-800 text-sm mb-1"><code>&lt;textarea&gt;</code></h5>
                    <p class="text-slate-500 text-xs">
                        Campo multilínea ideal para comentarios, mensajes o descripciones extensas.
                    </p>
                </div>

                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <h5 class="font-bold text-slate-800 text-sm mb-1"><code>&lt;datalist&gt;</code></h5>
                    <p class="text-slate-500 text-xs">
                        Proporciona una lista de sugerencias autocompletables para un campo <code>&lt;input&gt;</code>.
                    </p>
                </div>

                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <h5 class="font-bold text-slate-800 text-sm mb-1"><code>&lt;button&gt;</code></h5>
                    <p class="text-slate-500 text-xs">
                        Botonera para activar acciones. Puede ser de tipo <code>submit</code>, <code>reset</code> o <code>button</code>.
                    </p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 4: EJEMPLOS DE CÓDIGO NECESARIOS EN FORMULARIOS -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. Ejemplos Prácticos de Entradas en Formularios (Inputs)
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                A continuación tienes los bloques de código más comunes para utilizarlos en tus desarrollos:
            </p>

            <!-- EJEMPLOS EN CÓDIGO HTML -->
            <div class="space-y-8">

                <!-- 1. CHECKBOXES -->
                <div>
                    <h4 class="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <i class="fas fa-square-check text-blue-600"></i> Checkboxes (Casillas de Selección Múltiple)
                    </h4>
                    <p class="text-xs text-slate-500 mb-3">Permiten al usuario seleccionar 0, 1 o varias opciones independientes.</p>
                    <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">&lt;!-- Checkboxes independientes (Misma categoría usa 'name[]' o 'name' único) --&gt;</span>
<span class="text-blue-400">&lt;p&gt;</span>Selecciona tus áreas de interés:<span class="text-blue-400">&lt;/p&gt;</span>

<span class="text-blue-400">&lt;input</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"checkbox"</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"frontend"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"intereses"</span> <span class="text-yellow-400">value</span>=<span class="text-emerald-400">"frontend"</span> <span class="text-yellow-400">checked</span><span class="text-blue-400">&gt;</span>
<span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"frontend"</span><span class="text-blue-400">&gt;</span>Desarrollo Frontend<span class="text-blue-400">&lt;/label&gt;&lt;br&gt;</span>

<span class="text-blue-400">&lt;input</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"checkbox"</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"backend"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"intereses"</span> <span class="text-yellow-400">value</span>=<span class="text-emerald-400">"backend"</span><span class="text-blue-400">&gt;</span>
<span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"backend"</span><span class="text-blue-400">&gt;</span>Desarrollo Backend<span class="text-blue-400">&lt;/label&gt;&lt;br&gt;</span>

<span class="text-blue-400">&lt;input</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"checkbox"</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"base_datos"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"intereses"</span> <span class="text-yellow-400">value</span>=<span class="text-emerald-400">"bd"</span><span class="text-blue-400">&gt;</span>
<span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"base_datos"</span><span class="text-blue-400">&gt;</span>Bases de Datos<span class="text-blue-400">&lt;/label&gt;</span></code></pre>
                    </div>
                </div>

                <!-- 2. RADIO BUTTONS -->
                <div>
                    <h4 class="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <i class="fas fa-circle-dot text-blue-600"></i> Radio Buttons (Botones de Opción Excluyente)
                    </h4>
                    <p class="text-xs text-slate-500 mb-3">Permiten elegir únicamente **una** opción dentro de un grupo. Para agruparlos, deben compartir exactamente el mismo valor en el atributo <code>name</code>.</p>
                    <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">&lt;!-- Para agrupar los botones de radio, usaremos exactamente el mismo 'name' --&gt;</span>
<span class="text-blue-400">&lt;p&gt;</span>Selecciona tu modalidad de estudio:<span class="text-blue-400">&lt;/p&gt;</span>

<span class="text-blue-400">&lt;input</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"radio"</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"presencial"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"modalidad"</span> <span class="text-yellow-400">value</span>=<span class="text-emerald-400">"presencial"</span> <span class="text-yellow-400">required</span><span class="text-blue-400">&gt;</span>
<span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"presencial"</span><span class="text-blue-400">&gt;</span>Presencial<span class="text-blue-400">&lt;/label&gt;&lt;br&gt;</span>

<span class="text-blue-400">&lt;input</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"radio"</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"virtual"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"modalidad"</span> <span class="text-yellow-400">value</span>=<span class="text-emerald-400">"virtual"</span><span class="text-blue-400">&gt;</span>
<span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"virtual"</span><span class="text-blue-400">&gt;</span>Semipresencial / Virtual<span class="text-blue-400">&lt;/label&gt;</span></code></pre>
                    </div>
                </div>

                <!-- 3. OTROS INPUTS ESENCIALES (TEXTO, SELECT, FILE, DATE, ETC.) -->
                <div>
                    <h4 class="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <i class="fas fa-list-check text-blue-600"></i> Selección, Carga de Archivos y Fechas en HTML5
                    </h4>
                    <p class="text-xs text-slate-500 mb-3">Entradas especializadas para fechas, archivos, listas desplegables y rangos.</p>
                    <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">&lt;!-- Menú Desplegable --&gt;</span>
<span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"carrera"</span><span class="text-blue-400">&gt;</span>Carrera Universitario:<span class="text-blue-400">&lt;/label&gt;</span>
<span class="text-blue-400">&lt;select</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"carrera"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"carrera"</span><span class="text-blue-400">&gt;</span>
    <span class="text-blue-400">&lt;option</span> <span class="text-yellow-400">value</span>=<span class="text-emerald-400">""</span><span class="text-blue-400">&gt;</span>-- Seleccione una opción --<span class="text-blue-400">&lt;/option&gt;</span>
    <span class="text-blue-400">&lt;option</span> <span class="text-yellow-400">value</span>=<span class="text-emerald-400">"sistemas"</span><span class="text-blue-400">&gt;</span>Ingeniería de Sistemas<span class="text-blue-400">&lt;/option&gt;</span>
    <span class="text-blue-400">&lt;option</span> <span class="text-yellow-400">value</span>=<span class="text-emerald-400">"redes"</span><span class="text-blue-400">&gt;</span>Ingeniería en Redes<span class="text-blue-400">&lt;/option&gt;</span>
<span class="text-blue-400">&lt;/select&gt;</span>

<span class="text-slate-500">&lt;!-- Selector de Fecha --&gt;</span>
<span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"fecha_nacimiento"</span><span class="text-blue-400">&gt;</span>Fecha de Nacimiento:<span class="text-blue-400">&lt;/label&gt;</span>
<span class="text-blue-400">&lt;input</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"date"</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"fecha_nacimiento"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"fecha_nacimiento"</span><span class="text-blue-400">&gt;</span>

<span class="text-slate-500">&lt;!-- Carga de Archivos (Ej. PDF o imagen) --&gt;</span>
<span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"cv"</span><span class="text-blue-400">&gt;</span>Subir Documento (PDF):<span class="text-blue-400">&lt;/label&gt;</span>
<span class="text-blue-400">&lt;input</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"file"</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"cv"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"cv"</span> <span class="text-yellow-400">accept</span>=<span class="text-emerald-400">".pdf"</span><span class="text-blue-400">&gt;</span>

<span class="text-slate-500">&lt;!-- Selector de Color --&gt;</span>
<span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"color_favorito"</span><span class="text-blue-400">&gt;</span>Color corporativo:<span class="text-blue-400">&lt;/label&gt;</span>
<span class="text-blue-400">&lt;input</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"color"</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"color_favorito"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"color_favorito"</span> <span class="text-yellow-400">value</span>=<span class="text-emerald-400">"#00aaff"</span><span class="text-blue-400">&gt;</span></code></pre>
                    </div>
                </div>

            </div>
        </section>

        <!-- SECCIÓN 5: PROYECTO 100% HTML CON FORMULARIO COMPLETO -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                5. Proyecto Práctico: Portafolio y Formulario Completo
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                A continuación se presenta el código integrado que incluye la estructura completa con **múltiples tipos de entradas en un formulario real**.
            </p>

            <div class="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs md:text-sm text-slate-200 mb-8">
                <div class="bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-700/50">
                    <span class="text-xs text-slate-400 font-bold"><i class="fas fa-code text-blue-400 mr-2"></i> proyecto_unidad1.html</span>
                    <span class="text-[10px] bg-blue-600 text-white font-bold px-2 py-0.5 rounded">Proyecto U1</span>
                </div>
                <pre class="p-6 overflow-x-auto leading-relaxed bg-slate-950 text-slate-300"><code><span class="text-slate-500">&lt;!DOCTYPE html&gt;</span>
<span class="text-blue-400">&lt;html</span> <span class="text-yellow-400">lang</span>=<span class="text-emerald-400">"es"</span><span class="text-blue-400">&gt;</span>
<span class="text-blue-400">&lt;head&gt;</span>
    <span class="text-blue-400">&lt;meta</span> <span class="text-yellow-400">charset</span>=<span class="text-emerald-400">"UTF-8"</span><span class="text-blue-400">&gt;</span>
    <span class="text-blue-400">&lt;title&gt;</span>Portafolio e Inscripción - UPDS<span class="text-blue-400">&lt;/title&gt;</span>
<span class="text-blue-400">&lt;/head&gt;</span>
<span class="text-blue-400">&lt;body&gt;</span>

    <span class="text-blue-400">&lt;header&gt;</span>
        <span class="text-blue-400">&lt;h1&gt;</span>Registro de Estudiante y Portafolio<span class="text-blue-400">&lt;/h1&gt;</span>
        <span class="text-blue-400">&lt;p&gt;</span>Asignatura: Diseño Web I (SIS-0140)<span class="text-blue-400">&lt;/p&gt;</span>
    <span class="text-blue-400">&lt;/header&gt;</span>

    <span class="text-blue-400">&lt;hr&gt;</span>

    <span class="text-blue-400">&lt;main&gt;</span>
        <span class="text-blue-400">&lt;section&gt;</span>
            <span class="text-blue-400">&lt;h2&gt;</span>Formulario de Registro Académico<span class="text-blue-400">&lt;/h2&gt;</span>
            <span class="text-blue-400">&lt;form</span> <span class="text-yellow-400">action</span>=<span class="text-emerald-400">"#"</span> <span class="text-yellow-400">method</span>=<span class="text-emerald-400">"POST"</span><span class="text-blue-400">&gt;</span>
                
                <span class="text-blue-400">&lt;fieldset&gt;</span>
                    <span class="text-blue-400">&lt;legend&gt;</span>Datos Personales<span class="text-blue-400">&lt;/legend&gt;</span>
                    <span class="text-blue-400">&lt;p&gt;</span>
                        <span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"nombre"</span><span class="text-blue-400">&gt;</span>Nombre Completo:<span class="text-blue-400">&lt;/label&gt;&lt;br&gt;</span>
                        <span class="text-blue-400">&lt;input</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"text"</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"nombre"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"nombre"</span> <span class="text-yellow-400">placeholder</span>=<span class="text-emerald-400">"Ej. Juan Pérez"</span> <span class="text-yellow-400">required</span><span class="text-blue-400">&gt;</span>
                    <span class="text-blue-400">&lt;/p&gt;</span>

                    <span class="text-blue-400">&lt;p&gt;</span>
                        <span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"correo"</span><span class="text-blue-400">&gt;</span>Correo Institucional:<span class="text-blue-400">&lt;/label&gt;&lt;br&gt;</span>
                        <span class="text-blue-400">&lt;input</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"email"</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"correo"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"correo"</span> <span class="text-yellow-400">required</span><span class="text-blue-400">&gt;</span>
                    <span class="text-blue-400">&lt;/p&gt;</span>
                <span class="text-blue-400">&lt;/fieldset&gt;</span>

                <span class="text-blue-400">&lt;br&gt;</span>

                <span class="text-blue-400">&lt;fieldset&gt;</span>
                    <span class="text-blue-400">&lt;legend&gt;</span>Preferencias y Modalidad<span class="text-blue-400">&lt;/legend&gt;</span>
                    
                    <span class="text-slate-500">&lt;!-- Radio Buttons --&gt;</span>
                    <span class="text-blue-400">&lt;p&gt;</span>Turno:<span class="text-blue-400">&lt;/p&gt;</span>
                    <span class="text-blue-400">&lt;input</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"radio"</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"manana"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"turno"</span> <span class="text-yellow-400">value</span>=<span class="text-emerald-400">"manana"</span><span class="text-blue-400">&gt;</span>
                    <span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"manana"</span><span class="text-blue-400">&gt;</span>Mañana<span class="text-blue-400">&lt;/label&gt;</span>
                    <span class="text-blue-400">&lt;input</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"radio"</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"noche"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"turno"</span> <span class="text-yellow-400">value</span>=<span class="text-emerald-400">"noche"</span><span class="text-blue-400">&gt;</span>
                    <span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"noche"</span><span class="text-blue-400">&gt;</span>Noche<span class="text-blue-400">&lt;/label&gt;</span>

                    <span class="text-blue-400">&lt;br&gt;&lt;br&gt;</span>

                    <span class="text-slate-500">&lt;!-- Checkboxes --&gt;</span>
                    <span class="text-blue-400">&lt;p&gt;</span>Tecnologías que dominas:<span class="text-blue-400">&lt;/p&gt;</span>
                    <span class="text-blue-400">&lt;input</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"checkbox"</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"html"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"skills"</span> <span class="text-yellow-400">value</span>=<span class="text-emerald-400">"html"</span><span class="text-blue-400">&gt;</span>
                    <span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"html"</span><span class="text-blue-400">&gt;</span>HTML5<span class="text-blue-400">&lt;/label&gt;</span>
                    <span class="text-blue-400">&lt;input</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"checkbox"</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"css"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"skills"</span> <span class="text-yellow-400">value</span>=<span class="text-emerald-400">"css"</span><span class="text-blue-400">&gt;</span>
                    <span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"css"</span><span class="text-blue-400">&gt;</span>CSS3<span class="text-blue-400">&lt;/label&gt;</span>
                <span class="text-blue-400">&lt;/fieldset&gt;</span>

                <span class="text-blue-400">&lt;br&gt;</span>

                <span class="text-blue-400">&lt;button</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"submit"</span><span class="text-blue-400">&gt;</span>Completar Registro<span class="text-blue-400">&lt;/button&gt;</span>
            <span class="text-blue-400">&lt;/form&gt;</span>
        <span class="text-blue-400">&lt;/section&gt;</span>
    <span class="text-blue-400">&lt;/main&gt;</span>

    <span class="text-blue-400">&lt;footer&gt;</span>
        <span class="text-blue-400">&lt;p&gt;</span>&copy; 2026 Universidad Privada Domingo Savio<span class="text-blue-400">&lt;/p&gt;</span>
    <span class="text-blue-400">&lt;/footer&gt;</span>

<span class="text-blue-400">&lt;/body&gt;</span>
<span class="text-blue-400">&lt;/html&gt;</span></code></pre>
            </div>
        </section>

        <!-- SECCIÓN 6: TIPS FINALES Y BUENAS PRÁCTICAS HTML -->
        <section class="bg-gradient-to-br from-[#001f3f] to-[#003366] p-8 md:p-12 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
            <i class="fas fa-lightbulb absolute -right-10 -bottom-10 text-white/5 text-[18rem] rotate-12"></i>
            <div class="relative z-10">
                <h3 class="text-3xl font-black uppercase text-blue-400 mb-6">Tips Finak y Buenas Prácticas en HTML5</h3>
                
                <div class="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">
                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Usar Siempre Semántica</h4>
                        <p class="text-slate-200">
                            Evita el "Divitis" (abuso indiscriminado de etiquetas <code>&lt;div&gt;</code>). Utiliza elementos como <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code> y <code>&lt;footer&gt;</code> para dar contexto estructural a motores de búsqueda (SEO).
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-universal-access mr-2"></i> Accesibilidad (Atributos alt y for)</h4>
                        <p class="text-slate-200">
                            Siempre asigna el atributo <code>alt</code> en las imágenes para lectores de pantalla. En formularios, vincula siempre cada <code>&lt;label for="..."&gt;</code> con el <code>id</code> correspondiente del <code>&lt;input&gt;</code>.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-code mr-2"></i> Mantener Identación y Minúsculas</h4>
                        <p class="text-slate-200">
                            Aunque HTML5 no es sensible a mayúsculas/minúsculas, los estándares vigentes exigen escribir las etiquetas y atributos en minúsculas e indentar jerárquicamente para garantizar legibilidad.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-[#00aaff] fa-shield-halved mr-2"></i> Validar Estándares con la W3C</h4>
                        <p class="text-slate-200">
                            Acostumbra pasar tus documentos HTML por el servicio oficial de validación de la W3C (<code>validator.w3.org</code>) para garantizar código limpio y sin errores de sintaxis.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;