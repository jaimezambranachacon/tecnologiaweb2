// content/texto_base_u02.js

const pag_texto_base_u02 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-20">
        <span class="text-[#00aaff] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-calculator text-lg"></i> TEXTO BASE / UNIDAD 2
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            TIPOS DE DATOS, VARIABLES Y<br>
            <span class="text-[#00aaff]">OPERADORES EN PYTHON</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Para que un programa tome decisiones o repita acciones, primero debe saber cómo procesar y transformar la información. En esta unidad exploraremos en profundidad las reglas para nombrar variables, las categorías de datos y la amplia gama de operadores que darán vida a tus primeros algoritmos comerciales.
        </p>
        <div class="h-2 w-24 bg-[#00aaff] mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. Reglas de Oro para Nombrar Variables
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                En el desarrollo de software, escribir código limpio y legible es una regla fundamental de sintaxis y buenas prácticas. Al declarar variables en Flowgorithm o Python, debemos seguir reglas estrictas para evitar errores de compilación o interpretación:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div class="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm">
                    <h4 class="text-xl font-black text-slate-700 uppercase mb-4"><i class="fas fa-ban text-rose-500 mr-2"></i>Reglas de Sintaxis (Obligatorias)</h4>
                    <ul class="space-y-3 text-sm text-slate-600">
                        <li class="flex items-start gap-2">
                            <i class="fas fa-times-circle text-rose-500 mt-1 flex-none"></i>
                            <span><strong>No empezar con números:</strong> Una variable puede contener números, pero su primer carácter debe ser siempre una letra o un guion bajo (por ejemplo: <code>nota1</code> es correcto, pero <code>1nota</code> marcará un error).</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-times-circle text-rose-500 mt-1 flex-none"></i>
                            <span><strong>Sin espacios vacíos:</strong> No puedes usar espacios intermedios. Para simular un espacio se utiliza la barra baja (<code>_</code>).</span>
                        </li>
                        <li class="flex items-start gap-2">
                            <i class="fas fa-times-circle text-rose-500 mt-1 flex-none"></i>
                            <span><strong>Evitar caracteres especiales:</strong> No uses tildes, eñes (ñ), ni símbolos especiales como <code>@</code>, <code>$</code>, <code>%</code>, etc.</span>
                        </li>
                    </ul>
                </div>

                <div class="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm">
                    <h4 class="text-xl font-black text-blue-800 uppercase mb-4"><i class="fas fa-check-double text-emerald-500 mr-2"></i>Buenas Prácticas (Estilo snake_case)</h4>
                    <p class="text-sm text-blue-950 leading-relaxed mb-4">
                        En Python, la guía de estilo oficial (PEP 8) recomienda escribir los nombres de las variables utilizando letras minúsculas unidas por guiones bajos. Esto se conoce en la industria como <strong>snake_case</strong>.
                    </p>
                    <div class="space-y-2 bg-white/60 p-4 rounded-xl text-xs font-mono border border-blue-100">
                        <div class="text-emerald-700"><i class="fas fa-check mr-2"></i><strong>Correcto:</strong> total_compra = 250.50</div>
                        <div class="text-emerald-700"><i class="fas fa-check mr-2"></i><strong>Correcto:</strong> nit_cliente = "4578120"</div>
                        <div class="text-rose-600"><i class="fas fa-times mr-2"></i><strong>Incorrecto:</strong> total compra = 250.50 (Tiene espacio)</div>
                        <div class="text-rose-600"><i class="fas fa-times mr-2"></i><strong>Incorrecto:</strong> nit-cliente = "4578120" (Usa guion medio)</div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. Tabla de Tipos de Datos Primitivos y sus Equivalencias
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Es fundamental que comprendas cómo se asocian las declaraciones del diagrama visual en Flowgorithm con el código real de Python. Aquí tienes una tabla comparativa y didáctica:
            </p>

            <div class="overflow-x-auto bg-white rounded-2xl shadow-lg border border-slate-200">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase text-xs tracking-widest">
                            <th class="p-4 font-black">Categoría</th>
                            <th class="p-4 font-black text-center">Declaración Flowgorithm</th>
                            <th class="p-4 font-black text-center">Tipo en Python</th>
                            <th class="p-4 font-black">Ejemplo Real</th>
                            <th class="p-4 font-black">Uso Frecuente en Laboratorio</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-slate-700">
                        <tr class="border-b border-slate-100 hover:bg-slate-50">
                            <td class="p-4 font-bold">Números Enteros</td>
                            <td class="p-4 text-center"><span class="bg-purple-100 text-purple-800 text-xs font-mono px-2.5 py-1 rounded-md">Entero</span></td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">int</td>
                            <td class="p-4 font-mono">15, 0, -23</td>
                            <td class="p-4 text-xs">Contar de forma exacta unidades de productos, edades, bucles o contadores.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-slate-50">
                            <td class="p-4 font-bold">Números Decimales</td>
                            <td class="p-4 text-center"><span class="bg-sky-100 text-sky-800 text-xs font-mono px-2.5 py-1 rounded-md">Real</span></td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">float</td>
                            <td class="p-4 font-mono">180.50, 3.14</td>
                            <td class="p-4 text-xs">Manejo de dinero (Bs.), cálculos de porcentajes, pesos, estatura o temperaturas.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-slate-50">
                            <td class="p-4 font-bold">Textos / Alfanuméricos</td>
                            <td class="p-4 text-center"><span class="bg-amber-100 text-amber-800 text-xs font-mono px-2.5 py-1 rounded-md">Cadena</span></td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">str</td>
                            <td class="p-4 font-mono">"Jaime Chacon"</td>
                            <td class="p-4 text-xs">Nombres de clientes, contraseñas, direcciones de correo, números de NIT o CI.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-4 font-bold">Lógicos / Booleanos</td>
                            <td class="p-4 text-center"><span class="bg-emerald-100 text-emerald-800 text-xs font-mono px-2.5 py-1 rounded-md">Booleano</span></td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">bool</td>
                            <td class="p-4 font-mono">True, False</td>
                            <td class="p-4 text-xs">Verificar si se cumple o no una condición lógica (ej: ¿tiene deudas? o ¿es mayor de edad?).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Operadores en Programación: El Motor de las Decisiones
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Los <strong>operadores</strong> son símbolos especiales que le indican al procesador de la computadora que realice cálculos matemáticos, comparaciones o uniones de condiciones lógicas. Se clasifican principalmente en tres grandes grupos esenciales:
            </p>

            <h4 class="text-2xl font-black text-[#003366] uppercase mb-4 tracking-tight">3.1. Operadores Aritméticos (Cálculos Matemáticos)</h4>
            <div class="overflow-x-auto bg-white rounded-2xl shadow-md border border-slate-200 mb-12">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-slate-100 text-slate-700 uppercase text-xs tracking-widest border-b border-slate-200">
                            <th class="p-4 font-black">Operación</th>
                            <th class="p-4 font-black text-center">Símbolo en C / Python</th>
                            <th class="p-4 font-black">Ejemplo de Código</th>
                            <th class="p-4 font-black">Resultado Real</th>
                            <th class="p-4 font-black">Uso en el Supermercado TIA</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-slate-600">
                        <tr class="border-b border-slate-100">
                            <td class="p-4 font-bold">Suma</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">+</td>
                            <td class="p-4 font-mono">subtotal + impuestos</td>
                            <td class="p-4 font-mono">100 + 13 = 113</td>
                            <td class="p-4 text-xs">Incrementar el acumulador del total a pagar por los productos registrados.</td>
                        </tr>
                        <tr class="border-b border-slate-100">
                            <td class="p-4 font-bold">Resta</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">-</td>
                            <td class="p-4 font-mono">total - descuento</td>
                            <td class="p-4 font-mono">150 - 10 = 140</td>
                            <td class="p-4 text-xs">Aplicar descuentos promocionales de socio al costo total de la compra.</td>
                        </tr>
                        <tr class="border-b border-slate-100">
                            <td class="p-4 font-bold">Multiplicación</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">*</td>
                            <td class="p-4 font-mono">precio * cantidad</td>
                            <td class="p-4 font-mono">45.50 * 2 = 91.0</td>
                            <td class="p-4 text-xs">Calcular el costo parcial de un artículo según la cantidad ingresada.</td>
                        </tr>
                        <tr class="border-b border-slate-100">
                            <td class="p-4 font-bold">División Decimal</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">/</td>
                            <td class="p-4 font-mono">total / clientes</td>
                            <td class="p-4 font-mono">10 / 4 = 2.5</td>
                            <td class="p-4 text-xs">Obtener promedios exactos de venta o reparticiones con precisión de centavos.</td>
                        </tr>
                        <tr class="border-b border-slate-100">
                            <td class="p-4 font-bold">División Entera</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">//</td>
                            <td class="p-4 font-mono">total // clientes</td>
                            <td class="p-4 font-mono">10 // 4 = 2</td>
                            <td class="p-4 text-xs">Obtener únicamente el cociente entero (sin decimales) al realizar reparticiones.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-4 font-bold">Residuo o Módulo</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">%</td>
                            <td class="p-4 font-mono">numero % 2</td>
                            <td class="p-4 font-mono">15 % 4 = 3</td>
                            <td class="p-4 text-xs">Determinar si un número es par o impar (ej: <code>numero % 2 == 0</code> es par).</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-2xl font-black text-[#003366] uppercase mb-4 tracking-tight">3.2. Operadores Relacionales (Para tomar decisiones)</h4>
            <p class="text-sm text-slate-500 mb-4 leading-relaxed">
                Toman dos datos y los comparan entre sí. <strong>El resultado de cualquier comparación siempre será un valor Booleano</strong>: Verdadero (<code>True</code>) o Falso (<code>False</code>).
            </p>
            <div class="overflow-x-auto bg-white rounded-2xl shadow-md border border-slate-200 mb-12">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-slate-100 text-slate-700 uppercase text-xs tracking-widest border-b border-slate-200">
                            <th class="p-4 font-black">Comparación</th>
                            <th class="p-4 font-black text-center">Símbolo</th>
                            <th class="p-4 font-black">Ejemplo de Evaluación</th>
                            <th class="p-4 font-black">Resultado Lógico</th>
                            <th class="p-4 font-black">Uso en Condicionales</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-slate-600">
                        <tr class="border-b border-slate-100">
                            <td class="p-4 font-bold">Igual a</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">==</td>
                            <td class="p-4 font-mono">es_socio == "si"</td>
                            <td class="p-4 font-mono">"si" == "no" &rarr; False</td>
                            <td class="p-4 text-xs">Validar si un usuario ingresó exactamente una opción esperada.</td>
                        </tr>
                        <tr class="border-b border-slate-100">
                            <td class="p-4 font-bold">Diferente de</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">!=</td>
                            <td class="p-4 font-mono">total != 0</td>
                            <td class="p-4 font-mono">5 != 0 &rarr; True</td>
                            <td class="p-4 text-xs">Asegurar que una variable contiene datos válidos antes de proceder a calcular.</td>
                        </tr>
                        <tr class="border-b border-slate-100">
                            <td class="p-4 font-bold">Mayor que</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">&gt;</td>
                            <td class="p-4 font-mono">precio > 150</td>
                            <td class="p-4 font-mono">200 > 150 &rarr; True</td>
                            <td class="p-4 text-xs">Alertar si un producto en el Supermercado TIA es calificado de "alto valor".</td>
                        </tr>
                        <tr class="border-b border-slate-100">
                            <td class="p-4 font-bold">Menor que</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">&lt;</td>
                            <td class="p-4 font-mono">edad &lt; 18</td>
                            <td class="p-4 font-mono">15 &lt; 18 &rarr; True</td>
                            <td class="p-4 text-xs">Identificar menores de edad para aplicar restricciones lógicas de seguridad.</td>
                        </tr>
                        <tr class="border-b border-slate-100">
                            <td class="p-4 font-bold">Mayor o Igual que</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">&gt;=</td>
                            <td class="p-4 font-mono">nota >= 51</td>
                            <td class="p-4 font-mono">51 >= 51 &rarr; True</td>
                            <td class="p-4 text-xs">Validar si la nota de aprobación del estudiante de la UPDS es suficiente.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-4 font-bold">Menor o Igual que</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">&lt;=</td>
                            <td class="p-4 font-mono">precio &lt;= 50</td>
                            <td class="p-4 font-mono">60 &lt;= 50 &rarr; False</td>
                            <td class="p-4 text-xs">Verificar si el monto total aplica para envíos gratuitos o promocionales.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 class="text-2xl font-black text-[#003366] uppercase mb-4 tracking-tight">3.3. Operadores Lógicos (Compuertas lógicas AND, OR, NOT)</h4>
            <p class="text-sm text-slate-500 mb-4 leading-relaxed">
                Permiten unir dos o más comparaciones para crear condiciones lógicas complejas[cite: 10].
            </p>
            <div class="overflow-x-auto bg-white rounded-2xl shadow-md border border-slate-200">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-slate-100 text-slate-700 uppercase text-xs tracking-widest border-b border-slate-200">
                            <th class="p-4 font-black">Compuerta</th>
                            <th class="p-4 font-black text-center">En Flowgorithm</th>
                            <th class="p-4 font-black text-center">En Python</th>
                            <th class="p-4 font-black">Regla Lógica Esencial</th>
                            <th class="p-4 font-black">Ejemplo Real en Código</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-slate-600">
                        <tr class="border-b border-slate-100">
                            <td class="p-4 font-bold">Y Lógico (AND)</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">&& o AND</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">and</td>
                            <td class="p-4 text-xs">Da <strong>Verdadero</strong> solo si <strong>todas</strong> las condiciones unidas se cumplen al mismo tiempo.</td>
                            <td class="p-4 font-mono text-xs"><code>edad >= 18 and tiene_ci == "si"</code></td>
                        </tr>
                        <tr class="border-b border-slate-100">
                            <td class="p-4 font-bold">O Lógico (OR)</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">|| o OR</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">or</td>
                            <td class="p-4 text-xs">Da <strong>Verdadero</strong> si **al menos una** de las condiciones se cumple.</td>
                            <td class="p-4 font-mono text-xs"><code>lleva_efectivo == "si" or es_socio == "si"</code></td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-4 font-bold">Negación (NOT)</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">! o NOT</td>
                            <td class="p-4 text-center font-mono font-bold text-blue-600">not</td>
                            <td class="p-4 text-xs"><strong>Invierte</strong> el valor lógico original. El <code>True</code> se vuelve <code>False</code>, y viceversa.</td>
                            <td class="p-4 font-mono text-xs"><code>not tiene_deuda</code> (si no tiene deudas en biblioteca)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. Laboratorio Práctico: Descuentos Inteligentes
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Para consolidar el uso de variables, tipos de datos y operadores en tu cuaderno de Google Colab, codifica y ejecuta el siguiente script. Este simula el cobro en el Supermercado TIA aplicando compuertas lógicas:
            </p>

            <div class="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm text-slate-200 mb-8">
                <div class="bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-700/50">
                    <span class="text-xs text-slate-400 font-bold"><i class="fas fa-code mr-2"></i> caja_descuentos.py</span>
                    <div class="flex gap-1.5">
                        <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                        <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                        <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                    </div>
                </div>
                <pre class="p-6 overflow-x-auto leading-relaxed text-xs md:text-sm bg-slate-950"><code><span class="text-slate-500"># =========================================================</span>
<span class="text-slate-500"># PROGRAMA: VALIDADOR DE PROMOCIONES EN SUPERMERCADO TIA</span>
<span class="text-slate-500"># =========================================================</span>

<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"--- SUCURSAL SANTA CRUZ - SUPERMERCADO TIA ---"</span>)

