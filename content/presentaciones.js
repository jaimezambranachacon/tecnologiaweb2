
const pag_presentaciones = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-16">
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none">
            RECURSOS &<br>
            <span class="text-[#00aaff]">DOCUMENTACIÓN</span>
        </h1>
        <div class="h-2 w-24 bg-[#003366] mt-6"></div>
    </header>

    <section class="mb-20">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">01. Documentación Core</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            
            <a href="https://www.php.net/manual/es/" target="_blank" class="p-6 bg-slate-50 rounded-2xl hover:bg-[#003366] hover:text-white transition-all group">
                <i class="fab fa-php text-3xl mb-3 text-[#00aaff] group-hover:text-white"></i>
                <h3 class="text-sm font-black uppercase tracking-tight">PHP Engine</h3>
            </a>

            <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" class="p-6 bg-slate-50 rounded-2xl hover:bg-[#003366] hover:text-white transition-all group">
                <i class="fab fa-html5 text-3xl mb-3 text-[#00aaff] group-hover:text-white"></i>
                <h3 class="text-sm font-black uppercase tracking-tight">MDN Web Docs</h3>
            </a>

            <a href="https://vuejs.org/guide/introduction.html" target="_blank" class="p-6 bg-slate-50 rounded-2xl hover:bg-[#003366] hover:text-white transition-all group">
                <i class="fab fa-vuejs text-3xl mb-3 text-[#00aaff] group-hover:text-white"></i>
                <h3 class="text-sm font-black uppercase tracking-tight">Vue.js Guide</h3>
            </a>

            <a href="https://react.dev/learn" target="_blank" class="p-6 bg-slate-50 rounded-2xl hover:bg-[#003366] hover:text-white transition-all group">
                <i class="fab fa-react text-3xl mb-3 text-[#00aaff] group-hover:text-white"></i>
                <h3 class="text-sm font-black uppercase tracking-tight">React Docs</h3>
            </a>

        </div>
    </section>

    <section class="mb-20">
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">02. Guías y Recursos de Estudio (Enlaces Verificados)</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl">
            
            <a href="https://developer.mozilla.org/es/docs/Learn/Server-side/First_steps/Client-Server_overview" target="_blank" class="flex gap-4 items-start group hover:bg-slate-50 p-3 rounded-xl transition-colors">
                <span class="text-xl font-black text-slate-300 group-hover:text-[#00aaff] transition-colors italic mt-1">01</span>
                <div>
                    <h4 class="text-sm font-black text-[#003366] uppercase">Arquitectura Cliente/Servidor</h4>
                    <p class="text-xs text-slate-500 mt-1">Guía oficial de Mozilla sobre cómo funciona la web.</p>
                </div>
            </a>

            <a href="https://www.php.net/releases/8.0/es.php" target="_blank" class="flex gap-4 items-start group hover:bg-slate-50 p-3 rounded-xl transition-colors">
                <span class="text-xl font-black text-slate-300 group-hover:text-[#00aaff] transition-colors italic mt-1">02</span>
                <div>
                    <h4 class="text-sm font-black text-[#003366] uppercase">PHP 8: Novedades Core</h4>
                    <p class="text-xs text-slate-500 mt-1">Resumen oficial de características y rendimiento JIT.</p>
                </div>
            </a>

            <a href="https://dev.mysql.com/doc/mysql-tutorial-excerpt/8.0/en/" target="_blank" class="flex gap-4 items-start group hover:bg-slate-50 p-3 rounded-xl transition-colors">
                <span class="text-xl font-black text-slate-300 group-hover:text-[#00aaff] transition-colors italic mt-1">03</span>
                <div>
                    <h4 class="text-sm font-black text-[#003366] uppercase">Diseño de Bases MySQL</h4>
                    <p class="text-xs text-slate-500 mt-1">Tutorial oficial de Oracle para MySQL 8.0.</p>
                </div>
            </a>

            <a href="https://www.php.net/manual/es/language.oop5.php" target="_blank" class="flex gap-4 items-start group hover:bg-slate-50 p-3 rounded-xl transition-colors">
                <span class="text-xl font-black text-slate-300 group-hover:text-[#00aaff] transition-colors italic mt-1">04</span>
                <div>
                    <h4 class="text-sm font-black text-[#003366] uppercase">POO en PHP</h4>
                    <p class="text-xs text-slate-500 mt-1">Manual de clases, objetos y herencia en el servidor.</p>
                </div>
            </a>

            <a href="https://owasp.org/www-project-top-ten/" target="_blank" class="flex gap-4 items-start group hover:bg-slate-50 p-3 rounded-xl transition-colors">
                <span class="text-xl font-black text-slate-300 group-hover:text-[#00aaff] transition-colors italic mt-1">05</span>
                <div>
                    <h4 class="text-sm font-black text-[#003366] uppercase">Seguridad Web (OWASP Top 10)</h4>
                    <p class="text-xs text-slate-500 mt-1">El estándar global sobre vulnerabilidades (Inyecciones, XSS).</p>
                </div>
            </a>

            <a href="https://www.atlassian.com/es/git/tutorials/comparing-workflows" target="_blank" class="flex gap-4 items-start group hover:bg-slate-50 p-3 rounded-xl transition-colors">
                <span class="text-xl font-black text-slate-300 group-hover:text-[#00aaff] transition-colors italic mt-1">06</span>
                <div>
                    <h4 class="text-sm font-black text-[#003366] uppercase">Git Workflow para Equipos</h4>
                    <p class="text-xs text-slate-500 mt-1">Guía de Atlassian sobre flujos de trabajo profesionales.</p>
                </div>
            </a>

            <a href="https://www.php.net/manual/es/tutorial.forms.php" target="_blank" class="flex gap-4 items-start group hover:bg-slate-50 p-3 rounded-xl transition-colors">
                <span class="text-xl font-black text-slate-300 group-hover:text-[#00aaff] transition-colors italic mt-1">07</span>
                <div>
                    <h4 class="text-sm font-black text-[#003366] uppercase">Formularios y Seguridad</h4>
                    <p class="text-xs text-slate-500 mt-1">Documentación sobre el manejo de variables POST y GET.</p>
                </div>
            </a>

            <a href="https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch" target="_blank" class="flex gap-4 items-start group hover:bg-slate-50 p-3 rounded-xl transition-colors">
                <span class="text-xl font-black text-slate-300 group-hover:text-[#00aaff] transition-colors italic mt-1">08</span>
                <div>
                    <h4 class="text-sm font-black text-[#003366] uppercase">JavaScript Fetch API</h4>
                    <p class="text-xs text-slate-500 mt-1">El reemplazo moderno de AJAX para consumir datos.</p>
                </div>
            </a>

            <a href="https://es.javascript.info/" target="_blank" class="flex gap-4 items-start group hover:bg-slate-50 p-3 rounded-xl transition-colors">
                <span class="text-xl font-black text-slate-300 group-hover:text-[#00aaff] transition-colors italic mt-1">09</span>
                <div>
                    <h4 class="text-sm font-black text-[#003366] uppercase">El Lenguaje JavaScript Moderno</h4>
                    <p class="text-xs text-slate-500 mt-1">Un tutorial profundo y detallado sobre JS puro (ES6+).</p>
                </div>
            </a>

            <a href="https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/RESTful_api" target="_blank" class="flex gap-4 items-start group hover:bg-slate-50 p-3 rounded-xl transition-colors">
                <span class="text-xl font-black text-slate-300 group-hover:text-[#00aaff] transition-colors italic mt-1">10</span>
                <div>
                    <h4 class="text-sm font-black text-[#003366] uppercase">Diseño de APIs RESTful</h4>
                    <p class="text-xs text-slate-500 mt-1">Conceptos teóricos sobre cómo estructurar una API profesional.</p>
                </div>
            </a>

        </div>
    </section>

    <section>
        <h2 class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 border-b pb-2">03. Plataformas de Ayuda Rápida</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            
            <a href="https://www.w3schools.com/" target="_blank" class="py-6 bg-slate-50 rounded-2xl hover:bg-[#003366] hover:text-[#00aaff] transition-all">
                <h5 class="text-[11px] font-black uppercase">W3Schools</h5>
            </a>

            <a href="https://stackoverflow.com/" target="_blank" class="py-6 bg-slate-50 rounded-2xl hover:bg-[#003366] hover:text-[#00aaff] transition-all">
                <h5 class="text-[11px] font-black uppercase">Stack Overflow</h5>
            </a>

            <a href="https://github.com/" target="_blank" class="py-6 bg-slate-50 rounded-2xl hover:bg-[#003366] hover:text-[#00aaff] transition-all">
                <h5 class="text-[11px] font-black uppercase">GitHub</h5>
            </a>

            <a href="https://css-tricks.com/" target="_blank" class="py-6 bg-slate-50 rounded-2xl hover:bg-[#003366] hover:text-[#00aaff] transition-all">
                <h5 class="text-[11px] font-black uppercase">CSS-Tricks</h5>
            </a>

        </div>
    </section>

</div>
`;