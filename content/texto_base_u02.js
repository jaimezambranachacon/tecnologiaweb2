// content/texto_base_u02.js
const pag_texto_base_u02 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-blue-500 font-black uppercase text-xs tracking-[0.3em]">TEXTO BASE / UNIDAD 02</span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            ARQUITECTURA<br>
            <span class="text-blue-500">VISUAL (CSS3)</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Cascading Style Sheets (CSS) es el lenguaje de diseño que define la presentación de nuestro documento estructurado. En esta unidad, dominaremos la separación real entre el contenido (HTML) y la Experiencia de Usuario (UX/UI).
        </p>
        <div class="h-2 w-24 bg-[#003366] mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">1. Selectores y Especificidad</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Para darle estilo a un elemento, primero debemos "atraparlo". La Cascada en CSS significa que las reglas se aplican de arriba hacia abajo, pero la <strong>Especificidad</strong> dicta qué regla gana si hay un conflicto (un ID siempre vence a una Clase).
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <div class="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                    <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    <span class="text-slate-400 text-[10px] font-mono ml-2 uppercase">style.css</span>
                </div>
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-gray-400">/* 1. Selector de Etiqueta (Baja especificidad) */</span>
<span class="text-pink-400">p</span> <span class="text-white">{</span>
    <span class="text-blue-300">color</span><span class="text-white">:</span> <span class="text-green-400">#333333</span><span class="text-white">;</span>
    <span class="text-blue-300">line-height</span><span class="text-white">:</span> <span class="text-yellow-300">1.6</span><span class="text-white">;</span>
<span class="text-white">}</span>

<span class="text-gray-400">/* 2. Selector de Clase (Media especificidad - RECOMENDADO) */</span>
<span class="text-pink-400">.alerta-error</span> <span class="text-white">{</span>
    <span class="text-blue-300">background-color</span><span class="text-white">:</span> <span class="text-green-400">#fee2e2</span><span class="text-white">;</span>
    <span class="text-blue-300">border-left</span><span class="text-white">:</span> <span class="text-yellow-300">4px</span> <span class="text-pink-400">solid</span> <span class="text-green-400">#ef4444</span><span class="text-white">;</span>
<span class="text-white">}</span>

<span class="text-gray-400">/* 3. Selector de ID (Alta especificidad - Usar con cautela) */</span>
<span class="text-pink-400">#cabecera-principal</span> <span class="text-white">{</span>
    <span class="text-blue-300">height</span><span class="text-white">:</span> <span class="text-yellow-300">80px</span><span class="text-white">;</span>
<span class="text-white">}</span>

<span class="text-gray-400">/* 4. Pseudo-clases (Interacción del usuario) */</span>
<span class="text-pink-400">.btn-enviar:hover</span> <span class="text-white">{</span>
    <span class="text-blue-300">transform</span><span class="text-white">:</span> <span class="text-yellow-300">scale</span>(<span class="text-yellow-300">1.05</span>)<span class="text-white">;</span>
    <span class="text-blue-300">cursor</span><span class="text-white">:</span> <span class="text-green-400">pointer</span><span class="text-white">;</span>
<span class="text-white">}</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">2. El Modelo de Caja (Box Model)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                El concepto más importante de CSS. <strong>Todo elemento HTML es una caja rectangular</strong>. Entender cómo el margen (afuera), el borde, el relleno (adentro) y el contenido interactúan es vital para no romper los diseños.
            </p>
            
            <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl mb-6">
                <p class="text-sm text-blue-900"><strong>El reseteo universal:</strong> Por defecto, si le das a una caja 100px de ancho y 20px de padding, la caja medirá 140px. Para obligar a CSS a respetar tus medidas, los ingenieros siempre usamos <code>box-sizing: border-box;</code>.</p>
            </div>

            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-gray-400">/* Reseteo Profesional Estándar */</span>
<span class="text-pink-400">*</span>, <span class="text-pink-400">*::before</span>, <span class="text-pink-400">*::after</span> <span class="text-white">{</span>
    <span class="text-blue-300">margin</span><span class="text-white">:</span> <span class="text-yellow-300">0</span><span class="text-white">;</span>
    <span class="text-blue-300">padding</span><span class="text-white">:</span> <span class="text-yellow-300">0</span><span class="text-white">;</span>
    <span class="text-blue-300">box-sizing</span><span class="text-white">:</span> <span class="text-green-400">border-box</span><span class="text-white">;</span>
<span class="text-white">}</span>

