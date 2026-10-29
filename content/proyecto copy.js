// content/proyecto.js
const pag_proyecto = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-24">
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none">
            PROYECTO FORMATIVO<br>
            <span class="text-indigo-600">ARQUITECTURA DE SOFTWARE & POO</span>
        </h1>
        <p class="mt-6 text-2xl font-light text-slate-500 max-w-2xl">
            Estrategia Didáctica: <strong class="font-black text-[#003366]">Desarrollo de Simuladores Interactivos y Motores de Juego Eficientes</strong>
        </p>
        <div class="h-2 w-24 bg-indigo-600 mt-8"></div>
    </header>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">01. Problema del Contexto (Reto Cognitivo)</h2>
        <div class="p-10 bg-slate-50 border border-slate-200 rounded-[2rem] shadow-sm relative overflow-hidden">
            <i class="fas fa-network-wired absolute -right-10 -bottom-10 text-indigo-100 text-[10rem] opacity-50 -rotate-12"></i>
            <div class="relative z-10 max-w-3xl">
                <h3 class="text-3xl font-black text-[#003366] uppercase mb-4 tracking-tight">Caso: Motores de Simulación y Entornos Interactivos de Alto Rendimiento</h3>
                <p class="text-lg text-slate-600 leading-relaxed font-light mb-6">
                    <strong>Situación Problemática:</strong> La falta de la aplicación de técnicas avanzadas de programación orientada a objetos en el desarrollo de aplicaciones interactivas genera sistemas de software rígidos, difíciles de escalar y con graves problemas de rendimiento computacional debido a un uso ineficiente de la memoria RAM y algoritmos redundantes.
                </p>
                <p class="text-lg text-slate-600 leading-relaxed font-light">
                    <strong>Propósito Formativo:</strong> Diseñar y codificar un simulador interactivo o motor de videojuego aplicando de forma estricta el paradigma de Programación Orientada a Objetos, abstracción de clases, gestión controlada de memoria dinámica (instanciación en Heap), sobrecarga de funciones y optimización mediante algoritmos recursivos eficientes.
                </p>
            </div>
        </div>
    </section>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">02. Movilización de Saberes Esenciales</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div class="p-8 border-t-8 border-[#003366] bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fas fa-cubes text-4xl text-indigo-500 mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Conocer</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Fundamentos de Arquitectura de Software</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Dominio de los conceptos de Abstracción, Encapsulamiento, Herencia, Polimorfismo, Clases Abstractas, interfaces, firmas sobrecargadas, algoritmos recursivos de búsqueda/división y gestión de la memoria RAM (Stack y Heap).
                </p>
            </div>

            <div class="p-8 border-t-8 border-indigo-500 bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fas fa-laptop-code text-4xl text-[#003366] mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Hacer</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Ingeniería y Refactorización del Código</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Modelado de diagramas de clases estructurados; instanciación dinámica de objetos mediante punteros o referencias; inicialización de interfaces gráficas (GUI) e implementación de bucles de actualización física en tiempo real.
                </p>
            </div>

            <div class="p-8 border-t-8 border-slate-300 bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fas fa-shield-halved text-4xl text-indigo-500 mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Ser & Convivir</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Optimización Ética y Código Limpio</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Responsabilidad en la prevención de fugas de memoria (Memory Leaks), apego a estándares de codificación limpia (SOLID), adaptabilidad para el trabajo colaborativo e investigación autodidacta de librerías avanzadas.
                </p>
            </div>

        </div>
    </section>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">03. Secuencia Didáctica (Fases del Desarrollo)</h2>
        <div class="space-y-8 max-w-4xl border-l-2 border-slate-100 pl-8 ml-4">
            
            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-slate-200 border-4 border-white"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 1: Modelado de Arquitectura y Abstracción</h4>
                <p class="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Diseño de Clases y Diagramación</p>
                <p class="text-slate-600 leading-relaxed">
                    Abstracción del problema de simulación. Identificación obligatoria de Clases Base, Clases Derivadas, Atributos Privados, Métodos Públicos, Constructores/Destructores y el diseño del diagrama estructural de clases bajo el estándar UML.
                </p>
            </div>

            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-indigo-500 border-4 border-white shadow-md"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 2: Implementación de la Lógica POO e Interfaz Gráfica</h4>
                <p class="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Desarrollo y Renderizado</p>
                <p class="text-slate-600 leading-relaxed">
                    Configuración de la librería gráfica elegida. Codificación de la jerarquía de herencia y polimorfismo dinámico utilizando punteros o colecciones de objetos. Implementación de sobrecarga de métodos (por ejemplo, para renderizar entidades con diferentes parámetros) y el bucle principal de actualización física de la interfaz.
                </p>
            </div>

            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-[#003366] border-4 border-white shadow-md"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 3: Algoritmia Avanzada y Optimización de Memoria</h4>
                <p class="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Cierre Técnico de Rendimiento</p>
                <p class="text-slate-600 leading-relaxed">
                    Integración de al menos un algoritmo recursivo (como generación de laberintos fractales, árboles de decisión, búsquedas espaciales indexadas o colisiones por subdivisión). Pruebas de rendimiento, liberación estricta de variables en memoria e informe final de estabilidad de memoria dinámica.
                </p>
            </div>

        </div>
    </section>

    <section>
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">04. Matriz de Evaluación Auténtica (Niveles de Dominio POO)</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            <div class="p-8 bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-slate-300 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Receptivo</div>
                <h4 class="text-xl font-black text-slate-500 uppercase mb-2">Programación Secuencial Avanzada</h4>
                <p class="text-sm text-slate-600">Implementa código donde se distinguen estructuras básicas de datos y llamadas aisladas a clases estructuradas. Carece de herencia funcional, polimorfismo real, recursividad o el uso explícito de memoria dinámica controlada.</p>
            </div>

            <div class="p-8 bg-white border-2 border-slate-200 rounded-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-blue-400 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Resolutivo</div>
                <h4 class="text-xl font-black text-blue-500 uppercase mb-2">POO Estructural Base</h4>
                <p class="text-sm text-slate-600">Codifica el simulador implementando encapsulamiento básico (getters/setters), herencia lineal entre componentes y una interfaz gráfica funcional. Se aplican funciones sobrecargadas simples, pero la algoritmia recursiva es ausente o ineficiente.</p>
            </div>

            <div class="p-8 bg-white border-2 border-indigo-500 rounded-2xl relative overflow-hidden shadow-md">
                <div class="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Autónomo</div>
                <h4 class="text-xl font-black text-indigo-500 uppercase mb-2">Simulador Polimórfico Óptimo</h4>
                <p class="text-sm text-slate-600">Utiliza colecciones dinámicas de datos mediante clases abstractas y polimorfismo dinámico en tiempo de ejecución. El renderizado visual de entidades se controla mediante herencia avanzada y los objetos en el Heap se gestionan y destruyen limpiamente.</p>
            </div>

            <div class="p-8 bg-[#003366] text-white rounded-2xl relative overflow-hidden shadow-xl">
                <div class="absolute top-0 right-0 bg-yellow-400 text-[#003366] px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Estratégico</div>
                <h4 class="text-xl font-black text-yellow-400 uppercase mb-2">Arquitectura de Patrones e Innovación</h4>
                <p class="text-sm text-blue-100">Integra patrones de diseño formal (como *Factory, State o Observer*). Resuelve problemas espaciales complejos con algoritmos recursivos de alta velocidad, optimiza el rendimiento del recolector de basura o la asignación de punteros nativos, e investiga técnicas de optimización fuera de la guía.</p>
            </div>

        </div>

        <div class="flex flex-col md:flex-row gap-6 bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
            <div class="flex-1">
                <h5 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-3"><i class="fas fa-tasks mr-2 text-indigo-500"></i> Entregables Obligatorios</h5>
                <ul class="text-sm text-slate-600 space-y-2 font-medium">
                    <li>1. Diagrama de Clases UML formal del simulador interactivo (.pdf/.png).</li>
                    <li>2. Código fuente completo estructurado por clases del software, alojado en un repositorio.</li>
                    <li>3. Documento de investigación científica técnico basado en el estándar formativo institucional.</li>
                </ul>
            </div>
            <div class="hidden md:block w-px bg-slate-300 mx-4"></div>
            <div class="flex-1">
                <h5 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-3"><i class="fas fa-lightbulb mr-2 text-indigo-500"></i> Metacognición</h5>
                <p class="text-sm text-slate-600 italic">
                    "Reflexión sobre el ciclo de vida de los objetos: ¿Cómo impacta el uso de polimorfismo dinámico a través de referencias y la instanciación masiva de clases en la memoria en comparación con estructuras puramente estáticas?"
                </p>
            </div>
        </div>
    </section>

    <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Líneas de Desarrollo Tecnológico (Elige tu Ecosistema)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                El trabajo se realizará en **equipos de desarrollo colaborativo**. La regla técnica inquebrantable para todos los grupos es el uso estricto de **Clases Propias, Polimorfismo e Interfaces Gráficas**. Los estudiantes tienen la total libertad de elegir uno de los siguientes tres lenguajes con sus respectivos frameworks:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white border-t-4 border-blue-500 rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform">
                    <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                        <i class="fas fa-gem text-2xl"></i>
                    </div>
                    <h4 class="text-xl font-black text-[#003366] uppercase mb-3">1. C++ Nativo (SFML / wxWidgets / Code::Blocks)</h4>
                    <p class="text-sm text-slate-600 mb-4">Control y gestión de bajo nivel. Construcción de simuladores de física o videojuegos en 2D utilizando clases heredadas complejas, punteros nativos (*pointers*), destructores para liberar memoria dinámica con <code>free()</code> o <code>delete</code> y sobrecarga de operadores.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">C++ Object Model</span>
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">Heap Management</span>
                    </div>
                </div>

                <div class="bg-white border-t-4 border-emerald-500 rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform">
                    <div class="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                        <i class="fab fa-python text-2xl"></i>
                    </div>
                    <h4 class="text-xl font-black text-[#003366] uppercase mb-3">2. Python Corporativo (Pygame / CustomTkinter)</h4>
                    <p class="text-sm text-slate-600 mb-4">Abstracción limpia de alto rendimiento. Creación de simuladores lógicos o sistemas visuales orientados a objetos con herencia múltiple, inicialización de interfaces mediante empaquetamiento de métodos y algoritmos recursivos de optimización espacial.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">Python Classes</span>
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">Advanced Pygame</span>
                    </div>
                </div>

                <div class="bg-white border-t-4 border-purple-500 rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform">
                    <div class="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                        <i class="fab fa-js text-2xl"></i>
                    </div>
                    <h4 class="text-xl font-black text-[#003366] uppercase mb-3">3. JavaScript Moderno (ES6 Classes / Phaser / KAPLAY)</h4>
                    <p class="text-sm text-slate-600 mb-4">Despliegue ágil multiplataforma en entornos Web. Modelado de entidades interactivas utilizando la sintaxis formal de clases ECMAScript 6, herencia polimórfica de componentes gráficos y encapsulamiento mediante closures o campos privados.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">ES6 Classes</span>
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">KAPLAY / Phaser POO</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-20 mb-10">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Protocolo de Sustentación Oficial</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-10">
                Un ingeniero de sistemas de alto nivel no solo escribe algoritmos eficientes, también documenta rigurosamente, publica bajo control de versiones y defiende sus decisiones de diseño de software. El proyecto final se evaluará bajo **tres pilares fundamentales**:
            </p>

            <div class="space-y-8">
                
                <div class="flex flex-col md:flex-row gap-6 bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl relative overflow-hidden">
                    <div class="w-16 h-16 rounded-2xl bg-slate-800 text-white flex items-center justify-center shadow-lg flex-shrink-0 z-10">
                        <i class="fab fa-github text-3xl"></i>
                    </div>
                    <div class="relative z-10">
                        <h4 class="text-xl font-black text-[#003366] uppercase mb-2">1. Repositorio en GitHub (Estructura de Arquitectura Limpia)</h4>
                        <p class="text-sm text-slate-600 mb-3">El proyecto debe estar alojado en GitHub de forma pública o privada administrado mediante ramas Git controladas. No se aceptarán envíos informales sueltos.</p>
                        <ul class="text-sm text-slate-600 space-y-2">
                            <li><i class="fas fa-check text-green-500 mr-2"></i><strong>Modularización Estricta:</strong> Separación formal de interfaces físicas (.h / .cpp, módulos .py o archivos de clase .js independientes).</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i><strong>Documentación de Compilación:</strong> Archivo README.md técnico detallando el gestor de dependencias utilizado (vcpkg, pip o npm) y los pasos exactos para compilar y ejecutar el simulador.</li>
                        </ul>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row gap-6 bg-blue-50 border border-blue-200 p-6 md:p-8 rounded-2xl relative overflow-hidden">
                    <div class="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg flex-shrink-0 z-10">
                        <i class="fas fa-file-invoice text-3xl"></i>
                    </div>
                    <div class="relative z-10 w-full">
                        <h4 class="text-xl font-black text-[#003366] uppercase mb-2">2. Documento Científico de la Arquitectura (Formato IMRD + APA 7)</h4>
                        <p class="text-sm text-slate-600 mb-4">El marco conceptual y el análisis empírico del rendimiento del sistema interactivo deben redactarse bajo el estándar formal <strong>IMRD</strong> empleando las <strong>Normas APA de 7ma Edición</strong>.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div class="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                                <span class="font-black text-blue-600 text-xs tracking-widest block mb-1">I - INTRODUCCIÓN</span>
                                <p class="text-xs text-slate-500">Justificación teórica de la elección del paradigma POO frente a la programación funcional o estructurada tradicional para resolver la complejidad del simulador.</p>
                            </div>
                            <div class="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                                <span class="font-black text-blue-600 text-xs tracking-widest block mb-1">M - METODOLOGÍA</span>
                                <p class="text-xs text-slate-500">Diseño detallado de la arquitectura de software: jerarquías de herencia aplicadas, justificación de firmas sobrecargadas y desglose paso a paso de la lógica recursiva integrada.</p>
                            </div>
                            <div class="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                                <span class="font-black text-blue-600 text-xs tracking-widest block mb-1">R - RESULTADOS</span>
                                <p class="text-xs text-slate-500">Métricas analíticas reales de consumo de memoria RAM dinámica, estabilidad de fotogramas de la interfaz gráfica y diagramas de secuencia limpios.</p>
                            </div>
                            <div class="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                                <span class="font-black text-blue-600 text-xs tracking-widest block mb-1">D - DISCUSIÓN</span>
                                <p class="text-xs text-slate-500">Comparativa técnica del costo computacional de la recursividad utilizada frente a enfoques iterativos alternativos y propuestas de optimización de memoria a futuro.</p>
                            </div>
                        </div>

                        <div class="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-xl mt-4 flex items-center gap-4">
                            <i class="fas fa-book-bookmark text-2xl text-rose-500"></i>
                            <div>
                                <strong class="text-sm text-rose-900 block">Gestor de Referencias Obligatorio: ZOTERO</strong>
                                <p class="text-xs text-rose-800 mt-1">Queda estrictamente prohibido tippear las referencias de tecnologías o manuales de forma manual. Todas las citas bibliográficas del documento deben gestionarse mediante el software <strong>Zotero</strong>.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row gap-6 bg-orange-50 border border-orange-200 p-6 md:p-8 rounded-2xl relative overflow-hidden">
                    <div class="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg flex-shrink-0 z-10">
                        <i class="fas fa-chalkboard-user text-3xl"></i>
                    </div>
                    <div class="relative z-10">
                        <h4 class="text-xl font-black text-[#003366] uppercase mb-2">3. Exposición y Auditoría de Código en Vivo</h4>
                        <p class="text-sm text-slate-600 mb-3">El equipo simulará una entrega formal de producto de software ante un comité de arquitectura técnica.</p>
                        <ul class="text-sm text-slate-600 space-y-2">
                            <li><i class="fas fa-play-circle text-orange-500 mr-2"></i><strong>Demostración interactiva:</strong> Ejecución limpia del simulador gráfico sin excepciones imprevistas en la consola de depuración.</li>
                            <li><i class="fas fa-bug text-orange-500 mr-2"></i><strong>Auditoría Estructural de Clases:</strong> El docente podrá realizar preguntas individuales y solicitar modificaciones en tiempo real al código (ej: añadir un parámetro sobrecargado o rastrear un puntero en memoria) para validar la autoría y asimilación de competencias de cada miembro del equipo.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>

        <section class="mt-16 mb-12">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Modelo Base de Reporte Técnico IMRD</h3>
            
            <div class="bg-gradient-to-r from-[#003366] to-blue-900 rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <i class="fas fa-file-word absolute -left-10 -bottom-10 text-white/5 text-[12rem] transform -rotate-12"></i>
                
                <div class="relative z-10 text-white max-w-2xl">
                    <h4 class="text-2xl font-black uppercase mb-2 text-blue-100">Plantilla Oficial Word de Programación III</h4>
                    <p class="text-sm text-blue-200 leading-relaxed mb-4">
                        Descarga el modelo base estructurado en Microsoft Word con márgenes preconfigurados, estilos tipográficos jerarquizados y los campos técnicos necesarios para el análisis estructural de clases orientadas a objetos y gestión de memoria.
                    </p>
                    <div class="flex gap-3 text-xs font-bold text-blue-300 uppercase tracking-widest">
                        <span><i class="fas fa-check-circle text-green-400 mr-1"></i> Formato APA 7</span>
                        <span><i class="fas fa-check-circle text-green-400 mr-1"></i> Tabla de Contenido Automatizada</span>
                    </div>
                </div>
                
                <a href="#" class="relative z-10 flex-shrink-0 bg-white hover:bg-blue-50 text-[#003366] font-black uppercase tracking-widest text-sm py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-white/20 flex items-center gap-3 transform hover:scale-105">
                    <i class="fas fa-download text-blue-500 text-xl"></i>
                    Descargar Documento Base
                </a>
            </div>
            <p class="text-xs text-slate-400 mt-3 text-right italic">* Archivo totalmente configurado para conectarse directamente con el plugin de Zotero.</p>
        </section>

        <section class="mb-12">
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b border-slate-300 pb-2 mb-6 font-sans flex items-center gap-3">
                <span class="bg-[#003366] text-white w-8 h-8 flex items-center justify-center rounded text-sm">I</span> Introducción e Ingeniería del Paradigma
            </h3>
            <p class="text-justify text-slate-700 leading-relaxed mb-4">
                En la ingeniería de sistemas e informática contemporánea, la elección del paradigma de desarrollo define de manera directa la estabilidad operacional del software. Históricamente, el uso indiscriminado de código estructurado tradicional o variables globales desencadenaba altos acoplamientos, haciendo que el mantenimiento de sistemas complejos fuera inviable (Gervais, 2016). El paradigma de Programación Orientada a Objetos (POO), combinado con una gestión rigurosa de la asignación dinámica en la memoria RAM, surge como la metodología estándar para construir aplicaciones altamente escalables, modulares y con un rendimiento predecible de recursos en hardware.
            </p>
            <p class="text-justify text-slate-700 leading-relaxed mb-6">
                El presente proyecto aborda experimentalmente la resolución del nodo problematizador mediante el modelado lógico de una jerarquía polimórfica interactiva. Se plantea la implementación de una arquitectura limpia que encapsule comportamientos físicos y matemáticos dentro de entidades de clases abstractas reutilizables, optimizando el ciclo de vida de los objetos e integrando rutinas recursivas para la toma de decisiones algorítmicas ágiles.
            </p>
            
            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 font-sans mb-4">
                <h4 class="font-bold text-blue-900 mb-2">Objetivo General del Proyecto</h4>
                <p class="text-sm text-blue-800">Desarrollar un sistema de simulación gráfica interactivo altamente optimizado mediante la implementación técnica y rigurosa del paradigma de programación orientada a objetos avanzada, algoritmos recursivos eficientes y gestión segura de memoria dinámica.</p>
                
                <h4 class="font-bold text-blue-900 mt-4 mb-2">Objetivos Específicos Técnicos</h4>
                <ul class="list-disc list-inside text-sm text-blue-800 space-y-1">
                    <li>Estructurar diagramas UML exhaustivos que modelen de forma transparente el encapsulamiento y las relaciones de herencia de clases del dominio del problema.</li>
                    <li>Codificar comportamientos flexibles en tiempo de ejecución a través de la implementación de polimorfismo dinámico utilizando colecciones controladas de objetos.</li>
                    <li>Integrar algoritmos recursivos estables y sobrecarga de funciones para optimizar procesos matemáticos o lógicos en la renderización de la interfaz.</li>
                    <li>Garantizar un consumo de memoria óptimo mediante el rastreo limpio de punteros o referencias y la destrucción planificada de entidades en el Heap.</li>
                </ul>
            </div>
        </section>

        <section class="mb-12">
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b border-slate-300 pb-2 mb-6 font-sans flex items-center gap-3">
                <span class="bg-[#003366] text-white w-8 h-8 flex items-center justify-center rounded text-sm">M</span> Metodología del Desarrollo Lógico
            </h3>
            <p class="text-justify text-slate-700 leading-relaxed mb-4">
                El enfoque del proyecto es de naturaleza tecnológico-aplicada. La metodología de diseño arquitectónico y codificación orientada a objetos se divide en tres fases organizadas de la siguiente forma:
            </p>
            <ul class="list-decimal list-inside text-slate-700 leading-relaxed mb-6 space-y-3">
                <li><strong>Modelado Arquitectónico (UML):</strong> Se diseñó formalmente la topología del software separando las entidades lógicas en clases independientes. Se aislaron las propiedades sensibles utilizando modificadores de acceso restringidos (<code>private</code>/<code>protected</code>) para asegurar el encapsulamiento de datos e impedir mutaciones externas accidentales.</li>
                <li><strong>Pipeline de Abstracción y Polimorfismo:</strong> Las entidades interactivas de la interfaz gráfica se derivaron de clases abstractas comunes o interfaces base mediante herencia. El bucle de refresco del simulador procesa las colecciones dinámicas de manera polimórfica, invocando comportamientos de dibujado o cálculo físico a nivel de hardware de forma adaptativa.</li>
                <li><strong>Algoritmia Compleja y Ciclo de Vida:</strong> Se implementó un motor recursivo estructurado de orden de complejidad controlado para manejar las estructuras anidadas o búsquedas en escena. El control de variables en la memoria dinámica se auditó paso a paso para asegurar que cada objeto creado en el Heap mediante constructores asíncronos fuera destruido de forma segura al salir de la ejecución del software.</li>
            </ul>
        </section>

        <section class="mb-12">
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b border-slate-300 pb-2 mb-6 font-sans flex items-center gap-3">
                <span class="bg-[#003366] text-white w-8 h-8 flex items-center justify-center rounded text-sm">R</span> Resultados de Rendimiento de Software
            </h3>
            <p class="text-justify text-slate-700 leading-relaxed mb-4">
                La implementación rigurosa de las arquitecturas lógicas orientadas a objetos e instanciación dinâmica controlada arrojó datos empíricos sólidos de optimización en el hardware:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 font-sans">
                <div class="border border-slate-200 p-4 rounded-lg bg-slate-50">
                    <h5 class="font-bold text-slate-800 text-sm mb-2"><i class="fas fa-microchip text-indigo-500 mr-2"></i>Control de la Memoria Dinámica</h5>
                    <p class="text-xs text-slate-600">Al ejecutar el entorno gráfico con una carga masiva de más de 500 objetos activos simultáneos en escena, la memoria RAM dinámica del Heap se estabilizó de manera predecible, registrando un consumo constante y garantizando **cero fugas de memoria (Memory Leaks)** gracias al control estricto de punteros o referencias de clases.</p>
                </div>
                <div class="border border-slate-200 p-4 rounded-lg bg-slate-50">
                    <h5 class="font-bold text-slate-800 text-sm mb-2"><i class="fas fa-bolt text-yellow-500 mr-2"></i>Velocidad Algorítmica</h5>
                    <p class="text-xs text-slate-600">El uso de funciones sobrecargadas inteligentes y la optimización de los casos base en las rutinas de los algoritmos recursivos permitieron procesar de manera fluida las matrices físicas de renderizado, sosteniendo una tasa de refresco constante en la interfaz de usuario.</p>
                </div>
            </div>
            <p class="text-justify text-slate-700 leading-relaxed">
                Los diagramas de clases definitivos confirman que la herencia estructural reduce sustancialmente el duplicado de líneas de código fuente redundante, promoviendo el aislamiento del software y permitiendo un mantenimiento limpio a nivel de componentes corporativos de manera segura.
            </p>
        </section>

        <section class="mb-12">
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b border-slate-300 pb-2 mb-6 font-sans flex items-center gap-3">
                <span class="bg-[#003366] text-white w-8 h-8 flex items-center justify-center rounded text-sm">D</span> Discusión y Conclusiones Técnicas
            </h3>
            <p class="text-justify text-slate-700 leading-relaxed mb-4">
                Los hallazgos experimentales respaldan sólidamente las afirmaciones de Joyanes y Zahonero (2007), quienes sostienen que la abstracción orientada a objetos unida al control explícito de las colecciones dinámicas optimiza la velocidad en entornos con alta densidad de variables concurrentes. La separación de responsabilidades a través de jerarquías de clases abstractas agiliza significativamente el escalamiento y legibilidad del código del motor en comparación con arquitecturas monolíticas no estructuradas.
            </p>
            <p class="text-justify text-slate-700 leading-relaxed mb-4">
                <strong>Limitaciones Técnicas Encontradas:</strong> Durante las pruebas concurrentes con algoritmos recursivos profundos donde no se controló el desbordamiento, el Stack de la memoria RAM llegó a experimentar saturaciones puntuales en hilos de ejecución reducidos si los casos límite no estaban estrictamente parametrizados.
            </p>
            <p class="text-justify text-slate-700 leading-relaxed">
                <strong>Trabajos Futuros (Conclusión del Sistema):</strong> Se concluye que el diseño de software estructurado bajo los pilares formales de la POO cumple satisfactoriamente con las metas de modularidad y eficiencia exigidas en el contexto industrial. Para futuras iteraciones de estos simuladores, se aconseja investigar y acoplar el uso de Patrones de Diseño Estructurales avanzados (como el patrón *Flyweight*) para optimizar aún más el reuso masivo de variables idénticas en la memoria de la computadora.
            </p>
        </section>

        <section>
            <h3 class="text-xl font-black text-[#003366] uppercase border-t-2 border-slate-800 pt-6 mb-4 font-sans">Referencias Bibliográficas Oficiales</h3>
            <div class="bg-slate-100 p-6 rounded-lg font-sans text-sm">
                <p class="text-slate-500 italic mb-4 text-xs">Nota: Sección administrada de manera automatizada mediante Zotero. Ejemplos en estricto formato APA 7ma Edición:</p>
                
                <div class="pl-8 -indent-8 mb-3 text-slate-700">
                    Gervais, L. C. (2016). <em>Aprender la programación orientada a objetos con el lenguaje C#</em>. Editorial ENI.
                </div>
                
                <div class="pl-8 -indent-8 mb-3 text-slate-700">
                    Gunnerson, E. (2000). <em>A programmer's introduction to C# and Object-Oriented Architectures</em>. Editorial Apress.
                </div>
                
                <div class="pl-8 -indent-8 text-slate-700">
                    Joyanes, L., & Zahonero, I. (2007). <em>Estructura de Datos en C: Algoritmia, Punteros y Gestión Dinámica de Memoria</em>. Editorial McGraw-Hill.
                </div>
            </div>
        </section>

        <section class="mt-20 mb-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">El Decálogo del Programador POO: 10 Buenas Prácticas Estructurales</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                El modelado técnico de un sistema interactivo limpio de más de 10 páginas requiere aplicar estándares internacionales de arquitectura de software. Estas son las 10 reglas que tu equipo debe cumplir:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-blue-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-black flex-shrink-0">1</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Zotero para Citación de Tecnologías</h5>
                        <p class="text-xs text-slate-500 mt-1">Sincronice citas automáticas de los manuales de sus librerías utilizando el plugin de Zotero en formato APA 7, evitando el tipeo manual obsoleto.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-indigo-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center font-black flex-shrink-0">2</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Jerarquías y Estilos Estructurados</h5>
                        <p class="text-xs text-slate-500 mt-1">Utilice el panel de estilos nativos de Word para estructurar los títulos del IMRD, garantizando la correcta generación e indexación de su índice automático.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-teal-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-teal-100 text-teal-600 flex items-center justify-center font-black flex-shrink-0">3</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Redacción Académica Formal</h5>
                        <p class="text-xs text-slate-500 mt-1">Redacte todo el informe en tercera persona de modo impersonal ("Se codificó la jerarquía", nunca "Codificamos nuestra clase"). Use LanguageTool para auditar la gramática.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-orange-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center font-black flex-shrink-0">4</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Modelado UML Vectorial (Draw.io)</h5>
                        <p class="text-xs text-slate-500 mt-1">Queda prohibido insertar diagramas de clase pixelados. Genere esquemas UML limpios con herramientas como <a href="https://app.diagrams.net/" target="_blank" class="text-orange-500 hover:underline">Draw.io</a> o Lucidchart para exportarlos en alta definición.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-purple-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-purple-100 text-purple-600 flex items-center justify-center font-black flex-shrink-0">5</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Bloques de Código Estilizados (Carbon)</h5>
                        <p class="text-xs text-slate-500 mt-1">Si requiere evidenciar la sobrecarga de métodos o la instanciación de clases en el informe, use herramientas como <a href="https://carbon.now.sh/" target="_blank" class="text-purple-500 hover:underline">Carbon</a> para generar capturas nítidas con resaltado sintáctico.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-emerald-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center font-black flex-shrink-0">6</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Encapsulamiento Obligatorio (SOLID)</h5>
                        <p class="text-xs text-slate-500 mt-1">Todo atributo de clase debe ser estrictamente <code>private</code> o <code>protected</code>. El acceso a los datos debe realizarse exclusivamente por métodos públicos controlados.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-amber-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-amber-100 text-amber-600 flex items-center justify-center font-black flex-shrink-0">7</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Casos Límite en Algoritmia Recursiva</h5>
                        <p class="text-xs text-slate-500 mt-1">Toda función recursiva integrada debe portar de forma obligatoria su validación de salida (Caso Base) documentada, para prevenir el bloqueo por stack overflow.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-rose-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-rose-100 text-rose-600 flex items-center justify-center font-black flex-shrink-0">8</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Liberación de Recursos en Memoria</h5>
                        <p class="text-xs text-slate-500 mt-1">Si programa en C++, incluya de forma obligatoria los destructores correspondientes para vaciar el Heap. En Python/JS, anule las referencias de objetos en desuso.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-yellow-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center font-black flex-shrink-0">9</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Etiquetado de Figuras bajo Rúbrica APA</h5>
                        <p class="text-xs text-slate-500 mt-1">Toda captura de pantalla del simulador o diagrama de clases se rotula como "Figura" con numeración correlativa superior y su nota de procedencia inferior.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-slate-800 transition-colors">
                    <div class="w-8 h-8 rounded bg-slate-200 text-slate-800 flex items-center justify-center font-black flex-shrink-0">10</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Exportación Final Inmutable en PDF</h5>
                        <p class="text-xs text-slate-500 mt-1">Exporte siempre el documento técnico final a formato PDF antes de enviarlo. Esto asegura que el diseño, esquemas UML y tabulaciones queden fijos sin romperse.</p>
                    </div>
                </div>

            </div>
        </section>

</div>
`;