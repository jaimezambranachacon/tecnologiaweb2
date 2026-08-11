// content/texto_base_u08.js

// Lógica Global para el Simulador CRUD
window.crudEstado = 'vacio'; // vacio, activo, papelera
window.ejecutarCRUD = function(accion) {
    const btnCrear = document.getElementById('btn-crud-crear');
    const btnEliminar = document.getElementById('btn-crud-eliminar');
    const btnRestaurar = document.getElementById('btn-crud-restaurar');
    const rowActivo = document.getElementById('row-activo');
    const rowPapelera = document.getElementById('row-papelera');
    const statusMsg = document.getElementById('crud-status-msg');

    if (accion === 'crear') {
        rowActivo.classList.remove('hidden');
        rowPapelera.classList.add('hidden');
        btnCrear.disabled = true; btnCrear.style.opacity = '0.5';
        btnEliminar.disabled = false; btnEliminar.style.opacity = '1';
        btnRestaurar.disabled = true; btnRestaurar.style.opacity = '0.5';
        statusMsg.innerHTML = '<span class="text-emerald-500"><i class="fas fa-check-circle"></i> INSERT INTO vuelos... Registro creado con deleted_at = NULL</span>';
    } 
    else if (accion === 'eliminar') {
        rowActivo.classList.add('hidden');
        rowPapelera.classList.remove('hidden');
        btnCrear.disabled = true;
        btnEliminar.disabled = true; btnEliminar.style.opacity = '0.5';
        btnRestaurar.disabled = false; btnRestaurar.style.opacity = '1';
        statusMsg.innerHTML = '<span class="text-rose-500"><i class="fas fa-trash-alt"></i> UPDATE vuelos SET deleted_at = "2026-04-06 10:00" (Soft Delete)</span>';
    }
    else if (accion === 'restaurar') {
        rowPapelera.classList.add('hidden');
        rowActivo.classList.remove('hidden');
        btnEliminar.disabled = false; btnEliminar.style.opacity = '1';
        btnRestaurar.disabled = true; btnRestaurar.style.opacity = '0.5';
        statusMsg.innerHTML = '<span class="text-blue-500"><i class="fas fa-undo"></i> UPDATE vuelos SET deleted_at = NULL (Restaurado)</span>';
    }
};

const pag_texto_base_u08 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-indigo-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-database text-lg"></i> TEXTO BASE / UNIDAD 08
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            EL NÚCLEO CRUD Y<br>
            <span class="text-indigo-600">ELOQUENT AVANZADO</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Saber mostrar una pantalla HTML no sirve de nada si no podemos gestionar la información. En esta unidad dominaremos el ciclo de vida de los datos: Crear, Leer, Actualizar, y "Borrar" sin destruir la evidencia.
        </p>
        <div class="h-2 w-24 bg-indigo-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">1. El Estándar CRUD</h3>
            <div class="flex flex-col md:flex-row gap-8 items-center">
                <div class="flex-1">
                    <p class="text-lg text-slate-600 leading-relaxed mb-6">
                        Todo sistema de información en el mundo, desde Facebook hasta el sistema de tu universidad, se basa en 4 operaciones fundamentales llamadas <strong>CRUD</strong>:
                    </p>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg shadow-sm">
                            <h4 class="font-black text-emerald-700 uppercase"><i class="fas fa-plus-circle mr-2"></i>Create</h4>
                            <p class="text-xs text-slate-600 mt-1">Insertar nuevos datos (POST).</p>
                        </div>
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg shadow-sm">
                            <h4 class="font-black text-blue-700 uppercase"><i class="fas fa-eye mr-2"></i>Read</h4>
                            <p class="text-xs text-slate-600 mt-1">Leer y mostrar datos (GET).</p>
                        </div>
                        <div class="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg shadow-sm">
                            <h4 class="font-black text-amber-700 uppercase"><i class="fas fa-pen mr-2"></i>Update</h4>
                            <p class="text-xs text-slate-600 mt-1">Modificar datos existentes (PUT/PATCH).</p>
                        </div>
                        <div class="bg-rose-50 border-l-4 border-rose-500 p-4 rounded-r-lg shadow-sm">
                            <h4 class="font-black text-rose-700 uppercase"><i class="fas fa-trash mr-2"></i>Delete</h4>
                            <p class="text-xs text-slate-600 mt-1">Eliminar registros (DELETE).</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">2. Esquema Relacional (3 Tablas)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Para nuestro sistema de Sincronía Aérea, crearemos tres tablas conectadas usando migraciones. Una Aerolínea tiene muchos Vuelos, y un Vuelo tiene muchos Pasajeros.
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-gray-400">// Migración 1: aerolineas</span>
<span class="text-yellow-300">Schema</span>::<span class="text-yellow-300">create</span>(<span class="text-green-400">'aerolineas'</span>, <span class="text-pink-400">function</span> (<span class="text-yellow-300">Blueprint</span> <span class="text-white">$table</span>) {
    <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">id</span>();
    <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">string</span>(<span class="text-green-400">'nombre'</span>);
    <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">timestamps</span>();
});

