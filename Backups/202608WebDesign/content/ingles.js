// content/ingles.js

// 1. DATA CORE: Base de datos limpia de los estudiantes
const duo_history = [
     {
        mes: "Junio 2026",
        principal: true, // El primer elemento siempre se dibujará en el podio superior
        estudiantes: [
            { posicion: 1, nombre: "Oscar Denilsón Crespo Carrillo", xp: "25371 y 11h", foto: "https://lh3.googleusercontent.com/contacts/AG6tpzHCj9mBCHok22wHztSXOpZblzEltp6IxIAsw-x9N5KprgUWF0Y6=s272-p-k-rw-no" },
            { posicion: 2, nombre: "Michel", xp: "11420 y 10h", foto: "" }, 
            { posicion: 3, nombre: "Roberto Colodro Montero", xp: "10980 y 4h", foto: "" }
        ]
    },
    {
        mes: "Mayo 2026",
        principal: true, // El primer elemento siempre se dibujará en el podio superior
        estudiantes: [
            { posicion: 1, nombre: "Cuellar Chung Delsy", xp: "15592 y 10h", foto: "https://lh3.googleusercontent.com/contacts/AG6tpzH0-SDHaCYi7GiaEY8mTP_-_fs8xR0QzcGZhuufoCK2zogGpSKd=s272-p-k-rw-no" },
            { posicion: 2, nombre: "Callecusi Guarachi Jose Manuel", xp: "15448 10h", foto: "https://lh3.googleusercontent.com/contacts/AG6tpzGEwVYREWytiSaQLNwkOXFXbfxSjkP9FZuz62ZjEw4Iliq0bhoI=s272-p-k-rw-no" }, 
            { posicion: 3, nombre: "Villavicencio Aguirre Jose Jhoel", xp: "11729 7h", foto: "https://lh3.googleusercontent.com/contacts/AG6tpzEuBU72lD8P8mhNjscFEtQGKB8atj-a2JJc_q6X9_PqYYFy1-Z5=s272-p-k-rw-no" }
        ]
    },
    {
        mes: "Abril 2026",
        principal: false, 
        estudiantes: [
            { posicion: 1, nombre: "Percy Rolfy Fernandez Carballo", xp: "32551 21h", foto: "https://lh3.googleusercontent.com/contacts/AG6tpzGp9wl-zu98PYnym5YnEJtWsmlH8rp9ksaJzlHXiAIsqJFOAesn=s272-p-k-rw-no" },
            { posicion: 2, nombre: "Carlos Enzo Ayala Escalante", xp: "22626 EXP 7h", foto: "https://lh3.googleusercontent.com/contacts/AG6tpzFEigGdP3RDcvl9aXQkL_7hjvor1J0Qgtqe1MOznifDZ3yocS74=s408-p-k-rw-no" }, 
            { posicion: 3, nombre: "Villavicencio Aguirre Jose Jhoel", xp: "20087 14h", foto: "https://lh3.googleusercontent.com/contacts/AG6tpzEuBU72lD8P8mhNjscFEtQGKB8atj-a2JJc_q6X9_PqYYFy1-Z5=s272-p-k-rw-no" }
        ]
    },
    {
        mes: "Marzo 2026",
        principal: false, 
        estudiantes: [
            { posicion: 1, nombre: "Juan Andres Revollo", xp: "35200", foto: "https://lh3.googleusercontent.com/contacts/AG6tpzGpCAKlUy3R0Pz9q47AI-_clPciX73f5Iug9BZZEwdU-c9mPhVa=s408-p-k-rw-no" },
            { posicion: 2, nombre: "Cristian Eduardo Flores", xp: "34000", foto: "https://lh3.googleusercontent.com/contacts/AG6tpzFEigGdP3RDcvl9aXQkL_7hjvor1J0Qgtqe1MOznifDZ3yocS74=s408-p-k-rw-no" }, 
            { posicion: 3, nombre: "Enzo Ayala", xp: "11500", foto: "https://lh3.googleusercontent.com/contacts/AG6tpzGomC6q55A4TPF2miWX-1ZLSbBjKIe6Byv0LNzJdegkprSZGeux=s408-p-k-rw-no" }
        ]
    },
    {
        mes: "Febrero 2026",
        principal: false, 
        estudiantes: [
            { posicion: 1, nombre: "Cristian Eduardo Flores Ponce", xp: "37731", foto: "https://lh3.googleusercontent.com/contacts/AG6tpzFEigGdP3RDcvl9aXQkL_7hjvor1J0Qgtqe1MOznifDZ3yocS74=s272-p-k-rw-no" },
            { posicion: 2, nombre: "Jhery Gilbert Leon Carballo", xp: "31494", foto: "https://lh3.googleusercontent.com/contacts/AG6tpzHQRIzsNCCQgGcthflABShXHmMHUuQWLKYjKu8LLI1RpulbxA6j=s272-p-k-rw-no" },
            { posicion: 3, nombre: "Camila Isabel Fernandez Tarabillo", xp: "21360", foto: "https://lh3.googleusercontent.com/contacts/AG6tpzHUco70w1GJM3ysAtLmCdCtxYIHC_lm-cSWSnZtkC3qlT8LewfV=s272-p-k-rw-no" }
        ]
    }
];

