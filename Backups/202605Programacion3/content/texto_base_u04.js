// content/texto_base_u04.js

const pag_texto_base_u04 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-20">
        <span class="text-amber-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-cubes text-lg"></i> TEXTO BASE / UNIDAD 4
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            PARADIGMA POO:<br>
            <span class="text-amber-600">CLASES E INSTANCIAS</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Dejar atrás la programación secuencial para modelar el mundo real. En esta unidad dominarás los pilares esenciales de la Programación Orientada a Objetos (POO), aprendiendo a estructurar planos lógicos y a gestionar el nacimiento de objetos en el sistema.
        </p>
        <div class="h-2 w-24 bg-amber-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. Ventajas del Paradigma POO sobre la Metodología Clásica
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                En los módulos anteriores, el software se concebía como una secuencia lineal de instrucciones y funciones sueltas que mutaban variables globales de forma desordenada. El paradigma de la **Programación Orientada a Objetos (POO)** revoluciona este enfoque organizando el código en unidades compactas, autónomas e interconectadas llamadas **Objetos**.
            </p>
            <p class="text-base text-slate-600 leading-relaxed mb-8">
                Este salto arquitectónico aporta ventajas fundamentales e indispensables para mitigar la rigidez en sistemas corporativos de gran escala:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="p-6 bg-slate-50 border-l-4 border-amber-500 rounded-r-2xl shadow-sm">
                    <h4 class="font-black text-slate-800 uppercase text-sm mb-2"><i class="fas fa-eye-slash mr-2 text-amber-600"></i>Abstracción Lógica</h4>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Capacidad de aislar y extraer únicamente las características y comportamientos esenciales de un objeto del mundo real que son relevantes para el software, descartando los detalles e implementaciones complejas innecesarias.
                    </p>
                </div>
                <div class="p-6 bg-slate-50 border-l-4 border-[#003366] rounded-r-2xl shadow-sm">
                    <h4 class="font-black text-slate-800 uppercase text-sm mb-2"><i class="fas fa-shield-halved mr-2 text-blue-600"></i>Encapsulamiento Oculto</h4>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Mecanismo restrictivo que empaqueta los datos (atributos) y los métodos dentro de una misma estructura, ocultando su estado interno frente a modificaciones externas accidentales mediante modificadores de acceso.
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. Anatomía de Planos y Entidades: Clases e Instancias
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                Para comprender la POO a nivel de ingeniería de software, debemos trazar una línea divisoria técnica e inquebrantable entre los planos de diseño y los elementos tangibles en la memoria RAM de la computadora:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h5 class="font-black text-amber-600 uppercase text-sm mb-2 italic">La Clase (El Plano Arquitectónico)</h5>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Es un molde, plantilla o esquema conceptual abstracto. Define de forma estática qué propiedades (atributos) y qué acciones (métodos) poseerán todos los objetos que se construyan a partir de ella. No consume espacio real de variables en el Heap durante la compilación.
                    </p>
                </div>

                <div class="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <h5 class="font-black text-blue-600 uppercase text-sm mb-2 italic">El Objeto o Instancia (La Construcción Real)</h5>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Es la entidad física y concreta nacida a partir de una clase. Posee una identidad única y valores específicos asignados a sus atributos. Al crearse, **ocupa un espacio físico y dinámico indexado dentro del Heap de la memoria RAM**.
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Implementación Estructural de Clases en C++
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                En lenguajes avanzados como C++, una clase se compone de secciones estrictas de acceso. A continuación, analizamos un código de laboratorio diseñado para **Code::Blocks** que ejemplifica el encapsulamiento de datos de un Personaje base para nuestro simulador interactivo:
            </p>

            <div class="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm text-slate-200 mb-8">
                <div class="bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-700/50">
                    <span class="text-xs text-slate-400 font-bold"><i class="fas fa-code mr-2"></i> laboratorio_clases.cpp</span>
                    <div class="flex gap-1.5">
                        <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                        <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                        <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                    </div>
                </div>
                <pre class="p-6 overflow-x-auto leading-relaxed text-xs md:text-sm bg-slate-950"><code><span class="text-purple-400">#include</span> <span class="text-emerald-400">&lt;iostream&gt;</span>