<span class="text-slate-500"># 1. Registro de variables de entrada</span>
monto_total = <span class="text-blue-400">float</span>(<span class="text-yellow-400">input</span>(<span class="text-emerald-400">"Ingrese el total de la compra (Bs): "</span>))
cantidad_articulos = <span class="text-blue-400">int</span>(<span class="text-yellow-400">input</span>(<span class="text-emerald-400">"¿Cuántos artículos lleva?: "</span>))
tiene_tarjeta = <span class="text-yellow-400">input</span>(<span class="text-emerald-400">"¿Posee tarjeta de socio? (si/no): "</span>)

<span class="text-slate-500"># Normalizamos la respuesta a minúsculas para evaluar con seguridad</span>
es_socio = tiene_tarjeta.lower() == <span class="text-emerald-400">"si"</span>

<span class="text-slate-500"># 2. Evaluación con operadores lógicos y relacionales</span>
<span class="text-slate-500"># Regla: Aplica 10% de descuento si compra más de 100 Bs Y es socio</span>
aplica_descuento_especial = monto_total &gt; <span class="text-orange-400">100</span> <span class="text-blue-400">and</span> es_socio

<span class="text-slate-500"># 3. Mostrar los resultados de las comprobaciones lógicas</span>
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"--------------------------------------------------"</span>)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"¿Es cliente socio registrado?:"</span>, es_socio)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"¿Aplica para el descuento del 10%?:"</span>, aplica_descuento_especial)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"--------------------------------------------------"</span>)

