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

        <section class="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100">
        <div class="border-b-2 border-slate-100 pb-4 mb-6">
            <span class="text-amber-600 font-black uppercase text-xs tracking-[0.3em] block mb-1">Aclaración de Ingeniería</span>
            <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">1. El Uso Real de los Punteros: ¿Didáctica o Producción?</h3>
        </div>
        
        <p class="text-lg text-slate-600 leading-relaxed mb-6 font-light">
            Es vital aclarar que, en el desarrollo de software comercial moderno, <strong>rara vez escribirás punteros manuales (como <code class="font-mono bg-slate-100 px-1 py-0.5 rounded text-sm text-amber-700">*ptr</code>)</strong> en tu día a día. Los lenguajes de alto nivel actuales cuentan con recolectores de basura automáticos y sistemas de abstracción que protegen la memoria RAM de forma transparente.
        </p>
        
        <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
            <p class="text-sm text-amber-900 leading-relaxed font-medium">
                <strong>¿Por qué los estudiamos entonces?</strong> El uso de punteros en esta asignatura tiene un <strong>fin puramente didáctico y formativo</strong>. Manipular punteros te obliga a entender cómo funciona el hardware bajo el capó, las direcciones físicas y la diferencia real entre el Stack y el Heap. Desarrollar esta destreza mental es lo que te capacita para diseñar arquitecturas de software masivas y optimizadas, sin importar el lenguaje de programación que elijas en el futuro.
            </p>
        </div>

        <h4 class="text-xl font-black text-[#003366] uppercase mb-4 tracking-tight">¿Dónde se siguen usando obligatoriamente?</h4>
        <div class="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-[#003366] text-white uppercase text-xs tracking-widest">
                        <th class="p-4 font-black">Área de la Industria</th>
                        <th class="p-4 font-black">¿Por qué son necesarios?</th>
                        <th class="p-4 font-black">Ejemplos Reales</th>
                    </tr>
                </thead>
                <tbody class="text-sm text-slate-700">
                    <tr class="border-b border-slate-100 hover:bg-slate-50">
                        <td class="p-4 font-bold text-slate-800">Sistemas Operativos</td>
                        <td class="p-4 text-xs">Para comunicarse de forma directa con los transistores del hardware y gestionar los drivers de los componentes.</td>
                        <td class="p-4 font-mono text-xs text-blue-600">Kernel de Linux, Windows, macOS.</td>
                    </tr>
                    <tr class="border-b border-slate-100 hover:bg-slate-50">
                        <td class="p-4 font-bold text-slate-800">Motores de Videojuegos</td>
                        <td class="p-4 text-xs">Exigen renderizar millones de polígonos a 120 cuadros por segundo, por lo que no pueden esperar a un recolector de basura automático.</td>
                        <td class="p-4 font-mono text-xs text-blue-600">Unreal Engine (C++), Unity Core.</td>
                    </tr>
                    <tr class="border-b border-slate-100 hover:bg-slate-50">
                        <td class="p-4 font-bold text-slate-800">Sistemas Embebidos</td>
                        <td class="p-4 text-xs">Dispositivos con procesadores diminutos y memoria RAM extremadamente limitada (a veces menos de 2 KB).</td>
                        <td class="p-4 font-mono text-xs text-blue-600">Microcontroladores, Arduino, Marcapasos.</td>
                    </tr>
                    <tr class="hover:bg-slate-50">
                        <td class="p-4 font-bold text-slate-800">Bases de Datos de Alta Velocidad</td>
                        <td class="p-4 text-xs">Requieren indexar y ordenar miles de millones de registros en tiempo récord directamente en las celdas de la RAM.</td>
                        <td class="p-4 font-mono text-xs text-blue-600">Redis, Motores internos de PostgreSQL.</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>

    <section class="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100">
        <div class="border-b-2 border-slate-100 pb-4 mb-8">
            <span class="text-blue-600 font-black uppercase text-xs tracking-[0.3em] block mb-1">Traducción de Código</span>
            <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">2. Compiladores vs. Intérpretes</h3>
        </div>

        <p class="text-lg text-slate-600 leading-relaxed mb-10 font-light">
            Las computadoras no entienden palabras como <code class="font-mono bg-slate-100 px-1 py-0.5 rounded text-sm text-blue-600">int</code>, <code class="font-mono bg-slate-100 px-1 py-0.5 rounded text-sm text-blue-600">cout</code> o <code class="font-mono bg-slate-100 px-1 py-0.5 rounded text-sm text-blue-600">if</code>; únicamente procesan impulsos eléctricos (ceros y unos). Existen dos grandes tecnologías encargadas de traducir nuestro código fuente a código de máquina ejecutable:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="p-8 bg-slate-50 border border-slate-200 rounded-3xl relative overflow-hidden">
                <div class="w-12 h-12 bg-[#003366] text-white rounded-xl flex items-center justify-center text-xl mb-4 shadow-md">
                    <i class="fas fa-file-shield"></i>
                </div>
                <h4 class="text-2xl font-black text-[#003366] uppercase mb-3">¿Qué es un Compilador?</h4>
                <p class="text-xs text-slate-600 leading-relaxed mb-4">
                    Es un software que toma el código fuente completo, lo analiza de golpe en busca de errores sintácticos y lo traduce de manera masiva en un archivo binario ejecutable independiente (como un archivo <code class="font-mono text-rose-600">.exe</code>). Una vez compilado, el programa corre a la velocidad máxima del hardware sin depender del código original.
                </p>
                <div class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    <strong>Ejemplos reales:</strong> GCC (MinGW en Windows), Clang, MSVC.
                </div>
            </div>

            <div class="p-8 bg-blue-50 border border-blue-100 rounded-3xl relative overflow-hidden">
                <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl mb-4 shadow-md">
                    <i class="fas fa-bolt-lightning"></i>
                </div>
                <h4 class="text-2xl font-black text-blue-800 uppercase mb-3">¿Qué es un Intérprete?</h4>
                <p class="text-xs text-slate-700 leading-relaxed mb-4">
                    Es un programa que no genera archivos ejecutables binarios. En su lugar, lee tu código fuente <strong>línea por línea en tiempo de ejecución</strong>, traduciéndola y ejecutándola en el procesador de forma instantánea. Es muy flexible para realizar cambios rápidos, pero su rendimiento es estructuralmente más lento que el de un compilador.
                </p>
                <div class="text-[10px] font-bold text-blue-500 uppercase tracking-wider">
                    <strong>Ejemplos reales:</strong> Motor V8 de Google Chrome, Intérprete oficial de CPython.
                </div>
            </div>
        </div>

        <h4 class="text-xl font-black text-[#003366] uppercase mb-6 tracking-tight"><i class="fas fa-list-check mr-2 text-blue-500"></i>Clasificación de los Lenguajes en la Industria</h4>
        
        <div class="space-y-4">
            <div class="p-5 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-shadow flex items-start gap-4">
                <span class="bg-emerald-100 text-emerald-800 font-black uppercase text-[9px] px-2.5 py-1 rounded-md tracking-wider flex-none mt-1">
                    Compilados
                </span>
                <div>
                    <h5 class="font-bold text-slate-800 text-sm">C, C++, Rust, Go</h5>
                    <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                        <strong>Elemento clave:</strong> Generan ejecutables nativos optimizados para la arquitectura específica de la CPU (x86_64 / ARM). Tienen control absoluto sobre el mapa de la memoria RAM y son ideales para software de alto rendimiento.
                    </p>
                </div>
            </div>

            <div class="p-5 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-shadow flex items-start gap-4">
                <span class="bg-amber-100 text-amber-800 font-black uppercase text-[9px] px-2.5 py-1 rounded-md tracking-wider flex-none mt-1">
                    Interpretados
                </span>
                <div>
                    <h5 class="font-bold text-slate-800 text-sm">Python, JavaScript, Ruby, PHP</h5>
                    <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                        <strong>Elemento clave:</strong> Son lenguajes dinámicos y altamente portables. El mismo archivo de código corre en Windows, Linux o Mac sin necesidad de ser recompilado, siempre y cuando el entorno de ejecución (intérprete) esté instalado.
                    </p>
                </div>
            </div>

            <div class="p-5 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-shadow flex items-start gap-4">
                <span class="bg-purple-100 text-purple-800 font-black uppercase text-[9px] px-2.5 py-1 rounded-md tracking-wider flex-none mt-1">
                    Híbridos (JIT)
                </span>
                <div>
                    <h5 class="font-bold text-slate-800 text-sm">Java, C# (C-Sharp)</h5>
                    <p class="text-xs text-slate-500 mt-1 leading-relaxed">
                        <strong>Elemento clave:</strong> Se compilan a un código intermedio universal llamado <strong>Bytecode</strong> (archivos <code class="font-mono">.class</code> o <code class="font-mono">.dll</code>). Al ejecutarse, una Máquina Virtual intermedia (JVM / .NET CLR) compila ese código dinámicamente en tiempo real (Just-In-Time Compilation) para acelerar el procesamiento.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-slate-900 text-white p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
        <i class="fas fa-cubes absolute -right-10 -bottom-10 text-white/5 text-[22rem] transform -rotate-12"></i>
        
        <div class="relative z-10">
            <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-slate-900 text-2xl shadow-lg">
                    <i class="fas fa-laptop-code"></i>
                </div>
                <div>
                    <span class="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 block">Entorno de Laboratorio</span>
                    <h3 class="text-2xl font-black uppercase text-white">3. El Uso de Code::Blocks como Entorno Integrado</h3>
                </div>
            </div>

            <p class="text-slate-300 text-base leading-relaxed mb-8 max-w-4xl font-light">
                Para el desarrollo práctico de nuestras clases y la validación de algoritmos de bajo nivel, utilizaremos **Code::Blocks** como nuestra herramienta de cabecera. Es un Entorno de Desarrollo Integrado (IDE) de código abierto, sumamente liviano y especializado en los lenguajes C y C++.
            </p>

            <div class="grid md:grid-cols-3 gap-6 font-mono text-xs">
                <div class="bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
                    <div>
                        <h5 class="text-emerald-400 font-bold uppercase mb-2 text-[11px] tracking-wider"><i class="fas fa-microchip mr-1"></i>Compilador Embebido</h5>
                        <p class="text-slate-400 leading-relaxed">
                            Code::Blocks no compila el código por sí solo; integra la suite de compiladores de hardware **GCC (GNU Compiler Collection)** a través de MinGW, permitiendo generar archivos binarios optimizados en un par de milisegundos.
                        </p>
                    </div>
                </div>

                <div class="bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
                    <div>
                        <h5 class="text-emerald-400 font-bold uppercase mb-2 text-[11px] tracking-wider"><i class="fas fa-bug-slash mr-1"></i>Auditoría y Depurador</h5>
                        <p class="text-slate-400 leading-relaxed">
                            Incluye herramientas nativas de inspección avanzada (Debugging). Te permite colocar puntos de interrupción (<em>Breakpoints</em>) en las líneas de código para pausar el programa en vivo y auditar visualmente cómo van cambiando las direcciones hexadecimales de tus punteros en la RAM.
                        </p>
                    </div>
                </div>

                <div class="bg-white/5 p-5 rounded-xl border border-white/10 flex flex-col justify-between">
                    <div>
                        <h5 class="text-emerald-400 font-bold uppercase mb-2 text-[11px] tracking-wider"><i class="fas fa-bolt mr-1"></i>Flujo Automatizado</h5>
                        <p class="text-slate-400 leading-relaxed">
                            Al presionar la tecla rápida **F9**, el IDE automatiza de forma transparente las tres fases del desarrollo en una sola acción de pantalla: guarda los cambios del archivo fuente, invoca al compilador GCC y despliega la consola de comandos de hardware resultante.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
</div>
`;