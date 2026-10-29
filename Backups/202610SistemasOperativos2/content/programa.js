const pag_programa = `
<div class="space-y-8 animate-in fade-in duration-700">
    
    <!-- ENCABEZADO Y METODOLOGÍA DE EVALUACIÓN -->
    <div class="bg-gradient-to-br from-[#001f3f] to-[#004a8c] p-8 md:p-12 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
        <div class="relative z-10">
            <h3 class="text-xs font-black uppercase tracking-[0.3em] mb-3 text-[#00aaff]">Sistemas Operativos II</h3>
            <h2 class="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Cronograma de Clases</h2>
            <p class="text-blue-100 text-sm mb-6 uppercase tracking-widest">Octubre 2026 • Lunes a Viernes</p>
            
            <div class="bg-white/10 border border-white/20 p-5 rounded-2xl backdrop-blur-md">
                <h4 class="text-[#00aaff] font-bold text-sm uppercase mb-2 flex items-center gap-2">
                    <i class="fas fa-balance-scale"></i> Metodología de Evaluación
                </h4>
                <p class="text-sm leading-relaxed text-blue-50">
                    Todas las actividades diarias y prácticas serán resueltas con <strong>apoyo grupal en aula</strong>, pero la <strong>entrega y evaluación será estrictamente individual</strong>. Los últimos 5 días del módulo están destinados a las evaluaciones de producto (proyecto integrador), defensas y demostraciones prácticas, las cuales tienen el <strong>mayor peso</strong> en la calificación final.
                </p>
            </div>
        </div>
        <i class="fas fa-calendar-alt absolute -right-10 -bottom-10 text-white/5 text-[15rem] rotate-12"></i>
    </div>

    <!-- PLAN DE CLASES SEMANAL -->
    <div class="space-y-6">

        <!-- SEMANA 1 -->
        <div class="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
            <div class="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                <span class="bg-[#003366] text-white text-xs font-black px-3 py-1 rounded-md uppercase">Semana 1</span>
                <h3 class="font-bold text-slate-800">Introducción e Instalación (Bloque 1)</h3>
            </div>
            <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">J 01</div>
                    <div>
                        <p class="font-bold text-sm text-slate-800">Fundamentos de Linux</p>
                        <p class="text-xs text-slate-500 mt-1">Antecedentes, beneficios, Filosofía Software Libre/Open Source y estructura del sistema.</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">V 02</div>
                    <div>
                        <p class="font-bold text-sm text-slate-800">Jerarquía e Instalación</p>
                        <p class="text-xs text-slate-500 mt-1">Sistema de archivos, creación de particiones e instalación práctica de distribuciones Linux.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- SEMANA 2 -->
        <div class="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
            <div class="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                <span class="bg-[#003366] text-white text-xs font-black px-3 py-1 rounded-md uppercase">Semana 2</span>
                <h3 class="font-bold text-slate-800">Escritorios y Terminal (Bloques 2 y 3)</h3>
            </div>
            <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">05-06</div>
                    <div>
                        <p class="font-bold text-sm text-slate-800">Entornos de Escritorio</p>
                        <p class="text-xs text-slate-500 mt-1">Organización de aplicaciones, directorios de usuario, unidades de disco y administración gráfica.</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">07-09</div>
                    <div>
                        <p class="font-bold text-sm text-slate-800">Inmersión a la Shell</p>
                        <p class="text-xs text-slate-500 mt-1">Editores de texto (Nano/Vim), comandos para archivos, directorios y administración de procesos.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- SEMANA 3 -->
        <div class="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
            <div class="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center gap-3">
                <span class="bg-[#003366] text-white text-xs font-black px-3 py-1 rounded-md uppercase">Semana 3</span>
                <h3 class="font-bold text-slate-800">Paquetes y Scripting (Bloques 4 y 5)</h3>
            </div>
            <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">12-13</div>
                    <div>
                        <p class="font-bold text-sm text-slate-800">Gestión de Aplicaciones</p>
                        <p class="text-xs text-slate-500 mt-1">Manejadores de paquetes, añadir/eliminar software, repositorios y actualizaciones vía comandos.</p>
                    </div>
                </div>
                <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">14-16</div>
                    <div>
                        <p class="font-bold text-sm text-slate-800">Programación Shell Bash</p>
                        <p class="text-xs text-slate-500 mt-1">Estructura de scripts, variables, bucles (while, for) y condicionales (if) para automatización.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- SEMANA 4 (Transición a Evaluaciones) -->
        <div class="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
            <div class="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <span class="bg-[#003366] text-white text-xs font-black px-3 py-1 rounded-md uppercase">Semana 4</span>
                    <h3 class="font-bold text-slate-800">Redes y Fase Evaluativa (Bloque 6)</h3>
                </div>
            </div>
            <div class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold shrink-0">19-21</div>
                    <div>
                        <p class="font-bold text-sm text-slate-800">Redes en Linux LAN</p>
                        <p class="text-xs text-slate-500 mt-1">Configuración de interfaces, asignación IP, puerta de enlace, redireccionadores y pruebas (Ping/Traceroute).</p>
                    </div>
                </div>
                
                <!-- INICIO DE LOS 5 DÍAS EVALUATIVOS -->
                <div class="flex gap-4 bg-red-50 p-3 rounded-xl border border-red-100">
                    <div class="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-600 font-bold shrink-0">22-23</div>
                    <div>
                        <p class="font-black text-sm text-red-700">DÍAS EVALUATIVOS (1 y 2)</p>
                        <p class="text-xs text-red-600 mt-1 font-medium">Lanzamiento del Proyecto Integrador. Implementación individual en laboratorio (Fase 1: Instalación y Scripting).</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- SEMANA 5 (Últimos días evaluativos) -->
        <div class="bg-red-600 rounded-2xl shadow-lg border border-red-700 overflow-hidden">
            <div class="bg-red-700 px-6 py-4 flex items-center gap-3">
                <span class="bg-white text-red-700 text-xs font-black px-3 py-1 rounded-md uppercase">Semana 5</span>
                <h3 class="font-bold text-white">Evaluación Final y Defensas (Alto Peso)</h3>
            </div>
            <div class="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div class="flex items-center gap-2 mb-2">
                        <i class="fas fa-server text-white"></i>
                        <p class="font-bold text-sm text-white">Lunes 26 (Día 3)</p>
                    </div>
                    <p class="text-xs text-red-100">Implementación de red LAN en el proyecto. Pruebas de conectividad y auditoría de comandos.</p>
                </div>
                
                <div class="bg-white/10 p-4 rounded-xl border border-white/20">
                    <div class="flex items-center gap-2 mb-2">
                        <i class="fas fa-chalkboard-teacher text-white"></i>
                        <p class="font-bold text-sm text-white">Martes 27 (Día 4)</p>
                    </div>
                    <p class="text-xs text-red-100">Defensa práctica en laboratorio. Demostración de funcionalidades y respuesta a problemas en vivo.</p>
                </div>

                <div class="bg-white p-4 rounded-xl shadow-inner">
                    <div class="flex items-center gap-2 mb-2">
                        <i class="fas fa-file-signature text-red-600"></i>
                        <p class="font-black text-sm text-red-700">Miércoles 28 (Día 5)</p>
                    </div>
                    <p class="text-xs text-slate-700 font-medium">Entrega de informe final documentado, cierre de notas, retroalimentación y fin del módulo.</p>
                </div>
            </div>
        </div>

    </div>
</div>
`;