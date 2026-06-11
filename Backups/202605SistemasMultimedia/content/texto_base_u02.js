// content/texto_base_u02.js

const pag_texto_base_u02 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-blue-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-th text-lg"></i> TEXTO BASE / UNIDAD 2
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            PÍXELES VS.<br>
            <span class="text-blue-600">VECTORES</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            La base de cualquier sistema multimedia interactivo es entender cómo el navegador interpreta la luz y la forma. Dominar la diferencia entre un Mapa de Bits y un Gráfico Vectorial es la diferencia entre un software profesional y uno mediocre.
        </p>
        <div class="h-2 w-24 bg-blue-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">1. El ADN de la Imagen Digital</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h4 class="text-xl font-bold text-blue-700 mb-4 tracking-tight uppercase">Mapa de Bits (Raster)</h4>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        Son cuadrículas de puntos llamados <strong>píxeles</strong>. Cada píxel contiene información de color (RGBA). Es el formato ideal para la fotografía y videos complejos.
                    </p>
                    <ul class="text-sm space-y-2 font-medium text-slate-500">
                        <li><i class="fas fa-compress-arrows-alt mr-2"></i> Dependen de la resolución.</li>
                        <li><i class="fas fa-file-image mr-2"></i> Formatos: JPG, PNG, WebP.</li>
                        <li><i class="fas fa-search-plus mr-2"></i> Pierden calidad al ampliarse (pixelación).</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-xl font-bold text-emerald-600 mb-4 tracking-tight uppercase">Gráficos Vectoriales</h4>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        No usan píxeles, sino <strong>fórmulas matemáticas</strong> (puntos, líneas y curvas). En la web, esto se traduce al lenguaje SVG (Scalable Vector Graphics).
                    </p>
                    <ul class="text-sm space-y-2 font-medium text-slate-500">
                        <li><i class="fas fa-expand mr-2"></i> Resolución infinita (nunca se pixelan).</li>
                        <li><i class="fas fa-code mr-2"></i> Formatos: SVG, AI, EPS.</li>
                        <li><i class="fas fa-weight-hanging mr-2"></i> Archivos extremadamente ligeros.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">2. Herramientas de Desarrollo</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                Para desarrollar sistemas digitales interactivos, un Ingeniero debe dominar herramientas que permitan exportar estos recursos de forma optimizada para la red[cite: 9, 20].
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <h5 class="font-black text-[#003366] uppercase text-sm mb-3">Rasterización</h5>
                    <p class="text-xs text-slate-500 mb-4">Software para procesar imágenes fotográficas y texturas para modelos 3D.</p>
                    <span class="text-[10px] font-bold bg-slate-200 px-2 py-1 rounded">Photoshop / GIMP</span>
                </div>
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <h5 class="font-black text-[#003366] uppercase text-sm mb-3">Vectorización</h5>
                    <p class="text-xs text-slate-500 mb-4">Creación de interfaces (UI), iconos y personajes para animaciones 2D.</p>
                    <span class="text-[10px] font-bold bg-slate-200 px-2 py-1 rounded">Illustrator / Figma</span>
                </div>
                <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                    <h5 class="font-black text-blue-700 uppercase text-sm mb-3">Simuladores Online</h5>
                    <p class="text-xs text-slate-500 mb-4">Prueba algoritmos de filtros y compresión directamente.</p>
                    <a href="https://squoosh.app/" target="_blank" class="text-[10px] font-bold text-blue-600 underline">Ir a Squoosh.app</a>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">3. El Lienzo Multimedia</h3>
            <div class="bg-indigo-900 text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <i class="fas fa-pencil-ruler absolute -right-10 -bottom-10 text-white/5 text-[15rem] rotate-12"></i>
                <div class="relative z-10 space-y-6">
                    <h4 class="text-2xl font-black text-blue-300 italic uppercase">¿Por qué usamos Canvas en JS?</h4>
                    <p class="text-lg leading-relaxed opacity-90">
                        El elemento <code>&lt;canvas&gt;</code> es un híbrido. Nos permite dibujar formas vectoriales mediante comandos de JavaScript, pero el resultado final se procesa como un Mapa de Bits de alto rendimiento.
                    </p>
                    <div class="p-6 bg-white/10 rounded-2xl border border-white/20 font-mono text-sm">
                        <span class="text-blue-300">// Ejemplo de dibujo vectorial en lienzo raster</span><br>
                        ctx.beginPath();<br>
                        ctx.arc(100, 75, 50, 0, 2 * Math.PI);<br>
                        ctx.stroke();
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-20 border-t border-slate-100 pt-12">
            <h3 class="text-2xl font-black text-[#003366] uppercase mb-8">Saberes Esenciales Aplicados</h3>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-black">1</div>
                    <div>
                        <h5 class="font-bold text-slate-800">Optimización de Activos</h5>
                        <p class="text-sm text-slate-500 mt-1">Aprenderemos a reducir el peso de las imágenes sin sacrificar la calidad para sistemas web fluidos.</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center shrink-0 font-black">2</div>
                    <div>
                        <h5 class="font-bold text-slate-800">Manipulación de Píxeles</h5>
                        <p class="text-sm text-slate-500 mt-1">Crearemos simuladores que cambian colores, brillo y contraste mediante algoritmos directos sobre la matriz de píxeles.</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;