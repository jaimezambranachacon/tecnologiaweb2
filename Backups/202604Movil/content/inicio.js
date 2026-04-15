// content/inicio.js
const pag_inicio = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-16">
        <div class="flex items-center gap-4 mb-4">
            <span class="bg-[#00aaff] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                Ciclo Académico 2026
            </span>
        </div>
        <h1 class="text-5xl md:text-7xl font-black text-[#003366] tracking-tighter uppercase leading-none">
            INGENIERÍA<br>
            <span class="text-[#00aaff]">WEB II</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Bienvenido al portal de aprendizaje. Aquí transitaremos desde la arquitectura robusta de <strong>Laravel</strong> hasta el desarrollo de aplicaciones móviles modernas con <strong>React Native</strong>.
        </p>
        <div class="h-2 w-24 bg-[#003366] mt-8"></div>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mb-16">
        <div class="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all">
            <i class="fab fa-laravel text-4xl text-[#003366] mb-4"></i>
            <h3 class="text-xl font-black text-[#003366] uppercase mb-2">Backend Master</h3>
            <p class="text-sm text-slate-500 leading-relaxed">
                Dominaremos el ecosistema de Laravel 13, desde migraciones y Eloquent hasta la creación de APIs RESTful profesionales.
            </p>
        </div>

        <div class="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:shadow-xl transition-all">
            <i class="fab fa-react text-4xl text-[#00aaff] mb-4"></i>
            <h3 class="text-xl font-black text-[#003366] uppercase mb-2">Mobile First</h3>
            <p class="text-sm text-slate-500 leading-relaxed">
                Aprenderemos a consumir nuestras APIs utilizando React Native, convirtiendo lógica web en experiencias móviles nativas.
            </p>
        </div>
    </div>

    <section class="bg-[#003366] p-10 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
        <div class="relative z-10">
            <h4 class="text-[#00aaff] font-black uppercase text-xs tracking-widest mb-2">Mensaje del Docente</h4>
            <p class="text-2xl font-bold italic leading-tight mb-6">
                "Este entorno está diseñado para que experimentes el flujo real de un Ingeniero de Software."
            </p>
            <div class="flex items-center gap-4">
                <div class="h-12 w-12 rounded-full bg-[#00aaff] flex items-center justify-center font-black">JZ</div>
                <div>
                    <p class="text-sm font-bold">Ing. Jaime Zambrana Chacon</p>
                    <p class="text-[10px] text-blue-300 uppercase tracking-widest">Docente UPDS - Facultad de Ingeniería</p>
                </div>
            </div>
        </div>
        <i class="fas fa-code absolute -right-10 -bottom-10 text-white/5 text-[15rem]"></i>
    </section>

</div>
`;