<span class="text-gray-400">// Migración 2: vuelos (Depende de aerolineas)</span>
<span class="text-yellow-300">Schema</span>::<span class="text-yellow-300">create</span>(<span class="text-green-400">'vuelos'</span>, <span class="text-pink-400">function</span> (<span class="text-yellow-300">Blueprint</span> <span class="text-white">$table</span>) {
    <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">id</span>();
    <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">foreignId</span>(<span class="text-green-400">'aerolinea_id'</span>)<span class="text-pink-400">-&gt;</span><span class="text-yellow-300">constrained</span>(); <span class="text-gray-400">// ¡Llave Foránea Automática!</span>
    <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">string</span>(<span class="text-green-400">'destino'</span>);
    <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">softDeletes</span>(); <span class="text-gray-400">// Agrega la columna deleted_at</span>
    <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">timestamps</span>();
});

<span class="text-gray-400">// Migración 3: pasajeros (Depende de vuelos)</span>
<span class="text-yellow-300">Schema</span>::<span class="text-yellow-300">create</span>(<span class="text-green-400">'pasajeros'</span>, <span class="text-pink-400">function</span> (<span class="text-yellow-300">Blueprint</span> <span class="text-white">$table</span>) {
    <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">id</span>();
    <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">foreignId</span>(<span class="text-green-400">'vuelo_id'</span>)<span class="text-pink-400">-&gt;</span><span class="text-yellow-300">constrained</span>()<span class="text-pink-400">-&gt;</span><span class="text-yellow-300">onDelete</span>(<span class="text-green-400">'cascade'</span>);
    <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">string</span>(<span class="text-green-400">'nombre_completo'</span>);
    <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">timestamps</span>();
});</pre>
            </div>
        </section>

        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">3. Modelos: Relaciones y Soft Deletes</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Le diremos a Laravel cómo se comunican estas tablas. Además, inyectaremos el "Súper Poder" de los <strong>Soft Deletes</strong> (Borrado Lógico) en el modelo <code>Vuelo</code> usando un <em>Trait</em>.
            </p>
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">namespace</span> <span class="text-yellow-300">App\\Models</span>;
<span class="text-pink-400">use</span> <span class="text-yellow-300">Illuminate\\Database\\Eloquent\\SoftDeletes</span>; <span class="text-gray-400">// Importamos el Trait</span>

