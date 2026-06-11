// content/texto_base_u01.js

const pag_texto_base_u01 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-emerald-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-cubes text-lg"></i> TEXTO BASE / UNIDAD 1
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            SISTEMAS<br>
            <span class="text-emerald-600">MULTIMEDIA 2.0</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Olvida el pasado de las animaciones simples. Hoy, JavaScript es el motor que impulsa simuladores médicos, mundos en 3D y experiencias inmersivas en el navegador. Dominar el "Renderizado" es el nuevo estándar del Ingeniero Multimedia.
        </p>
        <div class="h-2 w-24 bg-emerald-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">1. JavaScript como Motor de Simulación</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                Históricamente, los simuladores requerían software pesado. Gracias a la evolución de los navegadores y el estándar <strong>WebGL</strong>, JS puede acceder directamente a la tarjeta de video (GPU) para procesar miles de cálculos físicos por segundo.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 shadow-sm relative overflow-hidden">
                    <i class="fas fa-microchip absolute -right-4 -bottom-4 text-emerald-200 text-8xl"></i>
                    <h4 class="text-2xl font-black text-emerald-800 uppercase mb-4">Computación Visual</h4>
                    <p class="text-sm text-emerald-900 font-medium">
                        Uso de <strong>Canvas API</strong> para dibujos 2D dinámicos y simulaciones matemáticas que corren a 60 cuadros por segundo (60fps).
                    </p>
                </div>

                <div class="p-8 bg-slate-100 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                    <i class="fas fa-vr-cardboard absolute -right-4 -bottom-4 text-slate-300 text-8xl"></i>
                    <h4 class="text-2xl font-black text-slate-800 uppercase mb-4">Ecosistema Inmersivo</h4>
                    <p class="text-sm text-slate-700 font-medium">
                        Integración de <strong>WebXR</strong> para Realidad Virtual y Aumentada directamente en el navegador, sin instalar aplicaciones externas.
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">2. El "Stack" del Desarrollador Multimedia</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:scale-105 transition-transform">
                    <div class="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-4 shadow-lg">
                        <i class="fas fa-draw-polygon"></i>
                    </div>
                    <h5 class="font-black uppercase text-[#003366]">Three.js</h5>
                    <p class="text-xs text-slate-500 mt-2">La librería estándar para 3D. Permite cargar modelos, aplicar luces y sombras complejas en la web.</p>
                </div>
                <div class="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:scale-105 transition-transform">
                    <div class="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white mb-4 shadow-lg">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h5 class="font-black uppercase text-[#003366]">GSAP</h5>
                    <p class="text-xs text-slate-500 mt-2">GreenSock es el motor de animación más potente del mundo para mover elementos con física y suavidad.</p>
                </div>
                <div class="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:scale-105 transition-transform">
                    <div class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white mb-4 shadow-lg">
                        <i class="fas fa-gamepad"></i>
                    </div>
                    <h5 class="font-black uppercase text-[#003366]">Phaser.js</h5>
                    <p class="text-xs text-slate-500 mt-2">Especializado en juegos 2D. Maneja colisiones, mapas y sprites de forma eficiente para simuladores educativos.</p>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">3. El Poder de la Tercera Dimensión</h3>
            <div class="overflow-x-auto bg-white rounded-2xl shadow-lg border border-slate-200">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase text-xs tracking-widest">
                            <th class="p-4 font-black">Aplicación</th>
                            <th class="p-4 font-black">Tecnología</th>
                            <th class="p-4 font-black">Impacto Multimedia</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm">
                        <tr class="border-b border-slate-100 hover:bg-emerald-50">
                            <td class="p-4 font-bold">Simuladores Médicos</td>
                            <td class="p-4 font-mono">Three.js + Shaders</td>
                            <td class="p-4 text-xs">Visualización de ecografías y anatomía 3D interactiva.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-emerald-50">
                            <td class="p-4 font-bold">Juegos de Navegador</td>
                            <td class="p-4 font-mono">Babylon.js / PlayCanvas</td>
                            <td class="p-4 text-xs">Experiencias AAA sin descarga previa (Cloud Gaming).</td>
                        </tr>
                        <tr class="hover:bg-emerald-50">
                            <td class="p-4 font-bold">Visualización Industrial</td>
                            <td class="p-4 font-mono">React Three Fiber</td>
                            <td class="p-4 text-xs">Gemelos digitales de maquinaria controlados por datos en tiempo real.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section class="mt-20 mb-10 bg-gradient-to-br from-slate-900 to-slate-700 p-8 md:p-12 rounded-[2rem] shadow-2xl text-white relative overflow-hidden">
            <i class="fas fa-vr-cardboard absolute -right-10 -bottom-10 text-white/5 text-[20rem] transform -rotate-12"></i>
            <div class="relative z-10">
                <h3 class="text-3xl font-black uppercase text-emerald-400 mb-6">Hacia el Proyecto Final</h3>
                <p class="text-lg text-slate-200 leading-relaxed mb-8">
                    En esta materia, no solo usaremos "herramientas multimedia", <strong>programaremos la multimedia</strong>. El objetivo es que construyas un simulador funcional que use lógica de juegos aplicada a necesidades empresariales de Santa Cruz.
                </p>
                <div class="grid md:grid-cols-2 gap-4 font-mono text-sm">
                    <div class="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20">
                        <span class="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                        <p>Dominio de Canvas y manipulación de píxeles.</p>
                    </div>
                    <div class="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20">
                        <span class="bg-emerald-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                        <p>Integración de modelos 3D con Three.js.</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;