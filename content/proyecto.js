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
                SIS-0211 • Quinto Semestre
            </span>
        </div>
        <h1 class="text-4xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none">
            PROYECTO FORMATIVO<br>
            <span class="text-[#00aaff]">SISTEMAS OPERATIVOS II</span>
        </h1>
        <p class="mt-6 text-xl md:text-2xl font-light text-slate-500 max-w-3xl leading-snug">
            Estrategia Didáctica: <strong class="font-black text-[#003366]">Implementación y Administración de una Infraestructura de Red LAN Basada en Software Libre</strong>
        </p>
        <div class="h-2 w-24 bg-[#00aaff] mt-8"></div>
    </header>

    <!-- 01. Problema del Contexto, ODS y Ejes Transversales -->
    <section class="mb-20">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">01. Problema del Contexto y Articulación Curricular</h2>
        
        <div class="p-8 md:p-10 bg-slate-50 border border-slate-200 rounded-[2.5rem] shadow-sm relative overflow-hidden">
            <i class="fab fa-linux absolute -right-10 -bottom-10 text-blue-100 text-[12rem] opacity-40 -rotate-12 pointer-events-none"></i>
            
            <div class="relative z-10 max-w-4xl space-y-6">
                <div>
                    <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] block mb-1">Nodo Problematizador</span>
                    <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase tracking-tight">Escaso conocimiento de arquitecturas de software libre</h3>
                </div>

                <p class="text-base md:text-lg text-slate-600 leading-relaxed font-light">
                    <strong>Situación Problemática:</strong> El escaso conocimiento de arquitecturas de software libre para la implementación de infraestructuras de servicios de mediana y gran envergadura limita las opciones tecnológicas y aumenta la dependencia de soluciones privativas en el entorno corporativo.
                </p>

                <p class="text-base md:text-lg text-slate-600 leading-relaxed font-light">
                    <strong>Propósito Formativo del Proyecto:</strong> Administra funciones básicas de sistemas operativos en distribuciones de software libre para hacer más productiva sus funcionalidades y utilidades a la sociedad, en función a su configuración y operación óptima de los recursos y elementos requeridos en entornos tecnológicos.[cite: 1, 5, 6]
                </p>

                <!-- Especificación: Selección ODS -->
                <div class="border-t border-slate-200 pt-8 mt-6">
                    <div class="flex items-center gap-2 mb-4">
                        <i class="fas fa-globe text-emerald-600 text-sm"></i>
                        <h4 class="text-xs font-black uppercase tracking-widest text-[#003366]">Selección ODS (Objetivos de Desarrollo Sostenible)</h4>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- ODS 8 -->
                        <div class="p-5 bg-emerald-50/70 border border-emerald-200 rounded-2xl">
                            <div class="flex items-center gap-3 mb-2">
                                <span class="w-9 h-9 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-black text-sm flex-none shadow-sm">8</span>
                                <strong class="text-sm text-emerald-950 uppercase font-black">ODS 8: Trabajo Decente y Crecimiento Económico</strong>
                            </div>
                            <p class="text-xs text-emerald-900 leading-relaxed font-medium">
                                <strong>Articulación técnica:</strong> Fomenta el uso de software libre y Open Source (como Linux) para reducir costos operativos, impulsando la competitividad y viabilidad tecnológica de emprendimientos y empresas locales mediante soluciones robustas y accesibles.
                            </p>
                        </div>

                        <!-- ODS 9 -->
                        <div class="p-5 bg-blue-50/70 border border-blue-200 rounded-2xl">
                            <div class="flex items-center gap-3 mb-2">
                                <span class="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-sm flex-none shadow-sm">9</span>
                                <strong class="text-sm text-blue-950 uppercase font-black">ODS 9: Industria, Innovación e Infraestructura</strong>
                            </div>
                            <p class="text-xs text-blue-900 leading-relaxed font-medium">
                                <strong>Articulación técnica:</strong> Construye infraestructura digital resiliente capacitando en la instalación de sistemas operativos libres, manejo de comandos para procesos y configuración avanzada de redes LAN.[cite: 2, 3]
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Especificación: Selección de Ejes Transversales -->
                <div class="border-t border-slate-200 pt-8 mt-6">
                    <div class="flex items-center gap-2 mb-4">
                        <i class="fas fa-layer-group text-indigo-600 text-sm"></i>
                        <h4 class="text-xs font-black uppercase tracking-widest text-[#003366]">Competencias Genéricas (Modelo Educativo UPDS)</h4>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Eje 1 -->
                        <div class="p-5 bg-purple-50/70 border border-purple-200 rounded-2xl">
                            <div class="flex items-center gap-3 mb-2">
                                <div class="w-9 h-9 bg-purple-600 rounded-xl flex items-center justify-center text-white text-sm flex-none shadow-sm">
                                    <i class="fas fa-cogs"></i>
                                </div>
                                <strong class="text-sm text-purple-950 uppercase font-black">Investigación, NTIC y Emprendedurismo</strong>
                            </div>
                            <p class="text-xs text-purple-900 leading-relaxed font-medium">
                                <strong>Articulación técnica:</strong> Promueve la resolución de problemas técnicos reales mediante simulación de soluciones e implementaciones de red en laboratorio, fomentando el autoaprendizaje y la adquisición de conocimientos.[cite: 2, 3, 4]
                            </p>
                        </div>

                        <!-- Eje 2 -->
                        <div class="p-5 bg-cyan-50/70 border border-cyan-200 rounded-2xl">
                            <div class="flex items-center gap-3 mb-2">
                                <div class="w-9 h-9 bg-cyan-600 rounded-xl flex items-center justify-center text-white text-sm flex-none shadow-sm">
                                    <i class="fas fa-users"></i>
                                </div>
                                <strong class="text-sm text-cyan-950 uppercase font-black">Ética y Prosocialidad</strong>
                            </div>
                            <p class="text-xs text-cyan-900 leading-relaxed font-medium">
                                <strong>Articulación técnica:</strong> Desarrolla la capacidad de comunicarse de forma asertiva, efectiva y ética con compañeros, respetando decisiones ajenas y valorando la importancia del trabajo en equipo en la administración de sistemas informáticos.[cite: 2, 3]
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
                    <i class="fas fa-book-open text-3xl text-blue-600 mb-6"></i>
                    <h3 class="text-xl font-black text-[#003366] uppercase mb-1">Saber Conocer</h3>
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Fundamentos y Arquitectura</h4>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        Beneficios del software libre, estructura y requerimientos del sistema operativo Linux, jerarquía de archivos, entornos de escritorio, comandos de terminal (Shell) y fundamentos de configuración de red (IP, puerta de enlace).[cite: 2, 3]
                    </p>
                </div>
            </div>

            <div class="p-8 border-t-8 border-[#00aaff] bg-white shadow-md rounded-2xl flex flex-col justify-between">
                <div>
                    <i class="fas fa-tools text-3xl text-cyan-500 mb-6"></i>
                    <h3 class="text-xl font-black text-[#003366] uppercase mb-1">Saber Hacer</h3>
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Instalación y Administración</h4>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        Instala distribuciones Linux, administra el sistema mediante línea de comandos (crea/modifica archivos, gestiona procesos), instala aplicaciones con manejadores de paquetes, escribe scripts Bash básicos y configura redes LAN.[cite: 2, 3]
                    </p>
                </div>
            </div>

            <div class="p-8 border-t-8 border-slate-300 bg-white shadow-md rounded-2xl flex flex-col justify-between">
                <div>
                    <i class="fas fa-users-cog text-3xl text-slate-500 mb-6"></i>
                    <h3 class="text-xl font-black text-[#003366] uppercase mb-1">Saber Ser & Convivir</h3>
                    <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Ética y Trabajo en Equipo</h4>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        Muestra actitud crítica y responsable, valora el aprendizaje autónomo, trabaja bajo presión resolviendo problemas creativamente y se comunica de forma asertiva en entornos colaborativos de administración de sistemas.[cite: 2, 3]
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
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight mt-1">Fase 1: Estructura e Instalación del Sistema Base</h4>
                <p class="text-slate-600 leading-relaxed mt-2 text-sm">
                    Identifica la estructura de un sistema de archivos y los elementos requeridos. Elabora comparaciones de requerimientos e instala distribuciones de sistemas operativos en base a software libre (Linux), describiendo y configurando las particiones necesarias.[cite: 1, 2, 5]
                </p>
            </div>

            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-[#00aaff] border-4 border-white shadow-sm"></div>
                <div class="flex items-center gap-3">
                    <span class="text-xs font-black text-[#00aaff] uppercase tracking-wider">Hito 2 (35 Puntos)</span>
                </div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight mt-1">Fase 2: Administración mediante Entorno Gráfico y Terminal</h4>
                <p class="text-slate-600 leading-relaxed mt-2 text-sm">
                    Administra distribuciones de Sistemas operativos en base a diversos entornos de escritorio. Utiliza la línea de comandos de forma estratégica para gestionar archivos, directorios, monitorear procesos e instalar/eliminar aplicaciones mediante manejadores de paquetes y repositorios.[cite: 1, 2, 3, 6]
                </p>
            </div>

            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-[#003366] border-4 border-white shadow-sm"></div>
                <div class="flex items-center gap-3">
                    <span class="text-xs font-black text-[#00aaff] uppercase tracking-wider">Hito 3 (30 Puntos)</span>
                </div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight mt-1">Fase 3: Automatización y Despliegue de Red LAN</h4>
                <p class="text-slate-600 leading-relaxed mt-2 text-sm">
                    Implementa la configuración de una red de datos en un sistema operativo Linux. Diseña e implementa scripts en Bash para automatización básica. Configura interfaces de red (asignando direccionamiento IP, puerta de enlace) utilizando comandos y ejecuta pruebas de conectividad para validar la infraestructura.[cite: 1, 3, 6, 7]
                </p>
            </div>

        </div>
    </section>

    <!-- 04. Matriz de Evaluación (Escala Institucional UPDS) -->
    <section class="mb-20">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">04. Matrices de Evaluación por Niveles de Dominio[cite: 5]</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            
            <div class="p-7 bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden">
                <span class="absolute top-0 right-0 bg-slate-300 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Receptivo (9-17 Pts)[cite: 5]</span>
                <h4 class="text-lg font-black text-slate-600 uppercase mb-2">Conocimiento Teórico Básico</h4>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Describe algunas características de un sistema Linux, reconoce entornos gráficos y comandos básicos, e identifica parámetros iniciales del protocolo IP y redes.[cite: 5, 6]
                </p>
            </div>

            <div class="p-7 bg-white border-2 border-slate-200 rounded-2xl relative overflow-hidden">
                <span class="absolute top-0 right-0 bg-blue-400 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Resolutivo (18-23 Pts)[cite: 5]</span>
                <h4 class="text-lg font-black text-blue-600 uppercase mb-2">Instalación y Configuración Simple</h4>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Instala algunas distribuciones Linux, utiliza conceptos básicos para administrar entornos gráficos y comandos, y configura algunos parámetros de red elementales.[cite: 5, 6, 7]
                </p>
            </div>

            <div class="p-7 bg-white border-2 border-indigo-500 rounded-2xl relative overflow-hidden shadow-md">
                <span class="absolute top-0 right-0 bg-[#00aaff] text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Autónomo (24-29 Pts)[cite: 5]</span>
                <h4 class="text-lg font-black text-indigo-600 uppercase mb-2">Administración Funcional Completa</h4>
                <p class="text-xs text-slate-600 leading-relaxed">
                    Instala cualquier distribución explicando su estructura. Administra entornos gráficos y utiliza comandos eficazmente. Configura y fundamenta todos los parámetros de red requeridos.[cite: 5, 6, 7]
                </p>
            </div>

            <div class="p-7 bg-[#003366] text-white rounded-2xl relative overflow-hidden shadow-xl">
                <span class="absolute top-0 right-0 bg-yellow-400 text-[#003366] px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Estratégico (30-35 Pts)[cite: 5]</span>
                <h4 class="text-lg font-black text-yellow-400 uppercase mb-2">Diseño y Proposición Arquitectónica</h4>
                <p class="text-xs text-blue-100 leading-relaxed">
                    Propone la distribución y el entorno gráfico óptimos según el requerimiento. Diseña y configura redes de datos avanzadas considerando las aplicaciones que operarán en la infraestructura Linux.[cite: 5, 6, 7]
                </p>
            </div>

        </div>

        <div class="flex flex-col md:flex-row gap-6 bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
            <div class="flex-1">
                <h5 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-3">
                    <i class="fas fa-clipboard-check mr-2 text-[#00aaff]"></i> Evidencias de Producto del Estudiante
                </h5>
                <ul class="text-xs text-slate-600 space-y-2 font-medium">
                    <li>1. Instalaciones funcionales de diversas distribuciones de sistemas de software libre.</li>
                    <li>2. Archivos, scripts y configuraciones creadas utilizando herramientas o comandos de sistemas de software libre.</li>
                    <li>3. Red de datos operativa y configurada basándose en un sistema operativo Linux.</li>
                    <li>4. Informes finales formales sobre las investigaciones y prácticas realizadas.[cite: 1, 4]</li>
                </ul>
            </div>
            <div class="hidden md:block w-px bg-slate-300 mx-4"></div>
            <div class="flex-1">
                <h5 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-3">
                    <i class="fas fa-microscope mr-2 text-[#00aaff]"></i> Metacognición & Autovaloración[cite: 4]
                </h5>
                <p class="text-xs text-slate-600 italic leading-relaxed">
                    "Evaluación Formativa: ¿Cómo la elección adecuada de una distribución Linux, combinada con un manejo riguroso de la línea de comandos y una configuración de red segura, impacta directamente en la estabilidad operativa de los servicios de una empresa?"[cite: 4]
                </p>
            </div>
        </div>
    </section>

    <!-- 05. Decálogo de Buenas Prácticas Técnicas -->
    <section class="mt-20 font-sans">
        <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
            Decálogo del Administrador de Sistemas: 10 Buenas Prácticas
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-black flex-shrink-0 text-sm">1</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Planificación de Particiones</h5>
                    <p class="text-xs text-slate-500 mt-1">Analiza siempre los requerimientos del sistema y separa estratégicamente particiones críticas como <code class="font-mono text-slate-700">/home</code> o <code class="font-mono text-slate-700">/var</code> antes de instalar.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-cyan-100 text-cyan-600 flex items-center justify-center font-black flex-shrink-0 text-sm">2</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Uso Prudente de Privilegios Administrativos</h5>
                    <p class="text-xs text-slate-500 mt-1">Ejecuta procesos siempre como usuario estándar y utiliza <code class="font-mono text-slate-700">sudo</code> únicamente para comandos estrictamente administrativos.[cite: 2, 3]</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center font-black flex-shrink-0 text-sm">3</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Mantenimiento de Repositorios Limpios</h5>
                    <p class="text-xs text-slate-500 mt-1">Añade repositorios externos (PPA) solo de fuentes oficiales para evitar dependencias rotas y vulnerabilidades.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-black flex-shrink-0 text-sm">4</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Documentación de Scripts en Bash</h5>
                    <p class="text-xs text-slate-500 mt-1">Comenta detalladamente la lógica, variables y estructuras condicionales (if, while) dentro de todos tus scripts de automatización.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-purple-100 text-purple-600 flex items-center justify-center font-black flex-shrink-0 text-sm">5</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Auditoría Constante de Red</h5>
                    <p class="text-xs text-slate-500 mt-1">Acostúmbrate a utilizar comandos de análisis de interfaces (ej. <code class="font-mono text-slate-700">ip a</code>, <code class="font-mono text-slate-700">ping</code>) para verificar conectividad y direccionamiento LAN regularmente.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-amber-100 text-amber-600 flex items-center justify-center font-black flex-shrink-0 text-sm">6</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Respaldos antes de Modificar Configuraciones</h5>
                    <p class="text-xs text-slate-500 mt-1">Haz una copia de seguridad (ej. <code class="font-mono text-slate-700">.bak</code>) de cualquier archivo de configuración en <code class="font-mono text-slate-700">/etc/</code> antes de utilizar editores como Nano o Vim.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-rose-100 text-rose-600 flex items-center justify-center font-black flex-shrink-0 text-sm">7</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Optimización de Recursos Gráficos</h5>
                    <p class="text-xs text-slate-500 mt-1">Elige y configura entornos de escritorio ligeros si el hardware es limitado para garantizar una administración del sistema eficiente.[cite: 2, 6]</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center font-black flex-shrink-0 text-sm">8</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Control Preciso de Procesos</h5>
                    <p class="text-xs text-slate-500 mt-1">Aprende a identificar procesos "zombies" o de alto consumo para finalizarlos limpiamente desde la terminal sin reiniciar el servidor.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-teal-100 text-teal-700 flex items-center justify-center font-black flex-shrink-0 text-sm">9</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Jerarquía de Directorios Estricta</h5>
                    <p class="text-xs text-slate-500 mt-1">Respeta el estándar FHS (Filesystem Hierarchy Standard). No instales binarios o scripts personalizados fuera de <code class="font-mono text-slate-700">/usr/local/</code> o <code class="font-mono text-slate-700">/opt/</code>.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4">
                <div class="w-8 h-8 rounded bg-slate-200 text-slate-800 flex items-center justify-center font-black flex-shrink-0 text-sm">10</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Investigación y Consulta a la Comunidad</h5>
                    <p class="text-xs text-slate-500 mt-1">Ante fallos críticos, lee siempre los archivos de registro (logs) y apóyate en el autoaprendizaje revisando documentación oficial y foros de software libre.[cite: 2, 3]</p>
                </div>
            </div>

        </div>
    </section>

</div>
`;