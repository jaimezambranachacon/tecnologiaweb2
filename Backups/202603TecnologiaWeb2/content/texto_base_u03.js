// content/texto_base_u03.js

const pag_texto_base_u03 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-yellow-500 font-black uppercase text-xs tracking-[0.3em]">TEXTO BASE / UNIDAD 03</span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            LÓGICA E<br>
            <span class="text-yellow-500">INTERACTIVIDAD (JS)</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            JavaScript (JS) es el lenguaje que da vida a la web. Pasamos de documentos estáticos a aplicaciones dinámicas. Aquí aprenderemos desde la sintaxis básica hasta el consumo asíncrono de datos del servidor.
        </p>
        <div class="h-2 w-24 bg-[#003366] mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Nivel 1: Variables y Tipos de Datos</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                En el JS moderno (ES6+), ya no usamos <code>var</code>. Utilizamos <code>let</code> para valores que van a cambiar en el futuro, y <code>const</code> para valores que serán inmutables (constantes).
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <div class="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                    <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    <span class="text-slate-400 text-[10px] font-mono ml-2 uppercase">app.js</span>
                </div>
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-gray-400">// Constante: No puede reasignarse</span>
<span class="text-pink-400">const</span> <span class="text-white">nombreSistema</span> = <span class="text-green-400">"Sincronía Aérea BOA"</span><span class="text-white">;</span>

<span class="text-gray-400">// Variable: Puede cambiar su valor</span>
<span class="text-pink-400">let</span> <span class="text-white">vuelosActivos</span> = <span class="text-yellow-300">24</span><span class="text-white">;</span>
<span class="text-white">vuelosActivos</span> = <span class="text-yellow-300">25</span><span class="text-white">;</span> <span class="text-gray-400">// Correcto</span>

<span class="text-gray-400">// Tipos de datos básicos</span>
<span class="text-pink-400">let</span> <span class="text-white">esDeNoche</span> = <span class="text-yellow-300">true</span><span class="text-white">;</span> <span class="text-gray-400">// Booleano</span>
<span class="text-pink-400">let</span> <span class="text-white">destinos</span> = [<span class="text-green-400">"La Paz"</span>, <span class="text-green-400">"Santa Cruz"</span>, <span class="text-green-400">"Cochabamba"</span>]<span class="text-white">;</span> <span class="text-gray-400">// Array (Arreglo)</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Nivel 2: Control de Flujo</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Los programas necesitan tomar decisiones. Usamos condicionales (<code>if / else</code>) para ejecutar código basado en una condición, y bucles (<code>for</code>) para repetir tareas.
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-gray-400">/* --- Condicionales --- */</span>
<span class="text-pink-400">let</span> <span class="text-white">edadUsuario</span> = <span class="text-yellow-300">20</span><span class="text-white">;</span>

<span class="text-pink-400">if</span> (<span class="text-white">edadUsuario</span> >= <span class="text-yellow-300">18</span>) <span class="text-white">{</span>
    <span class="text-white">console</span>.<span class="text-yellow-300">log</span>(<span class="text-green-400">"Acceso permitido al sistema."</span>)<span class="text-white">;</span>
<span class="text-white">}</span> <span class="text-pink-400">else</span> <span class="text-white">{</span>
    <span class="text-white">console</span>.<span class="text-yellow-300">log</span>(<span class="text-green-400">"Acceso denegado."</span>)<span class="text-white">;</span>
<span class="text-white">}</span>

<span class="text-gray-400">/* --- Bucles (Ciclos) --- */</span>
<span class="text-gray-400">// Imprime los números del 1 al 5</span>
<span class="text-pink-400">for</span> (<span class="text-pink-400">let</span> <span class="text-white">i</span> = <span class="text-yellow-300">1</span><span class="text-white">;</span> <span class="text-white">i</span> <= <span class="text-yellow-300">5</span><span class="text-white">;</span> <span class="text-white">i</span>++) <span class="text-white">{</span>
    <span class="text-white">console</span>.<span class="text-yellow-300">log</span>(<span class="text-green-400">"Procesando vuelo número: "</span> + <span class="text-white">i</span>)<span class="text-white">;</span>
<span class="text-white">}</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Nivel 3: Funciones (Arrow Functions)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Para no repetir código, encapsulamos la lógica en funciones. En el desarrollo moderno (especialmente en frameworks como Vue o React), usamos las <strong>Funciones Flecha (Arrow Functions)</strong> por ser más cortas y predecibles.
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-gray-400">// 1. Función Tradicional</span>
<span class="text-pink-400">function</span> <span class="text-yellow-300">saludar</span>(<span class="text-white">nombre</span>) <span class="text-white">{</span>
    <span class="text-pink-400">return</span> <span class="text-green-400">"Hola, "</span> + <span class="text-white">nombre</span><span class="text-white">;</span>
<span class="text-white">}</span>

