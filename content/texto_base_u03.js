// content/texto_base_u03.js

const pag_texto_base_u03 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-20">
        <span class="text-blue-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-layer-group text-lg"></i> TEXTO BASE / UNIDAD 3
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            FRAMEWORKS CSS, DISEÑO RESPONSIVE<br>
            <span class="text-blue-600">Y DESARROLLO ÁGIL (BOOTSTRAP Y TAILWIND)</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Desarrollo web ágil multiplataforma mediante el uso de frameworks CSS modernos, media queries, arquitectura basada en componentes y utilidades para proyectos de alta calidad.
        </p>
        <div class="h-2 w-24 bg-blue-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <!-- SECCIÓN 1: DISEÑO RESPONSIVE Y MEDIA QUERIES -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. Fundamentos del Diseño Responsive (RWD)
            </h3>
            
            <div class="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-8 border-blue-600 rounded-r-3xl shadow-sm mb-8">
                <h4 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">Filosofía Mobile-First</h4>
                <p class="text-xl text-slate-800 leading-relaxed font-semibold italic">
                    "El diseño web adaptable (Responsive Web Design) garantiza que un sitio se visualice e interaccione de manera óptima en cualquier dispositivo, desde smartphones hasta monitores 4K, adaptando sus layouts mediante Media Queries."
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div class="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-mobile-screen"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-lg mb-1">Viewport Meta Tag</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Esencial en HTML5 para ajustar la escala lógica del navegador en pantallas móviles: <code>width=device-width, initial-scale=1.0</code>.
                    </p>
                </div>

                <div class="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div class="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-sliders"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-lg mb-1">Breakpoints</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Puntos de interrupción basados en el ancho de la pantalla (ej. 576px, 768px, 1024px) donde la estructura gráfica cambia.
                    </p>
                </div>

                <div class="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div class="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-lg mb-1">Media Queries</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Reglas nativas CSS (<code>@media</code>) que aplican estilos condicionales según las dimensiones del dispositivo.
                    </p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 2: COMPARATIVA DE FRAMEWORKS: BOOTSTRAP VS TAILWIND CSS -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. Frameworks CSS: Bootstrap vs. Tailwind CSS
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Los frameworks CSS aceleran el desarrollo permitiendo construir interfaces complejas y estándar sin necesidad de escribir hojas de estilos desde cero.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <!-- BOOTSTRAP -->
                <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-12 h-12 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center text-2xl font-black">
                                <i class="fab fa-bootstrap"></i>
                            </div>
                            <div>
                                <h4 class="font-black text-slate-800 text-xl">Bootstrap 5</h4>
                                <span class="text-xs text-purple-600 font-bold uppercase tracking-wider">Framework basado en Componentes</span>
                            </div>
                        </div>
                        <p class="text-xs text-slate-600 leading-relaxed mb-4">
                            Proporciona componentes pre-diseñados listos para usar (botones, modales, navbars, tarjetas) y un sistema de rejilla flexbox de 12 columnas.
                        </p>
                        <ul class="space-y-2 text-xs text-slate-500 mb-6">
                            <li class="flex items-center gap-2"><i class="fas fa-check text-emerald-500"></i> Rápida implementación UI</li>
                            <li class="flex items-center gap-2"><i class="fas fa-check text-emerald-500"></i> Sistema Grid de 12 columnas (<code>col-md-6</code>)</li>
                            <li class="flex items-center gap-2"><i class="fas fa-check text-emerald-500"></i> Componentes interactivos listos</li>
                        </ul>
                    </div>
                    <div class="bg-slate-900 p-4 rounded-xl font-mono text-xs text-slate-200">
                        <code>
                            &lt;button class="btn btn-primary btn-lg"&gt;<br>
                            &nbsp;&nbsp;Boton Bootstrap<br>
                            &lt;/button&gt;
                        </code>
                    </div>
                </div>

                <!-- TAILWIND CSS -->
                <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between">
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center text-2xl font-black">
                                <i class="fas fa-wind"></i>
                            </div>
                            <div>
                                <h4 class="font-black text-slate-800 text-xl">Tailwind CSS</h4>
                                <span class="text-xs text-cyan-600 font-bold uppercase tracking-wider">Framework Utility-First</span>
                            </div>
                        </div>
                        <p class="text-xs text-slate-600 leading-relaxed mb-4">
                            Aporta clases de utilidad atómicas de bajo nivel directamente en el HTML. Otorga un control de diseño 100% personalizado sin salir del marcado.
                        </p>
                        <ul class="space-y-2 text-xs text-slate-500 mb-6">
                            <li class="flex items-center gap-2"><i class="fas fa-check text-emerald-500"></i> Personalización total e ilimitada</li>
                            <li class="flex items-center gap-2"><i class="fas fa-check text-emerald-500"></i> Adaptación responsive con prefijos (<code>md:flex</code>)</li>
                            <li class="flex items-center gap-2"><i class="fas fa-check text-emerald-500"></i> Archivos CSS finales ultra reducidos</li>
                        </ul>
                    </div>
                    <div class="bg-slate-900 p-4 rounded-xl font-mono text-xs text-slate-200">
                        <code>
                            &lt;button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md"&gt;<br>
                            &nbsp;&nbsp;Boton Tailwind<br>
                            &lt;/button&gt;
                        </code>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 3: DEMOSTRACIÓN DE IMPLEMENTACIÓN -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Comparativa de Código: Grid Responsive
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Observa cómo se construye una rejilla de 2 columnas en pantallas medianas y 1 columna en móviles con ambas herramientas:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h4 class="font-black text-[#003366] text-sm uppercase mb-2">Con Bootstrap 5 (CDN)</h4>
                    <div class="bg-slate-900 p-4 rounded-2xl font-mono text-xs text-slate-200">
                        <code>
                            &lt;div class="container"&gt;<br>
                            &nbsp;&nbsp;&lt;div class="row"&gt;<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="col-12 col-md-6"&gt;Columna 1&lt;/div&gt;<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="col-12 col-md-6"&gt;Columna 2&lt;/div&gt;<br>
                            &nbsp;&nbsp;&lt;/div&gt;<br>
                            &lt;/div&gt;
                        </code>
                    </div>
                </div>

                <div>
                    <h4 class="font-black text-[#003366] text-sm uppercase mb-2">Con Tailwind CSS (CDN)</h4>
                    <div class="bg-slate-900 p-4 rounded-2xl font-mono text-xs text-slate-200">
                        <code>
                            &lt;div class="container mx-auto"&gt;<br>
                            &nbsp;&nbsp;&lt;div class="grid grid-cols-1 md:grid-cols-2 gap-4"&gt;<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="p-4"&gt;Columna 1&lt;/div&gt;<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;div class="p-4"&gt;Columna 2&lt;/div&gt;<br>
                            &nbsp;&nbsp;&lt;/div&gt;<br>
                            &lt;/div&gt;
                        </code>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 4: PROYECTO COMPLETO MULTI-FRAMEWORK -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. Proyecto Práctico: Dashboard Responsive Completo
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                A continuación, se presenta un proyecto web completo que utiliza **Tailwind CSS por CDN** para construir una landing page interactiva, moderna y 100% adaptable para una startup tecnológica.
            </p>

            <div class="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs md:text-sm text-slate-200 mb-8">
                <div class="bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-700/50">
                    <span class="text-xs text-slate-400 font-bold"><i class="fas fa-laptop-code text-cyan-400 mr-2"></i> proyecto_unidad3.html</span>
                    <span class="text-[10px] bg-cyan-600 text-white font-bold px-2 py-0.5 rounded">Proyecto U3</span>
                </div>
                <pre class="p-6 overflow-x-auto leading-relaxed bg-slate-950 text-slate-300"><code><span class="text-slate-500">&lt;!DOCTYPE html&gt;</span>
