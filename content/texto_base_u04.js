// content/texto_base_u04.js

const pag_texto_base_u04 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-20">
        <span class="text-[#00aaff] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-arrows-spin text-lg"></i> TEXTO BASE / UNIDAD 4
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            ESTRUCTURAS DE CONTROL<br>
            <span class="text-[#00aaff]">REPETITIVAS (BUCLES)</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            La verdadera potencia de la computación reside en su capacidad para ejecutar tareas repetitivas millones de veces por segundo sin cansarse ni cometer errores. En esta unidad aprenderás a gobernar los ciclos iterativos utilizando estructuras determinadas e indeterminadas de control.
        </p>
        <div class="h-2 w-24 bg-[#00aaff] mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. Concepto de Iteración y Ciclos de Control
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                En la resolución de problemas reales, a menudo necesitamos repetir un bloque de instrucciones un número determinado de veces o mientras se cumpla una condición específica. Una **estructura repetitiva** (comúnmente llamada bucle o ciclo) permite automatizar este proceso evitando la duplicación innecesaria de código en el editor de texto.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                        <div class="w-10 h-10 bg-[#003366] text-white rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-list-ol"></i>
                        </div>
                        <h4 class="text-lg font-black text-[#003366] uppercase mb-2">Bucle Determinado (FOR)</h4>
                        <p class="text-xs text-slate-500 leading-relaxed">
                            Se utiliza cuando sabemos con **exactitud** de antemano cuántas veces se debe ejecutar el ciclo (por ejemplo, registrar exactamente 5 productos en la caja o contar del 1 al 10).
                        </p>
                    </div>
                    <span class="text-[11px] font-mono font-bold text-slate-400 mt-4">Uso: range() en Python</span>
                </div>

                <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <div class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-rotate"></i>
                        </div>
                        <h4 class="text-lg font-black text-blue-800 uppercase mb-2">Bucle Indeterminado (WHILE)</h4>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Se ejecuta continuamente **mientras** una condición lógica sea verdadera. No sabemos con precisión cuándo terminará, ya que depende de una variable que cambia dentro del ciclo.
                        </p>
                    </div>
                    <span class="text-[11px] font-mono font-bold text-blue-500 mt-4">Uso: while (condicion)</span>
                </div>

                <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <div class="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-arrows-spin"></i>
                        </div>
                        <h4 class="text-lg font-black text-purple-800 uppercase mb-2">Ciclo de Validación (DO-WHILE)</h4>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Garantiza que el bloque de instrucciones se ejecute **al menos una vez** antes de evaluar la condición. Es sumamente útil para menús de opciones y validaciones de datos de entrada.
                        </p>
                    </div>
                    <span class="text-[11px] font-mono font-bold text-purple-500 mt-4">Uso: Validación de menús</span>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. Herramientas lógicas: Acumuladores y Contadores
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Para extraer información de valor mientras se ejecuta un ciclo iterativo, los ingenieros recurrimos a dos variables especiales de control que deben ser inicializadas **antes** del bucle:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div class="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-black text-lg">
                            +1
                        </div>
                        <h4 class="font-black text-slate-800 text-xl">¿Qué es un Contador?</h4>
                    </div>
                    <p class="text-sm text-slate-500 leading-relaxed mb-4">
                        Es una variable que se incrementa o decrementa en un **valor constante** fijo en cada iteración (generalmente de uno en uno). Se utiliza para llevar la cuenta de cuántas veces ocurre un evento específico.
                    </p>
                    <div class="bg-slate-50 p-4 rounded font-mono text-xs text-slate-600">
                        # Inicialización antes del ciclo: c = 0<br>
                        # Expresión de incremento dentro del ciclo:<br>
                        <strong>contador = contador + 1</strong>
                    </div>
                </div>

                <div class="p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div class="flex items-center gap-3 mb-4">
                        <div class="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-black text-lg">
                            +v
                        </div>
                        <h4 class="font-black text-slate-800 text-xl">¿Qué es un Acumulador?</h4>
                    </div>
                    <p class="text-sm text-slate-500 leading-relaxed mb-4">
                        Es una variable que acumula **valores variables** en cada paso del ciclo. Se utiliza para obtener la suma acumulada de un conjunto de datos (por ejemplo, el total de dinero gastado en las compras).
                    </p>
                    <div class="bg-slate-50 p-4 rounded font-mono text-xs text-slate-600">
                        # Inicialización antes del ciclo: suma = 0.0<br>
                        # Expresión de acumulación dentro del ciclo:<br>
                        <strong>acumulador = acumulador + valor_variable</strong>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Tabla de Equivalencias y Equivalencia Sintáctica
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Para tu evaluación práctica de laboratorio en la UPDS, es vital dominar la traducción de las estructuras cíclicas de Flowgorithm al código de Python:
            </p>

            <div class="overflow-x-auto bg-white rounded-2xl shadow-lg border border-slate-200">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase text-xs tracking-widest">
                            <th class="p-4 font-black">Ciclo Lógico</th>
                            <th class="p-4 font-black text-center">Estructura Flowgorithm</th>
                            <th class="p-4 font-black text-center">Código en Python</th>
                            <th class="p-4 font-black">Control del Límite de Ciclo</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-slate-700">
                        <tr class="border-b border-slate-100 hover:bg-slate-50">
                            <td class="p-4 font-bold">Bucle Determinado</td>
                            <td class="p-4 text-center">
                                <span class="bg-slate-100 text-slate-700 text-xs font-mono px-3 py-1.5 rounded border border-slate-200">Bloque Para (i = 1 to 5)</span>
                            </td>
                            <td class="p-4">
                                <pre class="text-xs text-blue-600 font-mono font-bold">for i in range(1, 6):<br>    print("Paso:", i)</pre>
                            </td>
                            <td class="p-4 text-xs"><code>range(1, 6)</code> se detiene exactamente al llegar al límite de 6 sin incluirlo (del 1 al 5).</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-slate-50">
                            <td class="p-4 font-bold">Bucle Indeterminado</td>
                            <td class="p-4 text-center">
                                <span class="bg-blue-50 text-blue-800 text-xs font-mono px-3 py-1.5 rounded border border-blue-100">Bloque Mientras (condición True)</span>
                            </td>
                            <td class="p-4">
                                <pre class="text-xs text-blue-600 font-mono font-bold">while respuesta == "si":<br>    respuesta = input("Seguir?")</pre>
                            </td>
                            <td class="p-4 text-xs">Exige modificar la variable dentro del ciclo para que la condición sea falsa en algún momento.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-4 font-bold">Validación Forzada</td>
                            <td class="p-4 text-center">
                                <span class="bg-purple-50 text-purple-800 text-xs font-mono px-3 py-1.5 rounded border border-purple-100">Ciclo Hacer / Mientras</span>
                            </td>
                            <td class="p-4">
                                <pre class="text-xs text-blue-600 font-mono font-bold">while True:<br>    nota = float(input())<br>    if 0 &lt;= nota &lt;= 100:<br>        break</pre>
                            </td>
                            <td class="p-4 text-xs">En Python se simula mediante un <code>while True</code> infinito y una estructura <code>if</code> interna con la salida <code>break</code>.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. Laboratorio de Control de Inventario en Supermercado TIA
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Para comprender cómo interactúan las estructuras repetitivas, de decisión, los acumuladores y contadores, codifica y ejecuta el siguiente script en tu cuaderno de Google Colab:
            </p>

            <div class="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm text-slate-200 mb-8">
                <div class="bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-700/50">
                    <span class="text-xs text-slate-400 font-bold"><i class="fas fa-code mr-2"></i> arqueo_caja_tia.py</span>
                    <div class="flex gap-1.5">
                        <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                        <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                        <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                    </div>
                </div>
                <pre class="p-6 overflow-x-auto leading-relaxed text-xs md:text-sm bg-slate-950"><code><span class="text-slate-500"># =========================================================</span>
