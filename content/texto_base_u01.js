// content/texto_base_u01.js

const pag_texto_base_u01 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-[#00aaff] font-black uppercase text-xs tracking-[0.3em]">TEXTO BASE / UNIDAD 01</span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            ESTRUCTURA<br>
            <span class="text-[#00aaff]">SEMÁNTICA (HTML5)</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            El lenguaje de marcado hipertextual es el esqueleto de toda la web. Aquí aprenderemos a estructurar la información con etiquetas semánticas antes de darle diseño (CSS) o interactividad (JS).
        </p>
        <div class="h-2 w-24 bg-[#003366] mt-8"></div>
    </header>

    <div class="max-w-4xl space-y-16">

        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">1. El Boilerplate (Estructura Básica)</h3>
            <p class="text-slate-600 leading-relaxed mb-4">Todo documento web requiere una estructura inicial obligatoria que declara el tipo de documento, el idioma y la configuración de metadatos.</p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <div class="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                    <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    <span class="text-slate-400 text-[10px] font-mono ml-2 uppercase">index.html</span>
                </div>
                <pre class="p-6 text-xs font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-gray-400">&lt;!DOCTYPE html&gt;</span>
<span class="text-pink-400">&lt;html</span> <span class="text-yellow-300">lang</span>=<span class="text-green-400">"es"</span><span class="text-pink-400">&gt;</span>
<span class="text-pink-400">&lt;head&gt;</span>
    <span class="text-pink-400">&lt;meta</span> <span class="text-yellow-300">charset</span>=<span class="text-green-400">"UTF-8"</span><span class="text-pink-400">&gt;</span>
    <span class="text-pink-400">&lt;title&gt;</span><span class="text-white">Mi primera página</span><span class="text-pink-400">&lt;/title&gt;</span>
<span class="text-pink-400">&lt;/head&gt;</span>
<span class="text-pink-400">&lt;body&gt;</span>
    <span class="text-pink-400">&lt;h1&gt;</span><span class="text-white">Hola Mundo</span><span class="text-pink-400">&lt;/h1&gt;</span>
<span class="text-pink-400">&lt;/body&gt;</span>
<span class="text-pink-400">&lt;/html&gt;</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">2. Encabezados y Párrafos</h3>
            <p class="text-slate-600 leading-relaxed mb-4">Jerarquizan la información. Los buscadores (SEO) leen los <code>&lt;h1&gt;</code> al <code>&lt;h6&gt;</code> para entender la importancia de cada bloque de texto.</p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;h1&gt;</span><span class="text-white">Título principal del sitio</span><span class="text-pink-400">&lt;/h1&gt;</span>
<span class="text-pink-400">&lt;h2&gt;</span><span class="text-white">Subtítulo o sección</span><span class="text-pink-400">&lt;/h2&gt;</span>
<span class="text-pink-400">&lt;p&gt;</span><span class="text-white">Este es un párrafo de ejemplo para mostrar texto continuo.</span><span class="text-pink-400">&lt;/p&gt;</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">3. Listas</h3>
            <p class="text-slate-600 leading-relaxed mb-4">Fundamentales no solo para enumerar datos, sino también para construir menús de navegación en la web moderna.</p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-gray-400">&lt;!-- Lista Desordenada (Viñetas) --&gt;</span>
<span class="text-pink-400">&lt;ul&gt;</span>
    <span class="text-pink-400">&lt;li&gt;</span><span class="text-white">Manzana</span><span class="text-pink-400">&lt;/li&gt;</span>
    <span class="text-pink-400">&lt;li&gt;</span><span class="text-white">Banana</span><span class="text-pink-400">&lt;/li&gt;</span>
<span class="text-pink-400">&lt;/ul&gt;</span>

<span class="text-gray-400">&lt;!-- Lista Ordenada (Números) --&gt;</span>
<span class="text-pink-400">&lt;ol&gt;</span>
    <span class="text-pink-400">&lt;li&gt;</span><span class="text-white">Primero</span><span class="text-pink-400">&lt;/li&gt;</span>
    <span class="text-pink-400">&lt;li&gt;</span><span class="text-white">Segundo</span><span class="text-pink-400">&lt;/li&gt;</span>
<span class="text-pink-400">&lt;/ol&gt;</span></pre>
            </div>
        </section>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
                <h3 class="text-xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">4. Hipervínculos</h3>
                <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                    <pre class="p-6 text-[10px] font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;a</span> <span class="text-yellow-300">href</span>=<span class="text-green-400">"https://google.com"</span><span class="text-pink-400">&gt;</span><span class="text-white">Ir a Google</span><span class="text-pink-400">&lt;/a&gt;</span>
<span class="text-pink-400">&lt;a</span> <span class="text-yellow-300">href</span>=<span class="text-green-400">"pagina.html"</span><span class="text-pink-400">&gt;</span><span class="text-white">Página local</span><span class="text-pink-400">&lt;/a&gt;</span></pre>
                </div>
            </section>
            
            <section>
                <h3 class="text-xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">5. Imágenes</h3>
                <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                    <pre class="p-6 text-[10px] font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;img</span> <span class="text-yellow-300">src</span>=<span class="text-green-400">"foto.jpg"</span> 
     <span class="text-yellow-300">alt</span>=<span class="text-green-400">"Descripción SEO"</span> 
     <span class="text-yellow-300">width</span>=<span class="text-green-400">"300"</span><span class="text-pink-400">&gt;</span></pre>
                </div>
            </section>
        </div>

        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">6. Tablas de Datos</h3>
            <p class="text-slate-600 leading-relaxed mb-4">Utilizadas estrictamente para mostrar datos tabulares (reportes, estadísticas), nunca para diseñar la estructura de la página.</p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;table</span> <span class="text-yellow-300">border</span>=<span class="text-green-400">"1"</span><span class="text-pink-400">&gt;</span>
    <span class="text-pink-400">&lt;tr&gt;</span> <span class="text-gray-400">&lt;!-- Fila de encabezados --&gt;</span>
        <span class="text-pink-400">&lt;th&gt;</span><span class="text-white">Nombre</span><span class="text-pink-400">&lt;/th&gt;</span>
        <span class="text-pink-400">&lt;th&gt;</span><span class="text-white">Edad</span><span class="text-pink-400">&lt;/th&gt;</span>
    <span class="text-pink-400">&lt;/tr&gt;</span>
    <span class="text-pink-400">&lt;tr&gt;</span> <span class="text-gray-400">&lt;!-- Fila de datos --&gt;</span>
        <span class="text-pink-400">&lt;td&gt;</span><span class="text-white">Ana</span><span class="text-pink-400">&lt;/td&gt;</span>
        <span class="text-pink-400">&lt;td&gt;</span><span class="text-white">25</span><span class="text-pink-400">&lt;/td&gt;</span>
    <span class="text-pink-400">&lt;/tr&gt;</span>
<span class="text-pink-400">&lt;/table&gt;</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">7. Formularios (Interacción)</h3>
            <p class="text-slate-600 leading-relaxed mb-4">El mecanismo principal para enviar datos desde el navegador del cliente hacia nuestro servidor backend (PHP).</p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-pink-400">&lt;form</span> <span class="text-yellow-300">action</span>=<span class="text-green-400">"/procesar.php"</span> <span class="text-yellow-300">method</span>=<span class="text-green-400">"POST"</span><span class="text-pink-400">&gt;</span>
    
    <span class="text-pink-400">&lt;label&gt;</span><span class="text-white">Nombre:</span><span class="text-pink-400">&lt;/label&gt;</span>
    <span class="text-pink-400">&lt;input</span> <span class="text-yellow-300">type</span>=<span class="text-green-400">"text"</span> <span class="text-yellow-300">name</span>=<span class="text-green-400">"nombre"</span><span class="text-pink-400">&gt;</span>
    
    <span class="text-pink-400">&lt;br&gt;</span>
    
    <span class="text-pink-400">&lt;label&gt;</span><span class="text-white">Mensaje:</span><span class="text-pink-400">&lt;/label&gt;</span>
    <span class="text-pink-400">&lt;textarea</span> <span class="text-yellow-300">name</span>=<span class="text-green-400">"mensaje"</span><span class="text-pink-400">&gt;&lt;/textarea&gt;</span>
    
    <span class="text-pink-400">&lt;button</span> <span class="text-yellow-300">type</span>=<span class="text-green-400">"submit"</span><span class="text-pink-400">&gt;</span><span class="text-white">Enviar Datos</span><span class="text-pink-400">&lt;/button&gt;</span>

<span class="text-pink-400">&lt;/form&gt;</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">8. Multimedia Nativa</h3>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-gray-400">&lt;!-- Audio con controles nativos --&gt;</span>
<span class="text-pink-400">&lt;audio</span> <span class="text-yellow-300">controls</span><span class="text-pink-400">&gt;</span>
    <span class="text-pink-400">&lt;source</span> <span class="text-yellow-300">src</span>=<span class="text-green-400">"musica.mp3"</span> <span class="text-yellow-300">type</span>=<span class="text-green-400">"audio/mpeg"</span><span class="text-pink-400">&gt;</span>
<span class="text-pink-400">&lt;/audio&gt;</span>

<span class="text-gray-400">&lt;!-- Video --&gt;</span>
<span class="text-pink-400">&lt;video</span> <span class="text-yellow-300">width</span>=<span class="text-green-400">"320"</span> <span class="text-yellow-300">controls</span><span class="text-pink-400">&gt;</span>
    <span class="text-pink-400">&lt;source</span> <span class="text-yellow-300">src</span>=<span class="text-green-400">"video.mp4"</span> <span class="text-yellow-300">type</span>=<span class="text-green-400">"video/mp4"</span><span class="text-pink-400">&gt;</span>
<span class="text-pink-400">&lt;/video&gt;</span></pre>
            </div>
        </section>

        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">9. Contenedores (Divs y Spans)</h3>
            <p class="text-slate-600 leading-relaxed mb-4">Etiquetas "vacías" de significado, pero vitales para agrupar elementos y aplicarles estilos CSS o manipularlos con JS.</p>
            
            <div class="bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
                <pre class="p-6 text-xs font-mono leading-relaxed text-blue-300 overflow-x-auto">
<span class="text-gray-400">&lt;!-- Elemento de Bloque (Ocupa todo el ancho) --&gt;</span>
<span class="text-pink-400">&lt;div</span> <span class="text-yellow-300">class</span>=<span class="text-green-400">"caja-principal"</span><span class="text-pink-400">&gt;</span>
    <span class="text-pink-400">&lt;p&gt;</span><span class="text-white">Este es un bloque agrupado.</span><span class="text-pink-400">&lt;/p&gt;</span>
<span class="text-pink-400">&lt;/div&gt;</span>

<span class="text-gray-400">&lt;!-- Elemento en Línea (No rompe el párrafo) --&gt;</span>
<span class="text-pink-400">&lt;p&gt;</span><span class="text-white">Texto con </span><span class="text-pink-400">&lt;span</span> <span class="text-yellow-300">class</span>=<span class="text-green-400">"resalte"</span><span class="text-pink-400">&gt;</span><span class="text-white">una parte destacada</span><span class="text-pink-400">&lt;/span&gt;</span><span class="text-white">.</span><span class="text-pink-400">&lt;/p&gt;</span></pre>
            </div>
        </section>

        <section class="bg-[#003366] text-white p-8 md:p-10 rounded-[2rem] shadow-xl relative overflow-hidden">
            <i class="fas fa-check-circle absolute -right-6 -bottom-6 text-white/10 text-[10rem]"></i>
            <div class="relative z-10">
                <h3 class="text-2xl font-black text-[#00aaff] uppercase mb-6">10. Buenas Prácticas de Ingeniería</h3>
                <ul class="space-y-4">
                    <li class="flex items-start gap-4">
                        <i class="fas fa-check text-green-400 mt-1"></i>
                        <p class="text-sm text-blue-50 font-light"><strong>Semántica y Accesibilidad:</strong> Usa siempre atributos como <code>alt</code> en las imágenes y <code>title</code> en enlaces clave para lectores de pantalla.</p>
                    </li>
                    <li class="flex items-start gap-4">
                        <i class="fas fa-check text-green-400 mt-1"></i>
                        <p class="text-sm text-blue-50 font-light"><strong>Separación de Responsabilidades:</strong> No uses HTML para diseñar (evita atributos como <code>&lt;font&gt;</code> o <code>&lt;center&gt;</code>). El diseño es trabajo exclusivo de CSS.</p>
                    </li>
                    <li class="flex items-start gap-4">
                        <i class="fas fa-check text-green-400 mt-1"></i>
                        <p class="text-sm text-blue-50 font-light"><strong>Validación Continua:</strong> Analiza siempre tu código HTML final usando la herramienta oficial del <a href="https://validator.w3.org/" target="_blank" class="text-yellow-400 hover:underline font-bold">W3C Validator</a> para prevenir errores estructurales.</p>
                    </li>
                </ul>
            </div>
        </section>

    </div>
</div>

`;