<span class="text-blue-400">&lt;html</span> <span class="text-yellow-400">lang</span>=<span class="text-emerald-400">"es"</span><span class="text-blue-400">&gt;</span>
<span class="text-blue-400">&lt;head&gt;</span>
    <span class="text-blue-400">&lt;meta</span> <span class="text-yellow-400">charset</span>=<span class="text-emerald-400">"UTF-8"</span><span class="text-blue-400">&gt;</span>
    <span class="text-blue-400">&lt;meta</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"viewport"</span> <span class="text-yellow-400">content</span>=<span class="text-emerald-400">"width=device-width, initial-scale=1.0"</span><span class="text-blue-400">&gt;</span>
    <span class="text-blue-400">&lt;title&gt;</span>Landing Page Responsive - Tailwind CSS<span class="text-blue-400">&lt;/title&gt;</span>
    <span class="text-slate-500">&lt;!-- Carga de Tailwind CSS mediante CDN --&gt;</span>
    <span class="text-blue-400">&lt;script</span> <span class="text-yellow-400">src</span>=<span class="text-emerald-400">"https://cdn.tailwindcss.com"</span><span class="text-blue-400">&gt;&lt;/script&gt;</span>
<span class="text-blue-400">&lt;/head&gt;</span>
<span class="text-blue-400">&lt;body</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"bg-slate-50 font-sans text-slate-800"</span><span class="text-blue-400">&gt;</span>

    <span class="text-slate-500">&lt;!-- NAVEGACIÓN RESPONSIVE --&gt;</span>
    <span class="text-blue-400">&lt;nav</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"bg-[#001f3f] text-white p-6 shadow-lg"</span><span class="text-blue-400">&gt;</span>
        <span class="text-blue-400">&lt;div</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"container mx-auto flex justify-between items-center"</span><span class="text-blue-400">&gt;</span>
            <span class="text-blue-400">&lt;h1</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"text-2xl font-black tracking-wider text-[#00aaff]"</span><span class="text-blue-400">&gt;</span>UPDS WEB<span class="text-blue-400">&lt;/h1&gt;</span>
            <span class="text-blue-400">&lt;ul</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"hidden md:flex gap-6 text-sm font-bold"</span><span class="text-blue-400">&gt;</span>
                <span class="text-blue-400">&lt;li&gt;&lt;a</span> <span class="text-yellow-400">href</span>=<span class="text-emerald-400" opacity-80 hover:opacity-100">"#"</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"hover:text-[#00aaff]"</span><span class="text-blue-400">&gt;</span>Inicio<span class="text-blue-400">&lt;/a&gt;&lt;/li&gt;</span>
                <span class="text-blue-400">&lt;li&gt;&lt;a</span> <span class="text-yellow-400">href</span>=<span class="text-emerald-400" opacity-80 hover:opacity-100">"#"</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"hover:text-[#00aaff]"</span><span class="text-blue-400">&gt;</span>Servicios<span class="text-blue-400">&lt;/a&gt;&lt;/li&gt;</span>
                <span class="text-blue-400">&lt;li&gt;&lt;a</span> <span class="text-yellow-400">href</span>=<span class="text-emerald-400" opacity-80 hover:opacity-100">"#"</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"hover:text-[#00aaff]"</span><span class="text-blue-400">&gt;</span>Contacto<span class="text-blue-400">&lt;/a&gt;&lt;/li&gt;</span>
            <span class="text-blue-400">&lt;/ul&gt;</span>
        <span class="text-blue-400">&lt;/div&gt;</span>
    <span class="text-blue-400">&lt;/nav&gt;</span>

    <span class="text-slate-500">&lt;!-- HERO SECTION --&gt;</span>
    <span class="text-blue-400">&lt;header</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"bg-gradient-to-r from-[#001f3f] to-[#003366] text-white py-20 px-6 text-center"</span><span class="text-blue-400">&gt;</span>
        <span class="text-blue-400">&lt;div</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"max-w-3xl mx-auto"</span><span class="text-blue-400">&gt;</span>
            <span class="text-blue-400">&lt;h2</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"text-4xl md:text-6xl font-black uppercase mb-4"</span><span class="text-blue-400">&gt;</span>Diseño Web Ágil con Tailwind<span class="text-blue-400">&lt;/h2&gt;</span>
            <span class="text-blue-400">&lt;p&gt;</span>Construye sitios web ultra rápidos, accesibles y totalmente responsivos en tiempo récord.<span class="text-blue-400">&lt;/p&gt;</span>
        <span class="text-blue-400">&lt;/div&gt;</span>
    <span class="text-blue-400">&lt;/header&gt;</span>

    <span class="text-slate-500">&lt;!-- GRID DE SERVICIOS (RESPONSIVE) --&gt;</span>
    <span class="text-blue-400">&lt;main</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"container mx-auto py-16 px-6"</span><span class="text-blue-400">&gt;</span>
        <span class="text-blue-400">&lt;div</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"grid grid-cols-1 md:grid-cols-3 gap-8"</span><span class="text-blue-400">&gt;</span>
            <span class="text-slate-500">&lt;!-- Tarjeta 1 --&gt;</span>
            <span class="text-blue-400">&lt;div</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow"</span><span class="text-blue-400">&gt;</span>
                <span class="text-blue-400">&lt;h3</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"text-xl font-bold text-[#003366] mb-2"</span><span class="text-blue-400">&gt;</span>HTML5 Semántico<span class="text-blue-400">&lt;/h3&gt;</span>
                <span class="text-blue-400">&lt;p</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"text-xs text-slate-500 leading-relaxed"</span><span class="text-blue-400">&gt;</span>Estructuras limpias cumpliendo los estándares de calidad W3C.<span class="text-blue-400">&lt;/p&gt;</span>
            <span class="text-blue-400">&lt;/div&gt;</span>

            <span class="text-slate-500">&lt;!-- Tarjeta 2 --&gt;</span>
            <span class="text-blue-400">&lt;div</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow"</span><span class="text-blue-400">&gt;</span>
                <span class="text-blue-400">&lt;h3</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"text-xl font-bold text-[#003366] mb-2"</span><span class="text-blue-400">&gt;</span>Diseño Adaptable<span class="text-blue-400">&lt;/h3&gt;</span>
                <span class="text-blue-400">&lt;p</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"text-xs text-slate-500 leading-relaxed"</span><span class="text-blue-400">&gt;</span>Interfaces preparadas para smartphones, tablets y pantallas de escritorio.<span class="text-blue-400">&lt;/p&gt;</span>
            <span class="text-blue-400">&lt;/div&gt;</span>

            <span class="text-slate-500">&lt;!-- Tarjeta 3 --&gt;</span>
            <span class="text-blue-400">&lt;div</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow"</span><span class="text-blue-400">&gt;</span>
                <span class="text-blue-400">&lt;h3</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"text-xl font-bold text-[#003366] mb-2"</span><span class="text-blue-400">&gt;</span>Desarrollo Ágil<span class="text-blue-400">&lt;/h3&gt;</span>
                <span class="text-blue-400">&lt;p</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"text-xs text-slate-500 leading-relaxed"</span><span class="text-blue-400">&gt;</span>Aprovechamiento de librerías modernas para reducir tiempos de entrega.<span class="text-blue-400">&lt;/p&gt;</span>
            <span class="text-blue-400">&lt;/div&gt;</span>
        <span class="text-blue-400">&lt;/div&gt;</span>
    <span class="text-blue-400">&lt;/main&gt;</span>

    <span class="text-slate-500">&lt;!-- FOOTER --&gt;</span>
    <span class="text-blue-400">&lt;footer</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"bg-[#001f3f] text-white py-6 text-center text-xs opacity-90"</span><span class="text-blue-400">&gt;</span>
        <span class="text-blue-400">&lt;p&gt;</span>&copy; 2026 Universidad Privada Domingo Savio - Asignatura Diseño Web I (SIS-0140)<span class="text-blue-400">&lt;/p&gt;</span>
    <span class="text-blue-400">&lt;/footer&gt;</span>

<span class="text-blue-400">&lt;/body&gt;</span>
<span class="text-blue-400">&lt;/html&gt;</span></code></pre>
            </div>
        </section>

    </div>
</div>
`;