<span class="text-pink-400">.tarjeta-producto</span> <span class="text-white">{</span>
    <span class="text-blue-300">width</span><span class="text-white">:</span> <span class="text-yellow-300">300px</span><span class="text-white">;</span>      <span class="text-gray-400">/* Ancho total (incluye padding y border) */</span>
    <span class="text-blue-300">padding</span><span class="text-white">:</span> <span class="text-yellow-300">20px</span><span class="text-white">;</span>     <span class="text-gray-400">/* Espacio interno hacia el texto */</span>
    <span class="text-blue-300">border</span><span class="text-white">:</span> <span class="text-yellow-300">1px</span> <span class="text-pink-400">solid</span> <span class="text-green-400">#ccc</span><span class="text-white">;</span> <span class="text-gray-400">/* Borde visible */</span>
    <span class="text-blue-300">margin-bottom</span><span class="text-white">:</span> <span class="text-yellow-300">15px</span><span class="text-white">;</span> <span class="text-gray-400">/* Espacio externo hacia otras cajas */</span>
<span class="text-white">}</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">3. Flujo y Posicionamiento</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                A veces necesitamos sacar un elemento de su orden natural (como un menú fijo arriba o un botón de chat flotante). Para esto usamos la propiedad <code>position</code>.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h4 class="font-black text-[#003366] mb-2 uppercase text-sm">Relative & Absolute</h4>
                    <p class="text-sm text-slate-500 mb-4">Un elemento <code>absolute</code> se mueve libremente <strong>dentro</strong> del primer contenedor padre que tenga <code>relative</code>.</p>
                    <pre class="bg-slate-900 p-4 rounded-xl text-[10px] font-mono text-blue-300 overflow-x-auto">
<span class="text-pink-400">.padre</span> { <span class="text-blue-300">position</span>: <span class="text-green-400">relative</span>; }
<span class="text-pink-400">.hijo-flotante</span> {
    <span class="text-blue-300">position</span>: <span class="text-green-400">absolute</span>;
    <span class="text-blue-300">top</span>: <span class="text-yellow-300">10px</span>;
    <span class="text-blue-300">right</span>: <span class="text-yellow-300">10px</span>;
}</pre>
                </div>
                
                <div class="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <h4 class="font-black text-[#003366] mb-2 uppercase text-sm">Fixed & Sticky</h4>
                    <p class="text-sm text-slate-500 mb-4"><code>Fixed</code> se ancla a la pantalla del usuario (no se mueve al hacer scroll). <code>Sticky</code> se pega al llegar a un punto.</p>
                    <pre class="bg-slate-900 p-4 rounded-xl text-[10px] font-mono text-blue-300 overflow-x-auto">
<span class="text-pink-400">.menu-navegacion</span> {
    <span class="text-blue-300">position</span>: <span class="text-green-400">fixed</span>;
    <span class="text-blue-300">top</span>: <span class="text-yellow-300">0</span>;
    <span class="text-blue-300">width</span>: <span class="text-yellow-300">100%</span>;
    <span class="text-blue-300">z-index</span>: <span class="text-yellow-300">999</span>; <span class="text-gray-400">/* Capa superior */</span>
}</pre>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">4. Arquitectura de Layout: Flexbox</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                <strong>El estándar absoluto para alineación unidimensional (filas o columnas).</strong> Reemplaza por completo el uso de <code>float</code>. Con Flexbox, centrar un elemento vertical y horizontalmente dejó de ser un dolor de cabeza.
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <div class="bg-slate-800 px-4 py-2 border-b border-slate-700">
                    <span class="text-slate-400 text-[10px] font-mono uppercase">Ejemplo: Barra de Navegación</span>
                </div>
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">.navbar</span> <span class="text-white">{</span>
    <span class="text-blue-300">display</span><span class="text-white">:</span> <span class="text-green-400">flex</span><span class="text-white">;</span>                 <span class="text-gray-400">/* Activa el motor Flexbox */</span>
    <span class="text-blue-300">flex-direction</span><span class="text-white">:</span> <span class="text-green-400">row</span><span class="text-white">;</span>           <span class="text-gray-400">/* Elementos en fila (por defecto) */</span>
    <span class="text-blue-300">justify-content</span><span class="text-white">:</span> <span class="text-green-400">space-between</span><span class="text-white">;</span>  <span class="text-gray-400">/* Separa el logo de los enlaces */</span>
    <span class="text-blue-300">align-items</span><span class="text-white">:</span> <span class="text-green-400">center</span><span class="text-white">;</span>             <span class="text-gray-400">/* Centrado vertical perfecto */</span>
    <span class="text-blue-300">gap</span><span class="text-white">:</span> <span class="text-yellow-300">20px</span><span class="text-white">;</span>                     <span class="text-gray-400">/* Separación exacta entre elementos interiores */</span>
<span class="text-white">}</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">5. CSS Grid Layout</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Mientras Flexbox domina una dimensión, <strong>Grid domina las dos dimensiones (filas y columnas a la vez)</strong>. Es la herramienta definitiva para crear galerías de productos, paneles de administración (dashboards) o estructuras generales de la página web.
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <div class="bg-slate-800 px-4 py-2 border-b border-slate-700">
                    <span class="text-slate-400 text-[10px] font-mono uppercase">Ejemplo: Galería de 3 Columnas Responsiva</span>
                </div>
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">.galeria-productos</span> <span class="text-white">{</span>
    <span class="text-blue-300">display</span><span class="text-white">:</span> <span class="text-green-400">grid</span><span class="text-white">;</span>
    <span class="text-gray-400">/* Crea 3 columnas de igual tamaño (1 fracción cada una) */</span>
    <span class="text-blue-300">grid-template-columns</span><span class="text-white">:</span> <span class="text-yellow-300">repeat</span>(<span class="text-yellow-300">3</span>, <span class="text-yellow-300">1fr</span>)<span class="text-white">;</span> 
    <span class="text-blue-300">gap</span><span class="text-white">:</span> <span class="text-yellow-300">30px</span><span class="text-white">;</span> <span class="text-gray-400">/* Espacio entre las tarjetas */</span>
<span class="text-white">}</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">6. Diseño Responsivo (Media Queries)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Tu sistema debe verse impecable tanto en un monitor 4K como en un móvil de 6 pulgadas. Para esto usamos <code>@media</code>, inyectando reglas CSS condicionales basadas en el ancho de la pantalla del dispositivo.
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-gray-400">/* Estilos por defecto (Enfoque Mobile-First) */</span>
<span class="text-pink-400">.contenedor</span> <span class="text-white">{</span>
    <span class="text-blue-300">width</span><span class="text-white">:</span> <span class="text-yellow-300">100%</span><span class="text-white">;</span>
    <span class="text-blue-300">padding</span><span class="text-white">:</span> <span class="text-yellow-300">15px</span><span class="text-white">;</span>
<span class="text-white">}</span>

