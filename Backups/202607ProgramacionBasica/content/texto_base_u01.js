// content/texto_base_u01.js

const pag_texto_base_u01 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-20">
        <span class="text-blue-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-sitemap text-lg"></i> TEXTO BASE / UNIDAD 1
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            ALGORITMOS, FLOWGORITHM Y<br>
            <span class="text-blue-600">INTRODUCCIÓN A PYTHON</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            La programación no comienza escribiendo código, sino estructurando la lógica. En esta unidad aprenderás a analizar problemas del entorno real, representarlos gráficamente con Flowgorithm y dar tus primeros pasos de codificación estructurada en Python usando Google Colab.
        </p>
        <div class="h-2 w-24 bg-blue-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. Concepto de Algoritmo
            </h3>
            
            <div class="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-8 border-blue-600 rounded-r-3xl shadow-sm mb-8">
                <h4 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">Definición Formal</h4>
                <p class="text-xl text-slate-800 leading-relaxed font-semibold italic">
                    "Un algoritmo es un conjunto ordenado, finito y preciso de instrucciones o pasos lógicos que permiten realizar una tarea, procesar datos o resolver un problema específico sin ambigüedades."
                </p>
            </div>

            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                En el ámbito de la ingeniería de sistemas, un algoritmo actúa como el plano arquitectónico de un software. Antes de escribir una sola línea de código en Python, debemos garantizar que nuestra solución cumpla estrictamente con tres características fundamentales:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div class="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <span class="text-2xl mb-3 block">🎯</span>
                    <h5 class="font-black text-slate-800 text-lg mb-1">Preciso</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Debe indicar de forma clara y rigurosa el orden exacto de realización de cada uno de los pasos del proceso, sin dejar espacio a interpretaciones erróneas de la máquina.
                    </p>
                </div>

                <div class="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <span class="text-2xl mb-3 block">🔒</span>
                    <h5 class="font-black text-slate-800 text-lg mb-1">Definido</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Si se ejecuta el algoritmo dos o más veces utilizando exactamente los mismos datos de entrada, se debe obtener siempre el mismo resultado de salida de manera predecible.
                    </p>
                </div>

                <div class="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <span class="text-2xl mb-3 block">⏳</span>
                    <h5 class="font-black text-slate-800 text-lg mb-1">Finito</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        El algoritmo debe tener un fin establecido. Debe terminar en algún momento tras ejecutar un número determinado de pasos, evitando ciclos o bucles infinitos en el sistema.
                    </p>
                </div>
            </div>

            <hr class="border-slate-100 my-12">

            <h4 class="text-2xl font-black text-[#003366] uppercase mb-4">El Camino del Algoritmo: De Flowgorithm a Python</h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                    <div class="w-12 h-12 bg-[#003366] text-white rounded-xl flex items-center justify-center text-xl mb-4 shadow-md">
                        <i class="fas fa-project-diagram"></i>
                    </div>
                    <h4 class="text-xl font-black text-[#003366] uppercase mb-4">Flowgorithm (Modelado Gráfico)</h4>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        Es una herramienta didáctica interactiva que te permite diseñar algoritmos mediante <strong>diagramas de flujo</strong>. En lugar de pelear con las reglas de escritura de un lenguaje de programación, aquí te concentras exclusivamente en la lógica de control, los caminos de decisión y el flujo de los datos mediante bloques gráficos.
                    </p>
                </div>

                <div class="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm relative overflow-hidden">
                    <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl mb-4 shadow-md">
                        <i class="fab fa-python"></i>
                    </div>
                    <h4 class="text-xl font-black text-blue-800 uppercase mb-4">Python y Google Colab</h4>
                    <p class="text-sm text-blue-900 leading-relaxed">
                        Python es un lenguaje de programación de alto nivel, limpio y altamente legible, catalogado como <strong>lenguaje interpretado</strong>. En nuestros laboratorios prácticos, utilizaremos <strong>Google Colab</strong>, un entorno en la nube que te permite escribir y ejecutar código Python desde tu navegador web de forma instantánea, eliminando configuraciones complejas de instalación.
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. ¿Qué es una Variable en Programación?
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Para que un algoritmo procese información, necesita guardar datos temporalmente en la memoria RAM de la computadora. Una <strong>variable</strong> es un espacio reservado en la memoria que almacena un dato y posee un nombre único (identificador) para hacer referencia a él.
            </p>
            <p class="text-base text-slate-600 leading-relaxed mb-8">
                Imagínala como una caja etiquetada donde puedes guardar un valor. En cualquier momento del programa, puedes abrir la caja para ver lo que tiene dentro o reemplazar su contenido por un dato nuevo.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-6 bg-white rounded-2xl shadow-md border border-slate-100 flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-black flex-none mt-1 text-lg">
                        <i class="fas fa-tag"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-base mb-1">Nombre o Identificador</h4>
                        <p class="text-slate-500 text-xs leading-relaxed">
                            Es la etiqueta de la variable. Debe ser descriptivo y no contener espacios ni caracteres especiales. Por ejemplo, es mejor usar <code>precio_producto</code> que una letra simple como <code>p</code>.
                        </p>
                    </div>
                </div>

                <div class="p-6 bg-white rounded-2xl shadow-md border border-slate-100 flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-black flex-none mt-1 text-lg">
                        <i class="fas fa-fingerprint"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-base mb-1">Tipo de Dato</h4>
                        <p class="text-slate-500 text-xs leading-relaxed">
                            Define qué clase de información puede almacenar la variable (números enteros, decimales, texto, etc.). Esto le indica a la computadora cuánta memoria RAM debe reservar y qué operaciones matemáticas o lógicas se pueden hacer con ella.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Tipos de Datos Primitivos
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Tanto en Flowgorithm como en Python, trabajaremos con cuatro tipos de datos esenciales para resolver cualquier problema de lógica comercial o automatización:
            </p>

            <div class="overflow-x-auto bg-white rounded-2xl shadow-lg border border-slate-200">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase text-xs tracking-widest">
                            <th class="p-4 font-black">Tipo de Dato</th>
                            <th class="p-4 font-black">En Flowgorithm</th>
                            <th class="p-4 font-black">En Python</th>
                            <th class="p-4 font-black">Ejemplo de Valor</th>
                            <th class="p-4 font-black">Explicación de Uso</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-slate-700">
                        <tr class="border-b border-slate-100 hover:bg-blue-50/50">
                            <td class="p-4 font-bold text-slate-800">Entero</td>
                            <td class="p-4 font-mono text-blue-600">Entero (Integer)</td>
                            <td class="p-4 font-mono text-blue-600">int</td>
                            <td class="p-4 font-mono">5, -12, 0</td>
                            <td class="p-4 text-xs">Números completos sin decimales. Perfecto para contar unidades, productos o iteraciones de un bucle.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-blue-50/50">
                            <td class="p-4 font-bold text-slate-800">Decimal / Real</td>
                            <td class="p-4 font-mono text-blue-600">Real (Real)</td>
                            <td class="p-4 font-mono text-blue-600">float</td>
                            <td class="p-4 font-mono">15.80, -3.14</td>
                            <td class="p-4 text-xs">Números que contienen punto decimal. Esencial para calcular precios, porcentajes de descuento, o temperaturas.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-blue-50/50">
                            <td class="p-4 font-bold text-slate-800">Cadena de Texto</td>
                            <td class="p-4 font-mono text-blue-600">Cadena (String)</td>
                            <td class="p-4 font-mono text-blue-600">str</td>
                            <td class="p-4 font-mono">"Supermercado TIA"</td>
                            <td class="p-4 text-xs">Colección de caracteres alfanuméricos encerrados entre comillas. Se usa para nombres, direcciones, contraseñas o NIT.</td>
                        </tr>
                        <tr class="hover:bg-blue-50/50">
                            <td class="p-4 font-bold text-slate-800">Booleano</td>
                            <td class="p-4 font-mono text-blue-600">Booleano (Boolean)</td>
                            <td class="p-4 font-mono text-blue-600">bool</td>
                            <td class="p-4 font-mono">True, False</td>
                            <td class="p-4 text-xs">Valores lógicos binarios de Verdadero o Falso. Indispensables para evaluar condiciones de toma de decisión.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. Implementación y Prueba de Escritorio en Python
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                A continuación, se detalla un código de laboratorio básico listo para ejecutarse en tu cuaderno de **Google Colab**. Este programa interactúa con el usuario, lee los datos desde el teclado, realiza una conversión de tipo y calcula el total de una compra:
            </p>

            <div class="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm text-slate-200 mb-8">
                <div class="bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-700/50">
                    <span class="text-xs text-slate-400 font-bold"><i class="fas fa-code mr-2"></i> registro_compra.py</span>
                    <div class="flex gap-1.5">
                        <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                        <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                        <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                    </div>
                </div>
                <pre class="p-6 overflow-x-auto leading-relaxed text-xs md:text-sm bg-slate-950"><code><span class="text-slate-500"># =========================================================</span>
