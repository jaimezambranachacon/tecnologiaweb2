// content/texto_base_u09.js

// Lógica Global para el Simulador API
window.simularAPI = function(metodo) {
    const pantalla = document.getElementById('api-response-screen');
    const statusBox = document.getElementById('api-status-code');
    
    // Estado de carga
    pantalla.innerHTML = '<span class="text-yellow-400 animate-pulse">Enviando petición HTTP ' + metodo + '...</span>';
    statusBox.className = 'text-xs font-bold px-2 py-1 rounded bg-slate-700 text-slate-300';
    statusBox.innerText = 'Cargando...';

    setTimeout(() => {
        if (metodo === 'GET') {
            statusBox.className = 'text-xs font-bold px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/50';
            statusBox.innerText = '200 OK';
            pantalla.innerHTML = `<span class="text-blue-300">{</span>
  <span class="text-green-400">"data"</span><span class="text-blue-300">: [</span>
    <span class="text-blue-300">{</span>
      <span class="text-green-400">"id"</span>: <span class="text-purple-400">1</span>,
      <span class="text-green-400">"destino"</span>: <span class="text-yellow-300">"La Paz (LPB)"</span>,
      <span class="text-green-400">"aerolinea"</span>: <span class="text-yellow-300">"BoA"</span>
    <span class="text-blue-300">}</span>,
    <span class="text-blue-300">{</span>
      <span class="text-green-400">"id"</span>: <span class="text-purple-400">2</span>,
      <span class="text-green-400">"destino"</span>: <span class="text-yellow-300">"Miami (MIA)"</span>,
      <span class="text-green-400">"aerolinea"</span>: <span class="text-yellow-300">"American Airlines"</span>
    <span class="text-blue-300">}</span>
  <span class="text-blue-300">]</span>
<span class="text-blue-300">}</span>`;
        } else if (metodo === 'POST') {
            statusBox.className = 'text-xs font-bold px-2 py-1 rounded bg-blue-500/20 text-blue-400 border border-blue-500/50';
            statusBox.innerText = '201 Created';
            pantalla.innerHTML = `<span class="text-blue-300">{</span>
  <span class="text-green-400">"message"</span>: <span class="text-yellow-300">"Vuelo creado exitosamente."</span>,
  <span class="text-green-400">"data"</span>: <span class="text-blue-300">{</span>
    <span class="text-green-400">"id"</span>: <span class="text-purple-400">3</span>,
    <span class="text-green-400">"destino"</span>: <span class="text-yellow-300">"Cochabamba (CBB)"</span>
  <span class="text-blue-300">}</span>
<span class="text-blue-300">}</span>`;
        } else if (metodo === 'ERROR') {
            statusBox.className = 'text-xs font-bold px-2 py-1 rounded bg-rose-500/20 text-rose-400 border border-rose-500/50';
            statusBox.innerText = '422 Unprocessable Entity';
            pantalla.innerHTML = `<span class="text-blue-300">{</span>
  <span class="text-green-400">"message"</span>: <span class="text-yellow-300">"Los datos proporcionados no son válidos."</span>,
  <span class="text-green-400">"errors"</span>: <span class="text-blue-300">{</span>
    <span class="text-green-400">"destino"</span>: <span class="text-blue-300">[</span>
      <span class="text-yellow-300">"El campo destino es obligatorio."</span>
    <span class="text-blue-300">]</span>
  <span class="text-blue-300">}</span>
<span class="text-blue-300">}</span>`;
        }
    }, 800);
};

