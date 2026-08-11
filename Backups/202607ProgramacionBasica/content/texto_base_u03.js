// content/texto_base_u03.js

const pag_texto_base_u03 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-20">
        <span class="text-[#00aaff] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-code-branch text-lg"></i> TEXTO BASE / UNIDAD 3
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            ESTRUCTURAS DE CONTROL<br>
            <span class="text-[#00aaff]">CONDICIONAL</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            La inteligencia de un programa radica en su capacidad de elegir qué camino tomar bajo diferentes circunstancias. En esta unidad aprenderás a bifurcar el flujo lógico de tus algoritmos aplicando decisiones simples, dobles y anidadas combinadas con un análisis booleano riguroso.
        </p>
        <div class="h-2 w-24 bg-[#00aaff] mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. Concepto de Bifurcación y Flujo de Control
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                Hasta ahora, nuestros programas se han ejecutado de manera estrictamente lineal (secuencial): una línea de código se procesa inmediatamente después de la otra. Sin embargo, los problemas reales requieren que el sistema tome decisiones evaluando una <strong>expresión lógica</strong>. Las estructuras condicionales nos permiten desviar el camino del flujo de ejecución basándonos en si una condición resulta ser verdadera o falsa.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                        <div class="w-10 h-10 bg-[#003366] text-white rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-arrow-right-long"></i>
                        </div>
                        <h4 class="text-lg font-black text-[#003366] uppercase mb-2">Condicional Simple</h4>
                        <p class="text-xs text-slate-500 leading-relaxed">
                            Evalúa una condición. Si se cumple (es verdadera), ejecuta un bloque específico de instrucciones. Si no se cumple (es falsa), simplemente continúa el programa original sin hacer nada adicional.
                        </p>
                    </div>
                    <span class="text-[11px] font-mono font-bold text-slate-400 mt-4">Sintaxis: if</span>
                </div>

                <div class="p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <div class="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-shuffle"></i>
                        </div>
                        <h4 class="text-lg font-black text-blue-800 uppercase mb-2">Condicional Doble</h4>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Define dos caminos excluyentes. Si la evaluación lógica resulta verdadera, ejecuta el camino "A". Si es falsa, ejecuta de forma obligatoria el bloque "B" mediante la instrucción de escape.
                        </p>
                    </div>
                    <span class="text-[11px] font-mono font-bold text-blue-500 mt-4">Sintaxis: if / else</span>
                </div>

                <div class="p-6 bg-purple-50 rounded-2xl border border-purple-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <div class="w-10 h-10 bg-purple-600 text-white rounded-xl flex items-center justify-center mb-4">
                            <i class="fas fa-network-wired"></i>
                        </div>
                        <h4 class="text-lg font-black text-purple-800 uppercase mb-2">Anidada / Múltiple</h4>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Permite encadenar múltiples preguntas lógicas secuenciales. Se utiliza cuando el problema presenta tres o más opciones posibles de resolución excluyentes entre sí.
                        </p>
                    </div>
                    <span class="text-[11px] font-mono font-bold text-purple-500 mt-4">Sintaxis: if / elif / else</span>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. Análisis Booleano y Compuertas Lógicas (AND, OR, NOT)
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Una condición simple (como <code>precio > 150</code>) a veces se queda corta ante la complejidad organizacional. Para evaluar escenarios combinados, empleamos el **análisis booleano** y las compuertas lógicas estándar:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="bg-blue-100 text-blue-800 text-[10px] font-black uppercase px-2 py-0.5 rounded">AND (Y)</span>
                        <h4 class="font-bold text-slate-800 text-sm">Multiplicación Lógica</h4>
                    </div>
                    <p class="text-xs text-slate-500 leading-relaxed mb-3">
                        Para que todo el bloque sea verdadero, <strong>todas</strong> las subcondiciones evaluadas deben ser verdaderas sin excepción. Un solo elemento falso anula todo el resultado.
                    </p>
                    <div class="bg-slate-50 p-3 rounded font-mono text-[10px] text-slate-600">
                        True and True &rarr; <span class="text-emerald-600">True</span><br>
                        True and False &rarr; <span class="text-rose-600">False</span>
                    </div>
                </div>

                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="bg-cyan-100 text-cyan-800 text-[10px] font-black uppercase px-2 py-0.5 rounded">OR (O)</span>
                        <h4 class="font-bold text-slate-800 text-sm">Adición Lógica</h4>
                    </div>
                    <p class="text-xs text-slate-500 leading-relaxed mb-3">
                        Es flexible. Basta con que **al menos una** de las subcondiciones resulte verdadera para que todo el bloque se evalúe como verdadero. Solo es falso si todas son falsas.
                    </p>
                    <div class="bg-slate-50 p-3 rounded font-mono text-[10px] text-slate-600">
                        True or False &rarr; <span class="text-emerald-600">True</span><br>
                        False or False &rarr; <span class="text-rose-600">False</span>
                    </div>
                </div>

                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div class="flex items-center gap-2 mb-3">
                        <span class="bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase px-2 py-0.5 rounded">NOT (NO)</span>
                        <h4 class="font-bold text-slate-800 text-sm">Inversión Lógica</h4>
                    </div>
                    <p class="text-xs text-slate-500 leading-relaxed mb-3">
                        Es un operador unario. Actúa directamente sobre un único valor lógico o resultado de comparación, invirtiendo su estado de manera instantánea.
                    </p>
                    <div class="bg-slate-50 p-3 rounded font-mono text-[10px] text-slate-600">
                        not True &rarr; <span class="text-rose-600">False</span><br>
                        not False &rarr; <span class="text-emerald-600">True</span>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Tabla de Equivalencias de Bloques lógicos
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Aprender a transcribir un rombo de decisión visual de Flowgorithm al código de Python es la habilidad clave para tu evaluación práctica de laboratorio:
            </p>

            <div class="overflow-x-auto bg-white rounded-2xl shadow-lg border border-slate-200">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase text-xs tracking-widest">
                            <th class="p-4 font-black">Esquema en Pizarra</th>
                            <th class="p-4 font-black text-center">Diseño en Flowgorithm</th>
                            <th class="p-4 font-black text-center">Código en Python</th>
                            <th class="p-4 font-black">Regla de Sangría (Indentación)</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-slate-700">
                        <tr class="border-b border-slate-100 hover:bg-slate-50">
                            <td class="p-4 font-bold">Decisión Simple</td>
                            <td class="p-4 text-center">
                                <span class="bg-slate-100 text-slate-700 text-xs font-mono px-3 py-1.5 rounded border border-slate-200">Rombo if (rama falsa vacía)</span>
                            </td>
                            <td class="p-4">
                                <pre class="text-xs text-blue-600 font-mono font-bold">if precio > 150:<br>    print("Alerta")</pre>
                            </td>
                            <td class="p-4 text-xs">La línea interna del print lleva exactamente **4 espacios de margen** a la derecha.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-slate-50">
                            <td class="p-4 font-bold">Decisión Doble</td>
                            <td class="p-4 text-center">
                                <span class="bg-blue-50 text-blue-800 text-xs font-mono px-3 py-1.5 rounded border border-blue-100">Rombo if/else (ambas ramas con flujo)</span>
                            </td>
                            <td class="p-4">
                                <pre class="text-xs text-blue-600 font-mono font-bold">if nota >= 51:<br>    print("Aprobado")<br>else:<br>    print("Reprobado")</pre>
                            </td>
                            <td class="p-4 text-xs">Las palabras claves <code>if</code> y <code>else</code> van alineadas al ras del margen izquierdo.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-4 font-bold">Decisión Múltiple</td>
                            <td class="p-4 text-center">
                                <span class="bg-purple-50 text-purple-800 text-xs font-mono px-3 py-1.5 rounded border border-purple-100">Rombos anidados secuenciales</span>
                            </td>
                            <td class="p-4">
                                <pre class="text-xs text-blue-600 font-mono font-bold">if nota >= 85:<br>    print("Excelente")<br>elif nota >= 51:<br>    print("Aprobado")<br>else:<br>    print("Reprobado")</pre>
                            </td>
                            <td class="p-4 text-xs">La palabra clave <code>elif</code> (abreviatura de <em>else if</em>) permite agregar condiciones extras sin ganar márgenes innecesarios.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. Laboratorio de Control de Caja en Supermercado TIA
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Para comprender cómo interactúan las condicionales simples, dobles y el análisis booleano combinados, codifica el siguiente algoritmo transaccional diseñado para la caja del **Supermercado TIA**:
            </p>

            <div class="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm text-slate-200 mb-8">
                <div class="bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-700/50">
                    <span class="text-xs text-slate-400 font-bold"><i class="fas fa-code mr-2"></i> caja_inteligente_tia.py</span>
                    <div class="flex gap-1.5">
                        <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                        <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                        <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                    </div>
                </div>
                <pre class="p-6 overflow-x-auto leading-relaxed text-xs md:text-sm bg-slate-950"><code><span class="text-slate-500"># =========================================================</span>
