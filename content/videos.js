// content/videos.js

const pag_videos = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-16">
        <span class="text-[#00aaff] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-play-circle text-base"></i> MATERIAL AUDIOVISUAL • SIS-0211[cite: 1]
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            VIDEOTECA<br>
            <span class="text-[#00aaff]">DE APRENDIZAJE</span>
        </h1>
        <p class="mt-4 text-xl text-slate-500 font-light max-w-3xl leading-relaxed">
            Selección de recursos audiovisuales clave para dominar Linux, la terminal, redes y pruebas de penetración en entornos controlados.
        </p>
        <div class="h-2 w-24 bg-[#003366] mt-6"></div>
    </header>

    <div class="max-w-4xl space-y-6">

        <!-- VIDEO 1: Comandos Básicos Terminal -->
        <a href="https://youtu.be/3gRhwwkeiog?si=CN04AL75au79Uue4" target="_blank" rel="noopener noreferrer" 
           class="group flex items-center p-4 md:p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-[#00aaff] hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-[#003366] flex items-center justify-center text-white group-hover:bg-[#00aaff] group-hover:scale-110 transition-all shadow-md flex-shrink-0">
                <i class="fas fa-play text-2xl ml-1"></i>
            </div>
            <div class="ml-6">
                <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] mb-1 block">Unidad 1 • Fundamentos Terminal</span>
                <h3 class="text-xl md:text-2xl font-black text-[#003366] group-hover:text-[#00aaff] transition-colors leading-tight">
                    Curso de terminal y línea de comandos GNU/Linux - Introducción
                </h3>
                <p class="text-sm text-slate-500 mt-1">
                    Beneficios de la línea de comandos de Linux y ahorro de recursos usando la terminal.
                </p>
            </div>
        </a>

        <!-- VIDEO 2: Novedades Ubuntu 24.04 -->
        <a href="https://www.youtube.com/watch?v=tiQau8ti1-Q" target="_blank" rel="noopener noreferrer" 
           class="group flex items-center p-4 md:p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-[#00aaff] hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-[#003366] flex items-center justify-center text-white group-hover:bg-[#00aaff] group-hover:scale-110 transition-all shadow-md flex-shrink-0">
                <i class="fas fa-play text-2xl ml-1"></i>
            </div>
            <div class="ml-6">
                <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] mb-1 block">Unidad 2 • Novedades Ubuntu</span>
                <h3 class="text-xl md:text-2xl font-black text-[#003366] group-hover:text-[#00aaff] transition-colors leading-tight">
                    ¡Ubuntu se está poniendo MÁS BUENO! 24.04 LTS
                </h3>
                <p class="text-sm text-slate-500 mt-1">
                    Mejoras de la versión 24.04 LTS, cambios en el proceso de instalación y un repaso del nuevo monitor del sistema.
                </p>
            </div>
        </a>

        <!-- VIDEO 3: Curso Kali Linux Completo -->
        <a href="https://www.youtube.com/watch?v=P7jvr_dnD8U" target="_blank" rel="noopener noreferrer" 
           class="group flex items-center p-4 md:p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-[#00aaff] hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-[#003366] flex items-center justify-center text-white group-hover:bg-[#00aaff] group-hover:scale-110 transition-all shadow-md flex-shrink-0">
                <i class="fas fa-play text-2xl ml-1"></i>
            </div>
            <div class="ml-6">
                <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] mb-1 block">Unidad 3 • Seguridad y Hacking Ético</span>
                <h3 class="text-xl md:text-2xl font-black text-[#003366] group-hover:text-[#00aaff] transition-colors leading-tight">
                    Curso KALI LINUX COMPLETO 2024 | Aprende HACKING ÉTICO
                </h3>
                <p class="text-sm text-slate-500 mt-1">
                    Instalación de Kali Linux, gestión de permisos, reconocimiento de puertos usando NMAP, y explotación de vulnerabilidades con Metasploit y Burpsuite.
                </p>
            </div>
        </a>

        <!-- VIDEO 4: Comandos Básicos (Debian, Ubuntu, Mint) -->
        <a href="https://www.youtube.com/watch?v=BZN7Tqeu8eA" target="_blank" rel="noopener noreferrer" 
           class="group flex items-center p-4 md:p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-[#00aaff] hover:shadow-xl transition-all duration-300">
            <div class="w-16 h-16 rounded-full bg-[#003366] flex items-center justify-center text-white group-hover:bg-[#00aaff] group-hover:scale-110 transition-all shadow-md flex-shrink-0">
                <i class="fas fa-play text-2xl ml-1"></i>
            </div>
            <div class="ml-6">
                <span class="text-[10px] font-black uppercase tracking-widest text-[#00aaff] mb-1 block">Unidad 4 • Administración Sistema</span>
                <h3 class="text-xl md:text-2xl font-black text-[#003366] group-hover:text-[#00aaff] transition-colors leading-tight">
                    Comandos básicos de Linux, nivel iniciante (Debian, Ubuntu, Mint) - Primera parte
                </h3>
                <p class="text-sm text-slate-500 mt-1">
                    Actualización del sistema (apt update y upgrade) e instalación y desinstalación de programas usando el gestor de paquetes apt.
                </p>
            </div>
        </a>

    </div>
</div>
`;