const pag_texto_base_u09 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-purple-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-network-wired text-lg"></i> TEXTO BASE / UNIDAD 09
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            ARQUITECTURA DE<br>
            <span class="text-purple-600">APIs RESTFUL</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Desacoplar el Backend del Frontend es el estándar de oro en la ingeniería moderna. Aprenderemos a construir una API robusta en Laravel que hable el idioma universal de internet: <strong>El formato JSON</strong>.
        </p>
        <div class="h-2 w-24 bg-purple-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">1. ¿Qué es una API REST?</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-6">
                <div>
                    <p class="text-lg text-slate-600 leading-relaxed mb-4">
                        Imagina que tu base de datos es la cocina de un restaurante y el frontend (Vue/React) es el cliente en la mesa. La <strong>API (Application Programming Interface)</strong> es el mesero. Toma la orden del cliente, la lleva a la cocina, y devuelve la comida servida en un formato estandarizado.
                    </p>
                    <p class="text-lg text-slate-600 leading-relaxed">
                        En una API, ya no devolvemos vistas HTML (Blade). Devolvemos datos crudos en formato <strong>JSON (JavaScript Object Notation)</strong>. Esto permite que una misma API alimente a una página web, una app de Android y una app de iOS simultáneamente.
                    </p>
                </div>
                <div class="bg-purple-50 p-6 rounded-2xl border border-purple-100 shadow-sm text-center">
                    
                    <i class="fas fa-exchange-alt text-4xl text-purple-400 mb-4"></i>
                    <h4 class="font-black text-purple-900 mb-2">JSON (El Idioma Universal)</h4>
                    <p class="text-sm text-purple-700 font-mono text-left bg-white p-3 rounded border border-purple-200 shadow-inner">
                        {<br>
                        &nbsp;&nbsp;"id": 1,<br>
                        &nbsp;&nbsp;"vuelo": "SCZ-LPB"<br>
                        }
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">2. El Archivo api.php</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Hasta ahora, todas nuestras rutas vivían en <code>routes/web.php</code>. Para construir una API, Laravel nos proporciona un archivo dedicado: <code>routes/api.php</code>.
            </p>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-6">
                <h4 class="font-bold text-blue-900 mb-2"><i class="fas fa-info-circle mr-2"></i>El Prefijo Mágico</h4>
                <p class="text-sm text-blue-800">Cualquier ruta que escribas en <code>api.php</code> obtendrá automáticamente el prefijo <strong>/api</strong> en su URL. Si creas la ruta <code>/vuelos</code>, la URL real en internet será <code>http://tusistema.test/api/vuelos</code>. Además, estas rutas son <strong>Stateless</strong> (no guardan sesiones de usuario), lo que las hace ultrarrápidas.</p>
            </div>
        </section>

        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">3. API Controllers</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Para generar un controlador que sepa que va a trabajar como API (sin métodos innecesarios como <code>create</code> o <code>edit</code> que devuelven vistas HTML), usamos la bandera <code>--api</code> en Artisan:
            </p>
            <div class="bg-slate-900 text-green-400 font-mono text-sm p-4 rounded-lg shadow-inner mb-6 inline-block">
                php artisan make:controller Api/VueloController --api
            </div>

            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <div class="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                    <span class="text-slate-400 text-[10px] font-mono uppercase">app/Http/Controllers/Api/VueloController.php</span>
                </div>
                <pre class="p-6 text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">public function</span> <span class="text-yellow-300">index</span>() {
    <span class="text-white">$vuelos</span> = <span class="text-yellow-300">Vuelo</span>::<span class="text-yellow-300">all</span>();
    
    <span class="text-gray-400">// Ya no devolvemos view('...'). Devolvemos JSON:</span>
    <span class="text-pink-400">return</span> <span class="text-yellow-300">response</span>()<span class="text-pink-400">-&gt;</span><span class="text-yellow-300">json</span>([
        <span class="text-green-400">'status'</span> =&gt; <span class="text-green-400">'success'</span>,
        <span class="text-green-400">'data'</span> =&gt; <span class="text-white">$vuelos</span>
    ], <span class="text-purple-400">200</span>); <span class="text-gray-400">// 200 es el código HTTP para "OK"</span>
}</pre>
            </div>
        </section>

        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">4. API Resources (Transformando Datos)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Devolver un objeto directamente desde la base de datos es una <strong>mala práctica de seguridad</strong>. Podrías filtrar contraseñas, tokens o revelar la estructura interna de tu base de datos (Ej: <code>created_at</code>, <code>deleted_at</code>). Para solucionar esto, usamos los <strong>Resources</strong>.
            </p>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <div class="bg-slate-900 text-green-400 font-mono text-xs p-3 rounded shadow-inner mb-4 inline-block">
                        php artisan make:resource VueloResource
                    </div>
                    <p class="text-sm text-slate-600 mb-4">Un Resource actúa como un "filtro" o "transformador". Tú decides exactamente qué campos se enviarán al cliente en el JSON final.</p>
                </div>

                <div class="bg-slate-900 rounded-xl shadow-lg border border-slate-700 flex flex-col">
                    <div class="bg-purple-900/40 px-4 py-2 border-b border-purple-500/30 text-purple-400 text-xs font-mono">app/Http/Resources/VueloResource.php</div>
                    <pre class="p-5 text-xs font-mono text-blue-300 flex-1 overflow-x-auto">
