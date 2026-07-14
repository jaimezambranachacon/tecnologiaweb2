// content/texto_base_u03.js

const pag_texto_base_u03 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-20">
        <span class="text-rose-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-arrows-spin text-lg"></i> TEXTO BASE / UNIDAD 3
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            RECURSIVIDAD Y PILAS<br>
            <span class="text-rose-600">DE EJECUCIÓN</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            La elegancia algorítmica se alcanza cuando una función es capaz de definirse en términos de sí misma. En esta unidad aprenderás a diseñar rutinas recursivas analizando el comportamiento interno de la pila de llamadas de la memoria RAM.
        </p>
        <div class="h-2 w-24 bg-rose-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. Anatomía de un Algoritmo Recursivo
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                La <strong>Recursividad</strong> es una técnica de programación avanzada donde una función se invoca a sí misma de forma directa o indirecta para resolver un problema dividiéndolo en subtareas más simples[cite: 8, 18]. Para que una estructura recursiva sea matemáticamente estable y no colapse el hardware, debe portar obligatoriamente dos componentes críticos:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="p-8 bg-rose-50 rounded-3xl border border-rose-100 shadow-sm relative overflow-hidden">
                    <div class="w-12 h-12 bg-rose-600 text-white rounded-xl flex items-center justify-center text-xl mb-4 shadow-md">
                        <i class="fas fa-hand"></i>
                    </div>
                    <h4 class="text-2xl font-black text-rose-800 uppercase mb-4">El Caso Base (Condición de Salida)</h4>
                    <p class="text-sm text-rose-900 font-medium leading-relaxed">
                        Es la condición explícita que detiene las llamadas recursivas encadenadas. Representa el escenario más simple del problema que puede resolverse de forma directa sin necesidad de dividirse. <strong>Si el caso base no se alcanza o se omite, el algoritmo se ejecutará de forma infinita en la RAM.</strong>
                    </p>
                </div>

                <div class="p-8 bg-slate-100 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                    <div class="w-12 h-12 bg-slate-800 text-white rounded-xl flex items-center justify-center text-xl mb-4 shadow-md">
                        <i class="fas fa-arrows-turn-to-dots"></i>
                    </div>
                    <h4 class="text-2xl font-black text-slate-800 uppercase mb-4">El Caso Recursivo (Inducción)</h4>
                    <p class="text-sm text-slate-700 font-medium leading-relaxed">
                        Es la sección del código donde la función se invoca a sí misma. En esta fase, los argumentos de entrada deben modificarse de tal manera que se aproximen de forma estrictamente secuencial y progresiva hacia el cumplimiento del Caso Base.
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. Comportamiento del Call Stack (Pila de Llamadas)
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Para comprender la recursividad a nivel de hardware, debemos analizar cómo opera el <strong>Call Stack</strong> de la computadora. Cada vez que una función se ejecuta, el procesador reserva un bloque de memoria temporal en la cima del Stack denominado <em>Marco de Activación (Stack Frame)</em>.
            </p>
            <p class="text-base text-slate-600 leading-relaxed mb-6">
                En un algoritmo recursivo, cada auto-invocación congela el marco actual y añade un nuevo Stack Frame en la parte superior, resguardando el estado de sus variables locales. Cuando finalmente se alcanza el caso base, la pila comienza a vaciarse en sentido inverso siguiendo un estricto orden LIFO (Last In, First Out).
            </p>

            <div class="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-xl font-sans mt-4">
                <h4 class="font-bold text-amber-900 mb-1"><i class="fas fa-exclamation-triangle mr-2"></i>Riesgo de Arquitectura: Stack Overflow</h4>
                <p class="text-xs text-amber-800 leading-relaxed">
                    Dado que la memoria Stack asignada por el sistema operativo es limitada, una recursión demasiado profunda o carente de caso base provocará la saturación absoluta de la pila, desbordando los límites lógicos y lanzando el devastador error de segmentación <strong>Stack Overflow Exception</strong>.
                </p>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Análisis de Caso: El Algoritmo del Factorial en C
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                El siguiente programa implementa el cálculo matemático del factorial mediante inducción recursiva controlada. Está diseñado de forma limpia para ser compilado y auditado de inmediato en tu entorno de **Code::Blocks**[cite: 38]:
            </p>

            <div class="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm text-slate-200 mb-8">
                <div class="bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-700/50">
                    <span class="text-xs text-slate-400 font-bold"><i class="fas fa-code mr-2"></i> laboratorio_recursividad.c</span>
                    <div class="flex gap-1.5">
                        <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                        <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                        <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                    </div>
                </div>
                <pre class="p-6 overflow-x-auto leading-relaxed text-xs md:text-sm bg-slate-950"><code><span class="text-purple-400">#include</span> <span class="text-emerald-400">&lt;stdio.h&gt;</span>

<span class="text-slate-500">// Función recursiva para calcular el factorial de un número</span>
<span class="text-blue-400">long int</span> <span class="text-yellow-400">calcularFactorial</span>(<span class="text-blue-400">int</span> n) {
    <span class="text-slate-500">// A. VALIDACIÓN DEL CASO BASE: Detiene la expansión en el Call Stack</span>
    <span class="text-purple-400">if</span> (n &lt;= <span class="text-orange-400">1</span>) {
        <span class="text-purple-400">return</span> <span class="text-orange-400">1</span>;
    }
    
    <span class="text-slate-500">// B. CASO RECURSIVO: La función se llama a sí misma reduciendo el argumento (n - 1)</span>
    <span class="text-purple-400">return</span> n * <span class="text-yellow-400">calcularFactorial</span>(n - <span class="text-orange-400">1</span>);
}

<span class="text-blue-400">int</span> <span class="text-yellow-400">main</span>() {
    <span class="text-blue-400">int</span> valor = <span class="text-orange-400">5</span>;
    <span class="text-blue-400">long int</span> resultado;

    <span class="text-yellow-400">printf</span>(<span class="text-emerald-400">"===============================================\\n"</span>);
    <span class="text-yellow-400">printf</span>(<span class="text-emerald-400">"AUDITORÍA DE PILAS RECURSIVAS EN CODE::BLOCKS \\n"</span>);
    <span class="text-yellow-400">printf</span>(<span class="text-emerald-400">"===============================================\\n"</span>);

    resultado = <span class="text-yellow-400">calcularFactorial</span>(valor);

    <span class="text-yellow-400">printf</span>(<span class="text-emerald-400">"El factorial de %d es: %ld\\n"</span>, valor, resultado);
    <span class="text-yellow-400">printf</span>(<span class="text-emerald-400">"===============================================\\n"</span>);

    <span class="text-purple-400">return</span> <span class="text-orange-400">0</span>;
}</code></pre>
            </div>
        </section>
   

    </div>
</div>
`;