<span class="text-slate-500"># 4. Cálculo final condicional rápido</span>
<span class="text-blue-400">if</span> aplica_descuento_especial:
    descuento = monto_total * <span class="text-orange-400">0.10</span>
    total_final = monto_total - descuento
    <span class="text-yellow-400">print</span>(<span class="text-emerald-400">"¡Felicidades! Se aplicó un descuento de:"</span>, descuento, <span class="text-emerald-400">"Bs."</span>)
<span class="text-blue-400">else</span>:
    total_final = monto_total
    <span class="text-yellow-400">print</span>(<span class="text-emerald-400">"Siga acumulando compras para obtener beneficios."</span>)

<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"Monto final a cancelar:"</span>, total_final, <span class="text-emerald-400">"Bs."</span>)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"--------------------------------------------------"</span>)</code></pre>
            </div>
        </section>

        <section class="mt-20 mb-10 bg-gradient-to-br from-[#001f3f] to-[#003366] p-8 md:p-12 rounded-[2rem] shadow-2xl text-white relative overflow-hidden">
            <i class="fas fa-exclamation-circle absolute -right-10 -bottom-10 text-white/5 text-[20rem] transform -rotate-12"></i>
            <div class="relative z-10">
                <h3 class="text-3xl font-black uppercase text-blue-400 mb-6">Pautas de Laboratorio y Alertas Clave</h3>
                <p class="text-lg text-slate-200 leading-relaxed mb-8">
                    Para asegurar que tu código funcione sin problemas al interactuar con operadores en Google Colab, ten presentes estas tres advertencias del Ing. Jaime Zambrana:
                </p>
                
                <div class="grid md:grid-cols-3 gap-6 font-mono text-xs">
                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h5 class="text-rose-400 font-bold uppercase mb-2 text-[11px] tracking-wider"><i class="fas fa-equals mr-1"></i>Asignar vs Comparar</h5>
                        <p class="text-slate-300 leading-relaxed">
                            El signo de igual sencillo (<code>=</code>) se utiliza únicamente para <strong>asignar</strong> o guardar un valor en una variable. Si quieres realizar una <strong>comparación de igualdad</strong> en una decisión lógica, debes usar el doble igual (<code>==</code>) de manera obligatoria.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h5 class="text-amber-400 font-bold uppercase mb-2 text-[11px] tracking-wider"><i class="fas fa-text-height mr-1"></i>Mayúsculas y Minúsculas</h5>
                        <p class="text-slate-300 leading-relaxed">
                            Tanto Python como Flowgorithm son sensibles a las diferencias de tamaño de letra (Case-Sensitive). La palabra clave <code>and</code> en Python es válida, pero escribir <code>AND</code> causará que el intérprete aborte la ejecución del programa con un error de sintaxis.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h5 class="text-cyan-400 font-bold uppercase mb-2 text-[11px] tracking-wider"><i class="fas fa-list-ol mr-1"></i>Jerarquía de Operadores</h5>
                        <p class="text-slate-300 leading-relaxed">
                            Al combinar cálculos, recuerda la jerarquía de las matemáticas. Python evalúa primero multiplicaciones/divisiones, y luego sumas/restas. Si quieres forzar que un cálculo se realice antes, debes encerrarlo entre paréntesis obligatoriamente: <code>(total + impuesto) * descuento</code>.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;