<span class="text-pink-400">public function</span> <span class="text-yellow-300">toArray</span>(<span class="text-yellow-300">Request</span> <span class="text-white">$request</span>): <span class="text-yellow-300">array</span>
{
    <span class="text-gray-400">// Solo exponemos lo estrictamente necesario</span>
    <span class="text-pink-400">return</span> [
        <span class="text-green-400">'identificador'</span> =&gt; <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span>id,
        <span class="text-green-400">'ruta'</span> =&gt; <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span>origen . <span class="text-green-400">' a '</span> . <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span>destino,
        <span class="text-green-400">'asientos'</span> =&gt; <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span>asientos_disponibles,
        <span class="text-gray-400">// Ocultamos timestamps y deleted_at</span>
    ];
}</pre>
                </div>
            </div>
            
            <div class="mt-6 bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                <p class="text-sm text-emerald-800">
                    <strong>En tu controlador, ahora lo llamas así:</strong><br>
                    <code class="font-mono bg-emerald-100 px-2 py-1 rounded mt-1 inline-block">return VueloResource::collection(Vuelo::all());</code><br>
                    Laravel automáticamente empaquetará la respuesta en una propiedad <code>"data"</code>, lo cual es el estándar mundial.
                </p>
            </div>
        </section>

        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">5. Los Códigos de Estado HTTP</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                En una API, el frontend no sabe si algo salió bien o mal leyendo texto. Se guía por el código numérico de la respuesta (HTTP Status Codes). Como ingeniero Backend, debes devolver el código correcto:
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div class="border border-emerald-200 bg-emerald-50 p-4 rounded-xl text-center shadow-sm">
                    <span class="block text-3xl font-black text-emerald-600 mb-1">200</span>
                    <span class="text-xs font-bold text-emerald-800 uppercase">OK</span>
                    <p class="text-[10px] text-slate-500 mt-2">Petición exitosa (Ej: Listar o Mostrar).</p>
                </div>
                <div class="border border-blue-200 bg-blue-50 p-4 rounded-xl text-center shadow-sm">
                    <span class="block text-3xl font-black text-blue-600 mb-1">201</span>
                    <span class="text-xs font-bold text-blue-800 uppercase">Created</span>
                    <p class="text-[10px] text-slate-500 mt-2">Nuevo registro guardado (POST).</p>
                </div>
                <div class="border border-amber-200 bg-amber-50 p-4 rounded-xl text-center shadow-sm">
                    <span class="block text-3xl font-black text-amber-600 mb-1">404</span>
                    <span class="text-xs font-bold text-amber-800 uppercase">Not Found</span>
                    <p class="text-[10px] text-slate-500 mt-2">El recurso (ID) no existe.</p>
                </div>
                <div class="border border-rose-200 bg-rose-50 p-4 rounded-xl text-center shadow-sm">
                    <span class="block text-3xl font-black text-rose-600 mb-1">422</span>
                    <span class="text-xs font-bold text-rose-800 uppercase">Unprocessable</span>
                    <p class="text-[10px] text-slate-500 mt-2">Error de validación de datos.</p>
                </div>
            </div>
        </section>

        <section class="mt-24 mb-10">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">6. Laboratorio: Simulador de Consumo API</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                Imagina que eres el Desarrollador Frontend (usando Vue o React). Interactúa con los botones para enviar peticiones a la API y observa cómo responde el servidor en formato JSON con sus respectivos códigos de estado.
            </p>

            <div class="bg-slate-800 rounded-[2rem] p-6 md:p-10 shadow-2xl border border-slate-700">
                
                <div class="flex flex-col md:flex-row gap-4 mb-6">
                    <button onclick="window.simularAPI('GET')" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 flex-1">
                        <span class="font-mono bg-white/20 px-2 py-0.5 rounded text-xs">GET</span> /api/vuelos
                    </button>
                    <button onclick="window.simularAPI('POST')" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 flex-1">
                        <span class="font-mono bg-white/20 px-2 py-0.5 rounded text-xs">POST</span> /api/vuelos (Éxito)
                    </button>
                    <button onclick="window.simularAPI('ERROR')" class="bg-rose-600 hover:bg-rose-500 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 flex-1">
                        <span class="font-mono bg-white/20 px-2 py-0.5 rounded text-xs">POST</span> /api/vuelos (Falla)
                    </button>
                </div>

                <div class="bg-[#0f172a] rounded-xl border border-slate-600 overflow-hidden shadow-inner">
                    <div class="bg-slate-700/50 px-4 py-3 border-b border-slate-600 flex justify-between items-center">
                        <div class="flex items-center gap-2">
                            <div class="w-3 h-3 rounded-full bg-rose-500"></div>
                            <div class="w-3 h-3 rounded-full bg-amber-500"></div>
                            <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
                            <span class="ml-2 text-slate-400 text-xs font-mono">Response Payload (JSON)</span>
                        </div>
                        <div id="api-status-code" class="text-xs font-bold px-2 py-1 rounded bg-slate-700 text-slate-500">
                            Esperando...
                        </div>
                    </div>
                    <pre id="api-response-screen" class="p-6 font-mono text-sm text-slate-400 h-64 overflow-y-auto whitespace-pre-wrap">
