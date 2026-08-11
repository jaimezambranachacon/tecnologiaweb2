// content/texto_base_u01.js

const pag_texto_base_u01 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <header class="mb-20">
        <span class="text-blue-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fab fa-html5 text-lg"></i> TEXTO BASE / UNIDAD 1
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            DISEÑO DE SITIOS WEB CON<br>
            <span class="text-blue-600">LENGUAJES DE MARCAS HTML</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Fundamentos de la Web, arquitectura cliente-servidor, estándares W3C, evolución histórica y desarrollo de estructuras semánticas en HTML5 para la maquetación de prototipos funcionales.
        </p>
        <div class="h-2 w-24 bg-blue-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <!-- SECCIÓN 1: HISTORIA Y FUNDAMENTOS -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                1. Historia de la Web y la Guerra de los Navegadores
            </h3>
            
            <div class="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-8 border-blue-600 rounded-r-3xl shadow-sm mb-8">
                <h4 class="text-xs font-black uppercase tracking-widest text-blue-600 mb-2">El Origen de la World Wide Web</h4>
                <p class="text-xl text-slate-800 leading-relaxed font-semibold italic">
                    "En 1989, Sir Tim Berners-Lee inventó la World Wide Web en el CERN para compartir información entre científicos de todo el mundo, unificando el hipertexto con la infraestructura de Internet."
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div class="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div class="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-globe"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-lg mb-1">Nacimiento (1989-1991)</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        Tim Berners-Lee creó los pilares conceptuales: el lenguaje HTML, el protocolo HTTP y el sistema de direccionamiento URL, junto con el primer navegador y servidor Web (NeXTSTEP).
                    </p>
                </div>

                <div class="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div class="w-10 h-10 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-swords"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-lg mb-1">Guerra de Navegadores</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        En los años 90, Netscape Navigator e Internet Explorer compitieron añadiendo etiquetas propietarias no compatibles, fragmentando la web hasta la llegada del W3C para estandarizarla.
                    </p>
                </div>

                <div class="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div class="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-black mb-3">
                        <i class="fas fa-certificate"></i>
                    </div>
                    <h5 class="font-black text-slate-800 text-lg mb-1">Era del W3C y HTML5</h5>
                    <p class="text-slate-500 text-xs leading-relaxed">
                        El World Wide Web Consortium (W3C) unificó los estándares. HTML5 surgió como estándar vivo, integrando semántica moderna, multimedia nativa y soporte móvil.
                    </p>
                </div>
            </div>

            <hr class="border-slate-100 my-12">

            <!-- CONCEPTOS CLAVE: HTML, URL, HTTP -->
            <h4 class="text-2xl font-black text-[#003366] uppercase mb-6">Tríada Fundamental de la Web</h4>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <span class="text-xs font-black text-blue-600 uppercase tracking-widest block mb-1">Lenguaje de Marcado</span>
                    <h5 class="text-xl font-bold text-slate-800 mb-2">HTML</h5>
                    <p class="text-xs text-slate-400 font-mono mb-3">HyperText Markup Language</p>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Lenguaje estructurado basado en etiquetas que define la organización, jerarquía y contenido de los documentos web.
                    </p>
                </div>

                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <span class="text-xs font-black text-blue-600 uppercase tracking-widest block mb-1">Direccionamiento</span>
                    <h5 class="text-xl font-bold text-slate-800 mb-2">URL</h5>
                    <p class="text-xs text-slate-400 font-mono mb-3">Uniform Resource Locator</p>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Cadena única que asigna la dirección exacta de acceso a cualquier recurso (páginas, imágenes, archivos) en la red.
                    </p>
                </div>

                <div class="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                    <span class="text-xs font-black text-blue-600 uppercase tracking-widest block mb-1">Protocolo de Red</span>
                    <h5 class="text-xl font-bold text-slate-800 mb-2">HTTP / HTTPS</h5>
                    <p class="text-xs text-slate-400 font-mono mb-3">HyperText Transfer Protocol (Secure)</p>
                    <p class="text-xs text-slate-600 leading-relaxed">
                        Protocolo de comunicación cliente-servidor para la transferencia segura de datos e hipertexto en la Web.
                    </p>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 2: ESTRUCTURA BÁSICA Y ETIQUETAS -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                2. Estructura Básica y Etiquetas Esenciales de HTML5
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Todo documento HTML5 debe seguir un esquema estandarizado compuesto por la declaración del tipo de documento, encabezados de metadatos (<code>&lt;head&gt;</code>) y el cuerpo visible de la página (<code>&lt;body&gt;</code>).
            </p>

            <div class="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-sm text-slate-200 mb-8">
                <div class="bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-700/50">
                    <span class="text-xs text-slate-400 font-bold"><i class="fab fa-html5 text-orange-500 mr-2"></i> estructura_base.html</span>
                    <div class="flex gap-1.5">
                        <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                        <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                        <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                    </div>
                </div>
                <pre class="p-6 overflow-x-auto leading-relaxed text-xs md:text-sm bg-slate-950"><code><span class="text-slate-500">&lt;!DOCTYPE html&gt;</span>
