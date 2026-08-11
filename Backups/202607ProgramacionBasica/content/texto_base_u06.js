// content/texto_base_u06.js
const pag_texto_base_u06 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-rose-600 font-black uppercase text-xs tracking-[0.3em]">TEXTO BASE / UNIDAD 06</span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            INGENIERÍA A ESCALA<br>
            <span class="text-rose-600">(FRAMEWORKS Y MVC)</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Escribir PHP puro archivo por archivo es insostenible para proyectos gigantes. La industria exige velocidad, seguridad estándar y trabajo en equipo. Es la hora de evolucionar hacia los Frameworks.
        </p>
        <div class="h-2 w-24 bg-rose-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">1. ¿Qué es exactamente un Framework?</h3>
            <div class="flex flex-col md:flex-row gap-8 items-center">
                <div class="flex-1">
                    <p class="text-lg text-slate-600 leading-relaxed mb-6">
                        Imagina que quieres construir un edificio. En PHP puro, tú tienes que talar los árboles, fabricar los clavos y diseñar las tuberías desde cero. Un <strong>Framework</strong> es como comprar una estructura de acero ya ensamblada: los cimientos de seguridad, las tuberías de conexión a la base de datos y los sistemas de inicio de sesión ya vienen hechos. Tú solo te encargas de la lógica de negocio (el diseño interior).
                    </p>
                    <ul class="space-y-3">
                        <li class="flex items-center gap-3 text-slate-600"><i class="fas fa-check-circle text-rose-500"></i> No reinventas la rueda (Auth, Ruteo, Sesiones).</li>
                        <li class="flex items-center gap-3 text-slate-600"><i class="fas fa-check-circle text-rose-500"></i> Código ordenado bajo un estándar internacional.</li>
                        <li class="flex items-center gap-3 text-slate-600"><i class="fas fa-check-circle text-rose-500"></i> Seguridad nivel bancario por defecto (Protección contra Inyección SQL y CSRF).</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">2. La Arquitectura MVC (Modelo-Vista-Controlador)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Todos los frameworks modernos funcionan bajo este patrón arquitectónico. Separa tu aplicación en tres grandes cerebros para que el código no sea un espagueti inmanejable.
            </p>
            
            

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                <div class="bg-slate-50 p-6 rounded-2xl border-t-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
                    <h4 class="font-black text-[#003366] text-xl mb-3"><i class="fas fa-database text-blue-500 mr-2"></i>Modelo (Model)</h4>
                    <p class="text-sm text-slate-600">Es el guardia de seguridad de tus datos. Es la ÚNICA parte del código que habla con la Base de Datos (MariaDB). Representa tus tablas como Objetos PHP (POO).</p>
                </div>
                <div class="bg-slate-50 p-6 rounded-2xl border-t-4 border-green-500 shadow-sm hover:shadow-md transition-shadow">
                    <h4 class="font-black text-[#003366] text-xl mb-3"><i class="fas fa-desktop text-green-500 mr-2"></i>Vista (View)</h4>
                    <p class="text-sm text-slate-600">Es la cara bonita del sistema. Aquí es donde vive tu HTML, tu CSS (Bootstrap) y tu JS. La vista NO piensa, solo muestra la información que le entregan.</p>
                </div>
                <div class="bg-slate-50 p-6 rounded-2xl border-t-4 border-rose-500 shadow-sm hover:shadow-md transition-shadow">
                    <h4 class="font-black text-[#003366] text-xl mb-3"><i class="fas fa-microchip text-rose-500 mr-2"></i>Controlador</h4>
                    <p class="text-sm text-slate-600">Es el director de orquesta. Recibe la petición del usuario (ej: "Quiero ver mis notas"), le pide los datos al Modelo, y se los pasa a la Vista para que los dibuje.</p>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">3. El Ecosistema PHP: Los Contendientes</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                A lo largo de los años, varios titanes han luchado por el trono del mejor framework de PHP. Conocerlos te da perspectiva histórica de cómo ha evolucionado la ingeniería web.
            </p>

            <div class="space-y-4">
                <div class="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-red-400 transition-colors">
                    <div class="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                        <i class="fas fa-fire text-xl"></i>
                    </div>
                    <div>
                        <h4 class="text-lg font-black text-[#003366]">CodeIgniter</h4>
                        <p class="text-sm text-slate-600 mt-1">El abuelo confiable. Fue el primer framework popular por ser extremadamente ligero y rápido de instalar. <strong>¿Su problema?</strong> Se estancó en el tiempo y no adoptó características modernas de PHP rápido, quedando relegado a proyectos legacy (antiguos).</p>
                    </div>
                </div>

                <div class="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-cyan-400 transition-colors">
                    <div class="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 flex-shrink-0">
                        <i class="fas fa-yin-yang text-xl"></i>
                    </div>
                    <div>
                        <h4 class="text-lg font-black text-[#003366]">Yii Framework</h4>
                        <p class="text-sm text-slate-600 mt-1">Conocido por su rendimiento brutal y su capacidad para generar código automáticamente (Gii). Muy utilizado en portales asiáticos y rusos. Sin embargo, su curva de aprendizaje es empinada y su comunidad hispana es más pequeña.</p>
                    </div>
                </div>

                <div class="flex items-start gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-black transition-colors">
                    <div class="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-800 flex-shrink-0">
                        <i class="fab fa-symfony text-xl"></i>
                    </div>
                    <div>
                        <h4 class="text-lg font-black text-[#003366]">Symfony</h4>
                        <p class="text-sm text-slate-600 mt-1">La ingeniería en su máxima expresión. Es increíblemente estricto, robusto y modular. Es tan bueno que otros frameworks (incluyendo Laravel) utilizan piezas de Symfony bajo el capó. Es el estándar para software empresarial masivo, pero es "demasiado complejo" para proyectos rápidos.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="mt-20">
            <h3 class="text-4xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">
                4. El Vencedor Indiscutible: <span class="text-rose-600">Laravel</span>
            </h3>
            
            <div class="bg-rose-50 border border-rose-200 p-8 md:p-10 rounded-[2rem] shadow-lg relative overflow-hidden group">
                <i class="fab fa-laravel absolute -right-10 -bottom-10 text-rose-600/10 text-[18rem] group-hover:scale-110 transition-transform duration-700"></i>
                
                <div class="relative z-10">
                    <span class="text-[10px] font-black uppercase tracking-widest text-rose-500 mb-2 block">
                        La historia de la revolución
                    </span>
                    <p class="text-slate-700 leading-relaxed mb-6">
                        En 2011, un programador llamado <strong>Taylor Otwell</strong> estaba frustrado con CodeIgniter porque no tenía herramientas modernas (como autenticación nativa). En lugar de quejarse, decidió crear su propio framework. Así nació Laravel.
                    </p>
                    <p class="text-slate-700 leading-relaxed mb-8">
                        Hoy en día, Laravel no es solo un framework, es un ecosistema monstruoso. Ha convertido el desarrollo Backend en una experiencia hermosa y expresiva. Se enfoca en la <em>"Felicidad del Desarrollador"</em>.
                    </p>

                    <h5 class="font-black text-[#003366] text-lg mb-4">¿Por qué Laravel destrozó a la competencia?</h5>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                            <i class="fas fa-terminal text-slate-800"></i>
                            <span class="text-sm font-bold text-slate-700">Artisan CLI (Generación de código)</span>
                        </div>
                        <div class="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                            <i class="fas fa-database text-rose-500"></i>
                            <span class="text-sm font-bold text-slate-700">Eloquent ORM (Bases de datos sin SQL)</span>
                        </div>
                        <div class="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                            <i class="fas fa-shield-alt text-green-500"></i>
                            <span class="text-sm font-bold text-slate-700">Seguridad & Auth lista para usar</span>
                        </div>
                        <div class="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                            <i class="fas fa-users text-blue-500"></i>
                            <span class="text-sm font-bold text-slate-700">La comunidad más grande del mundo</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        <section class="mt-20 mb-10">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">5. El Diagrama de Flujo: MVC en Laravel</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-10">
                En Laravel, el patrón MVC tiene un "portero" estricto antes de llegar al Controlador: <strong>El Enrutador (Router)</strong>. Observa la radiografía exacta de cómo viaja la información desde que el usuario ingresa una URL hasta que la pantalla se dibuja.
            </p>

            

            <div class="bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <i class="fab fa-laravel absolute -left-10 -bottom-10 text-rose-500/5 text-[25rem]"></i>
                
                <div class="relative z-10 flex flex-col items-center">
                    
                    <div class="flex flex-col md:flex-row items-center gap-4 w-full justify-center mb-8">
                        <div class="bg-slate-800 border border-slate-700 p-4 rounded-xl text-center w-full md:w-48 shadow-lg z-10">
                            <i class="fas fa-laptop text-blue-400 text-3xl mb-2"></i>
                            <h5 class="text-white font-bold text-sm">1. Navegador</h5>
                            <p class="text-[10px] text-slate-400 mt-1">Ingresa: midominio.com/usuarios</p>
                        </div>
                        
                        <div class="text-slate-500 hidden md:block"><i class="fas fa-arrow-right text-2xl"></i></div>
                        <div class="text-slate-500 md:hidden"><i class="fas fa-arrow-down text-2xl"></i></div>

                        <div class="bg-rose-900/50 border border-rose-500/50 p-4 rounded-xl text-center w-full md:w-48 shadow-lg z-10">
                            <i class="fas fa-map-signs text-rose-400 text-3xl mb-2"></i>
                            <h5 class="text-white font-bold text-sm">2. Router (web.php)</h5>
                            <p class="text-[10px] text-slate-400 mt-1">Verifica si la URL existe y a quién llamar.</p>
                        </div>
                    </div>

                    <div class="text-slate-500 mb-8"><i class="fas fa-arrow-down text-2xl"></i></div>

                    <div class="bg-rose-600 border-2 border-rose-400 p-6 rounded-2xl text-center w-full max-w-md shadow-rose-600/30 shadow-2xl z-10 mb-8">
                        <i class="fas fa-microchip text-white text-4xl mb-3"></i>
                        <h5 class="text-white font-black text-xl uppercase tracking-widest">3. Controlador</h5>
                        <p class="text-xs text-rose-100 mt-2">UsuarioController.php<br>El director de orquesta recibe la orden.</p>
                    </div>

                    <div class="flex flex-col md:flex-row items-start gap-10 w-full justify-center relative">
                        
                        <div class="absolute top-0 left-1/2 w-full hidden md:block">
                            <svg class="absolute -left-[15%] -top-8 w-[30%] h-12" fill="none" stroke="#64748b" stroke-width="2"><path d="M 100 0 L 0 0 L 0 50" stroke-dasharray="5,5"/></svg>
                            <svg class="absolute left-[85%] -top-8 w-[30%] h-12" fill="none" stroke="#64748b" stroke-width="2"><path d="M 0 0 L 100 0 L 100 50" stroke-dasharray="5,5"/></svg>
                        </div>

                        <div class="flex flex-col items-center w-full md:w-1/3 z-10">
                            <div class="text-slate-500 md:hidden mb-4"><i class="fas fa-arrow-down text-xl"></i></div>
                            <div class="bg-blue-900/50 border border-blue-500/50 p-5 rounded-xl text-center w-full shadow-lg mb-4">
                                <i class="fas fa-database text-blue-400 text-3xl mb-2"></i>
                                <h5 class="text-white font-bold text-sm">4. Modelo (Eloquent)</h5>
                                <p class="text-[10px] text-slate-400 mt-1">Usuario.php<br>Traduce PHP a consultas SQL.</p>
                            </div>
                            <i class="fas fa-exchange-alt text-slate-500 rotate-90 my-1"></i>
                            <div class="bg-slate-800 border-b-4 border-blue-500 p-3 rounded-xl text-center w-3/4 shadow-lg">
                                <h5 class="text-slate-300 font-bold text-xs"><i class="fas fa-server mr-1"></i> MariaDB</h5>
                            </div>
                        </div>

                        <div class="flex flex-col items-center w-full md:w-1/3 z-10">
                            <div class="text-slate-500 md:hidden mb-4"><i class="fas fa-arrow-down text-xl"></i></div>
                            <div class="bg-green-900/50 border border-green-500/50 p-5 rounded-xl text-center w-full shadow-lg">
                                <i class="fab fa-html5 text-green-400 text-3xl mb-2"></i>
                                <h5 class="text-white font-bold text-sm">5. Vista (Blade)</h5>
                                <p class="text-[10px] text-slate-400 mt-1">usuarios.blade.php<br>Recibe los datos y los inyecta en el HTML.</p>
                            </div>
                            <div class="text-slate-500 mt-6"><i class="fas fa-arrow-down text-xl mb-2"></i></div>
                            <div class="bg-slate-800 border border-slate-700 p-2 rounded-lg text-center w-3/4 shadow-lg">
                                <p class="text-[10px] text-green-400 font-bold">Respuesta HTTP al Navegador</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            <div class="p-6 bg-slate-50 border-l-4 border-rose-500 rounded-r-2xl mt-8 shadow-sm">
                <p class="text-sm text-slate-700">
                    <strong><i class="fas fa-lightbulb text-yellow-500 mr-2"></i>La Regla de Oro:</strong> La Vista <strong>NUNCA</strong> habla con el Modelo. El Modelo <strong>NUNCA</strong> dibuja botones HTML. Si respetas al Controlador como el único intermediario, tu sistema podrá escalar infinitamente sin romperse.
                </p>
            </div>
        </section>



        b
        <section class="bg-[#003366] text-white p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden mt-20">
            <div class="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
                <div class="flex-none">
                    <div class="w-20 h-20 rounded-2xl bg-rose-600 flex items-center justify-center shadow-lg transform -rotate-6">
                        <i class="fab fa-laravel text-4xl text-white"></i>
                    </div>
                </div>
                <div>
                    <h3 class="text-2xl font-black text-rose-400 uppercase mb-2">Preparando los Motores</h3>
                    <p class="text-lg text-blue-50 font-light leading-relaxed">
                        La teoría histórica y arquitectónica ha terminado. A partir de la próxima unidad, instalaremos Composer, bajaremos la última versión de Laravel y empezaremos a teclear la lógica de nuestros propios Controladores y Modelos. ¡Alista tu terminal!
                    </p>
                </div>
            </div>
        </section>

    </div>
</div>
`;