<span class="text-gray-400">/* Si la pantalla es mayor a 768px (Tablets y PC) */</span>
<span class="text-pink-400">@media</span> (<span class="text-blue-300">min-width</span><span class="text-white">:</span> <span class="text-yellow-300">768px</span>) <span class="text-white">{</span>
    <span class="text-pink-400">.contenedor</span> <span class="text-white">{</span>
        <span class="text-blue-300">width</span><span class="text-white">:</span> <span class="text-yellow-300">750px</span><span class="text-white">;</span>
        <span class="text-blue-300">margin</span><span class="text-white">:</span> <span class="text-yellow-300">0</span> <span class="text-pink-400">auto</span><span class="text-white">;</span> <span class="text-gray-400">/* Centrado horizontal */</span>
    <span class="text-white">}</span>
<span class="text-white">}</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">7. Variables CSS (Custom Properties)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                El CSS moderno nos permite declarar variables globales. Esto facilita el mantenimiento del sistema (si el cliente pide cambiar el "color primario" de la empresa, cambias <strong>una sola línea de código</strong> y se actualiza toda la aplicación).
            </p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs md:text-sm font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-gray-400">/* Definición de Variables en la raíz del documento */</span>
<span class="text-pink-400">:root</span> <span class="text-white">{</span>
    <span class="text-blue-300">--color-primario</span><span class="text-white">:</span> <span class="text-green-400">#003366</span><span class="text-white">;</span>
    <span class="text-blue-300">--color-secundario</span><span class="text-white">:</span> <span class="text-green-400">#00aaff</span><span class="text-white">;</span>
    <span class="text-blue-300">--fuente-base</span><span class="text-white">:</span> <span class="text-green-400">'Inter'</span>, <span class="text-pink-400">sans-serif</span><span class="text-white">;</span>
<span class="text-white">}</span>

<span class="text-gray-400">/* Uso de la variable */</span>
<span class="text-pink-400">.boton-principal</span> <span class="text-white">{</span>
    <span class="text-blue-300">background-color</span><span class="text-white">:</span> <span class="text-yellow-300">var</span>(<span class="text-green-400">--color-primario</span>)<span class="text-white">;</span>
    <span class="text-blue-300">font-family</span><span class="text-white">:</span> <span class="text-yellow-300">var</span>(<span class="text-green-400">--fuente-base</span>)<span class="text-white">;</span>
<span class="text-white">}</span></pre>
            </div>
        </section>

        <section class="bg-[#003366] text-white p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden mt-20">
            <i class="fab fa-css3-alt absolute -right-6 -bottom-6 text-white/5 text-[15rem]"></i>
            <div class="relative z-10">
                <h3 class="text-3xl font-black text-[#00aaff] uppercase mb-4">Conclusión de Ingeniería</h3>
                <p class="text-lg text-blue-50 font-light leading-relaxed mb-6">
                    A lo largo del proyecto formativo, no escribiremos CSS desde cero. Utilizaremos frameworks utilitarios como <strong>Tailwind CSS</strong> o de componentes como <strong>Bootstrap</strong> para agilizar el desarrollo. Sin embargo, <strong>el framework no hace magia</strong>; bajo el capó, todo se compila a las reglas de Flexbox, Grid y Especificidad que acabas de leer. Dominar el "CSS Puro" te hace un desarrollador a prueba de balas.
                </p>
                <div class="inline-block border-t border-blue-400/30 pt-4 mt-2">
                    <span class="text-[10px] uppercase tracking-widest text-blue-300 font-bold">» Fin de la Unidad 02</span>
                </div>
            </div>
        </section>

    </div>
</div>
`;