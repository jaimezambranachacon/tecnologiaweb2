// content/inicio.js
const pag_inicio = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-16">
        <div class="flex items-center gap-3 mb-4">
            <span class="bg-[#003366] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                Facultad de Ingeniería
            </span>
            <span class="border border-slate-200 px-3 py-1 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Gestión 2026
            </span>
        </div>
        <h1 class="text-5xl md:text-7xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            Programación<br>
            <span class="text-[#00aaff]">Móvil I</span>
        </h1>
        <div class="h-2 w-24 bg-[#003366] mt-8"></div>
    </header>

    <div class="max-w-4xl space-y-12">
        <p class="text-2xl md:text-3xl text-slate-600 leading-tight font-light">
            Bienvenido al siguiente nivel de la ingeniería. Aquí, el código deja de vivir solo en el navegador para convertirse en <strong class="text-[#003366] font-black italic">experiencias nativas</strong> en la palma de la mano.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">
            <div class="group">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <h4 class="text-[#003366] font-black uppercase text-xs tracking-widest">De la Web al App</h4>
                </div>
                <p class="text-slate-500 leading-relaxed text-sm">
                    Evolucionamos tu stack de <strong>React JS</strong> hacia <strong>React Native</strong>. No solo creamos interfaces; construimos sistemas móviles que consumen las APIs que diseñaste en el Backend.
                </p>
            </div>

            <div class="group">
                <div class="flex items-center gap-3 mb-4">
                    <div class="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-all">
                        <i class="fas fa-mobile-alt"></i>
                    </div>
                    <h4 class="text-[#003366] font-black uppercase text-xs tracking-widest">Enfoque Nativo</h4>
                </div>
                <p class="text-slate-500 leading-relaxed text-sm">
                    Dominaremos el despliegue multiplataforma con <strong>Expo</strong>, aprendiendo a gestionar el ciclo de vida de una aplicación tanto en <strong>Android</strong> como en <strong>iOS</strong>.
                </p>
            </div>
        </div>
    </div>

    <section class="mt-20 p-8 md:p-12 bg-slate-50 rounded-[3rem] border border-slate-100 relative overflow-hidden">
        <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div class="flex-1">
                <h3 class="text-xl font-black text-[#003366] uppercase mb-4">El Desafío del Semestre</h3>
                <p class="text-slate-500 text-sm leading-relaxed mb-6">
                    Tu proyecto formativo consistirá en resolver un problema real de nuestro contexto local, integrando una arquitectura <strong>Full-Stack</strong>: un potente cerebro en la nube (Laravel) y una interfaz móvil de alto rendimiento (React Native).
                </p>
                <div class="flex gap-4">
                    <div class="text-center">
                        <p class="text-2xl font-black text-[#00aaff]">20</p>
                        <p class="text-[9px] uppercase font-bold text-slate-400">Días de Sprint</p>
                    </div>
                    <div class="w-px h-10 bg-slate-200"></div>
                    <div class="text-center">
                        <p class="text-2xl font-black text-[#00aaff]">100%</p>
                        <p class="text-[9px] uppercase font-bold text-slate-400">Efectividad API</p>
                    </div>
                </div>
            </div>
            <div class="w-48 h-48 bg-white rounded-3xl shadow-2xl flex items-center justify-center p-6 transform rotate-3 hover:rotate-0 transition-transform">
                <i class="fas fa-code-branch text-6xl text-slate-200"></i>
            </div>
        </div>
    </section>

    <footer class="mt-16 border-t border-slate-100 pt-8 flex justify-between items-center">
        <p class="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Ing. Jaime Zambrana Chacon • UPDS</p>
        <div class="flex gap-4 text-slate-300">
            <i class="fab fa-react"></i>
            <i class="fab fa-laravel"></i>
            <i class="fab fa-android"></i>
        </div>
    </footer>
</div>
`;