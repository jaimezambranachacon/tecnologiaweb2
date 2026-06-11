// content/texto_base_u01.js

const pag_texto_base_u01 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-20">
        <span class="text-blue-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-server text-lg"></i> TEXTO BASE / UNIDAD 1
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            PUNTEROS Y MANEJO DE<br>
            <span class="text-blue-600">MEMORIA DINÁMICA</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Comprender la memoria a bajo nivel separa a los programadores superficiales de los verdaderos ingenieros de software. En esta unidad aprenderás a gobernar el direccionamiento físico de la memoria RAM mediante punteros en C utilizando Code::Blocks.
        </p>
        <div class="h-2 w-24 bg-blue-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. Arquitectura de la Memoria RAM: Stack vs. Heap
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                Cada vez que ejecutas un programa en tu computadora, el sistema operativo le asigna un segmento de la memoria RAM física. Como ingenieros, debemos entender que esta asignación se divide principalmente en dos zonas lógicas con comportamientos radicalmente opuestos:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                    <div class="w-12 h-12 bg-[#003366] text-white rounded-xl flex items-center justify-center text-xl mb-4 shadow-md">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <h4 class="text-2xl font-black text-[#003366] uppercase mb-4">La Memoria Stack (Pila)</h4>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        Es una región de memoria de tamaño fijo, ultra rápida y administrada automáticamente por la CPU. Sigue el principio LIFO (Last In, First Out). Aquí se almacenan las variables locales y los argumentos de las funciones. Cuando la función termina, la memoria se libera de forma instantánea sin tu intervención.
                    </p>
                </div>

                <div class="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm relative overflow-hidden">
                    <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl mb-4 shadow-md">
                        <i class="fas fa-boxes-stacked"></i>
                    </div>
                    <h4 class="text-2xl font-black text-blue-800 uppercase mb-4">La Memoria Heap (Montículo)</h4>
                    <p class="text-sm text-blue-900 leading-relaxed">
                        Es un gran espacio libre de memoria RAM asignable de forma dinámica en tiempo de ejecución. No tiene un tamaño rígido predeterminado y está completamente gobernada por ti. Los datos alojados en el Heap sobreviven a la finalización de las funciones y <strong>es tu obligación legal como programador liberarlos expresamente</strong> para evitar fugas de memoria.
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. Anatomía y Operadores Esenciales de un Puntero
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Un <strong>puntero</strong> no es más que una variable especial, pero con una naturaleza única: en lugar de almacenar datos comunes (como enteros o caracteres), <strong>almacena la dirección física de otra celda de memoria RAM</strong>.
            </p>
            <p class="text-base text-slate-600 leading-relaxed mb-8">
                Para dominar los punteros en C puro, debes internalizar la semántica y el comportamiento de sus dos operadores de hardware fundamentales:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-6 bg-white rounded-2xl shadow-md border border-slate-100 flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-black flex-none mt-1 text-lg">
                        &
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-base mb-1">Operador de Dirección (Ampersand)</h4>
                        <p class="text-slate-500 text-xs leading-relaxed">
                            Se lee como <em>"la dirección de"</em>. Colocado antes de cualquier variable común, extrae el código hexadecimal correspondiente a la posición real que ocupa esa variable en los bancos de la memoria RAM.
                        </p>
                    </div>
                </div>

                <div class="p-6 bg-white rounded-2xl shadow-md border border-slate-100 flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-black flex-none mt-1 text-lg">
                        *
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-base mb-1">Operador de Indirección o Desreferenciación (Asterisco)</h4>
                        <p class="text-slate-500 text-xs leading-relaxed">
                            Se lee como <em>"el valor apuntado por"</em>. Permite ingresar de forma directa a la celda de memoria RAM cuya dirección tiene almacenada el puntero para leer su contenido o modificarlo de forma remota.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Implementación Práctica y Análisis de Código en C
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                A continuación, se detalla un código de laboratorio estructurado para ejecutarse en **Code::Blocks**. Este programa demuestra empíricamente cómo mapear las variables, obtener sus direcciones físicas reales en hexadecimal e inyectar mutaciones de datos indirectas:
            </p>

            <div class="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm text-slate-200 mb-8">
                <div class="bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-700/50">
                    <span class="text-xs text-slate-400 font-bold"><i class="fas fa-code mr-2"></i> laboratorio_punteros.c</span>
                    <div class="flex gap-1.5">
                        <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                        <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                        <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                    </div>
                </div>
                <pre class="p-6 overflow-x-auto leading-relaxed text-xs md:text-sm bg-slate-950"><code><span class="text-purple-400">#include</span> <span class="text-emerald-400">&lt;stdio.h&gt;</span>

