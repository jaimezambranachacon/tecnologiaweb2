// content/texto_base_u05.js

// Lógica Global para el Simulador Interactivo
window.slideActualBD = 1;
window.moverSimuladorBD = function(direccion) {
    // Ocultar actual
    document.getElementById('sim-bd-' + window.slideActualBD).classList.remove('flex');
    document.getElementById('sim-bd-' + window.slideActualBD).classList.add('hidden');
    
    // Calcular siguiente
    window.slideActualBD += direccion;
    
    // Limites
    if (window.slideActualBD < 1) window.slideActualBD = 1;
    if (window.slideActualBD > 3) window.slideActualBD = 3;
    
    // Mostrar nuevo
    document.getElementById('sim-bd-' + window.slideActualBD).classList.remove('hidden');
    document.getElementById('sim-bd-' + window.slideActualBD).classList.add('flex');

    // Actualizar botones
    document.getElementById('btn-bd-prev').disabled = (window.slideActualBD === 1);
    document.getElementById('btn-bd-next').disabled = (window.slideActualBD === 3);
    
    // Actualizar opacidad de botones visualmente
    document.getElementById('btn-bd-prev').style.opacity = (window.slideActualBD === 1) ? '0.5' : '1';
    document.getElementById('btn-bd-next').style.opacity = (window.slideActualBD === 3) ? '0.5' : '1';
};



const pag_texto_base_u05 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-cyan-600 font-black uppercase text-xs tracking-[0.3em]">TEXTO BASE / UNIDAD 05</span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            PERSISTENCIA Y<br>
            <span class="text-cyan-600">BASES DE DATOS (MARIADB)</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            La memoria RAM es volátil, pero la Base de Datos es eterna. Aquí aprenderemos a diseñar tablas relacionales y a conectar nuestro motor PHP utilizando el estándar más seguro de la industria: PDO.
        </p>
        <div class="h-2 w-24 bg-cyan-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">1. MariaDB y el Lenguaje SQL</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                MariaDB es un gestor de bases de datos relacionales. La información no se guarda suelta, sino en <strong>Tablas</strong> (como hojas de cálculo) que se conectan entre sí. Para hablar con la base de datos, usamos un lenguaje universal llamado <strong>SQL</strong> (Structured Query Language).
            </p>
            
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <div class="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                    <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    <span class="text-slate-400 text-[10px] font-mono ml-2 uppercase">farmacia_db.sql</span>
                </div>
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-gray-400">-- 1. CREAR (Insertar un nuevo medicamento)</span>
<span class="text-pink-400">INSERT INTO</span> <span class="text-white">medicamentos</span> (<span class="text-green-400">nombre</span>, <span class="text-green-400">principio_activo</span>, <span class="text-green-400">stock</span>) 
<span class="text-pink-400">VALUES</span> (<span class="text-green-400">'Postinor'</span>, <span class="text-green-400">'Levonorgestrel'</span>, <span class="text-yellow-300">50</span>);

<span class="text-gray-400">-- 2. LEER (Buscar medicamentos con stock bajo)</span>
<span class="text-pink-400">SELECT</span> <span class="text-green-400">nombre</span>, <span class="text-green-400">stock</span> <span class="text-pink-400">FROM</span> <span class="text-white">medicamentos</span> <span class="text-pink-400">WHERE</span> <span class="text-white">stock</span> &lt; <span class="text-yellow-300">10</span>;

<span class="text-gray-400">-- 3. ACTUALIZAR (Modificar el stock después de una venta)</span>
<span class="text-pink-400">UPDATE</span> <span class="text-white">medicamentos</span> <span class="text-pink-400">SET</span> <span class="text-white">stock</span> = <span class="text-yellow-300">49</span> <span class="text-pink-400">WHERE</span> <span class="text-white">id</span> = <span class="text-yellow-300">1</span>;

