const pag_texto_base_u07 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-rose-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fab fa-laravel text-lg"></i> TEXTO BASE / UNIDAD 07
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            EL ECOSISTEMA<br>
            <span class="text-rose-600">LARAVEL 13</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Despídete del PHP espagueti. Aquí comenzamos a construir software empresarial. Aprenderemos a instalar el framework, configurarlo correctamente, entender su estructura y conectar nuestro primer proyecto a la Base de Datos.
        </p>
        <div class="h-2 w-24 bg-rose-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">1. Prerrequisitos del Sistema</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Laravel 13 es un framework de vanguardia. No funcionará en servidores antiguos. Si estás usando Laragon, asegúrate de tener activadas las siguientes versiones antes de abrir la terminal:
            </p>

            <div class="overflow-x-auto bg-white rounded-2xl shadow-lg border border-slate-200">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-rose-600 text-white uppercase text-xs tracking-widest">
                            <th class="p-4 font-black">Tecnología</th>
                            <th class="p-4 font-black">Versión Mínima</th>
                            <th class="p-4 font-black">¿Por qué lo exige Laravel 13?</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm">
                        <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                            <td class="p-4 font-bold text-[#003366] flex items-center gap-2"><i class="fab fa-php text-indigo-500 text-xl"></i> PHP</td>
                            <td class="p-4 font-mono text-rose-600 font-bold">&gt;= 8.3</td>
                            <td class="p-4 text-slate-600">Requiere las nuevas características de tipado estricto y clases anónimas avanzadas de PHP 8.3+.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                            <td class="p-4 font-bold text-[#003366] flex items-center gap-2"><i class="fas fa-box-open text-amber-600 text-xl"></i> Composer</td>
                            <td class="p-4 font-mono text-rose-600 font-bold">&gt;= 2.2</td>
                            <td class="p-4 text-slate-600">Es el gestor de paquetes. Se encarga de descargar el núcleo de Laravel y sus librerías de internet.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                            <td class="p-4 font-bold text-[#003366] flex items-center gap-2"><i class="fas fa-database text-blue-500 text-xl"></i> MariaDB / MySQL</td>
                            <td class="p-4 font-mono text-rose-600 font-bold">10.10+ / 8.0+</td>
                            <td class="p-4 text-slate-600">Para el manejo nativo de datos JSON y motores InnoDB optimizados que usa Eloquent ORM.</td>
                        </tr>
                        <tr class="hover:bg-slate-50 transition-colors">
                            <td class="p-4 font-bold text-[#003366] flex items-center gap-2"><i class="fab fa-node-js text-green-500 text-xl"></i> Node.js & NPM</td>
                            <td class="p-4 font-mono text-rose-600 font-bold">&gt;= 20.x</td>
                            <td class="p-4 text-slate-600">Requerido por Vite (el empaquetador de Laravel) para compilar tu CSS (Tailwind/Bootstrap) y JS.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">2. La Instalación</h3>
            
            <div class="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-r-lg flex items-start gap-3">
                <i class="fas fa-exclamation-triangle text-amber-500 text-xl mt-1"></i>
                <div>
                    <h4 class="font-bold text-amber-900">¡Laragon debe estar encendido!</h4>
                    <p class="text-sm text-amber-800">Antes de ejecutar cualquier comando, asegúrate de haber iniciado los servicios de <strong>Apache y MySQL</strong> en tu panel de Laragon.</p>
                </div>
            </div>

            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Abre la terminal de tu Laragon (botón <strong>Terminal</strong>). Asegúrate de estar en la carpeta pública (<code>C:/laragon/www</code>) y ejecuta el siguiente comando. Cambia "sistema_vuelos" por el nombre de tu proyecto sin espacios.
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700 relative group">
                <div class="absolute top-0 right-0 bg-slate-800 text-slate-400 text-xs px-3 py-1 rounded-bl-lg">Terminal</div>
                <pre class="p-6 md:p-8 text-sm md:text-base font-mono leading-relaxed overflow-x-auto text-slate-300">