<span class="text-purple-400">#include</span> <span class="text-emerald-400">&lt;string&gt;</span>

<span class="text-blue-400">class</span> <span class="text-yellow-400">EntidadSimulador</span> {
<span class="text-purple-400">private:</span>
    <span class="text-slate-500">// ATRIBUTOS ENCAPSULADOS: Nadie fuera de la clase puede mutar estos datos directamente</span>
    std::string nombre;
    <span class="text-blue-400">int</span> nivelEnergia;

<span class="text-purple-400">public:</span>
    <span class="text-slate-500">// CONSTRUCTOR: Inicializa el objeto de forma segura al nacer</span>
    <span class="text-yellow-400">EntidadSimulador</span>(std::string nom, <span class="text-blue-400">int</span> energia) {
        nombre = nom;
        nivelEnergia = energia;
    }

    <span class="text-slate-500">// MÉTODO PÚBLICO (Interfaz de Control)</span>
    <span class="text-blue-400">void</span> <span class="text-yellow-400">mostrarEstado</span>() {
        std::cout &lt;&lt; <span class="text-emerald-400">"Entidad: "</span> &lt;&lt; nombre &lt;&lt; <span class="text-emerald-400">" | Energia RAM: "</span> &lt;&lt; nivelEnergia &lt;&lt; <span class="text-emerald-400">"%\\n"</span>;
    }
};

<span class="text-blue-400">int</span> <span class="text-yellow-400">main</span>() {
    std::cout &lt;&lt; <span class="text-emerald-400">"====================================================\\n"</span>;
    std::cout &lt;&lt; <span class="text-emerald-400">"INSTANCIACIÓN DE CLASES EN MEMORIA CON CODE::BLOCKS\\n"</span>;
    std::cout &lt;&lt; <span class="text-emerald-400">"====================================================\\n"</span>;

    <span class="text-slate-500">// Instanciación en el Heap utilizando memoria dinámica y punteros</span>
    <span class="text-yellow-400">EntidadSimulador</span>* entidad1 = <span class="text-purple-400">new</span> <span class="text-yellow-400">EntidadSimulador</span>(<span class="text-emerald-400">"Core_Processor"</span>, <span class="text-orange-400">95</span>);
    
    <span class="text-slate-500">// Acceso al método polimórfico a través del operador flecha (-&gt;)</span>
    entidad1-&gt;<span class="text-yellow-400">mostrarEstado</span>();

    <span class="text-slate-500">// Liberación de memoria imperativa obligatoria</span>
    <span class="text-purple-400">delete</span> entidad1;

    std::cout &lt;&lt; <span class="text-emerald-400">"====================================================\\n"</span>;
    <span class="text-purple-400">return</span> <span class="text-orange-400">0</span>;
}</code></pre>
            </div>
        </section>

        <section class="bg-gradient-to-br from-slate-900 to-slate-700 p-8 md:p-12 rounded-[2rem] shadow-2xl text-white relative overflow-hidden">
            <i class="fas fa-circle-nodes absolute -right-10 -bottom-10 text-white/5 text-[20rem] transform -rotate-12"></i>
            <div class="relative z-10">
                <h3 class="text-3xl font-black uppercase text-amber-400 mb-6">Ciclo de Vida del Objeto y Reusabilidad</h3>
                <p class="text-lg text-slate-200 leading-relaxed mb-8">
                    Como ingenieros de sistemas, el dominio de la POO nos exige rastrear de forma milimétrica el ciclo de vida de cada instancia. Un objeto nace al invocarse el método **Constructor** (asignando variables en el Heap), interactúa de manera modular enviando y recibiendo mensajes con otros componentes del sistema, y muere liberando sus bytes mediante rutinas controladas. El diseño ordenado y la abstracción previenen la duplicidad redundante de código fuente corporativo.
                </p>
                <div class="grid md:grid-cols-2 gap-4 font-mono text-xs text-slate-300">
                    <div class="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20">
                        <span class="bg-amber-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                        <p>Abstraer las clases e identificar sus relaciones complejas.</p>
                    </div>
                    <div class="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20">
                        <span class="bg-amber-500 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                        <p>Generalizar comportamientos comunes para reusar código.</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;