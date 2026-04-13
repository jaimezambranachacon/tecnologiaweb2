// content/texto_base_u04.js
const pag_texto_base_u09 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-indigo-500 font-black uppercase text-xs tracking-[0.3em]">TEXTO BASE / UNIDAD 04</span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            EL MOTOR<br>
            <span class="text-indigo-500">BACKEND (PHP 8)</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Bienvenido al lado del servidor. PHP es el lenguaje que procesa la lógica de negocio, asegura las transacciones y se comunica con la base de datos antes de enviarle cualquier resultado al usuario.
        </p>
        <div class="h-2 w-24 bg-indigo-500 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">1. Sintaxis Core y Variables</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Todo código PHP debe vivir dentro de las etiquetas <code>&lt;?php ... ?&gt;</code>. A diferencia de JS, en PHP <strong>todas las variables inician obligatoriamente con el símbolo del dólar (<code>$</code>)</strong> y cada instrucción debe terminar con un punto y coma (<code>;</code>).
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <div class="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                    <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    <span class="text-slate-400 text-[10px] font-mono ml-2 uppercase">variables.php</span>
                </div>
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;?php</span>

<span class="text-gray-400">// Declaración de variables</span>
<span class="text-white">$nombreSistema</span> = <span class="text-green-400">"Sincronía Aérea"</span>; <span class="text-gray-400">// String</span>
<span class="text-white">$version</span> = <span class="text-yellow-300">8.2</span>; <span class="text-gray-400">// Float</span>
<span class="text-white">$enProduccion</span> = <span class="text-yellow-300">true</span>; <span class="text-gray-400">// Boolean</span>

<span class="text-gray-400">// Concatenación (En PHP se usa el PUNTO, no el signo +)</span>
<span class="text-pink-400">echo</span> <span class="text-green-400">"Bienvenido a "</span> . <span class="text-white">$nombreSistema</span> . <span class="text-green-400">" versión "</span> . <span class="text-white">$version</span>;

<span class="text-gray-400">// Interpolación (Las comillas dobles leen la variable por dentro)</span>
<span class="text-pink-400">echo</span> <span class="text-green-400">"&lt;br&gt;Bienvenido a $nombreSistema"</span>;

<span class="text-pink-400">?&gt;</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">2. Arreglos (Arrays Indexados y Asociativos)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                En PHP, los arreglos son increíblemente poderosos. Destacan los <strong>Arreglos Asociativos</strong>, donde en lugar de usar números (0, 1, 2...), usamos "Llaves" (claves) con nombres. <em>Nota de Ingeniería: Así es exactamente como la Base de Datos nos devolverá la información más adelante.</em>
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;?php</span>
<span class="text-gray-400">// Array Tradicional (Indexado numéricamente)</span>
<span class="text-white">$destinos</span> = [<span class="text-green-400">"Santa Cruz"</span>, <span class="text-green-400">"La Paz"</span>, <span class="text-green-400">"Cochabamba"</span>];
<span class="text-pink-400">echo</span> <span class="text-white">$destinos</span>[<span class="text-yellow-300">0</span>]; <span class="text-gray-400">// Imprime: Santa Cruz</span>

<span class="text-gray-400">// Array Asociativo (Clave => Valor)</span>
<span class="text-white">$vueloBOA</span> = [
    <span class="text-green-400">"codigo"</span>    <span class="text-pink-400">=&gt;</span> <span class="text-green-400">"OB-738"</span>,
    <span class="text-green-400">"origen"</span>    <span class="text-pink-400">=&gt;</span> <span class="text-green-400">"VVI"</span>,
    <span class="text-green-400">"destino"</span>   <span class="text-pink-400">=&gt;</span> <span class="text-green-400">"LPB"</span>,
    <span class="text-green-400">"pasajeros"</span> <span class="text-pink-400">=&gt;</span> <span class="text-yellow-300">145</span>
];

