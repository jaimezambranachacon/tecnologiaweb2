// content/proyecto.js
const pag_proyecto = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-24">
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none">
            PROYECTO<br>
            <span class="text-[#00aaff]">FORMATIVO</span>
        </h1>
        <p class="mt-6 text-2xl font-light text-slate-500 max-w-2xl">
            Estrategia Didáctica: <strong class="font-black text-[#003366]">Aprendizaje Basado en Proyectos (ABP)</strong>
        </p>
        <div class="h-2 w-24 bg-[#003366] mt-8"></div>
    </header>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">01. Problema del Contexto (Reto Cognitivo)</h2>
        <div class="p-10 bg-slate-50 border border-slate-200 rounded-[2rem] shadow-sm relative overflow-hidden">
            <i class="fas fa-plane-departure absolute -right-10 -bottom-10 text-slate-200 text-[10rem] opacity-50 -rotate-12"></i>
            <div class="relative z-10 max-w-3xl">
                <h3 class="text-3xl font-black text-[#003366] uppercase mb-4 tracking-tight">Caso: Sincronía Aérea (BOA)</h3>
                <p class="text-lg text-slate-600 leading-relaxed font-light mb-6">
                    <strong>Situación Problemática:</strong> La latencia en la actualización de información de vuelos genera incertidumbre en los pasajeros y congestión en las terminales. 
                </p>
                <p class="text-lg text-slate-600 leading-relaxed font-light">
                    <strong>Propósito Formativo:</strong> Diseñar y codificar un sistema web backend que garantice la persistencia y distribución asíncrona de datos en tiempo real, mitigando la brecha informativa del usuario final.
                </p>
            </div>
        </div>
    </section>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">02. Movilización de Saberes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div class="p-8 border-t-8 border-[#003366] bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fas fa-brain text-4xl text-[#00aaff] mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Conocer</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Dimensión Cognitiva</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Apropiación de conceptos de Arquitectura Cliente/Servidor, sintaxis avanzada de PHP 8, fundamentos de POO y estructuración de bases de datos relacionales (MySQL).
                </p>
            </div>

            <div class="p-8 border-t-8 border-[#00aaff] bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fas fa-laptop-code text-4xl text-[#003366] mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Hacer</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Dimensión Procedimental</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Codificación de operaciones CRUD con PDO, diseño de APIs RESTful ligeras e implementación de peticiones asíncronas con la API Fetch (AJAX) para interfaces reactivas.
                </p>
            </div>

            <div class="p-8 border-t-8 border-slate-300 bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fas fa-hands-helping text-4xl text-[#00aaff] mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Ser & Convivir</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Dimensión Actitudinal</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Desarrollo de resiliencia ante errores de compilación, honestidad académica en el uso de código de terceros y fomento del trabajo colaborativo (Co-evaluación).
                </p>
            </div>

        </div>
    </section>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">03. Secuencia Didáctica (Fases del ABP)</h2>
        <div class="space-y-8 max-w-4xl border-l-2 border-slate-100 pl-8 ml-4">
            
            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-slate-200 border-4 border-white"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 1: Apertura y Diagnóstico</h4>
                <p class="text-sm font-bold text-[#00aaff] uppercase tracking-widest mb-2">Semanas 1 y 2</p>
                <p class="text-slate-600 leading-relaxed">
                    <strong>Actividades:</strong> Activación de saberes previos, análisis del problema del contexto (BOA) y configuración del entorno de desarrollo. Construcción de mapas mentales sobre la arquitectura de solución.
                </p>
            </div>

            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-[#00aaff] border-4 border-white shadow-md"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 2: Desarrollo y Construcción del Conocimiento</h4>
                <p class="text-sm font-bold text-[#00aaff] uppercase tracking-widest mb-2">Semanas 3 a 6</p>
                <p class="text-slate-600 leading-relaxed">
                    <strong>Actividades:</strong> Programación orientada a objetos en PHP, diseño de la base de datos, implementación de la capa de persistencia (PDO) y creación de endpoints asíncronos (JSON). Aprendizaje mediado por retos técnicos.
                </p>
            </div>

            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-[#003366] border-4 border-white shadow-md"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 3: Cierre y Evaluación Auténtica</h4>
                <p class="text-sm font-bold text-[#00aaff] uppercase tracking-widest mb-2">Semana 7</p>
                <p class="text-slate-600 leading-relaxed">
                    <strong>Actividades:</strong> Socialización del producto final (Portafolio de Evidencias Digital), autoevaluación, co-evaluación entre pares y proalimentación (feedback prospectivo) del docente.
                </p>
            </div>

        </div>
    </section>

    <section>
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">04. Matriz de Evaluación Auténtica (Rúbrica Socioformativa)</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            <div class="p-8 bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-slate-300 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Básico</div>
                <h4 class="text-xl font-black text-slate-500 uppercase mb-2">Nivel Receptivo</h4>
                <p class="text-sm text-slate-600">Reconoce la sintaxis de PHP y los conceptos de bases de datos, pero requiere apoyo directo para ensamblar la solución. Reproduce código guiado.</p>
            </div>

            <div class="p-8 bg-white border-2 border-slate-200 rounded-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-blue-400 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Aceptable</div>
                <h4 class="text-xl font-black text-blue-500 uppercase mb-2">Nivel Resolutivo</h4>
                <p class="text-sm text-slate-600">Desarrolla las operaciones CRUD de forma autónoma. Logra conectar la base de datos y mostrar información, cumpliendo el requerimiento técnico mínimo.</p>
            </div>

            <div class="p-8 bg-white border-2 border-[#00aaff] rounded-2xl relative overflow-hidden shadow-md">
                <div class="absolute top-0 right-0 bg-[#00aaff] text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Sobresaliente</div>
                <h4 class="text-xl font-black text-[#00aaff] uppercase mb-2">Nivel Autónomo</h4>
                <p class="text-sm text-slate-600">Implementa asincronía (AJAX/Fetch) para mejorar la Experiencia de Usuario (UX) sin recargar la página. El código está correctamente tabulado y comentado.</p>
            </div>

            <div class="p-8 bg-[#003366] text-white rounded-2xl relative overflow-hidden shadow-xl">
                <div class="absolute top-0 right-0 bg-yellow-400 text-[#003366] px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Élite</div>
                <h4 class="text-xl font-black text-yellow-400 uppercase mb-2">Nivel Estratégico</h4>
                <p class="text-sm text-blue-100">Adapta patrones de diseño (MVC), blinda el sistema contra inyecciones SQL (Seguridad), documenta éticamente en GitHub y asiste metodológicamente a sus pares.</p>
            </div>

        </div>

        <div class="flex flex-col md:flex-row gap-6 bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
            <div class="flex-1">
                <h5 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-3"><i class="fas fa-folder-open mr-2 text-[#00aaff]"></i> Portafolio de Evidencias</h5>
                <ul class="text-sm text-slate-600 space-y-2 font-medium">
                    <li>1. Mapa mental de la arquitectura.</li>
                    <li>2. Scripts de Base de Datos (.sql).</li>
                    <li>3. Repositorio en GitHub del Proyecto.</li>
                </ul>
            </div>
            <div class="hidden md:block w-px bg-slate-300 mx-4"></div>
            <div class="flex-1">
                <h5 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-3"><i class="fas fa-brain mr-2 text-[#00aaff]"></i> Metacognición</h5>
                <p class="text-sm text-slate-600 italic">
                    "El estudiante debe ser capaz de reflexionar sobre su propio proceso de codificación: ¿Qué error me costó más solucionar? ¿Cómo lo resolví? ¿Qué haría diferente en el próximo sprint?"
                </p>
            </div>
        </div>
    </section>

</div>
`;