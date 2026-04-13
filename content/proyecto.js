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

</div>
`;