// El cliente está esperando una respuesta...
// Haz clic en uno de los botones superiores para enviar la petición HTTP a Laravel.
                    </pre>
                </div>
            </div>
            
            <div class="p-6 bg-purple-50 border-l-4 border-purple-500 rounded-r-2xl mt-8 shadow-sm">
                <p class="text-sm text-slate-700">
                    <strong><i class="fas fa-shield-alt text-purple-600 mr-2"></i>¿Y la Seguridad?</strong> En la siguiente unidad aprenderemos sobre <strong>Laravel Sanctum</strong>. Una API real no permite que cualquiera inserte un vuelo; el cliente debe enviar un "Token de Autorización" (Bearer Token) en la cabecera de su petición para demostrar quién es.
                </p>
            </div>

        </section>



        <section class="mt-24 border-t-4 border-emerald-500 pt-16 mb-10">
            <header class="mb-12 text-center">
                <span class="text-emerald-600 font-black uppercase text-xs tracking-[0.3em] mb-4 block">Laboratorio Consolidado</span>
                <h2 class="text-4xl md:text-5xl font-black text-[#003366] tracking-tighter uppercase leading-none">
                    API REST: <span class="text-emerald-500">Proyecto Naves</span>
                </h2>
                <p class="mt-4 text-lg text-slate-500 font-light max-w-2xl mx-auto">
                    El ecosistema completo. Desde la creación de la tabla hasta la respuesta en JSON. Este es el estándar arquitectónico que usarán en su Proyecto Formativo.
                </p>
            </header>

            <div class="mb-16">
                <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">1. La Migración (Estructura de la BD)</h3>
                <p class="text-slate-600 mb-4">Empezamos definiendo cómo se guardarán las naves en MariaDB. Ejecutamos <code>php artisan make:model Nave -m</code> y editamos el archivo de migración generado:</p>
                <div class="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div class="bg-slate-800 px-4 py-2 text-slate-400 text-xs font-mono border-b border-slate-700">database/migrations/xxxx_create_naves_table.php</div>
                    <pre class="p-5 text-sm font-mono text-blue-300 overflow-x-auto">
<span class="text-pink-400">public function</span> <span class="text-yellow-300">up</span>() {
    <span class="text-yellow-300">Schema</span>::<span class="text-yellow-300">create</span>(<span class="text-green-400">'naves'</span>, <span class="text-pink-400">function</span> (<span class="text-yellow-300">Blueprint</span> <span class="text-white">$table</span>) {
        <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">id</span>();
        <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">string</span>(<span class="text-green-400">'matricula'</span>, <span class="text-yellow-300">10</span>)<span class="text-pink-400">-&gt;</span><span class="text-yellow-300">unique</span>();
        <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">string</span>(<span class="text-green-400">'modelo'</span>, <span class="text-yellow-300">50</span>);
        <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">integer</span>(<span class="text-green-400">'capacidad'</span>);
        <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">timestamps</span>();
    });
}</pre>
                </div>
            </div>

            <div class="mb-16">
                <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">2. El Modelo (Seguridad de Asignación)</h3>
                <p class="text-slate-600 mb-4">El Modelo es el puente hacia la tabla. Debemos protegerlo indicando explícitamente qué campos puede llenar el usuario a través de un formulario (Asignación Masiva).</p>
                <div class="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div class="bg-slate-800 px-4 py-2 text-slate-400 text-xs font-mono border-b border-slate-700">app/Models/Nave.php</div>
                    <pre class="p-5 text-sm font-mono text-blue-300 overflow-x-auto">
<span class="text-pink-400">namespace</span> <span class="text-yellow-300">App\\Models</span>;
<span class="text-pink-400">use</span> <span class="text-yellow-300">Illuminate\\Database\\Eloquent\\Model</span>;

