// content/texto_base_u01.js
const pag_texto_base_u01 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-16">
        <span class="text-[#00aaff] font-black uppercase text-xs tracking-[0.3em]">TEXTO BASE / UNIDAD 01</span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            ESTRUCTURA<br>
            <span class="text-[#00aaff]">SEMÁNTICA (HTML5)</span>
        </h1>
        <div class="h-2 w-24 bg-[#003366] mt-6"></div>
    </header>

    <section class="max-w-4xl mb-16">
        <p class="text-xl text-slate-500 font-light leading-relaxed">
            Antes de que nuestro servidor (PHP/Laravel) procese datos, necesitamos un "esqueleto" donde inyectarlos. En la ingeniería web moderna, HTML no es solo poner etiquetas, es darle <strong>significado (semántica)</strong> al contenido para que los navegadores y buscadores lo entiendan.
        </p>
    </section>

    <section class="max-w-4xl space-y-8 mb-16">
        <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2">1.1 El Boilerplate Profesional</h3>
        <p class="text-slate-600 leading-relaxed">
            Todo documento web bien estructurado inicia con una base sólida. Aquí es donde definimos el idioma, la codificación de caracteres y la adaptabilidad a dispositivos móviles (viewport).
        </p>
        
        <div class="bg-slate-900 p-6 rounded-2xl shadow-xl overflow-x-auto border border-slate-700">
            <div class="flex gap-2 mb-4 border-b border-slate-700 pb-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
                <span class="text-slate-400 text-[10px] font-mono ml-2 uppercase">index.html</span>
            </div>
            <pre class="text-xs font-mono leading-relaxed text-blue-300">
&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Sistema Base&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Tu contenido dinámico irá aquí --&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
        </div>
    </section>

    <section class="max-w-4xl p-8 bg-blue-50 border-2 border-dashed border-[#00aaff] rounded-3xl text-center">
        <i class="fas fa-plus-circle text-4xl text-[#00aaff] mb-4 opacity-50"></i>
        <h4 class="font-bold text-[#003366] uppercase text-sm mb-2">Espacio para expansión</h4>
        <p class="text-xs text-slate-500">Aquí puedes seguir aportando temas como Formularios, Tablas o Etiquetas Semánticas (&lt;article&gt;, &lt;section&gt;).</p>
    </section>

</div>
`;