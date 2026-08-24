// content/proyecto.js
const pag_proyecto = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-24">
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none">
            PROYECTO FORMATIVO<br>
            <span class="text-[#00aaff]">DISEÑO WEB I (SIS-0140)</span>
        </h1>
        <p class="mt-6 text-2xl font-light text-slate-500 max-w-2xl">
            Estrategia Didáctica: <strong class="font-black text-[#003366]">Desarrollo de una Plataforma Web Responsive para una Startup Tecnológica</strong>
        </p>
        <div class="h-2 w-24 bg-[#00aaff] mt-8"></div>
    </header>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">01. Problema del Contexto y Alineación ODS</h2>
        <div class="p-10 bg-slate-50 border border-slate-200 rounded-[2rem] shadow-sm relative overflow-hidden">
            <i class="fas fa-globe absolute -right-10 -bottom-10 text-blue-100 text-[10rem] opacity-50 -rotate-12"></i>
            <div class="relative z-10 max-w-4xl">
                <h3 class="text-3xl font-black text-[#003366] uppercase mb-4 tracking-tight">Caso: Visibilidad y Captación Digital para Startups Tecnológicas</h3>
                <p class="text-lg text-slate-600 leading-relaxed font-light mb-6">
                    <strong>Situación Problemática (Socioformativa):</strong> Las nuevas startups del entorno local enfrentan una baja tasa de captación y retención de usuarios debido a que carecen de portales web adaptables, accesibles y construidos bajo estándares internacionales. La ausencia de maquetación responsive estructurada y formularios validados reduce la visibilidad corporativa e impide la interacción fluida desde dispositivos móviles y de escritorio.
                </p>
                <p class="text-lg text-slate-600 leading-relaxed font-light mb-8">
                    <strong>Propósito Formativo del Proyecto:</strong> Diseñar, maquetar y validar una plataforma web integral (Landing Page interactiva) aplicando semántica pura en <strong>HTML5</strong>, diseño visual avanzado con <strong>CSS3 (Flexbox y Pseudo-clases)</strong> y maquetación ágil mediante frameworks como <strong>Bootstrap o Tailwind CSS</strong>, garantizando accesibilidad y adaptación multiplataforma.
                </p>

                <div class="border-t border-slate-200 pt-6">
                    <h4 class="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">Contribución a los Objetivos de Desarrollo Sostenible (ODS):</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="flex items-start gap-3 p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl">
                            <div class="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-black text-sm flex-none">8</div>
                            <div>
                                <strong class="text-sm text-emerald-950 block">ODS 8: Trabajo Decente y Crecimiento Económico</strong>
                                <p class="text-xs text-emerald-800 mt-1">Impulsa el crecimiento y posicionamiento comercial de emprendimientos digitales a través de interfaces profesionales de captación.</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-3 p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-sm flex-none">9</div>
                            <div>
                                <strong class="text-sm text-blue-950 block">ODS 9: Industria, Innovación e Infraestructura</strong>
                                <p class="text-xs text-blue-800 mt-1">Fortalece la infraestructura de software accesible y la adopción de tecnologías frontend modernas y estandarizadas.</p>
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
                <i class="fab fa-html5 text-4xl text-orange-500 mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Conocer</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Fundamentos Web, Semántica y CSS</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Arquitectura cliente-servidor, estándares W3C, marcado semántico HTML5 (<code>header</code>, <code>nav</code>, <code>main</code>, <code>section</code>, <code>footer</code>), validación nativa de formularios, Modelo de Caja (Box Model), especificidad en cascada, tipografía y propiedades de Flexbox.
                </p>
            </div>

            <div class="p-8 border-t-8 border-[#00aaff] bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fab fa-css3-alt text-4xl text-cyan-500 mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Hacer</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Maquetación Frontend y Frameworks</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Traducción precisa de wireframes a código web. Construcción de layouts fluidos con Flexbox (ejes, alineación y wrapping), integración de micro-interacciones (<code>:hover</code>, <code>:active</code>, <code>::before</code>, <code>::after</code>), y maquetación ágil responsive con Bootstrap o Tailwind CSS.
                </p>
            </div>

            <div class="p-8 border-t-8 border-slate-300 bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fas fa-universal-access text-4xl text-slate-500 mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Ser & Convivir</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Calidad Visual, Accesibilidad y Ética</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Compromiso con el diseño centrado en el usuario, empatía y accesibilidad web (contraste, etiquetas descriptivas), rigor técnico en la estructuración de código limpio e identado, y trabajo colaborativo responsable.
                </p>
            </div>

        </div>
    </section>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">03. Secuencia Didáctica (Fases de Implementación)</h2>
        <div class="space-y-8 max-w-4xl border-l-2 border-slate-100 pl-8 ml-4">
            
            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-slate-200 border-4 border-white"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 1: Arquitectura de Información y Wireframing</h4>
                <p class="text-sm font-bold text-[#00aaff] uppercase tracking-widest mb-2">Bocetado Estructural en Papel y Marcado HTML5</p>
                <p class="text-slate-600 leading-relaxed">
                    Diseño del boceto (wireframe) identificando la jerarquía de componentes: barra de navegación, sección Hero, bloque de servicios/tarjetas, formulario de contacto y pie de página. Construcción del esqueleto semántico puro en HTML5 sin dependencias visuales.
                </p>
            </div>

            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-[#00aaff] border-4 border-white shadow-md"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 2: Estilización, Modelo de Caja y Flexbox</h4>
                <p class="text-sm font-bold text-[#00aaff] uppercase tracking-widest mb-2">Maquetación con CSS3 Puro y Pseudo-estados</p>
                <p class="text-slate-600 leading-relaxed">
                    Aplicación de reglas de diseño visual mediante CSS3: control milimétrico de <code>margin</code>, <code>padding</code>, sombras y bordes redondeados. Alineación de menús y tarjetas con <code>display: flex</code> e implementación de interactividad táctil con <code>:hover</code>, <code>:active</code> y pseudo-elementos decorativos.
                </p>
            </div>

            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-[#003366] border-4 border-white shadow-md"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 3: Adaptabilidad Responsive y Frameworks CSS</h4>
                <p class="text-sm font-bold text-[#00aaff] uppercase tracking-widest mb-2">Integración con Bootstrap / Tailwind CSS y Cierre</p>
                <p class="text-slate-600 leading-relaxed">
                    Optimización del portal con componentes responsive (carruseles, modales y navbars colapsables). Pruebas multiplataforma en diferentes anchos de pantalla (móvil, tablet, escritorio) y validación de estándares web de la W3C.
                </p>
            </div>

        </div>
    </section>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">04. Matriz de Evaluación (Niveles de Dominio UPDS)</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            <div class="p-8 bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-slate-300 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Receptivo</div>
                <h4 class="text-xl font-black text-slate-500 uppercase mb-2">Marcado y Estilos Básicos</h4>
                <p class="text-sm text-slate-600">Construye una página web lineal con etiquetas genéricas (<code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>) y estilos en línea o CSS elemental. No aplica semántica HTML5 ni controla adecuadamente el espaciado o la alineación de componentes.</p>
            </div>

            <div class="p-8 bg-white border-2 border-slate-200 rounded-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-blue-400 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Resolutivo</div>
                <h4 class="text-xl font-black text-blue-500 uppercase mb-2">Maquetación Estructurada Funcional</h4>
                <p class="text-sm text-slate-600">Estructura el sitio utilizando etiquetas semánticas de HTML5 y hojas de estilo externas. Aplica el modelo de caja y reglas básicas de Flexbox para alinear elementos, aunque con limitaciones de responsividad en pantallas móviles.</p>
            </div>

            <div class="p-8 bg-white border-2 border-indigo-500 rounded-2xl relative overflow-hidden shadow-md">
                <div class="absolute top-0 right-0 bg-[#00aaff] text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Autónomo</div>
                <h4 class="text-xl font-black text-indigo-500 uppercase mb-2">Diseño Interactivo y Responsive</h4>
                <p class="text-sm text-slate-600">Desarrolla interfaces fluidas controlando los dos ejes de Flexbox, integrando formularios completos con validaciones nativas y micro-interacciones (<code>:hover</code>, <code>:active</code>, <code>::after</code>). Adapta el sitio a múltiples dispositivos.</p>
            </div>

            <div class="p-8 bg-[#003366] text-white rounded-2xl relative overflow-hidden shadow-xl">
                <div class="absolute top-0 right-0 bg-yellow-400 text-[#003366] px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Estratégico</div>
                <h4 class="text-xl font-black text-yellow-400 uppercase mb-2">Arquitectura Frontend Profesional</h4>
                <p class="text-sm text-blue-100">Despliega un portal web modular de alta fidelidad visual mediante frameworks CSS modernos (Bootstrap/Tailwind). Cumple estándares estrictos de validación W3C, accesibilidad, jerarquía tipográfica óptima y transiciones dinámicas.</p>
            </div>

        </div>

        <div class="flex flex-col md:flex-row gap-6 bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
            <div class="flex-1">
                <h5 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-3"><i class="fas fa-tasks mr-2 text-[#00aaff]"></i> Entregables del Estudiante</h5>
                <ul class="text-sm text-slate-600 space-y-2 font-medium">
                    <li>1. Fotografía legible del Wireframe / Boceto estructural inicial diseñado a mano.</li>
                    <li>2. Archivo comprimido con la estructura fuente (<code>index.html</code>, carpeta <code>css/</code>, carpeta <code>img/</code>).</li>
                    <li>3. Capturas de pantalla o enlace de despliegue donde se evidencie el diseño en versión desktop y móvil.</li>
                </ul>
            </div>
            <div class="hidden md:block w-px bg-slate-300 mx-4"></div>
            <div class="flex-1">
                <h5 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-3"><i class="fas fa-lightbulb mr-2 text-[#00aaff]"></i> Metacognición Docente</h5>
                <p class="text-sm text-slate-600 italic">
                    "Reflexión sobre el diseño frontend: ¿De qué manera la planificación previa mediante wireframes y el uso estricto del Modelo de Caja evitan la necesidad de reescribir reglas CSS complejas al adaptar la interfaz a dispositivos móviles?"
                </p>
            </div>
        </div>
    </section>

    <section class="mt-20 font-sans">
        <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">El Decálogo del Desarrollador Frontend: 10 Buenas Prácticas</h3>
        <p class="text-lg text-slate-600 leading-relaxed mb-8">
            Para la presentación final de tu portal web corporativo, debes regirte por los siguientes estándares técnicos que guiarán la calidad, la accesibilidad y el rendimiento de tu interfaz:
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-blue-500 transition-colors">
                <div class="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-black flex-shrink-0">1</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Boceto Previo en Papel (Wireframe)</h5>
                    <p class="text-xs text-slate-500 mt-1">Nunca codifiques a ciegas. Diseña primero la distribución de cajas y secciones en papel antes de escribir la primera línea de HTML.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-cyan-500 transition-colors">
                <div class="w-8 h-8 rounded bg-cyan-100 text-cyan-600 flex items-center justify-center font-black flex-shrink-0">2</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Semántica HTML5 Estricta</h5>
                    <p class="text-xs text-slate-500 mt-1">Evita la 'divitis'. Emplea etiquetas con significado real (<code>header</code>, <code>nav</code>, <code>main</code>, <code>section</code>, <code>article</code>, <code>footer</code>) para mejorar el SEO y la accesibilidad.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-indigo-500 transition-colors">
                <div class="w-8 h-8 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center font-black flex-shrink-0">3</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Reset y Box-Sizing Universal</h5>
                    <p class="text-xs text-slate-500 mt-1">Inicia siempre tus estilos con <code>* { box-sizing: border-box; margin: 0; padding: 0; }</code> para evitar desbordes involuntarios en el modelo de caja.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-orange-500 transition-colors">
                <div class="w-8 h-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center font-black flex-shrink-0">4</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Separación de Responsabilidades</h5>
                    <p class="text-xs text-slate-500 mt-1">Mantén el código HTML libre de estilos embebidos (<code>style="..."</code>). Centraliza todo el diseño en hojas de estilo externas <code>.css</code>.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-emerald-500 transition-colors">
                <div class="w-8 h-8 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-black flex-shrink-0">5</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Accesibilidad (a11y) y Atributos Alt</h5>
                    <p class="text-xs text-slate-500 mt-1">Toda imagen debe incluir su atributo <code>alt</code> descriptivo y todos los controles de formulario deben estar vinculados a un <code>&lt;label&gt;</code> mediante su <code>id</code>.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-amber-500 transition-colors">
                <div class="w-8 h-8 rounded bg-amber-100 text-amber-600 flex items-center justify-center font-black flex-shrink-0">6</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Maquetación Moderna con Flexbox</h5>
                    <p class="text-xs text-slate-500 mt-1">Usa <code>display: flex</code>, <code>justify-content</code> y <code>align-items</code> para alinear componentes. Evita hacks obsoletos basados en <code>float</code> o márgenes negativos.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-rose-500 transition-colors">
                <div class="w-8 h-8 rounded bg-rose-100 text-rose-600 flex items-center justify-center font-black flex-shrink-0">7</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Nombres de Clases Descriptivos</h5>
                    <p class="text-xs text-slate-500 mt-1">Utiliza nomenclaturas claras basadas en componentes (ej: <code>.card-producto</code>, <code>.btn-primario</code>) en lugar de nombres arbitrarios o ambiguos.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-purple-500 transition-colors">
                <div class="w-8 h-8 rounded bg-purple-100 text-purple-600 flex items-center justify-center font-black flex-shrink-0">8</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Micro-interacciones y Feedback Visual</h5>
                    <p class="text-xs text-slate-500 mt-1">Proporciona retroalimentación al usuario mediante transiciones suaves (<code>transition: all 0.3s ease</code>) en los estados <code>:hover</code> y <code>:active</code> de los botones.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-yellow-500 transition-colors">
                <div class="w-8 h-8 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center font-black flex-shrink-0">9</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Diseño Adaptable (Mobile-First)</h5>
                    <p class="text-xs text-slate-500 mt-1">Asegura la inclusión del meta viewport y verifica que tu sitio sea 100% legible y navegable en resoluciones de smartphones y escritorios.</p>
                </div>
            </div>

            <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-slate-800 transition-colors">
                <div class="w-8 h-8 rounded bg-slate-200 text-slate-800 flex items-center justify-center font-black flex-shrink-0">10</div>
                <div>
                    <h5 class="font-bold text-[#003366] text-sm">Validación W3C y Optimización</h5>
                    <p class="text-xs text-slate-500 mt-1">Pasa tu código por el validador oficial de la W3C para verificar que no existan etiquetas sin cerrar, atributos deprecados o errores de anidamiento.</p>
                </div>
            </div>

        </div>
    </section>

</div>
`;