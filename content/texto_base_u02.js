// content/texto_base_u02.js

const pag_texto_base_u02 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <!-- HEADER PRINCIPAL -->
    <header class="mb-20">
        <span class="text-[#00aaff] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-desktop text-lg"></i> TEXTO GUÍA BASE / UNIDAD 2
        </span>
        <h1 class="text-4xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            ESCRITORIOS Y ENTORNOS<br>
            <span class="text-[#00aaff]">GRÁFICOS EN LINUX</span>
        </h1>

        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl leading-relaxed">
            Arquitectura de la interfaz gráfica, diversidad de entornos de escritorio, gestión lógica de aplicaciones, exploración profunda del directorio de usuario y administración gráfica de almacenamiento.
        </p>
        <div class="h-2 w-24 bg-[#00aaff] mt-8 rounded-full"></div>
    </header>

    <div class="max-w-5xl space-y-16">

        <!-- INTRODUCCIÓN AL TEMA -->
        <section class="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-8 border-[#003366] rounded-r-3xl shadow-sm">
            <h4 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-2">Fundamentación Teórica</h4>
            <p class="text-lg md:text-xl text-slate-800 leading-relaxed font-semibold italic mb-4">
                "A diferencia de los sistemas privativos donde la interfaz gráfica está incrustada en el núcleo del sistema, en Linux la interfaz es solo una aplicación más. Esta separación arquitectónica otorga una flexibilidad sin precedentes para adaptar el sistema desde potentes estaciones de diseño hasta servidores ultraligeros."
            </p>
            <p class="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                En esta unidad exploraremos cómo interactúa el usuario con el sistema a través de entornos gráficos (GUI). Analizaremos las opciones disponibles según los recursos de hardware, cómo se organizan las aplicaciones y archivos de configuración personal, y cómo administrar componentes de hardware de manera visual antes de pasar a la línea de comandos.
            </p>
        </section>

        <!-- SECCIÓN 1: ARQUITECTURA Y ENTORNOS DISPONIBLES -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. Arquitectura Visual y Entornos de Escritorio
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                En Linux, la visualización funciona mediante un servidor gráfico (históricamente <strong>X11</strong>, modernamente <strong>Wayland</strong>) sobre el cual se ejecuta el "Entorno de Escritorio" (Desktop Environment o DE). El DE define el aspecto de las ventanas, iconos, barras de tareas y las aplicaciones base del sistema.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <!-- GNOME -->
                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-blue-400 transition-colors">
                    <div>
                        <div class="w-12 h-12 bg-white text-slate-800 rounded-xl flex items-center justify-center font-black mb-4 shadow-sm border border-slate-100 text-2xl">
                            <i class="fab fa-ubuntu"></i>
                        </div>
                        <h5 class="font-black text-[#003366] text-lg mb-2">GNOME</h5>
                        <p class="text-slate-500 text-xs leading-relaxed mb-4">
                            Moderno, fluido y enfocado en la productividad sin distracciones. Utiliza un flujo de trabajo basado en actividades. Es el estándar por defecto en distribuciones mayores como Ubuntu, Fedora y Debian.
                        </p>
                    </div>
                    <div class="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider text-center">
                        Alto Consumo de Recursos
                    </div>
                </div>

                <!-- KDE Plasma -->
                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-cyan-400 transition-colors">
                    <div>
                        <div class="w-12 h-12 bg-white text-cyan-600 rounded-xl flex items-center justify-center font-black mb-4 shadow-sm border border-slate-100 text-2xl">
                            <i class="fab fa-suse"></i>
                        </div>
                        <h5 class="font-black text-[#003366] text-lg mb-2">KDE Plasma</h5>
                        <p class="text-slate-500 text-xs leading-relaxed mb-4">
                            Extremadamente personalizable, visualmente atractivo (similar a Windows en su disposición clásica) y repleto de herramientas y widgets. Ha mejorado enormemente su rendimiento.
                        </p>
                    </div>
                    <div class="bg-cyan-100 text-cyan-800 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider text-center">
                        Consumo Medio/Alto
                    </div>
                </div>

                <!-- XFCE / LXQt -->
                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-indigo-400 transition-colors">
                    <div>
                        <div class="w-12 h-12 bg-white text-indigo-500 rounded-xl flex items-center justify-center font-black mb-4 shadow-sm border border-slate-100 text-2xl">
                            <i class="fas fa-feather-alt"></i>
                        </div>
                        <h5 class="font-black text-[#003366] text-lg mb-2">XFCE / LXQt</h5>
                        <p class="text-slate-500 text-xs leading-relaxed mb-4">
                            Entornos diseñados bajo la premisa de la ligereza. Resucitan hardware antiguo y son ideales para servidores donde se requiere una GUI que no penalice el rendimiento general del sistema.
                        </p>
                    </div>
                    <div class="bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider text-center">
                        Bajo Consumo (Ultraligero)
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 2: ORGANIZACIÓN DE APLICACIONES -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. Organización Lógica de Aplicaciones
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                En los entornos gráficos de Linux, las aplicaciones no se amontonan al azar. El sistema respeta los estándares Freedesktop.org, organizando el software en categorías estrictas a través de archivos de extensión <code class="font-mono bg-slate-100 text-slate-800 px-1 py-0.5 rounded">.desktop</code>.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm flex gap-4 items-start">
                    <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#003366] flex-shrink-0">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <div>
                        <h5 class="text-sm font-black text-[#003366] uppercase mb-1">Categorías Estándar</h5>
                        <p class="text-xs text-slate-500 leading-relaxed">
                            Los menús se dividen automáticamente en Internet, Desarrollo, Gráficos, Multimedia, Oficina, Sistema y Utilidades, dependiendo de la metadata del software instalado.
                        </p>
                    </div>
                </div>
                
                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm flex gap-4 items-start">
                    <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                        <i class="fas fa-cogs"></i>
                    </div>
                    <div>
                        <h5 class="text-sm font-black text-[#003366] uppercase mb-1">Ubicación de Lanzadores</h5>
                        <p class="text-xs text-slate-500 leading-relaxed">
                            Los accesos directos gráficos (archivos .desktop) se almacenan a nivel global en <code class="font-mono text-slate-700">/usr/share/applications/</code> y a nivel de usuario en <code class="font-mono text-slate-700">~/.local/share/applications/</code>.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 3: DIRECTORIO DE USUARIO (HOME) -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Estructura y Acceso al Directorio del Usuario
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                El directorio personal, conocido como <strong>Home</strong> (representado por el atajo de la tilde <code class="font-mono font-bold text-blue-600 text-lg">~</code>), es el refugio seguro de cada cuenta. Es el único lugar donde un usuario estándar tiene permisos absolutos de escritura sin requerir privilegios de administrador.
            </p>

            <div class="overflow-x-auto bg-slate-900 rounded-2xl shadow-sm border border-slate-800 mb-6 p-6">
                <div class="font-mono text-xs text-slate-300 leading-loose">
                    <div class="text-emerald-400 font-bold mb-2">/home/nombre_usuario/ ( o simplemente ~ )</div>
                    <div class="pl-4 border-l border-slate-700 ml-2">
                        <div class="flex items-center gap-2"><i class="fas fa-folder text-blue-400"></i> Documentos/  <span class="text-slate-500 italic ml-4"># Archivos ofimáticos y personales</span></div>
                        <div class="flex items-center gap-2"><i class="fas fa-folder text-blue-400"></i> Descargas/   <span class="text-slate-500 italic ml-4"># Ubicación por defecto de navegadores</span></div>
                        <div class="flex items-center gap-2"><i class="fas fa-folder text-blue-400"></i> Escritorio/  <span class="text-slate-500 italic ml-4"># Lo que ves en el fondo de pantalla</span></div>
                        <div class="mt-2 pt-2 border-t border-slate-700 border-dashed"></div>
                        <div class="flex items-center gap-2 text-slate-400"><i class="fas fa-file-alt"></i> .bashrc      <span class="text-slate-600 italic ml-4"># (Oculto) Configuración de la terminal</span></div>
                        <div class="flex items-center gap-2 text-slate-400"><i class="fas fa-folder"></i> .config/     <span class="text-slate-600 italic ml-4"># (Oculto) Preferencias gráficas de aplicaciones</span></div>
                    </div>
                </div>
            </div>
            
            <div class="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-xl text-xs text-amber-900 leading-relaxed">
                <i class="fas fa-lightbulb mr-2 text-amber-500"></i><strong>Archivos Ocultos (Dotfiles):</strong> En Linux, cualquier archivo o carpeta cuyo nombre inicie con un punto (ej. <code>.config</code>) queda oculto por defecto en la interfaz gráfica. Para verlos en el explorador de archivos se suele usar el atajo <strong>Ctrl + H</strong>.
            </div>
        </section>

        <!-- SECCIÓN 4: GESTIÓN DE DISCOS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. Administración de Unidades de Disco Duro
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                La administración de almacenamiento no siempre requiere la terminal. Los entornos de escritorio ofrecen potentes herramientas gráficas para gestionar particiones, formatear unidades USB y monitorear la salud de los discos mediante tecnología S.M.A.R.T.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h4 class="font-black text-[#003366] mb-2">Concepto de Montaje</h4>
                    <p class="text-xs text-slate-600 leading-relaxed mb-4">
                        En Linux las unidades no reciben letras (como D: o E:). Un pendrive o disco secundario se debe "montar" (enlazar) dentro de una carpeta existente. La interfaz gráfica lo hace automáticamente bajo el directorio <code class="font-mono text-slate-800">/media/usuario/</code>.
                    </p>
                    <ul class="text-xs text-slate-500 space-y-1.5 font-medium">
                        <li><i class="fas fa-check text-emerald-500 mr-2"></i> <strong>Montar:</strong> Hacer el sistema de archivos accesible.</li>
                        <li><i class="fas fa-check text-emerald-500 mr-2"></i> <strong>Desmontar:</strong> Expulsión segura para evitar corrupción.</li>
                    </ul>
                </div>
                
                <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                    <h4 class="font-black text-[#003366] mb-2">Herramientas Gráficas</h4>
                    <ul class="text-xs text-slate-600 leading-relaxed space-y-3">
                        <li>
                            <strong class="text-indigo-600">GNOME Disks (Discos):</strong> Utilidad rápida instalada por defecto. Ideal para ver el estado del disco, formatear USBs rápidamente o cambiar permisos de montaje al inicio.
                        </li>
                        <li>
                            <strong class="text-blue-600">GParted:</strong> Herramienta avanzada indispensable. Permite redimensionar particiones en caliente, crear tablas de particiones (MBR/GPT) y gestionar formatos como Ext4, FAT32 o NTFS.
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 5: PREFERENCIAS DEL SISTEMA -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                5. Preferencias y Administración Gráfica
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                El <strong>Centro de Control</strong> (Settings) en Linux ha evolucionado para agrupar todas las tareas de administración básica de hardware y sistema sin necesidad de abrir una consola, facilitando la vida a usuarios corporativos y domésticos.
            </p>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div class="p-4 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
                    <div class="w-10 h-10 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm mb-3">
                        <i class="fas fa-wifi"></i>
                    </div>
                    <strong class="text-xs text-[#003366] block mb-1">Redes</strong>
                    <span class="text-[10px] text-slate-500">Configuración visual de interfaces, WiFi, VPN y proxies.</span>
                </div>
                <div class="p-4 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
                    <div class="w-10 h-10 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center font-bold text-sm mb-3">
                        <i class="fas fa-palette"></i>
                    </div>
                    <strong class="text-xs text-[#003366] block mb-1">Apariencia</strong>
                    <span class="text-[10px] text-slate-500">Temas oscuros, tamaño de tipografías y posición del Dock/Panel.</span>
                </div>
                <div class="p-4 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
                    <div class="w-10 h-10 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center font-bold text-sm mb-3">
                        <i class="fas fa-users-cog"></i>
                    </div>
                    <strong class="text-xs text-[#003366] block mb-1">Usuarios</strong>
                    <span class="text-[10px] text-slate-500">Creación de perfiles, gestión de contraseñas y permisos gráficos.</span>
                </div>
                <div class="p-4 bg-white border border-slate-200 rounded-xl text-center shadow-sm">
                    <div class="w-10 h-10 mx-auto bg-rose-50 text-rose-600 rounded-full flex items-center justify-center font-bold text-sm mb-3">
                        <i class="fas fa-keyboard"></i>
                    </div>
                    <strong class="text-xs text-[#003366] block mb-1">Atajos</strong>
                    <span class="text-[10px] text-slate-500">Asignación de teclas rápidas para lanzar herramientas (ej. Terminal).</span>
                </div>
            </div>
        </section>

        <!-- RESUMEN FINAL DEL TEMA -->
        <section class="bg-gradient-to-br from-[#001f3f] to-[#003366] p-8 md:p-12 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
            <i class="fas fa-window-maximize absolute -right-10 -bottom-10 text-white/5 text-[18rem] rotate-12 pointer-events-none"></i>
            
            <div class="relative z-10">
                <span class="text-xs font-black uppercase tracking-[0.3em] text-[#00aaff] block mb-2">Síntesis Formativa</span>
                <h3 class="text-3xl font-black uppercase text-white mb-6">Resumen Ejecutivo de la Unidad 2</h3>
                
                <div class="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">
                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Independencia Gráfica</h4>
                        <p class="text-slate-200">
                            La interfaz en Linux es modular. Un mismo sistema base puede ejecutar GNOME para estaciones robustas o XFCE para hardware limitado, sin afectar en absoluto la lógica central ni la estabilidad del sistema operativo.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Soberanía del Directorio /home</h4>
                        <p class="text-slate-200">
                            El directorio personal aísla a los usuarios. Todas las configuraciones visuales, cachés de navegación y documentos están confinados aquí, operando con archivos ocultos (.dotfiles) que evitan la alteración accidental.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Lógica de Montaje de Discos</h4>
                        <p class="text-slate-200">
                            Comprender que las unidades externas y secundarias se "montan" como subdirectorios dentro del árbol de directorios (en /media o /mnt) es vital para la correcta administración y respaldo de la información.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Potencia de Administración Visual</h4>
                        <p class="text-slate-200">
                            Aunque la terminal es la herramienta suprema, los entornos gráficos actuales proveen utilidades robustas (como GParted o los Centros de Control) para gestionar redes, usuarios y hardware de forma ágil y segura.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;