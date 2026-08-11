// content/texto_base_u05.js

const pag_texto_base_u05 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-20">
        <span class="text-[#00aaff] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-font text-lg"></i> TEXTO BASE / UNIDAD 5
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            FUNCIONES Y PROCESAMIENTO<br>
            <span class="text-[#00aaff]">DE CADENAS EN PYTHON</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Un buen ingeniero no duplica código; construye herramientas modulares reutilizables y procesa información con precisión. En esta unidad aprenderás a definir tus propias funciones y a dominar la manipulación avanzada de cadenas de caracteres para dar un formato profesional a tus datos de salida.
        </p>
        <div class="h-2 w-24 bg-[#00aaff] mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. El Paradigma Modular: ¿Qué es una Función?
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                A medida que los programas crecen, escribir todo el código en un único bloque secuencial se vuelve inmanejable. Una <strong>función</strong> es un bloque de código organizado, independiente y reutilizable que realiza una tarea específica. Al dividir un problema grande en pequeños subprogramas, aplicamos el principio de <em>"divide y vencerás"</em>, facilitando la depuración y mantenimiento del software.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div class="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
                    <div>
                        <div class="w-12 h-12 bg-[#003366] text-white rounded-xl flex items-center justify-center text-xl mb-4 shadow-md">
                            <i class="fas fa-cubes"></i>
                        </div>
                        <h4 class="text-2xl font-black text-[#003366] uppercase mb-4">Parámetros y Retorno</h4>
                        <p class="text-sm text-slate-600 leading-relaxed">
                            Las funciones pueden recibir datos de entrada llamados <strong>parámetros</strong> (las materias primas con las que trabajarán) y pueden devolver un resultado procesado final al programa principal utilizando la palabra clave <code>return</code>.
                        </p>
                    </div>
                    <span class="text-[11px] font-mono font-bold text-slate-400 mt-4">Sintaxis en Python: def mi_funcion(parametro):</span>
                </div>

                <div class="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm flex flex-col justify-between">
                    <div>
                        <div class="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl mb-4 shadow-md">
                            <i class="fas fa-calculator"></i>
                        </div>
                        <h4 class="text-2xl font-black text-blue-800 uppercase mb-4">La Analogía de la Calculadora</h4>
                        <p class="text-sm text-blue-900 leading-relaxed">
                            Imagina una función como una tecla de tu calculadora. Tú presionas el botón de "Raíz Cuadrada" y le pasas un número (parámetro). La calculadora realiza un proceso interno invisible para ti y te devuelve el resultado en la pantalla (retorno). Tú no necesitas saber cómo calcula la raíz, solo cómo usar la función.
                        </p>
                    </div>
                    <span class="text-[11px] font-mono font-bold text-blue-500 mt-4">Principio de Abstracción de Software</span>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. Caracteres, Cadenas y la Norma de Codificación ASCII
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Las computadoras solo entienden números binarios (ceros y unos). Para almacenar letras, símbolos y números como texto, se requiere una norma de traducción. La norma **ASCII (American Standard Code for Information Interchange)** asigna un número entero único (de 0 a 127) a cada carácter estándar:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <h4 class="font-black text-slate-800 text-lg mb-3"><i class="fas fa-barcode text-blue-500 mr-2"></i>El Mapa de Caracteres</h4>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        Cada letra que presionas en el teclado se almacena internamente como su equivalente numérico ASCII. Por ejemplo, la letra **'A' mayúscula** equivale al número <strong>65</strong>, mientras que la **'a' minúscula** equivale al <strong>97</strong>.
                    </p>
                    <div class="bg-slate-50 p-3 rounded font-mono text-[11px] text-slate-600">
                        ord('A') &rarr; 65 (Obtiene el código numérico ASCII)<br>
                        chr(65) &rarr; 'A' (Convierte el número a su carácter ASCII)
                    </div>
                </div>

                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <h4 class="font-black text-slate-800 text-lg mb-3"><i class="fas fa-paragraph text-indigo-500 mr-2"></i>Caracteres de Control Especiales</h4>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        Existen caracteres invisibles que controlan el formato del texto en pantalla. Los más utilizados en el laboratorio de programación básica son:
                    </p>
                    <ul class="space-y-1.5 text-xs text-slate-600 font-mono">
                        <li><code>\\n</code> &rarr; Salto de línea (pasa el cursor al renglón de abajo)</li>
                        <li><code>\\t</code> &rarr; Tabulador horizontal (crea un espaciado regular)</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Tabla de Operaciones Esenciales con Cadenas
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                El procesamiento de cadenas (String Slicing y Métodos de Texto) te permitirá limpiar datos, formatear recibos y validar la autenticidad de los registros comerciales. Aquí tienes las operaciones ineludibles:
            </p>

            <div class="overflow-x-auto bg-white rounded-2xl shadow-lg border border-slate-200">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase text-xs tracking-widest">
                            <th class="p-4 font-black">Operación</th>
                            <th class="p-4 font-black">Sintaxis en Python</th>
                            <th class="p-4 font-black">Ejemplo de Entrada</th>
                            <th class="p-4 font-black">Resultado Devuelto</th>
                            <th class="p-4 font-black">Aplicación Práctica (Supermercado TIA)</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-slate-700">
                        <tr class="border-b border-slate-100 hover:bg-slate-50">
                            <td class="p-4 font-bold">Concatenación</td>
                            <td class="p-4 font-mono text-xs text-blue-600">texto1 + texto2</td>
                            <td class="p-4 font-mono text-xs">"Asiento #" + str(5)</td>
                            <td class="p-4 font-mono text-xs">"Asiento #5"</td>
                            <td class="p-4 text-xs">Unir mensajes informativos con variables numéricas convertidas a texto.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-slate-50">
                            <td class="p-4 font-bold">Número de caracteres</td>
                            <td class="p-4 font-mono text-xs text-blue-600">len(cadena)</td>
                            <td class="p-4 font-mono text-xs">len("102487")</td>
                            <td class="p-4 font-mono text-xs">6</td>
                            <td class="p-4 text-xs">Validar la longitud correcta de un número de NIT o cédula de identidad del cliente.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-slate-50">
                            <td class="p-4 font-bold">Conversión a Mayúsculas</td>
                            <td class="p-4 font-mono text-xs text-blue-600">cadena.upper()</td>
                            <td class="p-4 font-mono text-xs">"tia".upper()</td>
                            <td class="p-4 font-mono text-xs">"TIA"</td>
                            <td class="p-4 text-xs">Normalizar nombres de clientes para que se guarden uniformemente sin importar cómo se escribieron.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-slate-50">
                            <td class="p-4 font-bold">Conversión a Minúsculas</td>
                            <td class="p-4 font-mono text-xs text-blue-600">cadena.lower()</td>
                            <td class="p-4 font-mono text-xs">"SI".lower()</td>
                            <td class="p-4 font-mono text-xs">"si"</td>
                            <td class="p-4 text-xs">Estandarizar respuestas afirmativas o negativas de toma de decisión de un condicional.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-slate-50">
                            <td class="p-4 font-bold">Extracción (Subcadenas)</td>
                            <td class="p-4 font-mono text-xs text-blue-600">cadena[inicio:fin]</td>
                            <td class="p-4 font-mono text-xs">"Bolivia"[0:3]</td>
                            <td class="p-4 font-mono text-xs">"Bol"</td>
                            <td class="p-4 text-xs">Extraer códigos de barra, prefijos telefónicos, o las iniciales del comprador.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-4 font-bold">Multiplicación de texto</td>
                            <td class="p-4 font-mono text-xs text-blue-600">cadena * n</td>
                            <td class="p-4 font-mono text-xs">"-" * 5</td>
                            <td class="p-4 font-mono text-xs">"-----"</td>
                            <td class="p-4 text-xs">Generar rápidamente separadores de línea estéticos para organizar tickets y recibos.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. Laboratorio Práctico: Generador de Recibos Automatizado
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Codifica el siguiente script en tu cuaderno de Google Colab. Este programa define una función personalizada con parámetros para calcular descuentos y utiliza operaciones de cadenas para generar un ticket de caja perfectamente formateado para el **Supermercado TIA**:
            </p>

            <div class="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm text-slate-200 mb-8">
                <div class="bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-700/50">
                    <span class="text-xs text-slate-400 font-bold"><i class="fas fa-code mr-2"></i> generador_factura_tia.py</span>
                    <div class="flex gap-1.5">
                        <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                        <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                        <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                    </div>
                </div>
                <pre class="p-6 overflow-x-auto leading-relaxed text-xs md:text-sm bg-slate-950"><code><span class="text-slate-500"># =========================================================</span>
