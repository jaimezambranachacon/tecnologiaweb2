// content/proyecto.js
const pag_proyecto = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-24">
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none">
            PROYECTO<br>
            <span class="text-indigo-600">FORMATIVO MÓVIL</span>
        </h1>
        <p class="mt-6 text-2xl font-light text-slate-500 max-w-2xl">
            Estrategia Didáctica: <strong class="font-black text-[#003366]">Ingeniería Full-Stack Aplicada</strong>
        </p>
        <div class="h-2 w-24 bg-indigo-600 mt-8"></div>
    </header>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">01. Problema del Contexto (Reto Cognitivo)</h2>
        <div class="p-10 bg-slate-50 border border-slate-200 rounded-[2rem] shadow-sm relative overflow-hidden">
            <i class="fas fa-mobile-alt absolute -right-10 -bottom-10 text-indigo-100 text-[10rem] opacity-50 -rotate-12"></i>
            <div class="relative z-10 max-w-3xl">
                <h3 class="text-3xl font-black text-[#003366] uppercase mb-4 tracking-tight">Caso: Sincronía Aérea - Mobile App</h3>
                <p class="text-lg text-slate-600 leading-relaxed font-light mb-6">
                    <strong>Situación Problemática:</strong> A pesar de tener un Backend sólido, el personal de tierra en los aeropuertos carece de una herramienta portable para actualizar estados de vuelo en tiempo real desde la pista.
                </p>
                <p class="text-lg text-slate-600 leading-relaxed font-light">
                    <strong>Propósito Formativo:</strong> Desarrollar una aplicación móvil multiplataforma (React Native) que consuma servicios API RESTful, permitiendo la gestión de vuelos y pasajeros con una interfaz de alta fidelidad y rendimiento nativo.
                </p>
            </div>
        </div>
    </section>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">02. Movilización de Saberes</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div class="p-8 border-t-8 border-[#003366] bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fas fa-microchip text-4xl text-indigo-500 mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Conocer</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Fundamentos de Componentes</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Comprensión del paradigma de React, ciclo de vida de componentes, gestión de estados (State) y navegación nativa en dispositivos iOS y Android.
                </p>
            </div>

            <div class="p-8 border-t-8 border-indigo-500 bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fas fa-terminal text-4xl text-[#003366] mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Hacer</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Desarrollo Multiplataforma</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Instalación y configuración de Expo, codificación de Hooks (useState, useEffect) y consumo de APIs externas mediante peticiones Fetch seguras.
                </p>
            </div>

            <div class="p-8 border-t-8 border-slate-300 bg-white shadow-lg rounded-2xl group hover:-translate-y-2 transition-transform">
                <i class="fas fa-users-cog text-4xl text-indigo-500 mb-6"></i>
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">Saber Ser & Convivir</h3>
                <h4 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Ética Profesional</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    Promover el diseño inclusivo (Accesibilidad Móvil), manejo responsable de datos del usuario y colaboración efectiva en el despliegue de soluciones móviles.
                </p>
            </div>

        </div>
    </section>

    <section class="mb-24">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">03. Secuencia Didáctica (Fases del Sprint)</h2>
        <div class="space-y-8 max-w-4xl border-l-2 border-slate-100 pl-8 ml-4">
            
            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-slate-200 border-4 border-white"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 1: Setup y UI Core</h4>
                <p class="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Sprint Inicial</p>
                <p class="text-slate-600 leading-relaxed">
                    Configuración de Expo Go, creación de la estructura de carpetas y diseño de los primeros componentes visuales (View, Text, Image) siguiendo el Branding de BOA.
                </p>
            </div>

            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-indigo-500 border-4 border-white shadow-md"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 2: Conectividad y Persistencia</h4>
                <p class="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Sprint Intermedio</p>
                <p class="text-slate-600 leading-relaxed">
                    Integración de React Navigation para el flujo de pantallas y conexión mediante Fetch a la API de Laravel. Gestión de estados complejos para sincronización de datos.
                </p>
            </div>

            <div class="relative">
                <div class="absolute -left-[2.85rem] top-1 w-6 h-6 rounded-full bg-[#003366] border-4 border-white shadow-md"></div>
                <h4 class="text-2xl font-black text-[#003366] uppercase tracking-tight">Fase 3: Optimización y Deploy</h4>
                <p class="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Cierre</p>
                <p class="text-slate-600 leading-relaxed">
                    Pruebas de rendimiento en dispositivos reales, manejo de errores de conexión y presentación del ejecutable final.
                </p>
            </div>

        </div>
    </section>

    <section>
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">04. Matriz de Evaluación Auténtica (Rúbrica Móvil)</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            <div class="p-8 bg-slate-50 border border-slate-200 rounded-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-slate-300 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Receptivo</div>
                <h4 class="text-xl font-black text-slate-500 uppercase mb-2">Maquetación Básica</h4>
                <p class="text-sm text-slate-600">Construye pantallas estáticas en React Native. Logra mostrar textos e imágenes pero sin interactividad real o conexión a datos.</p>
            </div>

            <div class="p-8 bg-white border-2 border-slate-200 rounded-2xl relative overflow-hidden">
                <div class="absolute top-0 right-0 bg-blue-400 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Resolutivo</div>
                <h4 class="text-xl font-black text-blue-500 uppercase mb-2">App Funcional</h4>
                <p class="text-sm text-slate-600">Implementa la navegación entre pantallas y usa estados para mostrar datos. Cumple con la funcionalidad mínima solicitada.</p>
            </div>

            <div class="p-8 bg-white border-2 border-indigo-500 rounded-2xl relative overflow-hidden shadow-md">
                <div class="absolute top-0 right-0 bg-indigo-500 text-white px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Autónomo</div>
                <h4 class="text-xl font-black text-indigo-500 uppercase mb-2">Integración API</h4>
                <p class="text-sm text-slate-600">Consume exitosamente la API RESTful. La app reacciona a los cambios en el servidor y maneja adecuadamente los tiempos de carga.</p>
            </div>

            <div class="p-8 bg-[#003366] text-white rounded-2xl relative overflow-hidden shadow-xl">
                <div class="absolute top-0 right-0 bg-yellow-400 text-[#003366] px-3 py-1 rounded-bl-xl text-[10px] font-black uppercase">Estratégico</div>
                <h4 class="text-xl font-black text-yellow-400 uppercase mb-2">Arquitectura Pro</h4>
                <p class="text-sm text-blue-100">Usa Hooks personalizados, maneja caché de datos, asegura la comunicación con tokens y la UI es totalmente responsiva y profesional.</p>
            </div>

        </div>

        <div class="flex flex-col md:flex-row gap-6 bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
            <div class="flex-1">
                <h5 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-3"><i class="fas fa-tasks mr-2 text-indigo-500"></i> Entregables</h5>
                <ul class="text-sm text-slate-600 space-y-2 font-medium">
                    <li>1. Wireframes de la App Móvil.</li>
                    <li>2. Código fuente del proyecto Expo.</li>
                    <li>3. Video demo funcionando en dispositivo real.</li>
                </ul>
            </div>
            <div class="hidden md:block w-px bg-slate-300 mx-4"></div>
            <div class="flex-1">
                <h5 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-3"><i class="fas fa-lightbulb mr-2 text-indigo-500"></i> Metacognición</h5>
                <p class="text-sm text-slate-600 italic">
                    "Reflexión sobre el salto de la Web al Móvil: ¿Qué desafíos presentó el renderizado de componentes nativos frente al DOM tradicional?"
                </p>
            </div>
        </div>
    </section>




    <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Líneas de Desarrollo (Elige tu Proyecto)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                El trabajo se realizará en <strong>equipos multidisciplinarios</strong>. La regla inquebrantable para todos los grupos es la arquitectura base: <strong>Backend en Laravel + Base de Datos Relacional + Frontend Reactivo (Vue.js, React o Vainilla JS)</strong>. Sin embargo, la temática del software es a elección del equipo:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white border-t-4 border-blue-500 rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform">
                    <div class="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-6">
                        <i class="fas fa-plane-departure text-2xl"></i>
                    </div>
                    <h4 class="text-xl font-black text-[#003366] uppercase mb-3">1. Simulación y Logística Aérea</h4>
                    <p class="text-sm text-slate-600 mb-4">Sistemas de control de vuelos, reservas de pasajeros, cálculo de rutas y monitoreo de flotas. El frontend debe mostrar paneles interactivos (Dashboards) que consuman la API de Laravel.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">Logística</span>
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">APIs</span>
                    </div>
                </div>

                <div class="bg-white border-t-4 border-emerald-500 rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform">
                    <div class="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                        <i class="fas fa-atom text-2xl"></i>
                    </div>
                    <h4 class="text-xl font-black text-[#003366] uppercase mb-3">2. Simuladores de Física y Matemática</h4>
                    <p class="text-sm text-slate-600 mb-4">Laboratorios virtuales donde el usuario ingrese variables (ej. gravedad, masa, velocidad) y el sistema renderice el experimento gráficamente usando JS, mientras Laravel guarda el historial y las métricas del estudiante.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">Canvas JS</span>
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">Cálculo Algorítmico</span>
                    </div>
                </div>

                <div class="bg-white border-t-4 border-purple-500 rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-transform">
                    <div class="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mb-6">
                        <i class="fas fa-vr-cardboard text-2xl"></i>
                    </div>
                    <h4 class="text-xl font-black text-[#003366] uppercase mb-3">3. Entornos Inmersivos (WebVR)</h4>
                    <p class="text-sm text-slate-600 mb-4">Integración de bibliotecas como Three.js o A-Frame en el frontend para crear recorridos virtuales o visualización 3D. Laravel actuará como el cerebro que inyecta los datos dinámicos al mundo virtual.</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">Three.js</span>
                        <span class="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded">WebGL</span>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-20 mb-10">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Protocolo de Entrega Oficial</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-10">
                Un ingeniero no solo escribe código, también documenta, publica y defiende sus decisiones arquitectónicas. El proyecto final se evaluará bajo <strong>tres pilares fundamentales</strong>:
            </p>

            <div class="space-y-8">
                
                <div class="flex flex-col md:flex-row gap-6 bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl relative overflow-hidden">
                    <div class="w-16 h-16 rounded-2xl bg-slate-800 text-white flex items-center justify-center shadow-lg flex-shrink-0 z-10">
                        <i class="fab fa-github text-3xl"></i>
                    </div>
                    <div class="relative z-10">
                        <h4 class="text-xl font-black text-[#003366] uppercase mb-2">1. Repositorio en GitHub (Código Fuente)</h4>
                        <p class="text-sm text-slate-600 mb-3">El proyecto debe estar alojado en GitHub de forma pública o privada (invitando al docente). No se aceptarán envíos de código por pendrive o archivos .zip.</p>
                        <ul class="text-sm text-slate-600 space-y-2">
                            <li><i class="fas fa-check text-green-500 mr-2"></i><strong>Commits progresivos:</strong> Se evaluará el historial de trabajo del equipo.</li>
                            <li><i class="fas fa-check text-green-500 mr-2"></i><strong>README.md profesional:</strong> Instrucciones claras de cómo clonar, instalar dependencias (<code>npm install</code>, <code>composer install</code>) y ejecutar las migraciones en Laravel.</li>
                        </ul>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row gap-6 bg-blue-50 border border-blue-200 p-6 md:p-8 rounded-2xl relative overflow-hidden">
                    <div class="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg flex-shrink-0 z-10">
                        <i class="fas fa-file-alt text-3xl"></i>
                    </div>
                    <div class="relative z-10 w-full">
                        <h4 class="text-xl font-black text-[#003366] uppercase mb-2">2. Documento Científico (Formato IMRD + Normas APA)</h4>
                        <p class="text-sm text-slate-600 mb-4">El respaldo teórico del software debe redactarse bajo el estándar de investigación <strong>IMRD</strong>. Todo el documento debe seguir las <strong>Normas APA (7ma Edición)</strong>.</p>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div class="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                                <span class="font-black text-blue-600 text-xs tracking-widest block mb-1">I - INTRODUCCIÓN</span>
                                <p class="text-xs text-slate-500">Planteamiento del problema, justificación y estado del arte de la tecnología elegida.</p>
                            </div>
                            <div class="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                                <span class="font-black text-blue-600 text-xs tracking-widest block mb-1">M - METODOLOGÍA</span>
                                <p class="text-xs text-slate-500">Arquitectura del sistema. Explicación del modelo relacional, rutas de Laravel y componentes Vue/React.</p>
                            </div>
                            <div class="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                                <span class="font-black text-blue-600 text-xs tracking-widest block mb-1">R - RESULTADOS</span>
                                <p class="text-xs text-slate-500">Pruebas de funcionamiento, capturas del sistema y métricas de rendimiento (tiempos de respuesta).</p>
                            </div>
                            <div class="bg-white p-4 rounded-xl border border-blue-100 shadow-sm">
                                <span class="font-black text-blue-600 text-xs tracking-widest block mb-1">D - DISCUSIÓN</span>
                                <p class="text-xs text-slate-500">Limitaciones encontradas en el desarrollo, conclusiones y posibles trabajos futuros.</p>
                            </div>
                        </div>

                        <div class="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-xl mt-4 flex items-center gap-4">
                            <i class="fas fa-book-reader text-2xl text-rose-500"></i>
                            <div>
                                <strong class="text-sm text-rose-900 block">Gestor de Referencias Obligatorio: ZOTERO</strong>
                                <p class="text-xs text-rose-800 mt-1">Queda estrictamente prohibido redactar la bibliografía a mano. Todas las citas y referencias deben ser gestionadas e insertadas automáticamente utilizando el software <strong>Zotero</strong>.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row gap-6 bg-orange-50 border border-orange-200 p-6 md:p-8 rounded-2xl relative overflow-hidden">
                    <div class="w-16 h-16 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg flex-shrink-0 z-10">
                        <i class="fas fa-chalkboard-teacher text-3xl"></i>
                    </div>
                    <div class="relative z-10">
                        <h4 class="text-xl font-black text-[#003366] uppercase mb-2">3. Exposición y Defensa Técnica</h4>
                        <p class="text-sm text-slate-600 mb-3">El equipo simulará una presentación corporativa para entregar el software "al cliente".</p>
                        <ul class="text-sm text-slate-600 space-y-2">
                            <li><i class="fas fa-play-circle text-orange-500 mr-2"></i><strong>Demostración en vivo:</strong> El software debe ejecutarse sin errores fatales (Try/Catch).</li>
                            <li><i class="fas fa-code text-orange-500 mr-2"></i><strong>Auditoría de Código:</strong> El docente podrá pedir a cualquier integrante que explique una ruta, un controlador o una función específica de JavaScript en tiempo real.</li>
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
                        Para estandarizar las entregas y ahorrarte tiempo en la configuración de márgenes, tipografías y portadas, descarga el modelo base en formato Word. Este documento ya tiene preconfigurados los Estilos (Títulos 1, 2, 3), la tabla de contenido automática y la estructura IMRD obligatoria.
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
                En la industria de la aviación comercial, la sincronización de datos entre las torres de control, el personal de tierra y las agencias de viaje es un factor crítico. Históricamente, muchas aerolíneas han dependido de arquitecturas monolíticas que presentan cuellos de botella al escalar (Smith, 2023). La adopción de frameworks modernos de backend, como Laravel, ha democratizado el acceso a herramientas empresariales como el ruteo avanzado, la protección CSRF y el mapeo objeto-relacional (ORM).
            </p>
            <p class="text-justify text-slate-700 leading-relaxed mb-6">
                El presente trabajo aborda la problemática de la lentitud en la actualización de estados de vuelo en plataformas tradicionales. Para resolver esto, se propone migrar la lógica de negocio a un entorno moderno impulsado por PHP 8.
            </p>
            
            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 font-sans mb-4">
                <h4 class="font-bold text-blue-900 mb-2">Objetivo General</h4>
                <p class="text-sm text-blue-800">Desarrollar un sistema web transaccional bajo la arquitectura MVC para la simulación y gestión logística de vuelos comerciales, garantizando tiempos de respuesta óptimos mediante la integración de Laravel y un frontend reactivo.</p>
                
                <h4 class="font-bold text-blue-900 mt-4 mb-2">Objetivos Específicos</h4>
                <ul class="list-disc list-inside text-sm text-blue-800 space-y-1">
                    <li>Diseñar una base de datos relacional normalizada hasta la 3FN en MariaDB.</li>
                    <li>Construir una API RESTful segura utilizando los Controladores y Modelos de Laravel.</li>
                    <li>Implementar un panel interactivo (Dashboard) usando JavaScript para el consumo asíncrono de los datos.</li>
                </ul>
            </div>
        </section>

        <section class="mb-12">
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b border-slate-300 pb-2 mb-6 font-sans flex items-center gap-3">
                <span class="bg-[#003366] text-white w-8 h-8 flex items-center justify-center rounded text-sm">M</span> Metodología
            </h3>
            <p class="text-justify text-slate-700 leading-relaxed mb-4">
                La investigación tiene un enfoque tecnológico-aplicado. El ciclo de vida del software se gestionó bajo la metodología ágil Scrum. La arquitectura del sistema se fundamenta en la separación de responsabilidades a través del patrón MVC (Modelo-Vista-Controlador).
            </p>
            <ul class="list-decimal list-inside text-slate-700 leading-relaxed mb-6 space-y-3">
                <li><strong>Diseño de la Base de Datos:</strong> Se utilizó MariaDB. Se crearon las entidades principales: <code>Vuelos</code>, <code>Aviones</code> y <code>Rutas</code>, aplicando restricciones de llaves foráneas para mantener la integridad referencial.</li>
                <li><strong>Desarrollo del Backend:</strong> Se configuró un servidor local utilizando Laragon. El núcleo lógico se programó en Laravel 11. Se utilizó <em>Eloquent ORM</em> para evitar inyecciones SQL y realizar consultas complejas mediante el método <code>with()</code> para cargar relaciones (Eager Loading).</li>
                <li><strong>Desarrollo del Frontend:</strong> La interfaz de usuario (Vista) se estructuró con HTML5 y Bootstrap 5 para garantizar la responsividad. Las llamadas al servidor se realizaron mediante <em>Fetch API</em> en JavaScript, permitiendo actualizar la tabla de vuelos sin recargar la página web.</li>
            </ul>
        </section>

        <section class="mb-12">
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b border-slate-300 pb-2 mb-6 font-sans flex items-center gap-3">
                <span class="bg-[#003366] text-white w-8 h-8 flex items-center justify-center rounded text-sm">R</span> Resultados
            </h3>
            <p class="text-justify text-slate-700 leading-relaxed mb-4">
                La implementación del sistema "Sincronía Aérea" logró automatizar el registro y consulta de vuelos. A continuación, se presentan los hallazgos técnicos más relevantes:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 font-sans">
                <div class="border border-slate-200 p-4 rounded-lg bg-slate-50">
                    <h5 class="font-bold text-slate-800 text-sm mb-2"><i class="fas fa-bolt text-yellow-500 mr-2"></i>Rendimiento de la API</h5>
                    <p class="text-xs text-slate-600">Al simular 500 peticiones concurrentes al endpoint <code>/api/vuelos</code>, el controlador de Laravel mantuvo un tiempo de respuesta promedio de <strong>120 milisegundos</strong>, operando sin saturación de memoria RAM.</p>
                </div>
                <div class="border border-slate-200 p-4 rounded-lg bg-slate-50">
                    <h5 class="font-bold text-slate-800 text-sm mb-2"><i class="fas fa-shield-alt text-green-500 mr-2"></i>Seguridad Lograda</h5>
                    <p class="text-xs text-slate-600">Todas las transacciones de modificación de estado de vuelo (Ej: De "En horario" a "Retrasado") fueron protegidas exitosamente por los Middlewares de autenticación nativos del framework.</p>
                </div>
            </div>
            <p class="text-justify text-slate-700 leading-relaxed">
                El panel de control interactivo demostró que el uso de JavaScript para peticiones asíncronas mejora drásticamente la experiencia del usuario final (UX), eliminando los "pantallazos en blanco" tradicionales de los sistemas antiguos en PHP puro.
            </p>
        </section>

        <section class="mb-12">
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b border-slate-300 pb-2 mb-6 font-sans flex items-center gap-3">
                <span class="bg-[#003366] text-white w-8 h-8 flex items-center justify-center rounded text-sm">D</span> Discusión
            </h3>
            <p class="text-justify text-slate-700 leading-relaxed mb-4">
                Los resultados confirman lo planteado por Otwell (2022), quien afirma que los frameworks fuertemente tipados reducen la deuda técnica en proyectos a largo plazo. En comparación con un desarrollo en PHP estructurado sin framework (como el utilizado en las primeras semanas del curso), la velocidad de desarrollo del equipo aumentó en un 60% gracias a la generación automática de código con <em>Artisan</em>.
            </p>
            <p class="text-justify text-slate-700 leading-relaxed mb-4">
                <strong>Limitaciones:</strong> Durante la simulación, se detectó que para tener una verdadera actualización "en vivo" (donde el usuario no tenga que refrescar ni presionar botones), el uso exclusivo de Fetch API es insuficiente.
            </p>
            <p class="text-justify text-slate-700 leading-relaxed">
                <strong>Trabajos Futuros (Conclusión):</strong> Se concluye que la arquitectura MVC cumple con creces los objetivos logísticos planteados. Para futuras iteraciones de este proyecto, se recomienda la integración del protocolo <em>WebSockets</em> (mediante Laravel Reverb o Pusher) para lograr interactividad en tiempo real estricto, ideal para radares aéreos.
            </p>
        </section>

        <section>
            <h3 class="text-xl font-black text-[#003366] uppercase border-t-2 border-slate-800 pt-6 mb-4 font-sans">Referencias Bibliográficas</h3>
            <div class="bg-slate-100 p-6 rounded-lg font-sans text-sm">
                <p class="text-slate-500 italic mb-4 text-xs">Nota: Esta sección debe ser generada automáticamente por Zotero. Ejemplo en formato APA 7ma Edición:</p>
                
                <div class="pl-8 -indent-8 mb-3 text-slate-700">
                    Cabrera, L., & Gómez, P. (2021). <em>Arquitecturas web escalables en la logística aeroportuaria moderna</em>. Revista de Ingeniería y Tecnología de Software, 15(3), 45-60. https://doi.org/10.1000/rits.2021.153
                </div>
                
                <div class="pl-8 -indent-8 mb-3 text-slate-700">
                    Otwell, T. (2022). <em>Laravel: Up & Running: A Framework for Building Modern PHP Apps</em> (3ra ed.). O'Reilly Media.
                </div>
                
                <div class="pl-8 -indent-8 text-slate-700">
                    Smith, J. (14 de abril de 2023). <em>The death of legacy monolithic systems in aviation</em>. TechAero Journal. Recuperado el 5 de mayo de 2026, de https://techaero.com/legacy-systems
                </div>
            </div>
        </section>


        <section class="mt-20 mb-10">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Guía de Estilo y Ética Académica (APA 7)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                El rigor científico de un futuro Ingeniero de la UPDS no solo se refleja en un código limpio, sino en cómo presenta y respalda su investigación. Todo el documento IMRD debe cumplir estrictamente con las normativas de la <strong>APA 7ma Edición</strong> y mantener un estándar ético intachable.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg">
                    <div class="flex items-center gap-3 mb-4 border-b border-slate-100 pb-3">
                        <i class="fas fa-ruler-combined text-2xl text-blue-500"></i>
                        <h4 class="text-xl font-black text-[#003366] uppercase">Formato del Documento</h4>
                    </div>
                    <ul class="space-y-3 text-sm text-slate-600">
                        <li><i class="fas fa-check text-blue-500 mr-2"></i><strong>Tipografía:</strong> Arial a 11 pts o Times New Roman a 12 pts.</li>
                        <li><i class="fas fa-check text-blue-500 mr-2"></i><strong>Interlineado:</strong> Doble (2.0) en todo el texto, sin espacios extra entre párrafos.</li>
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
                    <p class="text-sm text-slate-600 mb-3">Es fundamental respaldar tus afirmaciones con <strong>citas textuales</strong> (usando comillas y número de página/minuto si copias algo exacto) o citas parafraseadas.</p>
                    <div class="bg-emerald-50 p-3 rounded-lg border border-emerald-100 text-xs text-slate-700 mb-3">
                        <strong>¡Fuentes Válidas en Tecnología!</strong> La APA 7 permite citar contenido digital clave para desarrolladores:
                        <ul class="mt-2 space-y-1">
                            <li>▶️ <strong>Videos de YouTube:</strong> (ej. Conferencias de Laracon, tutoriales oficiales).</li>
                            <li>💻 <strong>Repositorios y Foros:</strong> (ej. Documentación de Laravel, hilos en StackOverflow).</li>
                        </ul>
                    </div>
                    <p class="text-[11px] text-emerald-700 font-bold italic">* Pro-Tip: La extensión de Zotero para el navegador puede extraer todos los datos de un video de YouTube o un repo de GitHub con un solo clic.</p>
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
                            La IA (como ChatGPT, GitHub Copilot o Gemini) es una herramienta extraordinaria para acelerar el desarrollo, <strong>pero no un reemplazo de tu capacidad analítica</strong>. Está totalmente permitido utilizar IA para:
                        </p>
                        <ul class="text-sm text-slate-700 space-y-2 mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
                            <li><i class="fas fa-check-circle text-purple-500 mr-2"></i>Entender y debugear errores complejos.</li>
                            <li><i class="fas fa-check-circle text-purple-500 mr-2"></i>Mejorar la gramática del documento IMRD.</li>
                            <li><i class="fas fa-check-circle text-purple-500 mr-2"></i>Generar datos falsos (Seeders) para la BD.</li>
                        </ul>
                        <div class="bg-white/80 p-4 rounded-xl border border-purple-200 text-sm font-bold text-purple-900 shadow-sm">
                            <i class="fas fa-exclamation-triangle text-rose-500 mr-2"></i> Línea Roja Académica:
                            <span class="font-normal block mt-1">Copiar y pegar lógica de programación que no logras explicar, o pedirle a la IA que redacte los "Resultados" y "Conclusiones" del proyecto es <strong>fraude académico</strong>. Si utilizas IA como asistente en tu flujo de trabajo, debes <strong>declararlo explícitamente</strong> en la sección de Metodología de tu documento.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        <section class="mt-20 mb-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">Decálogo del Ingeniero: 10 Buenas Prácticas de Redacción</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                Redactar un documento técnico de más de 10 páginas requiere el uso inteligente de software. Aquí tienes las 10 herramientas y prácticas estándar que todo estudiante de ingeniería web debe dominar:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-emerald-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-emerald-100 text-emerald-600 flex items-center justify-center font-black flex-shrink-0">1</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Zotero o Mendeley (Gestores)</h5>
                        <p class="text-xs text-slate-500 mt-1">Nunca escribas referencias a mano. Instala Zotero, agrega su extensión al navegador y usa su plugin para Word. Las citas y la bibliografía se generarán solas en formato APA 7.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-blue-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-black flex-shrink-0">2</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Estilos Nativos de Word</h5>
                        <p class="text-xs text-slate-500 mt-1">No cambies el tamaño de la letra manualmente para hacer un título. Usa el panel de "Estilos" (Título 1, Título 2). Esto permite generar la Tabla de Contenidos con un solo clic.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-green-600 transition-colors">
                    <div class="w-8 h-8 rounded bg-green-100 text-green-700 flex items-center justify-center font-black flex-shrink-0">3</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Overleaf / LaTeX (Nivel Dios)</h5>
                        <p class="text-xs text-slate-500 mt-1">Si tu proyecto incluye fórmulas matemáticas o mucha arquitectura, LaTeX es el estándar científico mundial. Overleaf te permite escribir en LaTeX de forma colaborativa en la nube.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-orange-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-orange-100 text-orange-600 flex items-center justify-center font-black flex-shrink-0">4</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Diagramación Profesional (Draw.io)</h5>
                        <p class="text-xs text-slate-500 mt-1">Prohibido hacer esquemas de base de datos en Paint o PowerPoint. Usa <a href="https://app.diagrams.net/" target="_blank" class="text-orange-500 hover:underline">Draw.io</a> o Lucidchart para exportar diagramas vectoriales nítidos para tus Anexos.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-purple-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-purple-100 text-purple-600 flex items-center justify-center font-black flex-shrink-0">5</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Formateadores de Código (Carbon)</h5>
                        <p class="text-xs text-slate-500 mt-1">Si necesitas mostrar código de Laravel o Vue.js en el documento, no le tomes captura al editor. Usa <a href="https://carbon.now.sh/" target="_blank" class="text-purple-500 hover:underline">Carbon</a> para generar imágenes hermosas y legibles de tu sintaxis.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-red-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-red-100 text-red-600 flex items-center justify-center font-black flex-shrink-0">6</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Capturas Limpias (Lightshot / Greenshot)</h5>
                        <p class="text-xs text-slate-500 mt-1">Cuando muestres los "Resultados" de tu sistema web, usa herramientas que recorten la pantalla perfectamente. Evita que se vean las pestañas de tu navegador, la hora de Windows o tu barra de tareas.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-teal-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-teal-100 text-teal-600 flex items-center justify-center font-black flex-shrink-0">7</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Revisión Gramatical (LanguageTool)</h5>
                        <p class="text-xs text-slate-500 mt-1">Un error ortográfico destruye la credibilidad de un ingeniero. Instala extensiones como LanguageTool o pásalo por asistentes de IA para asegurar una redacción formal y en tercera persona ("Se desarrolló", no "Nosotros desarrollamos").</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-yellow-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center font-black flex-shrink-0">8</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Trabajo Colaborativo en la Nube</h5>
                        <p class="text-xs text-slate-500 mt-1">Eviten enviarse el archivo por WhatsApp ("informe_final_FINAL3.docx"). Usen Google Docs o Word Online para que todo el equipo edite el mismo archivo en tiempo real y no pierdan versiones.</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-rose-500 transition-colors">
                    <div class="w-8 h-8 rounded bg-rose-100 text-rose-600 flex items-center justify-center font-black flex-shrink-0">9</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Tablas y Figuras Numeradas</h5>
                        <p class="text-xs text-slate-500 mt-1">En formato APA, toda imagen se llama "Figura". Cada Figura o Tabla debe tener un número (Ej. Figura 1), un título descriptivo arriba, y una nota abajo explicando su origen (Ej. Elaboración propia).</p>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 p-4 rounded-xl shadow-sm flex items-start gap-4 hover:border-slate-800 transition-colors">
                    <div class="w-8 h-8 rounded bg-slate-200 text-slate-800 flex items-center justify-center font-black flex-shrink-0">10</div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm">Entrega Inmutable (Siempre en PDF)</h5>
                        <p class="text-xs text-slate-500 mt-1">Jamás entregues el proyecto final en formato .doc o .docx. Las versiones de Office pueden mover los márgenes o desordenar las imágenes en la computadora del docente. Exporta y entrega <strong>siempre en PDF</strong>.</p>
                    </div>
                </div>

            </div>
        </section>
        

</div>
`;