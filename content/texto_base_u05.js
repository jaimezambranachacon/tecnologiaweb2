// content/texto_base_u05.js

const pag_texto_base_u05 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-20">
        <span class="text-rose-500 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-network-wired text-lg"></i> TEXTO BASE / UNIDAD 5
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            HERENCIA AVANZADA Y<br>
            <span class="text-rose-500">POLIMORFISMO DINÁMICO</span>
        </h1>
        <div class="h-2 w-24 bg-rose-500 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-24">

        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">1. Jerarquías de Control: Herencia y Clases Abstractas</h3>
                <span class="bg-rose-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Extensibility</span>
            </div>

            <p class="text-lg text-slate-600 mb-8 font-light italic leading-relaxed">
                La <strong>Herencia</strong> es el mecanismo formal que permite a una clase hija adquirir los atributos y métodos de una clase padre, promoviendo la reutilización del software. Sin embargo, en arquitecturas robustas de sistemas, muchas clases padre no deben ser instanciadas directamente; operan únicamente como moldes conceptuales puros denominados <strong>Clases Abstractas</strong>.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div class="p-8 bg-slate-50 rounded-3xl border-l-8 border-rose-500 shadow-sm">
                    <h4 class="font-black text-rose-900 uppercase text-xs mb-4 tracking-widest">Métodos Virtuales Puros</h4>
                    <p class="text-[11px] text-slate-500 leading-relaxed">
                        Una clase se convierte en abstracta al declarar al menos un método como <strong>virtual puro</strong> (igualado a cero en C++: <code>virtual void funcion() = 0;</code>). Esto obliga por contrato a que cualquier clase hija herede la obligación de codificar e implementar la lógica real de dicho método.
                    </p>
                </div>
                <div class="p-8 bg-slate-50 rounded-3xl border-l-8 border-[#003366] shadow-sm">
                    <h4 class="font-black text-[#003366] uppercase text-xs mb-4 tracking-widest">Reusabilidad Estructural</h4>
                    <p class="text-[11px] text-slate-500 leading-relaxed">
                        Generalizar comportamientos comunes dentro de la clase abstracta (como coordenadas espaciales o identificadores de hardware) reduce drásticamente el acoplamiento y evita la redundancia de código en los componentes corporativos.
                    </p>
                </div>
            </div>
        </section>

        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">2. Polimorfismo Dinámico (Tiempo de Ejecución)</h3>
                <span class="bg-[#003366] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Runtime Binding</span>
            </div>

            <p class="text-lg text-slate-600 mb-8 font-light italic leading-relaxed">
                El <strong>Polimorfismo Dinámico</strong> es el pilar más potente de la POO. Permite tratar a múltiples objetos de diferentes clases derivadas de manera uniforme bajo el identificador común de su clase padre abstracta, resolviendo cuál comportamiento exacto invocar en **tiempo de ejecución** mediante punteros nativos.
            </p>

            <div class="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100 mb-10">
                <h4 class="text-indigo-800 font-black text-xs uppercase mb-4 tracking-widest italic text-center">La Tabla Virtual (V-Table) bajo el capó</h4>
                <p class="text-sm text-slate-600 leading-relaxed text-justify">
                    Cuando el compilador de C++ detecta herencia polimórfica, crea una estructura oculta en la memoria RAM llamada <strong>V-Table (Virtual Table)</strong>. Esta tabla resguarda una lista de punteros apuntando a las funciones reales implementadas por cada clase hija. Al invocar un método desde un puntero padre, la computadora consulta dinámicamente la V-Table para ejecutar la subrutina correspondiente en hilos de ejecución de alta velocidad.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-6 bg-slate-50 rounded-2xl border-l-4 border-rose-500 shadow-sm">
                    <h4 class="font-bold text-rose-800 text-sm mb-2 uppercase italic">Enlace Estático</h4>
                    <p class="text-xs text-slate-600">Se resuelve en tiempo de compilación. Es rápido pero rígido (ej: la sobrecarga tradicional de funciones de la Unidad 2).</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-2xl border-l-4 border-[#003366] shadow-sm">
                    <h4 class="font-bold text-[#003366] text-sm mb-2 uppercase italic">Enlace Dinámico</h4>
                    <p class="text-xs text-slate-600">Se resuelve en vivo mientras el software corre. Provee adaptabilidad absoluta para motores de videojuegos y simuladores industriales.</p>
                </div>
            </div>
        </section>

        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">3. Laboratorio de Pruebas: Jerarquías Polimórficas</h3>
                <span class="bg-emerald-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Code Implementation</span>
            </div>
            
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                El siguiente programa implementa de forma estricta una interfaz base abstracta para simular el procesamiento de diferentes módulos físicos dentro de tu entorno de **Code::Blocks**:
            </p>

            <div class="bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-700 font-mono text-xs md:text-sm">
                <div class="bg-slate-800 px-6 py-3 text-[10px] font-black text-slate-400 border-b border-slate-700 flex justify-between items-center uppercase tracking-widest">
                    <span>Estructura Polimórfica en C++</span>
                    <i class="fas fa-code text-rose-400"></i>
                </div>
                <pre class="p-6 text-blue-300 overflow-x-auto bg-slate-950"><code><span class="text-purple-400">#include</span> <span class="text-emerald-400">&lt;iostream&gt;</span>
<span class="text-purple-400">#include</span> <span class="text-emerald-400">&lt;vector&gt;</span>

<span class="text-slate-500">// Clase Abstracta / Interfaz Base Pura</span>
<span class="text-blue-400">class</span> <span class="text-yellow-400">ComponenteSimulador</span> {
<span class="text-purple-400">public:</span>
    <span class="text-slate-500">// Función Virtual Pura: Convierte la clase en Abstracta</span>
    <span class="text-blue-400">virtual void</span> <span class="text-yellow-400">actualizarFisica</span>() = 0;
    
    <span class="text-blue-400">virtual</span> <span class="text-yellow-400">~ComponenteSimulador</span>() {} <span class="text-slate-500">// Destructor virtual seguro</span>
};

<span class="text-slate-500">// Clase Hija Derived 1</span>
<span class="text-blue-400">class</span> <span class="text-yellow-400">MotorFisico</span> : <span class="text-purple-400">public</span> <span class="text-yellow-400">ComponenteSimulador</span> {
<span class="text-purple-400">public:</span>
    <span class="text-blue-400">void</span> <span class="text-yellow-400">actualizarFisica</span>() <span class="text-purple-400">override</span> {
        std::cout &lt;&lt; <span class="text-emerald-400">"&gt;&gt; Procesando matrices de gravedad y colisiones espaciales.\\n"</span>;
    }
};

<span class="text-slate-500">// Clase Hija Derived 2</span>
<span class="text-blue-400">class</span> <span class="text-yellow-400">RenderizadorGrafico</span> : <span class="text-purple-400">public</span> <span class="text-yellow-400">ComponenteSimulador</span> {
<span class="text-purple-400">public:</span>
    <span class="text-blue-400">void</span> <span class="text-yellow-400">actualizarFisica</span>() <span class="text-purple-400">override</span> {
        std::cout &lt;&lt; <span class="text-emerald-400">"&gt;&gt; Refrescando mallas poligonales en el buffer del hardware.\\n"</span>;
    }
};

<span class="text-blue-400">int</span> <span class="text-yellow-400">main</span>() {
    <span class="text-slate-500">// Colección dinámica polimórfica basada en el padre abstracto</span>
    std::vector&lt;<span class="text-yellow-400">ComponenteSimulador</span>*&gt; pipeline;
    
    pipeline.<span class="text-yellow-400">push_back</span>(<span class="text-purple-400">new</span> <span class="text-yellow-400">MotorFisico</span>());
    pipeline.<span class="text-yellow-400">push_back</span>(<span class="text-purple-400">new</span> <span class="text-yellow-400">RenderizadorGrafico</span>());

    std::cout &lt;&lt; <span class="text-emerald-400">"BUCLE DE EJECUCIÓN POLIMÓRFICA DINÁMICA\\n"</span>;
    
    <span class="text-slate-500">// El bucle trata a todos como un componente genérico, pero ejecuta su rol específico</span>
    <span class="text-purple-400">for</span> (<span class="text-blue-400">auto</span> comp : pipeline) {
        comp-&gt;<span class="text-yellow-400">actualizarFisica</span>(); 
    }

    <span class="text-slate-500">// Liberación limpia de objetos en el Heap</span>
    <span class="text-purple-400">for</span> (<span class="text-blue-400">auto</span> comp : pipeline) {
        <span class="text-purple-400">delete</span> comp;
    }
    <span class="text-purple-400">return</span> <span class="text-orange-400">0</span>;
}</code></pre>
            </div>
        </section>

    </div>
</div>
`;