<span class="text-emerald-400">~/laragon/www</span>
$ <span class="text-yellow-400">composer create-project</span> <span class="text-rose-400">laravel/laravel</span> <span class="text-white">sistema_vuelos</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">3. Configuración y Puesta en Marcha</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Una vez descargado el proyecto, ábrelo en Visual Studio Code. Antes de programar, debemos configurar el entorno y levantar el servidor paso a paso.
            </p>
            
            <div class="space-y-8">
                <div class="flex flex-col md:flex-row gap-6 items-start">
                    <div class="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center font-black flex-shrink-0 text-xl shadow-lg">1</div>
                    <div class="flex-1">
                        <strong class="text-[#003366] text-xl block mb-2">Crear la Base de Datos</strong>
                        <p class="text-slate-600 mb-2">Abre tu gestor de base de datos (HeidiSQL, DBeaver o phpMyAdmin) y crea una nueva base de datos llamada <code>sistema_vuelos_db</code>. <strong>Déjala vacía</strong>, Laravel creará las tablas por ti.</p>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row gap-6 items-start">
                    <div class="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center font-black flex-shrink-0 text-xl shadow-lg">2</div>
                    <div class="flex-1">
                        <strong class="text-[#003366] text-xl block mb-2">Configurar el archivo .env</strong>
                        <p class="text-slate-600 mb-4">En la raíz de tu proyecto en VS Code, busca el archivo <strong><code>.env</code></strong>. Este archivo guarda configuraciones sensibles y contraseñas. Modifica el bloque de conexión a la base de datos:</p>
                        
                        <div class="bg-slate-900 rounded-xl shadow-lg p-5 border border-slate-700">
                            <div class="text-slate-400 text-xs mb-3 border-b border-slate-700 pb-2 font-mono">.env</div>
                            <pre class="font-mono text-sm text-blue-300 leading-relaxed overflow-x-auto">