<span class="text-pink-400">class</span> <span class="text-yellow-300">Nave</span> <span class="text-pink-400">extends</span> <span class="text-yellow-300">Model</span> {
    <span class="text-gray-400">// Campos permitidos para guardar datos</span>
    <span class="text-pink-400">protected</span> <span class="text-white">$fillable</span> = [
        <span class="text-green-400">'matricula'</span>, 
        <span class="text-green-400">'modelo'</span>, 
        <span class="text-green-400">'capacidad'</span>
    ];
}</pre>
                </div>
            </div>

            <div class="mb-16">
                <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">3. API Resource (El Formateador JSON)</h3>
                <p class="text-slate-600 mb-4">Ejecutamos <code>php artisan make:resource NaveResource</code>. Este archivo nos permite elegir qué datos verá el Frontend, ocultando columnas como <code>created_at</code> o <code>updated_at</code>.</p>
                <div class="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div class="bg-slate-800 px-4 py-2 text-slate-400 text-xs font-mono border-b border-slate-700">app/Http/Resources/NaveResource.php</div>
                    <pre class="p-5 text-sm font-mono text-blue-300 overflow-x-auto">
<span class="text-pink-400">public function</span> <span class="text-yellow-300">toArray</span>(<span class="text-white">$request</span>) {
    <span class="text-pink-400">return</span> [
        <span class="text-green-400">'id'</span> =&gt; <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span>id,
        <span class="text-green-400">'identificador'</span> =&gt; <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span>matricula,
        <span class="text-green-400">'info_tecnica'</span> =&gt; <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span>modelo . <span class="text-green-400">' (Capacidad: '</span> . <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span>capacidad . <span class="text-green-400">')'</span>
    ];
}</pre>
                </div>
            </div>

            <div class="mb-16">
                <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">4. El Controlador API (La Lógica)</h3>
                <p class="text-slate-600 mb-4">Generamos el controlador con <code>php artisan make:controller Api/NaveController --api</code>. Aquí unimos el Modelo con el Resource para devolver datos o guardarlos.</p>
                
                <div class="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div class="bg-slate-800 px-4 py-2 text-slate-400 text-xs font-mono border-b border-slate-700">app/Http/Controllers/Api/NaveController.php</div>
                    <pre class="p-5 text-sm font-mono text-blue-300 overflow-x-auto">
<span class="text-pink-400">use</span> <span class="text-yellow-300">App\\Models\\Nave</span>;
<span class="text-pink-400">use</span> <span class="text-yellow-300">App\\Http\\Resources\\NaveResource</span>;

<span class="text-pink-400">class</span> <span class="text-yellow-300">NaveController</span> <span class="text-pink-400">extends</span> <span class="text-yellow-300">Controller</span> {
    
    <span class="text-gray-400">// LISTAR TODAS LAS NAVES (GET)</span>
    <span class="text-pink-400">public function</span> <span class="text-yellow-300">index</span>() {
        <span class="text-white">$naves</span> = <span class="text-yellow-300">Nave</span>::<span class="text-yellow-300">all</span>();
        <span class="text-pink-400">return</span> <span class="text-yellow-300">NaveResource</span>::<span class="text-yellow-300">collection</span>(<span class="text-white">$naves</span>); <span class="text-gray-400">// Devuelve 200 OK auto</span>
    }

    <span class="text-gray-400">// GUARDAR UNA NAVE (POST)</span>
    <span class="text-pink-400">public function</span> <span class="text-yellow-300">store</span>(<span class="text-yellow-300">Request</span> <span class="text-white">$request</span>) {
        <span class="text-white">$datosValidados</span> = <span class="text-white">$request</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">validate</span>([
            <span class="text-green-400">'matricula'</span> =&gt; <span class="text-green-400">'required|unique:naves'</span>,
            <span class="text-green-400">'modelo'</span> =&gt; <span class="text-green-400">'required|string'</span>,
            <span class="text-green-400">'capacidad'</span> =&gt; <span class="text-green-400">'required|integer'</span>
        ]);

        <span class="text-white">$nuevaNave</span> = <span class="text-yellow-300">Nave</span>::<span class="text-yellow-300">create</span>(<span class="text-white">$datosValidados</span>);
        
        <span class="text-gray-400">// Devolvemos la nave creada usando el Resource</span>
        <span class="text-pink-400">return</span> <span class="text-yellow-300">response</span>()<span class="text-pink-400">-&gt;</span><span class="text-yellow-300">json</span>([
            <span class="text-green-400">'mensaje'</span> =&gt; <span class="text-green-400">'Nave registrada correctamente'</span>,
            <span class="text-green-400">'data'</span> =&gt; <span class="text-pink-400">new</span> <span class="text-yellow-300">NaveResource</span>(<span class="text-white">$nuevaNave</span>)
        ], <span class="text-purple-400">201</span>);
    }

    <span class="text-gray-400">// ELIMINAR UNA NAVE (DELETE)</span>
    <span class="text-pink-400">public function</span> <span class="text-yellow-300">destroy</span>(<span class="text-yellow-300">Nave</span> <span class="text-white">$nave</span>) {
        <span class="text-white">$nave</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">delete</span>();
        <span class="text-pink-400">return</span> <span class="text-yellow-300">response</span>()<span class="text-pink-400">-&gt;</span><span class="text-yellow-300">json</span>([<span class="text-green-400">'mensaje'</span> =&gt; <span class="text-green-400">'Nave eliminada'</span>], <span class="text-purple-400">200</span>);
    }
}</pre>
                </div>
            </div>

            <div class="mb-16">
                <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">5. Las Rutas (El Mapa del Sistema)</h3>
                <p class="text-slate-600 mb-4">Finalmente, abrimos el archivo <code>routes/api.php</code> y conectamos nuestro Controlador. Con una sola línea generamos los 5 endpoints necesarios para el CRUD.</p>
                <div class="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                    <div class="bg-slate-800 px-4 py-2 text-slate-400 text-xs font-mono border-b border-slate-700">routes/api.php</div>
                    <pre class="p-5 text-sm font-mono text-blue-300 overflow-x-auto">
