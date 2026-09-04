// content/videos.js

const pag_videos = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-16">
        <span class="text-[#00aaff] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-play-circle text-base"></i> MATERIAL AUDIOVISUAL • SIS-0140
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            VIDEOTECA<br>
            <span class="text-[#00aaff]">DE APRENDIZAJE</span>
        </h1>
        <p class="mt-4 text-xl text-slate-500 font-light max-w-3xl leading-relaxed">
            Selección de recursos audiovisuales clave para dominar la maquetación moderna con Flexbox, CSS Grid y los frameworks Bootstrap 5 y Tailwind CSS.
        </p>
        <div class="h-2 w-24 bg-[#003366] mt-6"></div>
    </header>

    <div class="max-w-4xl space-y-6">

        <!-- VIDEO 1: FLEXBOX -->
        <a href="https://youtu.be/rOQTEQkM96A" target="_blank" rel="noopener noreferrer" 
           class="group flex items-center p-4 md:p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-[#00aaff] hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-[#003366] flex items-center justify-center text-white group-hover:bg-[#00aaff] group-hover:scale-110 transition-all shadow-md flex-shrink-0">
                <i class="fas fa-play text-2xl ml-1"></i>
            </div>
            <div class="ml-6">
                <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] mb-1 block">Unidad 2 • Maquetación Flex</span>
                <h3 class="text-xl md:text-2xl font-black text-[#003366] group-hover:text-[#00aaff] transition-colors leading-tight">
                    Aprende CSS Flexbox en 10 minutos
                </h3>
                <p class="text-sm text-slate-500 mt-1">
                    Dominio rápido de contenedores flexibles, ejes principal y transversal, <code>justify-content</code>, <code>align-items</code> y <code>flex-wrap</code> [00:00:04].
                </p>
            </div>
        </a>

        <!-- VIDEO 2: CSS GRID -->
        <a href="https://youtu.be/xNZNHdplmxk" target="_blank" rel="noopener noreferrer" 
           class="group flex items-center p-4 md:p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-[#00aaff] hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-[#003366] flex items-center justify-center text-white group-hover:bg-[#00aaff] group-hover:scale-110 transition-all shadow-md flex-shrink-0">
                <i class="fas fa-play text-2xl ml-1"></i>
            </div>
            <div class="ml-6">
                <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] mb-1 block">Unidad 2 • Layouts Bidimensionales</span>
                <h3 class="text-xl md:text-2xl font-black text-[#003366] group-hover:text-[#00aaff] transition-colors leading-tight">
                    Maquetado con GRID explicado como nunca antes
                </h3>
                <p class="text-sm text-slate-500 mt-1">
                    Diseño de esquemas estructurales completos mediante <code>grid-template-areas</code> y breakpoints responsivos para Mobile, Tablet y Desktop [00:03:29].
                </p>
            </div>
        </a>

        <!-- VIDEO 3: COMPARATIVA BOOTSTRAP VS TAILWIND -->
        <a href="https://youtu.be/89zAFh9FYa4" target="_blank" rel="noopener noreferrer" 
           class="group flex items-center p-4 md:p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-[#00aaff] hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-[#003366] flex items-center justify-center text-white group-hover:bg-[#00aaff] group-hover:scale-110 transition-all shadow-md flex-shrink-0">
                <i class="fas fa-play text-2xl ml-1"></i>
            </div>
            <div class="ml-6">
                <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] mb-1 block">Unidad 3 • Fundamentos de Frameworks</span>
                <h3 class="text-xl md:text-2xl font-black text-[#003366] group-hover:text-[#00aaff] transition-colors leading-tight">
                    Bootstrap vs Tailwind CSS | ¿Cuál es el MEJOR CSS Framework?
                </h3>
                <p class="text-sm text-slate-500 mt-1">
                    Análisis comparativo entre el enfoque basado en componentes prediseñados y la arquitectura orientada a clases de utilidad (Utility-First) [00:00:07].
                </p>
            </div>
        </a>

        <!-- VIDEO 4: CURSO BOOTSTRAP 5 -->
        <a href="https://youtu.be/b9g4_8nAsdA?list=PLK5U0tyd34tCrlOvIfeVO6YzW_z-f0jxk" target="_blank" rel="noopener noreferrer" 
           class="group flex items-center p-4 md:p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-[#00aaff] hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-[#003366] flex items-center justify-center text-white group-hover:bg-[#00aaff] group-hover:scale-110 transition-all shadow-md flex-shrink-0">
                <i class="fas fa-play text-2xl ml-1"></i>
            </div>
            <div class="ml-6">
                <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] mb-1 block">Unidad 3 • Frameworks UI</span>
                <h3 class="text-xl md:text-2xl font-black text-[#003366] group-hover:text-[#00aaff] transition-colors leading-tight">
                    Bootstrap 5 Full Course
                </h3>
                <p class="text-sm text-slate-500 mt-1">
                    Construcción de portales web completos integrando Navbar, Carrusel, sistema Grid de 12 columnas, Cards, Modales y utilidades responsive [00:00:43].
                </p>
            </div>
        </a>

        <!-- VIDEO 5: CURSO TAILWIND CSS 4 -->
        <a href="https://youtu.be/R5EXap3vNDA" target="_blank" rel="noopener noreferrer" 
           class="group flex items-center p-4 md:p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-[#00aaff] hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-[#003366] flex items-center justify-center text-white group-hover:bg-[#00aaff] group-hover:scale-110 transition-all shadow-md flex-shrink-0">
                <i class="fas fa-play text-2xl ml-1"></i>
            </div>
            <div class="ml-6">
                <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] mb-1 block">Unidad 3 • Utility-First</span>
                <h3 class="text-xl md:text-2xl font-black text-[#003366] group-hover:text-[#00aaff] transition-colors leading-tight">
                    Curso Tailwind CSS 4 desde cero
                </h3>
                <p class="text-sm text-slate-500 mt-1">
                    Aprende la nueva configuración con <code>@theme</code>, maquetación ágil, gradientes, animaciones y buenas prácticas de desarrollo moderno [00:00:00].
                </p>
            </div>
        </a>

    </div>
</div>
`;