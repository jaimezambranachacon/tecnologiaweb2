// content/texto_base_u03.js
// UNIDAD 03: DINÁMICA DE ESTADOS Y PROPS EN REACT JS

const pag_texto_base_u03 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-cyan-500 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fab fa-react text-lg"></i> TEXTO BASE / UNIDAD 03
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            INTERACTIVIDAD Y<br>
            <span class="text-cyan-500">FLUJO DE DATOS</span>
        </h1>
        <div class="h-2 w-24 bg-cyan-500 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-24">

        <section>
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase">1. Gestión de Memoria con useState</h3>
                <a href="https://gist.github.com/jaimezambranachacon/83e93f55cead6d9e06dcfababcc38e40" target="_blank" 
                   class="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-700 transition-all shadow-lg">
                    <i class="fab fa-github"></i> REPOSITORIO GIST
                </a>
            </div>

            <div class="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-700 mb-10">
                <div class="bg-slate-800 px-6 py-3 text-[10px] font-black text-slate-400 border-b border-slate-700 flex justify-between items-center">
                    <span>INDEX.HTML - SISTEMA DE ESTADOS</span>
                    <span class="text-cyan-500">COMPLETE SOURCE</span>
                </div>
                <pre class="p-8 text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;React State&lt;/title&gt;
    &lt;script src="https://unpkg.com/react@18/umd/react.development.js"&gt;&lt;/script&gt;
    &lt;script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"&gt;&lt;/script&gt;
    &lt;script src="https://unpkg.com/@babel/standalone/babel.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="root"&gt;&lt;/div&gt;
    &lt;script type="text/babel"&gt;
        const {useState} = React;

        function MiApp(){
            const [texto, setTexto] = useState("Hola Mundo");
            return(
                &lt;div&gt;
                    &lt;h1&gt;{texto}&lt;/h1&gt;
                    &lt;button onClick={()=&gt;setTexto("Adios Mundo")}&gt;Cambiar Texto&lt;/button&gt;
                &lt;/div&gt;
            );
        }
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(&lt;MiApp/&gt;);
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
            </div>

            <div class="space-y-8">
                <h4 class="text-xl font-bold text-[#003366] flex items-center gap-2 italic">
                    <i class="fas fa-microchip text-cyan-500"></i> Análisis de las líneas críticas:
                </h4>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="space-y-4">
                        <div class="bg-slate-50 p-6 rounded-2xl border-t-4 border-cyan-500 shadow-sm">
                            <code class="text-sm font-bold text-cyan-700 block mb-2">const [texto, setTexto] = useState("Hola Mundo");</code>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Esta es la línea más importante. <strong>useState</strong> es un "Hook" que define una variable reactiva. <code>texto</code> contiene el valor actual, mientras que <code>setTexto</code> es la única función autorizada para cambiarlo. Al darle el valor "Hola Mundo", establecemos el punto de partida de nuestra interfaz.
                            </p>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="bg-slate-50 p-6 rounded-2xl border-t-4 border-[#003366] shadow-sm">
                            <code class="text-sm font-bold text-[#003366] block mb-2">onClick={() => setTexto("Adios Mundo")}</code>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Aquí definimos un <strong>evento declarativo</strong>. A diferencia del JS tradicional, no manipulamos el DOM manualmente. Simplemente llamamos a la función actualizadora. Cuando se ejecuta, React compara el estado anterior con el nuevo y actualiza el navegador de forma eficiente (Virtual DOM).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase">2. Comunicación con Props</h3>
                <a href="https://gist.github.com/jaimezambranachacon/d537d5091b467b1040351318c04ae326" target="_blank" 
                   class="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-700 transition-all shadow-lg">
                    <i class="fab fa-github"></i> REPOSITORIO GIST
                </a>
            </div>

            <div class="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-700 mb-10">
                <div class="bg-slate-800 px-6 py-3 text-[10px] font-black text-slate-400 border-b border-slate-700 flex justify-between items-center">
                    <span>INDEX.HTML - ARQUITECTURA DE PROPS</span>
                    <span class="text-indigo-400">COMPLETE SOURCE</span>
                </div>
                <pre class="p-8 text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;React Props&lt;/title&gt;
    &lt;script src="https://unpkg.com/react@18/umd/react.development.js"&gt;&lt;/script&gt;
    &lt;script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"&gt;&lt;/script&gt;
    &lt;script src="https://unpkg.com/@babel/standalone/babel.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div id="root"&gt;&lt;/div&gt;
    &lt;script type="text/babel"&gt;
        function Saludo(props) {
            return &lt;h1&gt;Hola, {props.nombre}!&lt;/h1&gt;;
        }

        function MiApp() {
            return (
                &lt;div&gt;
                    &lt;Saludo nombre="Juan" /&gt;
                    &lt;Saludo nombre="Maria" /&gt;
                &lt;/div&gt;
            );
        }
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(&lt;MiApp /&gt;);
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
            </div>

            <div class="space-y-8">
                <h4 class="text-xl font-bold text-[#003366] flex items-center gap-2 italic">
                    <i class="fas fa-project-diagram text-indigo-500"></i> Análisis de la inyección de datos:
                </h4>
                
                <div class="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100 shadow-inner">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h5 class="font-black text-indigo-800 text-xs uppercase mb-4 tracking-widest text-center">Definición del Hijo</h5>
                            <code class="text-xs bg-white p-3 rounded-lg block border border-indigo-200 mb-4">function Saludo(props) { ... {props.nombre} ... }</code>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                El componente <code>Saludo</code> actúa como una <strong>plantilla genérica</strong>. Recibe un objeto <code>props</code> que contiene toda la información externa. El uso de llaves <code>{}</code> le dice a React: "Sal del mundo HTML y ejecuta este código JavaScript". Así, mostramos el nombre dinámicamente.
                            </p>
                        </div>
                        <div>
                            <h5 class="font-black text-indigo-800 text-xs uppercase mb-4 tracking-widest text-center">Control del Padre</h5>
                            <code class="text-xs bg-white p-3 rounded-lg block border border-indigo-200 mb-4">&lt;Saludo nombre="Juan" /&gt;</code>
                            <p class="text-sm text-slate-600 leading-relaxed">
                                Aquí ocurre la magia de la reutilización. El padre (<code>MiApp</code>) decide qué datos inyectar. Podemos llamar al mismo componente cientos de veces con diferentes valores. Recuerden: las <strong>Props son de solo lectura</strong>. El hijo no puede cambiarlas, garantizando un flujo de datos unidireccional y seguro.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">3. Renderizado Selectivo</h3>
                <span class="bg-amber-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Lógica de Interfaz</span>
            </div>

            <p class="text-lg text-slate-600 mb-8 font-light italic leading-relaxed">
                En el desarrollo de software moderno, la interfaz debe ser inteligente. Aprendemos a decidir qué componentes existen en el DOM basándonos en condiciones lógicas, optimizando así el uso de memoria del dispositivo.
            </p>

            <div class="bg-slate-900 rounded-3xl shadow-xl overflow-hidden mb-8">
                <div class="bg-slate-800 px-6 py-3 text-[10px] font-black text-slate-400 border-b border-slate-700 flex justify-between items-center uppercase tracking-widest">
                    <span>Laboratorio: Renderizado Condicional</span>
                    <i class="fas fa-eye text-amber-400"></i>
                </div>
                <pre class="p-8 text-sm font-mono text-blue-300 overflow-x-auto">
