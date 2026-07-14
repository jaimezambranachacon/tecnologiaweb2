const pag_inicio = `
<div class="space-y-12 animate-in fade-in duration-700">
    <header class="text-center py-14 bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#00aaff] rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
        <i class="fas fa-code-branch absolute -right-12 -top-12 text-white/10 text-[18rem] rotate-12"></i>
        <span class="bg-white/10 backdrop-blur-md text-[#00aaff] text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border border-white/10">
            Universidad Privada Domingo Savio
        </span>
        <h1 class="text-5xl md:text-6xl font-black tracking-tighter uppercase mt-4 mb-2">
            Programación III
        </h1>
        <p class="text-md md:text-lg font-light opacity-90 uppercase tracking-widest">
            Ingeniería de Sistemas • Gestión 2026
        </p>
    </header>

    <section class="grid md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-center gap-4">
            <div class="w-12 h-12 bg-blue-50 text-[#003366] rounded-xl flex items-center justify-center text-xl shadow-inner">
                <i class="fas fa-barcode"></i>
            </div>
            <div>
                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Código de Asignatura</p>
                <p class="text-lg font-black text-[#003366]">SIS-0123</p>
            </div>
        </div>
        
        <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-center gap-4">
            <div class="w-12 h-12 bg-cyan-50 text-[#00aaff] rounded-xl flex items-center justify-center text-xl shadow-inner">
                <i class="fas fa-clock"></i>
            </div>
            <div>
                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Carga Horaria Total</p>
                <p class="text-lg font-black text-[#003366]">120 Horas (80 HT / 40 HP)</p>
            </div>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-center gap-4">
            <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-xl shadow-inner">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <div>
                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Créditos Universitarios</p>
                <p class="text-lg font-black text-[#003366]">6 Créditos</p>
            </div>
        </div>
    </section>

    <section class="grid md:grid-cols-2 gap-8">
        <div class="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col justify-between">
            <div>
                <span class="text-[11px] font-black text-[#00aaff] tracking-widest uppercase block mb-2">Desafío Académico</span>
                <h2 class="text-2xl font-black text-[#003366] uppercase mb-4">El Nodo Problematizador</h2>
                <p class="text-slate-600 leading-relaxed italic border-l-4 border-[#00aaff] pl-4 my-4 text-sm">
                    "La falta de la aplicación de las técnicas de programación orientada a objetos para el desarrollo de programas informáticos empleando desde la definición de clases e instancias hasta la utilización de algoritmos recursivos para obtener soluciones informáticas eficientes."
                </p>
            </div>
            <p class="text-xs text-slate-400 mt-4">
                * Este módulo mitiga esta problemática mediante el diseño estructural óptimo del software y la gestión avanzada de recursos en hardware.
            </p>
        </div>

        <div class="bg-[#001f3f] text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden flex flex-col justify-between">
            <i class="fas fa-microchip absolute -right-6 -bottom-6 text-white/5 text-[10rem]"></i>
            <div>
                <span class="text-[11px] font-black text-[#00aaff] tracking-widest uppercase block mb-2">Introducción</span>
                <h2 class="text-2xl font-black uppercase mb-4">Propósito del Módulo</h2>
                <p class="text-gray-300 text-sm leading-relaxed mb-4">
                    La ingeniería de software moderna exige un dominio absoluto de la infraestructura interna del sistema. Esta materia expande tus capacidades lógicas llevándote más allá de la simple sintaxis superficial, adentrándose en el control preciso del mapa de memoria de la computadora.
                </p>
                <p class="text-gray-300 text-sm leading-relaxed">
                    A través de este entorno interactivo, analizaremos la implementación técnica de la memoria dinámica, el diseño algorítmico recursivo y las arquitecturas avanzadas orientadas a objetos, permitiéndote construir soluciones informáticas con un rendimiento óptimo de nivel industrial.
                </p>
            </div>
        </div>
    </section>

    <section class="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
        <div class="text-center max-w-xl mx-auto mb-8">
            <span class="text-[11px] font-black text-[#00aaff] tracking-widest uppercase">Saberes Esenciales</span>
            <h2 class="text-3xl font-black text-[#003366] uppercase">Objetivos Puntuales de Verificación</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
            <div class="p-5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-none mt-1">
                        <i class="fas fa-server"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-base mb-1">Manejo Dinámico de Memoria</h4>
                        <p class="text-slate-500 text-xs leading-relaxed">
                            Codificar programas de computadora utilizando técnicas avanzadas de punteros para un control dinámico, asignación (Stack/Heap) y liberación adecuada de la memoria RAM.
                        </p>
                    </div>
                </div>
            </div>

            <div class="p-5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-none mt-1">
                        <i class="fas fa-window-restore"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-base mb-1">Interfaces Gráficas y Recursividad</h4>
                        <p class="text-slate-500 text-xs leading-relaxed">
                            Implementar aplicaciones robustas con entornos visuales dinámicos interactivos, sustentadas en algoritmos recursivos eficientes y la sobrecarga controlada de funciones.
                        </p>
                    </div>
                </div>
            </div>

            <div class="p-5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-none mt-1">
                        <i class="fas fa-cubes"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-base mb-1">Paradigma POO Avanzado</h4>
                        <p class="text-slate-500 text-xs leading-relaxed">
                            Utilizar de manera rigurosa clases abstractas, encapsulamiento, herencia y polimorfismo estructurado para diseñar software altamente escalable y reutilizable.
                        </p>
                    </div>
                </div>
            </div>

            <div class="p-5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-none mt-1">
                        <i class="fas fa-shield-halved"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-base mb-1">Soluciones Eficientes del Contexto</h4>
                        <p class="text-slate-500 text-xs leading-relaxed">
                            Plantear y modelar lógicas algorítmicas avanzadas que resuelvan problemas organizacionales reales, garantizando la optimización del rendimiento en tiempo de ejecución.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
`;