const pag_inicio = `
<div class="space-y-12 animate-in fade-in duration-700">
    <header class="text-center py-14 bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#00aaff] rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
        <i class="fas fa-desktop absolute -right-12 -top-12 text-white/10 text-[18rem] rotate-12"></i>
        <span class="bg-white/10 backdrop-blur-md text-[#00aaff] text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border border-white/10">
            Universidad Privada Domingo Savio
        </span>
        <h1 class="text-5xl md:text-6xl font-black tracking-tighter uppercase mt-4 mb-2">
            Sistemas Operativos II
        </h1>
        <p class="text-md md:text-lg font-light opacity-90 uppercase tracking-widest">
            Ingeniería de Sistemas • Quinto Semestre
        </p>
    </header>

    <section class="grid md:grid-cols-3 gap-6">
        <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-center gap-4">
            <div class="w-12 h-12 bg-blue-50 text-[#003366] rounded-xl flex items-center justify-center text-xl shadow-inner">
                <i class="fas fa-barcode"></i>
            </div>
            <div>
                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Código de Asignatura</p>
                <p class="text-lg font-black text-[#003366]">SIS-0211</p>
            </div>
        </div>
        
        <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-center gap-4">
            <div class="w-12 h-12 bg-cyan-50 text-[#00aaff] rounded-xl flex items-center justify-center text-xl shadow-inner">
                <i class="fas fa-clock"></i>
            </div>
            <div>
                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Carga Horaria Total</p>
                <p class="text-lg font-black text-[#003366]">100 Horas (60 HP / 40 HT)</p>
            </div>
        </div>

        <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-center gap-4">
            <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-xl shadow-inner">
                <i class="fas fa-graduation-cap"></i>
            </div>
            <div>
                <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Créditos Universitarios</p>
                <p class="text-lg font-black text-[#003366]">5 Créditos</p>
            </div>
        </div>
    </section>

    <section class="grid md:grid-cols-2 gap-8">
        <div class="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col justify-between">
            <div>
                <span class="text-[11px] font-black text-[#00aaff] tracking-widest uppercase block mb-2">Desafío Académico</span>
                <h2 class="text-2xl font-black text-[#003366] uppercase mb-4">El Nodo Problematizador</h2>
                <p class="text-slate-600 leading-relaxed italic border-l-4 border-[#00aaff] pl-4 my-4 text-sm">
                    "El escaso conocimiento de arquitecturas de software libre para la implementación de infraestructuras de servicios de mediana y gran envergadura."
                </p>
            </div>
        </div>

        <div class="bg-[#001f3f] text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden flex flex-col justify-between">
            <i class="fas fa-server absolute -right-6 -bottom-6 text-white/5 text-[10rem]"></i>
            <div>
                <span class="text-[11px] font-black text-[#00aaff] tracking-widest uppercase block mb-2">Introducción</span>
                <h2 class="text-2xl font-black uppercase mb-4">Propósito del Módulo</h2>
                <p class="text-gray-300 text-sm leading-relaxed mb-4">
                    Administra funciones básicas de sistemas operativos en distribuciones de software libre para hacer más productiva sus funcionalidades y utilidades a la sociedad, en función a su configuración y operación óptima de los recursos y elementos requeridos en entornos tecnológicos.
                </p>
            </div>
        </div>
    </section>

    <section class="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100">
        <div class="text-center max-w-xl mx-auto mb-8">
            <span class="text-[11px] font-black text-[#00aaff] tracking-widest uppercase">Saberes Esenciales</span>
            <h2 class="text-3xl font-black text-[#003366] uppercase">Bloques de Contenido</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="p-5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-none mt-1">
                        <i class="fab fa-linux"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-base mb-1">1. Fundamentos e instalación de Linux</h4>
                        <p class="text-slate-500 text-xs leading-relaxed">
                            Antecedentes, Beneficios de Linux. Software libre y Open Source. Estructura y requerimientos del sistema. Instalación de sistemas operativos libres.
                        </p>
                    </div>
                </div>
            </div>

            <div class="p-5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center flex-none mt-1">
                        <i class="fas fa-desktop"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-base mb-1">2. Escritorios de Linux</h4>
                        <p class="text-slate-500 text-xs leading-relaxed">
                            Escritorios. Organización de Aplicaciones. Estructura y acceso al directorio del usuario. Administración del Escritorio.
                        </p>
                    </div>
                </div>
            </div>

            <div class="p-5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-none mt-1">
                        <i class="fas fa-terminal"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-base mb-1">3. Manejo de Comandos</h4>
                        <p class="text-slate-500 text-xs leading-relaxed">
                            Introducción a la Shell. Editores de texto en Linux. Comandos para trabajar con archivos y directorios. Comandos para trabajar con procesos.
                        </p>
                    </div>
                </div>
            </div>

            <div class="p-5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-none mt-1">
                        <i class="fas fa-box-open"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-base mb-1">4. Instalación de Aplicaciones</h4>
                        <p class="text-slate-500 text-xs leading-relaxed">
                            Manejador de Paquetes. Añadir y eliminar Aplicaciones. Repositorios y Actualizaciones. Comandos para buscar, instalar o eliminar aplicaciones.
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="p-5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center flex-none mt-1">
                        <i class="fas fa-code"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-base mb-1">5. Programación Shell básica</h4>
                        <p class="text-slate-500 text-xs leading-relaxed">
                            Ambientes Shells. Estructura de un programa en Shell. Comandos de control while, if, for... Programación scripts en Bash.
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="p-5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center flex-none mt-1">
                        <i class="fas fa-network-wired"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-800 text-base mb-1">6. Redes en Linux</h4>
                        <p class="text-slate-500 text-xs leading-relaxed">
                            Configuración de conectividad de red. Comandos para analizar la configuración de interfaces y red de nuestro sistema. Asignar direccionamiento, puerta de enlace, redireccionadores. Pruebas de red.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</div>
`;