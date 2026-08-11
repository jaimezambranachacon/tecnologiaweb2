// content/texto_base_u02.js

const pag_texto_base_u02 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-20">
        <span class="text-blue-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fab fa-css3-alt text-lg"></i> TEXTO BASE / UNIDAD 2
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            HOJAS DE ESTILO EN CASCADA<br>
            <span class="text-blue-600">Y MAQUETACIÓN WEB (CSS3)</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Separación de forma y contenido, sintaxis moderna de CSS3, modelo de caja, reglas de especificidad, posicionamiento de elementos y maquetación con Flexbox y CSS Grid.
        </p>
        <div class="h-2 w-24 bg-blue-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <!-- SECCIÓN 1: FUNDAMENTOS Y SINTAXIS -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. Conceptos Fundamentales, Sintaxis y Selectores
            </h3>
            
            <div class="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-8 border-blue-600 rounded-r-3xl shadow-sm mb-8">
                <h4 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">Separación de Contenido y Presentación</h4>
                <p class="text-xl text-slate-800 leading-relaxed font-semibold italic">
                    "HTML provee el significado y la estructura lógica del documento, mientras que CSS define su aspecto visual, maquetación y adaptabilidad visual en múltiples pantallas."
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div class="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-tag"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-lg mb-1">Selectores Básicos</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Selección por tipo de etiqueta (<code>p</code>), por clase reusable (<code>.btn</code>) o por identificador único (<code>#header</code>).
                    </p>
                </div>

                <div class="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div class="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-lg mb-1">Pseudo-clases / Elementos</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Permiten dar formato según estados interactivos como <code>:hover</code>, <code>:focus</code> o insertar contenido con <code>::before</code> y <code>::after</code>.
                    </p>
                </div>

                <div class="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div class="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-lg mb-1">Cascada y Especificidad</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Mecanismo de resolución de conflictos cuando múltiples reglas aplican sobre un mismo elemento HTML.
                    </p>
                </div>
            </div>

            <hr class="border-slate-100 my-12">

            <!-- EJEMPLO CÓDIGO SINTAXIS Y SELECTORES -->
            <h4 class="text-2xl font-black text-[#003366] uppercase mb-6">Sintaxis Básica de CSS3</h4>
            <div class="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm text-slate-200 mb-8">
                <div class="bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-700/50">
                    <span class="text-xs text-slate-400 font-bold"><i class="fab fa-css3-alt text-blue-400 mr-2"></i> estilos_basicos.css</span>
                    <div class="flex gap-1.5">
                        <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                        <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                        <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                    </div>
                </div>
                <pre class="p-6 overflow-x-auto leading-relaxed text-xs md:text-sm bg-slate-950"><code><span class="text-slate-500">/* 1. Selector de Etiqueta */</span>
<span class="text-yellow-400">body</span> {
    <span class="text-blue-400">font-family</span>: <span class="text-emerald-400">'Segoe UI', Tahoma, Geneva, Verdana, sans-serif</span>;
    <span class="text-blue-400">color</span>: <span class="text-emerald-400">#333333</span>;
    <span class="text-blue-400">background-color</span>: <span class="text-emerald-400">#f4f6f9</span>;
}

<span class="text-slate-500">/* 2. Selector de Clase (Reusable) */</span>
<span class="text-yellow-400">.tarjeta-producto</span> {
    <span class="text-blue-400">background-color</span>: <span class="text-emerald-400">#ffffff</span>;
    <span class="text-blue-400">border-radius</span>: <span class="text-emerald-400">12px</span>;
    <span class="text-blue-400">box-shadow</span>: <span class="text-emerald-400">0 4px 6px rgba(0, 0, 0, 0.1)</span>;
}

