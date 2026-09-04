// content/texto_base_u01.js

const pag_texto_base_u01 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <!-- HEADER PRINCIPAL -->
    <header class="mb-20">
        <span class="text-[#00aaff] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-database text-lg"></i> TEXTO GUÍA BASE / UNIDAD 1
        </span>
        <h1 class="text-4xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            FUNDAMENTOS E INTRODUCCIÓN A<br>
            <span class="text-[#00aaff]">LAS BASES DE DATOS</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl leading-relaxed">
            Evolución del almacenamiento, limitaciones de archivos planos, arquitectura ANSI/SPARC, principios de diseño relacional, transacciones ACID, sublenguajes SQL y administración del catálogo del sistema.
        </p>
        <div class="h-2 w-24 bg-[#00aaff] mt-8 rounded-full"></div>
    </header>

    <div class="max-w-5xl space-y-16">

        <!-- INTRODUCCIÓN AL TEMA -->
        <section class="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-8 border-[#003366] rounded-r-3xl shadow-sm">
            <h4 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-2">Fundamentación Teórica</h4>
            <p class="text-lg md:text-xl text-slate-800 leading-relaxed font-semibold italic mb-4">
                "Los datos constituyen el activo transaccional y analítico más crítico de las organizaciones modernas. Gestionarlos bajo normas formales previene la inconsistencia, la corrupción de registros y la pérdida de soberanía de la información."
            </p>
            <p class="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                Esta unidad introduce la arquitectura de software y los fundamentos matemáticos requeridos para desacoplar el almacenamiento persistente respecto a la lógica de programación, certificando disponibilidad, concurrencia segura y alta integridad de datos.
            </p>
        </section>

        <!-- SECCIÓN 1: DATO, INFORMACIÓN Y CONOCIMIENTO -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. El Dato vs. La Información: La Pirámide del Conocimiento
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Un <strong>dato</strong> es una representación formal y atómica sin contexto intrínseco. La <strong>información</strong> surge al estructurar, clasificar y dotar de significado semántico a dichos datos para responder a una necesidad operativa.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-cube"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-base mb-1">Dato (Primitiva)</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Entidad simbólica aislada. Ejemplo: <code class="font-mono bg-slate-200 px-1 py-0.5 rounded text-slate-800">140</code>, <code class="font-mono bg-slate-200 px-1 py-0.5 rounded text-slate-800">"Positivo"</code>, <code class="font-mono bg-slate-200 px-1 py-0.5 rounded text-slate-800">90</code>.
                    </p>
                </div>

                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <div class="w-10 h-10 bg-cyan-100 text-[#00aaff] rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-network-wired"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-base mb-1">Información (Contextualizada)</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Datos procesados en un dominio concreto: "El paciente registra tensión arterial de 140/90 mmHg (Hipertensión Grado 1)".
                    </p>
                </div>

                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <div class="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-base mb-1">Conocimiento (Acción)</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Comprensión aplicada: Decisión médica fundamentada de prescribir un antihipertensivo y programar monitoreo cardiovascular continuo.
                    </p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 2: METADATOS Y DICCIONARIO -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. Metadatos: Datos que Describen Datos
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Los metadatos proporcionan el contexto estructural, técnico y descriptivo indispensable para que el motor interprete los bytes brutos almacenados en los bloques de disco magnético o de estado sólido.
            </p>

            <div class="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200 mb-6">
                <table class="w-full text-left border-collapse text-xs">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase tracking-wider">
                            <th class="p-3.5 font-black">Categoría</th>
                            <th class="p-3.5 font-black">Definición Operativa</th>
                            <th class="p-3.5 font-black">Ejemplo de Almacenamiento</th>
                        </tr>
                    </thead>
                    <tbody class="text-slate-700 divide-y divide-slate-100">
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-slate-800">Estructural</td>
                            <td class="p-3.5">Tipado, longitudes de campos, dominios y relaciones foráneas.</td>
                            <td class="p-3.5 font-mono text-blue-600">cod_paciente INT NOT NULL AUTO_INCREMENT</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-slate-800">Descriptivo</td>
                            <td class="p-3.5">Etiquetas para identificación y catalogación semántica del recurso.</td>
                            <td class="p-3.5 font-mono text-cyan-600">COMMENT ON COLUMN paciente.edad IS 'Años cumplidos'</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-slate-800">Administrativo</td>
                            <td class="p-3.5">Auditoría de seguridad, derechos de lectura y marcas temporales.</td>
                            <td class="p-3.5 font-mono text-indigo-600">created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- SECCIÓN 3: ARCHIVOS PLANOS VS SGBD -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Sistemas Basados en Archivos Tradicionales y su Fragilidad
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                En los albores de la computación, los programas leían y escribían directamente sobre archivos secuenciales (.txt, .dat, .csv). Este modelo provocaba severas patologías de software:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 bg-rose-50 border border-rose-200 rounded-xl">
                    <strong class="text-xs font-black text-rose-800 uppercase block mb-1">Redundancia e Inconsistencia</strong>
                    <p class="text-xs text-rose-700 leading-relaxed">
                        Los mismos datos se replican en múltiples aplicaciones; al actualizar el domicilio de un usuario en un archivo, los demás quedan desactualizados.
                    </p>
                </div>
                <div class="p-4 bg-rose-50 border border-rose-200 rounded-xl">
                    <strong class="text-xs font-black text-rose-800 uppercase block mb-1">Dependencia Programa-Datos</strong>
                    <p class="text-xs text-rose-700 leading-relaxed">
                        Alterar un campo (ej. expandir el código postal de 4 a 8 caracteres) forzaba la reescritura y recompilación de todo software dependiente.
                    </p>
                </div>
                <div class="p-4 bg-rose-50 border border-rose-200 rounded-xl">
                    <strong class="text-xs font-black text-rose-800 uppercase block mb-1">Aislamiento y Difícil Acceso</strong>
                    <p class="text-xs text-rose-700 leading-relaxed">
                        Obtener reportes cruzados implicaba redactar programas de extracción desde cero, elevando costos y tiempos de respuesta.
                    </p>
                </div>
                <div class="p-4 bg-rose-50 border border-rose-200 rounded-xl">
                    <strong class="text-xs font-black text-rose-800 uppercase block mb-1">Vulnerabilidad ante Concurrencia</strong>
                    <p class="text-xs text-rose-700 leading-relaxed">
                        Dos procesos escribiendo a la vez sobre el mismo bloque sobreescribían datos mutuamente sin control atómico alguno.
                    </p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 4: DEFINICIÓN FORMAL DE BASE DE DATOS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. Definición Formal de una Base de Datos
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Una <strong>Base de Datos</strong> es una colección integrada, estructurada, compartida y persistente de datos lógicamente relacionados, junto con la descripción formal de sus estructuras y restricciones (esquema), diseñada para satisfacer de forma simultánea los requerimientos de información de múltiples usuarios y aplicaciones.
            </p>
            <div class="p-4 bg-slate-50 border-l-4 border-[#00aaff] rounded-r-xl text-xs text-slate-700 leading-relaxed">
                <strong>Principios clave:</strong> Integración (un único repositorio conceptual), Persistencia (almacenamiento no volátil) y No-redundancia lógica controlada.
            </div>
        </section>

        <!-- SECCIÓN 5: EL SGBD COMO INTERMEDIARIO UNIVERSAL -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                5. El Sistema Gestor de Bases de Datos (SGBD / DBMS)
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                El <strong>SGBD</strong> es el componente de software mediador que administra el acceso, manipulación, seguridad, concurrencia e integridad física y lógica de los repositorios de información.
            </p>

            <div class="bg-slate-900 rounded-2xl p-6 text-white font-mono text-xs overflow-x-auto mb-6">
                <div class="text-slate-400 mb-2">// Flujo de Intermediación del SGBD</div>
                <div class="text-emerald-400">[Aplicación Cliente (Web / ERP / Móvil)]</div>
                <div class="text-slate-500 pl-4">│  Envía petición (SELECT / INSERT en SQL)</div>
                <div class="text-blue-400 pl-4">▼</div>
                <div class="text-cyan-300 font-bold bg-slate-800 p-3 rounded-lg border border-slate-700">
                    [ MOTOR DEL SGBD: Analizador Sintáctico + Validador de Seguridad + Optimizador de Consultas ]
                </div>
                <div class="text-slate-500 pl-4">│  Traducción a bloques binarios de lectura/escritura</div>
                <div class="text-blue-400 pl-4">▼</div>
                <div class="text-emerald-400">[Almacenamiento Físico: Discos SSD / Tablas / Índices B-Tree]</div>
            </div>
        </section>

        <!-- SECCIÓN 6: COMPONENTES INTERNOS DEL MOTOR -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                6. Componentes del Motor del SGBD
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                    <h5 class="font-bold text-[#003366] text-xs uppercase mb-1 flex items-center gap-2">
                        <i class="fas fa-microchip text-[#00aaff]"></i> Procesador de Consultas (Parser)
                    </h5>
                    <p class="text-xs text-slate-500">Valida la gramática SQL, verifica la existencia de objetos en el catálogo y traduce el código a un árbol de álgebra relacional.</p>
                </div>
                <div class="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                    <h5 class="font-bold text-[#003366] text-xs uppercase mb-1 flex items-center gap-2">
                        <i class="fas fa-gauge-high text-[#00aaff]"></i> Optimizador de Consultas (CBO)
                    </h5>
                    <p class="text-xs text-slate-500">Evalúa múltiples planes de ejecución y elige la alternativa algorítmica de menor costo en E/S de disco y ciclos de CPU.</p>
                </div>
                <div class="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                    <h5 class="font-bold text-[#003366] text-xs uppercase mb-1 flex items-center gap-2">
                        <i class="fas fa-memory text-[#00aaff]"></i> Gestor de Memoria Intermedia (Buffer Manager)
                    </h5>
                    <p class="text-xs text-slate-500">Mantiene en RAM los bloques de datos más consultados para mitigar cuellos de botella por accesos a almacenamiento secundario.</p>
                </div>
                <div class="p-4 border border-slate-200 rounded-xl bg-white shadow-sm">
                    <h5 class="font-bold text-[#003366] text-xs uppercase mb-1 flex items-center gap-2">
                        <i class="fas fa-shield-halved text-[#00aaff]"></i> Gestor de Transacciones y Recuperación
                    </h5>
                    <p class="text-xs text-slate-500">Controla bloqueos concurrentes y garantiza que el sistema pueda reconstruir un estado íntegro tras fallos eléctricos imprevistos.</p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 7: ARQUITECTURA ANSI/SPARC -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                7. La Arquitectura ANSI/SPARC de Tres Niveles
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Estandarizada en 1975 para garantizar la abstracción de la información, desacopla el almacenamiento físico de la percepción lógica de los usuarios.
            </p>

            <div class="space-y-3 mb-6">
                <div class="p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
                    <h5 class="font-black text-[#003366] text-xs uppercase">Nivel Externo (Vistas de Usuario)</h5>
                    <p class="text-xs text-slate-600 mt-0.5">Describe la porción de la base de datos relevante para cada perfil específico. Ejemplo: El recepcionista ve solo nombres y citas, sin acceso a salarios ni historias clínicas profundas.</p>
                </div>
                <div class="p-4 bg-cyan-50 border-l-4 border-cyan-500 rounded-r-xl">
                    <h5 class="font-black text-[#003366] text-xs uppercase">Nivel Conceptual (Esquema Lógico Global)</h5>
                    <p class="text-xs text-slate-600 mt-0.5">Estructura general unificada: define todas las entidades, atributos, tipos de datos y relaciones de integridad referencial, sin considerar aspectos físicos de disco.</p>
                </div>
                <div class="p-4 bg-slate-100 border-l-4 border-slate-600 rounded-r-xl">
                    <h5 class="font-black text-slate-800 text-xs uppercase">Nivel Interno (Esquema Físico)</h5>
                    <p class="text-xs text-slate-600 mt-0.5">Especifica cómo residen los datos físicamente: tamaño de bloques, algoritmos de indexación (B-Trees, Hash), particionamiento de tablas y técnicas de compresión.</p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 8: INDEPENDENCIA DE DATOS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                8. Independencia Lógica y Física de Datos
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] block mb-1">Desacoplamiento Lógico</span>
                    <h4 class="text-lg font-black text-[#003366] uppercase mb-2">Independencia Lógica</h4>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Capacidad de alterar el esquema conceptual (añadir una tabla de seguros o ampliar una columna) sin obligar a modificar las vistas externas ni los programas que no usen dichos cambios.
                    </p>
                </div>
                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <span class="text-[10px] font-black uppercase tracking-widest text-indigo-600 block mb-1">Desacoplamiento Físico</span>
                    <h4 class="text-lg font-black text-[#003366] uppercase mb-2">Independencia Física</h4>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Capacidad de modificar la organización interna de los archivos (migrar a SSD, reorganizar índices o particionar tablas en múltiples volúmenes) sin impactar el esquema conceptual ni las consultas SQL.
                    </p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 9: ROLES Y USUARIOS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                9. Usuarios y Roles en el Ecosistema de Datos
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                    <div class="w-8 h-8 mx-auto bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center font-bold text-xs mb-2">
                        <i class="fas fa-user-gear"></i>
                    </div>
                    <strong class="text-xs text-[#003366] block">DBA</strong>
                    <span class="text-[10px] text-slate-500">Respaldo, afinación, auditoría y control de accesos.</span>
                </div>
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                    <div class="w-8 h-8 mx-auto bg-cyan-100 text-[#00aaff] rounded-lg flex items-center justify-center font-bold text-xs mb-2">
                        <i class="fas fa-sitemap"></i>
                    </div>
                    <strong class="text-xs text-[#003366] block">Diseñador</strong>
                    <span class="text-[10px] text-slate-500">Modelado conceptual, normalización y reglas de negocio.</span>
                </div>
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                    <div class="w-8 h-8 mx-auto bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center font-bold text-xs mb-2">
                        <i class="fas fa-code"></i>
                    </div>
                    <strong class="text-xs text-[#003366] block">Desarrollador</strong>
                    <span class="text-[10px] text-slate-500">Escritura de consultas SQL, triggers y consumo de API.</span>
                </div>
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center">
                    <div class="w-8 h-8 mx-auto bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center font-bold text-xs mb-2">
                        <i class="fas fa-users"></i>
                    </div>
                    <strong class="text-xs text-[#003366] block">Usuario Final</strong>
                    <span class="text-[10px] text-slate-500">Interacción paramétrica mediante software de interfaz.</span>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 10: MODELOS DE DATOS HISTÓRICOS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                10. Evolución Cronológica de los Modelos de Datos
            </h3>
            <div class="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200 mb-6">
                <table class="w-full text-left border-collapse text-xs">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase tracking-wider">
                            <th class="p-3.5 font-black">Modelo</th>
                            <th class="p-3.5 font-black">Estructura Lógica</th>
                            <th class="p-3.5 font-black">Ventaja Principal</th>
                            <th class="p-3.5 font-black">Limitación Crítica</th>
                        </tr>
                    </thead>
                    <tbody class="text-slate-700 divide-y divide-slate-100">
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold">Jerárquico (1960)</td>
                            <td class="p-3.5">Árbol invertido (Padre - Hijos 1:N).</td>
                            <td class="p-3.5">Alta velocidad en accesos 1 a muchos.</td>
                            <td class="p-3.5">No modela relaciones N:M naturales sin duplicación.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold">En Red (1970)</td>
                            <td class="p-3.5">Grafos con apuntadores explícitos.</td>
                            <td class="p-3.5">Soporta relaciones N:M complejas.</td>
                            <td class="p-3.5">Extrema complejidad de navegación por punteros.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-blue-600">Relacional (1970-Hoy)</td>
                            <td class="p-3.5">Tablas bidimensionales (Tuplas / Atributos).</td>
                            <td class="p-3.5">Independencia física y base matemática sólida.</td>
                            <td class="p-3.5">Costo computacional en combinaciones (JOINs) masivas.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-cyan-600">NoSQL (2000-Hoy)</td>
                            <td class="p-3.5">Documental JSON, Clave-Valor, Grafos.</td>
                            <td class="p-3.5">Escalabilidad horizontal masiva y esquemas flexibles.</td>
                            <td class="p-3.5">Consistencia eventual; relaja integridad referencial.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- SECCIÓN 11: EL PARADIGMA RELACIONAL -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                11. El Paradigma Relacional de Edgar F. Codd
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Propuesto en 1970 en IBM, traslada los fundamentos matemáticos de la teoría de conjuntos y el cálculo de predicados al almacenamiento de datos.
            </p>

            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl mb-6">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
                    <div>
                        <strong class="text-[#003366] uppercase block">Relación (Tabla)</strong>
                        <span class="text-slate-500">Estructura bidimensional nombrada compuesta por filas y columnas.</span>
                    </div>
                    <div>
                        <strong class="text-[#003366] uppercase block">Tupla (Fila)</strong>
                        <span class="text-slate-500">Registro individual que representa una instancia única de la entidad.</span>
                    </div>
                    <div>
                        <strong class="text-[#003366] uppercase block">Atributo (Columna)</strong>
                        <span class="text-slate-500">Propiedad formal de la relación acotada por un dominio específico.</span>
                    </div>
                    <div>
                        <strong class="text-[#003366] uppercase block">Dominio</strong>
                        <span class="text-slate-500">Rango de valores atómicos permitidos para un atributo (ej. tipos numéricos, fechas).</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 12: REGLAS DE INTEGRIDAD RELACIONAL -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                12. Reglas de Integridad Básicas en Bases de Datos
            </h3>
            <div class="space-y-4 mb-6">
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <h5 class="text-xs font-black text-[#003366] uppercase mb-1">Integridad de Entidad (Primary Key)</h5>
                    <p class="text-xs text-slate-600">Ningún atributo que forme parte de la llave primaria puede contener valores nulos (<code class="font-mono text-red-500">NULL</code>) ni valores duplicados, asegurando la identificación unívoca de cada tupla.</p>
                </div>
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <h5 class="text-xs font-black text-[#003366] uppercase mb-1">Integridad Referencial (Foreign Key)</h5>
                    <p class="text-xs text-slate-600">El valor de una clave foránea en una tabla dependiente debe coincidir exactamente con una clave primaria válida en la tabla principal referenciada, o bien ser explícitamente nulo.</p>
                </div>
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <h5 class="text-xs font-black text-[#003366] uppercase mb-1">Integridad de Dominio y Usuario</h5>
                    <p class="text-xs text-slate-600">Asegura la atomicidad de los valores mediante restricciones tipográficas, rangos (<code class="font-mono text-blue-600">CHECK</code>), no nulidad (<code class="font-mono text-blue-600">NOT NULL</code>) y valores por defecto (<code class="font-mono text-blue-600">DEFAULT</code>).</p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 13: CONCEPTO DE TRANSACCIÓN -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                13. El Concepto de Transacción Informática
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Una <strong>transacción</strong> es una unidad lógica de ejecución indivisible conformada por una o más sentencias de modificación y consulta. Debe completarse en su totalidad o revertirse íntegramente.
            </p>

            <div class="bg-slate-900 text-white rounded-2xl p-6 font-mono text-xs overflow-x-auto mb-6">
                <div class="text-slate-400">// Ejemplo Transaccional: Transferencia Hospitalaria de Cama</div>
                <div class="text-yellow-400">BEGIN TRANSACTION;</div>
                <div class="text-slate-300 pl-4">UPDATE cama SET estado = 'LIBRE' WHERE id_cama = 104;</div>
                <div class="text-slate-300 pl-4">UPDATE internacion SET id_cama = 205 WHERE id_paciente = 879;</div>
                <div class="text-slate-300 pl-4">UPDATE cama SET estado = 'OCUPADA' WHERE id_cama = 205;</div>
                <div class="text-slate-500 pl-4">// Si falla cualquier instrucción intermedia -> ROLLBACK;</div>
                <div class="text-emerald-400">COMMIT; <span class="text-slate-400">// Cambios persistidos de forma irreversible</span></div>
            </div>
        </section>

        <!-- SECCIÓN 14: PROPIEDADES ACID -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                14. Propiedades ACID: Fundamento de la Consistencia
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 bg-slate-50 border-l-4 border-blue-600 rounded-r-xl">
                    <strong class="text-xs font-black text-[#003366] uppercase block">A - Atomicidad (Atomicity)</strong>
                    <p class="text-xs text-slate-600 mt-1">Principio de todo o nada: si una sola instrucción falla, se anula la transacción por completo mediante un rollback.</p>
                </div>
                <div class="p-4 bg-slate-50 border-l-4 border-cyan-500 rounded-r-xl">
                    <strong class="text-xs font-black text-[#003366] uppercase block">C - Consistencia (Consistency)</strong>
                    <p class="text-xs text-slate-600 mt-1">La transacción traslada la base de datos de un estado válido a otro estado igualmente válido, sin infringir reglas ni restricciones.</p>
                </div>
                <div class="p-4 bg-slate-50 border-l-4 border-indigo-500 rounded-r-xl">
                    <strong class="text-xs font-black text-[#003366] uppercase block">I - Aislamiento (Isolation)</strong>
                    <p class="text-xs text-slate-600 mt-1">Las operaciones concurrentes se ejecutan de manera aislada; ninguna transacción lee datos en estados intermedios e incompletos de otra.</p>
                </div>
                <div class="p-4 bg-slate-50 border-l-4 border-emerald-500 rounded-r-xl">
                    <strong class="text-xs font-black text-[#003366] uppercase block">D - Durabilidad (Durability)</strong>
                    <p class="text-xs text-slate-600 mt-1">Una vez confirmado el commit, las modificaciones persisten permanentemente en disco, sobreviviendo a fallos o cortes de energía.</p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 15: CONCURRENCIA Y CONTROL DE BLOQUEOS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                15. Concurrencia de Datos y Métodos de Sincronización
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Cuando múltiples clientes leen y modifican registros en simultáneo, surgen conflictos como la <strong>actualización perdida</strong> o la <strong>lectura sucia</strong>. Los motores modernos implementan dos estrategias primarias:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <h5 class="text-xs font-black text-[#003366] uppercase mb-1">Mecanismo de Bloqueos (Locking)</h5>
                    <p class="text-xs text-slate-500">Aplica candados compartidos para lectura y exclusivos para escritura sobre filas o tablas, serializando las peticiones para evitar colisiones.</p>
                </div>
                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <h5 class="text-xs font-black text-[#003366] uppercase mb-1">Control Multiversión (MVCC)</h5>
                    <p class="text-xs text-slate-500">Crea instantáneas temporales (*snapshots*) de las filas modificadas; permite que las lecturas no bloqueen a las escrituras y viceversa (típico en PostgreSQL).</p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 16: SUBLENGUAJES SQL -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                16. El Lenguaje SQL y sus Subconjuntos Funcionales
            </h3>
            <div class="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200 mb-6">
                <table class="w-full text-left border-collapse text-xs">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase tracking-wider">
                            <th class="p-3.5 font-black">Sublenguaje</th>
                            <th class="p-3.5 font-black">Propósito</th>
                            <th class="p-3.5 font-black">Comandos Principales</th>
                        </tr>
                    </thead>
                    <tbody class="text-slate-700 divide-y divide-slate-100">
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-[#00aaff]">DDL (Data Definition Language)</td>
                            <td class="p-3.5">Crea, altera y destruye estructuras y esquemas.</td>
                            <td class="p-3.5 font-mono text-blue-600">CREATE, ALTER, DROP, TRUNCATE</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-emerald-600">DML (Data Manipulation Language)</td>
                            <td class="p-3.5">Inserta, actualiza, elimina y consulta datos de tablas.</td>
                            <td class="p-3.5 font-mono text-emerald-600">SELECT, INSERT, UPDATE, DELETE</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-indigo-600">DCL (Data Control Language)</td>
                            <td class="p-3.5">Administra privilegios y seguridad a nivel de usuario.</td>
                            <td class="p-3.5 font-mono text-indigo-600">GRANT, REVOKE</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-amber-600">TCL (Transaction Control Language)</td>
                            <td class="p-3.5">Gobierna la persistencia y control de transacciones.</td>
                            <td class="p-3.5 font-mono text-amber-600">COMMIT, ROLLBACK, SAVEPOINT</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- SECCIÓN 17: CATÁLOGO DEL SISTEMA -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                17. Catálogo del Sistema y Diccionario de Datos
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                El <strong>catálogo del sistema</strong> es una base de datos interna administrada exclusivamente por el SGBD. Contiene las definiciones de todos los esquemas, tablas, índices, usuarios y estadísticas de dispersión de datos esenciales para el optimizador.
            </p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto mb-6">
                <span class="text-slate-400">-- Consulta de Metadatos en el estándar ANSI (Information Schema):</span><br>
                <span class="text-blue-400">SELECT</span> table_name, column_name, data_type <br>
                <span class="text-blue-400">FROM</span> information_schema.columns <br>
                <span class="text-blue-400">WHERE</span> table_schema = <span class="text-emerald-400">'public'</span>;
            </div>
        </section>

        <!-- SECCIÓN 18: SEGURIDAD Y PRIVILEGIOS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                18. Seguridad, Autenticación y Principio de Menor Privilegio
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <strong class="text-xs font-black text-[#003366] uppercase block mb-1">1. Autenticación</strong>
                    <p class="text-xs text-slate-600">Verifica la identidad del usuario o servicio mediante contraseñas cifradas, tokens o certificados TLS.</p>
                </div>
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <strong class="text-xs font-black text-[#003366] uppercase block mb-1">2. Autorización (RBAC)</strong>
                    <p class="text-xs text-slate-600">Configura roles de acceso restringidos: un cajero solo puede ejecutar INSERT/SELECT sobre tablas de pagos.</p>
                </div>
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <strong class="text-xs font-black text-[#003366] uppercase block mb-1">3. Cifrado de Datos</strong>
                    <p class="text-xs text-slate-600">Protección criptográfica tanto en tránsito (red mediante SSL/TLS) como en reposo (cifrado de volumen físico en disco).</p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 19: RESPALDO Y RECUPERACIÓN -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                19. Estrategias de Respaldo y Recuperación ante Fallos
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                La persistencia profesional requiere políticas de contingencia ante siniestros de hardware o ciberataques:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-xs">
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <strong class="font-bold text-[#003366] block mb-1">Backup Total (Full)</strong>
                    <p class="text-slate-500">Copia integral y completa de todas las tablas y del catálogo. Base para restauraciones maestras.</p>
                </div>
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <strong class="font-bold text-[#003366] block mb-1">Backup Diferencial</strong>
                    <p class="text-slate-500">Respalda exclusivamente los bloques modificados desde el último backup total ejecutado.</p>
                </div>
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <strong class="font-bold text-[#003366] block mb-1">Log de Transacciones (WAL)</strong>
                    <p class="text-slate-500">Registro cronológico continuo que permite la recuperación punto en el tiempo (*Point-in-Time Recovery*).</p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 20: ECOSISTEMA CONTEMPORÁNEO -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                20. Ecosistema Contemporáneo de Motores de Bases de Datos
            </h3>
            <div class="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200 mb-8">
                <table class="w-full text-left border-collapse text-xs">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase tracking-wider">
                            <th class="p-3.5 font-black">Motor SGBD</th>
                            <th class="p-3.5 font-black">Tipo de Licencia</th>
                            <th class="p-3.5 font-black">Modelo Principal</th>
                            <th class="p-3.5 font-black">Caso de Uso Primario</th>
                        </tr>
                    </thead>
                    <tbody class="text-slate-700 divide-y divide-slate-100">
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-[#003366]">PostgreSQL</td>
                            <td class="p-3.5">Código Abierto (Open Source)</td>
                            <td class="p-3.5">Objeto-Relacional</td>
                            <td class="p-3.5">Sistemas transaccionales complejos, datos geoespaciales y salud.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-blue-600">MySQL / MariaDB</td>
                            <td class="p-3.5">GPL / Código Abierto</td>
                            <td class="p-3.5">Relacional</td>
                            <td class="p-3.5">Desarrollo Web, microservicios y plataformas transaccionales estándar.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-indigo-600">Microsoft SQL Server</td>
                            <td class="p-3.5">Comercial Propietaria</td>
                            <td class="p-3.5">Relacional</td>
                            <td class="p-3.5">Entornos empresariales corporativos e integración con ecosistema Windows/Azure.</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-emerald-600">MongoDB</td>
                            <td class="p-3.5">Fuente Disponible (SSPL)</td>
                            <td class="p-3.5">NoSQL (Documentos BSON/JSON)</td>
                            <td class="p-3.5">Prototipado ágil, registros desestructurados y catálogos de alta variación.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- RESUMEN FINAL DEL TEMA -->
        <section class="bg-gradient-to-br from-[#001f3f] to-[#003366] p-8 md:p-12 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
            <i class="fas fa-bookmark absolute -right-10 -bottom-10 text-white/5 text-[18rem] rotate-12 pointer-events-none"></i>
            
            <div class="relative z-10">
                <span class="text-xs font-black uppercase tracking-[0.3em] text-[#00aaff] block mb-2">Síntesis Formativa</span>
                <h3 class="text-3xl font-black uppercase text-white mb-6">Resumen Ejecutivo de la Unidad 1</h3>
                
                <div class="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">
                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Superación de Archivos Planos</h4>
                        <p class="text-slate-200">
                            Los Sistemas Gestores de Bases de Datos erradican la redundancia incontrolada, garantizan consistencia y desvinculan la lógica de software respecto a las estructuras físicas en disco mediante metadatos y esquemas formales.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Arquitectura ANSI/SPARC</h4>
                        <p class="text-slate-200">
                            La segregación en tres niveles (Externo, Conceptual e Interno) otorga la independencia física y lógica de los datos, permitiendo evolucionar el hardware y optimizar índices sin forzar la reprogramación de las aplicaciones usuarias.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Solidez Transaccional ACID</h4>
                        <p class="text-slate-200">
                            El cumplimiento estricto de Atomicidad, Consistencia, Aislamiento y Durabilidad asegura la integridad de los datos frente a accesos concurrentes de múltiples clientes y fallas críticas del sistema.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Estandarización con SQL</h4>
                        <p class="text-slate-200">
                            La gestión se articula a través de sublenguajes definidos (DDL para diseño estructural, DML para manipulación de registros, DCL para seguridad/privilegios y TCL para control transaccional) dentro de motores relacionales estandarizados.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;