<span class="text-slate-500"># ALGORITMO: CONTROL DE ADQUISICIÓN DE CAJA REGISTRADORA</span>
<span class="text-slate-500"># =========================================================</span>

<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"--- SUCURSAL SUD - SUPERMERCADO TIA ---"</span>)

<span class="text-slate-500"># 1. Inicializamos acumuladores y contadores (Cajas vacías antes del ciclo)</span>
total_caja = 0.0
contador_productos_caros = 0
limite_articulos = 5

<span class="text-slate-500"># 2. Ciclo Determinado para simular la compra de 5 artículos</span>
<span class="text-blue-400">for</span> i <span class="text-blue-400">in</span> <span class="text-blue-400">range</span>(1, limite_articulos + 1):
    precio = <span class="text-blue-400">float</span>(<span class="text-yellow-400">input</span>(<span class="text-emerald-400">"Ingrese el precio del producto "</span> + <span class="text-blue-400">str</span>(i) + <span class="text-emerald-400">" (Bs): "</span>))
    
    <span class="text-slate-500"># Acumulamos el precio en el total general de la caja</span>
    total_caja = total_caja + precio
    
    <span class="text-slate-500"># Condicional de verificación de producto de alto valor</span>
    <span class="text-blue-400">if</span> precio &gt; 150:
        <span class="text-yellow-400">print</span>(<span class="text-emerald-400">"-> ¡ALERTA: Producto de alto valor detectado!"</span>)
        <span class="text-slate-500"># Incrementamos el contador de alertas</span>
        contador_productos_caros = contador_productos_caros + 1

