// content/texto_base_u03.js

const pag_texto_base_u03 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <!-- HEADER PRINCIPAL -->
    <header class="mb-20">
        <span class="text-[#00aaff] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-terminal text-lg"></i> TEXTO GUÍA BASE / UNIDAD 3
        </span>
        <h1 class="text-4xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            MANEJO DE COMANDOS Y<br>
            <span class="text-[#00aaff]">ADMINISTRACIÓN POR SHELL</span>
        </h1>

        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl leading-relaxed">
            Introducción a la terminal de Linux, editores de texto en consola, gestión avanzada de archivos y directorios, monitoreo de procesos y administración de permisos de usuarios.
        </p>
        <div class="h-2 w-24 bg-[#00aaff] mt-8 rounded-full"></div>
    </header>

    <div class="max-w-5xl space-y-16">

        <!-- INTRODUCCIÓN AL TEMA -->
        <section class="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-8 border-[#003366] rounded-r-3xl shadow-sm">
            <h4 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-2">Fundamentación Teórica</h4>
            <p class="text-lg md:text-xl text-slate-800 leading-relaxed font-semibold italic mb-4">
                "La interfaz gráfica hace que las tareas sencillas sean fáciles, pero la línea de comandos hace que las tareas complejas sean posibles. En el entorno de servidores corporativos, la terminal no es una alternativa, es la única vía hacia el control total."
            </p>
            <p class="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                Esta unidad marca la transición de un usuario gráfico a un administrador de sistemas reales. Descubriremos qué es la Shell, cómo navegar por el sistema sin usar el ratón, cómo manipular procesos que consumen recursos y cómo asegurar archivos mediante el sistema de permisos de Linux.
            </p>
        </section>

        <!-- SECCIÓN 1: INTRODUCCIÓN A LA SHELL -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. ¿Qué es la Shell y la Terminal?
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                A menudo se confunden los términos, pero técnicamente son componentes distintos que trabajan en conjunto para permitir al usuario comunicarse con el núcleo (Kernel) del sistema operativo.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col justify-between shadow-lg">
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <i class="fas fa-terminal text-cyan-400 text-2xl"></i>
                            <h5 class="font-black text-white text-lg">La Terminal (Emulador)</h5>
                        </div>
                        <p class="text-slate-400 text-xs leading-relaxed mb-4">
                            Es simplemente un programa gráfico (una ventana de texto) que captura las pulsaciones del teclado y muestra texto en la pantalla. Ejemplos: GNOME Terminal, Konsole, Xterm.
                        </p>
                    </div>
                </div>

                <div class="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col justify-between shadow-lg relative overflow-hidden">
                    <div class="absolute right-0 top-0 opacity-10 text-[6rem] leading-none pointer-events-none text-white">#</div>
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <i class="fas fa-code text-emerald-400 text-2xl"></i>
                            <h5 class="font-black text-white text-lg">La Shell (Intérprete)</h5>
                        </div>
                        <p class="text-slate-400 text-xs leading-relaxed mb-4">
                            Es el programa oculto detrás de la terminal que interpreta los comandos escritos, ejecuta las aplicaciones y devuelve los resultados. El estándar en casi todas las distribuciones es <strong>Bash (Bourne Again Shell)</strong> o <strong>Zsh</strong>.
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="bg-slate-800 p-4 rounded-xl text-slate-300 font-mono text-xs border border-slate-700 mt-4">
                <span class="text-emerald-400">usuario@servidor</span>:<span class="text-blue-400">~</span>$ 
                <span class="text-slate-400 ml-2"># Este es el 'Prompt'. Indica usuario, máquina, ubicación (~) y que somos un usuario normal ($). Si vemos un #, somos Root.</span>
            </div>
        </section>

        <!-- SECCIÓN 2: ARCHIVOS Y DIRECTORIOS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. Comandos para Archivos y Directorios
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                La navegación y manipulación de archivos es la tarea más repetitiva de un administrador. Aprender estos comandos de memoria es fundamental para la fluidez operativa.
            </p>

            <div class="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200 mb-6">
                <table class="w-full text-left border-collapse text-xs">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase tracking-wider">
                            <th class="p-3.5 font-black w-1/4">Comando</th>
                            <th class="p-3.5 font-black w-1/2">Propósito y Uso</th>
                            <th class="p-3.5 font-black w-1/4">Ejemplo Frecuente</th>
                        </tr>
                    </thead>
                    <tbody class="text-slate-700 divide-y divide-slate-100">
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold font-mono text-blue-600">pwd</td>
                            <td class="p-3.5">Muestra la ruta absoluta del directorio actual.</td>
                            <td class="p-3.5 font-mono text-slate-500">$ pwd</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold font-mono text-blue-600">ls -la</td>
                            <td class="p-3.5">Lista el contenido de un directorio con detalles (permisos, dueño) e incluyendo archivos ocultos.</td>
                            <td class="p-3.5 font-mono text-slate-500">$ ls -la /etc/</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold font-mono text-blue-600">cd</td>
                            <td class="p-3.5">Cambia de directorio. Usar "cd .." para subir un nivel, o solo "cd" para ir a la carpeta home.</td>
                            <td class="p-3.5 font-mono text-slate-500">$ cd /var/log/</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold font-mono text-blue-600">cp -r</td>
                            <td class="p-3.5">Copia archivos o directorios completos de un lugar a otro (el -r es para que sea recursivo).</td>
                            <td class="p-3.5 font-mono text-slate-500">$ cp -r dir1/ dir2/</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold font-mono text-blue-600">mv</td>
                            <td class="p-3.5">Mueve archivos de lugar. También es el comando usado para renombrar archivos en Linux.</td>
                            <td class="p-3.5 font-mono text-slate-500">$ mv old.txt new.txt</td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold font-mono text-rose-600">rm -rf</td>
                            <td class="p-3.5">Elimina archivos. Con los parámetros -rf borra carpetas forzosamente. ¡Usar con precaución!</td>
                            <td class="p-3.5 font-mono text-slate-500">$ rm -rf basura/</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- SECCIÓN 3: EDITORES DE TEXTO EN CONSOLA -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Editores de Texto en Linux
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Cuando trabajamos en servidores no tenemos editores gráficos como VS Code o Notepad. Modificar archivos de configuración, código o scripts se hace directamente en la terminal.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <div class="flex items-center gap-3 mb-2">
                        <i class="fas fa-file-signature text-blue-500 text-xl"></i>
                        <h4 class="font-black text-[#003366] uppercase text-sm">NANO (Amigable)</h4>
                    </div>
                    <p class="text-xs text-slate-600 leading-relaxed mb-3">
                        Es el editor recomendado para principiantes. Su interfaz es intuitiva y muestra las combinaciones de teclas en la parte inferior (ej. <code class="bg-slate-100 px-1 rounded">Ctrl+O</code> para guardar, <code class="bg-slate-100 px-1 rounded">Ctrl+X</code> para salir).
                    </p>
                    <div class="bg-slate-900 rounded p-2 text-[10px] text-emerald-400 font-mono">
                        $ nano /etc/hostname
                    </div>
                </div>
                
                <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <div class="flex items-center gap-3 mb-2">
                        <i class="fas fa-keyboard text-green-600 text-xl"></i>
                        <h4 class="font-black text-[#003366] uppercase text-sm">VIM (Profesional)</h4>
                    </div>
                    <p class="text-xs text-slate-600 leading-relaxed mb-3">
                        Extremadamente potente pero con una curva de aprendizaje alta. Funciona por "modos" (Modo Comando y Modo Inserción). Se sale con <code class="bg-slate-100 px-1 rounded">:wq</code> (escribir y salir).
                    </p>
                    <div class="bg-slate-900 rounded p-2 text-[10px] text-emerald-400 font-mono">
                        $ vim script.sh
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 4: GESTIÓN DE PROCESOS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. Monitoreo y Comandos para Procesos
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Un proceso es cualquier programa en ejecución. En Linux, cada proceso recibe un identificador único llamado <strong>PID</strong> (Process ID). Como administrador, debes saber identificar procesos colgados y finalizarlos.
            </p>

            <div class="space-y-4 mb-6">
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col md:flex-row gap-4 items-start">
                    <div class="w-12 h-12 rounded bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        <i class="fas fa-list-ol"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm mb-1">ps aux / top / htop</h5>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            <code class="font-mono text-indigo-600">ps aux</code> muestra una foto instantánea de todos los procesos actuales. <code class="font-mono text-indigo-600">top</code> y <code class="font-mono text-indigo-600">htop</code> muestran una interfaz interactiva y en tiempo real del consumo de CPU y RAM, similar al Administrador de Tareas.
                        </p>
                    </div>
                </div>
                
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl flex flex-col md:flex-row gap-4 items-start">
                    <div class="w-12 h-12 rounded bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-lg flex-shrink-0">
                        <i class="fas fa-skull-crossbones"></i>
                    </div>
                    <div>
                        <h5 class="font-bold text-[#003366] text-sm mb-1">kill y killall</h5>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Se usan para mandar señales a los procesos. Si un programa se traba, usar <code class="font-mono text-rose-600">kill -9 [PID]</code> fuerza su terminación inmediata. <code class="font-mono text-rose-600">killall [nombre]</code> finaliza todos los procesos con el mismo nombre.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 5: PERMISOS Y USUARIOS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                5. Administración Básica: Permisos y Usuarios
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                La seguridad de Linux se basa en quién es el dueño de un archivo y qué pueden hacer los demás con él. Cada archivo tiene tres niveles de propiedad: Dueño (User), Grupo (Group) y Otros (Others).
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                    <h4 class="font-black text-[#003366] text-sm uppercase mb-3">La Notación Octal (Comando chmod)</h4>
                    <p class="text-xs text-slate-600 mb-3">Los permisos se calculan sumando valores numéricos:</p>
                    <ul class="text-xs text-slate-600 space-y-2 mb-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <li><strong class="text-blue-600">4</strong> = Lectura (Read - r)</li>
                        <li><strong class="text-amber-600">2</strong> = Escritura (Write - w)</li>
                        <li><strong class="text-emerald-600">1</strong> = Ejecución (Execute - x)</li>
                        <li><strong class="text-slate-400">0</strong> = Sin permisos (-)</li>
                    </ul>
                    <div class="bg-slate-900 rounded p-3 text-[10px] text-emerald-400 font-mono">
                        $ chmod 755 archivo.sh<br>
                        <span class="text-slate-400"># 7 (dueño lee, escribe, ejecuta)<br># 5 (grupo lee y ejecuta)<br># 5 (otros leen y ejecutan)</span>
                    </div>
                </div>

                <div>
                    <h4 class="font-black text-[#003366] text-sm uppercase mb-3">Superusuario y Dueños</h4>
                    <p class="text-xs text-slate-600 mb-3">Para tareas críticas o cambiar el dueño de un archivo, se usa el prefijo <strong>sudo</strong> (SuperUser DO).</p>
                    <div class="space-y-3">
                        <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
                            <strong class="font-mono text-indigo-600 text-xs block mb-1">sudo chown usuario archivo.txt</strong>
                            <p class="text-[10px] text-slate-500">Cambia al propietario (owner) del archivo seleccionado.</p>
                        </div>
                        <div class="bg-slate-50 p-3 rounded-lg border border-slate-200">
                            <strong class="font-mono text-indigo-600 text-xs block mb-1">sudo useradd -m jzambrana</strong>
                            <p class="text-[10px] text-slate-500">Crea un nuevo usuario en el sistema operativo y le genera su propia carpeta en /home.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- RESUMEN FINAL DEL TEMA -->
        <section class="bg-gradient-to-br from-[#001f3f] to-[#003366] p-8 md:p-12 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
            <i class="fas fa-terminal absolute -right-10 -bottom-10 text-white/5 text-[18rem] rotate-12 pointer-events-none"></i>
            
            <div class="relative z-10">
                <span class="text-xs font-black uppercase tracking-[0.3em] text-[#00aaff] block mb-2">Síntesis Formativa</span>
                <h3 class="text-3xl font-black uppercase text-white mb-6">Resumen Ejecutivo de la Unidad 3</h3>
                
                <div class="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">
                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Agilidad Operativa</h4>
                        <p class="text-slate-200">
                            El uso de comandos base como <code class="font-mono text-white/80 bg-black/20 px-1 rounded">ls</code>, <code class="font-mono text-white/80 bg-black/20 px-1 rounded">cd</code>, <code class="font-mono text-white/80 bg-black/20 px-1 rounded">cp</code> y <code class="font-mono text-white/80 bg-black/20 px-1 rounded">rm</code> permite una gestión de archivos drásticamente más rápida y precisa que cualquier explorador gráfico, especialmente al tratar con miles de archivos a la vez.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Independencia Gráfica en Edición</h4>
                        <p class="text-slate-200">
                            Aprender a usar editores de terminal como Nano o Vim asegura que, ante la caída del entorno gráfico o en conexiones remotas (SSH), se mantenga la capacidad total de configurar y reparar el sistema.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Control Absoluto de Recursos</h4>
                        <p class="text-slate-200">
                            Monitorear procesos mediante <code class="font-mono text-white/80 bg-black/20 px-1 rounded">htop</code> y enviar señales de terminación con <code class="font-mono text-white/80 bg-black/20 px-1 rounded">kill</code> es una habilidad vital para mantener servidores en línea, liberando memoria y CPU de tareas atascadas.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Seguridad Matemática</h4>
                        <p class="text-slate-200">
                            La administración de permisos octales (lectura = 4, escritura = 2, ejecución = 1) no es un capricho, es el muro de defensa que impide que un script malicioso altere componentes vitales del núcleo del sistema.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;