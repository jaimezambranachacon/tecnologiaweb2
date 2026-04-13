// content/texto_base_u05.js
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

    </div>
</div>
`;