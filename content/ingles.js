// content/duo_upds.js

// 1. DATA CORE: Mantenible y escalable
const duo_history = [
    {
        mes: "Marzo 2026",
        principal: true, // Este aparecerá en el Podio
        estudiantes: [
            { posicion: 1, nombre: "Juan Andres Revollo", xp: 43193, tiempo: "9h 31m", tarea: "Finalizada", foto: "https://lh3.googleusercontent.com/contacts/AG6tpzGpCAKlUy3R0Pz9q47AI-_clPciX73f5Iug9BZZEwdU-c9mPhVa=s408-p-k-rw-no" },
            { posicion: 2, nombre: "Cristian Eduardo Flores", xp: 41755, tiempo: "52h", tarea: "TW2", foto: "https://lh3.googleusercontent.com/contacts/AG6tpzFEigGdP3RDcvl9aXQkL_7hjvor1J0Qgtqe1MOznifDZ3yocS74=s408-p-k-rw-no" },
            { posicion: 3, nombre: "Enzo Ayala", xp: 13319, tiempo: "5h 56m", tarea: "Finalizada", foto: "https://lh3.googleusercontent.com/contacts/AG6tpzGomC6q55A4TPF2miWX-1ZLSbBjKIe6Byv0LNzJdegkprSZGeux=s408-p-k-rw-no" }
        ]
    },
    {
        mes: "Febrero 2026",
        principal: false, // Este aparecerá en la sección de Históricos
        estudiantes: [
            { posicion: 1, nombre: "Cristian Eduardo Flores Ponce", xp: 37731, foto: "https://lh3.googleusercontent.com/contacts/AG6tpzFEigGdP3RDcvl9aXQkL_7hjvor1J0Qgtqe1MOznifDZ3yocS74=s272-p-k-rw-no" },
            { posicion: 2, nombre: "Jhery Gilbert Leon Carballo", xp: 31494, foto: "https://lh3.googleusercontent.com/contacts/AG6tpzHQRIzsNCCQgGcthflABShXHmMHUuQWLKYjKu8LLI1RpulbxA6j=s272-p-k-rw-no" },
            { posicion: 3, nombre: "Camila Isabel Fernandez Tarabillo", xp: 21360, foto: "https://lh3.googleusercontent.com/contacts/AG6tpzHUco70w1GJM3ysAtLmCdCtxYIHC_lm-cSWSnZtkC3qlT8LewfV=s272-p-k-rw-no" }
        ]
    }
];

// 2. LOGIC: Filtrado de datos
const mesActual = duo_history.find(h => h.principal);
const mesesPasados = duo_history.filter(h => !h.principal);