<span class="text-pink-400">class</span> <span class="text-yellow-300">Vuelo</span> <span class="text-pink-400">extends</span> <span class="text-yellow-300">Model</span> {
    <span class="text-pink-400">use</span> <span class="text-yellow-300">SoftDeletes</span>; <span class="text-gray-400">// Inyectamos el poder de no borrar datos reales</span>

    <span class="text-pink-400">protected</span> <span class="text-white">$fillable</span> = [<span class="text-green-400">'aerolinea_id'</span>, <span class="text-green-400">'destino'</span>];

    <span class="text-gray-400">// Un vuelo PERTENECE A una aerolínea</span>
    <span class="text-pink-400">public function</span> <span class="text-yellow-300">aerolinea</span>() {
        <span class="text-pink-400">return</span> <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">belongsTo</span>(<span class="text-yellow-300">Aerolinea</span>::<span class="text-pink-400">class</span>);
    }

    <span class="text-gray-400">// Un vuelo TIENE MUCHOS pasajeros</span>
    <span class="text-pink-400">public function</span> <span class="text-yellow-300">pasajeros</span>() {
        <span class="text-pink-400">return</span> <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">hasMany</span>(<span class="text-yellow-300">Pasajero</span>::<span class="text-pink-400">class</span>);
    }
}</pre>
            </div>
        </section>

        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">4. El Controlador Maestro</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Para manejar el CRUD de Vuelos, generamos un controlador con todos los métodos listos usando <code>php artisan make:controller VueloController -r</code> y lo registramos en <code>web.php</code> con una sola línea de código:
            </p>
            <div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-xl shadow-sm font-mono text-sm text-indigo-900 mb-8">
                Route::resource('vuelos', VueloController::class);
            </div>
        </section>

        <section class="mt-10">
            <h3 class="text-3xl font-black text-emerald-600 uppercase border-b-2 border-slate-100 pb-2 mb-6"><i class="fas fa-plus-circle"></i> 5. CREATE (Insertando Datos)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">El método <code>store()</code> recibe los datos del formulario <code>POST</code>, los valida de forma estricta, y los guarda en la base de datos usando Eloquent.</p>
            <div class="bg-slate-900 rounded-xl overflow-hidden shadow-lg border-l-4 border-emerald-500">
                <pre class="p-5 text-xs font-mono text-blue-300 overflow-x-auto">
<span class="text-pink-400">public function</span> <span class="text-yellow-300">store</span>(<span class="text-yellow-300">Request</span> <span class="text-white">$request</span>) {
    <span class="text-gray-400">// 1. Validación estricta</span>
    <span class="text-white">$request</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">validate</span>([
        <span class="text-green-400">'aerolinea_id'</span> =&gt; <span class="text-green-400">'required|exists:aerolineas,id'</span>,
        <span class="text-green-400">'destino'</span> =&gt; <span class="text-green-400">'required|string|max:255'</span>
    ]);

    <span class="text-gray-400">// 2. Inserción (El modelo protege contra inyección SQL automáticamente)</span>
    <span class="text-yellow-300">Vuelo</span>::<span class="text-yellow-300">create</span>(<span class="text-white">$request</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">all</span>());

    <span class="text-gray-400">// 3. Redirección con mensaje de éxito</span>
    <span class="text-pink-400">return</span> <span class="text-yellow-300">redirect</span>()<span class="text-pink-400">-&gt;</span><span class="text-yellow-300">route</span>(<span class="text-green-400">'vuelos.index'</span>)
                     <span class="text-pink-400">-&gt;</span><span class="text-yellow-300">with</span>(<span class="text-green-400">'éxito'</span>, <span class="text-green-400">'Vuelo programado correctamente.'</span>);
}</pre>
            </div>
        </section>

        <section class="mt-16">
            <h3 class="text-3xl font-black text-blue-600 uppercase border-b-2 border-slate-100 pb-2 mb-6"><i class="fas fa-eye"></i> 6. READ (Listar y el Problema N+1)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">Si mostramos 100 vuelos y queremos imprimir el nombre de su aerolínea, Laravel haría 100 consultas SQL a la base de datos (Problema N+1). Lo solucionamos con <code>with()</code>, conocido como <strong>Eager Loading</strong> (Carga Ansiosa).</p>
            <div class="bg-slate-900 rounded-xl overflow-hidden shadow-lg border-l-4 border-blue-500">
                <pre class="p-5 text-xs font-mono text-blue-300 overflow-x-auto">
<span class="text-pink-400">public function</span> <span class="text-yellow-300">index</span>() {
    <span class="text-gray-400">// Malo: Vuelo::all(); (Causa problema N+1 al llamar la relación en Blade)</span>
    
    <span class="text-gray-400">// Excelente: Carga los vuelos y sus aerolíneas en solo 2 consultas SQL</span>
    <span class="text-white">$vuelos</span> = <span class="text-yellow-300">Vuelo</span>::<span class="text-yellow-300">with</span>(<span class="text-green-400">'aerolinea'</span>)<span class="text-pink-400">-&gt;</span><span class="text-yellow-300">paginate</span>(<span class="text-yellow-300">10</span>);
    
    <span class="text-pink-400">return</span> <span class="text-yellow-300">view</span>(<span class="text-green-400">'vuelos.index'</span>, <span class="text-yellow-300">compact</span>(<span class="text-green-400">'vuelos'</span>));
}</pre>
            </div>
        </section>

        <section class="mt-16">
            <h3 class="text-3xl font-black text-amber-500 uppercase border-b-2 border-slate-100 pb-2 mb-6"><i class="fas fa-pen"></i> 7. UPDATE (Modificar Registros)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">Laravel inyecta el Modelo directamente en la función (Route Model Binding). Si el ID no existe, Laravel devuelve un Error 404 automáticamente. ¡No tienes que hacer <code>findOrFail()</code>!</p>
            <div class="bg-slate-900 rounded-xl overflow-hidden shadow-lg border-l-4 border-amber-500">
                <pre class="p-5 text-xs font-mono text-blue-300 overflow-x-auto">
