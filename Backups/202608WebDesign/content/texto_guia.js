// content/texto_guia.js

const pag_texto_guia = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-16">
        <span class="text-[#00aaff] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-book-bookmark text-base"></i> TEXTO GUÍA OFICIAL • SIS-0140
        </span>
        <h1 class="text-5xl md:text-7xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            ARQUITECTURA Y<br>
            <span class="text-[#00aaff]">DISEÑO WEB I</span>
        </h1>
        <div class="h-2 w-24 bg-[#003366] mt-8"></div>
    </header>

    <section class="max-w-4xl mb-16">
        <p class="text-2xl md:text-3xl text-[#003366] font-black leading-tight mb-8">
            La construcción de la Web moderna exige estructura semántica sólida, maquetación adaptable y estricto cumplimiento de estándares internacionales.
        </p>
        <p class="text-lg text-slate-500 font-light leading-relaxed mb-6">
            El diseño web contemporáneo ha dejado atrás la simple colocación de elementos visuales aislados. Este manual formativo ha sido estructurado para mitigar el desconocimiento de paradigmas y metodologías de maquetación, capacitando al futuro Ingeniero de Sistemas en la construcción de interfaces accesibles, multiplataforma y eficientes.
        </p>
        <p class="text-lg text-slate-500 font-light leading-relaxed">
            A través de los tres bloques esenciales de esta guía, dominarás desde las bases semánticas de <strong>HTML5</strong> y los estándares de la <strong>W3C</strong>, hasta la maquetación avanzada con <strong>CSS3 (Flexbox y Grid)</strong> y la integración ágil con frameworks modernos como <strong>Bootstrap</strong> y <strong>Tailwind CSS</strong>.
        </p>
    </section>

    <!-- TEMARIO RESUMIDO / PILARES DEL TEXTO GUÍA -->
    <section class="mb-20">
        <span class="text-[11px] font-black text-[#00aaff] uppercase tracking-[0.25em] block mb-6">
            Estructura del Contenido Temático
        </span>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
            
            <!-- BLOQUE 1 -->
            <div class="p-8 bg-slate-50 border-t-4 border-[#003366] rounded-2xl hover:shadow-lg transition-all group flex flex-col justify-between">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="fab fa-html5"></i>
                    </div>
                    <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Unidad 1</span>
                    <h3 class="text-xl font-black text-[#003366] uppercase mb-3">Estructura HTML5</h3>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Fundamentos de la Web, arquitectura cliente-servidor, estándares W3C, marcado semántico, formularios completos y elementos multimedia interactivos.
                    </p>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-bold text-blue-600">
                    Semántica &amp; Estándares W3C →
                </div>
            </div>

            <!-- BLOQUE 2 -->
            <div class="p-8 bg-slate-50 border-t-4 border-[#00aaff] rounded-2xl hover:shadow-lg transition-all group flex flex-col justify-between">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-cyan-100 text-[#00aaff] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="fab fa-css3-alt"></i>
                    </div>
                    <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Unidad 2</span>
                    <h3 class="text-xl font-black text-[#003366] uppercase mb-3">Estilos y CSS3</h3>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Separación de contenido y forma, modelo de caja (Box Model), selectores avanzados, pseudo-clases, posicionamiento y maquetación con Flexbox y CSS Grid.
                    </p>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-bold text-[#00aaff]">
                    Modelo de Caja &amp; Layouts →
                </div>
            </div>

            <!-- BLOQUE 3 -->
            <div class="p-8 bg-slate-50 border-t-4 border-slate-400 rounded-2xl hover:shadow-lg transition-all group flex flex-col justify-between">
                <div>
                    <div class="w-12 h-12 rounded-xl bg-slate-200 text-[#003366] flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <span class="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Unidad 3</span>
                    <h3 class="text-xl font-black text-[#003366] uppercase mb-3">Frameworks CSS</h3>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Diseño adaptable (Responsive Web Design), media queries y desarrollo ágil de proyectos completos mediante frameworks como Bootstrap y Tailwind CSS.
                    </p>
                </div>
                <div class="mt-6 pt-4 border-t border-slate-200/60 text-[11px] font-bold text-[#003366]">
                    Bootstrap &amp; Tailwind CSS →
                </div>
            </div>

        </div>
    </section>

    <!-- BANNER DE CIERRE / LLAMADO A LA ACCIÓN -->
    <footer class="max-w-5xl p-10 md:p-12 bg-[#003366] text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        <i class="fas fa-laptop-code absolute -right-10 -bottom-10 text-white/5 text-[15rem] rotate-12"></i>
        <div class="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
            <div class="flex-none">
                <div class="w-16 h-16 rounded-full bg-[#00aaff] flex items-center justify-center shadow-lg shadow-[#00aaff]/30">
                    <i class="fas fa-arrow-right text-2xl text-white"></i>
                </div>
            </div>
            <div>
                <h4 class="text-[10px] font-black uppercase tracking-[0.4em] text-[#00aaff] mb-2">Ruta de Aprendizaje</h4>
                <p class="text-base md:text-lg font-light leading-relaxed text-blue-50">
                    Este texto guía ha sido diseñado como un recurso interactivo de consulta teórica y práctica para la formación universitaria en <strong>Diseño Web I</strong>. <strong>Selecciona cualquiera de las unidades en el menú lateral para explorar los contenidos detallados y proyectos de laboratorio.</strong>
                </p>
            </div>
        </div>
    </footer>

</div>
`;