<span class="text-slate-500"># ALGORITMO: CONTROLADOR INTELIGENTE DE TRANSACCIONES</span>
<span class="text-slate-500"># =========================================================</span>

<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"--- SUCURSAL PORTAL TIA - PUNTO DE VENTA ---"</span>)

<span class="text-slate-500"># 1. Ingreso de variables generales</span>
monto_total = <span class="text-blue-400">float</span>(<span class="text-yellow-400">input</span>(<span class="text-emerald-400">"Monto total de la compra (Bs): "</span>))
tiene_tarjeta_fidelidad = <span class="text-yellow-400">input</span>(<span class="text-emerald-400">"¿Tiene tarjeta de fidelidad? (si/no): "</span>).lower() == <span class="text-emerald-400">"si"</span>
lleva_producto_restringido = <span class="text-yellow-400">input</span>(<span class="text-emerald-400">"¿Lleva bebidas alcoholicas? (si/no): "</span>).lower() == <span class="text-emerald-400">"si"</span>

<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"--------------------------------------------------"</span>)

<span class="text-slate-500"># 2. Condicional Simple: Alerta de Alto Valor</span>
<span class="text-blue-400">if</span> monto_total &gt; <span class="text-orange-400">150</span>:
    <span class="text-yellow-400">print</span>(<span class="text-emerald-400">"-> ¡ALERTA! Producto o transaccion de alto valor detectado."</span>)

