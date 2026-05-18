// content/texto_base_u02.js


// content/texto_base_u11.js

const pag_texto_base_u02 = `

<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-cyan-500 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fab fa-react text-lg"></i> TEXTO BASE / UNIDAD 11
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            REACT JS:<br>
            <span class="text-cyan-500">DOMINIO DE COMPONENTES</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            No podemos construir una App móvil robusta sin entender la lógica reactiva. En esta unidad profundizaremos en el flujo de datos unidireccional, la gestión de estados complejos y la renderización dinámica.
        </p>
        <div class="h-2 w-24 bg-cyan-500 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

    <section class="mb-20">
    <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">1. El Origen: La Solución de Meta al Caos</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div class="text-lg text-slate-600 leading-relaxed space-y-4">
            <p>
                <strong>React</strong> fue creado por <strong>Jordan Walke</strong>, un ingeniero de software en Facebook (ahora Meta). Se implementó por primera vez en el News Feed de Facebook en 2011 y más tarde en Instagram en 2012.
            </p>
            <p>
                <strong>¿Por qué se creó?</strong> Facebook enfrentaba un problema masivo: su interfaz era tan compleja que las actualizaciones de datos (como una nueva notificación) causaban errores en cascada. El DOM tradicional del navegador es lento y difícil de manejar a gran escala.
            </p>
            <p>
                La solución de React fue el <strong>Virtual DOM</strong>: una copia ligera de la interfaz que permite a React calcular qué cambió exactamente y actualizar solo esa pequeña parte del sitio, sin recargar todo. Esto revolucionó la velocidad de las aplicaciones modernas.
            </p>
        </div>
        <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
            <h4 class="font-black text-[#003366] text-sm uppercase tracking-widest mb-4">Puntos Clave de su Filosofía:</h4>
            <ul class="space-y-4 text-sm text-slate-500">
                <li class="flex gap-3"><i class="fas fa-cubes text-cyan-500 mt-1"></i> <strong>Declarativo:</strong> Tú dices qué quieres ver en pantalla, no cómo hacerlo paso a paso.</li>
                <li class="flex gap-3"><i class="fas fa-recycle text-cyan-500 mt-1"></i> <strong>Componentizado:</strong> La UI se divide en piezas pequeñas, independientes y reutilizables.</li>
                <li class="flex gap-3"><i class="fas fa-arrow-down text-cyan-500 mt-1"></i> <strong>Flujo Unidireccional:</strong> Los datos viajan del padre al hijo, facilitando el rastreo de errores (debug).</li>
            </ul>
        </div>
    </div>
</section>





<section class="mb-20">
    <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">2. Control de Datos: useState y Más</h3>
    <p class="text-lg text-slate-600 leading-relaxed mb-8">
        Para un ingeniero, el <strong>Estado</strong> es la representación del sistema en un momento dado. Sin estado, una App móvil es solo una imagen estática.
    </p>

    <div class="space-y-12">
        <div class="bg-white border-2 border-slate-100 p-8 rounded-3xl shadow-sm">
            <div class="flex items-center gap-4 mb-6">
                <span class="bg-cyan-100 text-cyan-700 font-black px-4 py-1 rounded-lg text-xs uppercase">useState</span>
                <h4 class="text-xl font-black text-[#003366]">La Memoria del Componente</h4>
            </div>
            <p class="text-slate-600 mb-6">
                Es el Hook principal. Permite que el componente "recuerde" información, como el nombre de un pasajero en tu app de vuelos o si un formulario tiene errores.
            </p>
            <div class="bg-slate-900 rounded-xl p-6 font-mono text-sm text-blue-300 overflow-x-auto">
                <span class="text-pink-400">const</span> [vueloId, setVueloId] = <span class="text-yellow-300">useState</span>(<span class="text-purple-400">null</span>);
            </div>
        </div>

        <div class="bg-white border-2 border-slate-100 p-8 rounded-3xl shadow-sm">
            <div class="flex items-center gap-4 mb-6">
                <span class="bg-indigo-100 text-indigo-700 font-black px-4 py-1 rounded-lg text-xs uppercase">Props</span>
                <h4 class="text-xl font-black text-[#003366]">Pase de Parámetros</h4>
            </div>
            <p class="text-slate-600 mb-4">
                Las <strong>Properties</strong> son la forma en que un componente recibe configuración desde afuera. Son inmutables (el componente hijo no puede cambiarlas, solo leerlas).
            </p>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold text-indigo-600 uppercase">
                <li class="bg-indigo-50 p-3 rounded-lg text-center border border-indigo-100">Inmutabilidad</li>
                <li class="bg-indigo-50 p-3 rounded-lg text-center border border-indigo-100">Configurabilidad</li>
            </ul>
        </div>

        <div class="bg-white border-2 border-slate-100 p-8 rounded-3xl shadow-sm">
            <div class="flex items-center gap-4 mb-6">
                <span class="bg-amber-100 text-amber-700 font-black px-4 py-1 rounded-lg text-xs uppercase">Condicionales</span>
                <h4 class="text-xl font-black text-[#003366]">Interfaz Inteligente</h4>
            </div>
            <p class="text-slate-600 mb-6">
                React permite mostrar diferentes elementos según el estado. Por ejemplo: mostrar un <em>spinner</em> de carga mientras esperamos la respuesta de tu API de Laravel.
            </p>
            <div class="bg-slate-900 rounded-xl p-6 font-mono text-sm text-blue-300 overflow-x-auto">
                { cargando ? &lt;Loading /&gt; : &lt;ListaVuelos /&gt; }
            </div>
            
        </div>
    </div>
</section>





        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">2. Props: Comunicación Unidireccional</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Los componentes deben ser reutilizables. Las <strong>Props</strong> son los atributos que enviamos de un componente Padre a un Hijo.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h4 class="font-bold text-cyan-600 mb-2">Componente Hijo (Tarjeta)</h4>
                    <pre class="text-[10px] font-mono text-slate-700 bg-white p-4 rounded-lg border">
function Card({ titulo, destino }) {
  return (
    &lt;div&gt;
      &lt;h3&gt;{titulo}&lt;/h3&gt;
      &lt;p&gt;{destino}&lt;/p&gt;
    &lt;/div&gt;
  );
}</pre>
                </div>
                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h4 class="font-bold text-indigo-600 mb-2">Uso en el Padre</h4>
                    <pre class="text-[10px] font-mono text-slate-700 bg-white p-4 rounded-lg border">
&lt;Card 
  titulo="Vuelo 102" 
  destino="Santa Cruz" 
/&gt;</pre>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">3. Renderizado de Listas (Map)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                En React no usamos ciclos <code>for</code>. Usamos el método <code>.map()</code> para transformar arreglos de datos en elementos visuales. Cada elemento debe tener una <strong>key</strong> única.
            </p>
            <div class="bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-700">
                <pre class="p-6 text-sm font-mono leading-relaxed text-blue-300">
{vuelos.<span class="text-yellow-300">map</span>((vuelo) => (
  &lt;div <span class="text-pink-400">key</span>={vuelo.id}&gt;
    &lt;span&gt;{vuelo.codigo}&lt;/span&gt;
  &lt;/div&gt;
))}</pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">4. Inputs Controlados</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                A diferencia de HTML puro, en React el "dueño" de lo que se escribe en un input es el estado de React. Esto se conoce como <strong>Two-way data binding</strong>.
            </p>
            <div class="bg-cyan-50 border-l-4 border-cyan-500 p-8 rounded-r-2xl">
                <pre class="text-xs font-mono text-cyan-900 leading-relaxed">
&lt;input 
  type="text" 
  value={nombre} 
  onChange={(e) => setNombre(e.target.value)} 
/&gt;</pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">5. useEffect: El Corazón de la API</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Este Hook controla los efectos secundarios. Lo usaremos para sincronizar nuestra App móvil con la base de datos de Laravel.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-6 bg-slate-900 rounded-xl">
                    <h5 class="text-white font-bold text-xs uppercase mb-4">Caso A: Al Cargar</h5>
                    <pre class="text-[10px] text-cyan-400 font-mono">
useEffect(() => {
  // Solo se ejecuta una vez
}, []);</pre>
                </div>
                <div class="p-6 bg-slate-900 rounded-xl">
                    <h5 class="text-white font-bold text-xs uppercase mb-4">Caso B: Por dependencia</h5>
                    <pre class="text-[10px] text-cyan-400 font-mono">
useEffect(() => {
  // Se ejecuta cada vez que 'id' cambie
}, [id]);</pre>
                </div>
            </div>
        </section>

        <section class="bg-[#003366] text-white p-10 rounded-[3rem] shadow-2xl relative overflow-hidden">
            <i class="fab fa-react absolute -right-10 -bottom-10 text-white/5 text-[15rem]"></i>
            <div class="relative z-10">
                <h3 class="text-2xl font-black text-cyan-400 uppercase mb-6">Checklist del Desarrollador React</h3>
                <div class="space-y-4 text-sm">
                    <p class="flex items-center gap-3"><i class="fas fa-check-circle text-cyan-400"></i> ¿Dividiste tu interfaz en componentes pequeños?</p>
                    <p class="flex items-center gap-3"><i class="fas fa-check-circle text-cyan-400"></i> ¿Estás pasando datos correctamente mediante Props?</p>
                    <p class="flex items-center gap-3"><i class="fas fa-check-circle text-cyan-400"></i> ¿El estado maneja solo lo que realmente debe cambiar?</p>
                    <p class="flex items-center gap-3"><i class="fas fa-check-circle text-cyan-400"></i> ¿Usaste .map() con una key única para tus listas?</p>
                </div>
            </div>
        </section>

        

    </div>
</div>
`;