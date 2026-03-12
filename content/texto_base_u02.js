// content/texto_base_u02.js
const pag_texto_base_u02 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-16">
        <span class="text-blue-500 font-black uppercase text-xs tracking-[0.3em]">TEXTO BASE / UNIDAD 02</span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            DISEÑO Y<br>
            <span class="text-blue-500">PRESENTACIÓN (CSS3)</span>
        </h1>
        <div class="h-2 w-24 bg-[#003366] mt-6"></div>
    </header>

    <section class="max-w-4xl mb-16">
        <p class="text-xl text-slate-500 font-light leading-relaxed">
            La Experiencia de Usuario (UX) comienza por la vista. CSS separa el contenido de su forma visual. Aprenderemos a posicionar elementos estratégicamente para que nuestra aplicación luzca como un software profesional de escritorio.
        </p>
    </section>

    <section class="max-w-4xl space-y-8 mb-16">
        <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2">2.1 El Poder de Flexbox</h3>
        <p class="text-slate-600 leading-relaxed">
            Olvídate de los floats. CSS Flexbox es el estándar de la industria para alinear componentes de forma predecible, ideal para barras de navegación, menús laterales y tarjetas de información.
        </p>
        
        <div class="bg-slate-900 p-6 rounded-2xl shadow-xl overflow-x-auto border border-slate-700">
            <pre class="text-xs font-mono leading-relaxed text-blue-300">
<span class="text-pink-400">.contenedor-menu</span> {
    <span class="text-yellow-300">display</span>: flex;
    <span class="text-yellow-300">justify-content</span>: space-between;
    <span class="text-yellow-300">align-items</span>: center;
    <span class="text-yellow-300">padding</span>: 20px;
    <span class="text-yellow-300">background-color</span>: #003366;
}</pre>
        </div>
    </section>

    <section class="max-w-4xl p-8 bg-slate-50 border-2 border-dashed border-slate-300 rounded-3xl text-center">
        <i class="fas fa-plus-circle text-4xl text-slate-300 mb-4"></i>
        <h4 class="font-bold text-slate-400 uppercase text-sm mb-2">Espacio para expansión</h4>
        <p class="text-xs text-slate-400">Próximos aportes: CSS Grid, Media Queries (Responsive Design), o introducción a frameworks como Tailwind CSS.</p>
    </section>

</div>
`;