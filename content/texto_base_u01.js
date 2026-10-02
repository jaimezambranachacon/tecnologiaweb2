// content/texto_base_u01.js

const pag_texto_base_u01 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <!-- HEADER PRINCIPAL -->
    <header class="mb-20">
        <span class="text-[#00aaff] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fab fa-linux text-lg"></i> TEXTO GUÍA BASE / UNIDAD 1
        </span>
        <h1 class="text-4xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            FUNDAMENTOS E INTRODUCCIÓN A<br>
            <span class="text-[#00aaff]">SISTEMAS OPERATIVOS LIBRES</span>
        </h1>

        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl leading-relaxed">
            Antecedentes históricos, la filosofía del Software Libre y Open Source, estructura del sistema, requerimientos de hardware, jerarquía de directorios y el proceso de particionado e instalación de distribuciones Linux.
        </p>
        <div class="h-2 w-24 bg-[#00aaff] mt-8 rounded-full"></div>
    </header>

    <div class="max-w-5xl space-y-16">

        <!-- INTRODUCCIÓN AL TEMA -->
        <section class="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-8 border-[#003366] rounded-r-3xl shadow-sm">
            <h4 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-2">Fundamentación Teórica</h4>
            <p class="text-lg md:text-xl text-slate-800 leading-relaxed font-semibold italic mb-4">
                "El control de la infraestructura informática determina el nivel de soberanía tecnológica. Comprender la arquitectura de un sistema operativo libre no es solo dominar una herramienta técnica, sino adquirir la capacidad de adaptar y construir soluciones empresariales estables sin dependencias privativas."
            </p>
            <p class="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                Esta unidad sienta las bases teóricas y operativas sobre GNU/Linux. Iniciaremos explorando sus orígenes y filosofía, para luego analizar su arquitectura interna, los requisitos para su despliegue y, finalmente, abordar la preparación del disco y la instalación del sistema base.
            </p>
        </section>

        <!-- SECCIÓN 1: ANTECEDENTES Y BENEFICIOS -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. Antecedentes y Beneficios de Linux
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                A diferencia de los sistemas operativos comerciales, Linux nació en 1991 como un proyecto personal de Linus Torvalds, inspirado en Minix, con la intención de crear un núcleo (kernel) de tipo Unix gratuito y modificable. Al unirse con el proyecto GNU de Richard Stallman, se consolidó el sistema operativo completo GNU/Linux.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-base mb-1">Estabilidad y Seguridad</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Arquitectura robusta de permisos y separación estricta de usuarios. Es el estándar de facto en servidores de alta disponibilidad debido a su inmunidad frente a la mayoría de virus comerciales y su capacidad para funcionar años sin reiniciarse.
                    </p>
                </div>

                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <div class="w-10 h-10 bg-cyan-100 text-[#00aaff] rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-coins"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-base mb-1">Costo Cero por Licencia</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Permite a las organizaciones desplegar miles de servidores o estaciones de trabajo sin pagar licencias de uso, reduciendo drásticamente el TCO (Costo Total de Propiedad) en proyectos tecnológicos.
                    </p>
                </div>

                <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                    <div class="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-code-branch"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-base mb-1">Libertad de Modificación</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Acceso total al código fuente. Las empresas pueden adaptar el núcleo del sistema operativo a hardware específico o necesidades empresariales particulares sin restricciones legales.
                    </p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 2: SOFTWARE LIBRE VS OPEN SOURCE -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. Software Libre y Open Source
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Aunque a menudo se utilizan como sinónimos, representan dos filosofías distintas sobre el mismo modelo de desarrollo colaborativo de software.
            </p>

            <div class="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200 mb-6">
                <table class="w-full text-left border-collapse text-xs">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase tracking-wider">
                            <th class="p-3.5 font-black">Filosofía</th>
                            <th class="p-3.5 font-black">Enfoque Principal</th>
                            <th class="p-3.5 font-black">Las 4 Libertades / Principios</th>
                        </tr>
                    </thead>
                    <tbody class="text-slate-700 divide-y divide-slate-100">
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-slate-800">Software Libre (Free Software)</td>
                            <td class="p-3.5">Enfoque ético y moral apoyado por la FSF (Free Software Foundation). Prioriza los derechos y libertades de los usuarios.</td>
                            <td class="p-3.5">
                                0. Usar para cualquier propósito.<br>
                                1. Estudiar y modificar el código.<br>
                                2. Distribuir copias.<br>
                                3. Distribuir versiones modificadas.
                            </td>
                        </tr>
                        <tr class="hover:bg-slate-50">
                            <td class="p-3.5 font-bold text-slate-800">Código Abierto (Open Source)</td>
                            <td class="p-3.5">Enfoque práctico y técnico apoyado por la OSI (Open Source Initiative). Prioriza la calidad del código, la colaboración corporativa y el desarrollo rápido.</td>
                            <td class="p-3.5">
                                Código fuente disponible, permitiendo integración empresarial, pero permitiendo bajo ciertas licencias combinaciones con software privativo.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="p-4 bg-slate-50 border-l-4 border-[#00aaff] rounded-r-xl text-xs text-slate-700 leading-relaxed">
                <strong>Nota:</strong> GNU/Linux es un sistema dual que incorpora la base ética del Software Libre (licencia GPL) mientras impulsa el desarrollo tecnológico corporativo bajo el modelo Open Source.
            </div>
        </section>

        <!-- SECCIÓN 3: ESTRUCTURA DEL SISTEMA -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Estructura de un Sistema GNU/Linux
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                La arquitectura de Linux está diseñada en capas concéntricas, aislando el hardware de los usuarios finales para maximizar la seguridad y el rendimiento.
            </p>

            <div class="bg-slate-900 rounded-2xl p-6 text-white font-mono text-xs overflow-x-auto mb-6">
                <div class="text-slate-400 mb-2">// Modelo de Capas de GNU/Linux</div>
                <div class="text-emerald-400 border border-emerald-500/30 p-2 mb-2 rounded">[ Aplicaciones de Usuario (Navegadores, Editores, LibreOffice) ]</div>
                <div class="text-cyan-400 border border-cyan-500/30 p-2 mb-2 rounded">[ Shell (Terminal) / Entorno de Escritorio (GNOME, KDE) ]</div>
                <div class="text-blue-300 pl-4 mb-1">↑ Llamadas al Sistema (System Calls) ↓</div>
                <div class="text-yellow-400 border-2 border-yellow-500 p-3 mb-2 rounded font-bold bg-slate-800">
                    [ KERNEL (El Núcleo Linux): Gestión de memoria, procesos y drivers ]
                </div>
                <div class="text-slate-500 border border-slate-600 p-2 rounded bg-slate-950">[ Hardware Físico (CPU, RAM, Discos, Interfaces de Red) ]</div>
            </div>
        </section>

        <!-- SECCIÓN 4: REQUERIMIENTOS Y DISTRIBUCIONES -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. Distribuciones y Requerimientos del Sistema
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Una "Distribución" (Distro) es una versión específica de Linux que empaqueta el núcleo, el entorno gráfico y un conjunto de aplicaciones predeterminadas para un propósito específico. Cada familia tiene requerimientos distintos.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="p-4 bg-rose-50 border border-rose-200 rounded-xl">
                    <strong class="text-xs font-black text-rose-800 uppercase block mb-1">Familia Debian (Ej. Ubuntu, Mint)</strong>
                    <p class="text-xs text-rose-700 leading-relaxed mb-2">
                        Orientadas a la facilidad de uso y alta estabilidad. Utilizan el gestor de paquetes <code class="font-mono bg-rose-100 px-1 py-0.5 rounded">apt</code>.
                    </p>
                    <div class="bg-white/50 p-2 rounded text-[10px] text-rose-900 border border-rose-200">
                        <strong>Req. Mínimos (Ubuntu Desktop):</strong> Procesador Dual Core 2 GHz, 4 GB RAM, 25 GB Disco.
                    </div>
                </div>
                <div class="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <strong class="text-xs font-black text-blue-800 uppercase block mb-1">Familia Red Hat (Ej. Fedora, CentOS/Rocky)</strong>
                    <p class="text-xs text-blue-700 leading-relaxed mb-2">
                        El estándar en entornos corporativos y servidores empresariales. Utilizan <code class="font-mono bg-blue-100 px-1 py-0.5 rounded">dnf / yum</code>.
                    </p>
                    <div class="bg-white/50 p-2 rounded text-[10px] text-blue-900 border border-blue-200">
                        <strong>Req. Mínimos (Fedora Server):</strong> Procesador 2 GHz, 2 GB RAM, 20 GB Disco (Sin entorno gráfico).
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 5: JERARQUÍA DEL SISTEMA DE ARCHIVOS (FHS) -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                5. Jerarquía del Sistema de Archivos (Estándar FHS)
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-6">
                En Linux todo se representa como un archivo y la estructura no se divide en unidades como en Windows (C:, D:), sino que se organiza en un único árbol invertido estandarizado que nace desde el directorio raíz (<code>/</code>).
            </p>

            <div class="space-y-3 mb-6">
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm flex items-start gap-3">
                    <div class="w-8 h-8 rounded bg-slate-100 text-slate-600 flex items-center justify-center font-mono font-black text-lg flex-shrink-0">/</div>
                    <div>
                        <h5 class="text-xs font-black text-[#003366] uppercase mb-1">El Directorio Raíz (Root)</h5>
                        <p class="text-xs text-slate-600">Base absoluta del sistema de archivos. Todo directorio, partición física o unidad externa cuelga de aquí.</p>
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                        <strong class="text-xs font-mono text-blue-600">/bin y /sbin</strong>
                        <p class="text-[10px] text-slate-500 mt-1">Binarios esenciales. /bin para usuarios comunes (ej. ls, cp) y /sbin para administración del sistema (ej. ip, fdisk).</p>
                    </div>
                    <div class="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                        <strong class="text-xs font-mono text-emerald-600">/home y /root</strong>
                        <p class="text-[10px] text-slate-500 mt-1">Directorios personales. /home contiene los perfiles de usuarios estándar y /root es el directorio exclusivo del superusuario.</p>
                    </div>
                    <div class="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                        <strong class="text-xs font-mono text-purple-600">/etc</strong>
                        <p class="text-[10px] text-slate-500 mt-1">Archivos de configuración del sistema a nivel global. Modificables únicamente por el administrador.</p>
                    </div>
                    <div class="p-3 bg-slate-50 border border-slate-100 rounded-lg">
                        <strong class="text-xs font-mono text-amber-600">/var</strong>
                        <p class="text-[10px] text-slate-500 mt-1">Datos variables: registros de logs del sistema (/var/log), bases de datos (/var/lib/mysql) y colas de impresión.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 6: PARTICIONES -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                6. Particionamiento del Disco
            </h3>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Antes de instalar Linux, el disco duro debe dividirse lógicamente para optimizar el rendimiento, facilitar actualizaciones y recuperar el sistema en caso de desastres.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-xs">
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <strong class="font-bold text-[#003366] block mb-1">Partición Raíz ( / )</strong>
                    <p class="text-slate-500">Obligatoria. Contiene el núcleo, aplicaciones base y archivos de sistema. Formateada usualmente en Ext4, Btrfs o XFS.</p>
                </div>
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <strong class="font-bold text-[#003366] block mb-1">Partición Swap ( /swap )</strong>
                    <p class="text-slate-500">Memoria virtual o de intercambio. Suple a la memoria RAM cuando se satura, evitando el colapso del sistema.</p>
                </div>
                <div class="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <strong class="font-bold text-[#003366] block mb-1">Partición de Usuario ( /home )</strong>
                    <p class="text-slate-500">Separar /home en otra partición permite formatear la raíz y reinstalar Linux sin perder archivos personales.</p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 7: INSTALACIÓN Y GESTIÓN DE PAQUETES BÁSICA -->
        <section>
            <h3 class="text-2xl md:text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                7. Instalación y Gestores de Paquetes
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] block mb-1">El Proceso de Instalación</span>
                    <h4 class="text-lg font-black text-[#003366] uppercase mb-2">Pasos Universales</h4>
                    <ul class="text-xs text-slate-600 leading-relaxed space-y-2 list-disc pl-4">
                        <li>Creación de un medio Live USB bootable.</li>
                        <li>Selección de idioma y configuración de teclado.</li>
                        <li>Configuración de red (automática por DHCP o estática).</li>
                        <li>Asignación de particiones y montaje ( /, /home, swap ).</li>
                        <li>Creación del usuario estándar y contraseña de Root.</li>
                        <li>Instalación del gestor de arranque (GRUB).</li>
                    </ul>
                </div>
                <div class="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">
                    <span class="text-[10px] font-black uppercase tracking-widest text-indigo-600 block mb-1">Post-Instalación</span>
                    <h4 class="text-lg font-black text-[#003366] uppercase mb-2">Manejadores de Paquetes</h4>
                    <p class="text-xs text-slate-600 leading-relaxed mb-3">
                        En Linux, el software no se descarga de páginas web, sino de repositorios centralizados y seguros mediante un manejador (gestor) de paquetes desde la terminal.
                    </p>
                    <div class="bg-slate-800 rounded p-3 text-[10px] text-green-400 font-mono">
                        $ sudo apt update<br>
                        $ sudo apt install firefox<br>
                        $ sudo apt upgrade
                    </div>
                </div>
            </div>
        </section>

        <!-- RESUMEN FINAL DEL TEMA -->
        <section class="bg-gradient-to-br from-[#001f3f] to-[#003366] p-8 md:p-12 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
            <i class="fas fa-layer-group absolute -right-10 -bottom-10 text-white/5 text-[18rem] rotate-12 pointer-events-none"></i>
            
            <div class="relative z-10">
                <span class="text-xs font-black uppercase tracking-[0.3em] text-[#00aaff] block mb-2">Síntesis Formativa</span>
                <h3 class="text-3xl font-black uppercase text-white mb-6">Resumen Ejecutivo de la Unidad 1</h3>
                
                <div class="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">
                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Filosofía y Arquitectura</h4>
                        <p class="text-slate-200">
                            GNU/Linux combina la ética del código abierto con una arquitectura de capas inquebrantable, separando rigurosamente el hardware, el núcleo (Kernel) y el entorno de usuario, lo que lo convierte en un sistema altamente estable y seguro.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Organización del Directorio Raíz</h4>
                        <p class="text-slate-200">
                            Todo el sistema operativo respeta el estándar FHS (Filesystem Hierarchy Standard), donde desde la raíz (/) se derivan carpetas específicas inmutables para archivos de sistema, usuarios, configuraciones y binarios de ejecución.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Particionamiento Inteligente</h4>
                        <p class="text-slate-200">
                            La correcta separación de la raíz (/), la memoria de intercambio (swap) y el espacio de usuario (/home) es una práctica esencial que garantiza la protección de datos personales ante futuras reinstalaciones del sistema operativo.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Gestión Centralizada de Software</h4>
                        <p class="text-slate-200">
                            A diferencia de otros sistemas, la instalación y actualización de software se ejecuta de forma centralizada a través de repositorios seguros manejados por gestores de paquetes como APT o DNF.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;