<span class="text-gray-400">// Laravel ya buscó el $vuelo por ti usando el ID de la URL</span>
<span class="text-pink-400">public function</span> <span class="text-yellow-300">update</span>(<span class="text-yellow-300">Request</span> <span class="text-white">$request</span>, <span class="text-yellow-300">Vuelo</span> <span class="text-white">$vuelo</span>) {
    <span class="text-white">$request</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">validate</span>([ <span class="text-green-400">'destino'</span> =&gt; <span class="text-green-400">'required|string'</span> ]);

    <span class="text-gray-400">// Actualiza solo los campos enviados</span>
    <span class="text-white">$vuelo</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">update</span>(<span class="text-white">$request</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">only</span>(<span class="text-green-400">'destino'</span>));

    <span class="text-pink-400">return</span> <span class="text-yellow-300">redirect</span>()<span class="text-pink-400">-&gt;</span><span class="text-yellow-300">route</span>(<span class="text-green-400">'vuelos.index'</span>);
}</pre>
            </div>
        </section>

        <section class="mt-16">
            <h3 class="text-3xl font-black text-rose-600 uppercase border-b-2 border-slate-100 pb-2 mb-6"><i class="fas fa-trash"></i> 8. DELETE (Soft Deletes)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">Gracias al Trait <code>SoftDeletes</code> que pusimos en el modelo, al ejecutar <code>delete()</code> Laravel NO borra la fila. Solo le pone la fecha y hora actual a la columna <code>deleted_at</code>.</p>
            <div class="bg-slate-900 rounded-xl overflow-hidden shadow-lg border-l-4 border-rose-600">
                <pre class="p-5 text-xs font-mono text-blue-300 overflow-x-auto">
<span class="text-pink-400">public function</span> <span class="text-yellow-300">destroy</span>(<span class="text-yellow-300">Vuelo</span> <span class="text-white">$vuelo</span>) {
    <span class="text-white">$vuelo</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">delete</span>(); <span class="text-gray-400">// ¡Magia! Se va a la "Papelera de reciclaje"</span>
    <span class="text-pink-400">return</span> <span class="text-yellow-300">back</span>()<span class="text-pink-400">-&gt;</span><span class="text-yellow-300">with</span>(<span class="text-green-400">'info'</span>, <span class="text-green-400">'Vuelo cancelado.'</span>);
}</pre>
            </div>
        </section>

        <section class="mt-16">
            <h3 class="text-3xl font-black text-teal-600 uppercase border-b-2 border-slate-100 pb-2 mb-6"><i class="fas fa-undo"></i> 9. Restaurar Registros</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">Si un vuelo fue cancelado por error, podemos buscarlo en la papelera (<code>withTrashed</code>) y resucitarlo cambiando su <code>deleted_at</code> nuevamente a <code>NULL</code>.</p>
            <div class="bg-slate-900 rounded-xl overflow-hidden shadow-lg border-l-4 border-teal-500">
                <pre class="p-5 text-xs font-mono text-blue-300 overflow-x-auto">