<span class="text-blue-400">int</span> <span class="text-yellow-400">main</span>() {
    <span class="text-slate-500">// 1. Declaración de una variable común en el Stack</span>
    <span class="text-blue-400">int</span> numero = <span class="text-orange-400">50</span>;
    
    <span class="text-slate-500">// 2. Declaración del puntero. El asterisco aquí indica el TIPO de dato (Puntero a entero)</span>
    <span class="text-blue-400">int</span> *ptr = <span class="text-blue-400">&amp;</span>numero; <span class="text-slate-500">// Inicializado con la dirección física de 'numero'</span>

    <span class="text-yellow-400">printf</span>(<span class="text-emerald-400">"====================================================\\n"</span>);
    <span class="text-yellow-400">printf</span>(<span class="text-emerald-400">"ANALISIS ESTRUCTURAL DE MEMORIA CON CODE::BLOCKS\\n"</span>);
    <span class="text-yellow-400">printf</span>(<span class="text-emerald-400">"====================================================\\n"</span>);

    <span class="text-slate-500">// Imprimimos el valor directo de la variable</span>
    <span class="text-yellow-400">printf</span>(<span class="text-emerald-400">"Valor de la variable 'numero': %d\\n"</span>, numero);
    
    <span class="text-slate-500">// Usamos %p para imprimir la dirección física en formato hexadecimal nativo</span>
    <span class="text-yellow-400">printf</span>(<span class="text-emerald-400">"Direccion fisica de 'numero' (&amp;numero): %p\\n"</span>, (<span class="text-blue-400">void</span>*)&amp;numero);
    
    <span class="text-slate-500">// Revisamos qué tiene guardado por dentro la variable puntero</span>
    <span class="text-yellow-400">printf</span>(<span class="text-emerald-400">"Valor almacenado dentro de 'ptr': %p\\n"</span>, (<span class="text-blue-400">void</span>*)ptr);
    
    <span class="text-slate-500">// Desreferenciación: Accedemos al valor interno usando el asterisco</span>
    <span class="text-yellow-400">printf</span>(<span class="text-emerald-400">"Valor obtenido mediante desreferenciacion (*ptr): %d\\n"</span>, *ptr);
    <span class="text-yellow-400">printf</span>(<span class="text-emerald-400">"====================================================\\n"</span>);

    <span class="text-slate-500">// 3. Inyección indirecta: Modificamos la RAM usando el puntero</span>
    *ptr = <span class="text-orange-400">120</span>; 

    <span class="text-yellow-400">printf</span>(<span class="text-emerald-400">"NUEVO valor de 'numero' tras mutacion indirecta: %d\\n"</span>, numero);
    <span class="text-yellow-400">printf</span>(<span class="text-emerald-400">"====================================================\\n"</span>);

    <span class="text-purple-400">return</span> <span class="text-orange-400">0</span>;
}</code></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. El Comportamiento de las Variables en la RAM
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Para comprender exactamente qué sucedió a nivel de transistores en el hardware durante la ejecución del programa en Code::Blocks, analicemos este mapeo de estado de la memoria:
            </p>

            <div class="overflow-x-auto bg-white rounded-2xl shadow-lg border border-slate-200">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase text-xs tracking-widest">
                            <th class="p-4 font-black">Expresión en C</th>
                            <th class="p-4 font-black">Tipo de Dato</th>
                            <th class="p-4 font-black">Resultado Obtenido</th>
                            <th class="p-4 font-black">Explicación Arquitectónica</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-slate-700">
                        <tr class="border-b border-slate-100 hover:bg-blue-50/50">
                            <td class="p-4 font-mono font-bold text-blue-600">numero</td>
                            <td class="p-4 font-mono">int</td>
                            <td class="p-4 font-mono">50</td>
                            <td class="p-4 text-xs">El valor entero puro resguardado directamente en su celda asignada del Stack.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-blue-50/50">
                            <td class="p-4 font-mono font-bold text-blue-600">&amp;numero</td>
                            <td class="p-4 font-mono">int*</td>
                            <td class="p-4 font-mono text-xs">0x7ffee3b44ac8</td>
                            <td class="p-4 text-xs">La dirección hexadecimal indexada real del hardware donde vive la variable 'numero'.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-blue-50/50">
                            <td class="p-4 font-mono font-bold text-blue-600">ptr</td>
                            <td class="p-4 font-mono">int*</td>
                            <td class="p-4 font-mono text-xs">0x7ffee3b44ac8</td>
                            <td class="p-4 text-xs">El contenido propio del puntero, el cual copia exactamente la dirección de 'numero'.</td>
                        </tr>
                        <tr class="hover:bg-blue-50/50">
                            <td class="p-4 font-mono font-bold text-blue-600">*ptr</td>
                            <td class="p-4 font-mono">int</td>
                            <td class="p-4 font-mono">120</td>
                            <td class="p-4 text-xs">La lectura desreferenciada. Accede remotamente a la dirección que posee y altera su valor a 120.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section class="mt-20 mb-10 bg-gradient-to-br from-[#001f3f] to-[#003366] p-8 md:p-12 rounded-[2rem] shadow-2xl text-white relative overflow-hidden">
            <i class="fas fa-bug absolute -right-10 -bottom-10 text-white/5 text-[20rem] transform -rotate-12"></i>
            <div class="relative z-10">
                <h3 class="text-3xl font-black uppercase text-blue-400 mb-6">Pautas de Laboratorio y Errores Críticos</h3>
                <p class="text-lg text-slate-200 leading-relaxed mb-8">
                    Al trabajar en tu entorno de **Code::Blocks** presionando **F9** para compilar[cite: 3], debes blindar tu código evitando los dos errores más devastadores del manejo de memoria dinámica:
                </p>
                
                <div class="grid md:grid-cols-2 gap-6 font-mono text-xs">
                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <div class="flex items-center gap-3 text-rose-400 font-black uppercase mb-2">
                            <i class="fas fa-skull-crossbones text-base"></i> Punteros Salvajes (Wild Pointers)
                        </div>
                        <p class="text-slate-300 leading-relaxed">
                            Ocurre al declarar un puntero (<code>int *p;</code>) sin asignarle ninguna dirección de memoria inicial. El puntero apuntará a un área aleatoria de tu RAM. Intentar modificarlo provocará de inmediato un fallo de segmentación (<strong>Segmentation Fault</strong>) y colapsará el programa.
                        </p>
                    </div>
                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <div class="flex items-center gap-3 text-amber-400 font-black uppercase mb-2">
                            <i class="fas fa-heart-crack text-base"></i> Fugas de Memoria (Memory Leaks)
                        </div>
                        <p class="text-slate-300 leading-relaxed">
                            Ocurre cuando solicitas espacio en el Heap utilizando funciones dinámicas y olvidas invocar la rutina de liberación. Tu programa acumulará memoria RAM de forma parasitaria hasta saturar por completo los recursos del sistema operativo.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;