// content/texto_base_u02.js

const pag_texto_base_u02 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-20">
        <span class="text-indigo-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-layer-group text-lg"></i> TEXTO BASE / UNIDAD 2
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            SOBRECARGA DE<br>
            <span class="text-indigo-600">FUNCIONES Y MÉTODOS</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            La elegancia y la reusabilidad del software dependen de la flexibilidad de sus interfaces lógicas. En esta unidad aprenderás el concepto de sobrecarga de firmas y su aplicación técnica para construir funciones inteligentes y polimórficas.
        </p>
        <div class="h-2 w-24 bg-indigo-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. ¿Qué es la Sobrecarga (Overloading)?
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                En la programación convencional estructurada, dos funciones en el mismo ámbito territorial no podían llamarse igual. La <strong>Sobrecarga de Funciones</strong> rompe esta barrera, permitiéndote declarar múltiples funciones o métodos con el **mismo nombre**, pero diferenciados obligatoriamente por su **firma (signature)**.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h4 class="text-xl font-bold text-indigo-700 mb-4 tracking-tight uppercase">La Firma de una Función</h4>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        El compilador no identifica a una función únicamente por su nombre. Para diferenciar funciones homónimas, el motor del lenguaje analiza minuciosamente sus parámetros de entrada basándose en tres reglas estrictas:
                    </p>
                    <ul class="text-sm space-y-2 font-medium text-slate-500">
                        <li><i class="fas fa-arrow-up-9-1 mr-2"></i> <strong>La cantidad</strong> de argumentos declarados.</li>
                        <li><i class="fas fa-font mr-2"></i> <strong>El tipo de dato</strong> de cada parámetro (ej: int vs. float).</li>
                        <li><i class="fas fa-arrow-down-1-9 mr-2"></i> <strong>El orden</strong> preciso en el que aparecen expuestos.</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-xl font-bold text-emerald-600 mb-4 tracking-tight uppercase">Beneficios en Ingeniería</h4>
                    <p class="text-slate-600 leading-relaxed mb-4">
                        La sobrecarga es una de las manifestaciones más tempranas del polimorfismo (Polimorfismo en tiempo de compilación o ad-hoc). Sus ventajas directas sobre la metodología secuencial clásica son evidentes:
                    </p>
                    <ul class="text-sm space-y-2 font-medium text-slate-500">
                        <li><i class="fas fa-eye mr-2"></i> <strong>Legibilidad Absoluta:</strong> Evita inventar nombres confusos como <code>calcularInt()</code> o <code>calcularFloat()</code>.</li>
                        <li><i class="fas fa-recycle mr-2"></i> <strong>Abstracción Limpia:</strong> Centraliza comportamientos semánticos idénticos bajo una misma identidad.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. El Comportamiento en los Ecosistemas de Desarrollo
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                De acuerdo con la línea de desarrollo tecnológico elegida por cada equipo para el proyecto formativo, la sobrecarga opera bajo diferentes paradigmas internos de los compiladores e intérpretes:
            </p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <h5 class="font-black text-[#003366] uppercase text-sm mb-3">C++ Nativo</h5>
                    <p class="text-xs text-slate-500 mb-4">Soporte estricto en tiempo de compilación mediante <em>Name Mangling</em> (el compilador altera el nombre interno de los métodos vinculando sus tipos de parámetros).</p>
                    <span class="text-[10px] font-bold bg-slate-200 px-2 py-1 rounded">Static Polymorphism</span>
                </div>
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <h5 class="font-black text-[#003366] uppercase text-sm mb-3">Python Avanzado</h5>
                    <p class="text-xs text-slate-500 mb-4">Al ser un lenguaje dinámico, Python no soporta sobrecarga nativa por firmas. Se emula utilizando parámetros por defecto (<code>None</code>), argumentos variables (<code>*args</code>) o decoradores.</p>
                    <span class="text-[10px] font-bold bg-slate-200 px-2 py-1 rounded">Dynamic Overloading</span>
                </div>
                <div class="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                    <h5 class="font-black text-indigo-700 uppercase text-sm mb-3">JavaScript (ES6)</h5>
                    <p class="text-xs text-slate-500 mb-4">Similar a Python. Una función sobreescribe a la anterior. Se implementa inspeccionando el operador <code>typeof</code> o evaluando la propiedad <code>arguments.length</code>.</p>
                    <span class="text-[10px] font-bold bg-indigo-200 text-indigo-800 px-2 py-1 rounded">Runtime Inspection</span>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Implementación de Sobrecarga de Métodos
            </h3>
            <div class="bg-indigo-900 text-white p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden mb-8">
                <i class="fas fa-laptop-code absolute -right-10 -bottom-10 text-white/5 text-[15rem] rotate-12"></i>
                <div class="relative z-10 space-y-6">
                    <h4 class="text-2xl font-black text-indigo-300 italic uppercase">Caso Práctico: El Renderizador del Simulador</h4>
                    <p class="text-lg leading-relaxed opacity-90">
                        Imagina que estás construyendo la interfaz gráfica de tu simulador interactivo para el proyecto formativo. Necesitas un método llamado <code>dibujar()</code>. Dependiendo de los activos que reciba en memoria dinámica, la firma debe mutar automáticamente su comportamiento:
                    </p>
                    
                    <div class="bg-slate-950 rounded-2xl overflow-hidden font-mono text-xs md:text-sm text-slate-300 border border-indigo-800">
                        <div class="bg-slate-900 px-4 py-2 border-b border-indigo-950 flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
                            <span>Ejemplo Arquitectónico de Sobrecarga</span>
                            <i class="fas fa-code text-indigo-400"></i>
                        </div>
                        <pre class="p-6 overflow-x-auto leading-relaxed text-indigo-200">
// Firma 1: Dibuja un punto simple en un espacio coordenado
void dibujar(int x, int y);

// Firma 2: Sobrecarga por tipo. Dibuja un vector de precisión espacial
void dibujar(double x, double y);

// Firma 3: Sobrecarga por cantidad. Dibuja una caja delimitadora completa de colisión
void dibujar(int x, int y, int ancho, int alto);</pre>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-20 border-t border-slate-100 pt-12">
            <h3 class="text-2xl font-black text-[#003366] uppercase mb-8">Saberes Esenciales Aplicados (Criterio de Verificación)</h3>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 font-black shadow-md">1</div>
                    <div>
                        <h5 class="font-bold text-slate-800">Diseño de Firmas Limpias</h5>
                        <p class="text-sm text-slate-500 mt-1">
                            Aprenderás a estructurar e identificar parámetros inequívocos para evitar la ambigüedad en tiempo de compilación (<em>Ambiguous Compile-Time Errors</em>).
                        </p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-full bg-[#003366] text-white flex items-center justify-center shrink-0 font-black shadow-md">2</div>
                    <div>
                        <h5 class="font-bold text-slate-800">Polimorfismo Estático Robusto</h5>
                        <p class="text-sm text-slate-500 mt-1">
                            Aplicarás la sobrecarga combinada con variables instanciadas dinámicamente en el proyecto para optimizar las rutinas matemáticas del sistema interactivo[cite: 10, 18].
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;