<span class="text-slate-500"># LABORATIO 1: REGISTRO INTERACTIVO DE COMPRAS EN PYTHON</span>
<span class="text-slate-500"># =========================================================</span>

<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"--- BIENVENIDO AL SISTEMA DE SUPERMERCADO TIA ---"</span>)

<span class="text-slate-500"># 1. Entrada de datos de tipo texto (String)</span>
nombre_cliente = <span class="text-yellow-400">input</span>(<span class="text-emerald-400">"Ingrese el nombre del cliente: "</span>)

<span class="text-slate-500"># 2. Entrada de datos numéricos (Requiere conversión de tipo)</span>
precio_unitario = <span class="text-blue-400">float</span>(<span class="text-yellow-400">input</span>(<span class="text-emerald-400">"Ingrese el precio del producto (Bs): "</span>))
cantidad_productos = <span class="text-blue-400">int</span>(<span class="text-yellow-400">input</span>(<span class="text-emerald-400">"¿Cuántas unidades lleva?: "</span>))

<span class="text-slate-500"># 3. Proceso matemático (Multiplicación de variables)</span>
total_pagar = precio_unitario * cantidad_productos

<span class="text-slate-500"># 4. Salida de resultados combinando textos y números</span>
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"--------------------------------------------------"</span>)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"Cliente registrado:"</span>, nombre_cliente)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"Monto total de la compra:"</span>, total_pagar, <span class="text-emerald-400">"Bs."</span>)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"--------------------------------------------------"</span>)</code></pre>
            </div>
        </section>

        <section class="mt-20 mb-10 bg-gradient-to-br from-[#001f3f] to-[#003366] p-8 md:p-12 rounded-[2rem] shadow-2xl text-white relative overflow-hidden">
            <i class="fas fa-bug absolute -right-10 -bottom-10 text-white/5 text-[20rem] transform -rotate-12"></i>
            <div class="relative z-10">
                <h3 class="text-3xl font-black uppercase text-blue-400 mb-6">Pautas de Laboratorio y Errores de Sintaxis</h3>
                <p class="text-lg text-slate-200 leading-relaxed mb-8">
                    Al escribir tus primeros programas en Python dentro de Google Colab, debes poner mucha atención para evitar los dos errores de sintaxis más comunes que cometen los estudiantes de primer semestre:
                </p>
                
                <div class="grid md:grid-cols-2 gap-6 font-mono text-xs">
                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <div class="flex items-center gap-3 text-rose-400 font-black uppercase mb-2">
                            <i class="fas fa-exclamation-triangle text-base"></i> Error de Conversión (TypeError)
                        </div>
                        <p class="text-slate-300 leading-relaxed">
                            Ocurre cuando olvidas convertir los datos ingresados con <code>input()</code>. En Python, todo valor leído desde el teclado ingresa por defecto como un texto (String). Si intentas multiplicar un texto directo, el programa lanzará un error o duplicará las letras en lugar de realizar la operación aritmética.
                        </p>
                    </div>
                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <div class="flex items-center gap-3 text-amber-400 font-black uppercase mb-2">
                            <i class="fas fa-indent text-base"></i> Errores de Escritura e Identación
                        </div>
                        <p class="text-slate-300 leading-relaxed">
                            A diferencia de otros lenguajes, Python no utiliza llaves de apertura y cierre para agrupar las líneas. En su lugar, se rige por la <strong>identación</strong> (los espacios de margen izquierdo). Una mala alineación de tus bloques causará un <code>IndentationError</code> inmediato.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100">
            <div class="border-b-2 border-slate-100 pb-4 mb-6">
                <span class="text-amber-600 font-black uppercase text-xs tracking-[0.3em] block mb-1">Aclaración Académica</span>
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">¿Por qué usar diagramas de flujo y código a la vez?</h3>
            </div>
            
            <p class="text-lg text-slate-600 leading-relaxed mb-6 font-light">
                Es común preguntarse por qué no programamos directamente en Python desde el primer día. El diseño simultáneo mediante diagramas de flujo en Flowgorithm y código en Python tiene un objetivo estrictamente pedagógico en la UPDS.
            </p>
            
            <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-8">
                <p class="text-sm text-amber-900 leading-relaxed font-medium">
                    <strong>Desarrollo de la capacidad de abstracción:</strong> El cerebro humano procesa imágenes de forma mucho más rápida y eficiente que líneas de texto. Diseñar el diagrama de flujo te permite ver "los caminos lógicos" de los datos de manera bidimensional y ejecutar pruebas de escritorio rápidas. Una vez que tu diagrama está libre de fallas, la transcripción sintáctica a Python se vuelve un proceso automático y sumamente sencillo.
                </p>
            </div>
        </section>

    </div>
</div>
`;