<span class="text-slate-500"># 3. Condicional Doble con Validación Booleana (Control de Edad si lleva restringido)</span>
<span class="text-blue-400">if</span> lleva_producto_restringido:
    edad_cliente = <span class="text-blue-400">int</span>(<span class="text-yellow-400">input</span>(<span class="text-emerald-400">"Ingrese la edad del cliente para autorizacion: "</span>))
    
    <span class="text-blue-400">if</span> edad_cliente &gt;= <span class="text-orange-400">18</span>:
        <span class="text-yellow-400">print</span>(<span class="text-emerald-400">"-> Venta de bebida autorizada."</span>)
    <span class="text-blue-400">else</span>:
        <span class="text-yellow-400">print</span>(<span class="text-emerald-400">"-> ¡VENTA RECHAZADA! Prohibido vender a menores de edad."</span>)
        monto_total = <span class="text-orange-400">0.0</span> <span class="text-slate-500"># Anulamos la venta</span>

<span class="text-slate-500"># 4. Condicional Múltiple para Aplicación de Descuentos Especiales</span>
<span class="text-blue-400">if</span> monto_total &gt; <span class="text-orange-400">200</span> <span class="text-blue-400">and</span> tiene_tarjeta_fidelidad:
    descuento = monto_total * <span class="text-orange-400">0.15</span> <span class="text-slate-500"># 15% Descuento</span>
    <span class="text-yellow-400">print</span>(<span class="text-emerald-400">"-> Descuento de Socio VIP Aplicado (15%)."</span>)
<span class="text-blue-400">elif</span> tiene_tarjeta_fidelidad:
    descuento = monto_total * <span class="text-orange-400">0.05</span> <span class="text-slate-500"># 5% Descuento</span>
    <span class="text-yellow-400">print</span>(<span class="text-emerald-400">"-> Descuento de Socio Regular Aplicado (5%)."</span>)
<span class="text-blue-400">else</span>:
    descuento = <span class="text-orange-400">0.0</span>
    <span class="text-yellow-400">print</span>(<span class="text-emerald-400">"-> No aplica descuentos. Invite al cliente a registrarse."</span>)

<span class="text-slate-500"># 5. Salida e Impresión de Facturación</span>
total_pagar = monto_total - descuento
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"--------------------------------------------------"</span>)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"Monto a Pagar Final:"</span>, total_pagar, <span class="text-emerald-400">"Bs."</span>)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"--------------------------------------------------"</span>)</code></pre>
            </div>
        </section>

        <section class="mt-20 mb-10 bg-gradient-to-br from-[#001f3f] to-[#003366] p-8 md:p-12 rounded-[2rem] shadow-2xl text-white relative overflow-hidden">
            <i class="fas fa-exclamation-triangle absolute -right-10 -bottom-10 text-white/5 text-[20rem] transform -rotate-12"></i>
            <div class="relative z-10">
                <h3 class="text-3xl font-black uppercase text-blue-400 mb-6">Pautas de Laboratorio y Alertas Clave</h3>
                <p class="text-lg text-slate-200 leading-relaxed mb-8">
                    Para que tu código compile y se ejecute limpiamente sin errores lógicos o excepciones de sintaxis, considera estas tres reglas doradas:
                </p>
                
                <div class="grid md:grid-cols-3 gap-6 font-mono text-xs">
                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h5 class="text-rose-400 font-bold uppercase mb-2 text-[11px] tracking-wider"><i class="fas fa-colon mr-1"></i>Regla de los Dos Puntos</h5>
                        <p class="text-slate-300 leading-relaxed">
                            Al final de cada línea de declaración de condiciones (ya sea <code>if</code>, <code>elif</code> o <code>else</code>), debes colocar **dos puntos (<code>:</code>)** de forma obligatoria. Si los omites, el compilador lanzará un error que detendrá el escaneo.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h5 class="text-amber-400 font-bold uppercase mb-2 text-[11px] tracking-wider"><i class="fas fa-indent mr-1"></i>Espaciado de Código (Indenting)</h5>
                        <p class="text-slate-300 leading-relaxed">
                            Asegúrate de que todo el bloque de código que pertenezca a la decisión tenga la misma cantidad de espacios hacia la derecha. Si mezclas tabuladores y espacios, Python lanzará un error de identación (<code>IndentationError</code>).
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h5 class="text-cyan-400 font-bold uppercase mb-2 text-[11px] tracking-wider"><i class="fas fa-arrows-split-up-and-left mr-1"></i>Evitar Condiciones Redundantes</h5>
                        <p class="text-slate-300 leading-relaxed">
                            No repitas preguntas que el flujo ya descartó de forma lógica. Por ejemplo, en un bloque donde la primera condición fue <code>nota >= 51</code>, al pasar al <code>elif</code> o al <code>else</code> es innecesario preguntar si la nota es menor a 51, pues el flujo ya lo da por sentado.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;