<span class="text-blue-400">&lt;html</span> <span class="text-yellow-400">lang</span>=<span class="text-emerald-400">"es"</span><span class="text-blue-400">&gt;</span>
<span class="text-blue-400">&lt;head&gt;</span>
    <span class="text-blue-400">&lt;meta</span> <span class="text-yellow-400">charset</span>=<span class="text-emerald-400">"UTF-8"</span><span class="text-blue-400">&gt;</span>
    <span class="text-blue-400">&lt;meta</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"viewport"</span> <span class="text-yellow-400">content</span>=<span class="text-emerald-400">"width=device-width, initial-scale=1.0"</span><span class="text-blue-400">&gt;</span>
    <span class="text-blue-400">&lt;title&gt;</span>Diseño Web I - UPDS<span class="text-blue-400">&lt;/title&gt;</span>
<span class="text-blue-400">&lt;/head&gt;</span>
<span class="text-blue-400">&lt;body&gt;</span>
    <span class="text-blue-400">&lt;header&gt;</span>
        <span class="text-blue-400">&lt;h1&gt;</span>Título Principal (H1)<span class="text-blue-400">&lt;/h1&gt;</span>
    <span class="text-blue-400">&lt;/header&gt;</span>

    <span class="text-blue-400">&lt;main&gt;</span>
        <span class="text-blue-400">&lt;p&gt;</span>Este es un párrafo de texto en HTML5 con un <span class="text-blue-400">&lt;a</span> <span class="text-yellow-400">href</span>=<span class="text-emerald-400">"#"</span><span class="text-blue-400">&gt;</span>enlace de hipertexto<span class="text-blue-400">&lt;/a&gt;</span>.<span class="text-blue-400">&lt;/p&gt;</span>
    <span class="text-blue-400">&lt;/main&gt;</span>
<span class="text-blue-400">&lt;/body&gt;</span>
<span class="text-blue-400">&lt;/html&gt;</span></code></pre>
            </div>
        </section>

        <!-- SECCIÓN 3: ETIQUETAS AVANZADAS: TABLAS, FORMULARIOS Y MULTIMEDIA -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                3. Elementos Avanzados: Tablas, Formularios y Multimedia
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                HTML5 expande la interactividad permitiendo capturar datos mediante formularios con validaciones nativas, representar datos tabulares y reproducir elementos de audio y video sin necesidad de complementos externos.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                    <h4 class="font-black text-[#003366] text-lg mb-3 flex items-center gap-2">
                        <i class="fas fa-[#00aaff] fa-list-check"></i> Formulario Interactivo (HTML5)
                    </h4>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        Uso de campos de entrada con tipos específicos como <code>email</code>, <code>password</code>, y botones de envío:
                    </p>
                    <div class="bg-slate-900 p-4 rounded-xl font-mono text-xs text-slate-200">
                        <code>
                            &lt;form action="/procesar" method="POST"&gt;<br>
                            &nbsp;&nbsp;&lt;label&gt;Correo:&lt;/label&gt;<br>
                            &nbsp;&nbsp;&lt;input type="email" required&gt;<br>
                            &nbsp;&nbsp;&lt;button type="submit"&gt;Enviar&lt;/button&gt;<br>
                            &lt;/form&gt;
                        </code>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-2xl shadow-md border border-slate-100">
                    <h4 class="font-black text-[#003366] text-lg mb-3 flex items-center gap-2">
                        <i class="fas fa-photo-film text-purple-600"></i> Multimedia Nativa
                    </h4>
                    <p class="text-xs text-slate-500 leading-relaxed mb-4">
                        Etiquetas avanzadas <code>&lt;audio&gt;</code> y <code>&lt;video&gt;</code> con controles integrados de reproducción:
                    </p>
                    <div class="bg-slate-900 p-4 rounded-xl font-mono text-xs text-slate-200">
                        <code>
                            &lt;video controls width="100%"&gt;<br>
                            &nbsp;&nbsp;&lt;source src="video.mp4" type="video/mp4"&gt;<br>
                            &nbsp;&nbsp;Tu navegador no soporta video HTML5.<br>
                            &lt;/video&gt;
                        </code>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECCIÓN 4: PROYECTO 100% HTML PURAS ETIQUETAS -->
        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. Proyecto Práctico: Portafolio Web (HTML Puro)
            </h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                A continuación, se presenta un proyecto completo utilizando **únicamente HTML5 estándar** (sin CSS ni JavaScript). Este prototipo integra estructura semántica, tablas, listas, enlaces, imágenes, formularios y elementos multimedia.
            </p>

            <div class="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs md:text-sm text-slate-200 mb-8">
                <div class="bg-slate-800 px-6 py-3 flex items-center justify-between border-b border-slate-700/50">
                    <span class="text-xs text-slate-400 font-bold"><i class="fas fa-code text-blue-400 mr-2"></i> proyecto_unidad1.html</span>
                    <span class="text-[10px] bg-blue-600 text-white font-bold px-2 py-0.5 rounded">Proyecto U1</span>
                </div>
                <pre class="p-6 overflow-x-auto leading-relaxed bg-slate-950 text-slate-300"><code><span class="text-slate-500">&lt;!DOCTYPE html&gt;</span>
