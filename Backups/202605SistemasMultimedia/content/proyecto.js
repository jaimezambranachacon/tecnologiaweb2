// content/proyecto.js
const pag_proyecto = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-24">
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none">
            PROYECTO<br>
            <span class="text-indigo-600">FORMATIVO MULTIMEDIA</span>
        </h1>
        <p class="mt-6 text-2xl font-light text-slate-500 max-w-2xl">
            Estrategia Didáctica: <strong class="font-black text-[#003366]">Ingeniería de Sistemas Multimedia e Interactividad</strong>
        </p>
        <div class="h-2 w-24 bg-indigo-600 mt-8"></div>
    </header>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">01. Problema del Contexto (Reto Cognitivo)</h2>
        <div class="p-10 bg-slate-50 border border-slate-200 rounded-[2rem] shadow-sm relative overflow-hidden">
            <i class="fas fa-cubes absolute -right-10 -bottom-10 text-indigo-100 text-[10rem] opacity-50 -rotate-12"></i>
            <div class="relative z-10 max-w-3xl">
                <h3 class="text-3xl font-black text-[#003366] uppercase mb-4 tracking-tight">Caso: Simuladores Interactivos de Alta Fidelidad</h3>
                <p class="text-lg text-slate-600 leading-relaxed font-light mb-6">
                    <strong>Situación Problemática:</strong> Las plataformas educativas e industriales tradicionales carecen de entornos inmersivos y ligeros basados en la web, dependiendo de pesados renderizados de video estáticos que limitan el aprendizaje interactivo y el análisis técnico en tiempo real.
                </p>
                <p class="text-lg text-slate-600 leading-relaxed font-light">
                    <strong>Propósito Formativo:</strong> Diseñar y desarrollar un simulador multimedia interactivo en entorno Web utilizando activos vectoriales dinámicos (SVG), optimización tipográfica y lógica de JavaScript avanzada para el renderizado gráfico (2D/3D), integrando mallas tridimensionales optimizadas en Blender y motores web modernos.
                </p>
            </div>
        </div>
    </section>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">02. Movilización de Saberes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div class="p-8 border-t-8 border-[#003366] bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fas fa-bezier-curve text-4xl text-indigo-500 mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Conocer</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Fundamentos de Activos Multimedia</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Comprensión de la estructura matemática del formato SVG, optimización del DOM gráfico, gestión de fuentes tipográficas autoalojadas (@font-face) y pipelines de renderizado WebGL/Canvas.
                </p>
            </div>

            <div class="p-8 border-t-8 border-indigo-500 bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fas fa-gamepad text-4xl text-[#003366] mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Hacer</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Programación Gráfica e Integración</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Modelado, texturizado y optimización de mallas en Blender; manipulación dinámica de SVGs con JS; e implementación de simuladores/motores interactivos (Three.js, Phaser o KAPLAY).
                </p>
            </div>

            <div class="p-8 border-t-8 border-slate-300 bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fas fa-eye text-4xl text-indigo-500 mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Ser & Convivir</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Diseño y Usabilidad Ética</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Garantizar la accesibilidad visual, optimización del rendimiento para dispositivos de gama baja (diseño inclusivo) y respeto a los derechos de propiedad intelectual de fuentes y recursos multimedia.
                </p>
            </div>

        </div>
    </section>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">03. Secuencia Didáctica (Fases del Desarrollo)</h2>
        <div class="space-y-8 max-w-4xl border-l-2 border-slate-100 pl-8 ml-4">
            
            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-slate-200 border-4 border-white"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 1: Identidad Visual y Activos Vectoriales</h4>
                <p class="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Diseño Interfaz Base</p>
                <p class="text-slate-600 leading-relaxed">
                    Definición de la guía de estilo multimedia, integración de la tipografía propia del proyecto y exportación/limpieza de mallas vectoriales e iconos SVG manipulables por código.
                </p>
            </div>

            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-indigo-500 border-4 border-white shadow-md"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 2: Entorno Interactivo y Escenario Lógico</h4>
                <p class="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Estructura del Simulador</p>
                <p class="text-slate-600 leading-relaxed">
                    Modelado de piezas en Blender para entornos 3D o configuración de lienzos Canvas (Phaser/KAPLAY) en 2D. Programación en JavaScript para la inicialización de cámaras, luces, escenas y escucha de eventos del usuario.
                </p>
            </div>

            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-[#003366] border-4 border-white shadow-md"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 3: Sincronización y Optimización Multimedia</h4>
                <p class="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Cierre Técnico</p>
                <p class="text-slate-600 leading-relaxed">
                    Integración de la lógica matemática del simulador, consumo de datos dinámicos mediante JavaScript, empaquetado de recursos multimedia, auditoría de FPS (cuadros por segundo) y despliegue final.
                </p>
            </div>

        </div>
    </section>

    <section>
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">04. Matriz de Evaluación Auténtica (Rúbrica Multimedia)</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            <div class="p-8 bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-slate-300 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Receptivo</div>
                <h4 class="text-xl font-black text-slate-500 uppercase mb-2">Interfaz Estática</h4>
                <p class="text-sm text-slate-600">Estructura un documento HTML incorporando elementos SVG, tipografías personalizadas e imágenes fijas. Carece de interactividad, animaciones o conexión a librerías externas.</p>
            </div>

            <div class="p-8 bg-white border-2 border-slate-200 rounded-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-blue-400 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Resolutivo</div>
                <h4 class="text-xl font-black text-blue-500 uppercase mb-2">Multimedia Animada</h4>
                <p class="text-sm text-slate-600">Aplica manipulación del DOM con JS para controlar SVGs de forma interactiva e inicializa lienzos gráficos con animaciones fluidas utilizando transformaciones CSS o estructuras básicas de bucle gráfico.</p>
            </div>

            <div class="p-8 bg-white border-2 border-indigo-500 rounded-2xl relative overflow-hidden shadow-md">
                <div class="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Autónomo</div>
                <h4 class="text-xl font-black text-indigo-500 uppercase mb-2">Simulador Funcional</h4>
                <p class="text-sm text-slate-600">Carga con éxito modelos .glb de Blender en entornos 3D (Three.js) o despliega mundos lógicos 2D (Phaser/KAPLAY). Controla iluminación, cámaras e interactividad mediante el mouse y teclado.</p>
            </div>

            <div class="p-8 bg-[#003366] text-white rounded-2xl relative overflow-hidden shadow-xl">
                <div class="absolute top-0 right-0 bg-yellow-400 text-[#003366] px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Estratégico</div>
                <h4 class="text-xl font-black text-yellow-400 uppercase mb-2">Entorno Inmersivo Pro</h4>
                <p class="text-sm text-blue-100">Usa sombreadores (Shaders) personalizados o lógicas físicas complejas de colisión. Gestiona el peso de texturas e integra arquitecturas multimedia reutilizables (ej: Unity WebGL con llamadas JS o Three.js PBR avanzado).</p>
            </div>

        </div>

        <div class="flex flex-col md:flex-row gap-6 bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
            <div class="flex-1">
                <h5 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-3"><i class="fas fa-tasks mr-2 text-indigo-500"></i> Entregables</h5>
                <ul class="text-sm text-slate-600 space-y-2 font-medium">
                    <li>1. Guía de marca tipográfica y archivos vectoriales (SVG) limpios.</li>
                    <li>2. Archivo del proyecto de modelado fuente (.blend).</li>
                    <li>3. Código fuente del simulador/videojuego interactivo desplegado en la web.</li>
                </ul>
            </div>
            <div class="hidden md:block w-px bg-slate-300 mx-4"></div>
            <div class="flex-1">
                <h5 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-3"><i class="fas fa-lightbulb mr-2 text-indigo-500"></i> Metacognición</h5>
                <p class="text-sm text-slate-600 italic">
                    "Reflexión sobre el pipeline multimedia: ¿Cómo impacta la optimización poligonal de una malla en Blender y el uso de SVG en el rendimiento crítico de renderizado WebGL de la GPU?"
                </p>
            </div>
        </div>
    </section>

    <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Líneas de Desarrollo Multimedia (Elige tu Proyecto)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                El trabajo se realizará en <strong>equipos multidisciplinarios</strong>. La regla inquebrantable para todos los grupos es la arquitectura base: <strong>Controladores lógicos en JavaScript + Integración Vectorial/Tipográfica + Renderizado Interactivo Fluido</strong>. La temática y ecosistema técnico es a elección del equipo:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white border-t-4 border-blue-500 rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform">
                    <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                        <i class="fas fa-cube text-2xl"></i>
                    </div>
                    <h4 class="text-xl font-black text-[#003366] uppercase mb-3">1. Simuladores 3D Web PBR (Three.js / Blender)</h4>
                    <p class="text-sm text-slate-600 mb-4">Desarrollo de laboratorios o entornos interactivos tridimensionales. Modelado estructural de objetos en Blender, exportación inteligente a .glb e inicialización de motores de iluminación realista de Three.js controlados asíncronamente.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">Three.js</span>
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">Blender PBR</span>
                    </div>
                </div>

                <div class="bg-white border-t-4 border-emerald-500 rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform">
                    <div class="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                        <i class="fas fa-gamepad text-2xl"></i>
                    </div>
                    <h4 class="text-xl font-black text-[#003366] uppercase mb-3">2. Videojuegos Interactivos (Phaser JS / KAPLAY)</h4>
                    <p class="text-sm text-slate-600 mb-4">Construcción de motores de juego en dos dimensiones utilizando spritesheets, vectores SVG responsivos y lógicas de físicas complejas. Control de mapas de juego, sistemas de puntuación dinámicos y manejo de fuentes personalizadas.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">Phaser 3</span>
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">KAPLAY engine</span>
                    </div>
                </div>

                <div class="bg-white border-t-4 border-purple-500 rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform">
                    <div class="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                        <i class="fas fa-vr-cardboard text-2xl"></i>
                    </div>
                    <h4 class="text-xl font-black text-[#003366] uppercase mb-3">3. Motores Compilados para Web (Unity WebGL / JS)</h4>
                    <p class="text-sm text-slate-600 mb-4">Despliegue de simulaciones complejas e inmersivas construidas en Unity y exportadas nativamente mediante WebGL. Comunicación directa bidireccional entre el lienzo del juego de Unity y la interfaz web usando JavaScript tradicional.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">Unity WebGL</span>
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">JS Plugins</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-20 mb-10">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Protocolo de Entrega Oficial</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-10">
                Un ingeniero multimedia no solo genera activos visuales, también documenta, publica y defiende sus decisiones de optimización. El proyecto final se evaluará bajo <strong>tres pilares fundamentales</strong>:
            </p>

            <div class="space-y-8">
                
                <div class="flex flex-col md:flex-row gap-6 bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl relative overflow-hidden">
                    <div class="w-16 h-16 rounded-2xl bg-slate-800 text-white flex items-center justify-center shadow-lg flex-shrink-0 z-10">
                        <i class="fab fa-github text-3xl"></i>
                    </div>
                    <div class="relative z-10">
                        <h4 class="text-xl font-black text-[#003366] uppercase mb-2">1. Repositorio en GitHub (Código y Activos Multimedia)</h4>
                        <p class="text-sm text-slate-600 mb-3">El proyecto debe estar alojado en GitHub de forma pública o privada. No se aceptarán envíos por pendrive o archivos comprimidos sueltos.</p>
                        <ul class="text-sm text-slate-600 space-y-2">
                            <li><i class="fas fa-check text-green-500 mr-2"></i><strong>Estructura Limpia de Assets:</strong> Separación estricta de código, archivos vectoriales SVG, fuentes tipográficas independientes y modelos binarios .glb.</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i><strong>README.md profesional:</strong> Instrucciones de cómo levantar el entorno mediante un servidor local (ej: Live Server o NPM) para evitar errores de CORS con WebGL.</li>
                        </ul>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row gap-6 bg-blue-50 border border-blue-200 p-6 md:p-8 rounded-2xl relative overflow-hidden">
                    <div class="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg flex-shrink-0 z-10">
                        <i class="fas fa-file-alt text-3xl"></i>
                    </div>
                    <div class="relative z-10 w-full">
                        <h4 class="text-xl font-black text-[#003366] uppercase mb-2">2. Documento Científico (Formato IMRD + Normas APA)</h4>
                        <p class="text-sm text-slate-600 mb-4">El respaldo teórico y técnico de la optimización del sistema multimedia debe redactarse bajo el estándar de investigación <strong>IMRD</strong> y seguir las <strong>Normas APA (7ma Edición)</strong>.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div class="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                                <span class="font-black text-blue-600 text-xs tracking-widest block mb-1">I - INTRODUCCIÓN</span>
                                <p class="text-xs text-slate-500">Planteamiento del reto del simulador, justificación del ecosistema multimedia interactivo y estado del arte de las librerías web utilizadas.</p>
                            </div>
                            <div class="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                                <span class="font-black text-blue-600 text-xs tracking-widest block mb-1">M - METODOLOGÍA</span>
                                <p class="text-xs text-slate-500">Pipeline de optimización de activos: flujo de modelado en Blender, compresión de SVG, mapeo tipográfico y lógica algorítmica de JavaScript.</p>
                            </div>
                            <div class="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                                <span class="font-black text-blue-600 text-xs tracking-widest block mb-1">R - RESULTADOS</span>
                                <p class="text-xs text-slate-500">Pruebas de interactividad, capturas limpias del simulador en ejecución y métricas de rendimiento de GPU (mantenimiento de 60 FPS estables).</p>
                            </div>
                            <div class="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                                <span class="font-black text-blue-600 text-xs tracking-widest block mb-1">D - DISCUSIÓN</span>
                                <p class="text-xs text-slate-500">Limitaciones de cálculo gráfico en navegadores móviles, conclusiones técnicas del renderizado de sistemas multimedia y trabajos futuros.</p>
                            </div>
                        </div>

                        <div class="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-xl mt-4 flex items-center gap-4">
                            <i class="fas fa-book-reader text-2xl text-rose-500"></i>
                            <div>
                                <strong class="text-sm text-rose-900 block">Gestor de Referencias Obligatorio: ZOTERO</strong>
                                <p class="text-xs text-rose-800 mt-1">Queda estrictamente prohibido redactar la bibliografía de tecnologías de forma manual. Todas las citas bibliográficas deben gestionarse automáticamente mediante el software <strong>Zotero</strong>.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row gap-6 bg-orange-50 border border-orange-200 p-6 md:p-8 rounded-2xl relative overflow-hidden">
                    <div class="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg flex-shrink-0 z-10">
                        <i class="fas fa-chalkboard-teacher text-3xl"></i>
                    </div>
                    <div class="relative z-10">
                        <h4 class="text-xl font-black text-[#003366] uppercase mb-2">3. Exposición y Defensa Técnica de Sistemas Multimedia</h4>
                        <p class="text-sm text-slate-600 mb-3">El equipo simulará una entrega de producto interactivo real a nivel empresarial.</p>
                        <ul class="text-sm text-slate-600 space-y-2">
                            <li><i class="fas fa-play-circle text-orange-500 mr-2"></i><strong>Demostración en vivo:</strong> Ejecución del simulador sin errores en consola ni congelamientos de renderizado.</li>
                            <li><i class="fas fa-code text-orange-500 mr-2"></i><strong>Auditoría de Assets y Código:</strong> El docente podrá solicitar la explicación detallada de la arquitectura de nodos tipográficos, la manipulación de mallas o las funciones matemáticas de control en JavaScript.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>

        <section class="mt-16 mb-12">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Modelo Base y Formato de Informe IMRD</h3>
            
            <div class="bg-gradient-to-r from-[#003366] to-blue-900 rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <i class="fas fa-file-word absolute -left-10 -bottom-10 text-white/5 text-[12rem] transform -rotate-12"></i>
                
                <div class="relative z-10 text-white max-w-2xl">
                    <h4 class="text-2xl font-black uppercase mb-2 text-blue-100">Plantilla Oficial del Proyecto</h4>
                    <p class="text-sm text-blue-200 leading-relaxed mb-4">
                        Descarga el modelo base en formato Word con márgenes preconfigurados, estilos tipográficos normalizados y la estructura de desarrollo técnico multimedia IMRD obligatoria según los estándares académicos vigentes.
                    </p>
                    <div class="flex gap-3 text-xs font-bold text-blue-300 uppercase tracking-widest">
                        <span><i class="fas fa-check-circle text-green-400 mr-1"></i> Norma APA 7</span>
                        <span><i class="fas fa-check-circle text-green-400 mr-1"></i> Índice Automático</span>
                    </div>
                </div>
                
                <a href="#" class="relative z-10 flex-shrink-0 bg-white hover:bg-blue-50 text-[#003366] font-black uppercase tracking-widest text-sm py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-white/20 flex items-center gap-3 transform hover:scale-105">
                    <i class="fas fa-download text-blue-500 text-xl"></i>
                    Descargar Plantilla
                </a>
            </div>
            <p class="text-xs text-slate-400 mt-3 text-right italic">* El archivo .docx está listo para conectarse con el plugin de Zotero.</p>
        </section>

        <section class="mb-12">
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b border-slate-300 pb-2 mb-6 font-sans flex items-center gap-3">
                <span class="bg-[#003366] text-white w-8 h-8 flex items-center justify-center rounded text-sm">I</span> Introducción
            </h3>
            <p class="text-justify text-slate-700 leading-relaxed mb-4">
                En el campo del desarrollo de software educativo e industrial, la optimización de los sistemas multimedia interactivos es crítica para la retención cognitiva. Históricamente, las plataformas dependían de pesados formatos de mapa de bits que incrementaban los tiempos de latencia web y degradaban la experiencia de usuario (Smith, 2023). La llegada de tecnologías vectoriales fluidas combinadas con el cómputo nativo a nivel de hardware (WebGL) a través de JavaScript permite crear entornos de simulación altamente interactivos y eficientes en la transmisión de datos.
            </p>
            <p class="text-justify text-slate-700 leading-relaxed mb-6">
                El presente trabajo de investigación aborda el desafío de la integración armónica de activos vectoriales (SVG), tipografías responsivas embebidas y mallas PBR de baja densidad poligonal modeladas en Blender. Se propone la construcción de un simulador web interactivo multiplataforma que se ejecute de manera fluida y nativa.
            </p>
            
            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 font-sans mb-4">
                <h4 class="font-bold text-blue-900 mb-2">Objetivo General</h4>
                <p class="text-sm text-blue-800">Desarrollar un entorno de simulación multimedia altamente interactivo y responsivo mediante la implementación de gráficos enriquecidos (2D/3D) y la manipulación de lógica en JavaScript, asegurando un rendimiento de renderizado web óptimo.</p>
                
                <h4 class="font-bold text-blue-900 mt-4 mb-2">Objetivos Específicos</h4>
                <ul class="list-disc list-inside text-sm text-blue-800 space-y-1">
                    <li>Diseñar y purificar elementos gráficos vectoriales en formato SVG interactivo para su manipulación dinámica por código JS.</li>
                    <li>Modelar, optimizar y exportar objetos tridimensionales de baja carga estructural desde Blender mediante formato binario unificado glTF/GLB.</li>
                    <li>Programar la lógica de animación, captura de eventos y gestión de la escena en el lienzo gráfico utilizando motores especializados (Three.js/Phaser).</li>
                </ul>
            </div>
        </section>

        <section class="mb-12">
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b border-slate-300 pb-2 mb-6 font-sans flex items-center gap-3">
                <span class="bg-[#003366] text-white w-8 h-8 flex items-center justify-center rounded text-sm">M</span> Metodología
            </h3>
            <p class="text-justify text-slate-700 leading-relaxed mb-4">
                La metodología posee un enfoque tecnológico-aplicado y experimental. El pipeline multimedia de desarrollo y optimización de recursos gráficos y lógicos se divide de la siguiente manera:
            </p>
            <ul class="list-decimal list-inside text-slate-700 leading-relaxed mb-6 space-y-3">
                <li><strong>Arquitectura Vectorial y Tipográfica:</strong> Se diseñaron interfaces utilizando elementos vectoriales escalables SVG limpios de metadatos pesados para permitir su inyección directa al árbol DOM. Las fuentes tipográficas corporativas se configuraron mediante sentencias optimizadas de CSS para mitigar el efecto FOUT (bloqueo visual).</li>
                <li><strong>Modelado y Optimización 3D (Blender):</strong> El diseño tridimensional se modeló bajo principios estricto de topología limpia (Quads/Triangles) en Blender, aplicando modificadores controlados para limitar la cuenta de polígonos. Los materiales se estructuraron bajo el estándar físico PBR (Principled BSDF) para asegurar la compatibilidad total con WebGL al exportarse.</li>
                <li><strong>Pipeline de Programación (JavaScript / Motores):</strong> El lienzo multimedia interactivo se programó utilizando código estructurado asíncrono para gestionar de manera automatizada el cargador de recursos, la posición de las cámaras, la inyección lumínica en escena y la detección tridimensional de colisiones físicas mediante la captura precisa de periféricos directos.</li>
            </ul>
        </section>

        <section class="mb-12">
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b border-slate-300 pb-2 mb-6 font-sans flex items-center gap-3">
                <span class="bg-[#003366] text-white w-8 h-8 flex items-center justify-center rounded text-sm">R</span> Resultados
            </h3>
            <p class="text-justify text-slate-700 leading-relaxed mb-4">
                El entorno interactivo multimedia desarrollado demostró que la optimización rigurosa de los activos visuales influye de forma directa en el rendimiento computacional de la máquina del usuario:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 font-sans">
                <div class="border border-slate-200 p-4 rounded-lg bg-slate-50">
                    <h5 class="font-bold text-slate-800 text-sm mb-2"><i class="fas fa-tachometer-alt text-yellow-500 mr-2"></i>Rendimiento del Renderizado</h5>
                    <p class="text-xs text-slate-600">Al ejecutar el simulador gráfico con la carga total de mallas y lógicas vectoriales activas, el motor JS sostuvo una tasa estable de refresco de <strong>60 cuadros por segundo (FPS)</strong> en navegadores estándar sin experimentar fugas de memoria RAM.</p>
                </div>
                <div class="border border-slate-200 p-4 rounded-lg bg-slate-50">
                    <h5 class="font-bold text-slate-800 text-sm mb-2"><i class="fas fa-compress-arrows-alt text-green-500 mr-2"></i>Eficiencia de Transferencia</h5>
                    <p class="text-xs text-slate-600">Gracias al empaquetado binario inteligente de los recursos de Blender y la compresión de los vectores SVG, el tamaño de descarga del simulador se redujo en un 70%, agilizando la inicialización del lienzo interactivo.</p>
                </div>
            </div>
            <p class="text-justify text-slate-700 leading-relaxed">
                La manipulación asíncrona de los activos tipográficos y el comportamiento gráfico mediante JavaScript demostró que es posible concebir sistemas con una alta fidelidad interactiva y visual sin necesidad de instalar plugins o complementos externos en el navegador web del usuario final (UX).
            </p>
        </section>

        <section class="mb-12">
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b border-slate-300 pb-2 mb-6 font-sans flex items-center gap-3">
                <span class="bg-[#003366] text-white w-8 h-8 flex items-center justify-center rounded text-sm">D</span> Discusión
            </h3>
            <p class="text-justify text-slate-700 leading-relaxed mb-4">
                Los hallazgos empíricos confirman lo expuesto por Otwell (2022), quien argumenta que la optimización de activos multimedia desde la fase primaria de diseño disminuye drásticamente la latencia en arquitecturas web enriquecidas. La separación estructurada de mallas frente a la inyección dinámica de luz por JS agiliza de manera significativa los tiempos de desarrollo en comparación con metodologías obsoletas de renderizado estático en servidores.
            </p>
            <p class="text-justify text-slate-700 leading-relaxed mb-4">
                <strong>Limitaciones:</strong> Durante las pruebas concurrentes con mallas complejas que contaban con alta densidad de vértices, se evidenció que los dispositivos con unidades de procesamiento de gráficos (GPU) limitadas experimentaban leves caídas en la tasa de refresco.
            </p>
            <p class="text-justify text-slate-700 leading-relaxed">
                <strong>Trabajos Futuros (Conclusión):</strong> Se concluye que el pipeline multimedia basado en estándares abiertos de la web satisface los objetivos de interactividad y velocidad planteados. Para futuras fases de desarrollo de este proyecto, se recomienda incorporar técnicas de oclusión ambiental en la exportación de Blender y el uso de sombreadores de vértices personalizados (Custom Shaders) para optimizar el cómputo matemático.
            </p>
        </section>

        <section>
            <h3 class="text-xl font-black text-[#003366] uppercase border-t-2 border-slate-800 pt-6 mb-4 font-sans">Referencias Bibliográficas</h3>
            <div class="bg-slate-100 p-6 rounded-lg font-sans text-sm">
                <p class="text-slate-500 italic mb-4 text-xs">Nota: Esta sección debe ser generada automáticamente por Zotero. Ejemplo en formato APA 7ma Edición:</p>
                
                <div class="pl-8 -indent-8 mb-3 text-slate-700">
                    Cabrera, L., & Gómez, P. (2021). <em>Optimización de motores gráficos y cómputo tridimensional adaptativo en la web moderna</em>. Revista de Sistemas Multimedia e Interfaces Gráficas, 15(3), 45-60. https://doi.org/10.1000/rsm.2021.153
                </div>
                
                <div class="pl-8 -indent-8 mb-3 text-slate-700">
                    Otwell, T. (2022). <em>Web3D Assets and Hardware Acceleration: Best Practices for Developers</em> (3ra ed.). O'Reilly Media.
                </div>
                
                <div class="pl-8 -indent-8 text-slate-700">
                    Smith, J. (14 de abril de 2023). <em>The evolution of vector mechanics and SVG interaction in simulation software</em>. Multimedia Technology Journal. Recuperado el 5 de mayo de 2026, de https://multimediatech.com/vector-mechanics
                </div>
            </div>
        </section>

        <section class="mt-20 mb-10">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Guía de Estilo y Ética Académica (APA 7)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                El rigor investigativo de un futuro Ingeniero Multimedia se refleja tanto en la optimización del código como en la documentación científica rigurosa que respalda sus decisiones de diseño interactivo. Todo el documento IMRD debe regirse estrictamente por las normativas de la <strong>APA 7ma Edición</strong>.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg">
                    <div class="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
                        <i class="fas fa-ruler-combined text-2xl text-blue-500"></i>
                        <h4 class="text-xl font-black text-[#003366] uppercase">Formato del Documento</h4>
                    </div>
                    <ul class="space-y-3 text-sm text-slate-600">
                        <li><i class="fas fa-check text-blue-500 mr-2"></i><strong>Tipografía:</strong> Arial a 11 pts o Times New Roman a 12 pts.</li>
                        <li><i class="fas fa-check text-blue-500 mr-2"></i><strong>Interlineado:</strong> Doble (2.0) en todo el texto, sin espacios extras entre párrafos.</li>
                        <li><i class="fas fa-check text-blue-500 mr-2"></i><strong>Márgenes:</strong> 2.54 cm (1 pulgada) en todos los lados de la página.</li>
                        <li><i class="fas fa-check text-blue-500 mr-2"></i><strong>Sangría:</strong> Sangría de primera línea en cada párrafo nuevo (1.27 cm).</li>
                        <li><i class="fas fa-check text-blue-500 mr-2"></i><strong>Alineación:</strong> Izquierda (no justificado).</li>
                    </ul>
                </div>

                <div class="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg">
                    <div class="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
                        <i class="fas fa-quote-right text-2xl text-emerald-500"></i>
                        <h4 class="text-xl font-black text-[#003366] uppercase">Citas y Fuentes Modernas</h4>
                    </div>
                    <p class="text-sm text-slate-600 mb-3">Es fundamental respaldar tus afirmaciones de optimización multimedia con <strong>citas textuales o parafraseadas</strong> de repositorios y manuales.</p>
                    <div class="bg-emerald-50 p-3 rounded-lg border border-emerald-100 text-xs text-slate-700 mb-3">
                        <strong>¡Fuentes Válidas en Tecnología Multimedia!</strong> La APA 7 permite citar contenido técnico digital de alto valor:
                        <ul class="mt-2 space-y-1">
                            <li>▶️ <strong>Videos de Conferencias y Canales Oficiales:</strong> (ej. Documentación en video de Blender Foundation, charlas de Three.js).</li>
                            <li>💻 <strong>Repositorios y Foros de Optimización:</strong> (ej. Documentación de Phaser Engine, hilos técnicos de WebGL).</li>
                        </ul>
                    </div>
                    <p class="text-[11px] text-emerald-700 font-bold italic">* Pro-Tip: La extensión de Zotero permite extraer los datos completos de manuales interactivos en línea con un solo clic.</p>
                </div>
            </div>

            <div class="mt-8 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6 md:p-10 shadow-xl relative overflow-hidden">
                <i class="fas fa-robot absolute -right-4 -bottom-4 text-purple-500/10 text-[10rem]"></i>
                <div class="relative z-10 flex flex-col md:flex-row gap-6 items-center">
                    <div class="w-16 h-16 rounded-full bg-purple-600 text-white flex items-center justify-center text-3xl shadow-lg flex-shrink-0">
                        <i class="fas fa-brain"></i>
                    </div>
                    <div class="flex-1">
                        <h4 class="text-xl font-black text-[#003366] uppercase mb-2">Uso Ético de la Inteligencia Artificial</h4>
                        <p class="text-sm text-slate-700 leading-relaxed mb-3">
                            La Inteligencia Artificial es un excelente aliado para acelerar la escritura de código matemático complejo o depurar mallas complejas, <strong>pero no sustituye tu criterio de optimización</strong>. Está permitido usar IA para:
                        </p>
                        <ul class="text-sm text-slate-700 space-y-2 mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                            <li><i class="fas fa-check-circle text-purple-500 mr-2"></i>Comprender matrices de transformación 3D complejas.</li>
                            <li><i class="fas fa-check-circle text-purple-500 mr-2"></i>Ajustar la sintaxis de inicialización de cámaras/luces.</li>
                            <li><i class="fas fa-check-circle text-purple-500 mr-2"></i>Optimizar la gramática formal del informe IMRD.</li>
                        </ul>
                        <div class="bg-white/80 p-4 rounded-xl border border-purple-200 text-sm font-bold text-purple-900 shadow-sm">
                            <i class="fas fa-exclamation-triangle text-rose-500 mr-2"></i> Línea Roja Académica:
                            <span class="font-normal block mt-1">Copiar mecánicas completas de lógica de simulación que el equipo no comprenda, o delegar la redacción analítica de los "Resultados" y "Discusión" constituye <strong>plagio académico</strong>. Todo uso de IA asistida debe ser <strong>declarado explícitamente</strong> en la metodología del informe.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-20 mb-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Decálogo del Ingeniero Multimedia: 10 Buenas Prácticas de Redacción y Diseño</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                El desarrollo técnico de un sistema interactivo de más de 10 páginas requiere del dominio coordinado de herramientas de software avanzadas. Estas son las 10 prácticas estándar que todo estudiante debe aplicar:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-emerald-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center font-black flex-shrink-0">1</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Zotero o Mendeley (Gestores)</h5>
                        <p class="text-xs text-slate-500 mt-1">Incorpore citas automáticas y evite teclear las referencias a mano. Utilice el plugin del procesador de texto sincronizado con Zotero en formato APA 7.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-blue-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-black flex-shrink-0">2</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Estilos Estructurados Nativos</h5>
                        <p class="text-xs text-slate-500 mt-1">Utilice los estilos de encabezados nativos del procesador para la jerarquía de títulos. Esto asegura la creación e indexación de la tabla de contenido automática.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-green-600 transition-colors">
                    <div class="w-8 h-8 rounded bg-green-100 text-green-700 flex items-center justify-center font-black flex-shrink-0">3</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Overleaf / LaTeX (Estructura Avanzada)</h5>
                        <p class="text-xs text-slate-500 mt-1">Si el proyecto integra una fuerte formulación matemática o matrices de renderizado, escribir en LaTeX a través de Overleaf garantiza un formato científico impecable.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-orange-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center font-black flex-shrink-0">4</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Diagramación Vectorial (Draw.io)</h5>
                        <p class="text-xs text-slate-500 mt-1">Queda prohibido graficar diagramas de flujo de renderizado o pipelines multimedia en editores de dibujo planos. Utilice <a href="https://app.diagrams.net/" target="_blank" class="text-orange-500 hover:underline">Draw.io</a> o Lucidchart para exportar esquemas vectoriales nítidos.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-purple-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-purple-100 text-purple-600 flex items-center justify-center font-black flex-shrink-0">5</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Formateadores de Código Gráfico (Carbon)</h5>
                        <p class="text-xs text-slate-500 mt-1">Si necesita adjuntar lógica de instanciación de Three.js o Phaser en el cuerpo del informe, genere imágenes legibles de alta calidad con sintaxis coloreada mediante la herramienta <a href="https://carbon.now.sh/" target="_blank" class="text-purple-500 hover:underline">Carbon</a>.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-red-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center font-black flex-shrink-0">6</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Capturas Limpias de los Resultados</h5>
                        <p class="text-xs text-slate-500 mt-1">Al capturar imágenes del simulador web, use herramientas profesionales de recorte como Lightshot. Aísle el lienzo gráfico evitando barras de tareas del sistema operativo o pestañas del navegador.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-teal-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-teal-100 text-teal-600 flex items-center justify-center font-black flex-shrink-0">7</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Auditoría Gramatical y Estilo Formal</h5>
                        <p class="text-xs text-slate-500 mt-1">Toda redacción técnica debe realizarse en tercera persona impersonal ("Se implementó la cámara", en lugar de "Implementamos la cámara"). Utilice LanguageTool para asegurar la pulcritud ortográfica.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-yellow-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center font-black flex-shrink-0">8</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Colaboración Síncrona en la Nube</h5>
                        <p class="text-xs text-slate-500 mt-1">Centralicen el documento maestro en entornos como Google Docs o Word Online. Evite el intercambio caótico de archivos por mensajería que ocasione pérdida de versiones.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-rose-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-rose-100 text-rose-600 flex items-center justify-center font-black flex-shrink-0">9</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Tablas y Figuras Etiquetadas</h5>
                        <p class="text-xs text-slate-500 mt-1">Bajo la normativa APA, toda captura de pantalla, esquema o renderizado se etiqueta como "Figura". Debe portar un número correlativo, título descriptivo superior y nota de origen en la parte inferior.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-slate-800 transition-colors">
                    <div class="w-8 h-8 rounded bg-slate-200 text-slate-800 flex items-center justify-center font-black flex-shrink-0">10</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Formato de Exportación Final Inmutable</h5>
                        <p class="text-xs text-slate-500 mt-1">Convierta siempre el informe definitivo a formato <strong>PDF</strong> antes de su entrega. Esto previene desajustes de espaciados, fuentes tipográficas sueltas o desorden en las figuras incrustadas.</p>
                    </div>
                </div>

            </div>
        </section>
        

</div>
`;