// 2. LOGIC: Separación dinámica automatizada
// El primer registro del array se asigna al podio principal
const mesSeleccionado = duo_history[0];

// Todos los elementos a partir del índice 1 entran directamente al historial secundario
const mesesPasados = duo_history.slice(1);

const top1 = mesSeleccionado.estudiantes.find(e => e.posicion === 1);
const top2 = mesSeleccionado.estudiantes.find(e => e.posicion === 2);
const top3 = mesSeleccionado.estudiantes.find(e => e.posicion === 3);

// Generador dinámico iterativo para la lista secundaria (Soporta crecimiento ilimitado)
let htmlHistorico = "";
mesesPasados.forEach(periodo => {
    htmlHistorico += `
    <div class="bg-slate-50 border border-slate-200/60 rounded-2xl p-6 shadow-sm mb-4">
        <h3 class="text-sm font-black text-[#003366] uppercase tracking-wider mb-4 flex items-center gap-2">
            <i class="fas fa-calendar-alt text-[#00aaff]"></i> Competencia: ${periodo.mes}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    `;
    
    // Ordenación algorítmica por posición (1°, 2°, 3°)
    const alumOrdenados = periodo.estudiantes.sort((a, b) => a.posicion - b.posicion);
    
    alumOrdenados.forEach(est => {
        let medallaColor = "text-amber-500"; // 1er lugar
        if (est.posicion === 2) medallaColor = "text-slate-400";
        if (est.posicion === 3) medallaColor = "text-amber-700";

        htmlHistorico += `
            <div class="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow duration-300">
                <div class="text-xl font-black ${medallaColor} w-6 text-center">
                    <i class="fas fa-medal"></i>
                </div>
                <div class="w-10 h-10 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200">
                    <img src="${est.foto}" alt="${est.nombre}" class="w-full h-full object-cover" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(est.nombre)}&background=random'">
                </div>
                <div class="flex-1 min-w-0">
                    <p class="text-xs font-black text-slate-800 truncate leading-tight">${est.nombre}</p>
                    <p class="text-[10px] text-slate-400 font-bold uppercase mt-0.5">${est.posicion}° Lugar</p>
                </div>
                <div class="text-right flex-shrink-0">
                    <span class="text-[#58cc02] text-xs font-black">${est.xp.toLocaleString()}</span>
                    <span class="text-[9px] text-slate-400 font-bold uppercase block">XP</span>
                </div>
            </div>
        `;
    });

    htmlHistorico += `
        </div>
    </div>
    `;
});