<span class="text-slate-500">/* 3. Pseudo-clase e Interacción */</span>
<span class="text-yellow-400">.tarjeta-producto:hover</span> {
    <span class="text-blue-400">transform</span>: <span class="text-emerald-400">translateY(-5px)</span>;
    <span class="text-blue-400">transition</span>: <span class="text-emerald-400">all 0.3s ease</span>;
}</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 2: MODELO DE CAJA (BOX MODEL) -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. El Modelo de Caja (Box Model)
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                En CSS, todo elemento expuesto en la página web es tratado internamente como una caja rectangular compuesta por cuatro capas superpuestas: <strong>Content</strong>, <strong>Padding</strong>, <strong>Border</strong> y <strong>Margin</strong>.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h4 class="font-black text-[#003366] text-lg mb-3">Componentes del Modelo</h4>
                    <ul class="space-y-3 text-xs text-slate-600">
                        <li class="flex items-center gap-2"><strong class="text-blue-600 font-mono">Content:</strong> El texto, imagen o elemento interno.</li>
                        <li class="flex items-center gap-2"><strong class="text-indigo-600 font-mono">Padding:</strong> Espacio libre transparente dentro del borde.</li>
                        <li class="flex items-center gap-2"><strong class="text-amber-600 font-mono">Border:</strong> Borde delimitador alrededor del padding.</li>
                        <li class="flex items-center gap-2"><strong class="text-rose-600 font-mono">Margin:</strong> Margen externo que separa la caja de otras.</li>
                    </ul>
                </div>

                <div class="bg-amber-50 p-6 rounded-2xl border border-amber-200 flex flex-col justify-between">
                    <div>
                        <span class="text-[10px] font-black text-amber-600 uppercase tracking-widest block mb-1">Regla de Oro</span>
                        <h4 class="font-black text-slate-800 text-base mb-2">box-sizing: border-box;</h4>
                        <p class="text-xs text-slate-600 leading-relaxed">
                            Por defecto (<code>content-box</code>), sumar padding o bordes incrementa el tamaño total de la caja. Aplicar <code>border-box</code> hace que las dimensiones especificadas (ancho y alto) incluyan el padding y el borde, facilitando la maquetación.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 3: POSICIONAMIENTO Y LAYOUTS (FLEXBOX Y GRID) -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Maquetación CSS: Posicionamiento, Flexbox y CSS Grid
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Para distribuir elementos sobre la pantalla existen esquemas de maquetación modernos que reemplazan el antiguo uso de flotantes (<code>float</code>).
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                    <h4 class="font-black text-[#003366] text-lg mb-3 flex items-center gap-2">
                        <i class="fas fa-arrows-left-right text-blue-600"></i> Flexbox (Unidimensional)
                    </h4>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        Ideal para distribuir y alinear elementos a lo largo de un solo eje (filas o columnas), perfecto para barras de navegación, botones y tarjetas:
                    </p>
                    <div class="bg-slate-900 p-4 rounded-xl font-mono text-xs text-slate-200">
                        <code>
                            .contenedor-flex {<br>
                            &nbsp;&nbsp;display: flex;<br>
                            &nbsp;&nbsp;justify-content: space-between;<br>
                            &nbsp;&nbsp;align-items: center;<br>
                            &nbsp;&nbsp;gap: 1rem;<br>
                            }
                        </code>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                    <h4 class="font-black text-[#003366] text-lg mb-3 flex items-center gap-2">
                        <i class="fas fa-table-cells text-purple-600"></i> CSS Grid (Bidimensional)
                    </h4>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        Diseñado para controlar filas y columnas simultáneamente, ideal para la estructura global de páginas web complejos o galerías:
                    </p>
                    <div class="bg-slate-900 p-4 rounded-xl font-mono text-xs text-slate-200">
                        <code>
                            .galeria-grid {<br>
                            &nbsp;&nbsp;display: grid;<br>
                            &nbsp;&nbsp;grid-template-columns: repeat(3, 1fr);<br>
                            &nbsp;&nbsp;gap: 1.5rem;<br>
                            }
                        </code>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 4: PROYECTO 100% CSS INTEGRADO -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. Proyecto Práctico: Maquetación y Diseño de Perfil con CSS3
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                A continuación, se detalla una solución completa en **HTML5 y CSS3 puro** que maqueta un perfil profesional utilizando **Modelo de Caja**, **Flexbox** y **CSS Grid** sin la necesidad de usar librerías externas.
            </p>

            <div class="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs md:text-sm text-slate-200 mb-8">
                <div class="bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-700/50">
                    <span class="text-xs text-slate-400 font-bold"><i class="fab fa-css3-alt text-blue-400 mr-2"></i> proyecto_unidad2.html</span>
                    <span class="text-[10px] bg-blue-600 text-white font-bold px-2 py-0.5 rounded">Proyecto U2</span>
                </div>
                <pre class="p-6 overflow-x-auto leading-relaxed bg-slate-950 text-slate-300"><code><span class="text-slate-500">&lt;!DOCTYPE html&gt;</span>