<span class="text-slate-500"># 3. Mostrar reportes finales de la venta (Fuera del ciclo)</span>
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"--------------------------------------------------"</span>)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"Registro de compra finalizado en Supermercado TIA"</span>)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"Monto total acumulado de la compra:"</span>, total_caja, <span class="text-emerald-400">"Bs."</span>)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"Articulos de alto valor comprados:"</span>, contador_productos_caros)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"--------------------------------------------------"</span>)</code></pre>
            </div>
        </section>

        <section class="mt-20 mb-10 bg-gradient-to-br from-[#001f3f] to-[#003366] p-8 md:p-12 rounded-[2rem] shadow-2xl text-white relative overflow-hidden">
            <i class="fas fa-arrows-spin absolute -right-10 -bottom-10 text-white/5 text-[20rem] transform -rotate-12"></i>
            <div class="relative z-10">
                <h3 class="text-3xl font-black uppercase text-blue-400 mb-6">Pautas de Laboratorio y Alertas Clave</h3>
                <p class="text-lg text-slate-200 leading-relaxed mb-8">
                    Para asegurar que tus bucles se ejecuten de forma controlada y sin colapsar el entorno de Google Colab, pon especial atención a estas tres pautas clave del Ing. Jaime Zambrana:
                </p>
                
                <div class="grid md:grid-cols-3 gap-6 font-mono text-xs">
                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h5 class="text-rose-400 font-bold uppercase mb-2 text-[11px] tracking-wider"><i class="fas fa-infinity mr-1"></i>Prevenir Bucles Infinitos</h5>
                        <p class="text-slate-300 leading-relaxed">
                            Al diseñar bucles basados en condiciones variables (<code>while</code>), asegúrate de que la variable de control se modifique **dentro** del cuerpo del bucle. Si la condición nunca se evalúa como falsa, el ciclo se ejecutará de forma interminable y congelará tu navegador.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h5 class="text-amber-400 font-bold uppercase mb-2 text-[11px] tracking-wider"><i class="fas fa-boxes-packing mr-1"></i>La Inicialización de Variables</h5>
                        <p class="text-slate-300 leading-relaxed">
                            Recuerda siempre declarar e inicializar tus acumuladores y contadores en <code>0</code> o <code>0.0</code> **antes** de que empiece la estructura repetitiva. Si los declaras adentro del ciclo, se reiniciarán en cada iteración y perderás el control de los datos anteriores.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>

    </div>
</div>
`;