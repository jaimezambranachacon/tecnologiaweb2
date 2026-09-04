// content/texto_guia.js

const pag_texto_guia = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <!-- 1. PORTADA -->
    <header class="mb-20 text-center py-16 px-6 bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#00aaff] rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
        <i class="fas fa-database absolute -right-12 -top-12 text-white/10 text-[18rem] rotate-12 pointer-events-none"></i>
        
        <div class="relative z-10 max-w-4xl mx-auto space-y-4">
            <span class="bg-white/10 backdrop-blur-md text-[#00aaff] text-[11px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full border border-white/15 inline-block">
                Universidad Privada Domingo Savio • Facultad de Ingeniería
            </span>
            
            <h1 class="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none pt-2">
                Base de Datos I
            </h1>
            
            <p class="text-lg md:text-xl font-medium text-cyan-100 tracking-wide">
                SIS-0125 • Cuarto Semestre • Carga Horaria: 100 Horas
            </p>

            <div class="h-1.5 w-24 bg-[#00aaff] mx-auto my-6 rounded-full"></div>

            <div class="text-xs md:text-sm text-slate-200 uppercase tracking-widest font-semibold pt-2">
                Docente: <span class="text-white font-bold">Ing. Jaime Zambrana Chacon</span>
            </div>
        </div>
    </header>

    <!-- 2. INTRODUCCIÓN & POR QUÉ APRENDER ESTA TEMÁTICA -->
    <section class="mb-20 grid md:grid-cols-2 gap-8">
        
        <!-- Introducción -->
        <div class="bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-200 flex flex-col justify-between">
            <div>
                <span class="text-[10px] font-black uppercase tracking-[0.3em] text-[#00aaff] block mb-2">Fundamentación</span>
                <h2 class="text-2xl md:text-3xl font-black text-[#003366] uppercase mb-4 tracking-tight">Introducción a la Asignatura</h2>
                <p class="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
                    La materia de <strong>Base de Datos I</strong> constituye el núcleo de la persistencia de información en la formación del Ingeniero de Sistemas[cite: 1]. Aborda desde la abstracción de reglas de negocio del mundo real mediante modelado conceptual, hasta su implementación física y explotación en Sistemas Gestores de Bases de Datos Relacionales (RDBMS)[cite: 1].
                </p>
                <p class="text-slate-600 text-sm md:text-base leading-relaxed">
                    A través de este módulo se desarrollan competencias para transformar requerimientos ambiguos en arquitecturas de datos normalizadas, íntegras y escalables, capaces de dar soporte a aplicaciones de misión crítica[cite: 1].
                </p>
            </div>
        </div>

        <!-- Por qué es necesario aprender esta temática -->
        <div class="bg-[#001f3f] text-white p-8 md:p-10 rounded-[2rem] shadow-xl relative overflow-hidden flex flex-col justify-between">
            <i class="fas fa-shield-halved absolute -right-6 -bottom-6 text-white/5 text-[11rem] pointer-events-none"></i>
            <div>
                <span class="text-[10px] font-black uppercase tracking-[0.3em] text-[#00aaff] block mb-2">Impacto Profesional</span>
                <h2 class="text-2xl md:text-3xl font-black uppercase mb-4 tracking-tight">¿Por qué es Necesario Dominar esta Temática?</h2>
                <ul class="space-y-3 text-slate-300 text-xs md:text-sm leading-relaxed">
                    <li class="flex items-start gap-3">
                        <i class="fas fa-check-circle text-[#00aaff] mt-1 flex-none"></i>
                        <span><strong>Protección contra la pérdida de datos:</strong> El diseño empírico sin estándares ocasiona redundancias, inconsistencias y pérdidas irreparables de información en entidades reales[cite: 1].</span>
                    </li>
                    <li class="flex items-start gap-3">
                        <i class="fas fa-check-circle text-[#00aaff] mt-1 flex-none"></i>
                        <span><strong>Base de todo ecosistema tecnológico:</strong> Todo desarrollo de software, aplicación web, sistema móvil o modelo de Inteligencia Artificial depende de una base de datos estable y transaccional[cite: 1].</span>
                    </li>
                    <li class="flex items-start gap-3">
                        <i class="fas fa-check-circle text-[#00aaff] mt-1 flex-none"></i>
                        <span><strong>Especialización técnica demandada:</strong> Dominar el estándar SQL y las formas normales posiciona al estudiante para roles de Administrador de Bases de Datos (DBA), Arquitecto de Datos e Ingeniero de Backend.</span>
                    </li>
                </ul>
            </div>
        </div>

    </section>

    <!-- 3. TEMARIO ESTRUCTURADO -->
    <section class="mb-16">
        <div class="text-center max-w-xl mx-auto mb-10">
            <span class="text-[10px] font-black uppercase tracking-[0.3em] text-[#00aaff]">Estructura Curricular</span>
            <h2 class="text-3xl font-black text-[#003366] uppercase tracking-tight">Temario del Módulo</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
            
            <!-- Unidad 1 -->
            <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#00aaff] transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span class="w-8 h-8 rounded-lg bg-blue-50 text-[#003366] font-black text-xs flex items-center justify-center">U1</span>
                    <h3 class="text-base font-black text-[#003366] uppercase">Introducción a las Bases de Datos</h3>
                </div>
                <ul class="text-xs text-slate-600 space-y-1.5 pl-2 list-disc list-inside leading-relaxed">
                    <li>Definición, terminología y limitaciones de archivos tradicionales[cite: 1].</li>
                    <li>Modelos de datos y arquitectura ANSI/SPARC[cite: 1].</li>
                    <li>Independencia lógica y física de datos[cite: 1].</li>
                    <li>Concepto de transacción y propiedades ACID[cite: 1].</li>
                    <li>Usuarios, roles y funciones de un SGBD[cite: 1].</li>
                </ul>
            </div>

            <!-- Unidad 2 -->
            <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#00aaff] transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span class="w-8 h-8 rounded-lg bg-cyan-50 text-[#00aaff] font-black text-xs flex items-center justify-center">U2</span>
                    <h3 class="text-base font-black text-[#003366] uppercase">Diseño y Modelado Conceptual (E-R)</h3>
                </div>
                <ul class="text-xs text-slate-600 space-y-1.5 pl-2 list-disc list-inside leading-relaxed">
                    <li>Ciclo de vida del diseño de bases de datos[cite: 1].</li>
                    <li>Modelo Entidad-Relación (MER) y Extendido (MERE)[cite: 1].</li>
                    <li>Entidades fuertes, débiles, atributos y cardinalidades[cite: 1].</li>
                    <li>Restricciones de integridad referencial y dominios[cite: 1].</li>
                    <li>Mapeo sistemático del modelo conceptual al modelo relacional[cite: 1].</li>
                </ul>
            </div>

            <!-- Unidad 3 -->
            <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#00aaff] transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span class="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 font-black text-xs flex items-center justify-center">U3</span>
                    <h3 class="text-base font-black text-[#003366] uppercase">Teoría de la Normalización</h3>
                </div>
                <ul class="text-xs text-slate-600 space-y-1.5 pl-2 list-disc list-inside leading-relaxed">
                    <li>Objetivo de la normalización y anomalías de actualización[cite: 1].</li>
                    <li>Dependencias funcionales totales, parciales y transitivas[cite: 1].</li>
                    <li>Primera, Segunda y Tercera Forma Normal (1FN, 2FN, 3FN)[cite: 1].</li>
                    <li>Forma Normal de Boyce-Codd (FNBC)[cite: 1].</li>
                    <li>Descomposición sin pérdida de información y preservación de dependencias[cite: 1].</li>
                </ul>
            </div>

            <!-- Unidad 4 -->
            <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#00aaff] transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 font-black text-xs flex items-center justify-center">U4</span>
                    <h3 class="text-base font-black text-[#003366] uppercase">Gestión de BD y Lenguaje SQL</h3>
                </div>
                <ul class="text-xs text-slate-600 space-y-1.5 pl-2 list-disc list-inside leading-relaxed">
                    <li>Estructura del estándar SQL: DDL, DML y DCL[cite: 1].</li>
                    <li>Sentencias DDL: creación y modificación de esquemas (CREATE, ALTER, DROP)[cite: 1].</li>
                    <li>Sentencias DML: manipulación de datos (INSERT, UPDATE, DELETE)[cite: 1].</li>
                    <li>Consultas simples, multitabla (JOINs) y agrupadas (GROUP BY, HAVING)[cite: 1].</li>
                    <li>Funciones de agregación y subconsultas estructuradas[cite: 1].</li>
                </ul>
            </div>

        </div>
    </section>

</div>


`;