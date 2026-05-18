// content/texto_base_u04.js

const pag_texto_base_u04 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-amber-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-running text-lg"></i> TEXTO BASE / UNIDAD 4
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            MOTORES DE<br>
            <span class="text-amber-600">ANIMACIÓN JS</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            La animación en un sistema multimedia no es solo estética; es retroalimentación funcional. Aprenderemos a usar el ciclo de vida del navegador para crear movimientos fluidos, optimizados y profesionales.
        </p>
        <div class="h-2 w-24 bg-amber-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">1. El Ciclo de Renderizado</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Para que una animación sea "suave", el navegador debe redibujar la pantalla 60 veces por segundo. Como ingenieros, evitamos el uso de <code>setInterval</code> y priorizamos <code>requestAnimationFrame</code>.
            </p>
            
            <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <h4 class="font-bold text-amber-900 mb-2">Paso a Paso del Movimiento:</h4>
                <ol class="list-decimal list-inside space-y-2 text-sm text-amber-800 font-medium">
                    <li><strong>Actualización de Estado:</strong> Cálculo de la nueva posición física.</li>
                    <li><strong>Limpieza:</strong> Se borra el fotograma anterior del Canvas.</li>
                    <li><strong>Dibujado:</strong> Se renderiza el objeto en la nueva coordenada.</li>
                    <li><strong>Recursión:</strong> Se solicita el siguiente cuadro al monitor.</li>
                </ol>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-8">2. Ecosistema de Librerías 2026</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h5 class="font-black text-indigo-600 uppercase text-sm mb-2 italic">01. GSAP (GreenSock)</h5>
                    <p class="text-xs text-slate-600">El estándar de oro. Ideal para líneas de tiempo (Timelines) complejas y control total del hardware.</p>
                </div>

                <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h5 class="font-black text-rose-500 uppercase text-sm mb-2 italic">02. Anime.js</h5>
                    <p class="text-xs text-slate-600">Ligera y potente. Perfecta para animar propiedades CSS, SVG y atributos de objetos JS con una sintaxis limpia.</p>
                </div>

                <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h5 class="font-black text-blue-500 uppercase text-sm mb-2 italic">03. Three.js</h5>
                    <p class="text-xs text-slate-600">La librería obligatoria para renderizado 3D acelerado por GPU. Es la base de los simuladores modernos.</p>
                </div>

                <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h5 class="font-black text-purple-500 uppercase text-sm mb-2 italic">04. Framer Motion</h5>
                    <p class="text-xs text-slate-600">Diseñada para React. Maneja gestos y animaciones de componentes (layout) de forma declarativa.</p>
                </div>

                <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h5 class="font-black text-emerald-500 uppercase text-sm mb-2 italic">05. Velocity.js</h5>
                    <p class="text-xs text-slate-600">Combina lo mejor de jQuery y la aceleración de hardware. Muy rápida para animaciones simples de interfaz.</p>
                </div>

                <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h5 class="font-black text-orange-500 uppercase text-sm mb-2 italic">06. Lottie-web</h5>
                    <p class="text-xs text-slate-600">Permite renderizar animaciones exportadas desde After Effects como código JSON. Calidad cinematográfica en la web.</p>
                </div>

                <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h5 class="font-black text-pink-500 uppercase text-sm mb-2 italic">07. Popmotion</h5>
                    <p class="text-xs text-slate-600">Motor funcional basado en física (muelles, gravedad, fricción). Ideal para juegos y simuladores.</p>
                </div>

                <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h5 class="font-black text-cyan-600 uppercase text-sm mb-2 italic">08. PixiJS</h5>
                    <p class="text-xs text-slate-600">Motor de renderizado 2D extremadamente veloz. Se usa para crear visualizaciones de miles de objetos simultáneos.</p>
                </div>

                <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h5 class="font-black text-indigo-400 uppercase text-sm mb-2 italic">09. Mo.js</h5>
                    <p class="text-xs text-slate-600">Especializada en "Motion Graphics" para la web. Formularios, explosiones de partículas y ráfagas.</p>
                </div>

                <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h5 class="font-black text-slate-700 uppercase text-sm mb-2 italic">10. Matter.js</h5>
                    <p class="text-xs text-slate-600">Motor de física 2D para la web. Maneja cuerpos rígidos, colisiones y fuerzas. Vital para simuladores técnicos.</p>
                </div>

            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">3. Flujo de Trabajo en Ingeniería</h3>
            <div class="bg-slate-900 text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <i class="fas fa-project-diagram absolute -right-10 -bottom-10 text-white/5 text-[15rem] rotate-12"></i>
                <div class="relative z-10 grid md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <h4 class="text-2xl font-black text-amber-300 italic uppercase">Metodología de Desarrollo</h4>
                        <p class="opacity-80">No animamos al azar. Seguimos un proceso estructurado para garantizar el rendimiento:</p>
                        <ul class="space-y-4">
                            <li class="flex items-start gap-3">
                                <span class="bg-amber-500 text-black px-2 py-0.5 rounded text-[10px] font-black">ST-1</span>
                                <span class="text-sm">Definir los <strong>Saberes Esenciales</strong>: ¿Qué queremos comunicar?</span>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="bg-amber-500 text-black px-2 py-0.5 rounded text-[10px] font-black">ST-2</span>
                                <span class="text-sm">Seleccionar la herramienta según la <strong>Micro Competencia</strong> requerida.</span>
                            </li>
                        </ul>
                    </div>
                    <div class="p-6 bg-white/10 rounded-2xl border border-white/20">
                        <h5 class="font-bold text-amber-300 mb-4 tracking-widest text-xs uppercase">Checklist de Calidad</h5>
                        <ul class="text-xs space-y-3 opacity-90">
                            <li><i class="fas fa-check text-amber-400 mr-2"></i> Mantener los 60fps constantes.</li>
                            <li><i class="fas fa-check text-amber-400 mr-2"></i> Usar transformaciones de hardware (GPU).</li>
                            <li><i class="fas fa-check text-amber-400 mr-2"></i> Implementar "Easings" para naturalidad.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-20 border-t border-slate-100 pt-12">
            <h3 class="text-2xl font-black text-[#003366] uppercase mb-8">Recursos de la Asignatura</h3>
            <div class="space-y-4 text-sm text-slate-500 italic">
                <p><i class="fas fa-book mr-2 text-amber-600"></i> Santos Julieta. Producción Multimedia: vídeos y animaciones.</p>
                <p><i class="fas fa-book mr-2 text-amber-600"></i> Peddie, Jon. Multimedia & graphics controllers.</p>
            </div>
        </section>

    </div>
</div>
`;