<span class="text-gray-400">// Accediendo a los datos asociativos</span>
<span class="text-pink-400">echo</span> <span class="text-green-400">"El vuelo "</span> . <span class="text-white">$vueloBOA</span>[<span class="text-green-400">"codigo"</span>] . <span class="text-green-400">" va hacia "</span> . <span class="text-white">$vueloBOA</span>[<span class="text-green-400">"destino"</span>];
<span class="text-pink-400">?&gt;</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">3. Ciclos Especializados: El Foreach</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Aunque PHP tiene ciclos <code>for</code> y <code>while</code>, el rey absoluto en el desarrollo web es el <code>foreach</code>. Está diseñado específicamente para recorrer arreglos de datos sin preocuparte por contar cuántos elementos hay.
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;?php</span>
<span class="text-white">$ciudades</span> = [<span class="text-green-400">"Sucre"</span>, <span class="text-green-400">"Tarija"</span>, <span class="text-green-400">"Potosí"</span>];

<span class="text-gray-400">// Recorrer el arreglo e imprimirlo en HTML</span>
<span class="text-pink-400">echo</span> <span class="text-green-400">"&lt;ul&gt;"</span>;
<span class="text-pink-400">foreach</span> (<span class="text-white">$ciudades</span> <span class="text-pink-400">as</span> <span class="text-white">$ciudad</span>) {
    <span class="text-pink-400">echo</span> <span class="text-green-400">"&lt;li&gt;$ciudad&lt;/li&gt;"</span>;
}
<span class="text-pink-400">echo</span> <span class="text-green-400">"&lt;/ul&gt;"</span>;
<span class="text-pink-400">?&gt;</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">4. Funciones (Buenas Prácticas PHP 8)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                En el desarrollo moderno, ya no dejamos que PHP "adivine" el tipo de dato. Usamos el <strong>Tipado Estricto (Type Hinting)</strong>. Le decimos exactamente qué tipo de dato debe recibir la función y qué tipo de dato debe retornar. Esto previene el 90% de los errores en producción.
            </p>

            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;?php</span>
<span class="text-gray-400">/* * Función que recibe dos enteros (int) y retorna un entero (int)
 */</span>
<span class="text-pink-400">function</span> <span class="text-yellow-300">calcularImpuesto</span>(<span class="text-pink-400">int</span> <span class="text-white">$precioBase</span>, <span class="text-pink-400">int</span> <span class="text-white">$porcentaje</span>): <span class="text-pink-400">int</span> {
    <span class="text-white">$impuesto</span> = (<span class="text-white">$precioBase</span> * <span class="text-white">$porcentaje</span>) / <span class="text-yellow-300">100</span>;
    <span class="text-pink-400">return</span> <span class="text-white">$precioBase</span> + <span class="text-white">$impuesto</span>;
}

<span class="text-gray-400">// Llamada correcta</span>
<span class="text-white">$totalPagar</span> = <span class="text-yellow-300">calcularImpuesto</span>(<span class="text-yellow-300">1000</span>, <span class="text-yellow-300">13</span>);
<span class="text-pink-400">echo</span> <span class="text-green-400">"El total es: Bs. "</span> . <span class="text-white">$totalPagar</span>;
<span class="text-pink-400">?&gt;</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">5. Modularización (Include / Require)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Un ingeniero no repite el menú de navegación en 50 archivos diferentes. Creamos un archivo <code>menu.php</code> y lo "inyectamos" donde lo necesitemos.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-indigo-50 p-6 rounded-2xl border border-indigo-200">
                    <h4 class="font-black text-indigo-900 mb-2 uppercase text-sm">Include</h4>
                    <p class="text-sm text-indigo-800 mb-4">Si el archivo no se encuentra, arroja una advertencia (Warning) pero <strong>el código sigue ejecutándose</strong>. (Ideal para el Footer).</p>
                    <pre class="bg-slate-900 p-4 rounded-xl text-[10px] font-mono text-blue-300 overflow-x-auto">
