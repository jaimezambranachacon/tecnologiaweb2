// content/texto_base_u02.js

const pag_texto_base_u02 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <!-- HEADER PRINCIPAL -->
    <header class="mb-20">
        <span class="text-[#00aaff] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-sitemap text-lg"></i> TEXTO GUÍA BASE / UNIDAD 2
        </span>
        <h1 class="text-4xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            DISEÑO Y MODELADO CONCEPTUAL<br>
            <span class="text-[#00aaff]">MODELO ENTIDAD - RELACIÓN (MER)</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl leading-relaxed">
            Ingeniería de requerimientos de datos, abstracción formal, Modelo Entidad-Relación Extendido (MERE), cardinalidades, entidades débiles, generalización y algoritmos de transformación sistemática al esquema lógico relacional.
        </p>
        <div class="h-2 w-24 bg-[#00aaff] mt-8 rounded-full"></div>
    </header>

    <div class="max-w-5xl space-y-16">

        <!-- INTRODUCCIÓN AL TEMA -->
        <section class="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-8 border-[#003366] rounded-r-3xl shadow-sm">
            <h4 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-2">Fundamentación Teórica</h4>
            <p class="text-lg md:text-xl text-slate-800 leading-relaxed font-semibold italic mb-4">
                "El éxito de una base de datos no radica en el motor en que se ejecute, sino en la fidelidad y rigor con que su esquema conceptual abstrae las reglas de negocio del mundo real sin ambigüedades."
            </p>
            <p class="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                Esta unidad aborda la fase más crítica de la ingeniería de datos: la transición desde el discurso informal del usuario hacia un modelo gráfico matemáticamente riguroso (Modelo Entidad-Relación formulado por Peter Chen y sus extensiones), sentando las bases algorítmicas para su posterior traducción en tablas relacionales normalizadas.
            </p>
        </section>

        <!-- SECCIÓN 1: FASES DEL CICLO DE VIDA DEL DISEÑO -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. Ciclo de Vida del Diseño de Bases de Datos
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Construir un repositorio de persistencia exige una metodología secuencial estructurada. Intentar codificar sentencias DDL en un gestor SQL sin un diseño conceptual previo conduce de forma inevitable al fracaso arquitectónico y a la corrupción lógica de datos.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] block mb-1">Fase 1: Independiente de Software</span>
                    <h5 class="font-black text-slate-800 text-base mb-2">Diseño Conceptual</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Abstracción pura de las necesidades del negocio en diagramas formales (MER / MERE). Define entidades, atributos y vínculos sin considerar el SGBD final.
                    </p>
                </div>

                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <span class="text-[10px] font-black uppercase tracking-widest text-indigo-600 block mb-1">Fase 2: Dependiente del Modelo</span>
                    <h5 class="font-black text-slate-800 text-base mb-2">Diseño Lógico</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Mapeo sistemático de los diagramas conceptuales hacia el modelo de destino (típicamente el Modelo Relacional de tablas, tuplas, claves primarias y foráneas).
                    </p>
                </div>

                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <span class="text-[10px] font-black uppercase tracking-widest text-emerald-600 block mb-1">Fase 3: Dependiente del Gestor</span>
                    <h5 class="font-black text-slate-800 text-base mb-2">Diseño Físico</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Implementación específica en el motor (PostgreSQL, MySQL): selección de motores de almacenamiento, tipos de datos físicos, índices B-Tree y particiones.
                    </p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 2: RECOLECCIÓN Y ANÁLISIS DE REQUERIMIENTOS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. Levantamiento y Análisis de Requerimientos del Universo de Discurso
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                El **Universo de Discurso (UoD)** es el fragmento de la realidad que la base de datos debe representar. Los requerimientos se obtienen mediante entrevistas técnicas, análisis de formularios impresos, flujos documentales y reglamentos operativos institucionales.
            </p>

            <div class="bg-slate-900 rounded-2xl p-6 text-white font-mono text-xs overflow-x-auto mb-6">
                <div class="text-slate-400 mb-2">// Técnica de Análisis Léxico-Semántico de Requerimientos:</div>
                <div class="text-yellow-400">"Los PACIENTES son atendidos por uno o varios MÉDICOS, generándose una CONSULTA médica."</div>
                <div class="text-slate-400 mt-2">┌─ Sustantivos Clave  ───► Candidatos a ENTIDADES (Paciente, Medico, Consulta)</div>
                <div class="text-slate-400">├─ Verbos Principales ───► Candidatos a RELACIONES (Atender, Generar, Prescribir)</div>
                <div class="text-slate-400">└─ Adjetivos/Cualidades ──► Candidatos a ATRIBUTOS (Nombre, Fecha, Diagnóstico, Dosis)</div>
            </div>
        </section>

        <!-- SECCIÓN 3: CONCEPTO FORMAL DE ENTIDAD -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. La Entidad: Concepto, Conjunto de Entidades e Instancias
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Una **Entidad** es cualquier objeto, persona, concepto abstracto o evento del mundo real que posee existencia propia, es distinguible de los demás y sobre el cual la organización necesita recolectar y almacenar datos.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] block mb-1">Entidades Concretas / Tangibles</span>
                    <h5 class="text-base font-bold text-slate-800 mb-2">Objetos Físicamente Palpables</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Poseen presencia física medible en el espacio real. Ejemplos directos: <code>PACIENTE</code>, <code>MEDICAMENTO</code>, <code>CAMILLA</code>, <code>VEHÍCULO</code>.
                    </p>
                </div>

                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <span class="text-[10px] font-black uppercase tracking-widest text-indigo-600 block mb-1">Entidades Conceptuales / Intangibles</span>
                    <h5 class="text-base font-bold text-slate-800 mb-2">Construcciones Lógicas o Eventos</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Existencia basada en conceptos temporales o acuerdos. Ejemplos directos: <code>INTERNACIÓN</code>, <code>TRANSACCIÓN</code>, <code>ESPECIALIDAD</code>, <code>DIAGNÓSTICO</code>.
                    </p>
                </div>
            </div>
            <p class="text-xs text-slate-500 italic">
                * Nota conceptual: El <strong>Tipo de Entidad</strong> es la definición estructural abstracta (intensión), mientras que la <strong>Instancia</strong> es el elemento concreto registrado en un momento dado (extensión).
            </p>
        </section>

        <!-- SECCIÓN 4: ANATOMÍA DE LOS ATRIBUTOS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. Anatomía y Taxonomía Completa de los Atributos
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Los **atributos** son las propiedades o características descriptivas que modelan y califican a un tipo de entidad o relación. Su naturaleza determina el nivel de detalle alcanzado en la base de datos:
            </p>

            <div class="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200 mb-6">
                <table class="w-full text-left border-collapse text-xs">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase tracking-wider">
                            <th class="p-3.5 font-black">Clasificación</th>
                            <th class="p-3.5 font-black">Comportamiento Estructural</th>
                            <th class="p-3.5 font-black">Ejemplo de Modelado</th>
                        </tr>
                    </thead>
                    <tbody class="text-slate-700 divide-y divide-slate-100">
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-slate-800">Simple / Atómico</td>
                            <td class="p-3.5">Valor indivisible dentro del dominio de la aplicación.</td>
                            <td class="p-3.5 font-mono text-blue-600">edad, peso_kg, rh_sanguineo</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-slate-800">Compuesto</td>
                            <td class="p-3.5">Subdividido jerárquicamente en componentes atómicos independientes.</td>
                            <td class="p-3.5 font-mono text-cyan-600">direccion (calle, numero, zona, ciudad)</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-slate-800">Monovaluado</td>
                            <td class="p-3.5">Alberga exactamente un solo valor por cada instancia de la entidad.</td>
                            <td class="p-3.5 font-mono text-indigo-600">numero_cedula, fecha_nacimiento</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-slate-800">Multivaluado</td>
                            <td class="p-3.5">Puede almacenar un conjunto de múltiples valores simultáneos.</td>
                            <td class="p-3.5 font-mono text-emerald-600">{telefonos_contacto}, {alergias}</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-slate-800">Derivado / Calculado</td>
                            <td class="p-3.5">No se almacena físicamente; se calcula a partir de otros atributos base.</td>
                            <td class="p-3.5 font-mono text-amber-600">edad (calculada de fecha_nacimiento y fecha_actual)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- SECCIÓN 5: TEORÍA DE DOMINIOS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                5. Dominios y Restricciones de Tipado Atómico
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                El **Dominio** formal $D$ de un atributo representa el conjunto finito o infinito de valores escalares válidos y atómicos que este puede albergar legítimamente. Operativamente, actúa como la primera barrera defensiva contra la corrupción de datos.
            </p>
            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-2">
                <div class="flex items-center gap-3">
                    <span class="font-bold text-[#003366] w-36 uppercase">Dominio Escalar:</span>
                    <span class="text-slate-600 font-mono">D_temperatura = Real con dos decimales | 34.00 &lt;= T &lt;= 43.00 (°C)</span>
                </div>
                <div class="flex items-center gap-3">
                    <span class="font-bold text-[#003366] w-36 uppercase">Dominio Enumerado:</span>
                    <span class="text-slate-600 font-mono">D_triage = {'ROJO', 'AMARILLO', 'VERDE', 'AZUL'}</span>
                </div>
                <div class="flex items-center gap-3">
                    <span class="font-bold text-[#003366] w-36 uppercase">Valor Nulo (NULL):</span>
                    <span class="text-slate-600">Indica ausencia deliberada de valor, dato desconocido o valor no aplicable temporalmente.</span>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 6: CLAVES SUPERCLAVE, CANDIDATA Y PRIMARIA -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                6. Teoría de Identificadores: Superclaves, Candidatas y Clave Primaria
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Para que una entidad posea rigurosa existencia relacional, sus instancias deben ser unívocamente distinguibles. Esto se resuelve mediante la jerarquía de claves:
            </p>

            <div class="space-y-4 mb-6">
                <div class="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <span class="text-[10px] font-black uppercase tracking-widest text-slate-400">Nivel 1: Identificación Genérica</span>
                    <h5 class="text-base font-bold text-[#003366] mt-0.5 mb-1">Superclave (Superkey)</h5>
                    <p class="text-xs text-slate-600">Cualquier subconjunto de uno o más atributos que identifica a una instancia de forma única. Puede contener atributos redundantes que no son estrictamente necesarios para la unicidad (ej. <code>{ci, nombre, telefono}</code>).</p>
                </div>

                <div class="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff]">Nivel 2: Minimizabilidad Rigurosa</span>
                    <h5 class="text-base font-bold text-[#003366] mt-0.5 mb-1">Clave Candidata (Candidate Key)</h5>
                    <p class="text-xs text-slate-600">Una superclave mínima. Si se le retira cualquier atributo al conjunto, deja de ser superclave. Debe cumplir invariablemente dos propiedades: <strong>Unicidad</strong> e <strong>Irreductibilidad</strong> (ej. <code>{ci}</code> o <code>{numero_expediente}</code>).</p>
                </div>

                <div class="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <span class="text-[10px] font-black uppercase tracking-widest text-indigo-600">Nivel 3: Selección de Diseño</span>
                    <h5 class="text-base font-bold text-[#003366] mt-0.5 mb-1">Clave Primaria (Primary Key - PK)</h5>
                    <p class="text-xs text-slate-600">La clave candidata formalmente seleccionada por el diseñador de la base de datos para identificar unívocamente las tuplas en todo el sistema. No admite valores nulos ni mutaciones en el tiempo.</p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 7: CLAVES SUBROGADAS VS NATURALES -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                7. Claves Naturales vs. Claves Subrogadas (Surrogate Keys)
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <h5 class="font-bold text-[#003366] text-sm uppercase mb-2">Clave Natural</h5>
                    <p class="text-xs text-slate-600 leading-relaxed mb-3">
                        Atributo preexistente en el dominio del negocio (ej. Cédula de Identidad, Código ISBN de un libro, Placa vehicular).
                    </p>
                    <ul class="text-[11px] text-slate-500 space-y-1 list-disc list-inside">
                        <li><strong>Ventaja:</strong> Posee significado intrínseco directo para el usuario.</li>
                        <li><strong>Riesgo:</strong> Modificaciones gubernamentales o duplicidades externas pueden forzar costosas actualizaciones en cascada.</li>
                    </ul>
                </div>

                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <h5 class="font-bold text-[#003366] text-sm uppercase mb-2">Clave Subrogada (Artificial)</h5>
                    <p class="text-xs text-slate-600 leading-relaxed mb-3">
                        Identificador numérico artificial sin significado en el mundo real, generado automáticamente por el SGBD (ej. <code>id_paciente SERIAL / UUID</code>).
                    </p>
                    <ul class="text-[11px] text-slate-500 space-y-1 list-disc list-inside">
                        <li><strong>Ventaja:</strong> Extremadamente eficiente en almacenamiento e indexación; inmutable y aislada de cambios regulatorios.</li>
                        <li><strong>Riesgo:</strong> Requiere índices secundarios adicionales de unicidad para evitar duplicidades reales.</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 8: CONCEPTO FORMAL DE RELACIÓN -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                8. La Relación o Vínculo: Vínculos Semánticos y Grado
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Una **Relación** (o conjunto de relaciones) es la asociación matemática que liga a dos o más tipos de entidades independientes. El **Grado** de una relación está determinado por el número de tipos de entidad participantes:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
                    <div class="w-9 h-9 mx-auto bg-blue-100 text-[#003366] rounded-xl flex items-center justify-center font-bold text-xs mb-2">1</div>
                    <strong class="text-xs text-slate-800 uppercase block mb-1">Unaria (Recursiva)</strong>
                    <p class="text-[11px] text-slate-500">Liga a una entidad consigo misma. Ejemplo: <code>EMPLEADO</code> supervisa a otro <code>EMPLEADO</code>.</p>
                </div>

                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
                    <div class="w-9 h-9 mx-auto bg-cyan-100 text-[#00aaff] rounded-xl flex items-center justify-center font-bold text-xs mb-2">2</div>
                    <strong class="text-xs text-slate-800 uppercase block mb-1">Binaria</strong>
                    <p class="text-[11px] text-slate-500">Asocia a dos entidades diferentes. Es el tipo más común (95% de los sistemas). Ejemplo: <code>MÉDICO</code> atiende <code>PACIENTE</code>.</p>
                </div>

                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
                    <div class="w-9 h-9 mx-auto bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center font-bold text-xs mb-2">3+</div>
                    <strong class="text-xs text-slate-800 uppercase block mb-1">Ternaria / N-aria</strong>
                    <p class="text-[11px] text-slate-500">Asocia a tres o más entidades simultáneamente en un único evento. Ejemplo: <code>MÉDICO</code> prescribe <code>FÁRMACO</code> a <code>PACIENTE</code>.</p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 9: ATRIBUTOS PROPIOS EN RELACIONES -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                9. Atributos Propios en Relaciones
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Una relación no siempre es un mero enlace pasivo; con frecuencia contiene datos descriptivos que se generan única y exclusivamente como resultado del encuentro de ambas entidades:
            </p>

            <div class="bg-slate-900 rounded-2xl p-6 text-white font-mono text-xs overflow-x-auto mb-6">
                <div class="text-slate-400 mb-2">// Ejemplo en Entorno Clínico:</div>
                <div class="text-emerald-400">[PACIENTE] ─────── &lt; INTERNACIÓN &gt; ─────── [CAMA_HOSPITALARIA]</div>
                <div class="text-yellow-400 pl-24">│</div>
                <div class="text-cyan-300 pl-16">┌───────┴────────────────────────────┐</div>
                <div class="text-cyan-300 pl-16">│ Atributos propios de la relación:  │</div>
                <div class="text-cyan-300 pl-16">│ - fecha_ingreso                    │</div>
                <div class="text-cyan-300 pl-16">│ - fecha_alta                       │</div>
                <div class="text-cyan-300 pl-16">│ - diagnostico_admision             │</div>
                <div class="text-cyan-300 pl-16">└────────────────────────────────────┘</div>
                <div class="text-slate-400 mt-2">// La "fecha_ingreso" no pertenece al paciente ni a la cama por separado; describe el acto de internación.</div>
            </div>
        </section>

        <!-- SECCIÓN 10: CARDINALIDAD Y RAZÓN DE CARDINALIDAD -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                10. Razón de Cardinalidad Estructural (1:1, 1:N, N:M)
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                La **Razón de Cardinalidad** especifica el número máximo de instancias de una entidad que pueden asociarse con una instancia concreta de otra entidad relacionada:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <span class="text-xl font-black text-[#003366] block mb-1">1 : 1</span>
                    <strong class="text-xs uppercase text-slate-800 block mb-2">Uno a Uno</strong>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Cada registro en $A$ se vincula con máximo un registro en $B$, y viceversa. Ejemplo: <code>PACIENTE</code> posee una única <code>HISTORIA_CLÍNICA_MATRIZ</code>.
                    </p>
                </div>

                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <span class="text-xl font-black text-[#00aaff] block mb-1">1 : N</span>
                    <strong class="text-xs uppercase text-slate-800 block mb-2">Uno a Muchos</strong>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Un registro en $A$ puede vincularse con muchas tuplas en $B$, pero una tupla en $B$ solo pertenece a un registro en $A$. Ejemplo: <code>SALA</code> aloja muchas <code>CAMAS</code>.
                    </p>
                </div>

                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <span class="text-xl font-black text-indigo-600 block mb-1">N : M</span>
                    <strong class="text-xs uppercase text-slate-800 block mb-2">Muchos a Muchos</strong>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Cualquier registro en $A$ se relaciona con múltiples tuplas de $B$, y viceversa. Ejemplo: <code>MÉDICO</code> atiende a múltiples <code>PACIENTES</code>.
                    </p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 11: PARTICIPACIÓN TOTAL Y PARCIAL -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                11. Restricciones de Participación: Existencia Total y Parcial
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                La restricción de participación (o cardinalidad mínima) dictamina si la existencia de una entidad depende obligatoriamente de estar vinculada a otra a través de la relación:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="w-3 h-3 rounded-full bg-blue-600"></span>
                        <h5 class="font-bold text-[#003366] text-sm uppercase">Participación Total (Dependencia)</h5>
                    </div>
                    <p class="text-xs text-slate-600 leading-relaxed mb-3">
                        <strong>Cardinalidad mínima = 1.</strong> Cada instancia de la entidad debe intervenir forzosamente en el vínculo. Se representa gráficamente con una <strong>línea doble</strong> en el diagrama de Chen.
                    </p>
                    <div class="p-3 bg-blue-50 rounded-xl text-[11px] text-blue-900 font-mono">
                        Ejemplo: Toda CONSULTA debe estar asignada obligatoriamente a un PACIENTE. No puede existir una consulta huérfana.
                    </div>
                </div>

                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="w-3 h-3 rounded-full bg-slate-400"></span>
                        <h5 class="font-bold text-[#003366] text-sm uppercase">Participación Parcial (Opcional)</h5>
                    </div>
                    <p class="text-xs text-slate-600 leading-relaxed mb-3">
                        <strong>Cardinalidad mínima = 0.</strong> Solo algunas instancias de la entidad intervienen en el vínculo; otras pueden existir sin estar vinculadas. Se representa mediante una <strong>línea simple</strong>.
                    </p>
                    <div class="p-3 bg-slate-100 rounded-xl text-[11px] text-slate-700 font-mono">
                        Ejemplo: Un MÉDICO puede o no tener turnos de guardia activos asignados hoy (min = 0).
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 12: NOTACIONES FORMALES -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                12. Comparativa de Notaciones: Chen, Min/Max y Crow's Foot (Pata de Gallo)
            </h3>
            <div class="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200 mb-6">
                <table class="w-full text-left border-collapse text-xs">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase tracking-wider">
                            <th class="p-3.5 font-black">Notación</th>
                            <th class="p-3.5 font-black">Representación Gráfica</th>
                            <th class="p-3.5 font-black">Expresión de Límites</th>
                            <th class="p-3.5 font-black">Ámbito de Uso Predominante</th>
                        </tr>
                    </thead>
                    <tbody class="text-slate-700 divide-y divide-slate-100">
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-slate-800">Chen Clásica (1976)</td>
                            <td class="p-3.5">Rectángulos (Entidades), Rombos (Relaciones), Óvalos (Atributos).</td>
                            <td class="p-3.5 font-mono text-blue-600">Líneas con 1, N, M</td>
                            <td class="p-3.5">Ámbito académico y modelado conceptual inicial de alto nivel.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-slate-800">Notación (Min, Max)</td>
                            <td class="p-3.5">Par de valores enteros en los extremos de la relación.</td>
                            <td class="p-3.5 font-mono text-cyan-600">(0, 1), (1, 1), (0, N), (1, N)</td>
                            <td class="p-3.5">Diseño formal preciso; erradica ambigüedades de participación.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-slate-800">Crow's Foot (Pata de Gallo / Barker)</td>
                            <td class="p-3.5">Cajas tabulares conectadas; extremos terminados en ramificaciones trípodes.</td>
                            <td class="p-3.5 font-mono text-indigo-600">Círculo (0), Barra (1), Trípode (N)</td>
                            <td class="p-3.5">Estándar corporativo global en herramientas CASE (Workbench, Erwin).</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- SECCIÓN 13: ENTIDADES DÉBILES -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                13. Entidades Débiles: Dependencia de Existencia y de Identificación
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Una **Entidad Débil** es aquella que no posee suficientes atributos propios para constituir una clave primaria independiente. Su existencia depende de una **Entidad Fuerte (Propietaria o Padre)**, y se distingue en el diagrama con **doble borde rectangular**:
            </p>

            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl mb-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h5 class="font-bold text-[#003366] text-xs uppercase mb-2">Clave Parcial o Discriminador</h5>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Es el conjunto de atributos de la entidad débil que permite distinguir sus instancias particulares, pero <em>únicamente</em> cuando van acopladas a la clave primaria de la entidad fuerte. Se grafica con una <strong>línea de puntos o guiones</strong> debajo del nombre del atributo.
                        </p>
                    </div>
                    <div class="bg-white p-4 rounded-xl border border-slate-200 text-xs font-mono">
                        <strong class="text-blue-600 block mb-1">[ENTIDAD FUERTE]</strong>
                        PACIENTE (<u>cod_paciente</u>, nombre, fecha_nac)<br><br>
                        <strong class="text-indigo-600 block mb-1">[ENTIDAD DÉBIL]</strong>
                        DEPENDIENTE_FAMILIAR (<u>cod_paciente</u>*, <span class="border-b border-dashed border-slate-800">numero_hijo</span>, nombre, parentesco)
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 14: RELACIONES RECURSIVAS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                14. Relaciones Unarias (Recursivas) y Asignación de Roles
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Ocurre cuando el mismo tipo de entidad interviene más de una vez en un conjunto de relaciones bajo **roles distintos**. Resulta imperativo etiquetar formalmente las líneas con el rol que cumple cada extremo:
            </p>

            <div class="bg-slate-900 rounded-2xl p-6 text-white font-mono text-xs overflow-x-auto mb-6">
                <div class="text-slate-400 mb-2">// Ejemplo de Supervisión Médica Interna:</div>
                <div class="text-cyan-300">                   ┌──────────────────────────────┐</div>
                <div class="text-cyan-300">                   │   Rol: "Supervisor / Tutor"   │ (1, 1)</div>
                <div class="text-cyan-300">                   ▼                              │</div>
                <div class="text-emerald-400">            [ MEDICO ] ──── &lt; ASIGNA_SUPERVISION &gt; ┘</div>
                <div class="text-cyan-300">                   ▲                              │</div>
                <div class="text-cyan-300">                   │   Rol: "Médico Residente"    │ (0, N)</div>
                <div class="text-cyan-300">                   └──────────────────────────────┘</div>
                <div class="text-slate-400 mt-2">// Un médico tutor supervisa a muchos residentes (1:N); un residente tiene un único tutor asignado.</div>
            </div>
        </section>

        <!-- SECCIÓN 15: MODELO EXTENDIDO MERE -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                15. Modelo Entidad-Relación Extendido (MERE): Generalización y Especialización
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Para capturar semánticas avanzadas de jerarquía y herencia estructural, el **MERE** introduce la relación de superclase y subclase (relaciones "ES UN" / "IS-A"):
            </p>

            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl mb-6">
                <div class="text-xs leading-relaxed space-y-3">
                    <p>
                        <strong>Superclase (Entidad Genérica):</strong> Contiene los atributos compartidos universales. Ejemplo: <code>PERSONA</code> (id, ci, nombres, apellidos, telefono).
                    </p>
                    <p>
                        <strong>Subclases (Entidades Especializadas):</strong> Heredan automáticamente la clave primaria y atributos de la superclase, agregando exclusivamente sus atributos particulares:
                    </p>
                    <ul class="list-disc list-inside pl-4 font-mono text-blue-900">
                        <li>MEDICO hereda de PERSONA + (nro_matricula_profesional, especialidad)</li>
                        <li>PACIENTE hereda de PERSONA + (tipo_seguro, grupo_sanguineo)</li>
                        <li>ADMINISTRATIVO hereda de PERSONA + (cargo, escala_salarial)</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 16: RESTRICCIONES DE ESPECIALIZACIÓN -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                16. Restricciones de Disyunción y Completitud en Jerarquías
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <h5 class="font-bold text-[#003366] text-xs uppercase mb-2">Restricción de Disyunción (Disjointness)</h5>
                    <div class="text-xs text-slate-600 space-y-2">
                        <p><strong>Disjunta (d):</strong> Una instancia de la superclase puede pertenecer a lo sumo a una sola subclase. (Un empleado es a tiempo completo O por horas, no ambos).</p>
                        <p><strong>Solapada (o - Overlapping):</strong> Una instancia puede pertenecer simultáneamente a varias subclases. (Una persona en el hospital puede ser MÉDICO y PACIENTE a la vez).</p>
                    </div>
                </div>

                <div class="p-5 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <h5 class="font-bold text-[#003366] text-xs uppercase mb-2">Restricción de Completitud (Completeness)</h5>
                    <div class="text-xs text-slate-600 space-y-2">
                        <p><strong>Total (Línea Doble):</strong> Toda entidad de la superclase debe pertenecer obligatoriamente al menos a una subclase.</p>
                        <p><strong>Parcial (Línea Simple):</strong> Pueden existir entidades en la superclase que no pertenezcan a ninguna subclase especializada.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 17: ALGORITMOS DE MAPEO (REGLAS 1 A 4) -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                17. Algoritmos de Transformación: Del MER al Esquema Relacional (Reglas 1 a 4)
            </h3>
            <div class="space-y-4 mb-6 text-xs">
                <div class="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl">
                    <strong class="text-slate-800 uppercase block font-black">Regla 1: Mapeo de Entidades Fuertes</strong>
                    <p class="text-slate-600 mt-0.5">Cada entidad regular se convierte en una tabla. Sus atributos simples son columnas; se escoge formalmente la Clave Primaria (PK).</p>
                </div>

                <div class="p-4 bg-slate-50 border-l-4 border-cyan-500 rounded-r-xl">
                    <strong class="text-slate-800 uppercase block font-black">Regla 2: Mapeo de Entidades Débiles</strong>
                    <p class="text-slate-600 mt-0.5">Se crea una tabla propia. Su Clave Primaria se compone de: [PK de la Entidad Fuerte] + [Clave Parcial de la Débil]. La PK del padre actúa como Llave Foránea (FK).</p>
                </div>

                <div class="p-4 bg-slate-50 border-l-4 border-indigo-500 rounded-r-xl">
                    <strong class="text-slate-800 uppercase block font-black">Regla 3: Mapeo de Relaciones Binarias 1:1</strong>
                    <p class="text-slate-600 mt-0.5">Se traslada la PK de la entidad con participación parcial hacia la entidad con participación total como Clave Foránea (FK), añadiéndole una restricción de unicidad (UNIQUE).</p>
                </div>

                <div class="p-4 bg-slate-50 border-l-4 border-emerald-500 rounded-r-xl">
                    <strong class="text-slate-800 uppercase block font-black">Regla 4: Mapeo de Relaciones Binarias 1:N</strong>
                    <p class="text-slate-600 mt-0.5">Regla de oro: <em>"El lado N recibe la llave"</em>. Se propaga la PK del lado 1 como Clave Foránea (FK) dentro de la tabla del lado N, junto a los atributos propios de la relación.</p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 18: ALGORITMOS DE MAPEO (REGLAS 5 A 7) -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                18. Algoritmos de Transformación: N:M, Multivaluados y Jerarquías (Reglas 5 a 7)
            </h3>
            <div class="space-y-4 mb-6 text-xs">
                <div class="p-4 bg-slate-50 border-l-4 border-amber-500 rounded-r-xl">
                    <strong class="text-slate-800 uppercase block font-black">Regla 5: Mapeo de Relaciones Binarias N:M</strong>
                    <p class="text-slate-600 mt-0.5">Se crea obligatoriamente una <strong>nueva tabla intermedia</strong>. Su PK es compuesta, formada por la combinación de las PKs de ambas tablas. Ambas columnas actúan simultáneamente como FKs.</p>
                </div>

                <div class="p-4 bg-slate-50 border-l-4 border-purple-500 rounded-r-xl">
                    <strong class="text-slate-800 uppercase block font-black">Regla 6: Mapeo de Atributos Multivaluados</strong>
                    <p class="text-slate-600 mt-0.5">Un atributo multivaluado nunca se almacena como lista separada por comas. Se traslada a una nueva tabla subordinada cuya PK se compone de: [PK de la tabla original] + [Valor del atributo].</p>
                </div>

                <div class="p-4 bg-slate-50 border-l-4 border-rose-500 rounded-r-xl">
                    <strong class="text-slate-800 uppercase block font-black">Regla 7: Mapeo de Jerarquías de Especialización</strong>
                    <p class="text-slate-600 mt-0.5">Opción estándar: Se crea una tabla para la superclase y una tabla por cada subclase. La PK de cada subclase es exactamente la misma PK de la superclase, configurada simultáneamente como PK y FK.</p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 19: EQUIVALENCIA MER Y DIAGRAMAS UML -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                19. Correspondencia Semántica entre Diagramas E-R y Diagramas de Clases UML
            </h3>
            <div class="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200 mb-6">
                <table class="w-full text-left border-collapse text-xs">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase tracking-wider">
                            <th class="p-3.5 font-black">Concepto Modelo E-R</th>
                            <th class="p-3.5 font-black">Equivalente en Diagrama de Clases UML</th>
                            <th class="p-3.5 font-black">Diferencia Operativa Clave</th>
                        </tr>
                    </thead>
                    <tbody class="text-slate-700 divide-y divide-slate-100">
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold">Tipo de Entidad</td>
                            <td class="p-3.5 font-bold text-blue-600">Clase (Esterotipo &lt;&lt;Table&gt;&gt; o &lt;&lt;Entity&gt;&gt;)</td>
                            <td class="p-3.5">En UML las clases suelen incluir métodos y operaciones de comportamiento; en BD solo atributos de persistencia.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold">Atributo Monovaluado</td>
                            <td class="p-3.5 font-bold text-blue-600">Atributo de Clase con visibilidad</td>
                            <td class="p-3.5">En UML se especifica tipado de lenguaje orientado a objetos (ej. String, int).</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold">Conjunto de Relaciones</td>
                            <td class="p-3.5 font-bold text-blue-600">Asociación</td>
                            <td class="p-3.5">UML utiliza multiplicidades en los bordes directos: 0..1, 1..1, 0..*, 1..*.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold">Relación con Atributos Propios</td>
                            <td class="p-3.5 font-bold text-blue-600">Clase de Asociación (Association Class)</td>
                            <td class="p-3.5">Se grafica como una clase independiente unida por una línea discontinua al enlace.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold">Especialización / Generalización</td>
                            <td class="p-3.5 font-bold text-blue-600">Generalización (Flecha de Herencia hueca)</td>
                            <td class="p-3.5">Representa herencia pura estructural de atributos y comportamiento hacia clases hijas.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- SECCIÓN 20: HERRAMIENTAS CASE Y VALIDACIÓN DE ERRORES -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                20. Herramientas CASE y Errores Frecuentes de Modelado
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                El diseño asistido por computadora (CASE) mediante software profesional (MySQL Workbench, pgAdmin, Erwin, draw.io) automatiza el mapeo conceptual-físico (Ingeniería Hacia Adelante / Forward Engineering). No obstante, el diseñador debe vigilar las trampas semánticas comunes:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-xs">
                <div class="p-4 bg-rose-50 border border-rose-200 rounded-xl">
                    <strong class="font-bold text-rose-800 block mb-1">Trampa de Abanico (Fan Trap)</strong>
                    <p class="text-rose-700">Ocurre cuando un modelo representa una relación entre tres entidades donde dos ramas 1:N divergen de una entidad central, haciendo imposible deducir qué instancia de la tabla exterior se relaciona con la otra rama.</p>
                </div>

                <div class="p-4 bg-rose-50 border border-rose-200 rounded-xl">
                    <strong class="font-bold text-rose-800 block mb-1">Trampa de Brecha (Chasm Trap)</strong>
                    <p class="text-rose-700">Se produce cuando existe una vía de relación entre entidades que asume la existencia obligatoria de un vínculo, pero la participación parcial (min = 0) en una entidad intermedia rompe el camino lógico de navegación.</p>
                </div>
            </div>
        </section>

        <!-- RESUMEN FINAL DEL TEMA -->
        <section class="bg-gradient-to-br from-[#001f3f] to-[#003366] p-8 md:p-12 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
            <i class="fas fa-sitemap absolute -right-10 -bottom-10 text-white/5 text-[18rem] rotate-12 pointer-events-none"></i>
            
            <div class="relative z-10">
                <span class="text-xs font-black uppercase tracking-[0.3em] text-[#00aaff] block mb-2">Síntesis Formativa Técnica</span>
                <h3 class="text-3xl font-black uppercase text-white mb-6">Resumen Ejecutivo de la Unidad 2</h3>
                
                <div class="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">
                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Rigor de Abstracción Semántica</h4>
                        <p class="text-slate-200">
                            El modelo conceptual captura las reglas de negocio del mundo real mediante tipos de entidades (fuertes y débiles), taxonomía estricta de atributos (atómicos, compuestos, multivaluados y derivados) y dominios que previenen inconsistencias antes de escribir código.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Teoría de Identificación y Vínculos</h4>
                        <p class="text-slate-200">
                            La unicidad se fundamenta en la selección metódica de Claves Candidatas y Claves Primarias (naturales o subrogadas). Las relaciones se gobiernan por su grado, razón de cardinalidad (1:1, 1:N, N:M) y restricciones de participación total o parcial.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Extensiones Avanzadas (MERE)</h4>
                        <p class="text-slate-200">
                            La generalización y especialización permiten estructurar herencia lógica de atributos y claves entre superclases y subclases, delimitadas con precisión mediante restricciones de disyunción (disjunta/solapada) y completitud (total/parcial).
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Mapeo Algorítmico Sistemático</h4>
                        <p class="text-slate-200">
                            La transformación del diagrama al esquema relacional no es intuitiva, sino algorítmica: propagación de llaves foráneas en 1:N, generación obligatoria de tablas intermedias compuestas para N:M y segregación de atributos multivaluados en tablas satélites.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;