<span class="text-slate-500"># PROGRAMA: GENERADOR MODULAR DE FACTURACIÓN CON VALIDACIONES</span>
<span class="text-slate-500"># =========================================================</span>

<span class="text-blue-400">def</span> <span class="text-yellow-400">calcular_monto_descuento</span>(subtotal, tiene_tarjeta):
    <span class="text-slate-500">"""
    Funcion modular para calcular el descuento de la compra.
    Retorna el monto exacto de dinero a restar.
    """</span>
    <span class="text-blue-400">if</span> subtotal &gt; <span class="text-orange-400">150</span> <span class="text-blue-400">and</span> tiene_tarjeta:
        <span class="text-purple-400">return</span> subtotal * <span class="text-orange-400">0.10</span> <span class="text-slate-500"># 10% Descuento</span>
    <span class="text-blue-400">else</span>:
        <span class="text-purple-400">return</span> <span class="text-orange-400">0.0</span>

<span class="text-slate-500"># --- PROGRAMA PRINCIPAL (INICIO) ---</span>
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"--- REGISTRO FACTURA SUPERMERCADO TIA ---"</span>)

<span class="text-slate-500"># 1. Ingreso de datos lógicos y strings</span>
nombre_raw = <span class="text-yellow-400">input</span>(<span class="text-emerald-400">"Nombre del cliente: "</span>)
nit_raw = <span class="text-yellow-400">input</span>(<span class="text-emerald-400">"Ingrese el NIT o CI (sin espacios): "</span>)
tarjeta = <span class="text-yellow-400">input</span>(<span class="text-emerald-400">"¿Socio registrado? (si/no): "</span>).lower() == <span class="text-emerald-400">"si"</span>
monto_compra = <span class="text-blue-400">float</span>(<span class="text-yellow-400">input</span>(<span class="text-emerald-400">"Monto acumulado de productos (Bs): "</span>))