<span class="text-gray-400">-- 4. ELIMINAR (Borrar un registro)</span>
<span class="text-pink-400">DELETE FROM</span> <span class="text-white">medicamentos</span> <span class="text-pink-400">WHERE</span> <span class="text-white">id</span> = <span class="text-yellow-300">1</span>;</pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">2. El Puente PHP: Conexión con PDO</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Para que nuestro PHP ejecute ese código SQL, necesitamos conectarlos. Usaremos <strong>PDO (PHP Data Objects)</strong>. Es una clase nativa de PHP que soporta docenas de bases de datos diferentes y está orientada a objetos (aplicando lo que aprendimos en la Unidad 04).
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <div class="bg-slate-800 px-4 py-2 border-b border-slate-700">
                    <span class="text-slate-400 text-[10px] font-mono uppercase">conexion.php</span>
                </div>
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;?php</span>
<span class="text-white">$host</span> = <span class="text-green-400">"localhost"</span>;
<span class="text-white">$db_name</span> = <span class="text-green-400">"farmacia_db"</span>;
<span class="text-white">$username</span> = <span class="text-green-400">"root"</span>;
<span class="text-white">$password</span> = <span class="text-green-400">""</span>; <span class="text-gray-400">// En XAMPP suele estar vacío por defecto</span>

<span class="text-gray-400">// ¡Aplicamos nuestro Try/Catch para proteger el sistema si la BD se cae!</span>
<span class="text-pink-400">try</span> {
    <span class="text-gray-400">// Creamos el Objeto PDO (Instanciamos la clase)</span>
    <span class="text-white">$conexion</span> = <span class="text-pink-400">new</span> <span class="text-yellow-300">PDO</span>(<span class="text-green-400">"mysql:host=$host;dbname=$db_name;charset=utf8"</span>, <span class="text-white">$username</span>, <span class="text-white">$password</span>);
    
    <span class="text-gray-400">// Configuramos PDO para que lance Excepciones reales ante cualquier error SQL</span>
    <span class="text-white">$conexion</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">setAttribute</span>(<span class="text-yellow-300">PDO</span>::<span class="text-white">ATTR_ERRMODE</span>, <span class="text-yellow-300">PDO</span>::<span class="text-white">ERRMODE_EXCEPTION</span>);
    
    <span class="text-pink-400">echo</span> <span class="text-green-400">"¡Conexión a MariaDB exitosa!"</span>;

} <span class="text-pink-400">catch</span>(<span class="text-yellow-300">PDOException</span> <span class="text-white">$error</span>) {
    <span class="text-pink-400">echo</span> <span class="text-green-400">"Error crítico de base de datos: "</span> . <span class="text-white">$error</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">getMessage</span>();
}
<span class="text-pink-400">?&gt;</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">3. Seguridad: Sentencias Preparadas</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                <strong>Jamás</strong> concatenes una variable directamente en tu SQL. Eso abre la puerta a la <em>Inyección SQL</em> (el hackeo más común del mundo). Con PDO usamos <strong>Sentencias Preparadas</strong>: primero enviamos la estructura SQL con "comodines" (?), y luego enviamos los datos por separado.
            </p>
            
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;?php</span>
<span class="text-gray-400">// Supongamos que este dato viene de $_POST["busqueda"]</span>
<span class="text-white">$principioActivo</span> = <span class="text-green-400">"Levonorgestrel"</span>; 

<span class="text-gray-400">// 1. PREPARAR (El SQL viaja primero al servidor, los '?' son los comodines seguros)</span>
<span class="text-white">$sql</span> = <span class="text-green-400">"SELECT nombre, stock FROM medicamentos WHERE principio_activo = ?"</span>;
<span class="text-white">$sentencia</span> = <span class="text-white">$conexion</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">prepare</span>(<span class="text-white">$sql</span>);

<span class="text-gray-400">// 2. EJECUTAR (Enviamos los datos reales dentro de un Arreglo)</span>
<span class="text-white">$sentencia</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">execute</span>([<span class="text-white">$principioActivo</span>]);

<span class="text-gray-400">// 3. OBTENER (Fetch) los resultados como un Arreglo Asociativo</span>
<span class="text-white">$resultados</span> = <span class="text-white">$sentencia</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">fetchAll</span>(<span class="text-yellow-300">PDO</span>::<span class="text-white">FETCH_ASSOC</span>);