<span class="text-pink-400">include</span> <span class="text-green-400">'footer.php'</span>;</pre>
                </div>
                
                <div class="bg-indigo-50 p-6 rounded-2xl border border-indigo-200">
                    <h4 class="font-black text-indigo-900 mb-2 uppercase text-sm">Require</h4>
                    <p class="text-sm text-indigo-800 mb-4">Si el archivo no se encuentra, arroja un Error Fatal y <strong>detiene por completo la página</strong>. (Ideal para la conexión a la Base de Datos).</p>
                    <pre class="bg-slate-900 p-4 rounded-xl text-[10px] font-mono text-blue-300 overflow-x-auto">
<span class="text-pink-400">require</span> <span class="text-green-400">'conexion_bd.php'</span>;</pre>
                </div>
            </div>
        </section>




        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">6. Superglobales: El Puente con el Usuario</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Antes de entrar a la magia orientada a objetos, debemos saber cómo PHP recibe los datos que el usuario escribe en un formulario HTML. Para esto usamos los arreglos <strong>Superglobales</strong> (<code>$_POST</code> y <code>$_GET</code>), que están disponibles en todo el sistema sin importar dónde te encuentres.
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;?php</span>
<span class="text-gray-400">// Verificamos si el formulario fue enviado por el método POST</span>
<span class="text-pink-400">if</span> (<span class="text-white">$_SERVER</span>[<span class="text-green-400">"REQUEST_METHOD"</span>] === <span class="text-green-400">"POST"</span>) {
    
    <span class="text-gray-400">// Capturamos los datos enviados desde los &lt;input name="..."&gt;</span>
    <span class="text-white">$paciente</span> = <span class="text-white">$_POST</span>[<span class="text-green-400">"nombre_paciente"</span>];
    <span class="text-white">$edad</span> = <span class="text-white">$_POST</span>[<span class="text-green-400">"edad"</span>];
    
    <span class="text-gray-400">// Sanitización básica de seguridad (Evitar Inyecciones XSS)</span>
    <span class="text-white">$pacienteSeguro</span> = <span class="text-yellow-300">htmlspecialchars</span>(<span class="text-white">$paciente</span>);
    
    <span class="text-pink-400">echo</span> <span class="text-green-400">"Registro exitoso para el paciente: "</span> . <span class="text-white">$pacienteSeguro</span>;
}
<span class="text-pink-400">?&gt;</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">7. Programación Orientada a Objetos (POO)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Dejamos de pensar en "líneas de código" y empezamos a pensar en "Cosas" (Objetos). Una <strong>Clase</strong> es el plano o molde (ej: El concepto general de un medicamento). Un <strong>Objeto</strong> es la materialización de ese plano (ej: Una caja física de Paracetamol).
            </p>
            
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <div class="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                    <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    <span class="text-slate-400 text-[10px] font-mono ml-2 uppercase">Medicamento.php</span>
                </div>
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;?php</span>
<span class="text-gray-400">// Definimos la Clase (El Molde)</span>
<span class="text-pink-400">class</span> <span class="text-yellow-300">Medicamento</span> {
    
    <span class="text-gray-400">// Propiedades (Características) - 'public' significa que se pueden ver desde afuera</span>
    <span class="text-pink-400">public</span> <span class="text-pink-400">string</span> <span class="text-white">$nombre</span>;
    <span class="text-pink-400">public</span> <span class="text-pink-400">float</span> <span class="text-white">$dosisMg</span>;

    <span class="text-gray-400">// Métodos (Acciones o Funciones del objeto)</span>
    <span class="text-pink-400">public function</span> <span class="text-yellow-300">mostrarReceta</span>(): <span class="text-pink-400">string</span> {
        <span class="text-gray-400">// Usamos $this-&gt; para referirnos a las propiedades de ESTE objeto específico</span>
        <span class="text-pink-400">return</span> <span class="text-green-400">"Suministrar "</span> . <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span><span class="text-white">nombre</span> . <span class="text-green-400">" de "</span> . <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span><span class="text-white">dosisMg</span> . <span class="text-green-400">"mg."</span>;
    }
}