DB_CONNECTION=<span class="text-green-400">mysql</span>
DB_HOST=<span class="text-green-400">127.0.0.1</span>
DB_PORT=<span class="text-green-400">3306</span>
<span class="text-yellow-400 font-bold border-b border-yellow-400/30 border-dashed">DB_DATABASE=<span class="text-white">sistema_vuelos_db</span></span>
DB_USERNAME=<span class="text-green-400">root</span>
DB_PASSWORD=<span class="text-green-400"></span> <span class="text-gray-400">&lt;-- En Laragon suele ir vacía</span></pre>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row gap-6 items-start">
                    <div class="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center font-black flex-shrink-0 text-xl shadow-lg">3</div>
                    <div class="flex-1">
                        <strong class="text-[#003366] text-xl block mb-2">Generar la Llave de Seguridad</strong>
                        <p class="text-slate-600 mb-2">Abre la terminal integrada de VS Code (<code>Ctrl + \`</code>) y ejecuta el siguiente comando para encriptar las sesiones y cookies de tu app:</p>
                        <div class="bg-slate-900 text-green-400 font-mono text-sm p-3 rounded shadow-inner inline-block w-full">
                            php artisan key:generate
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row gap-6 items-start">
                    <div class="w-10 h-10 rounded-full bg-[#003366] text-white flex items-center justify-center font-black flex-shrink-0 text-xl shadow-lg">4</div>
                    <div class="flex-1">
                        <strong class="text-[#003366] text-xl block mb-2">Migrar la Base de Datos</strong>
                        <p class="text-slate-600 mb-2">Ahora enviaremos las tablas por defecto de Laravel (usuarios, contraseñas, etc.) hacia la base de datos que creaste en el paso 1:</p>
                        <div class="bg-slate-900 text-green-400 font-mono text-sm p-3 rounded shadow-inner inline-block w-full">
                            php artisan migrate
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row gap-6 items-start">
                    <div class="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center font-black flex-shrink-0 text-xl shadow-lg">5</div>
                    <div class="flex-1">
                        <strong class="text-rose-600 text-xl block mb-2">Levantar el Servidor</strong>
                        <p class="text-slate-600 mb-2">Finalmente, enciende el servidor de desarrollo nativo de PHP/Laravel. Esto mantendrá la terminal ocupada:</p>
                        <div class="bg-slate-900 text-yellow-400 font-mono text-sm p-3 rounded shadow-inner inline-block w-full">
                            php artisan serve
                        </div>
                        <p class="text-sm text-slate-500 mt-3">
                            <i class="fas fa-check-circle text-green-500 mr-1"></i> ¡Listo! Ahora puedes ir a tu navegador y entrar a <strong><code>http://localhost:8000</code></strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">4. Radiografía de Laravel</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                ¡Tu proyecto ya está corriendo! Ahora, hablemos de su estructura. Cuando veas todas las carpetas, ¡no te asustes! El 90% del tiempo como desarrollador Backend, solo trabajarás en estas cuatro:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="border border-slate-200 p-5 rounded-2xl hover:border-orange-500 transition-colors bg-white shadow-sm">
                    <div class="flex items-center gap-3 mb-2">
                        <i class="fas fa-map-signs text-2xl text-orange-500"></i>
                        <h4 class="font-black text-[#003366] text-lg">/routes</h4>
                    </div>
                    <p class="text-sm text-slate-600">Aquí vive el archivo <code>web.php</code>. Es el mapa de tu sistema. Cada vez que un usuario escribe una URL en el navegador, este archivo decide qué Controlador debe responder.</p>
                </div>

                <div class="border border-slate-200 p-5 rounded-2xl hover:border-blue-500 transition-colors bg-white shadow-sm">
                    <div class="flex items-center gap-3 mb-2">
                        <i class="fas fa-microchip text-2xl text-blue-500"></i>
                        <h4 class="font-black text-[#003366] text-lg">/app</h4>
                    </div>
                    <p class="text-sm text-slate-600">El cerebro de la bestia. Dentro de <code>app/Http/Controllers</code> programarás la lógica (el Controlador). Dentro de <code>app/Models</code> configurarás tu conexión con las tablas (el Modelo).</p>
                </div>

                <div class="border border-slate-200 p-5 rounded-2xl hover:border-green-500 transition-colors bg-white shadow-sm">
                    <div class="flex items-center gap-3 mb-2">
                        <i class="fab fa-html5 text-2xl text-green-500"></i>
                        <h4 class="font-black text-[#003366] text-lg">/resources/views</h4>
                    </div>
                    <p class="text-sm text-slate-600">Aquí guardarás tus archivos visuales. Laravel no usa <code>.html</code>, usa el motor de plantillas <strong>Blade</strong> (<code>.blade.php</code>), que te permite escribir PHP directamente dentro de tu HTML de forma limpia.</p>
                </div>

                <div class="border border-slate-200 p-5 rounded-2xl hover:border-purple-500 transition-colors bg-white shadow-sm">
                    <div class="flex items-center gap-3 mb-2">
                        <i class="fas fa-database text-2xl text-purple-500"></i>
                        <h4 class="font-black text-[#003366] text-lg">/database</h4>
                    </div>
                    <p class="text-sm text-slate-600">Aquí viven las <strong>Migraciones</strong>. Ya no crearemos tablas manualmente haciendo clic en phpMyAdmin. Escribiremos las tablas en código PHP y Laravel las construirá por nosotros.</p>
                </div>
            </div>
        </section>

        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">5. Tu Primera Ruta (web.php)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                En Laravel, ninguna pantalla se muestra "por accidente". Todo debe estar explícitamente autorizado en el archivo de rutas. Imagina que <code>routes/web.php</code> es la recepcionista del edificio: ella decide a dónde va cada visitante.
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <div class="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                    <span class="text-slate-400 text-[10px] font-mono uppercase">routes/web.php</span>
                </div>
                <pre class="p-6 text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;?php</span>
<span class="text-pink-400">use</span> <span class="text-yellow-300">Illuminate\\Support\\Facades\\Route</span>;

<span class="text-gray-400">// Cuando el usuario entra a http://localhost:8000/saludo</span>
<span class="text-yellow-300">Route</span>::<span class="text-yellow-300">get</span>(<span class="text-green-400">'/saludo'</span>, <span class="text-pink-400">function</span> () {
    <span class="text-pink-400">return</span> <span class="text-green-400">'¡Hola Ingenieros de la UPDS!'</span>;
});</pre>
            </div>
            <p class="text-sm text-slate-500 mt-4 italic">
                * Prueba guardar el archivo, ve a tu navegador y escribe la URL de tu proyecto seguida de <code>/saludo</code>. Verás el texto en pantalla blanca. ¡Acabas de interceptar tu primera petición HTTP!
            </p>
        </section>

        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">6. El Motor Visual: Blade</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Devolver texto plano es aburrido. Queremos devolver HTML con diseño. Laravel usa un "Motor de Plantillas" llamado <strong>Blade</strong>. Los archivos Blade tienen la extensión <code>.blade.php</code> y viven en la carpeta <code>resources/views</code>.
            </p>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="bg-slate-900 rounded-xl shadow-lg border border-slate-700 flex flex-col">
                    <div class="bg-green-900/40 px-4 py-2 border-b border-green-500/30 text-green-400 text-xs font-mono">1. resources/views/inicio.blade.php</div>
                    <pre class="p-5 text-xs font-mono text-blue-300 flex-1 overflow-x-auto">
<span class="text-gray-400">&lt;!-- Puedes escribir HTML normal --&gt;</span>
<span class="text-pink-400">&lt;h1&gt;</span>Panel de Vuelos<span class="text-pink-400">&lt;/h1&gt;</span>

<span class="text-gray-400">&lt;!-- Y la magia de Blade permite imprimir variables de PHP muy fácil --&gt;</span>
<span class="text-pink-400">&lt;p&gt;</span>Bienvenido, {{ <span class="text-white">$usuario</span> }}<span class="text-pink-400">&lt;/p&gt;</span></pre>
                </div>

                <div class="bg-slate-900 rounded-xl shadow-lg border border-slate-700 flex flex-col">
                    <div class="bg-orange-900/40 px-4 py-2 border-b border-orange-500/30 text-orange-400 text-xs font-mono">2. routes/web.php</div>
                    <pre class="p-5 text-xs font-mono text-blue-300 flex-1 overflow-x-auto">
<span class="text-gray-400">// Apuntamos una ruta hacia nuestra nueva vista</span>
<span class="text-yellow-300">Route</span>::<span class="text-yellow-300">get</span>(<span class="text-green-400">'/inicio'</span>, <span class="text-pink-400">function</span> () {
    <span class="text-gray-400">// Pasamos datos a la vista usando un Arreglo</span>
    <span class="text-pink-400">return</span> <span class="text-yellow-300">view</span>(<span class="text-green-400">'inicio'</span>, [
        <span class="text-green-400">'usuario'</span> =&gt; <span class="text-green-400">'Estudiante'</span>
    ]);
});</pre>
                </div>
            </div>
        </section>

        <section class="mt-20 mb-10">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">7. Controladores (Ordenando el Caos)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Escribir toda la lógica dentro de <code>web.php</code> está prohibido en la industria (tu archivo terminaría teniendo 5,000 líneas). La forma correcta es que la Ruta solo reciba al visitante y lo mande al <strong>Controlador</strong>, que es el verdadero cerebro de la operación.
            </p>

            <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
                <h4 class="font-bold text-blue-900 mb-2"><i class="fas fa-terminal mr-2"></i>El Comando Mágico (Artisan)</h4>
                <p class="text-sm text-blue-800 mb-3">En Laravel no creamos los archivos a mano. Usamos la terminal para generar código perfecto sin errores de tipeo. Ejecuta esto en tu consola:</p>
                <div class="bg-slate-900 text-green-400 font-mono text-sm p-3 rounded shadow-inner">
                    php artisan make:controller VueloController
                </div>
            </div>

            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <div class="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                    <span class="text-slate-400 text-[10px] font-mono uppercase">app/Http/Controllers/VueloController.php</span>
                </div>
                <pre class="p-6 text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;?php</span>
<span class="text-pink-400">namespace</span> <span class="text-yellow-300">App\\Http\\Controllers</span>;

<span class="text-pink-400">use</span> <span class="text-yellow-300">Illuminate\\Http\\Request</span>;

<span class="text-pink-400">class</span> <span class="text-yellow-300">VueloController</span> <span class="text-pink-400">extends</span> <span class="text-yellow-300">Controller</span>
{
    <span class="text-gray-400">// Creamos un método para mostrar la pantalla principal</span>
    <span class="text-pink-400">public function</span> <span class="text-yellow-300">index</span>()
    {
        <span class="text-gray-400">// Aquí iría la lógica pesada (ej. buscar en la Base de Datos)</span>
        <span class="text-white">$vuelos</span> = [<span class="text-green-400">'SCZ-LPB'</span>, <span class="text-green-400">'CBB-TJA'</span>]; 
        
        <span class="text-pink-400">return</span> <span class="text-yellow-300">view</span>(<span class="text-green-400">'vuelos.index'</span>, <span class="text-yellow-300">compact</span>(<span class="text-green-400">'vuelos'</span>));
    }
}</pre>
            </div>

            <p class="text-sm text-slate-600 mt-6 text-center italic">
                De esta forma, la arquitectura queda limpia: El archivo de rutas recibe la petición, el Controlador procesa los datos, y Blade los dibuja en pantalla. ¡Bienvenido a la verdadera Ingeniería MVC!
            </p>
        </section>

        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">8. Migraciones (La BD como Código)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                En Laravel, no abrimos phpMyAdmin para crear tablas. Usamos <strong>Migraciones</strong>. Esto es literalmente "Control de Versiones para tu Base de Datos". Si te equivocas, puedes deshacer la tabla con un comando en lugar de borrarla a mano.
            </p>
            
            <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-6">
                <h4 class="font-bold text-blue-900 mb-2"><i class="fas fa-lightbulb text-yellow-500 mr-2"></i>Pro-Tip de Arquitecto: El Comando 2x1</h4>
                <p class="text-sm text-blue-800 mb-3">Nunca crees el Modelo y la Migración por separado. Usa la bandera <code>-m</code> para que Laravel cree ambos archivos al mismo tiempo y los vincule mágicamente:</p>
                <div class="bg-slate-900 text-green-400 font-mono text-sm p-3 rounded shadow-inner">
                    php artisan make:model Vuelo -m
                </div>
            </div>

            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <div class="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                    <span class="text-slate-400 text-[10px] font-mono uppercase">database/migrations/2026_xx_xx_create_vuelos_table.php</span>
                </div>
                <pre class="p-6 text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">public function</span> <span class="text-yellow-300">up</span>()
{
    <span class="text-yellow-300">Schema</span>::<span class="text-yellow-300">create</span>(<span class="text-green-400">'vuelos'</span>, <span class="text-pink-400">function</span> (<span class="text-yellow-300">Blueprint</span> <span class="text-white">$table</span>) {
        <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">id</span>(); <span class="text-gray-400">// Crea la llave primaria (PK) autoincrementable</span>
        <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">string</span>(<span class="text-green-400">'codigo_vuelo'</span>, <span class="text-yellow-300">10</span>)<span class="text-pink-400">-&gt;</span><span class="text-yellow-300">unique</span>();
        <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">string</span>(<span class="text-green-400">'origen'</span>);
        <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">string</span>(<span class="text-green-400">'destino'</span>);
        <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">integer</span>(<span class="text-green-400">'asientos_disponibles'</span>);
        <span class="text-white">$table</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">timestamps</span>(); <span class="text-gray-400">// Crea mágicamente 'created_at' y 'updated_at'</span>
    });
}</pre>
            </div>
        </section>

        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">9. Modelos: Eloquent ORM</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                <strong>Eloquent</strong> es la joya de la corona de Laravel. Transforma las tablas de tu base de datos en Objetos de PHP. Ya no necesitas escribir largos <code>SELECT * FROM vuelos WHERE...</code>. Ahora hablas en código orientado a objetos.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div class="bg-slate-900 rounded-xl shadow-lg border border-slate-700">
                    <div class="bg-slate-800 px-4 py-2 border-b border-slate-700 text-slate-400 text-xs font-mono">app/Models/Vuelo.php</div>
                    <pre class="p-5 text-xs font-mono text-blue-300 overflow-x-auto">
<span class="text-pink-400">class</span> <span class="text-yellow-300">Vuelo</span> <span class="text-pink-400">extends</span> <span class="text-yellow-300">Model</span>
{
    <span class="text-gray-400">// Seguridad masiva: Protegemos qué campos 
    // se pueden llenar desde un formulario</span>
    <span class="text-pink-400">protected</span> <span class="text-white">$fillable</span> = [
        <span class="text-green-400">'codigo_vuelo'</span>, 
        <span class="text-green-400">'origen'</span>, 
        <span class="text-green-400">'destino'</span>, 
        <span class="text-green-400">'asientos_disponibles'</span>
    ];
}</pre>
                </div>
                
                <div class="bg-indigo-50 border border-indigo-200 p-6 rounded-xl shadow-sm">
                    <h5 class="font-bold text-indigo-900 mb-3 uppercase tracking-widest text-xs">La Magia en el Controlador</h5>
                    <p class="text-sm text-slate-700 mb-2">Con Eloquent, guardar un vuelo es tan simple como:</p>
                    <code class="block bg-indigo-900 text-indigo-100 p-2 rounded text-xs font-mono mb-4">Vuelo::create([...datos...]);</code>
                    <p class="text-sm text-slate-700 mb-2">Y buscar todos los vuelos a La Paz es:</p>
                    <code class="block bg-indigo-900 text-indigo-100 p-2 rounded text-xs font-mono">Vuelo::where('destino', 'LPB')->get();</code>
                </div>
            </div>
        </section>

        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">10. Factories y Seeders (Datos Falsos)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Un ingeniero no pierde 2 horas llenando formularios a mano para probar su sistema. Usamos <strong>Factories</strong> (plantillas de datos falsos) y <strong>Seeders</strong> (sembradores) para llenar la base de datos con miles de registros en 1 segundo.
            </p>
            <div class="bg-slate-100 p-4 rounded-lg font-mono text-sm text-slate-800 border-l-4 border-emerald-500 shadow-sm">
                <span class="text-slate-500">// Llenar la tabla con 50 vuelos aleatorios de prueba</span><br>
                <span class="text-purple-600">Vuelo</span>::factory()->count(<span class="text-blue-600">50</span>)->create();
            </div>
        </section>

        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">11. Controladores Resource (RESTful)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                En lugar de crear 7 rutas diferentes a mano para el CRUD (Crear, Leer, Actualizar, Eliminar), Laravel automatiza todo bajo el estándar REST. Al crear un controlador con la bandera <code>-r</code> (Resource), Laravel genera automáticamente los 7 métodos mágicos.
            </p>
            <div class="overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200">
                <table class="w-full text-left border-collapse text-sm">
                    <thead>
                        <tr class="bg-slate-50 text-slate-700 uppercase text-xs">
                            <th class="p-3 border-b">Método HTTP</th>
                            <th class="p-3 border-b">Ruta (URL)</th>
                            <th class="p-3 border-b">Función en el Controlador</th>
                            <th class="p-3 border-b">Propósito</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td class="p-3 border-b font-bold text-blue-600">GET</td><td class="p-3 border-b font-mono">/vuelos</td><td class="p-3 border-b font-mono font-bold text-purple-600">index()</td><td class="p-3 border-b text-slate-600">Muestra la tabla con todos los vuelos.</td></tr>
                        <tr class="bg-slate-50"><td class="p-3 border-b font-bold text-green-600">GET</td><td class="p-3 border-b font-mono">/vuelos/create</td><td class="p-3 border-b font-mono font-bold text-purple-600">create()</td><td class="p-3 border-b text-slate-600">Muestra el formulario para crear uno nuevo.</td></tr>
                        <tr><td class="p-3 border-b font-bold text-orange-600">POST</td><td class="p-3 border-b font-mono">/vuelos</td><td class="p-3 border-b font-mono font-bold text-purple-600">store()</td><td class="p-3 border-b text-slate-600">Guarda el vuelo en la Base de Datos.</td></tr>
                        <tr class="bg-slate-50"><td class="p-3 border-b font-bold text-blue-600">GET</td><td class="p-3 border-b font-mono">/vuelos/{id}</td><td class="p-3 border-b font-mono font-bold text-purple-600">show()</td><td class="p-3 border-b text-slate-600">Muestra los detalles de UN solo vuelo.</td></tr>
                        <tr><td class="p-3 border-b font-bold text-rose-600">DELETE</td><td class="p-3 border-b font-mono">/vuelos/{id}</td><td class="p-3 border-b font-mono font-bold text-purple-600">destroy()</td><td class="p-3 border-b text-slate-600">Elimina el vuelo de la BD.</td></tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">12. Blade Layouts (Arquitectura Visual)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Un error de novato es copiar y pegar el Navbar y el Footer en todas las páginas HTML. En Laravel, creamos una <strong>Plantilla Maestra (Layout)</strong> y las demás vistas solo "inyectan" su contenido en ella usando <code>@extends</code> y <code>@section</code>.
            </p>
        </section>

        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">13. Formularios y el Escudo CSRF</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Laravel es un búnker de seguridad por defecto. Si intentas enviar un formulario <code>POST</code> sin autorización, Laravel te lanzará un error <strong>419 PAGE EXPIRED</strong>. Para evitarlo, todo formulario debe incluir la directiva <code>@csrf</code>, que genera un token oculto e irrepetible.
            </p>
            <div class="bg-slate-900 rounded-xl shadow-lg p-5 border border-slate-700">
                <pre class="font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;form</span> <span class="text-green-400">action</span>=<span class="text-yellow-300">"{{ route('vuelos.store') }}"</span> <span class="text-green-400">method</span>=<span class="text-yellow-300">"POST"</span><span class="text-pink-400">&gt;</span>
    <span class="text-yellow-300 font-bold border-b border-rose-500 border-dashed">@csrf</span> <span class="text-gray-400">&lt;!-- ¡OBLIGATORIO PARA LA SEGURIDAD! --&gt;</span>
    
    <span class="text-pink-400">&lt;input</span> <span class="text-green-400">type</span>=<span class="text-yellow-300">"text"</span> <span class="text-green-400">name</span>=<span class="text-yellow-300">"destino"</span><span class="text-pink-400">&gt;</span>
    <span class="text-pink-400">&lt;button</span> <span class="text-green-400">type</span>=<span class="text-yellow-300">"submit"</span><span class="text-pink-400">&gt;</span>Guardar Vuelo<span class="text-pink-400">&lt;/button&gt;</span>
<span class="text-pink-400">&lt;/form&gt;</span></pre>
            </div>
        </section>

        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">14. Validación (Nunca confíes en el usuario)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Antes de tocar la base de datos, debemos asegurar que el usuario no envíe datos basura (como un destino vacío o un texto en un campo numérico). Laravel lo hace con una sola línea de código elegante en el Controlador.
            </p>
            <div class="bg-slate-900 rounded-xl shadow-lg p-5 border border-slate-700">
                <pre class="font-mono text-sm text-blue-300 overflow-x-auto">
<span class="text-white">$request</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">validate</span>([
    <span class="text-green-400">'codigo_vuelo'</span> =&gt; <span class="text-green-400">'required|max:10|unique:vuelos'</span>,
    <span class="text-green-400">'destino'</span>      =&gt; <span class="text-green-400">'required|string'</span>,
    <span class="text-green-400">'asientos'</span>     =&gt; <span class="text-green-400">'required|integer|min:10'</span>
]); <span class="text-gray-400">// Si falla, Laravel automáticamente redirige hacia atrás con los errores.</span></pre>
            </div>
        </section>

        <section class="mt-20 mb-10 bg-gradient-to-br from-[#003366] to-blue-900 p-8 md:p-12 rounded-[2rem] shadow-2xl text-white relative overflow-hidden">
            <i class="fas fa-project-diagram absolute -right-10 -bottom-10 text-white/5 text-[20rem] transform -rotate-12"></i>
            <div class="relative z-10">
                <h3 class="text-3xl font-black uppercase text-blue-300 mb-6">15. Resumen del Flujo CRUD</h3>
                <p class="text-lg text-blue-100 leading-relaxed mb-8">
                    Dominar Laravel es entender esta coreografía. Cuando un administrador quiere agregar un nuevo avión, este es el viaje exacto que hacen los datos en tu sistema:
                </p>
                <div class="space-y-4 font-mono text-sm">
                    <div class="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20">
                        <span class="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">1</span>
                        <p>El administrador entra a <strong>/aviones/create</strong>.</p>
                    </div>
                    <div class="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20">
                        <span class="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">2</span>
                        <p>El <strong>Router</strong> lo intercepta y llama a <strong>AvionController@create</strong>.</p>
                    </div>
                    <div class="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20">
                        <span class="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">3</span>
                        <p>El controlador devuelve la vista <strong>create.blade.php</strong> (el formulario HTML).</p>
                    </div>
                    <div class="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20">
                        <span class="bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">4</span>
                        <p>El admin llena los datos, presiona Guardar, y envía un <strong>POST</strong> a <strong>/aviones</strong>.</p>
                    </div>
                    <div class="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20">
                        <span class="bg-rose-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-lg">5</span>
                        <p>El controlador recibe la orden en <strong>AvionController@store</strong>, <strong>valida</strong> los datos, y usa el Modelo (<strong>Avion::create</strong>) para guardar en la BD.</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;