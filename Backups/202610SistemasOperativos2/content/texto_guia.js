// content/texto_guia.js

const pag_texto_guia = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <!-- 1. PORTADA -->
    <header class="mb-20 text-center py-16 px-6 bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#00aaff] rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
        <i class="fab fa-linux absolute -right-12 -top-12 text-white/10 text-[18rem] rotate-12 pointer-events-none"></i>
        
        <div class="relative z-10 max-w-4xl mx-auto space-y-4">
            <span class="bg-white/10 backdrop-blur-md text-[#00aaff] text-[11px] font-black uppercase tracking-[0.3em] px-5 py-2 rounded-full border border-white/15 inline-block">
                Universidad Privada Domingo Savio • Facultad de Ingeniería
            </span>
            
            <h1 class="text-4xl md:text-6xl font-black tracking-tight uppercase leading-none pt-2">
                Sistemas Operativos II
            </h1>
            
            <p class="text-lg md:text-xl font-medium text-cyan-100 tracking-wide">
                SIS-0211 • Quinto Semestre • Carga Horaria: 100 Horas
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
                    La materia de <strong>Sistemas Operativos II</strong> constituye una inmersión técnica profunda en el mundo del software libre y la administración de infraestructuras IT. Aborda desde la instalación y jerarquía del sistema de archivos en distribuciones Linux, hasta la gestión avanzada a través de la terminal (Shell).
                </p>
                <p class="text-slate-600 text-sm md:text-base leading-relaxed">
                    A través de este módulo se desarrollan competencias fundamentales para que el Ingeniero de Sistemas administre distribuciones basadas en software libre, haciendo más productivas sus utilidades en función de una operación óptima y la configuración de redes en entornos tecnológicos reales.
                </p>
            </div>
        </div>

        <!-- Por qué es necesario aprender esta temática -->
        <div class="bg-[#001f3f] text-white p-8 md:p-10 rounded-[2rem] shadow-xl relative overflow-hidden flex flex-col justify-between">
            <i class="fas fa-server absolute -right-6 -bottom-6 text-white/5 text-[11rem] pointer-events-none"></i>
            <div>
                <span class="text-[10px] font-black uppercase tracking-[0.3em] text-[#00aaff] block mb-2">Impacto Profesional</span>
                <h2 class="text-2xl md:text-3xl font-black uppercase mb-4 tracking-tight">¿Por qué es Necesario Dominar esta Temática?</h2>
                <ul class="space-y-3 text-slate-300 text-xs md:text-sm leading-relaxed">
                    <li class="flex items-start gap-3">
                        <i class="fas fa-check-circle text-[#00aaff] mt-1 flex-none"></i>
                        <span><strong>Solución a problemas del contexto:</strong> Previene el desconocimiento técnico que limita la implementación y escalabilidad de infraestructuras de servicios de mediana y gran envergadura.</span>
                    </li>
                    <li class="flex items-start gap-3">
                        <i class="fas fa-check-circle text-[#00aaff] mt-1 flex-none"></i>
                        <span><strong>Estabilidad y Seguridad:</strong> Linux es el estándar en servidores globales y entornos de nube. Administrarlo eficientemente garantiza la alta disponibilidad y seguridad corporativa.</span>
                    </li>
                    <li class="flex items-start gap-3">
                        <i class="fas fa-check-circle text-[#00aaff] mt-1 flex-none"></i>
                        <span><strong>Automatización y Redes:</strong> El dominio de comandos, scripts en Bash y conectividad LAN son habilidades indispensables en roles de SysAdmin, DevOps y Ciberseguridad.</span>
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

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Unidad 1 -->
            <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#00aaff] transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span class="w-8 h-8 rounded-lg bg-blue-50 text-[#003366] font-black text-xs flex items-center justify-center">U1</span>
                    <h3 class="text-base font-black text-[#003366] uppercase">Fundamentos e instalación</h3>
                </div>
                <ul class="text-xs text-slate-600 space-y-1.5 pl-2 list-disc list-inside leading-relaxed">
                    <li>Antecedentes y beneficios de Linux.</li>
                    <li>Filosofía de Software libre y Open Source.</li>
                    <li>Estructura y requerimientos del sistema.</li>
                    <li>Jerarquía y estructura del sistema de archivos.</li>
                    <li>Particiones e instalación práctica de distribuciones libres.</li>
                </ul>
            </div>

            <!-- Unidad 2 -->
            <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#00aaff] transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span class="w-8 h-8 rounded-lg bg-cyan-50 text-[#00aaff] font-black text-xs flex items-center justify-center">U2</span>
                    <h3 class="text-base font-black text-[#003366] uppercase">Escritorios de Linux</h3>
                </div>
                <ul class="text-xs text-slate-600 space-y-1.5 pl-2 list-disc list-inside leading-relaxed">
                    <li>Entornos de Escritorio disponibles.</li>
                    <li>Organización lógica de Aplicaciones.</li>
                    <li>Estructura y acceso seguro al directorio del usuario.</li>
                    <li>Gestión de Unidades de Disco Duro.</li>
                    <li>Preferencias y Administración gráfica del Escritorio.</li>
                </ul>
            </div>

            <!-- Unidad 3 -->
            <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#00aaff] transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span class="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 font-black text-xs flex items-center justify-center">U3</span>
                    <h3 class="text-base font-black text-[#003366] uppercase">Manejo de Comandos (Shell)</h3>
                </div>
                <ul class="text-xs text-slate-600 space-y-1.5 pl-2 list-disc list-inside leading-relaxed">
                    <li>Introducción conceptual y operativa a la Shell.</li>
                    <li>Uso de editores de texto en línea de comandos.</li>
                    <li>Comandos esenciales para operar archivos y directorios.</li>
                    <li>Comandos para el monitoreo y gestión de procesos del sistema.</li>
                    <li>Administración base del sistema y permisos de usuarios.</li>
                </ul>
            </div>

            <!-- Unidad 4 -->
            <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#00aaff] transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 font-black text-xs flex items-center justify-center">U4</span>
                    <h3 class="text-base font-black text-[#003366] uppercase">Gestión de Aplicaciones</h3>
                </div>
                <ul class="text-xs text-slate-600 space-y-1.5 pl-2 list-disc list-inside leading-relaxed">
                    <li>Teoría y uso del Manejador de Paquetes.</li>
                    <li>Comandos para buscar, añadir y eliminar software.</li>
                    <li>Gestión de repositorios locales y externos.</li>
                    <li>Actualizaciones de seguridad y de sistema.</li>
                </ul>
            </div>
            
            <!-- Unidad 5 -->
            <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#00aaff] transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span class="w-8 h-8 rounded-lg bg-yellow-50 text-yellow-600 font-black text-xs flex items-center justify-center">U5</span>
                    <h3 class="text-base font-black text-[#003366] uppercase">Programación Shell (Bash)</h3>
                </div>
                <ul class="text-xs text-slate-600 space-y-1.5 pl-2 list-disc list-inside leading-relaxed">
                    <li>Tipos y ambientes de Shells disponibles.</li>
                    <li>Estructura sintáctica de un programa en Shell.</li>
                    <li>Lógica y comandos de control (while, if, for).</li>
                    <li>Automatización y creación de scripts funcionales en Bash.</li>
                </ul>
            </div>

            <!-- Unidad 6 -->
            <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:border-[#00aaff] transition-colors">
                <div class="flex items-center gap-3 mb-3">
                    <span class="w-8 h-8 rounded-lg bg-red-50 text-red-600 font-black text-xs flex items-center justify-center">U6</span>
                    <h3 class="text-base font-black text-[#003366] uppercase">Redes en Linux</h3>
                </div>
                <ul class="text-xs text-slate-600 space-y-1.5 pl-2 list-disc list-inside leading-relaxed">
                    <li>Fundamentos de configuración de conectividad de red.</li>
                    <li>Comandos para analizar y administrar interfaces de red.</li>
                    <li>Asignación de direccionamiento IP y puerta de enlace.</li>
                    <li>Implementación de redireccionadores y pruebas de conectividad LAN.</li>
                </ul>
            </div>

        </div>
    </section>

</div>
`;