<span class="text-blue-400">&lt;html</span> <span class="text-yellow-400">lang</span>=<span class="text-emerald-400">"es"</span><span class="text-blue-400">&gt;</span>
<span class="text-blue-400">&lt;head&gt;</span>
    <span class="text-blue-400">&lt;meta</span> <span class="text-yellow-400">charset</span>=<span class="text-emerald-400">"UTF-8"</span><span class="text-blue-400">&gt;</span>
    <span class="text-blue-400">&lt;title&gt;</span>Diseño de Tarjeta de Perfil - CSS3<span class="text-blue-400">&lt;/title&gt;</span>
    <span class="text-blue-400">&lt;style&gt;</span>
        <span class="text-slate-500">/* Reseteo Global y Box Model */</span>
        <span class="text-yellow-400">*</span> {
            <span class="text-blue-400">box-sizing</span>: <span class="text-emerald-400">border-box</span>;
            <span class="text-blue-400">margin</span>: <span class="text-emerald-400">0</span>;
            <span class="text-blue-400">padding</span>: <span class="text-emerald-400">0</span>;
        }

        <span class="text-yellow-400">body</span> {
            <span class="text-blue-400">font-family</span>: <span class="text-emerald-400">'Segoe UI', Arial, sans-serif</span>;
            <span class="text-blue-400">background-color</span>: <span class="text-emerald-400">#001f3f</span>;
            <span class="text-blue-400">display</span>: <span class="text-emerald-400">flex</span>;
            <span class="text-blue-400">justify-content</span>: <span class="text-emerald-400">center</span>;
            <span class="text-blue-400">align-items</span>: <span class="text-emerald-400">center</span>;
            <span class="text-blue-400">min-height</span>: <span class="text-emerald-400">100vh</span>;
        }

        <span class="text-[#00aaff]">/* Contenedor Principal con Flexbox */</span>
        <span class="text-yellow-400">.card-perfil</span> {
            <span class="text-blue-400">background-color</span>: <span class="text-emerald-400">#ffffff</span>;
            <span class="text-blue-400">width</span>: <span class="text-emerald-400">380px</span>;
            <span class="text-blue-400">border-radius</span>: <span class="text-emerald-400">20px</span>;
            <span class="text-blue-400">padding</span>: <span class="text-emerald-400">2rem</span>;
            <span class="text-blue-400">box-shadow</span>: <span class="text-emerald-400">0 15px 25px rgba(0,0,0,0.3)</span>;
            <span class="text-blue-400">text-align</span>: <span class="text-emerald-400">center</span>;
        }

        <span class="text-yellow-400">.card-perfil img</span> {
            <span class="text-blue-400">width</span>: <span class="text-emerald-400">100px</span>;
            <span class="text-blue-400">height</span>: <span class="text-emerald-400">100px</span>;
            <span class="text-blue-400">border-radius</span>: <span class="text-emerald-400">50%</span>;
            <span class="text-blue-400">border</span>: <span class="text-emerald-400">4px solid #00aaff</span>;
            <span class="text-blue-400">margin-bottom</span>: <span class="text-emerald-400">1rem</span>;
        }

        <span class="text-yellow-400">.card-perfil h2</span> {
            <span class="text-blue-400">color</span>: <span class="text-emerald-400">#003366</span>;
            <span class="text-blue-400">font-size</span>: <span class="text-emerald-400">1.5rem</span>;
        }

        <span class="text-yellow-400">.card-perfil p</span> {
            <span class="text-blue-400">color</span>: <span class="text-emerald-400">#666</span>;
            <span class="text-blue-400">font-size</span>: <span class="text-emerald-400">0.9rem</span>;
            <span class="text-blue-400">margin-bottom</span>: <span class="text-emerald-400">1.5rem</span>;
        }

        <span class="text-[#00aaff]">/* Grid Interno para Estadísticas */</span>
        <span class="text-yellow-400">.stats-grid</span> {
            <span class="text-blue-400">display</span>: <span class="text-emerald-400">grid</span>;
            <span class="text-blue-400">grid-template-columns</span>: <span class="text-emerald-400">repeat(3, 1fr)</span>;
            <span class="text-blue-400">gap</span>: <span class="text-emerald-400">10px</span>;
            <span class="text-blue-400">border-top</span>: <span class="text-emerald-400">1px solid #eee</span>;
            <span class="text-blue-400">padding-top</span>: <span class="text-emerald-400">1rem</span>;
        }

        <span class="text-yellow-400">.stat-item h3</span> {
            <span class="text-blue-400">color</span>: <span class="text-emerald-400">#003366</span>;
            <span class="text-blue-400">font-size</span>: <span class="text-emerald-400">1.1rem</span>;
        }

        <span class="text-yellow-400">.stat-item span</span> {
            <span class="text-blue-400">color</span>: <span class="text-emerald-400">#888</span>;
            <span class="text-blue-400">font-size</span>: <span class="text-emerald-400">0.75rem</span>;
        }
    <span class="text-blue-400">&lt;/style&gt;</span>
