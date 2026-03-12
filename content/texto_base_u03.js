// content/texto_base_u03.js
const pag_texto_base_u03 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-16">
        <span class="text-yellow-500 font-black uppercase text-xs tracking-[0.3em]">TEXTO BASE / UNIDAD 03</span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            LÓGICA E<br>
            <span class="text-yellow-500">INTERACTIVIDAD (JS)</span>
        </h1>
        <div class="h-2 w-24 bg-[#003366] mt-6"></div>
    </header>

    <section class="max-w-4xl mb-16">
        <p class="text-xl text-slate-500 font-light leading-relaxed">
            JavaScript es el puente entre el cliente y el servidor. Nos permite validar formularios en tiempo real, modificar el DOM sin recargar la página y preparar el terreno para consumir nuestra futura API con AJAX y Fetch.
        </p>
    </section>

    <section class="max-w-4xl space-y-8 mb-16">
        <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2">3.1 Manipulación del DOM (ES6+)</h3>
        <p class="text-slate-600 leading-relaxed">
            Usando la sintaxis moderna de ECMAScript 6, podemos atrapar elementos de nuestro HTML y darles vida mediante eventos.
        </p>
        
        <div class="bg-slate-900 p-6 rounded-2xl shadow-xl overflow-x-auto border border-slate-700">
            <pre class="text-xs font-mono leading-relaxed text-blue-300">
<span class="text-gray-400">// Seleccionamos un botón y un contenedor</span>
<span class="text-pink-400">const</span> <span class="text-white">btnCargar</span> = document.<span class="text-yellow-300">getElementById</span>(<span class="text-green-400">'btn-vuelos'</span>);
<span class="text-pink-400">const</span> <span class="text-white">resultado</span> = document.<span class="text-yellow-300">querySelector</span>(<span class="text-green-400">'.resultado-api'</span>);

<span class="text-gray-400">// Escuchamos el evento click (Arrow Function)</span>
<span class="text-white">btnCargar</span>.<span class="text-yellow-300">addEventListener</span>(<span class="text-green-400">'click'</span>, () =&gt; {
    <span class="text-white">resultado</span>.innerHTML = <span class="text-green-400">'&lt;p&gt;Cargando datos del servidor...&lt;/p&gt;'</span>;
    <span class="text-gray-400">// Aquí irá nuestro código Fetch API próximamente</span>
});</pre>
        </div>
    </section>

    <section class="max-w-4xl p-8 bg-yellow-50 border-2 border-dashed border-yellow-400 rounded-3xl text-center">
        <i class="fas fa-plus-circle text-4xl text-yellow-400 mb-4 opacity-50"></i>
        <h4 class="font-bold text-[#003366] uppercase text-sm mb-2">Espacio para expansión</h4>
        <p class="text-xs text-slate-600">Próximos aportes: Promesas (Promises), Async/Await, Consumo de APIs y JSON.</p>
    </section>

</div>
`;