// 3. UI STRUCTURE (Template string unificado para Vue)
const pag_ingles = `
<div class="space-y-12 animate-in fade-in duration-700">
    <header class="text-center py-14 bg-gradient-to-br from-[#001f3f] via-[#003366] to-[#00aaff] rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
        <i class="fas fa-language absolute -right-12 -top-12 text-white/10 text-[18rem] rotate-12"></i>
        <span class="bg-white/10 backdrop-blur-md text-[#58cc02] text-[10px] font-black uppercase tracking-[0.3em] px-4 py-1.5 rounded-full border border-white/10">
            <i class="fas fa-trophy mr-2 text-yellow-400"></i>Salón de la Fama • Duolingo
        </span>
        <h1 class="text-5xl md:text-6xl font-black tracking-tighter uppercase mt-4 mb-2">
            DUO <span class="text-[#58cc02]">UPDS</span>
        </h1>
        <p class="text-sm md:text-md font-light opacity-90 uppercase tracking-widest max-w-2xl mx-auto px-4">
            Reconocimiento a la disciplina y constancia en el idioma global de la Ingeniería de Sistemas.
        </p>
    </header>

    <section class="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100">
        <div class="text-center max-w-xl mx-auto mb-16">
            <span class="text-[11px] font-black text-[#58cc02] tracking-widest uppercase block mb-1">Ecosistema Activo</span>
            <h2 class="text-3xl font-black text-[#003366] uppercase">Podio de Líderes (${mesSeleccionado.mes})</h2>
        </div>
        
        <div class="flex flex-col md:flex-row items-center md:items-end justify-center gap-8 max-w-5xl mx-auto">
            
            <div class="w-full md:w-1/3 bg-slate-50 border border-slate-200/60 rounded-[2rem] p-6 flex flex-col items-center text-center order-2 md:order-1 md:transform md:-translate-y-6 shadow-md hover:scale-[1.03] transition-all duration-300">
                <div class="w-28 h-28 rounded-full border-4 border-slate-300 overflow-hidden mb-4 shadow-md bg-slate-200 flex items-center justify-center">
                    <img src="${top2.foto}" alt="${top2.nombre}" class="w-full h-full object-cover" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(top2.nombre)}&background=random'">
                </div>
                <div class="bg-slate-200 text-slate-700 font-black px-4 py-1 rounded-full text-[10px] tracking-widest mb-4 uppercase">2do Lugar</div>
                <h4 class="text-lg font-black text-[#003366] leading-tight mb-1 min-h-[3.5rem] flex items-center justify-center">
                    ${top2.nombre}
                </h4>
                <p class="text-xs text-slate-400 font-bold uppercase tracking-wider mb-4">Racha Imparable</p>
                <div class="bg-white border border-slate-200 px-4 py-2.5 rounded-xl w-full shadow-inner">
                    <p class="text-[#58cc02] font-black text-xl flex items-center justify-center gap-1">
                        <i class="fas fa-bolt text-yellow-400"></i>${top2.xp.toLocaleString()} <span class="text-[10px] text-slate-400 font-bold uppercase">XP</span>
                    </p>
                </div>
            </div>

            <div class="w-full md:w-1/3 bg-gradient-to-b from-amber-50/60 to-white border-2 border-amber-200 rounded-[2rem] p-8 flex flex-col items-center text-center order-1 md:order-2 shadow-xl md:transform md:-translate-y-12 hover:scale-[1.05] transition-all duration-300 relative overflow-hidden">
                <div class="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-300 to-yellow-500"></div>
                <i class="fas fa-crown text-4xl text-amber-500 mb-3 drop-shadow-sm animate-bounce"></i>
                <div class="w-36 h-36 rounded-full border-4 border-amber-400 overflow-hidden mb-4 shadow-lg bg-amber-100 flex items-center justify-center">
                    <img src="${top1.foto}" alt="${top1.nombre}" class="w-full h-full object-cover" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(top1.nombre)}&background=random'">
                </div>
                <div class="bg-amber-400 text-amber-950 font-black px-5 py-1 rounded-full text-[10px] tracking-widest mb-4 uppercase shadow-sm">1er Lugar</div>
                <h4 class="text-xl font-black text-[#003366] leading-tight mb-1 min-h-[3.5rem] flex items-center justify-center">
                    ${top1.nombre}
                </h4>
                <p class="text-xs text-amber-600 font-black uppercase tracking-wider mb-4">Leyenda DUO UPDS</p>
                <div class="bg-white border border-amber-200 px-5 py-3 rounded-xl w-full shadow-md">
                    <p class="text-[#58cc02] font-black text-2xl flex items-center justify-center gap-1">
                        <i class="fas fa-bolt text-yellow-400"></i>${top1.xp.toLocaleString()} <span class="text-xs text-slate-400 font-bold uppercase">XP</span>
                    </p>
                </div>
            </div>

            <div class="w-full md:w-1/3 bg-slate-50 border border-slate-200/60 rounded-[2rem] p-6 flex flex-col items-center text-center order-3 md:transform md:-translate-y-2 shadow-md hover:scale-[1.03] transition-all duration-300">
                <div class="w-24 h-24 rounded-full border-4 border-orange-300 overflow-hidden mb-4 shadow-md bg-slate-200 flex items-center justify-center">
                    <img src="${top3.foto}" alt="${top3.nombre}" class="w-full h-full object-cover" onerror="this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(top3.nombre)}&background=random'">
                </div>
                <div class="bg-orange-100 text-orange-700 font-black px-4 py-1 rounded-full text-[10px] tracking-widest mb-4 uppercase">3er Lugar</div>
                <h4 class="text-lg font-black text-[#003366] leading-tight mb-1 min-h-[3.5rem] flex items-center justify-center">
                    ${top3.nombre}
                </h4>
                <p class="text-xs text-slate-400 font-bold uppercase tracking-wider mb-4">Estudiante Destacada</p>
                <div class="bg-white border border-slate-200 px-4 py-2.5 rounded-xl w-full shadow-inner">
                    <p class="text-[#58cc02] font-black text-lg flex items-center justify-center gap-1">
                        <i class="fas fa-bolt text-yellow-400"></i>${top3.xp.toLocaleString()} <span class="text-[10px] text-slate-400 font-bold uppercase">XP</span>
                    </p>
                </div>
            </div>

        </div>
    </section>

    <section class="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-slate-100 space-y-6">
        <div>
            <span class="text-[11px] font-black text-[#00aaff] tracking-widest uppercase block mb-1">Registros Históricos</span>
            <h2 class="text-2xl font-black text-[#003366] uppercase">Ganadores de Ciclos Pasados</h2>
            <p class="text-xs text-slate-400 mt-1">Historial cronológico del desempeño de los estudiantes en la plataforma.</p>
        </div>
        
        <div class="space-y-4">
            ${htmlHistorico}
        </div>
    </section>

</div>
`;