<span class="text-blue-400">&lt;html</span> <span class="text-yellow-400">lang</span>=<span class="text-emerald-400">"es"</span><span class="text-blue-400">&gt;</span>
<span class="text-blue-400">&lt;head&gt;</span>
    <span class="text-blue-400">&lt;meta</span> <span class="text-yellow-400">charset</span>=<span class="text-emerald-400">"UTF-8"</span><span class="text-blue-400">&gt;</span>
    <span class="text-blue-400">&lt;title&gt;</span>Portafolio Profesional - Estudiante UPDS<span class="text-blue-400">&lt;/title&gt;</span>
<span class="text-blue-400">&lt;/head&gt;</span>
<span class="text-blue-400">&lt;body&gt;</span>

    <span class="text-slate-500">&lt;!-- ENCABEZADO Y NAVEGACIÓN --&gt;</span>
    <span class="text-blue-400">&lt;header&gt;</span>
        <span class="text-blue-400">&lt;h1&gt;</span>Juan Pérez - Desarrollador Web Junior<span class="text-blue-400">&lt;/h1&gt;</span>
        <span class="text-blue-400">&lt;p&gt;</span>Estudiante de Ingeniería de Sistemas | Universidad Privada Domingo Savio<span class="text-blue-400">&lt;/p&gt;</span>
        <span class="text-blue-400">&lt;nav&gt;</span>
            <span class="text-blue-400">&lt;ul&gt;</span>
                <span class="text-blue-400">&lt;li&gt;&lt;a</span> <span class="text-yellow-400">href</span>=<span class="text-emerald-400">"#sobre-mi"</span><span class="text-blue-400">&gt;</span>Sobre Mí<span class="text-blue-400">&lt;/a&gt;&lt;/li&gt;</span>
                <span class="text-blue-400">&lt;li&gt;&lt;a</span> <span class="text-yellow-400">href</span>=<span class="text-emerald-400">"#proyectos"</span><span class="text-blue-400">&gt;</span>Proyectos Académicos<span class="text-blue-400">&lt;/a&gt;&lt;/li&gt;</span>
                <span class="text-blue-400">&lt;li&gt;&lt;a</span> <span class="text-yellow-400">href</span>=<span class="text-emerald-400">"#contacto"</span><span class="text-blue-400">&gt;</span>Contacto<span class="text-blue-400">&lt;/a&gt;&lt;/li&gt;</span>
            <span class="text-blue-400">&lt;/ul&gt;</span>
        <span class="text-blue-400">&lt;/nav&gt;</span>
    <span class="text-blue-400">&lt;/header&gt;</span>

    <span class="text-blue-400">&lt;hr&gt;</span>

    <span class="text-slate-500">&lt;!-- CONTENIDO PRINCIPAL --&gt;</span>
    <span class="text-blue-400">&lt;main&gt;</span>

        <span class="text-slate-500">&lt;!-- SECCIÓN SOBRE MÍ --&gt;</span>
        <span class="text-blue-400">&lt;section</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"sobre-mi"</span><span class="text-blue-400">&gt;</span>
            <span class="text-blue-400">&lt;h2&gt;</span>Sobre Mí<span class="text-blue-400">&lt;/h2&gt;</span>
            <span class="text-blue-400">&lt;img</span> <span class="text-yellow-400">src</span>=<span class="text-emerald-400">"https://via.placeholder.com/150"</span> <span class="text-yellow-400">alt</span>=<span class="text-emerald-400">"Foto de perfil de Juan Pérez"</span><span class="text-blue-400">&gt;</span>
            <span class="text-blue-400">&lt;p&gt;</span>
                Soy un apasionado por la tecnología y la creación de soluciones digitales accesibles bajo los estándares del 
                <span class="text-blue-400">&lt;strong&gt;</span>W3C<span class="text-blue-400">&lt;/strong&gt;</span>. Actualmente curso el cuarto semestre en la UPDS.
            <span class="text-blue-400">&lt;/p&gt;</span>
            
            <span class="text-blue-400">&lt;h3&gt;</span>Habilidades Técnicas<span class="text-blue-400">&lt;/h3&gt;</span>
            <span class="text-blue-400">&lt;ul&gt;</span>
                <span class="text-blue-400">&lt;li&gt;</span>Estructuración de documentos HTML5<span class="text-blue-400">&lt;/li&gt;</span>
                <span class="text-blue-400">&lt;li&gt;</span>Formularios interactivos y semántica web<span class="text-blue-400">&lt;/li&gt;</span>
                <span class="text-blue-400">&lt;li&gt;</span>Manejo básico de tablas y maquetación web<span class="text-blue-400">&lt;/li&gt;</span>
            <span class="text-blue-400">&lt;/ul&gt;</span>
        <span class="text-blue-400">&lt;/section&gt;</span>

        <span class="text-blue-400">&lt;hr&gt;</span>

        <span class="text-slate-500">&lt;!-- SECCIÓN TABLA DE PROYECTOS --&gt;</span>
        <span class="text-blue-400">&lt;section</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"proyectos"</span><span class="text-blue-400">&gt;</span>
            <span class="text-blue-400">&lt;h2&gt;</span>Proyectos Realizados en Diseño Web I<span class="text-blue-400">&lt;/h2&gt;</span>
            <span class="text-blue-400">&lt;table</span> <span class="text-yellow-400">border</span>=<span class="text-emerald-400">"1"</span> <span class="text-yellow-400">cellpadding</span>=<span class="text-emerald-400">"8"</span><span class="text-blue-400">&gt;</span>
                <span class="text-blue-400">&lt;thead&gt;</span>
                    <span class="text-blue-400">&lt;tr&gt;</span>
                        <span class="text-blue-400">&lt;th&gt;</span>Proyecto<span class="text-blue-400">&lt;/th&gt;</span>
                        <span class="text-blue-400">&lt;th&gt;</span>Tecnologías Usadas<span class="text-blue-400">&lt;/th&gt;</span>
                        <span class="text-blue-400">&lt;th&gt;</span>Estado<span class="text-blue-400">&lt;/th&gt;</span>
                    <span class="text-blue-400">&lt;/tr&gt;</span>
                <span class="text-blue-400">&lt;/thead&gt;</span>
                <span class="text-blue-400">&lt;tbody&gt;</span>
                    <span class="text-blue-400">&lt;tr&gt;</span>
                        <span class="text-blue-400">&lt;td&gt;</span>Sitio Institucional<span class="text-blue-400">&lt;/td&gt;</span>
                        <span class="text-blue-400">&lt;td&gt;</span>HTML5 Semántico<span class="text-blue-400">&lt;/td&gt;</span>
                        <span class="text-blue-400">&lt;td&gt;</span>Completado<span class="text-blue-400">&lt;/td&gt;</span>
                    <span class="text-blue-400">&lt;/tr&gt;</span>
                    <span class="text-blue-400">&lt;tr&gt;</span>
                        <span class="text-blue-400">&lt;td&gt;</span>Formulario de Registro<span class="text-blue-400">&lt;/td&gt;</span>
                        <span class="text-blue-400">&lt;td&gt;</span>HTML5 Forms<span class="text-blue-400">&lt;/td&gt;</span>
                        <span class="text-blue-400">&lt;td&gt;</span>En Revisión<span class="text-blue-400">&lt;/td&gt;</span>
                    <span class="text-blue-400">&lt;/tr&gt;</span>
                <span class="text-blue-400">&lt;/tbody&gt;</span>
            <span class="text-blue-400">&lt;/table&gt;</span>
        <span class="text-blue-400">&lt;/section&gt;</span>

        <span class="text-blue-400">&lt;hr&gt;</span>

        <span class="text-slate-500">&lt;!-- SECCIÓN FORMULARIO DE CONTACTO --&gt;</span>
        <span class="text-blue-400">&lt;section</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"contacto"</span><span class="text-blue-400">&gt;</span>
            <span class="text-blue-400">&lt;h2&gt;</span>Contacto Directo<span class="text-blue-400">&lt;/h2&gt;</span>
            <span class="text-blue-400">&lt;form</span> <span class="text-yellow-400">action</span>=<span class="text-emerald-400">"#"</span> <span class="text-yellow-400">method</span>=<span class="text-emerald-400">"POST"</span><span class="text-blue-400">&gt;</span>
                <span class="text-blue-400">&lt;p&gt;</span>
                    <span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"nombre"</span><span class="text-blue-400">&gt;</span>Nombre Completo:<span class="text-blue-400">&lt;/label&gt;&lt;br&gt;</span>
                    <span class="text-blue-400">&lt;input</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"text"</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"nombre"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"nombre"</span> <span class="text-yellow-400">required</span><span class="text-blue-400">&gt;</span>
                <span class="text-blue-400">&lt;/p&gt;</span>
                <span class="text-blue-400">&lt;p&gt;</span>
                    <span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"email"</span><span class="text-blue-400">&gt;</span>Correo Electrónico:<span class="text-blue-400">&lt;/label&gt;&lt;br&gt;</span>
                    <span class="text-blue-400">&lt;input</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"email"</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"email"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"email"</span> <span class="text-yellow-400">required</span><span class="text-blue-400">&gt;</span>
                <span class="text-blue-400">&lt;/p&gt;</span>
                <span class="text-blue-400">&lt;p&gt;</span>
                    <span class="text-blue-400">&lt;label</span> <span class="text-yellow-400">for</span>=<span class="text-emerald-400">"mensaje"</span><span class="text-blue-400">&gt;</span>Mensaje:<span class="text-blue-400">&lt;/label&gt;&lt;br&gt;</span>
                    <span class="text-blue-400">&lt;textarea</span> <span class="text-yellow-400">id</span>=<span class="text-emerald-400">"mensaje"</span> <span class="text-yellow-400">name</span>=<span class="text-emerald-400">"mensaje"</span> <span class="text-yellow-400">rows</span>=<span class="text-emerald-400">"4"</span><span class="text-blue-400">&gt;&lt;/textarea&gt;</span>
                <span class="text-blue-400">&lt;/p&gt;</span>
                <span class="text-blue-400">&lt;p&gt;</span>
                    <span class="text-blue-400">&lt;button</span> <span class="text-yellow-400">type</span>=<span class="text-emerald-400">"submit"</span><span class="text-blue-400">&gt;</span>Enviar Mensaje<span class="text-blue-400">&lt;/button&gt;</span>
                <span class="text-blue-400">&lt;/p&gt;</span>
            <span class="text-blue-400">&lt;/form&gt;</span>
        <span class="text-blue-400">&lt;/section&gt;</span>

    <span class="text-blue-400">&lt;/main&gt;</span>

    <span class="text-blue-400">&lt;hr&gt;</span>

    <span class="text-slate-500">&lt;!-- PIE DE PÁGINA --&gt;</span>
    <span class="text-blue-400">&lt;footer&gt;</span>
        <span class="text-blue-400">&lt;p&gt;</span>&copy; 2026 Universidad Privada Domingo Savio - Asignatura Diseño Web I (SIS-0140)<span class="text-blue-400">&lt;/p&gt;</span>
    <span class="text-blue-400">&lt;/footer&gt;</span>

<span class="text-blue-400">&lt;/body&gt;</span>
<span class="text-blue-400">&lt;/html&gt;</span></code></pre>
            </div>
        </section>

    </div>
</div>
`;