<span class="text-blue-400">&lt;/head&gt;</span>
<span class="text-blue-400">&lt;body&gt;</span>

    <span class="text-blue-400">&lt;div</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"card-perfil"</span><span class="text-blue-400">&gt;</span>
        <span class="text-blue-400">&lt;img</span> <span class="text-yellow-400">src</span>=<span class="text-emerald-400">"https://via.placeholder.com/100"</span> <span class="text-yellow-400">alt</span>=<span class="text-emerald-400">"Avatar"</span><span class="text-blue-400">&gt;</span>
        <span class="text-blue-400">&lt;h2&gt;</span>Estudiante UPDS<span class="text-blue-400">&lt;/h2&gt;</span>
        <span class="text-blue-400">&lt;p&gt;</span>Diseñador &amp; Desarrollador Web<span class="text-blue-400">&lt;/p&gt;</span>
        
        <span class="text-blue-400">&lt;div</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"stats-grid"</span><span class="text-blue-400">&gt;</span>
            <span class="text-blue-400">&lt;div</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"stat-item"</span><span class="text-blue-400">&gt;</span>
                <span class="text-blue-400">&lt;h3&gt;</span>12<span class="text-blue-400">&lt;/h3&gt;</span>
                <span class="text-blue-400">&lt;span&gt;</span>Proyectos<span class="text-blue-400">&lt;/span&gt;</span>
            <span class="text-blue-400">&lt;/div&gt;</span>
            <span class="text-blue-400">&lt;div</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"stat-item"</span><span class="text-blue-400">&gt;</span>
                <span class="text-blue-400">&lt;h3&gt;</span>100%<span class="text-blue-400">&lt;/h3&gt;</span>
                <span class="text-blue-400">&lt;span&gt;</span>HTML / CSS<span class="text-blue-400">&lt;/span&gt;</span>
            <span class="text-blue-400">&lt;/div&gt;</span>
            <span class="text-blue-400">&lt;div</span> <span class="text-yellow-400">class</span>=<span class="text-emerald-400">"stat-item"</span><span class="text-blue-400">&gt;</span>
                <span class="text-blue-400">&lt;h3&gt;</span>4.0<span class="text-blue-400">&lt;/h3&gt;</span>
                <span class="text-blue-400">&lt;span&gt;</span>Semestre<span class="text-blue-400">&lt;/span&gt;</span>
            <span class="text-blue-400">&lt;/div&gt;</span>
        <span class="text-blue-400">&lt;/div&gt;</span>
    <span class="text-blue-400">&lt;/div&gt;</span>

<span class="text-blue-400">&lt;/body&gt;</span>
<span class="text-blue-400">&lt;/html&gt;</span></code></pre>
            </div>
        </section>

    </div>
</div>
`;