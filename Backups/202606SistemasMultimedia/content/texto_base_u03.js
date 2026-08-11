// content/texto_base_u03.js

const pag_texto_base_u03 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-rose-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-wave-square text-lg"></i> TEXTO BASE / UNIDAD 3
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            AUDIO DINÁMICO &<br>
            <span class="text-rose-600">SONIFICACIÓN</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            En un simulador, el sonido es información. Desde el latido de un corazón en una simulación médica hasta el rugido de un motor, aprenderemos a programar el audio para que reaccione en tiempo real a las acciones del usuario.
        </p>
        <div class="h-2 w-24 bg-rose-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">1. Más allá del elemento &lt;audio&gt;</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                Para simuladores profesionales, no basta con "reproducir" un archivo. Usamos la <strong>Web Audio API</strong> de JavaScript para procesar sonido. Esto nos permite:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="p-8 bg-rose-50 rounded-3xl border border-rose-100 shadow-sm relative overflow-hidden">
                    <i class="fas fa-sliders-h absolute -right-4 -bottom-4 text-rose-200 text-8xl"></i>
                    <h4 class="text-2xl font-black text-rose-800 uppercase mb-4">Síntesis y Filtros</h4>
                    <p class="text-sm text-rose-900 font-medium">
                        Modificar el tono (pitch), volumen y distorsión dinámicamente. <i>Ejemplo: El sonido de una turbina que sube de tono según la velocidad en el simulador.</i>
                    </p>
                </div>

                <div class="p-8 bg-slate-100 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                    <i class="fas fa-vr-cardboard absolute -right-4 -bottom-4 text-slate-300 text-8xl"></i>
                    <h4 class="text-2xl font-black text-slate-800 uppercase mb-4">Audio Espacial (Panner)</h4>
                    <p class="text-sm text-slate-700 font-medium">
                        Posicionar el sonido en un espacio 3D. Si el objeto está a la izquierda en el canvas, el usuario lo escucha por el auricular izquierdo.
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">2. Aplicaciones Técnicas</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:border-rose-400 transition-colors">
                    <div class="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center text-white mb-4 shadow-lg">
                        <i class="fas fa-heartbeat"></i>
                    </div>
                    <h5 class="font-black uppercase text-[#003366]">Simulación Médica</h5>
                    <p class="text-xs text-slate-500 mt-2">Uso de frecuencias para representar signos vitales. Sonificación de datos de ecografía.</p>
                </div>
                <div class="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:border-rose-400 transition-colors">
                    <div class="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-white mb-4 shadow-lg">
                        <i class="fas fa-gamepad"></i>
                    </div>
                    <h5 class="font-black uppercase text-[#003366]">Retroalimentación (UX)</h5>
                    <p class="text-xs text-slate-500 mt-2">Efectos de sonido (SFX) cortos para confirmar acciones o alertar errores en sistemas multimedia[cite: 13].</p>
                </div>
                <div class="p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:border-rose-400 transition-colors">
                    <div class="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center text-white mb-4 shadow-lg">
                        <i class="fas fa-music"></i>
                    </div>
                    <h5 class="font-black uppercase text-[#003366]">Audio Adaptativo</h5>
                    <p class="text-xs text-slate-500 mt-2">Música que cambia de intensidad según el estado de estrés o progreso en un juego educativo.</p>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">3. Sincronización Audio-Visual</h3>
            <div class="bg-rose-900 text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <i class="fas fa-sync absolute -right-10 -bottom-10 text-white/5 text-[15rem] rotate-12"></i>
                <div class="relative z-10 space-y-6">
                    <h4 class="text-2xl font-black text-rose-300 italic uppercase">El Análisis de Frecuencia</h4>
                    <p class="text-lg leading-relaxed opacity-90">
                        Podemos usar un <strong>AnalyserNode</strong> para extraer los datos de audio en tiempo real y usarlos para mover gráficos. Esto permite crear visualizadores de música o simuladores donde los objetos vibran al ritmo del sonido.
                    </p>
                    <div class="p-6 bg-white/10 rounded-2xl border border-white/20 font-mono text-sm">
                        <span class="text-rose-300">// Extraer datos de frecuencia para animar un canvas</span><br>
                        analyser.getByteFrequencyData(dataArray);<br>
                        let alto = dataArray[0] / 2;<br>
                        ctx.fillRect(x, canvas.height - alto, 20, alto);
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-20 border-t border-slate-100 pt-12">
            <h3 class="text-2xl font-black text-[#003366] uppercase mb-8">Fuentes de Consulta</h3>
            <div class="space-y-4">
                <p class="text-sm text-slate-500 leading-relaxed italic">
                    <i class="fas fa-book mr-2 text-rose-600"></i>
                    Santos Julieta. Producción Multimedia: vídeos y animaciones (2012)[cite: 73].
                </p>
                <p class="text-sm text-slate-500 leading-relaxed italic">
                    <i class="fas fa-book mr-2 text-rose-600"></i>
                    Little, Thomas. Synchronization and Storage Models for Multimedia Objects (1996)[cite: 80].
                </p>
            </div>
        </section>

    </div>
</div>
`;