<span class="text-gray-400">// Instanciación (Crear un Objeto real a partir del molde)</span>
<span class="text-white">$farmaco1</span> = <span class="text-pink-400">new</span> <span class="text-yellow-300">Medicamento</span>();
<span class="text-white">$farmaco1</span><span class="text-pink-400">-&gt;</span><span class="text-white">nombre</span> = <span class="text-green-400">"Levonorgestrel"</span>;
<span class="text-white">$farmaco1</span><span class="text-pink-400">-&gt;</span><span class="text-white">dosisMg</span> = <span class="text-yellow-300">1.5</span>;

<span class="text-pink-400">echo</span> <span class="text-white">$farmaco1</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">mostrarReceta</span>(); 
<span class="text-pink-400">?&gt;</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">8. El Constructor y el Encapsulamiento (Seguridad)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                En ingeniería real, <strong>nunca dejamos las propiedades públicas</strong>. Usamos <code>private</code> para que nadie altere los datos directamente, y creamos un método mágico llamado <code>__construct</code> que exige los datos iniciales al momento de crear el objeto.
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;?php</span>
<span class="text-pink-400">class</span> <span class="text-yellow-300">Paciente</span> {
    <span class="text-gray-400">// Private: Solo esta clase puede modificar estos datos</span>
    <span class="text-pink-400">private</span> <span class="text-pink-400">string</span> <span class="text-white">$nombre</span>;
    <span class="text-pink-400">private</span> <span class="text-pink-400">string</span> <span class="text-white">$historialMedico</span>;

    <span class="text-gray-400">// El Constructor se ejecuta automáticamente al usar 'new'</span>
    <span class="text-pink-400">public function</span> <span class="text-yellow-300">__construct</span>(<span class="text-pink-400">string</span> <span class="text-white">$nom</span>, <span class="text-pink-400">string</span> <span class="text-white">$historial</span>) {
        <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span><span class="text-white">nombre</span> = <span class="text-white">$nom</span>;
        <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span><span class="text-white">historialMedico</span> = <span class="text-white">$historial</span>;
    }

    <span class="text-gray-400">// Getter: Función para poder LEER el dato de forma controlada</span>
    <span class="text-pink-400">public function</span> <span class="text-yellow-300">getHistorial</span>(): <span class="text-pink-400">string</span> {
        <span class="text-pink-400">return</span> <span class="text-green-400">"El historial de "</span> . <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span><span class="text-white">nombre</span> . <span class="text-green-400">" es: "</span> . <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span><span class="text-white">historialMedico</span>;
    }
}

<span class="text-gray-400">// Creamos el objeto pasando los datos obligatorios al constructor en 1 sola línea</span>
<span class="text-white">$paciente1</span> = <span class="text-pink-400">new</span> <span class="text-yellow-300">Paciente</span>(<span class="text-green-400">"María López"</span>, <span class="text-green-400">"Alergia a la penicilina"</span>);

<span class="text-gray-400">// $paciente1-&gt;nombre = "Hackeado"; &lt;-- ESTO DARÍA ERROR FATAL PORQUE ES PRIVATE</span>
<span class="text-pink-400">echo</span> <span class="text-white">$paciente1</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">getHistorial</span>(); 
<span class="text-pink-400">?&gt;</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">9. Herencia: Reutilizando Arquitectura</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                La herencia permite que una Clase "Hija" herede todas las propiedades y métodos de una Clase "Padre". Esto evita repetir código. Usamos la palabra reservada <code>extends</code>.
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;?php</span>
<span class="text-gray-400">// Clase Padre</span>
<span class="text-pink-400">class</span> <span class="text-yellow-300">UsuarioWeb</span> {
    <span class="text-pink-400">protected</span> <span class="text-pink-400">string</span> <span class="text-white">$email</span>; <span class="text-gray-400">// Protected permite que la clase hija sí pueda usarlo</span>
    
    <span class="text-pink-400">public function</span> <span class="text-yellow-300">__construct</span>(<span class="text-pink-400">string</span> <span class="text-white">$correo</span>) {
        <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span><span class="text-white">email</span> = <span class="text-white">$correo</span>;
    }
    
    <span class="text-pink-400">public function</span> <span class="text-yellow-300">iniciarSesion</span>() {
        <span class="text-pink-400">return</span> <span class="text-green-400">"Sesión iniciada para: "</span> . <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span><span class="text-white">email</span>;
    }
}