<span class="text-pink-400">use</span> <span class="text-yellow-300">App\\Http\\Controllers\\Api\\NaveController</span>;

<span class="text-gray-400">// Genera: GET /api/naves, POST /api/naves, DELETE /api/naves/{nave}...</span>
<span class="text-yellow-300">Route</span>::<span class="text-yellow-300">apiResource</span>(<span class="text-green-400">'naves'</span>, <span class="text-yellow-300">NaveController</span>::<span class="text-pink-400">class</span>);</pre>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">6. Petición (Thunder Client)</h3>
                    <p class="text-sm text-slate-600 mb-4">El equipo de Frontend envía un <strong>GET</strong> a <code>/api/naves</code> desde su navegador o aplicación móvil.</p>
                    <div class="bg-blue-50 border border-blue-200 p-4 rounded-xl shadow-sm text-blue-800 font-mono text-sm">
                        <span class="font-bold">GET</span> http://localhost/api/naves
                    </div>
                </div>

                <div>
                    <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">7. Respuesta Final (JSON)</h3>
                    <p class="text-sm text-slate-600 mb-4">Laravel procesa la Base de Datos, pasa por el <code>NaveResource</code> y devuelve esta estructura perfecta y segura:</p>
                    <div class="bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
                        <pre class="p-4 text-xs font-mono text-blue-300 overflow-x-auto">
{
  <span class="text-green-400">"data"</span>: [
    {
      <span class="text-green-400">"id"</span>: <span class="text-purple-400">1</span>,
      <span class="text-green-400">"identificador"</span>: <span class="text-yellow-300">"CP-1024"</span>,
      <span class="text-green-400">"info_tecnica"</span>: <span class="text-yellow-300">"Boeing 737 (Capacidad: 180)"</span>
    }
  ]
}</pre>
                    </div>
                </div>
            </div>

        </section>



        <section class="mt-24 mb-16 border-t-4 border-slate-800 pt-16">
            <header class="mb-12 text-center">
                <span class="text-slate-500 font-black uppercase text-xs tracking-[0.3em] mb-4 block">Laboratorio de Pruebas (Testing)</span>
                <h2 class="text-4xl md:text-5xl font-black text-[#003366] tracking-tighter uppercase leading-none">
                    Auditoría de Endpoints con <span class="text-purple-600">Thunder Client</span>
                </h2>
                <p class="mt-4 text-lg text-slate-500 font-light max-w-2xl mx-auto">
                    El navegador web (Chrome, Edge) solo sabe hacer peticiones GET por defecto. Para probar si nuestro sistema realmente guarda, actualiza o elimina datos, necesitamos una herramienta profesional integrada en VS Code.
                </p>
                <div class="mt-8 flex justify-center">
                    
                </div>
            </header>

            <div class="bg-purple-50 p-6 md:p-8 rounded-2xl border border-purple-200 mb-12 shadow-sm">
                <h3 class="font-black text-purple-900 text-xl mb-4 flex items-center gap-2"><i class="fas fa-search text-purple-600"></i> Anatomía de una Petición</h3>
                <p class="text-sm text-purple-800 mb-4">En Thunder Client (o Postman), toda petición tiene 3 partes vitales que debes configurar antes de presionar el botón <strong>SEND (Enviar)</strong>:</p>
                <ul class="space-y-3 text-sm text-purple-900">
                    <li><i class="fas fa-check-circle text-purple-500 mr-2"></i><strong>Método HTTP:</strong> Eliges qué acción vas a realizar (GET, POST, PUT, DELETE).</li>
                    <li><i class="fas fa-check-circle text-purple-500 mr-2"></i><strong>URL del Endpoint:</strong> La ruta exacta hacia Laravel (Ej: <code>http://tusistema.test/api/naves</code>).</li>
                    <li><i class="fas fa-check-circle text-purple-500 mr-2"></i><strong>Body (Cuerpo):</strong> Solo se usa en POST y PUT. Es el paquete de datos en formato JSON que le envías al servidor.</li>
                </ul>
            </div>

            <div class="space-y-12">
                
                <div class="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
                    <div class="flex items-center gap-4 mb-6">
                        <span class="bg-emerald-100 text-emerald-700 font-black px-4 py-1 rounded text-lg tracking-widest">GET</span>
                        <h4 class="text-2xl font-black text-[#003366]">Leer Registros</h4>
                    </div>
                    <p class="text-slate-600 mb-4 text-sm">Sirve para pedirle a la API que nos devuelva la lista de naves o una nave en específico.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <h5 class="font-bold text-slate-800 text-xs uppercase mb-2">Configuración en Thunder Client</h5>
                            <ul class="text-sm text-slate-600 space-y-2 font-mono">
                                <li><strong>Method:</strong> <span class="text-emerald-600 font-bold">GET</span></li>
                                <li><strong>URL (Todos):</strong> http://.../api/naves</li>
                                <li><strong>URL (Solo uno):</strong> http://.../api/naves/1</li>
                                <li><strong>Body:</strong> <span class="text-slate-400">Vacío (No se envía nada)</span></li>
                            </ul>
                        </div>
                        <div class="bg-slate-900 p-4 rounded-xl border border-slate-700">
                            <h5 class="font-bold text-emerald-400 text-xs uppercase mb-2">Respuesta Esperada (200 OK)</h5>
                            <pre class="text-xs font-mono text-blue-300 overflow-x-auto">
{
  "data": [
    { "id": 1, "matricula": "CP-1024" }
  ]
}</pre>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                    <div class="flex items-center gap-4 mb-6">
                        <span class="bg-blue-100 text-blue-700 font-black px-4 py-1 rounded text-lg tracking-widest">POST</span>
                        <h4 class="text-2xl font-black text-[#003366]">Crear Nuevo Registro</h4>
                    </div>
                    <p class="text-slate-600 mb-4 text-sm">Simula enviar un formulario para guardar datos. Requiere enviar información estructurada en la pestaña <strong>Body > JSON</strong>.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <h5 class="font-bold text-slate-800 text-xs uppercase mb-2">Configuración en Thunder Client</h5>
                            <ul class="text-sm text-slate-600 space-y-2 font-mono mb-4">
                                <li><strong>Method:</strong> <span class="text-blue-600 font-bold">POST</span></li>
                                <li><strong>URL:</strong> http://.../api/naves</li>
                            </ul>
                            <h5 class="font-bold text-slate-800 text-xs uppercase mb-2">Pestaña: Body -> JSON</h5>
                            <pre class="text-xs font-mono bg-white border border-slate-200 p-2 rounded text-slate-700">
{
  "matricula": "CP-9999",
  "modelo": "Airbus A320",
  "capacidad": 150
}</pre>
                        </div>
                        <div class="bg-slate-900 p-4 rounded-xl border border-slate-700 flex flex-col justify-center">
                            <h5 class="font-bold text-blue-400 text-xs uppercase mb-2">Respuesta Esperada (201 Created)</h5>
                            <pre class="text-xs font-mono text-blue-300 overflow-x-auto mb-2">
{
  "mensaje": "Nave registrada",
  "data": { "id": 2, "matricula": "CP-9999" }
}</pre>
                            <p class="text-[10px] text-slate-400 border-t border-slate-700 pt-2 mt-2">* Si omites la matrícula, Laravel devolverá un <strong>422 Unprocessable Entity</strong> con el error de validación.</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-2 h-full bg-amber-500"></div>
                    <div class="flex items-center gap-4 mb-6">
                        <span class="bg-amber-100 text-amber-700 font-black px-4 py-1 rounded text-lg tracking-widest">PUT</span>
                        <h4 class="text-2xl font-black text-[#003366]">Actualizar Registro</h4>
                    </div>
                    <p class="text-slate-600 mb-4 text-sm">Sirve para editar un registro que ya existe. <strong>Regla vital:</strong> Debes indicar el ID del registro que vas a modificar al final de la URL.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <h5 class="font-bold text-slate-800 text-xs uppercase mb-2">Configuración en Thunder Client</h5>
                            <ul class="text-sm text-slate-600 space-y-2 font-mono mb-4">
                                <li><strong>Method:</strong> <span class="text-amber-600 font-bold">PUT</span> <span class="text-xs text-slate-400">(o PATCH)</span></li>
                                <li><strong>URL:</strong> http://.../api/naves/<span class="bg-amber-200 text-amber-900 font-bold px-1 rounded">2</span></li>
                            </ul>
                            <h5 class="font-bold text-slate-800 text-xs uppercase mb-2">Pestaña: Body -> JSON</h5>
                            <pre class="text-xs font-mono bg-white border border-slate-200 p-2 rounded text-slate-700">
{
  "capacidad": 180 
}</pre>
                            <p class="text-[10px] text-slate-500 mt-1 italic">* Solo enviamos el campo que queremos modificar.</p>
                        </div>
                        <div class="bg-slate-900 p-4 rounded-xl border border-slate-700 flex flex-col justify-center">
                            <h5 class="font-bold text-amber-400 text-xs uppercase mb-2">Respuesta Esperada (200 OK)</h5>
                            <pre class="text-xs font-mono text-blue-300 overflow-x-auto">
{
  "mensaje": "Nave actualizada correctamente",
  "data": { "id": 2, "capacidad": 180 }
}</pre>
                        </div>
                    </div>
                </div>

                <div class="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-2 h-full bg-rose-500"></div>
                    <div class="flex items-center gap-4 mb-6">
                        <span class="bg-rose-100 text-rose-700 font-black px-4 py-1 rounded text-lg tracking-widest">DELETE</span>
                        <h4 class="text-2xl font-black text-[#003366]">Destruir Registro</h4>
                    </div>
                    <p class="text-slate-600 mb-4 text-sm">Elimina (o aplica Soft Delete) a un registro. Al igual que PUT, requiere el ID en la URL. <strong>No requiere enviar nada en el Body.</strong></p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                            <h5 class="font-bold text-slate-800 text-xs uppercase mb-2">Configuración en Thunder Client</h5>
                            <ul class="text-sm text-slate-600 space-y-2 font-mono">
                                <li><strong>Method:</strong> <span class="text-rose-600 font-bold">DELETE</span></li>
                                <li><strong>URL:</strong> http://.../api/naves/<span class="bg-rose-200 text-rose-900 font-bold px-1 rounded">2</span></li>
                                <li><strong>Body:</strong> <span class="text-slate-400">Vacío</span></li>
                            </ul>
                        </div>
                        <div class="bg-slate-900 p-4 rounded-xl border border-slate-700 flex flex-col justify-center">
                            <h5 class="font-bold text-rose-400 text-xs uppercase mb-2">Respuesta Esperada (200 OK)</h5>
                            <pre class="text-xs font-mono text-blue-300 overflow-x-auto">
{
  "mensaje": "Nave eliminada permanentemente"
}</pre>
                        </div>
                    </div>
                </div>

            </div>
            
            <div class="mt-12 bg-slate-100 border-l-4 border-slate-800 p-6 rounded-r-xl shadow-inner text-slate-700 text-center md:text-left flex flex-col md:flex-row items-center gap-6">
                <i class="fas fa-check-double text-4xl text-slate-400"></i>
                <div>
                    <strong class="block text-slate-800 mb-1">El Flujo del Ingeniero</strong>
                    <p class="text-sm">Si tu API pasa estas 4 pruebas manuales en Thunder Client sin lanzar la temida pantalla roja de error 500 de Laravel, significa que tu Backend es sólido como una roca y está listo para que el equipo de Frontend comience a consumirlo.</p>
                </div>
            </div>

        </section>
    </div>
</div>
`;