<span class="text-gray-400">// 2. Arrow Function (Función Flecha) - Moderna y Limpia</span>
<span class="text-pink-400">const</span> <span class="text-yellow-300">saludarModerno</span> = (<span class="text-white">nombre</span>) <span class="text-pink-400">=&gt;</span> <span class="text-white">{</span>
    <span class="text-gray-400">// Uso de Template Strings (Comillas Invertidas) para inyectar variables</span>
    <span class="text-pink-400">return</span> <span class="text-green-400">\`Bienvenido al sistema, \${</span><span class="text-white">nombre</span><span class="text-green-400">}\`</span><span class="text-white">;</span>
<span class="text-white">};</span>

<span class="text-white">console</span>.<span class="text-yellow-300">log</span>(<span class="text-yellow-300">saludarModerno</span>(<span class="text-green-400">"Estudiante"</span>))<span class="text-white">;</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Nivel 4: Manipulación del DOM y Eventos</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                El <strong>DOM</strong> (Document Object Model) es la representación que hace el navegador de nuestro HTML. Con JS, podemos "atrapar" etiquetas HTML y reaccionar cuando el usuario hace clic o escribe.
            </p>

            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-gray-400">/* Supongamos que en HTML tenemos: &lt;button id="btn-magico"&gt;Clic Aquí&lt;/button&gt; */</span>

<span class="text-gray-400">// 1. Seleccionar el elemento del DOM</span>
<span class="text-pink-400">const</span> <span class="text-white">boton</span> = <span class="text-white">document</span>.<span class="text-yellow-300">querySelector</span>(<span class="text-green-400">"#btn-magico"</span>)<span class="text-white">;</span>

<span class="text-gray-400">// 2. Escuchar el Evento 'click'</span>
<span class="text-white">boton</span>.<span class="text-yellow-300">addEventListener</span>(<span class="text-green-400">"click"</span>, () <span class="text-pink-400">=&gt;</span> <span class="text-white">{</span>
    <span class="text-white">alert</span>(<span class="text-green-400">"¡Has hecho clic en el botón!"</span>)<span class="text-white">;</span>
    <span class="text-white">boton</span>.<span class="text-white">style</span>.<span class="text-blue-300">backgroundColor</span> = <span class="text-green-400">"red"</span><span class="text-white">;</span> <span class="text-gray-400">// Cambiamos CSS desde JS</span>
<span class="text-white">});</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Nivel 5: Asincronía y Fetch API (Nivel Élite)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Esta es la habilidad más demandada en un ingeniero web. La capacidad de pedir datos a un servidor (nuestro futuro Backend en PHP) en segundo plano, sin recargar la página. Para esto usamos <code>async / await</code> y la API <code>fetch</code>.
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <div class="bg-slate-800 px-4 py-2 border-b border-slate-700">
                    <span class="text-slate-400 text-[10px] font-mono uppercase">Ejemplo: Consumo de API REST</span>
                </div>
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-gray-400">// Usamos 'async' para indicar que la función ejecutará tareas en segundo plano</span>
<span class="text-pink-400">const</span> <span class="text-yellow-300">obtenerVuelos</span> = <span class="text-pink-400">async</span> () <span class="text-pink-400">=&gt;</span> <span class="text-white">{</span>
    <span class="text-pink-400">try</span> <span class="text-white">{</span>
        <span class="text-gray-400">// 'await' pausa la ejecución hasta que el servidor responda</span>
        <span class="text-pink-400">const</span> <span class="text-white">respuesta</span> = <span class="text-pink-400">await</span> <span class="text-yellow-300">fetch</span>(<span class="text-green-400">"https://api.boa.bo/vuelos"</span>)<span class="text-white">;</span>
        
        <span class="text-gray-400">// Convertimos la respuesta cruda a formato JSON (Objetos JS)</span>
        <span class="text-pink-400">const</span> <span class="text-white">datos</span> = <span class="text-pink-400">await</span> <span class="text-white">respuesta</span>.<span class="text-yellow-300">json</span>()<span class="text-white">;</span>
        
        <span class="text-white">console</span>.<span class="text-yellow-300">log</span>(<span class="text-green-400">"Vuelos recibidos del servidor:"</span>, <span class="text-white">datos</span>)<span class="text-white">;</span>
        
    <span class="text-white">}</span> <span class="text-pink-400">catch</span> (<span class="text-white">error</span>) <span class="text-white">{</span>
        <span class="text-white">console</span>.<span class="text-yellow-300">error</span>(<span class="text-green-400">"Error de conexión:"</span>, <span class="text-white">error</span>)<span class="text-white">;</span>
    <span class="text-white">}</span>
<span class="text-white">};</span>

<span class="text-gray-400">// Ejecutamos la función</span>
<span class="text-yellow-300">obtenerVuelos</span>()<span class="text-white">;</span></pre>
            </div>
            
            <div class="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-2xl mt-8">
                <p class="text-sm text-yellow-900">
                    <strong><i class="fas fa-link text-yellow-600 mr-2"></i>El Puente al Backend:</strong> Lo que JS recibe mediante <code>fetch</code> es exactamente lo que nosotros aprenderemos a programar y enviar utilizando PHP y Bases de Datos en las siguientes unidades.
                </p>
            </div>
        </section>




        <section class="mt-24">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">6. Laboratorio Dinámico (Gamificación)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-10">
                La lógica de programación no se memoriza, se entrena. Hemos seleccionado tres entornos interactivos de nivel mundial para que pongas a prueba tus algoritmos en JavaScript con retroalimentación visual inmediata.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div class="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-lg hover:shadow-yellow-500/20 hover:border-yellow-400 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                    <i class="fas fa-gamepad absolute -right-4 -bottom-4 text-yellow-100 text-[8rem] group-hover:scale-110 transition-transform"></i>
                    <div class="relative z-10 flex-1">
                        <div class="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center text-yellow-600 mb-6 group-hover:bg-yellow-400 group-hover:text-white transition-colors">
                            <i class="fas fa-swords text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-black text-[#003366] uppercase mb-3">CodeCombat (RPG)</h4>
                        <p class="text-sm text-slate-600 leading-relaxed mb-6">
                            <strong>¿Qué es?</strong> Un videojuego de rol real. Tu personaje no se mueve con las flechas del teclado, sino escribiendo comandos reales en JavaScript (bucles, condicionales, variables) para derrotar ogros y escapar de mazmorras.
                        </p>
                    </div>
                    <a href="https://codecombat.com/play" target="_blank" class="mt-auto block text-center bg-slate-50 border border-slate-200 text-[#003366] font-black uppercase text-xs py-3 rounded-xl hover:bg-yellow-400 hover:text-white hover:border-yellow-400 transition-colors z-10">
                        Jugar CodeCombat <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                </div>

                <div class="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-lg hover:shadow-blue-500/20 hover:border-blue-400 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                    <i class="fas fa-microscope absolute -right-4 -bottom-4 text-blue-50 text-[8rem] group-hover:scale-110 transition-transform"></i>
                    <div class="relative z-10 flex-1">
                        <div class="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                            <i class="fas fa-bug text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-black text-[#003366] uppercase mb-3">JS Visualizer (Tutor)</h4>
                        <p class="text-sm text-slate-600 leading-relaxed mb-6">
                            <strong>¿Qué es?</strong> Los "rayos X" del código. Escribes tu JavaScript y esta herramienta ejecuta el código <em>paso a paso</em>, mostrando exactamente cómo cambia el valor de tus variables en la memoria RAM de la computadora. Vital para entender los bucles (<code>for</code> / <code>while</code>).
                        </p>
                    </div>
                    <a href="https://pythontutor.com/javascript.html" target="_blank" class="mt-auto block text-center bg-slate-50 border border-slate-200 text-[#003366] font-black uppercase text-xs py-3 rounded-xl hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors z-10">
                        Abrir Visualizador <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                </div>

                <div class="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-lg hover:shadow-slate-500/20 hover:border-slate-800 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                    <i class="fab fa-codepen absolute -right-4 -bottom-4 text-slate-100 text-[8rem] group-hover:scale-110 transition-transform"></i>
                    <div class="relative z-10 flex-1">
                        <div class="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-800 mb-6 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                            <i class="fas fa-laptop-code text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-black text-[#003366] uppercase mb-3">CodePen (Sandbox)</h4>
                        <p class="text-sm text-slate-600 leading-relaxed mb-6">
                            <strong>¿Qué es?</strong> Un entorno de desarrollo en vivo. Tienes 3 paneles (HTML, CSS y JS). Lo que escribes se renderiza al instante abajo. Es perfecto para probar scripts rápidos sin tener que crear archivos ni abrir XAMPP.
                        </p>
                    </div>
                    <a href="https://codepen.io/pen/" target="_blank" class="mt-auto block text-center bg-slate-50 border border-slate-200 text-[#003366] font-black uppercase text-xs py-3 rounded-xl hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-colors z-10">
                        Crear un Pen <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                </div>

            </div>
        </section>

        
    </div>
</div>

`;