<span class="text-slate-500"># 2. Procesamiento de cadenas y normalizaciones</span>
nombre_cliente = nombre_raw.upper().strip() <span class="text-slate-500"># Todo en mayúsculas y sin espacios laterales</span>
longitud_nit = <span class="text-blue-400">len</span>(nit_raw)

<span class="text-slate-500"># 3. Llamada a la funcion personalizada</span>
descuento_aplicado = calcular_monto_descuento(monto_compra, tarjeta)
total_pagar = monto_compra - descuento_aplicado

<span class="text-slate-500"># 4. Impresión estética del recibo comercial</span>
separador = <span class="text-emerald-400">"="</span> * <span class="text-orange-400">50</span>
linea_simple = <span class="text-emerald-400">"-"</span> * <span class="text-orange-400">50</span>

<span class="text-yellow-400">print</span>(separador)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"\\tTICKET DE VENTA - SUPERMERCADO TIA"</span>)
<span class="text-yellow-400">print</span>(separador)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"CLIENTE:"</span>, nombre_cliente)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"NIT/CI:"</span>, nit_raw, <span class="text-emerald-400">"\\t(Longitud de caracteres:"</span>, longitud_nit, <span class="text-emerald-400">")"</span>)
<span class="text-yellow-400">print</span>(linea_simple)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"Subtotal Compra:\\t\\t"</span>, monto_compra, <span class="text-emerald-400">"Bs."</span>)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"Descuento Restado:\\t\\t"</span>, descuento_aplicado, <span class="text-emerald-400">"Bs."</span>)
<span class="text-yellow-400">print</span>(linea_simple)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"TOTAL FINAL A PAGAR:\\t\\t"</span>, total_pagar, <span class="text-emerald-400">"Bs."</span>)
<span class="text-yellow-400">print</span>(separador)
<span class="text-yellow-400">print</span>(<span class="text-emerald-400">"\\t¡Gracias por su preferencia en TIA!"</span>)
<span class="text-yellow-400">print</span>(separador)</code></pre>
            </div>
        </section>

        <section class="mt-20 mb-10 bg-gradient-to-br from-[#001f3f] to-[#003366] p-8 md:p-12 rounded-[2rem] shadow-2xl text-white relative overflow-hidden">
            <i class="fas fa-exclamation-triangle absolute -right-10 -bottom-10 text-white/5 text-[20rem] transform -rotate-12"></i>
            <div class="relative z-10">
                <h3 class="text-3xl font-black uppercase text-blue-400 mb-6">Pautas de Laboratorio y Alertas Clave</h3>
                <p class="text-lg text-slate-200 leading-relaxed mb-8">
                    Para asegurar que tus funciones se ejecuten y devuelvan valores correctamente de acuerdo a los estándares del módulo, ten presentes estas tres advertencias del Ing. Jaime Zambrana:
                </p>
                
                <div class="grid md:grid-cols-3 gap-6 font-mono text-xs">
                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h5 class="text-rose-400 font-bold uppercase mb-2 text-[11px] tracking-wider"><i class="fas fa-print mr-1"></i>Imprimir (print) vs. Retornar (return)</h5>
                        <p class="text-slate-300 leading-relaxed">
                            Es un error clásico. <code>print()</code> solo dibuja letras en la pantalla, pero no guarda el resultado. Si tu función no tiene un <code>return</code> explícito, al llamarla desde fuera devolverá una variable nula (<code>None</code>), impidiéndote realizar cálculos con ese resultado en el programa principal.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h5 class="text-amber-400 font-bold uppercase mb-2 text-[11px] tracking-wider"><i class="fas fa-layer-group mr-1"></i>Variables Locales y Globales</h5>
                        <p class="text-slate-300 leading-relaxed">
                            Toda variable que declares **dentro** de una función nace y muere allí dentro (variable local). El programa principal de Google Colab no puede verlas ni utilizarlas. Si necesitas transferir información hacia fuera, la única vía válida es a través del <code>return</code>.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h5 class="text-cyan-400 font-bold uppercase mb-2 text-[11px] tracking-wider"><i class="fas fa-brackets-curly mr-1"></i>Índices Fuera de Rango</h5>
                        <p class="text-slate-300 leading-relaxed">
                            Al extraer caracteres mediante índices (ej: <code>cadena[0]</code>), recuerda que la primera posición empieza siempre en **cero**. Intentar acceder a una posición igual o mayor al número total de caracteres de la cadena (por ejemplo, <code>cadena[len(cadena)]</code>) lanzará un error de desbordamiento (<code>IndexError</code>).
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;