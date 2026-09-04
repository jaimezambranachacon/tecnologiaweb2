// content/proyecto.js
const pag_proyecto = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <!-- Encabezado Principal -->
    <header class="mb-20">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-blue-50 text-[#00aaff] text-[10px] font-black uppercase tracking-[0.3em] px-3.5 py-1.5 rounded-full border border-blue-100">
                Modelo Educativo UPDS • Gestión 2026
            </span>
            <span class="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                SIS-0125 • Cuarto Semestre
            </span>
        </div>
        <h1 class="text-4xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none">
            PROYECTO FORMATIVO<br>
            <span class="text-[#00aaff]">BASE DE DATOS I</span>
        </h1>
        <p class="mt-6 text-xl md:text-2xl font-light text-slate-500 max-w-3xl leading-snug">
            Estrategia Didáctica: <strong class="font-black text-[#003366]">Sistema de Gestión e Historial Clínico Digital para Centros de Salud Pública</strong>
        </p>
        <div class="h-2 w-24 bg-[#00aaff] mt-8"></div>
    </header>


    <!-- 01. Problema del Contexto, ODS y Ejes Transversales -->
    <section class="mb-20">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">01. Problema del Contexto y Articulación Curricular</h2>
        
        <div class="p-8 md:p-10 bg-slate-50 border border-slate-200 rounded-[2.5rem] shadow-sm relative overflow-hidden">
            <i class="fas fa-notes-medical absolute -right-10 -bottom-10 text-blue-100 text-[12rem] opacity-40 -rotate-12 pointer-events-none"></i>
            
            <div class="relative z-10 max-w-4xl space-y-6">
                <div>
                    <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] block mb-1">Caso Socioformativo de Aplicación</span>
                    <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase tracking-tight">Persistencia e Integridad de Datos Clínicos en Centros de Salud Pública</h3>
                </div>

                <p class="text-base md:text-lg text-slate-600 leading-relaxed font-light">
                    <strong>Situación Problemática:</strong> En centros de primer y segundo nivel del sistema de salud pública, el registro de historiales clínicos, resultados auxiliares y recetas ambulatorias opera en planillas aisladas o cuadernos físicos. Esta desconexión causa duplicidad de historias, pérdida de trazabilidad ante urgencias y vulnerabilidad en la toma de decisiones clínicas y epidemiológicas.
                </p>

                <p class="text-base md:text-lg text-slate-600 leading-relaxed font-light">
                    <strong>Propósito Formativo del Proyecto:</strong> Diseñar, normalizar e implementar una base de datos relacional (1FN a 3FN/FNBC) para la red asistencial, garantizando consistencia, integridad referencial y explotación segura de datos mediante lenguaje SQL estándar y motores SGBD modernos[cite: 1, 7].
                </p>

                <!-- Especificación: Selección ODS -->
                <div class="border-t border-slate-200 pt-8 mt-6">
                    <div class="flex items-center gap-2 mb-4">
                        <i class="fas fa-globe text-emerald-600 text-sm"></i>
                        <h4 class="text-xs font-black uppercase tracking-widest text-[#003366]">Selección ODS (Objetivos de Desarrollo Sostenible)</h4>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- ODS 3 -->
                        <div class="p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl">
                            <div class="flex items-center gap-3 mb-2">
                                <span class="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-sm flex-none shadow-sm">3</span>
                                <strong class="text-sm text-emerald-950 uppercase font-black">ODS 3: Salud y Bienestar</strong>
                            </div>
                            <p class="text-xs text-emerald-900 leading-relaxed font-medium">
                                <strong>Articulación técnica:</strong> Garantiza la persistencia, trazabilidad e inviolabilidad de los datos médicos (historias clínicas, diagnósticos CIE-10 y prescripciones). La integridad referencial y la normalización mitigan los extravíos de información y previenen errores en tratamientos farmacológicos de pacientes.
                            </p>
                        </div>

                        <!-- ODS 9 -->
                        <div class="p-5 bg-blue-50/70 border border-blue-200 rounded-2xl">
                            <div class="flex items-center gap-3 mb-2">
                                <span class="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-sm flex-none shadow-sm">9</span>
                                <strong class="text-sm text-blue-950 uppercase font-black">ODS 9: Industria, Innovación e Infraestructura</strong>
                            </div>
                            <p class="text-xs text-blue-900 leading-relaxed font-medium">
                                <strong>Articulación técnica:</strong> Fortalece la infraestructura digital pública mediante el diseño de repositorios de software estructurados y escalables. Sustituye registros tradicionales por arquitectura de datos normalizada con soporte transaccional ACID en SGBD relacionales[cite: 1, 7].
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Especificación: Selección de Ejes Transversales -->
                <div class="border-t border-slate-200 pt-8 mt-6">
                    <div class="flex items-center gap-2 mb-4">
                        <i class="fas fa-layer-group text-indigo-600 text-sm"></i>
                        <h4 class="text-xs font-black uppercase tracking-widest text-[#003366]">Selección de Ejes Transversales (Modelo Educativo UPDS)</h4>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Eje 1 -->
                        <div class="p-5 bg-purple-50/70 border border-purple-200 rounded-2xl">
                            <div class="flex items-center gap-3 mb-2">
                                <div class="w-9 h-9 bg-purple-600 rounded-xl flex items-center justify-center text-white text-sm flex-none shadow-sm">
                                    <i class="fas fa-microchip"></i>
                                </div>
                                <strong class="text-sm text-purple-950 uppercase font-black">Tecnologías Emergentes y Adaptabilidad Digital</strong>
                            </div>
                            <p class="text-xs text-purple-900 leading-relaxed font-medium">
                                <strong>Articulación técnica:</strong> Despliegue en motores de bases de datos relacionales estándar (PostgreSQL/MySQL)[cite: 7] y empleo de herramientas CASE avanzadas para diagramación. Prepara la estructura para interoperar con expedientes clínicos digitales y análisis asistido de datos médicos.
                            </p>
                        </div>

                        <!-- Eje 2 -->
                        <div class="p-5 bg-cyan-50/70 border border-cyan-200 rounded-2xl">
                            <div class="flex items-center gap-3 mb-2">
                                <div class="w-9 h-9 bg-cyan-600 rounded-xl flex items-center justify-center text-white text-sm flex-none shadow-sm">
                                    <i class="fas fa-brain"></i>
                                </div>
                                <strong class="text-sm text-cyan-950 uppercase font-black">Investigación y Pensamiento Crítico</strong>
                            </div>
                            <p class="text-xs text-cyan-900 leading-relaxed font-medium">
                                <strong>Articulación técnica:</strong> Diagnóstico riguroso de variables clínicas, formulación de dependencias funcionales y sustentación analítica del proceso de normalización matemática (1FN a FNBC) para erradicar anomalías y producir reportes epidemiológicos confiables[cite: 7].
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    
    
    <!-- 02. Movilización de Saberes Esenciales -->
    <section class="mb-20">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">02. Movilización de Saberes Esenciales</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div class="p-8 border-t-8 border-[#003366] bg-white shadow-md rounded-2xl flex flex-col justify-between">
                <div>
                    <i class="fas fa-project-diagram text-3xl text-blue-600 mb-6"></i>
                    <h3 class="text-xl font-black text-[#003366] uppercase mb-1">Saber Conocer</h3>
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Teoría Relacional y Modelos</h4>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        Arquitectura de base de datos ANSI/SPARC, propiedades ACID en transacciones médicas, reglas de integridad referencial, modelo Entidad-Relación Extendido (MERE), dependencias funcionales y algoritmos de normalización (1FN, 2FN, 3FN, FNBC).
                    </p>
                </div>
            </div>

            <div class="p-8 border-t-8 border-[#00aaff] bg-white shadow-md rounded-2xl flex flex-col justify-between">
                <div>
                    <i class="fas fa-terminal text-3xl text-cyan-500 mb-6"></i>
                    <h3 class="text-xl font-black text-[#003366] uppercase mb-1">Saber Hacer</h3>
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Ingeniería DDL/DML & SQL</h4>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        Mapeo sistemático del esquema conceptual al lógico relacional. Elaboración de scripts DDL con restricciones de clave primaria, foráneas y checks de validación médica. Construcción de consultas complejas (JOINs, agrupaciones, subconsultas) para auditoría clínica.
                    </p>
                </div>
            </div>

            <div class="p-8 border-t-8 border-slate-300 bg-white shadow-md rounded-2xl flex flex-col justify-between">
                <div>
                    <i class="fas fa-shield-halved text-3xl text-slate-500 mb-6"></i>
                    <h3 class="text-xl font-black text-[#003366] uppercase mb-1">Saber Ser & Convivir</h3>
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Ética de Datos & Rigor</h4>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        Confidencialidad absoluta en el manejo ético de información médica y datos sensibles de pacientes. Trabajo colaborativo interdisciplinario, rigor metodológico en la investigación y defensa transparente de la autoría intelectual del proyecto.
                    </p>
                </div>
            </div>

        </div>
    </section>

    <!-- 03. Secuencia Didáctica (Hitos del Proyecto) -->
    <section class="mb-20">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">03. Secuencia Didáctica y Fases de Implementación</h2>
        
        <div class="space-y-10 max-w-4xl border-l-2 border-slate-200 pl-8 ml-4">
            
            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-slate-300 border-4 border-white shadow-sm"></div>
                <div class="flex items-center gap-3">
                    <span class="text-xs font-black text-[#00aaff] uppercase tracking-wider">Hito 1 (35 Puntos)</span>
                </div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight mt-1">Fase 1: Abstracción Biomédica y Modelado Conceptual (MERE)</h4>
                <p class="text-slate-600 leading-relaxed mt-2 text-sm">
                    Levantamiento riguroso de entidades y reglas de negocio del centro de salud: pacientes, médicos, triajes, diagnósticos (CIE-10), tratamientos y camas hospitalarias. Creación del diagrama conceptual Entidad-Relación Extendido (MERE), identificando entidades fuertes, débiles, generalizaciones y cardinalidades precisas.
                </p>
            </div>

            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-[#00aaff] border-4 border-white shadow-sm"></div>
                <div class="flex items-center gap-3">
                    <span class="text-xs font-black text-[#00aaff] uppercase tracking-wider">Hito 2 (30 Puntos)</span>
                </div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight mt-1">Fase 2: Mapeo Relacional, Normalización Científica y Esquema Físico</h4>
                <p class="text-slate-600 leading-relaxed mt-2 text-sm">
                    Transformación estructurada de los diagramas al esquema relacional de tablas. Auditoría rigurosa de dependencias funcionales aplicando normalización estricta (1FN a 3FN / FNBC) para erradicar anomalías de inserción y borrado. Creación del script físico DDL con tipos de datos clínicos precisos y llaves foráneas indexadas.
                </p>
            </div>

            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-[#003366] border-4 border-white shadow-sm"></div>
                <div class="flex items-center gap-3">
                    <span class="text-xs font-black text-[#00aaff] uppercase tracking-wider">Hito 3 (35 Puntos)</span>
                </div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight mt-1">Fase 3: Implementación en SGBD, Poblado y Consultas Clínicas Complejas</h4>
                <p class="text-slate-600 leading-relaxed mt-2 text-sm">
                    Ejecución del script en un motor relacional estándar (PostgreSQL / MySQL). Inserción masiva coherente de datos sintéticos representativos. Desarrollo de consultas SQL avanzadas para reportes sanitarios: correlación de diagnósticos por edad/género, disponibilidad de camas mediante <code class="text-xs bg-slate-100 p-1 rounded font-mono">LEFT JOIN</code>, y métricas agregadas por especialidad médica.
                </p>
            </div>

        </div>
    </section>

    <!-- 04. Matriz de Evaluación (Escala Institucional UPDS) -->
    <section class="mb-20">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">04. Matriz de Evaluación por Niveles de Dominio</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            
            <div class="p-7 bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden">
                <span class="absolute top-0 right-0 bg-slate-300 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Pre-formal / Receptivo</span>
                <h4 class="text-lg font-black text-slate-600 uppercase mb-2">Esquema Fragmentado</h4>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Identifica tablas clínicas aisladas sin llaves foráneas consistentes. Existen redundancias no resueltas, tipos de datos inadecuados para historiales clínicos y sentencias SQL incompletas o propensas a errores sintácticos.
                </p>
            </div>

            <div class="p-7 bg-white border-2 border-slate-200 rounded-2xl relative overflow-hidden">
                <span class="absolute top-0 right-0 bg-blue-400 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Resolutivo (Básico)</span>
                <h4 class="text-lg font-black text-blue-600 uppercase mb-2">Modelo Clínico Operativo</h4>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Modela el diagrama E-R funcional para el centro médico y lo mapea a tablas. El diseño alcanza hasta 2FN/3FN con omisiones menores en restricciones referenciales; ejecuta consultas SQL básicas para registrar y listar pacientes.
                </p>
            </div>

            <div class="p-7 bg-white border-2 border-indigo-500 rounded-2xl relative overflow-hidden shadow-md">
                <span class="absolute top-0 right-0 bg-[#00aaff] text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Autónomo</span>
                <h4 class="text-lg font-black text-indigo-600 uppercase mb-2">Estructura Hospitalaria Óptima</h4>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Diseña el modelo clínico con alta precisión técnica y sin redundancias (3FN consolidada). Implementa el script DDL con integridad referencial completa y escribe consultas complejas con múltiples combinaciones y filtros epidemiológicos.
                </p>
            </div>

            <div class="p-7 bg-[#003366] text-white rounded-2xl relative overflow-hidden shadow-xl">
                <span class="absolute top-0 right-0 bg-yellow-400 text-[#003366] px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Estratégico</span>
                <h4 class="text-lg font-black text-yellow-400 uppercase mb-2">Arquitectura Biomédica de Vanguardia</h4>
                <p class="text-xs text-blue-100 leading-relaxed">
                    Propone un modelo relacional altamente escalable y seguro. Incorpora índices estratégicos, restricciones de dominio rigurosas, justificación matemática de dependencias funcionales y reportes analíticos SQL de alto valor para salud pública.
                </p>
            </div>

        </div>

        <div class="flex flex-col md:flex-row gap-6 bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
            <div class="flex-1">
                <h5 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-3">
                    <i class="fas fa-clipboard-check mr-2 text-[#00aaff]"></i> Entregables Formales del Estudiante
                </h5>
                <ul class="text-xs text-slate-600 space-y-2 font-medium">
                    <li>1. Documento técnico en PDF: justificación, diagrama MERE y matrices de normalización formal (1FN a 3FN).</li>
                    <li>2. Script de Definición de Datos (<code class="font-mono text-slate-800">schema_clinico.sql</code>) ejecutable sin errores.</li>
                    <li>3. Script de Consultas Epidemiológicas y Explotación (<code class="font-mono text-slate-800">queries_salud.sql</code>) documentado y comentado.</li>
                </ul>
            </div>
            <div class="hidden md:block w-px bg-slate-300 mx-4"></div>
            <div class="flex-1">
                <h5 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-3">
                    <i class="fas fa-microscope mr-2 text-[#00aaff]"></i> Metacognición & Enfoque Científico
                </h5>
                <p class="text-xs text-slate-600 italic leading-relaxed">
                    "¿De qué manera el diseño estricto de restricciones de integridad y normalización en una base de datos de salud no solo previene fallas de software, sino que salva vidas al garantizar diagnósticos y prescripciones trazables y sin omisiones?"
                </p>
            </div>
        </div>
    </section>

    <!-- 05. Decálogo de Buenas Prácticas Técnicas -->
    <section class="mt-20 font-sans">
        <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
            Decálogo del Diseñador de Datos: 10 Estándares de Ingeniería
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-black flex-shrink-0 text-sm">1</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Modelado Conceptual Previo</h5>
                    <p class="text-xs text-slate-500 mt-1">Nunca inicies creando tablas en el motor; formaliza primero las entidades, atributos y cardinalidades en diagramas E-R.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-cyan-100 text-cyan-600 flex items-center justify-center font-black flex-shrink-0 text-sm">2</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Convención Estricta de Nomenclatura</h5>
                    <p class="text-xs text-slate-500 mt-1">Usa nombres en minúsculas y en singular para tablas y columnas (ej. <code class="font-mono text-slate-700">paciente</code>, <code class="font-mono text-slate-700">diagnostico</code>, <code class="font-mono text-slate-700">fecha_atencion</code>).</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center font-black flex-shrink-0 text-sm">3</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Claves Primarias Claras y Únicas</h5>
                    <p class="text-xs text-slate-500 mt-1">Toda entidad del sistema hospitalario debe poseer una llave primaria surrogate o natural debidamente definida e inmutable.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-black flex-shrink-0 text-sm">4</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Integridad Referencial Obligatoria</h5>
                    <p class="text-xs text-slate-500 mt-1">Configura llaves foráneas explícitas (<code class="font-mono text-slate-700">FOREIGN KEY</code>) con reglas claras ante eventos de modificación o eliminación.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-purple-100 text-purple-600 flex items-center justify-center font-black flex-shrink-0 text-sm">5</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Normalización hasta Tercera Forma Normal</h5>
                    <p class="text-xs text-slate-500 mt-1">Verifica matemáticamente que cada atributo no-clave dependa directa y exclusivamente de la clave primaria completa.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-amber-100 text-amber-600 flex items-center justify-center font-black flex-shrink-0 text-sm">6</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Tipos de Datos y Dominios Adecuados</h5>
                    <p class="text-xs text-slate-500 mt-1">Evita textos genéricos para fechas, estados booleanos o parámetros vitales; usa <code class="font-mono text-slate-700">DATE</code>, <code class="font-mono text-slate-700">NUMERIC</code> o <code class="font-mono text-slate-700">CHECK</code>.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-rose-100 text-rose-600 flex items-center justify-center font-black flex-shrink-0 text-sm">7</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Seguridad y Confidencialidad de Pacientes</h5>
                    <p class="text-xs text-slate-500 mt-1">Diseña teniendo en cuenta la privacidad de los datos sensibles de salud conforme a las normas éticas y sanitarias vigentes.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center font-black flex-shrink-0 text-sm">8</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Consultas SQL Legibles y Comentadas</h5>
                    <p class="text-xs text-slate-500 mt-1">Indentación clara de palabras clave (<code class="font-mono text-slate-700">SELECT</code>, <code class="font-mono text-slate-700">FROM</code>, <code class="font-mono text-slate-700">WHERE</code>, <code class="font-mono text-slate-700">JOIN</code>) y alias semánticos para tablas intermedias.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-teal-100 text-teal-700 flex items-center justify-center font-black flex-shrink-0 text-sm">9</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Poblado Realista de Pruebas</h5>
                    <p class="text-xs text-slate-500 mt-1">Prueba las bases de datos con volúmenes de datos sintéticos representativos para validar el rendimiento y consistencia.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-slate-200 text-slate-800 flex items-center justify-center font-black flex-shrink-0 text-sm">10</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Documentación Técnica Rigurosa</h5>
                    <p class="text-xs text-slate-500 mt-1">Consolida el diccionario de datos, el diagrama relacional completo y los scripts en un informe técnico formal.</p>
                </div>
            </div>

        </div>
    </section>

</div>
`;