// 3. UI ESTRUCTURE
const pag_ingles = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 font-sans">
    
    <header class="mb-16">
        <span class="text-[#58cc02] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-trophy"></i> HALL OF FAME
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            DUO <span class="text-[#58cc02]">UPDS</span>
        </h1>
        <div class="h-2 w-24 bg-[#58cc02] mt-6"></div>
    </header>

    <section class="mb-32">
        <h3 class="text-3xl font-black text-[#003366] uppercase text-center mb-16 italic">
            Current Champions: <span class="text-[#58cc02]">${mesActual.mes}</span>
        </h3>
        
        <div class="flex flex-col md:flex-row items-end justify-center gap-6 max-w-5xl mx-auto">
            <div class="w-full md:w-1/3 bg-slate-50 border-t-8 border-slate-300 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-lg transform md:-translate-y-6 transition-hover hover:scale-105">
                <img src="${mesActual.estudiantes[1].foto}" class="w-24 h-24 rounded-full border-4 border-slate-300 mb-4 bg-white shadow-sm">
                <div class="bg-slate-300 text-slate-800 font-black px-4 py-1 rounded-full text-[10px] tracking-widest mb-4 uppercase">2nd Place</div>
                <h4 class="text-lg font-black text-[#003366] leading-tight">${mesActual.estudiantes[1].nombre}</h4>
                <p class="text-[#58cc02] font-black text-2xl mt-2">${mesActual.estudiantes[1].xp.toLocaleString()} <span class="text-xs text-slate-400 font-normal">XP</span></p>
                <p class="text-[10px] text-slate-400 uppercase mt-2 font-bold tracking-widest italic">Time: ${mesActual.estudiantes[1].tiempo}</p>
            </div>

            <div class="w-full md:w-1/3 bg-gradient-to-b from-yellow-50 to-white border-t-8 border-yellow-400 rounded-[2.5rem] p-10 flex flex-col items-center text-center shadow-2xl z-10 transition-hover hover:scale-110">
                <i class="fas fa-crown text-4xl text-yellow-400 mb-2"></i>
                <img src="${mesActual.estudiantes[0].foto}" class="w-32 h-32 rounded-full border-4 border-yellow-400 mb-4 bg-white shadow-md">
                <div class="bg-yellow-400 text-yellow-900 font-black px-6 py-1 rounded-full text-xs tracking-widest mb-4 uppercase italic">Champion</div>
                <h4 class="text-xl font-black text-[#003366] leading-tight">${mesActual.estudiantes[0].nombre}</h4>
                <p class="text-[#58cc02] font-black text-4xl mt-3">${mesActual.estudiantes[0].xp.toLocaleString()} <span class="text-sm text-slate-400 font-normal">XP</span></p>
                <p class="text-[10px] text-slate-400 uppercase mt-2 font-bold tracking-widest italic">Time: ${mesActual.estudiantes[0].tiempo}</p>
            </div>

            <div class="w-full md:w-1/3 bg-slate-50 border-t-8 border-orange-400 rounded-[2rem] p-8 flex flex-col items-center text-center shadow-lg transition-hover hover:scale-105">
                <img src="${mesActual.estudiantes[2].foto}" class="w-24 h-24 rounded-full border-4 border-orange-400 mb-4 bg-white shadow-sm">
                <div class="bg-orange-400 text-white font-black px-4 py-1 rounded-full text-[10px] tracking-widest mb-4 uppercase">3rd Place</div>
                <h4 class="text-lg font-black text-[#003366] leading-tight">${mesActual.estudiantes[2].nombre}</h4>
                <p class="text-[#58cc02] font-black text-2xl mt-2">${mesActual.estudiantes[2].xp.toLocaleString()} <span class="text-xs text-slate-400 font-normal">XP</span></p>
                <p class="text-[10px] text-slate-400 uppercase mt-2 font-bold tracking-widest italic">Time: ${mesActual.estudiantes[2].tiempo}</p>
            </div>
        </div>
    </section>

    <section class="mb-24">
        <h3 class="text-xl font-black text-[#003366] uppercase mb-8 flex items-center gap-3">
            <i class="fas fa-history text-slate-400"></i> Past Seasons
        </h3>
        
        <div class="flex overflow-x-auto pb-8 gap-6 snap-x">
            ${mesesPasados.map(mes => `
                <div class="min-w-[320px] bg-slate-50 rounded-3xl p-6 border border-slate-100 snap-start shadow-sm hover:shadow-md transition-all">
                    <h4 class="text-sm font-black text-slate-400 mb-4 uppercase tracking-widest">${mes.mes}</h4>
                    <div class="space-y-4">
                        ${mes.estudiantes.map(est => `
                            <div class="flex items-center justify-between bg-white p-3 rounded-2xl border border-slate-50">
                                <div class="flex items-center gap-3">
                                    <div class="relative">
                                        <img src="${est.foto}" class="w-10 h-10 rounded-full border-2 ${est.posicion === 1 ? 'border-yellow-400' : 'border-slate-200'}">
                                        <span class="absolute -top-1 -right-1 bg-[#003366] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                            ${est.posicion}
                                        </span>
                                    </div>
                                    <div class="flex flex-col">
                                        <span class="text-[11px] font-bold text-[#003366] leading-none">${est.nombre.split(' ').slice(0,2).join(' ')}</span>
                                        <span class="text-[10px] text-[#58cc02] font-black">${est.xp.toLocaleString()} XP</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    </section>

</div>
`;