// content/texto_base_u03.js

const pag_texto_base_u03 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <!-- HEADER PRINCIPAL -->
    <header class="mb-20">
        <span class="text-[#00aaff] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-filter text-lg"></i> TEXTO GUÍA BASE / UNIDAD 3
        </span>
        <h1 class="text-4xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            TEORÍA DE LA NORMALIZACIÓN<br>
            <span class="text-[#00aaff]">DE BASES DE DATOS RELACIONALES</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl leading-relaxed">
            Fundamentos matemáticos del diseño relacional, anomalías de actualización, dependencias funcionales, axiomas de Armstrong, formas normales clásicas (1FN, 2FN, 3FN), Forma Normal de Boyce-Codd (FNBC) y algoritmos de descomposición sin pérdida.
        </p>
        <div class="h-2 w-24 bg-[#00aaff] mt-8 rounded-full"></div>
    </header>

    <div class="max-w-5xl space-y-16">

        <!-- INTRODUCCIÓN AL TEMA -->
        <section class="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-8 border-[#003366] rounded-r-3xl shadow-sm">
            <h4 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-2">Fundamentación Teórica</h4>
            <p class="text-lg md:text-xl text-slate-800 leading-relaxed font-semibold italic mb-4">
                "La normalización es la técnica formal que evalúa y depura los esquemas relacionales para asegurar que cada hecho se almacene en un único lugar, eliminando redundancias perjudiciales y blindando la integridad de los datos frente a modificaciones concurrentes."
            </p>
            <p class="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                Esta unidad aborda el soporte algebraico del modelo relacional introducido por E. F. Codd y formalizado por Boyce, Fagin y Armstrong. Aprenderemos a descomponer relaciones complejas en estructuras atómicas libres de anomalías de inserción, borrado y modificación, garantizando la preservación estricta de dependencias y de la información original.
            </p>
        </section>

        <!-- SECCIÓN 1: PROPÓSITO E IMPORTANCIA -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. Propósito e Importancia de la Normalización
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Un mal diseño en una base de datos relacional genera duplicación masiva de datos y desperdicio de almacenamiento en disco, pero su consecuencia más destructiva es la <strong>corrupción de la consistencia lógica</strong>. La normalización actúa como un proceso de control de calidad matemático que transforma esquemas toscos o desestructurados en conjuntos de relaciones depuradas, estables y fácilmente extensibles.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-trash-can"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-base mb-1">Cero Redundancia Inútil</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Erradica la repetición innecesaria de cadenas y datos comunes, minimizando el espacio en disco y acelerando las escrituras.
                    </p>
                </div>

                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <div class="w-10 h-10 bg-cyan-100 text-[#00aaff] rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-shield-check"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-base mb-1">Integridad Garantizada</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Impide la aparición de datos contradictorios o estados huérfanos provocados por actualizaciones parciales incompletas.
                    </p>
                </div>

                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <div class="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-arrows-split-up-and-left"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-base mb-1">Estructura Modular</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Facilita la evolución del modelo agregando nuevos campos o tablas sin romper la compatibilidad de consultas previas.
                    </p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 2: ANOMALÍAS DE MODIFICACIÓN -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. Patologías del Mal Diseño: Las Tres Anomalías de Actualización
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Considérese una tabla desnormalizada en un hospital donde en una misma tupla se registran los datos del paciente, su consulta y el médico:
                <code class="font-mono text-xs bg-slate-100 p-1 rounded">REGISTRO_CLINICO(id_paciente, nom_paciente, id_medico, nom_medico, consultorio, fecha)</code>. Esta tabla padece de tres anomalías críticas:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div class="p-5 bg-rose-50 border border-rose-200 rounded-xl">
                    <strong class="text-xs font-black text-rose-800 uppercase block mb-1">Anomalía de Inserción</strong>
                    <p class="text-xs text-rose-700 leading-relaxed">
                        Es imposible registrar un nuevo médico contratado en el hospital hasta que atienda a su primer paciente, a menos que se inserten valores nulos (<code class="font-mono">NULL</code>) en los campos del paciente, violando la integridad de clave.
                    </p>
                </div>

                <div class="p-5 bg-rose-50 border border-rose-200 rounded-xl">
                    <strong class="text-xs font-black text-rose-800 uppercase block mb-1">Anomalía de Borrado</strong>
                    <p class="text-xs text-rose-700 leading-relaxed">
                        Si se cancela la única consulta de un paciente con un especialista determinado y se elimina la fila, se pierde inadvertidamente del sistema toda la información del médico (su nombre y su consultorio).
                    </p>
                </div>

                <div class="p-5 bg-rose-50 border border-rose-200 rounded-xl">
                    <strong class="text-xs font-black text-rose-800 uppercase block mb-1">Anomalía de Modificación</strong>
                    <p class="text-xs text-rose-700 leading-relaxed">
                        Si el Dr. Suárez cambia de consultorio, es obligatorio actualizar cientos de filas donde figure su nombre. Si un proceso concurrente actualiza unas y otras no, la base de datos entra en un estado inconsistente.
                    </p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 3: CONCEPTO DE DEPENDENCIA FUNCIONAL -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Concepto Formal de Dependencia Funcional (DF)
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                La **Dependencia Funcional** es una restricción formal entre dos conjuntos de atributos de una misma relación $R$. Sean $X$ e $Y$ subconjuntos de atributos de $R$. Se dice formalmente que <strong>$X$ determina funcionalmente a $Y$</strong> (denotado $X \\rightarrow Y$) si y solo si para cada par de tuplas $t_1, t_2 \\in R$, siempre que coincidan en sus valores de $X$, deben coincidir forzosamente en sus valores de $Y$:
            </p>

            <div class="bg-slate-900 text-white rounded-2xl p-6 font-mono text-xs overflow-x-auto mb-6">
                <div class="text-slate-400 mb-2">// Definición Matemática de Dependencia Funcional:</div>
                <div class="text-yellow-400">t1[X] = t2[X]  ==&gt;  t1[Y] = t2[Y]</div>
                <div class="text-slate-400 mt-3">// Ejemplo en Registro Médico:</div>
                <div class="text-emerald-400">{ci_medico} ────────► {nombre_medico, matricula_profesional}</div>
                <div class="text-slate-400 mt-1">// Dado un número de CI concreto, existe un único nombre y matrícula asociados en el universo del discurso.</div>
            </div>
        </section>

        <!-- SECCIÓN 4: DETERMINANTES Y DEPENDIENTES -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. Anatomía de una DF: Determinante y Dependiente
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                En la expresión formal $X \\rightarrow Y$, la posición de los conjuntos de atributos define roles matemáticos asimétricos:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] block mb-1">Lado Izquierdo (LHS)</span>
                    <h5 class="text-base font-bold text-[#003366] mb-2">El Determinante ($X$)</h5>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Es el atributo o conjunto de atributos cuyo valor tiene la capacidad de fijar o determinar de forma inequívoca el valor de los demás atributos asociados. En las tablas bien normalizadas, todo determinante es una superclave.
                    </p>
                </div>

                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <span class="text-[10px] font-black uppercase tracking-widest text-indigo-600 block mb-1">Lado Derecho (RHS)</span>
                    <h5 class="text-base font-bold text-[#003366] mb-2">El Dependiente ($Y$)</h5>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Es el conjunto de atributos cuyo valor queda subordinado y condicionado por el determinante. No tiene por qué determinar al lado izquierdo (no es una función biyectiva obligatoria).
                    </p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 5: DEPENDENCIAS TRIVIALES Y NO TRIVIALES -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                5. Dependencias Funcionales: Triviales y No Triviales
            </h3>
            <div class="space-y-4 mb-6 text-xs">
                <div class="p-4 bg-slate-50 border-l-4 border-slate-400 rounded-r-xl">
                    <strong class="text-slate-800 uppercase font-black block">DF Trivial</strong>
                    <p class="text-slate-600 mt-0.5">
                        Ocurre cuando el conjunto dependiente $Y$ es un subconjunto directo del determinante $X$ ($Y \\subseteq X$). No aportan información nueva sobre el esquema del negocio.
                    </p>
                    <span class="font-mono text-slate-500 mt-1 block">Ejemplo: {id_paciente, nombre} --&gt; {id_paciente}</span>
                </div>

                <div class="p-4 bg-slate-50 border-l-4 border-[#00aaff] rounded-r-xl">
                    <strong class="text-slate-800 uppercase font-black block">DF Completamente No Trivial</strong>
                    <p class="text-slate-600 mt-0.5">
                        Ocurre cuando el determinante y el dependiente no comparten absolutamente ningún atributo en común ($X \\cap Y = \\emptyset$). Son las dependencias sobre las que se basa la normalización.
                    </p>
                    <span class="font-mono text-blue-600 mt-1 block">Ejemplo: {codigo_estudio} --&gt; {arancel, tiempo_duracion}</span>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 6: AXIOMAS DE ARMSTRONG -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                6. Los Axiomas de Armstrong: Inferencia de Dependencias
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Formulados por William W. Armstrong en 1974, constituyen un sistema de reglas formales sólidas y completas que permiten deducir todas las dependencias funcionales implícitas a partir de un conjunto dado $F$:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <strong class="text-xs font-black text-[#003366] uppercase block mb-1">1. Reflexividad</strong>
                    <p class="text-xs text-slate-600 mb-2">Si $Y \\subseteq X$, entonces se infiere que $X \\rightarrow Y$.</p>
                    <span class="text-[10px] font-mono text-blue-600">{ci, nombre} --&gt; {ci}</span>
                </div>

                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <strong class="text-xs font-black text-[#003366] uppercase block mb-1">2. Aumento</strong>
                    <p class="text-xs text-slate-600 mb-2">Si $X \\rightarrow Y$, entonces $XZ \\rightarrow YZ$ para cualquier conjunto $Z$.</p>
                    <span class="text-[10px] font-mono text-blue-600">{ci} --&gt; {nom} =&gt; {ci, tel} --&gt; {nom, tel}</span>
                </div>

                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <strong class="text-xs font-black text-[#003366] uppercase block mb-1">3. Transitividad</strong>
                    <p class="text-xs text-slate-600 mb-2">Si $X \\rightarrow Y$ y además $Y \\rightarrow Z$, entonces se infiere que $X \\rightarrow Z$.</p>
                    <span class="text-[10px] font-mono text-blue-600">{matricula} --&gt; {depto} y {depto} --&gt; {director}</span>
                </div>
            </div>

            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
                <strong class="text-[#003366] uppercase block text-[11px]">Reglas Secundarias Deducibles:</strong>
                <p class="text-slate-600">• <strong>Unión:</strong> Si $X \\rightarrow Y$ y $X \\rightarrow Z$, entonces $X \\rightarrow YZ$.</p>
                <p class="text-slate-600">• <strong>Descomposición:</strong> Si $X \\rightarrow YZ$, entonces $X \\rightarrow Y$ y $X \\rightarrow Z$.</p>
                <p class="text-slate-600">• <strong>Pseudotransitividad:</strong> Si $X \\rightarrow Y$ y $WY \\rightarrow Z$, entonces $WX \\rightarrow Z$.</p>
            </div>
        </section>

        <!-- SECCIÓN 7: CLAUSURA DE ATRIBUTOS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                7. Algoritmo de Clausura de un Conjunto de Atributos ($X^+$)
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                La <strong>clausura</strong> de un conjunto de atributos $X$ respecto a un conjunto de dependencias $F$, denotada como $X^+$, es el conjunto completo de todos los atributos que son determinados funcionalmente por $X$. Es la herramienta fundamental para descubrir claves primarias candidatas.
            </p>

            <div class="bg-slate-900 rounded-2xl p-6 text-white font-mono text-xs overflow-x-auto mb-6">
                <div class="text-slate-400 mb-2">// Algoritmo de Cálculo de Clausura X+:</div>
                <div class="text-blue-400">1. X+ = X</div>
                <div class="text-blue-400">2. REPETIR hasta que no se agreguen más atributos:</div>
                <div class="text-slate-300 pl-4">PARA CADA dependencia Y ──► Z en F:</div>
                <div class="text-slate-300 pl-8">SI Y es subconjunto de X+ ENTONCES:</div>
                <div class="text-emerald-400 pl-12">X+ = X+ ∪ Z</div>
                <div class="text-slate-400 mt-2">// Teorema: Si X+ contiene a todos los atributos de la relación R, entonces X es una SUPERCLAVE.</div>
            </div>
        </section>

        <!-- SECCIÓN 8: CUBIERTA CANÓNICA -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                8. Cubierta Canónica o Mínima ($F_c$)
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                En esquemas complejos, los analistas identifican dependencias redundantes o atributos extraños. La <strong>cubierta canónica</strong> $F_c$ es un conjunto simplificado y equivalente de dependencias funcionales que tiene exactamente el mismo poder de inferencia que el conjunto original $F$, pero sin redundancias:
            </p>
            <ul class="text-xs text-slate-600 space-y-2 pl-4 list-disc list-inside">
                <li>El lado derecho de cada dependencia funcional contiene un único atributo atómico.</li>
                <li>No contiene atributos extraños en el lado izquierdo (determinante mínimo).</li>
                <li>No contiene dependencias funcionales redundantes que puedan deducirse de las demás.</li>
            </ul>
        </section>

        <!-- SECCIÓN 9: ATRIBUTOS PRIMOS Y NO PRIMOS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                9. Atributos Primos y No Primos: Distinción Crucial
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                La formulación formal de las formas normales clásicas de Codd depende estrictamente de esta clasificación:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] block mb-1">Participa en Claves</span>
                    <h5 class="text-base font-bold text-[#003366] mb-2">Atributo Primo</h5>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Cualquier atributo que forma parte de <em>al menos una</em> clave candidata de la relación. Si la tabla tiene como clave candidata compuesta <code>{id_sala, nro_cama}</code>, ambos campos son individualmente atributos primos.
                    </p>
                </div>

                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <span class="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Atributos Descriptivos</span>
                    <h5 class="text-base font-bold text-[#003366] mb-2">Atributo No Primo</h5>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Cualquier atributo que no pertenece a ninguna clave candidata de la relación. Son las columnas ordinarias que describen propiedades del objeto (ej. <code>temperatura_actual</code>, <code>marca_cama</code>).
                    </p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 10: PRIMERA FORMA NORMAL (1FN) -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                10. Primera Forma Normal (1FN): Atomicidad Estricta
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Una relación está en <strong>Primera Forma Normal (1FN)</strong> si y solo si todos los dominios de sus atributos contienen exclusivamente <strong>valores atómicos</strong> (indivisibles), y no existen grupos repetitivos ni atributos multivaluados en una misma celda.
            </p>

            <div class="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200 mb-6">
                <table class="w-full text-left border-collapse text-xs">
                    <thead>
                        <tr class="bg-rose-100 text-rose-900 uppercase">
                            <th class="p-3 font-black" colspan="3">NO Cumple 1FN (Grupo Repetitivo / Multivaluado en Teléfono)</th>
                        </tr>
                        <tr class="bg-slate-100 text-slate-600">
                            <th class="p-2.5">id_medico</th>
                            <th class="p-2.5">nombre</th>
                            <th class="p-2.5">telefonos (Multivaluado no permitido)</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-slate-100">
                        <tr>
                            <td class="p-2.5 font-mono">101</td>
                            <td class="p-2.5">Dr. Carlos Arteaga</td>
                            <td class="p-2.5 font-mono text-rose-600">77012345, 33456789, 70098765</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900">
                <strong>Solución en 1FN:</strong> Se segregan los valores multivaluados creando una tabla satélite vinculada mediante la clave primaria original:
                <code class="font-mono bg-white px-1.5 py-0.5 rounded border border-emerald-200 ml-1">MEDICO_TELEFONO(id_medico*, telefono)</code>.
            </div>
        </section>

        <!-- SECCIÓN 11: DEPENDENCIA PARCIAL -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                11. Dependencia Funcional Parcial vs. Total
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Este concepto aplica específicamente cuando una tabla posee una <strong>Clave Candidata Compuesta</strong> (formada por 2 o más columnas):
            </p>

            <div class="space-y-4 mb-6 text-xs">
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <strong class="text-rose-700 uppercase font-black block mb-1">Dependencia Parcial (Defectuosa)</strong>
                    <p class="text-slate-600">Ocurre cuando un atributo no primo depende funcionalmente de una <em>parte</em> de la clave candidata, y no de toda la clave en su conjunto.</p>
                    <span class="font-mono text-slate-500 mt-1 block">Ejemplo en INTERNACION({id_paciente, id_cama} -&gt; nombre_paciente). {nombre_paciente} depende solo de {id_paciente}.</span>
                </div>

                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <strong class="text-emerald-700 uppercase font-black block mb-1">Dependencia Completa / Total (Correcta)</strong>
                    <p class="text-slate-600">Ocurre cuando el atributo no primo requiere indispensablemente de todos y cada uno de los atributos de la clave compuesta para ser determinado.</p>
                    <span class="font-mono text-slate-500 mt-1 block">Ejemplo: {id_paciente, id_cama} -&gt; fecha_asignacion_cama.</span>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 12: SEGUNDA FORMA NORMAL (2FN) -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                12. Segunda Forma Normal (2FN): Eliminación de Dependencias Parciales
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Una relación está en <strong>Segunda Forma Normal (2FN)</strong> si y solo si:
            </p>
            <ol class="text-xs text-slate-600 space-y-2 pl-4 list-decimal list-inside mb-4">
                <li>Está en Primera Forma Normal (1FN).</li>
                <li><strong>Ningún atributo no primo depende parcialmente de ninguna clave candidata de la relación.</strong> (Todo atributo no primo debe depender de forma completa de la clave).</li>
            </ol>
            <div class="p-4 bg-blue-50 border-l-4 border-[#00aaff] rounded-r-xl text-xs text-slate-700">
                <strong>Regla de Descarte Inmediato:</strong> Si una relación en 1FN tiene una Clave Primaria simple (formada por un único atributo), <strong>ya está automáticamente en 2FN</strong>, puesto que es imposible que exista una dependencia parcial de una clave atómica.
            </div>
        </section>

        <!-- SECCIÓN 13: DEPENDENCIA TRANSITIVA -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                13. Dependencia Funcional Transitiva
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Una dependencia funcional $X \\rightarrow Z$ es <strong>transitiva</strong> si existen dependencias funcionales tales que $X \\rightarrow Y$ y $Y \\rightarrow Z$, donde $Y$ no es una clave candidata y $Z$ no es un atributo primo:
            </p>

            <div class="bg-slate-900 rounded-2xl p-6 text-white font-mono text-xs overflow-x-auto mb-6">
                <div class="text-slate-400 mb-2">// Esquema de Tránsito Indirecto:</div>
                <div class="text-yellow-400">[ id_receta (PK) ] ───► [ id_medicamento ] ───► [ principio_activo ]</div>
                <div class="text-slate-400 mt-2">1. id_receta determina id_medicamento.</div>
                <div class="text-slate-400">2. id_medicamento determina principio_activo (sin ser superclave de la tabla receta).</div>
                <div class="text-rose-400 mt-1">==&gt; {principio_activo} depende transitivamente de {id_receta} a través de {id_medicamento}.</div>
            </div>
        </section>

        <!-- SECCIÓN 14: TERCERA FORMA NORMAL (3FN) -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                14. Tercera Forma Normal (3FN): Erradicación de Dependencias Transitivas
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Formalmente, una relación $R$ está en <strong>Tercera Forma Normal (3FN)</strong> si está en 2FN y para cada dependencia funcional no trivial $X \\rightarrow Y$ en $R$, se cumple <strong>al menos una</strong> de las siguientes condiciones:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                    <strong class="text-[#003366] block font-black uppercase mb-1">Condición A</strong>
                    <p class="text-slate-600">$X$ es una <strong>Superclave</strong> de la relación $R$.</p>
                </div>
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                    <strong class="text-[#003366] block font-black uppercase mb-1">Condición B</strong>
                    <p class="text-slate-600">Cada atributo de $Y$ es un <strong>Atributo Primo</strong> (forma parte de alguna clave candidata de $R$).</p>
                </div>
            </div>

            <p class="text-xs text-slate-500 italic">
                * Máxima clásica de William Kent: "Todo atributo debe depender de la clave (1FN), de toda la clave (2FN) y de nada más que de la clave (3FN)".
            </p>
        </section>

        <!-- SECCIÓN 15: LIMITACIONES DE 3FN -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                15. El Caso Especial de Múltiples Claves Candidatas Solapadas
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                La 3FN original permitía que un determinante no fuera superclave si el dependiente era un atributo primo (Condición B). Esto deja escapar anomalías cuando existen dos claves candidatas compuestas que comparten atributos entre sí (solapadas).
            </p>
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1 font-mono">
                <p class="text-slate-700">Relación: ATENCION_MEDICA(id_paciente, especialidad, id_medico)</p>
                <p class="text-blue-600">DF1: {id_paciente, especialidad} --&gt; {id_medico} (Clave candidata 1)</p>
                <p class="text-blue-600">DF2: {id_medico} --&gt; {especialidad} (Un médico solo tiene una especialidad)</p>
                <p class="text-slate-500">Clave candidata 2: {id_paciente, id_medico}</p>
                <p class="text-rose-600">¡Cumple 3FN porque {especialidad} es atributo primo, pero {id_medico} determina {especialidad} sin ser superclave!</p>
            </div>
        </section>

        <!-- SECCIÓN 16: FORMA NORMAL DE BOYCE-CODD (FNBC) -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                16. Forma Normal de Boyce-Codd (FNBC / BCNF)
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Formulada en 1974 por Raymond F. Boyce y Edgar F. Codd, elimina la indulgencia de la Condición B de la 3FN. Una relación está en <strong>FNBC</strong> si y solo si:
            </p>
            <div class="p-6 bg-[#003366] text-white rounded-2xl mb-6">
                <h5 class="text-sm font-black uppercase text-[#00aaff] mb-2">Definición Estricta de FNBC</h5>
                <p class="text-xs leading-relaxed">
                    Para toda dependencia funcional no trivial $X \\rightarrow Y$, <strong>$X$ debe ser forzosamente una SUPERCLAVE de la relación.</strong>
                </p>
                <p class="text-[11px] text-slate-300 mt-2">
                    En FNBC no existen excepciones: cualquier determinante debe ser capaz de identificar unívocamente a cada tupla de la tabla. Toda relación en FNBC está automáticamente en 3FN.
                </p>
            </div>
        </section>

        <!-- SECCIÓN 17: DESCOMPOSICIÓN SIN PÉRDIDA -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                17. Propiedad de Descomposición Sin Pérdida de Información (Lossless Join)
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Al descomponer una relación $R$ en dos relaciones $R_1$ y $R_2$, es imperativo que la unión natural posterior ($R_1 \\bowtie R_2$) reconstruya exactamente la relación original $R$ sin generar tuplas espurias o falsas.
            </p>

            <div class="bg-slate-900 rounded-2xl p-6 text-white font-mono text-xs overflow-x-auto mb-6">
                <div class="text-slate-400 mb-2">// Teorema Formal de Descomposición Sin Pérdida:</div>
                <div class="text-yellow-400">La descomposición de R en (R1, R2) es sin pérdida si y solo si:</div>
                <div class="text-emerald-400 mt-2">(R1 ∩ R2) ──► R1   O BIEN   (R1 ∩ R2) ──► R2</div>
                <div class="text-slate-400 mt-2">// Es decir, los atributos comunes deben ser superclave de al menos una de las dos tablas resultantes.</div>
            </div>
        </section>

        <!-- SECCIÓN 18: PRESERVACIÓN DE DEPENDENCIAS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                18. Preservación de Dependencias Funcionales
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Una descomposición **preserva dependencias** si al verificar las restricciones de integridad en cada tabla descompuesta por separado, se garantizan implícitamente todas las dependencias del esquema original $F$, sin necesidad de realizar costosas operaciones de reunión (<code class="font-mono text-xs">JOIN</code>).
            </p>
            <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 leading-relaxed">
                <strong>Compromiso Teórico Fundamental:</strong> Siempre es posible alcanzar una descomposición en <strong>3FN</strong> que sea simultáneamente <em>sin pérdida de información</em> y <em>con preservación de dependencias</em>. Sin embargo, para <strong>FNBC</strong>, en ocasiones no se puede garantizar la preservación de dependencias sin mantener redundancias.
            </div>
        </section>

        <!-- SECCIÓN 19: CUARTA Y QUINTA FORMA NORMAL -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                19. Cuarta (4FN) y Quinta Forma Normal (5FN): Panorama General
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <span class="text-[10px] font-black uppercase tracking-widest text-indigo-600 block mb-1">Dependencias Multivaluadas (DMV)</span>
                    <h5 class="text-base font-bold text-[#003366] mb-2">Cuarta Forma Normal (4FN)</h5>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Aborda dependencias multivaluadas independientes ($X \\twoheadrightarrow Y$). Ocurre cuando dos hechos independientes de tipo 1:N sobre la misma entidad se almacenan en una sola tabla (ej. un médico que domina varios idiomas y opera en varias sedes). Se resuelve segregando en dos tablas independientes.
                    </p>
                </div>

                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <span class="text-[10px] font-black uppercase tracking-widest text-emerald-600 block mb-1">Dependencias de Reunión (PJ/NF)</span>
                    <h5 class="text-base font-bold text-[#003366] mb-2">Quinta Forma Normal (5FN)</h5>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Conocida como Forma Normal de Proyección-Reunión. Garantiza que una tabla no pueda descomponerse en tres o más relaciones más pequeñas sin pérdida de información, cuando no existen dependencias funcionales evidentes. Rara vez requerida en aplicaciones comerciales convencionales.
                    </p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 20: CUÁNDO DESNORMALIZAR -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                20. Desnormalización Controlada en Entornos OLAP y Big Data
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Aunque la normalización (hasta 3FN/FNBC) es el estándar incuestionable para sistemas transaccionales <strong>OLTP</strong> (donde predominan escrituras rápidas y concurrentes), en sistemas analíticos <strong>OLAP</strong> (Data Warehouses, Big Data, BI) se recurre a la desnormalización consciente:
            </p>

            <div class="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200 mb-8">
                <table class="w-full text-left border-collapse text-xs">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase tracking-wider">
                            <th class="p-3.5 font-black">Criterio</th>
                            <th class="p-3.5 font-black">Esquema Normalizado (3FN / OLTP)</th>
                            <th class="p-3.5 font-black">Esquema Desnormalizado (Estrella / OLAP)</th>
                        </tr>
                    </thead>
                    <tbody class="text-slate-700 divide-y divide-slate-100">
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold">Objetivo Principal</td>
                            <td class="p-3.5">Integridad transaccional e inserciones seguras.</td>
                            <td class="p-3.5">Velocidad máxima de lectura y análisis masivo.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold">Consumo de Disco</td>
                            <td class="p-3.5">Mínimo (sin redundancias).</td>
                            <td class="p-3.5">Alto (datos precalculados y duplicados).</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold">Uso de JOINs</td>
                            <td class="p-3.5">Múltiples JOINs requeridos por consulta.</td>
                            <td class="p-3.5">Consultas directas a tablas anchas con pocos JOINs.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- RESUMEN FINAL DEL TEMA -->
        <section class="bg-gradient-to-br from-[#001f3f] to-[#003366] p-8 md:p-12 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
            <i class="fas fa-filter absolute -right-10 -bottom-10 text-white/5 text-[18rem] rotate-12 pointer-events-none"></i>
            
            <div class="relative z-10">
                <span class="text-xs font-black uppercase tracking-[0.3em] text-[#00aaff] block mb-2">Síntesis Formativa Técnica</span>
                <h3 class="text-3xl font-black uppercase text-white mb-6">Resumen Ejecutivo de la Unidad 3</h3>
                
                <div class="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">
                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Diagnóstico de Anomalías</h4>
                        <p class="text-slate-200">
                            Las anomalías de inserción, borrado y modificación son causadas por almacenar hechos dispares en una sola tabla. La normalización descompone las relaciones mediante dependencias funcionales formalmente verificadas.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Secuencia Canónica 1FN - 2FN - 3FN</h4>
                        <p class="text-slate-200">
                            La 1FN exige atomicidad en los valores. La 2FN erradica dependencias parciales de claves compuestas. La 3FN suprime dependencias transitivas entre atributos no primos, asegurando que cada campo describa exclusivamente a la clave primaria.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Rigor de Boyce-Codd (FNBC)</h4>
                        <p class="text-slate-200">
                            Extiende la 3FN exigiendo que todo determinante sea invariablemente una superclave, eliminando anomalías residuales en esquemas que involucran claves candidatas compuestas solapadas.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Propiedades de Descomposición</h4>
                        <p class="text-slate-200">
                            Toda descomposición debe certificar la reunión sin pérdida de información (Lossless Join) mediante superclaves compartidas, preservando la totalidad de dependencias funcionales para garantizar la exactitud de los datos.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;