<span class="text-gray-400">// Clase Hija (Hereda de UsuarioWeb)</span>
<span class="text-pink-400">class</span> <span class="text-yellow-300">Administrador</span> <span class="text-pink-400">extends</span> <span class="text-yellow-300">UsuarioWeb</span> {
    <span class="text-pink-400">private</span> <span class="text-pink-400">int</span> <span class="text-white">$nivelPrivilegio</span>;

    <span class="text-pink-400">public function</span> <span class="text-yellow-300">__construct</span>(<span class="text-pink-400">string</span> <span class="text-white">$correo</span>, <span class="text-pink-400">int</span> <span class="text-white">$nivel</span>) {
        <span class="text-pink-400">parent</span>::<span class="text-yellow-300">__construct</span>(<span class="text-white">$correo</span>); <span class="text-gray-400">// Llama al constructor del Padre</span>
        <span class="text-white">$this</span><span class="text-pink-400">-&gt;</span><span class="text-white">nivelPrivilegio</span> = <span class="text-white">$nivel</span>;
    }

    <span class="text-pink-400">public function</span> <span class="text-yellow-300">borrarBaseDeDatos</span>() {
        <span class="text-pink-400">if</span> (<span class="text-white">$this</span><span class="text-pink-400">-&gt;</span><span class="text-white">nivelPrivilegio</span> === <span class="text-yellow-300">5</span>) {
            <span class="text-pink-400">return</span> <span class="text-green-400">"Acción de súper usuario ejecutada."</span>;
        }
    }
}

<span class="text-white">$admin</span> = <span class="text-pink-400">new</span> <span class="text-yellow-300">Administrador</span>(<span class="text-green-400">"admin@sistema.com"</span>, <span class="text-yellow-300">5</span>);
<span class="text-pink-400">echo</span> <span class="text-white">$admin</span><span class="text-pink-400">-&gt;</span><span class="text-yellow-300">iniciarSesion</span>(); <span class="text-gray-400">// Usa el método heredado sin tener que volver a escribirlo</span>
<span class="text-pink-400">?&gt;</span></pre>
            </div>
        </section>

        <section class="bg-indigo-600 text-white p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden mt-20">
            <i class="fab fa-php absolute -right-6 -bottom-6 text-white/10 text-[15rem]"></i>
            <div class="relative z-10">
                <h3 class="text-3xl font-black text-indigo-200 uppercase mb-4">La Evolución a Laravel</h3>
                <p class="text-lg text-indigo-50 font-light leading-relaxed mb-6">
                    Felicidades. Acabas de comprender el núcleo del ecosistema backend moderno. Cuando entremos a <strong>Laravel</strong>, verás que cada Controlador, Modelo y Migración no es más que una "Clase Hija" que hereda (<code>extends</code>) de las clases maestras del framework. Dominar la POO es el único requisito real para dominar cualquier framework del mercado.
                </p>
                <div class="inline-block border-t border-indigo-400/30 pt-4 mt-2">
                    <span class="text-[10px] uppercase tracking-widest text-indigo-300 font-bold">» Fin de la Unidad 04</span>
                </div>
            </div>
        </section>

        

        

    </div>
</div>
`;