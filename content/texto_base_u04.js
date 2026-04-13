// content/texto_base_u04.js
const pag_texto_base_u04 = `
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


<section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">10. Anatomía de un Servidor Web</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                Antes de instalar nuestro entorno de trabajo, debemos dominar el vocabulario técnico de la infraestructura web. En el Backend, tú no programas para un navegador, programas para un <strong>Servidor</strong>.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 hover:shadow-md transition-all">
                    <h4 class="font-black text-indigo-900 text-lg mb-4 border-b border-indigo-200 pb-2">Infraestructura</h4>
                    <ul class="space-y-4">
                        <li>
                            <strong class="text-indigo-700 block"><i class="fas fa-server mr-2"></i>Servidor Web (Apache/Nginx):</strong> Es el "recepcionista". Es el programa que está escuchando 24/7 esperando que alguien escriba tu URL. Cuando llega una petición, busca tus archivos PHP y los ejecuta.
                        </li>
                        <li>
                            <strong class="text-indigo-700 block"><i class="fas fa-database mr-2"></i>BD vs SGBD:</strong> La <strong>BD (Base de Datos)</strong> es la información cruda. El <strong>SGBD (Sistema Gestor)</strong> como MariaDB o MySQL, es el software inteligente que nos permite leer, guardar o borrar esos datos de forma segura.
                        </li>
                    </ul>
                </div>

                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all">
                    <h4 class="font-black text-slate-800 text-lg mb-4 border-b border-slate-200 pb-2">Protocolos y Peticiones</h4>
                    <ul class="space-y-4">
                        <li>
                            <strong class="text-slate-700 block"><i class="fas fa-globe mr-2"></i>HTTP vs HTTPS:</strong> HTTP es el camión de correos normal (cualquiera puede ver el paquete). HTTPS es un camión blindado; la información viaja encriptada usando un certificado SSL.
                        </li>
                        <li>
                            <strong class="text-slate-700 block"><i class="fas fa-exchange-alt mr-2"></i>GET vs POST:</strong> 
                            <span class="text-sm text-slate-600 block mt-1"><span class="font-bold text-blue-600">GET:</span> Pides información. Los datos viajan a la vista en la URL (ej: <code>?id=5</code>). Ideal para búsquedas.</span>
                            <span class="text-sm text-slate-600 block mt-1"><span class="font-bold text-green-600">POST:</span> Envías información sensible. Los datos viajan ocultos en el cuerpo de la petición. Obligatorio para contraseñas y pagos.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="mt-20 mb-10">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">11. Entornos Locales: La Era de Laragon</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                Para programar en tu computadora (Localhost) sin tener que pagar un servidor real en internet, usamos emuladores. Por años, la industria usó <strong>XAMPP</strong> o <strong>WAMP</strong>. Eran buenos, pero pesados, difíciles de actualizar y propensos a errores de puertos. Hoy, la ingeniería moderna exige herramientas más ágiles.
            </p>

            <div class="bg-white border-2 border-indigo-500 rounded-[2rem] p-8 md:p-10 shadow-xl relative overflow-hidden group">
                <i class="fas fa-rocket absolute -right-6 -bottom-6 text-indigo-50 text-[15rem] group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-500"></i>
                
                <div class="relative z-10">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg">
                            <i class="fas fa-layer-group text-3xl"></i>
                        </div>
                        <div>
                            <h4 class="text-3xl font-black text-[#003366] uppercase">Laragon</h4>
                            <span class="text-indigo-500 font-bold text-sm tracking-widest uppercase">El Estándar Definitivo para Laravel</span>
                        </div>
                    </div>

                    <p class="text-slate-700 leading-relaxed mb-8 max-w-3xl">
                        Laragon es un entorno de desarrollo universal increíblemente rápido, ligero e independiente. A diferencia de XAMPP, no modifica los archivos del sistema operativo de tu computadora, lo que significa que nunca se "romperá" misteriosamente por una actualización de Windows.
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="flex gap-4 items-start">
                            <i class="fas fa-magic text-2xl text-yellow-500 mt-1"></i>
                            <div>
                                <h5 class="font-bold text-[#003366]">Dominios Mágicos (.test)</h5>
                                <p class="text-sm text-slate-600 mt-1">Olvida el feo <code>localhost/mi_carpeta/index.php</code>. Laragon crea "Virtual Hosts" automáticamente. Si tu carpeta se llama "farmacia", tu URL local será un profesional <code>http://farmacia.test</code>.</p>
                            </div>
                        </div>
                        
                        <div class="flex gap-4 items-start">
                            <i class="fab fa-git-alt text-2xl text-orange-600 mt-1"></i>
                            <div>
                                <h5 class="font-bold text-[#003366]">Ecosistema Integrado</h5>
                                <p class="text-sm text-slate-600 mt-1">No solo trae PHP, Apache y MariaDB. Ya incluye <strong>Git</strong> (para control de versiones) y <strong>Node.js / NPM</strong> (necesario para compilar el frontend moderno de Laravel).</p>
                            </div>
                        </div>

                        <div class="flex gap-4 items-start">
                            <i class="fas fa-bolt text-2xl text-blue-500 mt-1"></i>
                            <div>
                                <h5 class="font-bold text-[#003366]">Cambio de Versiones en 1 Clic</h5>
                                <p class="text-sm text-slate-600 mt-1">¿Tienes un proyecto viejo en PHP 7.4 y uno nuevo en PHP 8.2? En XAMPP tendrías que desinstalar todo. En Laragon cambias la versión con un solo clic sin apagar el servidor.</p>
                            </div>
                        </div>

                        <div class="flex gap-4 items-start">
                            <i class="fas fa-globe text-2xl text-green-500 mt-1"></i>
                            <div>
                                <h5 class="font-bold text-[#003366]">Compartir por Internet (Ngrok)</h5>
                                <p class="text-sm text-slate-600 mt-1">Trae una función nativa para generar un link público temporal. Puedes mostrarle tu sistema a un cliente en otra ciudad directamente desde tu computadora, sin subirlo a un hosting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">12. Despliegue: Servidores de Producción (VPS)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Una vez que tu código funciona en Laragon, debes subirlo a internet. En el pasado, usábamos "Shared Hosting" (Hosting Compartido), pero para sistemas modernos hechos en Laravel, eso es ineficiente y problemático. La industria actual utiliza <strong>VPS (Virtual Private Server)</strong>. 
            </p>
            [Image of Virtual Private Server (VPS) architecture showing virtualized isolated server instances on a physical server hardware]
            
            <div class="bg-slate-900 rounded-[2rem] p-8 shadow-xl text-white mb-10">
                <div class="flex items-center gap-4 mb-4">
                    <i class="fab fa-linux text-5xl text-yellow-500"></i>
                    <div>
                        <h4 class="text-2xl font-black text-white uppercase">El Requisito de Oro: Linux</h4>
                        <span class="text-yellow-500 text-sm font-bold tracking-widest uppercase">La terminal es tu nueva mejor amiga</span>
                    </div>
                </div>
                <p class="text-slate-300 leading-relaxed mb-4">
                    Al alquilar un VPS, te entregan una computadora en blanco (sin pantalla, sin ratón, solo una consola de comandos negra). El 90% de los servidores del mundo ejecutan <strong>Linux (Ubuntu o Debian)</strong>.
                </p>
                <p class="text-slate-300 leading-relaxed">
                    Un ingeniero web élite debe conocer los comandos básicos de Linux: <code>cd</code> (navegar), <code>ls</code> (listar), <code>nano</code> (editar archivos), <code>chmod</code> (permisos) y <code>sudo</code> (superusuario). Si dominas la terminal, dominas internet.
                </p>
            </div>
        </section>

        <section class="mt-10 mb-10">
            <h4 class="text-2xl font-black text-[#003366] mb-6 flex items-center gap-3">
                <i class="fas fa-trophy text-yellow-500"></i> Ranking Oficial: Top 10 Proveedores VPS
            </h4>
            <p class="text-slate-600 mb-8">
                Existen miles de empresas, pero como ingeniero, debes elegir proveedores que ofrezcan acceso "Root" total, discos NVMe y redes de alta velocidad. Aquí tienes los gigantes de la industria categorizados:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div class="bg-white border-t-4 border-blue-500 rounded-2xl p-6 shadow-md">
                    <h5 class="font-black text-blue-900 mb-4 uppercase text-sm tracking-widest">Los Favoritos de la Industria</h5>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-3">
                            <span class="bg-blue-100 text-blue-700 font-bold w-6 h-6 rounded flex items-center justify-center flex-shrink-0">1</span>
                            <div>
                                <a href="https://www.digitalocean.com/" target="_blank" class="font-bold text-[#003366] hover:text-blue-500 transition-colors">DigitalOcean <i class="fas fa-external-link-alt text-xs ml-1 opacity-50"></i></a>
                                <p class="text-xs text-slate-500 mt-1">El estándar de oro para desarrolladores. Sus "Droplets" son facilísimos de usar y tienen la mejor documentación del mundo.</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="bg-blue-100 text-blue-700 font-bold w-6 h-6 rounded flex items-center justify-center flex-shrink-0">2</span>
                            <div>
                                <a href="https://aws.amazon.com/ec2/" target="_blank" class="font-bold text-[#003366] hover:text-blue-500 transition-colors">AWS (Amazon EC2) <i class="fas fa-external-link-alt text-xs ml-1 opacity-50"></i></a>
                                <p class="text-xs text-slate-500 mt-1">Nivel corporativo pesado. Si trabajas en un banco o transnacional, usarás Amazon. Curva de aprendizaje empinada.</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="bg-blue-100 text-blue-700 font-bold w-6 h-6 rounded flex items-center justify-center flex-shrink-0">3</span>
                            <div>
                                <a href="https://www.hetzner.com/" target="_blank" class="font-bold text-[#003366] hover:text-blue-500 transition-colors">Hetzner <i class="fas fa-external-link-alt text-xs ml-1 opacity-50"></i></a>
                                <p class="text-xs text-slate-500 mt-1">El gigante alemán. Ofrece una potencia bruta increíble por precios muy bajos, pero sus servidores están en Europa.</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="bg-blue-100 text-blue-700 font-bold w-6 h-6 rounded flex items-center justify-center flex-shrink-0">4</span>
                            <div>
                                <a href="https://www.vultr.com/" target="_blank" class="font-bold text-[#003366] hover:text-blue-500 transition-colors">Vultr <i class="fas fa-external-link-alt text-xs ml-1 opacity-50"></i></a>
                                <p class="text-xs text-slate-500 mt-1">Competidor directo de DigitalOcean. Despliegue en 60 segundos y centros de datos en todo el planeta.</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="bg-blue-100 text-blue-700 font-bold w-6 h-6 rounded flex items-center justify-center flex-shrink-0">5</span>
                            <div>
                                <a href="https://www.linode.com/" target="_blank" class="font-bold text-[#003366] hover:text-blue-500 transition-colors">Linode (Akamai) <i class="fas fa-external-link-alt text-xs ml-1 opacity-50"></i></a>
                                <p class="text-xs text-slate-500 mt-1">Pioneros en el Cloud Computing. Muy respetados por su estabilidad y excelente soporte técnico.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="bg-white border-t-4 border-emerald-500 rounded-2xl p-6 shadow-md flex flex-col justify-between">
                    <div>
                        <h5 class="font-black text-emerald-900 mb-4 uppercase text-sm tracking-widest">Valor Costo/Beneficio & Gratuitos</h5>
                        <ul class="space-y-4">
                            <li class="flex items-start gap-3">
                                <span class="bg-emerald-100 text-emerald-700 font-bold w-6 h-6 rounded flex items-center justify-center flex-shrink-0">6</span>
                                <div>
                                    <a href="https://contabo.com/" target="_blank" class="font-bold text-[#003366] hover:text-emerald-500 transition-colors">Contabo <span class="bg-emerald-500 text-white text-[9px] px-2 py-0.5 rounded ml-1">Recomendado</span> <i class="fas fa-external-link-alt text-xs ml-1 opacity-50"></i></a>
                                    <p class="text-xs text-slate-500 mt-1">La mejor relación calidad-precio del mercado mundial. Te dan muchísima RAM (hasta 6GB) y almacenamiento por menos de $6 dólares al mes. Ideal para iniciar proyectos serios.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="bg-emerald-100 text-emerald-700 font-bold w-6 h-6 rounded flex items-center justify-center flex-shrink-0">7</span>
                                <div>
                                    <a href="https://www.hostinger.com/vps-hosting" target="_blank" class="font-bold text-[#003366] hover:text-emerald-500 transition-colors">Hostinger VPS <i class="fas fa-external-link-alt text-xs ml-1 opacity-50"></i></a>
                                    <p class="text-xs text-slate-500 mt-1">Famosos por su marketing y precios agresivos en el primer año. Interfaz muy amigable para principiantes.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="bg-emerald-100 text-emerald-700 font-bold w-6 h-6 rounded flex items-center justify-center flex-shrink-0">8</span>
                                <div>
                                    <a href="https://www.bluehost.com/hosting/vps" target="_blank" class="font-bold text-[#003366] hover:text-emerald-500 transition-colors">Bluehost <i class="fas fa-external-link-alt text-xs ml-1 opacity-50"></i></a>
                                    <p class="text-xs text-slate-500 mt-1">Un clásico de la web. Son los reyes del WordPress, pero sus servidores VPS son bastante sólidos si ya tienes tu ecosistema ahí.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="bg-emerald-100 text-emerald-700 font-bold w-6 h-6 rounded flex items-center justify-center flex-shrink-0">9</span>
                                <div>
                                    <a href="https://www.oracle.com/cloud/free/" target="_blank" class="font-bold text-[#003366] hover:text-emerald-500 transition-colors">Oracle Cloud <span class="bg-rose-500 text-white text-[9px] px-2 py-0.5 rounded ml-1">GRATIS</span> <i class="fas fa-external-link-alt text-xs ml-1 opacity-50"></i></a>
                                    <p class="text-xs text-slate-500 mt-1">Tienen la capa "Always Free" (Siempre Gratis) más agresiva del mercado. Te regalan un VPS ARM con 24GB de RAM. El problema: su registro falla mucho por validación de tarjetas.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-3">
                                <span class="bg-emerald-100 text-emerald-700 font-bold w-6 h-6 rounded flex items-center justify-center flex-shrink-0">10</span>
                                <div>
                                    <a href="https://cloud.google.com/free" target="_blank" class="font-bold text-[#003366] hover:text-emerald-500 transition-colors">Google Cloud Platform <span class="bg-rose-500 text-white text-[9px] px-2 py-0.5 rounded ml-1">GRATIS</span> <i class="fas fa-external-link-alt text-xs ml-1 opacity-50"></i></a>
                                    <p class="text-xs text-slate-500 mt-1">Ofrecen una instancia <code>e2-micro</code> completamente gratuita de por vida. Es muy limitada (apenas para pruebas de la universidad), pero está respaldada por la red de Google.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

      <section class="mt-20 mb-10">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">14. Paneles de Control Web</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                Configurar el Servidor Web (Nginx/Apache), instalar PHP, asegurar la base de datos MariaDB y emitir certificados HTTPS (SSL) a pura consola de Linux puede tomar horas y es propenso a errores. Para eso inventaron los <strong>Paneles de Control</strong>: software que instalas en tu VPS para administrarlo todo mediante una interfaz gráfica amigable desde tu navegador.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-6">
                
                <a href="https://www.cloudpanel.io/" target="_blank" class="group bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center hover:bg-white hover:border-blue-500 hover:shadow-xl transition-all block">
                    <i class="fas fa-cloud text-4xl text-blue-400 mb-3 group-hover:scale-110 transition-transform"></i>
                    <h5 class="font-black text-[#003366] text-sm">CloudPanel</h5>
                    <p class="text-[11px] text-slate-500 mt-2 leading-tight">Ultra rápido, enfocado en PHP/Nginx. Ideal y optimizado para Laravel.</p>
                </a>

                <a href="https://cyberpanel.net/" target="_blank" class="group bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center hover:bg-white hover:border-indigo-500 hover:shadow-xl transition-all block">
                    <i class="fas fa-bolt text-4xl text-indigo-400 mb-3 group-hover:scale-110 transition-transform"></i>
                    <h5 class="font-black text-[#003366] text-sm">CyberPanel</h5>
                    <p class="text-[11px] text-slate-500 mt-2 leading-tight">Utiliza OpenLiteSpeed. Velocidad de respuesta absurda, gran opción moderna.</p>
                </a>

                <a href="https://www.aapanel.com/" target="_blank" class="group bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center hover:bg-white hover:border-emerald-500 hover:shadow-xl transition-all block">
                    <i class="fas fa-cubes text-4xl text-emerald-400 mb-3 group-hover:scale-110 transition-transform"></i>
                    <h5 class="font-black text-[#003366] text-sm">aaPanel</h5>
                    <p class="text-[11px] text-slate-500 mt-2 leading-tight">Modular y visual (App Store interna). El líder indiscutible en Asia.</p>
                </a>

                <a href="https://hestiacp.com/" target="_blank" class="group bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center hover:bg-white hover:border-red-500 hover:shadow-xl transition-all block">
                    <i class="fas fa-fire text-4xl text-red-400 mb-3 group-hover:scale-110 transition-transform"></i>
                    <h5 class="font-black text-[#003366] text-sm">HestiaCP</h5>
                    <p class="text-[11px] text-slate-500 mt-2 leading-tight">Una evolución de VestaCP, de código abierto, muy activo y seguro.</p>
                </a>

                <a href="https://fastpanel.direct/" target="_blank" class="group bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center hover:bg-white hover:border-purple-500 hover:shadow-xl transition-all block">
                    <i class="fas fa-tachometer-alt text-4xl text-purple-400 mb-3 group-hover:scale-110 transition-transform"></i>
                    <h5 class="font-black text-[#003366] text-sm">FastPanel</h5>
                    <p class="text-[11px] text-slate-500 mt-2 leading-tight">Interfaz visual hermosa y moderna. Muy fácil de entender y 100% gratuito.</p>
                </a>

                <a href="https://vestacp.com/" target="_blank" class="group bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center hover:bg-white hover:border-orange-500 hover:shadow-xl transition-all block">
                    <i class="fas fa-v text-4xl text-orange-400 mb-3 group-hover:scale-110 transition-transform"></i>
                    <h5 class="font-black text-[#003366] text-sm">VestaCP</h5>
                    <p class="text-[11px] text-slate-500 mt-2 leading-tight">El clásico y ligero. Consume muy poca RAM. Perfecto para VPS pequeños.</p>
                </a>

                <a href="https://www.virtualmin.com/" target="_blank" class="group bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center hover:bg-white hover:border-teal-500 hover:shadow-xl transition-all block">
                    <i class="fas fa-server text-4xl text-teal-400 mb-3 group-hover:scale-110 transition-transform"></i>
                    <h5 class="font-black text-[#003366] text-sm">Virtualmin</h5>
                    <p class="text-[11px] text-slate-500 mt-2 leading-tight">Legendario y de código abierto (basado en Webmin). Máximo control técnico.</p>
                </a>

                <a href="https://www.directadmin.com/" target="_blank" class="group bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center hover:bg-white hover:border-cyan-500 hover:shadow-xl transition-all block">
                    <i class="fas fa-rocket text-4xl text-cyan-400 mb-3 group-hover:scale-110 transition-transform"></i>
                    <h5 class="font-black text-[#003366] text-sm">DirectAdmin</h5>
                    <p class="text-[11px] text-slate-500 mt-2 leading-tight">De pago, pero ultra eficiente y barato. El rival más querido de cPanel.</p>
                </a>

            </div>

            <div class="bg-gradient-to-r from-rose-50 to-orange-50 border border-rose-200 p-6 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-sm">
                <div class="flex-shrink-0">
                    <i class="fas fa-crown text-5xl text-rose-500 drop-shadow-md"></i>
                </div>
                <div>
                    <h5 class="font-black text-rose-900 text-lg">Los Titanes Corporativos: <a href="https://cpanel.net/" target="_blank" class="hover:underline text-rose-600">cPanel</a> & <a href="https://www.plesk.com/" target="_blank" class="hover:underline text-orange-600">Plesk</a></h5>
                    <p class="text-sm text-rose-800 mt-2 leading-relaxed">
                        Son el estándar absoluto en el mundo del <strong>Hosting Compartido</strong>. Son increíblemente potentes e integran todo lo imaginable, pero <strong>NO son gratis</strong> (sus licencias mensuales son muy costosas). En proyectos universitarios o VPS propios de bajo presupuesto, siempre optamos por las 8 opciones de arriba.
                    </p>
                </div>
            </div>
        </section>

        

        

    </div>
</div>
`;