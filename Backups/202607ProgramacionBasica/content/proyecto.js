// content/proyecto.js
const pag_proyecto = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-24">
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none">
            PROYECTO FORMATIVO<br>
            <span class="text-[#00aaff]">LÓGICA ALGORÍTMICA & PYTHON</span>
        </h1>
        <p class="mt-6 text-2xl font-light text-slate-500 max-w-2xl">
            Estrategia Didáctica: <strong class="font-black text-[#003366]">Desarrollo de un Sistema Automatizado de Facturación y Control para Comercios Locales</strong>
        </p>
        <div class="h-2 w-24 bg-[#00aaff] mt-8"></div>
    </header>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">01. Problema del Contexto y Alineación ODS</h2>
        <div class="p-10 bg-slate-50 border border-slate-200 rounded-[2rem] shadow-sm relative overflow-hidden">
            <i class="fas fa-store absolute -right-10 -bottom-10 text-blue-100 text-[10rem] opacity-50 -rotate-12"></i>
            <div class="relative z-10 max-w-4xl">
                <h3 class="text-3xl font-black text-[#003366] uppercase mb-4 tracking-tight">Caso: Automatización Transaccional en Supermercado TIA</h3>
                <p class="text-lg text-slate-600 leading-relaxed font-light mb-6">
                    <strong>Situación Problemática (Socioformativa):</strong> Los pequeños comercios y supermercados locales en Santa Cruz operan bajo procesos de cobro y registro manuales, lo que genera demoras críticas, pérdida de datos y errores humanos en el cálculo de impuestos o descuentos. Los cajeros y administradores no cuentan con herramientas lógicas que automaticen estas transacciones esenciales, controlen límites de compra o validen los datos de los clientes mediante reglas de sintaxis de programación básicas[cite: 4].
                </p>
                <p class="text-lg text-slate-600 leading-relaxed font-light mb-8">
                    <strong>Propósito Formativo del Proyecto:</strong> Diseñar y codificar un algoritmo interactivo en Python que emule un punto de venta (POS) y facturación para el Supermercado TIA. El sistema debe estructurarse mediante buenas prácticas, control condicional e iterativo de transacciones y procesamiento de cadenas de texto de clientes[cite: 6].
                </p>

                <div class="border-t border-slate-200 pt-6">
                    <h4 class="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Contribución a los Objetivos de Desarrollo Sostenible (ODS):</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="flex items-start gap-3 p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl">
                            <div class="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-black text-sm flex-none">8</div>
                            <div>
                                <strong class="text-sm text-emerald-950 block">ODS 8: Trabajo Decente y Crecimiento Económico</strong>
                                <p class="text-xs text-emerald-800 mt-1">Fomenta la productividad y eficiencia de las microempresas mediante la automatización de procesos y reducción de pérdidas transaccionales comerciales.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-3 p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-sm flex-none">9</div>
                            <div>
                                <strong class="text-sm text-blue-950 block">ODS 9: Industria, Innovación e Infraestructura</strong>
                                <p class="text-xs text-blue-800 mt-1">Desarrolla capacidades tecnológicas locales y habilidades informáticas básicas en los futuros ingenieros para diseñar infraestructuras de software seguras[cite: 4, 6].</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">02. Movilización de Saberes Esenciales</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div class="p-8 border-t-8 border-[#003366] bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fas fa-sitemap text-4xl text-blue-500 mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Conocer</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Fundamentos de Lógica y Algoritmia</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Concepto de algoritmo, simbología estándar de diagramas de flujo, pseudocódigo, pruebas de escritorio[cite: 8]. Declaración de variables, tipos de datos simples (<code>int</code>, <code>float</code>, <code>str</code>, <code>bool</code>). Lógica booleana (AND, OR, NOT)[cite: 10]. Estructuras de control condicional (<code>if-elif-else</code>), bucles repetitivos (<code>for</code>, <code>while</code>) [cite: 8] y operaciones estándar con cadenas de caracteres[cite: 10].
                </p>
            </div>

            <div class="p-8 border-t-8 border-[#00aaff] bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fas fa-code text-4xl text-cyan-500 mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Hacer</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Ingeniería del Algoritmo a Python</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Diseño gráfico de flujos interactivos en Flowgorithm[cite: 8]. Traducción estructurada del algoritmo a código de Python a través de Google Colab[cite: 25, 26]. Implementación de contadores y acumuladores numéricos[cite: 10]. Programación de validaciones con operaciones de cadena (conversión de mayúsculas, conteo de caracteres del NIT y concatenaciones dinámicas)[cite: 10].
                </p>
            </div>

            <div class="p-8 border-t-8 border-slate-300 bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fas fa-users-cog text-4xl text-slate-500 mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Ser & Convivir</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Ética, Colaboración y Perseverancia</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Perseverancia en la resolución de errores sintácticos de compilación[cite: 8]. Compromiso con el aprendizaje cooperativo en equipos de trabajo[cite: 8]. Rigor ético en la transparencia y declaración de autoría intelectual en el desarrollo del código, evitando el plagio o uso sin filtros de herramientas de IA[cite: 81].
                </p>
            </div>

        </div>
    </section>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">03. Secuencia Didáctica (Fases de Implementación)</h2>
        <div class="space-y-8 max-w-4xl border-l-2 border-slate-100 pl-8 ml-4">
            
            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-slate-200 border-4 border-white"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 1: Modelado Lógico y Diagramación</h4>
                <p class="text-sm font-bold text-[#00aaff] uppercase tracking-widest mb-2">Análisis y Pruebas en Flowgorithm</p>
                <p class="text-slate-600 leading-relaxed">
                    Identificación de las variables de entrada del sistema POS (NIT, Nombre del cliente, precios e iteraciones del bucle)[cite: 8, 10]. Construcción estructurada del flujo del programa en Flowgorithm utilizando bloques gráficos y ejecución de pruebas de escritorio exhaustivas para garantizar un algoritmo libre de fallas lógicas[cite: 8].
                </p>
            </div>

            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-[#00aaff] border-4 border-white shadow-md"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 2: Implementación de Control Transaccional en Python</h4>
                <p class="text-sm font-bold text-[#00aaff] uppercase tracking-widest mb-2">Codificación en Google Colab</p>
                <p class="text-slate-600 leading-relaxed">
                    Traducción sintáctica del diagrama de flujo al lenguaje Python en un entorno de cuaderno virtual[cite: 25, 26]. Implementación de acumuladores para la suma del total de productos y un bucle <code>for</code> determinado para procesar los artículos ingresados[cite: 8]. Incorporación de lógica condicional para detectar compras de alto valor superiores a 150 Bs y aplicar deducciones[cite: 8].
                </p>
            </div>

            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-[#003366] border-4 border-white shadow-md"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 3: Procesamiento de Cadenas de Facturación y Cierre</h4>
                <p class="text-sm font-bold text-[#00aaff] uppercase tracking-widest mb-2">Manipulación de Datos y Formateo del Recibo</p>
                <p class="text-slate-600 leading-relaxed">
                    Integración de validaciones de cadenas en la salida del recibo de Supermercado TIA[cite: 10]. Normalización automática del nombre del cliente utilizando la función de conversión a mayúsculas [cite: 10], verificación del NIT mediante el conteo del número de caracteres [cite: 10] y concatenación limpia de datos numéricos a cadenas para generar el ticket final de cobro[cite: 10].
                </p>
            </div>

        </div>
    </section>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">04. Matriz de Evaluación (Niveles de Dominio UPDS)</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            <div class="p-8 bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-slate-300 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Receptivo</div>
                <h4 class="text-xl font-black text-slate-500 uppercase mb-2">Lógica Lineal Simple</h4>
                <p class="text-sm text-slate-600">Reconoce las instrucciones de entrada y salida, declarando variables con nombres genéricos[cite: 53]. El código corre de manera secuencial directa sin la incorporación óptima de decisiones condicionales, bucles o validaciones básicas de cadenas de texto[cite: 56, 59].</p>
            </div>

            <div class="p-8 bg-white border-2 border-slate-200 rounded-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-blue-400 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Resolutivo</div>
                <h4 class="text-xl font-black text-blue-500 uppercase mb-2">Control Algorítmico Base</h4>
                <p class="text-sm text-slate-600">Dibuja diagramas de flujo funcionales en Flowgorithm y los traduce a Python[cite: 53]. Utiliza estructuras condicionales simples y bucles definidos para procesar los datos, aunque con debilidades lógicas menores al inicializar acumuladores o contadores de variables[cite: 56].</p>
            </div>

            <div class="p-8 bg-white border-2 border-indigo-500 rounded-2xl relative overflow-hidden shadow-md">
                <div class="absolute top-0 right-0 bg-[#00aaff] text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Autónomo</div>
                <h4 class="text-xl font-black text-indigo-500 uppercase mb-2">Desarrollo Estructurado Robusto</h4>
                <p class="text-sm text-slate-600">Codifica el sistema aplicando de forma limpia estructuras condicionales anidadas, sumando acumuladores eficientemente de manera iterativa[cite: 56]. Procesa las cadenas para transformar los nombres de los clientes en mayúsculas y concatena datos de salida sin errores de sintaxis[cite: 59].</p>
            </div>

            <div class="p-8 bg-[#003366] text-white rounded-2xl relative overflow-hidden shadow-xl">
                <div class="absolute top-0 right-0 bg-yellow-400 text-[#003366] px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Estratégico</div>
                <h4 class="text-xl font-black text-yellow-400 uppercase mb-2">Optimización y Validación Completa</h4>
                <p class="text-sm text-blue-100">Crea una solución algorítmica robusta de control de errores[cite: 56]. Valida preventivamente la longitud del NIT mediante operaciones de longitud de cadena [cite: 59], previene excepciones matemáticas en divisiones, demuestra código fuente perfectamente indentado bajo estándares PEP 8, y utiliza comentarios claros e instructivos[cite: 56].</p>
            </div>

        </div>

        <div class="flex flex-col md:flex-row gap-6 bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
            <div class="flex-1">
                <h5 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-3"><i class="fas fa-tasks mr-2 text-[#00aaff]"></i> Entregables del Estudiante</h5>
                <ul class="text-sm text-slate-600 space-y-2 font-medium">
                    <li>1. Archivo del Diagrama de Flujo lógico documentado en formato ejecutable de Flowgorithm (<code>.fprg</code>)[cite: 6].</li>
                    <li>2. Cuaderno interactivo de Google Colab (<code>.ipynb</code>) con el código en Python completamente documentado[cite: 6, 26].</li>
                    <li>3. Fotografías claras del diseño de la estructura a lápiz y papel, como evidencia del desarrollo lógico analítico previo[cite: 6].</li>
                </ul>
            </div>
            <div class="hidden md:block w-px bg-slate-300 mx-4"></div>
            <div class="flex-1">
                <h5 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-3"><i class="fas fa-lightbulb mr-2 text-[#00aaff]"></i> Metacognición Docente</h5>
                <p class="text-sm text-slate-600 italic">
                    "Reflexión sobre la transferencia lógica: ¿Cómo ayuda el diseño visual estructurado en diagramas de flujo a reducir los fallos de indentación y errores semánticos al momento de transcribir la lógica al código fuente de Python?"
                </p>
            </div>
        </div>
    </section>

    <section class="mt-20 font-sans">
        <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">El Decálogo del Programador Inicial: 10 Buenas Prácticas</h3>
        <p class="text-lg text-slate-600 leading-relaxed mb-8">
            Para la entrega final de tu proyecto en el Supermercado TIA, debes regirte por los siguientes estándares técnicos que guiarán el orden, la limpieza y la legibilidad de tu software:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-blue-500 transition-colors">
                <div class="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-black flex-shrink-0">1</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Validación Previa con Lápiz y Papel</h5>
                    <p class="text-xs text-slate-500 mt-1">Nunca programes directamente. Dibuja primero tu lógica analítica sobre el papel y realiza una prueba de escritorio antes de abrir la computadora[cite: 8].</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-cyan-500 transition-colors">
                <div class="w-8 h-8 rounded bg-cyan-100 text-cyan-600 flex items-center justify-center font-black flex-shrink-0">2</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Variables Descriptivas</h5>
                    <p class="text-xs text-slate-500 mt-1">Declara nombres claros y descriptivos para tus variables (por ejemplo, <code>total_compra</code> en lugar de usar variables mudas como <code>t</code> o <code>x</code>)[cite: 56].</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-indigo-500 transition-colors">
                <div class="w-8 h-8 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center font-black flex-shrink-0">3</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Respetar la Indentación en Python</h5>
                    <p class="text-xs text-slate-500 mt-1">Asegura exactamente 4 espacios de margen a la derecha para cada bloque subordinado dentro de tus estructuras condicionales y ciclos[cite: 56].</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-orange-500 transition-colors">
                <div class="w-8 h-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center font-black flex-shrink-0">4</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Comentarios Concisos</h5>
                    <p class="text-xs text-slate-500 mt-1">Documenta los pasos clave de tu código mediante comentarios cortos (<code>#</code>), explicando el porqué de un bloque de decisión o de un acumulador complejo[cite: 56].</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-emerald-500 transition-colors">
                <div class="w-8 h-8 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-black flex-shrink-0">5</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Uso Controlado de la IA</h5>
                    <p class="text-xs text-slate-500 mt-1">Usa la inteligencia artificial para buscar sintaxis o detectar errores gramaticales, pero jamás permitas que escriba o resuelva la lógica del algoritmo por ti[cite: 81, 86].</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-amber-500 transition-colors">
                <div class="w-8 h-8 rounded bg-amber-100 text-amber-600 flex items-center justify-center font-black flex-shrink-0">6</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Inicializar Acumuladores</h5>
                    <p class="text-xs text-slate-500 mt-1">Antes de que empiece un bucle de adición, recuerda inicializar siempre tu acumulador en 0 (ej: <code>total_compra = 0.0</code>) para evitar errores de variables nulas[cite: 10, 56].</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-rose-500 transition-colors">
                <div class="w-8 h-8 rounded bg-rose-100 text-rose-600 flex items-center justify-center font-black flex-shrink-0">7</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Evitar Bucles Infinitos</h5>
                    <p class="text-xs text-slate-500 mt-1">Si diseñas bucles basados en condiciones variables (<code>while</code>), valida siempre el paso de incremento de control que asegure que el ciclo se detendrá[cite: 8].</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-purple-500 transition-colors">
                <div class="w-8 h-8 rounded bg-purple-100 text-purple-600 flex items-center justify-center font-black flex-shrink-0">8</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Formateo Correcto en Cadenas</h5>
                    <p class="text-xs text-slate-500 mt-1">Normaliza y limpia los textos que ingresen tus usuarios de forma interactiva (<code>.upper()</code>, <code>.strip()</code>) antes de compararlos lógicamente en decisiones[cite: 10].</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-yellow-500 transition-colors">
                <div class="w-8 h-8 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center font-black flex-shrink-0">9</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Manejo Limpio de Conversión de Tipos</h5>
                    <p class="text-xs text-slate-500 mt-1">Recuerda transformar adecuadamente los datos que ingresan mediante el teclado con <code>float()</code> o <code>int()</code> antes de realizar cualquier cálculo matemático[cite: 10, 56].</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-slate-800 transition-colors">
                <div class="w-8 h-8 rounded bg-slate-200 text-slate-800 flex items-center justify-center font-black flex-shrink-0">10</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Formato PDF de Entrega</h5>
                    <p class="text-xs text-slate-500 mt-1">Exporta tu reporte técnico final siempre en formato PDF para garantizar que tus diagramas no se desorganizen y se mantenga el diseño original[cite: 100].</p>
                </div>
            </div>

        </div>
    </section>

</div>
`;