&lt;script type="text/babel"&gt;
    const { useState } = React;

    function PanelSeguridad() {
        const [acceso, setAcceso] = useState(false);

        return (
            &lt;div&gt;
                &lt;button onClick={() => setAcceso(!acceso)}&gt;
                    {acceso ? "Bloquear Hangar" : "Solicitar Acceso"}
                &lt;/button&gt;

                {/* OPERADOR &&: Si acceso es true, el componente nace en el DOM */}
                {acceso && (
                    &lt;div class="alerta-pista"&gt;
                        &lt;h2&gt;ÁREA RESTRINGIDA: SECTOR A1&lt;/h2&gt;
                        &lt;p&gt;Conexión establecida con el servidor central.&lt;/p&gt;
                    &lt;/div&gt;
                )}
            &lt;/div&gt;
        );
    }
&lt;/script&gt;</pre>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-6 bg-amber-50 rounded-2xl border-l-4 border-amber-500">
                    <h4 class="font-bold text-amber-800 text-sm mb-2 uppercase">Operador de Cortocircuito (&&)</h4>
                    <p class="text-xs text-slate-600">Es la forma más eficiente. Si la condición de la izquierda es <strong>false</strong>, React ignora todo lo que sigue. No es solo ocultar; es eliminar el objeto de la memoria RAM.</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-2xl border-l-4 border-[#003366]">
                    <h4 class="font-bold text-[#003366] text-sm mb-2 uppercase">Operador Ternario (? :)</h4>
                    <p class="text-xs text-slate-600">Ideal para alternar entre dos estados visuales (como el texto de un botón). Funciona como un <strong>if-else</strong> abreviado directamente en la estructura visual.</p>
                </div>
            </div>

            <div class="mt-12 bg-indigo-900 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                <i class="fas fa-brain absolute -right-10 -bottom-10 text-white/5 text-[15rem]"></i>
                <div class="relative z-10 flex flex-col md:flex-row items-center gap-8">
                    <div class="flex-1">
                        <h4 class="text-cyan-400 font-black text-xs uppercase mb-4 tracking-widest">Concepto de Ingeniería</h4>
                        <p class="text-lg font-light leading-relaxed">
                            "En <strong>React Native</strong>, este concepto es la base para manejar el estado de las peticiones HTTP. Mientras el servidor Laravel procesa, renderizamos un componente de carga; si hay éxito, el contenido; si hay error, una alerta."
                        </p>
                    </div>
                </div>
            </div>
        </section>




        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">4. Listas y el Método Map</h3>
                <span class="bg-cyan-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Transformación de Datos</span>
            </div>

            <p class="text-lg text-slate-600 mb-8 font-light italic leading-relaxed">
                Para mostrar múltiples elementos (como una lista de pasajeros o vuelos), transformamos arreglos de datos en elementos visuales utilizando el método <code>.map()</code>. Es la base de las interfaces basadas en colecciones.
            </p>

            <div class="bg-slate-900 rounded-3xl shadow-xl overflow-hidden mb-8">
                <div class="bg-slate-800 px-6 py-3 text-[10px] font-black text-slate-400 border-b border-slate-700 flex justify-between items-center uppercase tracking-widest">
                    <span>Laboratorio: Renderizado de Colecciones</span>
                    <i class="fas fa-list text-cyan-400"></i>
                </div>
                <pre class="p-8 text-sm font-mono text-blue-300 overflow-x-auto">
&lt;script type="text/babel"&gt;
    function ListaVuelos() {
        const vuelos = [
            { id: 101, destino: "Santa Cruz", estado: "A tiempo" },
            { id: 102, destino: "La Paz", estado: "Demorado" },
            { id: 103, destino: "Santiago", estado: "Abordando" }
        ];

        return (
            &lt;div&gt;
                &lt;h2&gt;Panel de Salidas&lt;/h2&gt;
                &lt;ul&gt;
                    {vuelos.map((v) => (
                        /* El atributo 'key' es vital para el rendimiento de React */
                        &lt;li key={v.id}&gt;
                            {v.destino} - &lt;strong&gt;{v.estado}&lt;/strong&gt;
                        &lt;/li&gt;
                    ))}
                &lt;/ul&gt;
            &lt;/div&gt;
        );
    }
&lt;/script&gt;</pre>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-6 bg-cyan-50 rounded-2xl border-l-4 border-cyan-500 shadow-sm">
                    <h4 class="font-bold text-cyan-800 text-sm mb-2 uppercase">El Atributo Key</h4>
                    <p class="text-xs text-slate-600">Cada elemento de la lista debe tener un <strong>key</strong> único (normalmente el ID de la base de datos). Esto permite que el Virtual DOM identifique exactamente qué ítem cambió sin redibujar toda la lista.</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-2xl border-l-4 border-[#003366]">
                    <h4 class="font-bold text-[#003366] text-sm mb-2 uppercase">Inmutabilidad y .map()</h4>
                    <p class="text-xs text-slate-600">Usamos <code>.map()</code> porque devuelve un nuevo arreglo sin modificar el original. Es un principio fundamental de la programación funcional en React.</p>
                </div>
            </div>

            

            <div class="mt-12 bg-slate-800 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden border border-slate-700">
                <div class="relative z-10">
                    <h4 class="text-cyan-400 font-black text-xs uppercase mb-4 tracking-widest">Preparación para React Native</h4>
                    <p class="text-lg font-light leading-relaxed">
                        "En móviles, no usaremos etiquetas &lt;ul&gt; ni &lt;li&gt;. Sin embargo, la lógica de <code>.map()</code> es exactamente la misma que usaremos para alimentar componentes como el <strong>FlatList</strong>, que es el estándar para scroll eficiente en iOS y Android."
                    </p>
                </div>
            </div>
        </section>





        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">5. Efectos de Ciclo de Vida</h3>
                <span class="bg-indigo-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Sincronización de Datos</span>
            </div>

            <p class="text-lg text-slate-600 mb-8 font-light italic leading-relaxed">
                ¿Cómo hacemos que la App traiga datos de un servidor apenas se abre? Para esto usamos <code>useEffect</code>, el Hook que gestiona los "efectos secundarios" y el ciclo de vida del componente.
            </p>

            <div class="bg-slate-900 rounded-3xl shadow-xl overflow-hidden mb-8">
                <div class="bg-slate-800 px-6 py-3 text-[10px] font-black text-slate-400 border-b border-slate-700 flex justify-between items-center uppercase tracking-widest">
                    <span>Laboratorio: Consumo de Datos Externos</span>
                    <i class="fas fa-sync-alt text-indigo-400"></i>
                </div>
                <pre class="p-8 text-sm font-mono text-blue-300 overflow-x-auto">
&lt;script type="text/babel"&gt;
    const { useState, useEffect } = React;

    function MonitorHangar() {
        const [estado, setEstado] = useState("Cargando...");

        // useEffect se ejecuta después de que el componente aparece en pantalla
        useEffect(() => {
            console.log("Componente montado. Conectando a la API...");
            
            // Simulamos una petición a tu backend de Laravel
            setTimeout(() => {
                setEstado("Conexión Exitosa: Hangar Activo");
            }, 2000);

        }, []); // [] = El array de dependencias vacío asegura que solo se ejecute UNA vez

        return (
            &lt;div class="p-4 bg-slate-800 text-white rounded-xl"&gt;
                &lt;h2&gt;Estado del Sistema&lt;/h2&gt;
                &lt;p class="text-cyan-400"&gt;{estado}&lt;/p&gt;
            &lt;/div&gt;
        );
    }
&lt;/script&gt;</pre>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-6 bg-indigo-50 rounded-2xl border-l-4 border-indigo-500 shadow-sm">
                    <h4 class="font-bold text-indigo-800 text-sm mb-2 uppercase">El Array de Dependencias</h4>
                    <p class="text-xs text-slate-600">El segundo argumento <code>[]</code> le dice a React cuándo debe volver a ejecutar el efecto. Si está vacío, solo ocurre al "nacer" el componente. Si ponemos una variable, se ejecuta cada vez que esa variable cambie.</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-2xl border-l-4 border-[#003366]">
                    <h4 class="font-bold text-[#003366] text-sm mb-2 uppercase">Llamadas a API</h4>
                    <p class="text-xs text-slate-600">Es el lugar estándar para usar <code>fetch</code> o <code>axios</code>. Sin este Hook, las peticiones entrarían en un bucle infinito que colapsaría el navegador o el procesador del celular.</p>
                </div>
            </div>

            

            <div class="mt-12 bg-gradient-to-r from-indigo-900 to-[#003366] text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
                <div class="relative z-10">
                    <h4 class="text-cyan-400 font-black text-xs uppercase mb-4 tracking-widest">Base para React Native</h4>
                    <p class="text-lg font-light leading-relaxed">
                        "En móviles, <code>useEffect</code> es crítico para pedir permisos de Cámara o GPS apenas el usuario abre la pantalla. Además, es donde sincronizamos la App con los datos de **Laravel** de la Unidad 09 para que el usuario no vea una pantalla vacía."
                    </p>
                </div>
            </div>
        </section>




        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">6. ¿Qué es realmente useEffect?</h3>
                <span class="bg-indigo-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Conceptos Fundamentales</span>
            </div>

            <p class="text-lg text-slate-600 mb-8 font-light italic leading-relaxed">
                A menudo se confunde con estilos o componentes, pero <code>useEffect</code> es el cerebro lógico que gestiona la relación de tu App con el mundo exterior. Aquí tres definiciones clave para entenderlo:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div class="p-6 bg-slate-50 rounded-3xl border-t-8 border-indigo-500 shadow-sm">
                    <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
                        <i class="fas fa-satellite-dish"></i>
                    </div>
                    <h4 class="font-black text-indigo-900 uppercase text-xs mb-3 tracking-widest">1. Un Escuchador Lógico</h4>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Es un componente que <strong>"escucha"</strong> cambios en las variables que tú le digas. Cuando algo cambia en el sistema, el efecto se dispara para ejecutar una acción específica, como actualizar un contador o refrescar una lista.
                    </p>
                </div>

                <div class="p-6 bg-slate-50 rounded-3xl border-t-8 border-cyan-500 shadow-sm">
                    <div class="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4 text-cyan-600">
                        <i class="fas fa-exchange-alt"></i>
                    </div>
                    <h4 class="font-black text-cyan-900 uppercase text-xs mb-3 tracking-widest">2. Un Puente Externo</h4>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Se llama "Efecto Secundario" porque gestiona tareas que están <strong>fuera del control de React</strong>. Por ejemplo: pedirle datos a tu servidor <strong>Laravel</strong>, manipular el título de la pestaña o conectar un sensor de GPS.
                    </p>
                </div>

                <div class="p-6 bg-slate-50 rounded-3xl border-t-8 border-[#003366] shadow-sm">
                    <div class="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-4 text-[#003366]">
                        <i class="fas fa-hourglass-start"></i>
                    </div>
                    <h4 class="font-black text-[#003366] uppercase text-xs mb-3 tracking-widest">3. Gestor de Vida</h4>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Es el encargado de controlar el <strong>Ciclo de Vida</strong>. Decide qué código debe ejecutarse cuando el componente "nace" (aparece en pantalla), cuando "cambia" y cuando "muere" (se cierra la pantalla).
                    </p>
                </div>
            </div>

            

            <div class="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100">
                <h4 class="text-indigo-800 font-black text-xs uppercase mb-4 tracking-widest">Diferencia con CSS:</h4>
                <p class="text-sm text-slate-600 leading-relaxed">
                    A diferencia del CSS que solo define <strong>cómo se ve</strong> un botón, <code>useEffect</code> define <strong>qué sucede</strong> en el sistema operativo o en el servidor cuando ese botón aparece o cambia. En móviles, es lo que permite que la App sepa que debe empezar a rastrear tu ubicación apenas entras al mapa.
                </p>
            </div>
        </section>






        



        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">7. Laboratorio: useEffect</h3>
                <a href="https://gist.github.com/jaimezambranachacon/099d8db95cb0d2bf0bc1569605e6c84b" target="_blank" class="bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-bold shadow-lg hover:bg-slate-700 transition-all">
                    <i class="fab fa-github"></i> VER CÓDIGO COMPLETO (GIST)
                </a>
            </div>

            <p class="text-lg text-slate-600 mb-8 font-light italic leading-relaxed">
                Este laboratorio simula una petición asíncrona a un servidor central. Es la base para conectar tu futura App móvil con tu API de Laravel.
            </p>

            <div class="bg-slate-900 rounded-3xl shadow-xl overflow-hidden mb-8">
                <div class="bg-slate-800 px-6 py-3 text-[10px] font-black text-slate-400 border-b border-slate-700 flex justify-between items-center uppercase tracking-widest">
                    <span>Sincronia_Aerea_Lab.html</span>
                    <i class="fas fa-play text-green-400"></i>
                </div>
                <pre class="p-8 text-sm font-mono text-blue-300 overflow-x-auto">
&lt;script type="text/babel"&gt;
    const { useState, useEffect } = React;

    function App() {
        const [datos, setDatos] = useState([]);
        const [cargando, setCargando] = useState(true);

        useEffect(() => {
            // Simulamos consulta a la API de Sincronía Aérea
            setTimeout(() => {
                const aviones = ["Boeing 747", "Airbus A320", "Cessna 172"];
                setDatos(aviones);
                setCargando(false);
            }, 3000);
        }, []); 

        return (
            &lt;div class="p-10 font-sans"&gt;
                &lt;h1 class="text-3xl font-bold mb-6"&gt;Monitor de Hangares&lt;/h1&gt;
                {cargando ? (
                    &lt;p class="text-orange-500"&gt;Conectando con el servidor central...&lt;/p&gt;
                ) : (
                    &lt;ul class="list-disc ml-10 space-y-2 text-xl"&gt;
                        {datos.map((avion, i) => &lt;li key={i}&gt;✈️ {avion}&lt;/li&gt;)}
                    &lt;/ul&gt;
                )}
            &lt;/div&gt;
        );
    }
&lt;/script&gt;</pre>
            </div>

            <div class="bg-slate-50 p-6 rounded-[2rem] border border-slate-200 mb-12 flex flex-col items-center">
                <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Resultado en Pantalla</h4>
                <img src="./content/pdfs/001.gif" alt="Resultado Monitor de Hangares" class="rounded-xl shadow-2xl border border-white max-w-full h-auto">
                <p class="mt-4 text-xs text-slate-500 italic">Captura del renderizado final tras la ejecución del efecto.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
                    <h5 class="font-black text-[#003366] text-xs uppercase mb-4 tracking-widest">El Flujo de Datos</h5>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        Cuando el componente se monta, <code>datos</code> es un arreglo vacío. El <code>useEffect</code> espera 3 segundos (simulando latencia de red) y luego usa <code>setDatos</code>. Este cambio de estado dispara un re-render que cambia la vista de "Cargando" a la lista definitiva.
                    </p>
                </div>
                <div class="p-8 bg-indigo-900 text-white rounded-3xl shadow-lg">
                    <h5 class="font-black text-cyan-400 text-xs uppercase mb-4 tracking-widest">Preparación para Móvil</h5>
                    <p class="text-sm opacity-80 leading-relaxed">
                        En <strong>React Native</strong>, este mismo patrón se usa para el "Pull to Refresh" (deslizar para actualizar). <code>useEffect</code> será el encargado de refrescar la información de los hangares cada vez que el usuario acceda a la pantalla principal.
                    </p>
                </div>
            </div>
        </section>






        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">8. Anatomía del Ciclo de Vida</h3>
                <span class="bg-rose-500 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Ingeniería de Software</span>
            </div>

            <p class="text-lg text-slate-600 mb-8 font-light italic leading-relaxed">
                En React, un componente es un ser vivo digital. No solo "está" ahí; pasa por tres etapas críticas que debemos controlar para evitar fugas de memoria y optimizar el rendimiento.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div class="p-6 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                    <span class="text-3xl mb-4 block">🛫</span>
                    <h4 class="font-black text-slate-800 uppercase text-xs mb-2">1. Montaje (Mounting)</h4>
                    <p class="text-[11px] text-slate-500">Es el "despegue". El componente se crea y se inserta en el DOM. Es aquí donde <code>useEffect</code> hace el <strong>Load previo</strong> para traer datos de Laravel.</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                    <span class="text-3xl mb-4 block">🚀</span>
                    <h4 class="font-black text-slate-800 uppercase text-xs mb-2">2. Actualización (Updating)</h4>
                    <p class="text-[11px] text-slate-500">El "vuelo". Ocurre cada vez que cambian las <strong>props</strong> o el <strong>estado</strong>. El componente se vuelve a renderizar para mostrar los nuevos datos.</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
                    <span class="text-3xl mb-4 block">🛬</span>
                    <h4 class="font-black text-slate-800 uppercase text-xs mb-2">3. Desmontaje (Unmounting)</h4>
                    <p class="text-[11px] text-slate-500">El "aterrizaje". El componente se elimina del DOM. Es vital para limpiar procesos, cerrar conexiones de sockets o cancelar temporizadores.</p>
                </div>
            </div>

            

            <div class="bg-[#003366] text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
                <div class="relative z-10">
                    <h4 class="text-cyan-400 font-black text-xs uppercase mb-4 tracking-widest">Nota para la Clase</h4>
                    <p class="text-sm leading-relaxed mb-6">
                        Antes de los Hooks, usábamos métodos complejos como <code>componentDidMount</code>. Hoy, <strong>useEffect</strong> unifica todo:
                    </p>
                    <ul class="space-y-3 text-xs font-mono opacity-90">
                        <li class="flex gap-2"><i class="fas fa-terminal text-cyan-500"></i> useEffect(() => {...}, []) // Se ejecuta solo al Montar</li>
                        <li class="flex gap-2"><i class="fas fa-terminal text-cyan-500"></i> useEffect(() => {...}, [dato]) // Se ejecuta al Actualizar 'dato'</li>
                        <li class="flex gap-2"><i class="fas fa-terminal text-cyan-500"></i> return () => {...} // Se ejecuta al Desmontar (Limpieza)</li>
                    </ul>
                </div>
            </div>
            
        </section>






        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">9. Gestión de Formularios y UX</h3>
                <a href="https://gist.github.com/jaimezambranachacon/252200a6ba28f80fcecbfc387d006bdb" target="_blank" class="bg-slate-900 text-white px-4 py-2 rounded-xl text-[10px] font-bold shadow-lg hover:bg-slate-700 transition-all">
                    <i class="fab fa-github text-sm"></i> VER CÓDIGO EN GITHUB
                </a>
            </div>

            <p class="text-lg text-slate-600 mb-10 font-light italic leading-relaxed">
                El formulario es el puente principal entre el usuario y tu base de datos en Laravel. Aquí no solo capturamos datos, sino que aplicamos capas de estilo y validación para una experiencia de usuario (UX) de alta fidelidad.
            </p>

            <div class="bg-slate-50 p-8 rounded-[3rem] border border-slate-200 mb-12 flex flex-col items-center shadow-inner">
                <h4 class="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-8">Demostración en Tiempo Real</h4>
                <img src="content/pdfs/002.gif" alt="Animación Formulario React" class="rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white max-w-full h-auto">
                <p class="mt-6 text-xs text-slate-400 font-medium">Ubicación del recurso: <span class="font-mono bg-slate-200 px-2 py-1 rounded">content/pdfs/002.gif</span></p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div class="space-y-6">
                    <h4 class="text-xl font-bold text-[#003366] flex items-center gap-2">
                        <i class="fas fa-layer-group text-cyan-500"></i> Arquitectura del Estado
                    </h4>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        En este Gist, implementamos un <strong>Estado Unificado</strong>. En lugar de tener múltiples variables, usamos un objeto JSON: <code>{ tecnico, hangar, autorizado }</code>. Esto permite que la función <code>manejarCambio</code> sea genérica, detectando dinámicamente el nombre del input y actualizando la pieza de memoria exacta sin afectar al resto.
                    </p>
                    <div class="bg-cyan-50 p-5 rounded-2xl border-l-4 border-cyan-500">
                        <p class="text-xs font-bold text-cyan-800 uppercase mb-1">Dato de Ingeniería:</p>
                        <p class="text-[11px] text-cyan-700 italic">"Al usar el Spread Operator <code>...form</code>, garantizamos la inmutabilidad de los datos, un requisito de performance para dispositivos con recursos limitados en React Native."</p>
                    </div>
                </div>

                <div class="space-y-6">
                    <h4 class="text-xl font-bold text-[#003366] flex items-center gap-2">
                        <i class="fas fa-paint-brush text-indigo-500"></i> Estilos y Feedback Visual
                    </h4>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        Los estilos no son solo estética; son <strong>comunicación</strong>. Hemos aplicado:
                    </p>
                    <ul class="space-y-4 text-xs text-slate-500">
                        <li class="flex items-start gap-3">
                            <span class="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><i class="fas fa-toggle-on"></i></span>
                            <span><strong>Estados Deshabilitados:</strong> El botón de envío se bloquea (disabled) si el estado técnico es vacío, forzando la integridad del dato antes de llegar al backend.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><i class="fas fa-code"></i></span>
                            <span><strong>Box-Sizing:</strong> Uso de <code>border-box</code> en el CSS para asegurar que los paddings no rompan la estructura del layout móvil.</span>
                        </li>
                        <li class="flex items-start gap-3">
                            <span class="bg-indigo-100 text-indigo-600 p-2 rounded-lg"><i class="fas fa-terminal"></i></span>
                            <span><strong>Visualizador Debug:</strong> Incluimos una consola visual que imprime el JSON en vivo, ayudando al alumno a entender la relación entre el DOM y la Memoria.</span>
                        </li>
                    </ul>
                </div>
            </div>
            
        </section>




        


        
        

    </div>


    


</div>
`;