<span class="text-gray-400">// Recorremos los datos usando el foreach que aprendimos en la Unidad 04</span>
<span class="text-pink-400">foreach</span>(<span class="text-white">$resultados</span> <span class="text-pink-400">as</span> <span class="text-white">$med</span>) {
    <span class="text-pink-400">echo</span> <span class="text-green-400">"Producto: "</span> . <span class="text-white">$med</span>[<span class="text-green-400">'nombre'</span>] . <span class="text-green-400">" - Quedan: "</span> . <span class="text-white">$med</span>[<span class="text-green-400">'stock'</span>] . <span class="text-green-400">"&lt;br&gt;"</span>;
}
<span class="text-pink-400">?&gt;</span></pre>
            </div>
            
            <div class="p-6 bg-cyan-50 border-l-4 border-cyan-500 rounded-r-2xl mt-8">
                <p class="text-sm text-cyan-900">
                    <strong><i class="fas fa-lock text-cyan-600 mr-2"></i>El truco del Hacker neutralizado:</strong> Si un atacante escribe <code>"Levonorgestrel' OR '1'='1"</code> en el formulario, PDO no lo interpreta como código SQL. Lo trata como un simple texto inofensivo y buscará literalmente ese nombre larguísimo en la base de datos (sin encontrar nada). ¡Tu sistema es seguro!
                </p>
            </div>
        </section>

        <section class="mt-24">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">4. Laboratorio Libre: Gamificación SQL</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-10">
                Aprender a redactar consultas (Queries) SQL puede parecer aburrido si solo miras tablas en blanco y negro. Vamos a resolver crímenes y escapar de islas desiertas usando exclusivamente código SQL.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                <div class="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-400 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                    <i class="fas fa-search absolute -right-4 -bottom-4 text-cyan-50 text-[8rem] group-hover:scale-110 transition-transform"></i>
                    <div class="relative z-10 flex-1">
                        <div class="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                            <i class="fas fa-user-secret text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-black text-[#003366] uppercase mb-3">SQL Murder Mystery</h4>
                        <p class="text-sm text-slate-600 leading-relaxed mb-6">
                            <strong>El Reto:</strong> Ha ocurrido un asesinato en SQL City. Te dan acceso a la base de datos de la policía (tablas de ciudadanos, entrevistas, gimnasios y vehículos). Debes usar <code>SELECT</code>, <code>JOIN</code> y <code>WHERE</code> para cruzar datos y descubrir al culpable.
                        </p>
                    </div>
                    <a href="https://mystery.knightlab.com/" target="_blank" class="mt-auto block text-center bg-slate-50 border border-slate-200 text-[#003366] font-black uppercase text-xs py-3 rounded-xl hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-colors z-10">
                        Investigar el caso (Jugar) <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                </div>

                <div class="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-lg hover:shadow-emerald-500/20 hover:border-emerald-400 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                    <i class="fas fa-map-marked-alt absolute -right-4 -bottom-4 text-emerald-50 text-[8rem] group-hover:scale-110 transition-transform"></i>
                    <div class="relative z-10 flex-1">
                        <div class="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                            <i class="fas fa-tree text-2xl"></i>
                        </div>
                        <h4 class="text-xl font-black text-[#003366] uppercase mb-3">SQL Island (Aventura Textual)</h4>
                        <p class="text-sm text-slate-600 leading-relaxed mb-6">
                            <strong>El Reto:</strong> Sobreviviste a un accidente aéreo y estás varado en una isla. Tienes que explorar las aldeas, conseguir ítems e interactuar con los habitantes enviando consultas SQL directamente en la consola para poder construir tu escape.
                        </p>
                    </div>
                    <a href="https://sql-island.informatik.uni-kl.de/" target="_blank" class="mt-auto block text-center bg-slate-50 border border-slate-200 text-[#003366] font-black uppercase text-xs py-3 rounded-xl hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors z-10">
                        Escapar de la isla (Jugar) <i class="fas fa-arrow-right ml-1"></i>
                    </a>
                </div>

            </div>
        </section>


        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">5. Las Formas Normales (Normalización)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                La normalización es el proceso de organizar los datos en la base de datos para evitar la redundancia (datos repetidos) y garantizar la integridad lógica. Existen 3 reglas de oro que toda tabla debe cumplir.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-teal-50 border-t-4 border-teal-500 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div class="absolute -right-4 -top-4 text-teal-500/10 font-black text-8xl">1</div>
                    <h4 class="font-black text-[#003366] text-xl mb-2 relative z-10">Primera Forma (1FN)</h4>
                    <span class="bg-teal-200 text-teal-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest relative z-10">Atomicidad</span>
                    <p class="text-sm text-slate-600 mt-4 relative z-10">
                        Cada celda de la tabla debe contener un <strong>único valor</strong>. No puedes tener un campo "Teléfonos" que contenga "777111, 777222". Debes separarlos o crear una tabla de contactos.
                    </p>
                </div>

                <div class="bg-blue-50 border-t-4 border-blue-500 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div class="absolute -right-4 -top-4 text-blue-500/10 font-black text-8xl">2</div>
                    <h4 class="font-black text-[#003366] text-xl mb-2 relative z-10">Segunda Forma (2FN)</h4>
                    <span class="bg-blue-200 text-blue-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest relative z-10">Dependencia Total</span>
                    <p class="text-sm text-slate-600 mt-4 relative z-10">
                        Debe cumplir la 1FN. Además, todos los datos de la tabla deben depender <strong>completamente de la Llave Primaria (PK)</strong>. Si tienes una tabla "Ventas" con un campo "Nombre_Producto", está mal. El nombre depende del Producto, no de la Venta.
                    </p>
                </div>

                <div class="bg-purple-50 border-t-4 border-purple-500 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                    <div class="absolute -right-4 -top-4 text-purple-500/10 font-black text-8xl">3</div>
                    <h4 class="font-black text-[#003366] text-xl mb-2 relative z-10">Tercera Forma (3FN)</h4>
                    <span class="bg-purple-200 text-purple-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest relative z-10">Independencia Transitiva</span>
                    <p class="text-sm text-slate-600 mt-4 relative z-10">
                        Debe cumplir la 2FN. Ningún campo que no sea llave debe depender de otro campo que tampoco sea llave. Por ejemplo, no guardes la "Edad" si ya guardas la "Fecha_Nacimiento"; la edad se calcula, no se almacena.
                    </p>
                </div>
            </div>
        </section>

        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">6. Laboratorio Interactivo: Relaciones</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                Utiliza los controles para explorar cómo se conectan las tablas en el mundo real. Presta atención a la <strong>Llave Primaria (PK - Amarilla)</strong> y cómo viaja hacia otra tabla convirtiéndose en <strong>Llave Foránea (FK - Celeste)</strong>.
            </p>

            <div class="bg-slate-900 rounded-[2rem] p-6 md:p-10 shadow-2xl relative border border-slate-700">
                
                <div id="sim-bd-1" class="flex flex-col items-center min-h-[300px] transition-all duration-500">
                    <div class="text-center mb-6">
                        <span class="bg-teal-500 text-white font-black px-4 py-1 rounded-full text-sm tracking-widest uppercase">Relación 1 a 1 (1:1)</span>
                        <p class="text-slate-400 text-sm mt-3">Ejemplo: Un Usuario solo puede tener un Perfil Médico, y ese Perfil Médico pertenece a un solo Usuario.</p>
                    </div>
                    
                    <div class="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full justify-center mt-4">
                        <div class="bg-slate-800 border border-slate-600 rounded-xl overflow-hidden w-64 shadow-lg">
                            <div class="bg-slate-700 text-white font-bold p-2 text-center border-b border-slate-600">usuarios</div>
                            <div class="p-3 text-sm font-mono text-slate-300">
                                <div class="bg-yellow-500/20 border border-yellow-500/50 p-1 rounded mb-1"><span class="text-yellow-400 font-bold">PK id</span> = 1</div>
                                <div class="p-1">nombre = "Jimmy"</div>
                                <div class="p-1">email = "profe@upds.edu"</div>
                            </div>
                        </div>
                        
                        <div class="flex items-center text-teal-400 font-bold text-xl">
                            <span class="hidden md:inline">──────</span>
                            <i class="fas fa-link mx-2"></i>
                            <span class="hidden md:inline">──────</span>
                        </div>

                        <div class="bg-slate-800 border border-slate-600 rounded-xl overflow-hidden w-64 shadow-lg relative">
                            <div class="bg-slate-700 text-white font-bold p-2 text-center border-b border-slate-600">perfiles_medicos</div>
                            <div class="p-3 text-sm font-mono text-slate-300">
                                <div class="bg-yellow-500/20 border border-yellow-500/50 p-1 rounded mb-1"><span class="text-yellow-400 font-bold">PK id</span> = 99</div>
                                <div class="bg-cyan-500/20 border border-cyan-500/50 p-1 rounded mb-1"><span class="text-cyan-400 font-bold">FK usuario_id</span> = 1</div>
                                <div class="p-1">sangre = "O+"</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="sim-bd-2" class="hidden flex-col items-center min-h-[300px] transition-all duration-500">
                    <div class="text-center mb-6">
                        <span class="bg-blue-500 text-white font-black px-4 py-1 rounded-full text-sm tracking-widest uppercase">Relación 1 a Muchos (1:N)</span>
                        <p class="text-slate-400 text-sm mt-3">Ejemplo: Una Categoría tiene muchos Medicamentos, pero un Medicamento pertenece a una sola Categoría.</p>
                    </div>
                    
                    <div class="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full justify-center mt-4">
                        <div class="bg-slate-800 border border-slate-600 rounded-xl overflow-hidden w-64 shadow-lg">
                            <div class="bg-slate-700 text-white font-bold p-2 text-center border-b border-slate-600">categorias</div>
                            <div class="p-3 text-sm font-mono text-slate-300">
                                <div class="bg-yellow-500/20 border border-yellow-500/50 p-1 rounded mb-1"><span class="text-yellow-400 font-bold">PK id</span> = 5</div>
                                <div class="p-1">nombre = "Analgésicos"</div>
                            </div>
                        </div>
                        
                        <div class="flex flex-col md:flex-row items-center text-blue-400 font-bold text-xl relative">
                            <span class="hidden md:inline">────</span>
                            <div class="flex flex-col gap-2">
                                <i class="fas fa-arrow-right"></i>
                                <i class="fas fa-arrow-right"></i>
                                <i class="fas fa-arrow-right"></i>
                            </div>
                        </div>

                        <div class="flex flex-col gap-3">
                            <div class="bg-slate-800 border border-slate-600 rounded-xl overflow-hidden w-64 shadow-lg">
                                <div class="bg-slate-700 text-white font-bold p-1 text-center border-b border-slate-600 text-xs">medicamentos (A)</div>
                                <div class="p-2 text-xs font-mono text-slate-300">
                                    <div class="p-1">nombre = "Paracetamol"</div>
                                    <div class="bg-cyan-500/20 border border-cyan-500/50 p-1 rounded"><span class="text-cyan-400 font-bold">FK categoria_id</span> = 5</div>
                                </div>
                            </div>
                            <div class="bg-slate-800 border border-slate-600 rounded-xl overflow-hidden w-64 shadow-lg">
                                <div class="bg-slate-700 text-white font-bold p-1 text-center border-b border-slate-600 text-xs">medicamentos (B)</div>
                                <div class="p-2 text-xs font-mono text-slate-300">
                                    <div class="p-1">nombre = "Ibuprofeno"</div>
                                    <div class="bg-cyan-500/20 border border-cyan-500/50 p-1 rounded"><span class="text-cyan-400 font-bold">FK categoria_id</span> = 5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="sim-bd-3" class="hidden flex-col items-center min-h-[300px] transition-all duration-500">
                    <div class="text-center mb-6">
                        <span class="bg-purple-500 text-white font-black px-4 py-1 rounded-full text-sm tracking-widest uppercase">Relación Muchos a Muchos (N:M)</span>
                        <p class="text-slate-400 text-sm mt-3">Ejemplo: Un Estudiante inscribe muchas Materias, y una Materia tiene muchos Estudiantes. <br><strong class="text-rose-400">Requiere Tabla Pivote (Intermedia).</strong></p>
                    </div>
                    
                    <div class="flex flex-col md:flex-row items-center gap-4 w-full justify-center mt-2">
                        <div class="bg-slate-800 border border-slate-600 rounded-xl overflow-hidden w-48 shadow-lg">
                            <div class="bg-slate-700 text-white font-bold p-2 text-center border-b border-slate-600 text-sm">estudiantes</div>
                            <div class="p-3 text-xs font-mono text-slate-300">
                                <div class="bg-yellow-500/20 border border-yellow-500/50 p-1 rounded mb-1"><span class="text-yellow-400 font-bold">PK id</span> = 8</div>
                                <div class="p-1">nombre = "Ana"</div>
                            </div>
                        </div>
                        
                        <i class="fas fa-arrow-right text-purple-400 hidden md:block"></i>

                        <div class="bg-[#003366] border-2 border-purple-500 rounded-xl overflow-hidden w-56 shadow-2xl transform scale-105 z-10">
                            <div class="bg-purple-600 text-white font-black p-2 text-center border-b border-purple-400 text-xs tracking-widest uppercase">estudiante_materia<br>(Tabla Pivote)</div>
                            <div class="p-3 text-xs font-mono text-slate-200 text-center">
                                <div class="bg-cyan-500/30 border border-cyan-400 p-1 rounded mb-2"><span class="text-cyan-300 font-bold">FK estudiante_id</span> = 8</div>
                                <div class="bg-emerald-500/30 border border-emerald-400 p-1 rounded"><span class="text-emerald-300 font-bold">FK materia_id</span> = 3</div>
                            </div>
                        </div>

                        <i class="fas fa-arrow-left text-purple-400 hidden md:block"></i>

                        <div class="bg-slate-800 border border-slate-600 rounded-xl overflow-hidden w-48 shadow-lg">
                            <div class="bg-slate-700 text-white font-bold p-2 text-center border-b border-slate-600 text-sm">materias</div>
                            <div class="p-3 text-xs font-mono text-slate-300">
                                <div class="bg-yellow-500/20 border border-yellow-500/50 p-1 rounded mb-1"><span class="text-yellow-400 font-bold">PK id</span> = 3</div>
                                <div class="p-1">nombre = "Web II"</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-10 flex justify-between items-center border-t border-slate-700 pt-6">
                    <button id="btn-bd-prev" onclick="window.moverSimuladorBD(-1)" disabled style="opacity: 0.5;" class="bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 px-6 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all">
                        <i class="fas fa-chevron-left"></i> Atrás
                    </button>
                    
                    <div class="flex gap-2 text-slate-500 text-xs">
                        <i class="fas fa-circle text-teal-500"></i>
                        <i class="fas fa-circle text-blue-500"></i>
                        <i class="fas fa-circle text-purple-500"></i>
                    </div>

                    <button id="btn-bd-next" onclick="window.moverSimuladorBD(1)" class="bg-[#00aaff] hover:bg-blue-500 text-white border border-blue-400 px-6 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20">
                        Siguiente <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
                
            </div>
            
            <div class="p-6 bg-slate-50 border-l-4 border-yellow-500 rounded-r-2xl mt-8 shadow-sm">
                <p class="text-sm text-slate-700">
                    <strong><i class="fas fa-lightbulb text-yellow-500 mr-2"></i>El Secreto de Eloquent:</strong> Cuando pasemos a Laravel en la próxima unidad, verás que sus modelos (<code>hasOne</code>, <code>hasMany</code>, <code>belongsToMany</code>) hacen exactamente esto por debajo. Si entiendes este simulador, Laravel te parecerá magia fácil de dominar.
                </p>
            </div>
        </section>



    </div>
</div>
`;