<span class="text-pink-400">public function</span> <span class="text-yellow-300">restaurar</span>(<span class="text-white">$id</span>) {
    <span class="text-gray-400">// Debemos obligar a Laravel a buscar también en los borrados</span>
    <span class="text-white">$vuelo</span> = <span class="text-yellow-300">Vuelo</span>::<span class="text-yellow-300">withTrashed</span>()<span class="text-pink-400">-&gt;</span><span class="text-yellow-300">findOrFail</span>(<span class="text-white">$id</span>);
    
    <span class="text-white">$vuelo</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">restore</span>(); <span class="text-gray-400">// ¡Resucitado y visible en la app nuevamente!</span>
    
    <span class="text-pink-400">return</span> <span class="text-yellow-300">back</span>();
}</pre>
            </div>
        </section>

        <section class="mt-24 mb-10">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">10. Laboratorio: Simulador Soft Deletes</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                Observa cómo funciona el borrado lógico a nivel de Base de Datos. Los usuarios creen que el dato se eliminó, pero para el Ingeniero y la Base de Datos, el registro nunca desaparece, solo se oculta.
            </p>

            <div class="bg-slate-100 p-8 rounded-[2rem] border-2 border-slate-300 shadow-inner">
                
                <div class="flex flex-wrap gap-4 mb-8 justify-center">
                    <button id="btn-crud-crear" onclick="window.ejecutarCRUD('crear')" class="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all">
                        <i class="fas fa-plus"></i> Crear Vuelo (POST)
                    </button>
                    <button id="btn-crud-eliminar" onclick="window.ejecutarCRUD('eliminar')" disabled style="opacity: 0.5;" class="bg-rose-600 hover:bg-rose-500 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all">
                        <i class="fas fa-trash"></i> Eliminar (DELETE)
                    </button>
                    <button id="btn-crud-restaurar" onclick="window.ejecutarCRUD('restaurar')" disabled style="opacity: 0.5;" class="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-all">
                        <i class="fas fa-undo"></i> Restaurar
                    </button>
                </div>

                <div class="bg-slate-900 text-mono text-sm p-4 rounded-xl mb-8 shadow-lg font-mono text-center h-14 flex items-center justify-center border border-slate-700">
                    <span id="crud-status-msg" class="text-slate-400">Esperando acción... (Haz clic en Crear Vuelo)</span>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-xl shadow-lg border border-blue-200 overflow-hidden">
                        <div class="bg-blue-600 text-white font-black p-3 text-center text-sm uppercase tracking-widest flex items-center justify-center gap-2">
                            <i class="fas fa-table"></i> Vista de Usuario (Vuelos Activos)
                        </div>
                        <table class="w-full text-left text-sm">
                            <thead class="bg-slate-50 border-b border-slate-200">
                                <tr><th class="p-3">ID</th><th class="p-3">Destino</th><th class="p-3">deleted_at</th></tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-slate-100 text-slate-500">
                                    <td class="p-3">1</td><td class="p-3">Madrid</td><td class="p-3 font-mono text-xs">NULL</td>
                                </tr>
                                <tr id="row-activo" class="hidden bg-emerald-50 border-b border-emerald-100 transition-all duration-300">
                                    <td class="p-3 font-bold text-emerald-700">2</td>
                                    <td class="p-3 font-bold text-emerald-700">Miami</td>
                                    <td class="p-3 font-mono text-xs text-emerald-600 font-bold bg-emerald-200/50 rounded inline-block mt-2 ml-2">NULL</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="bg-slate-800 rounded-xl shadow-lg border border-slate-700 overflow-hidden">
                        <div class="bg-rose-900 text-rose-100 font-black p-3 text-center text-sm uppercase tracking-widest flex items-center justify-center gap-2">
                            <i class="fas fa-dumpster"></i> Base de Datos Completa
                        </div>
                        <table class="w-full text-left text-sm text-slate-300">
                            <thead class="bg-slate-700 border-b border-slate-600">
                                <tr><th class="p-3">ID</th><th class="p-3">Destino</th><th class="p-3 text-rose-400">deleted_at</th></tr>
                            </thead>
                            <tbody>
                                <tr class="border-b border-slate-700">
                                    <td class="p-3">1</td><td class="p-3">Madrid</td><td class="p-3 font-mono text-xs">NULL</td>
                                </tr>
                                <tr id="row-papelera" class="hidden bg-rose-900/40 border-b border-rose-800 transition-all duration-300">
                                    <td class="p-3 line-through opacity-50">2</td>
                                    <td class="p-3 line-through opacity-50">Miami</td>
                                    <td class="p-3 font-mono text-xs text-rose-400 font-bold bg-rose-950/50 rounded inline-block mt-2 ml-2 border border-rose-800">2026-04-06 10:00:00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </section>

    </div>
</div>
`;