// content/texto_base_u01.js

const pag_texto_base_u01 = `

<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-indigo-600 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-mobile-alt text-lg"></i> TEXTO BASE / UNIDAD 10
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            INTRODUCCIÓN AL<br>
            <span class="text-indigo-600">DESARROLLO MÓVIL</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl">
            Desde la aparición del primer iPhone en 2007, el mundo cambió. Para un Ingeniero Web, el desarrollo móvil no es una opción, es la evolución natural de sus sistemas. Entenderemos la guerra de ecosistemas y cómo dominarlos con código moderno.
        </p>
        <div class="h-2 w-24 bg-indigo-600 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-20">

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">1. La Dualidad del Mercado (Nativo)</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-8">
                Históricamente, el desarrollo móvil se dividió en dos grandes murallas. Programar para una implicaba ignorar a la otra, exigiendo lenguajes y herramientas totalmente distintas:
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="p-8 bg-green-50 rounded-3xl border border-green-100 shadow-sm relative overflow-hidden">
                    <i class="fab fa-android absolute -right-4 -bottom-4 text-green-200 text-8xl"></i>
                    <h4 class="text-2xl font-black text-green-800 uppercase mb-4">Android (Google)</h4>
                    <ul class="space-y-3 text-sm text-green-900 font-medium">
                        <li><i class="fas fa-code mr-2"></i> Lenguajes: <strong>Java</strong> y el moderno <strong>Kotlin</strong>.</li>
                        <li><i class="fas fa-tools mr-2"></i> IDE: Android Studio.</li>
                        <li><i class="fas fa-globe mr-2"></i> Mercado: Más del 70% de usuarios globales.</li>
                    </ul>
                </div>

                <div class="p-8 bg-slate-100 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                    <i class="fab fa-apple absolute -right-4 -bottom-4 text-slate-300 text-8xl"></i>
                    <h4 class="text-2xl font-black text-slate-800 uppercase mb-4">iOS (Apple)</h4>
                    <ul class="space-y-3 text-sm text-slate-700 font-medium">
                        <li><i class="fas fa-code mr-2"></i> Lenguajes: Objective-C y el actual <strong>Swift</strong>.</li>
                        <li><i class="fas fa-tools mr-2"></i> IDE: Xcode (Requiere macOS).</li>
                        <li><i class="fas fa-coins mr-2"></i> Mercado: Menor cuota, pero usuarios con mayor gasto en apps.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">2. La Revolución Multiplataforma</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                Como ingenieros, buscamos eficiencia. ¿Por qué escribir dos veces el mismo sistema? Así nacen los frameworks multiplataforma que permiten usar <strong>un solo código para ambas tiendas (App Store y Play Store)</strong>.
            </p>
            
            <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-xl mb-8">
                <h4 class="font-bold text-indigo-900 mb-2">Requisito Crítico: Dominar React</h4>
                <p class="text-sm text-indigo-800">
                    Para entrar a <strong>React Native</strong>, primero debemos ser maestros en <strong>React JS</strong>. La lógica de componentes, estados (State) y efectos (Hooks) que aprendimos para la web es el 90% de lo que usaremos en el móvil.
                </p>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">3. Ranking de Tecnologías Móviles 2026</h3>
            <div class="overflow-x-auto bg-white rounded-2xl shadow-lg border border-slate-200">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-[#003366] text-white uppercase text-xs tracking-widest">
                            <th class="p-4 font-black">Framework</th>
                            <th class="p-4 font-black">Creador</th>
                            <th class="p-4 font-black">Lenguaje</th>
                            <th class="p-4 font-black">Ventaja de Ingeniería</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm">
                        <tr class="border-b border-slate-100 hover:bg-indigo-50 transition-colors">
                            <td class="p-4 font-bold text-[#003366]"><i class="fab fa-react text-cyan-500 mr-2"></i> React Native</td>
                            <td class="p-4">Meta (Facebook)</td>
                            <td class="p-4">JavaScript / TS</td>
                            <td class="p-4">Usa componentes nativos reales. Ideal para equipos Web.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-indigo-50 transition-colors">
                            <td class="p-4 font-bold text-[#003366]"><i class="fas fa-feather-alt text-blue-400 mr-2"></i> Flutter</td>
                            <td class="p-4">Google</td>
                            <td class="p-4">Dart</td>
                            <td class="p-4">Rendimiento casi nativo. Control total de cada píxel.</td>
                        </tr>
                        <tr class="border-b border-slate-100 hover:bg-indigo-50 transition-colors">
                            <td class="p-4 font-bold text-[#003366]"><i class="fas fa-layer-group text-blue-600 mr-2"></i> MAUI / Xamarin</td>
                            <td class="p-4">Microsoft</td>
                            <td class="p-4">C#</td>
                            <td class="p-4">Perfecto para empresas integradas al ecosistema .NET.</td>
                        </tr>
                        <tr class="hover:bg-indigo-50 transition-colors">
                            <td class="p-4 font-bold text-[#003366]"><i class="fas fa-mobile text-slate-400 mr-2"></i> PWA</td>
                            <td class="p-4">Estándar Web</td>
                            <td class="p-4">HTML/CSS/JS</td>
                            <td class="p-4">Webs que "parecen" apps. Sin pasar por las tiendas.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section class="mt-20">
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-6">4. Breve Historia: El fin de PhoneGap</h3>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
                En los inicios (2011), existía <strong>PhoneGap/Cordova</strong>. Intentaban meter una página web dentro de una "cáscara" móvil. El resultado: Apps lentas y que se sentían "falsas". 
            </p>
            <div class="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-xl">
                <p class="text-sm text-rose-800 italic">
                    "React Native cambió las reglas en 2015 al proponer: 'Escribe en JS, pero genera componentes reales de Android/iOS'. Ya no es una web disfrazada, es software nativo controlado por JavaScript."
                </p>
            </div>
        </section>

        <section class="mt-20 mb-10 bg-gradient-to-br from-indigo-900 to-indigo-700 p-8 md:p-12 rounded-[2rem] shadow-2xl text-white relative overflow-hidden">
            <i class="fas fa-rocket absolute -right-10 -bottom-10 text-white/5 text-[20rem] transform -rotate-12"></i>
            <div class="relative z-10">
                <h3 class="text-3xl font-black uppercase text-indigo-300 mb-6">Hacia el Proyecto Formativo</h3>
                <p class="text-lg text-indigo-100 leading-relaxed mb-8">
                    En esta asignatura, nos enfocaremos en <strong>React Native + Expo</strong>. ¿Por qué? Porque como expertos en Laravel y Web, es el camino más rápido para desplegar soluciones empresariales en Santa Cruz.
                </p>
                <div class="space-y-4 font-mono text-sm">
                    <div class="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20">
                        <span class="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                        <p>Aprenderemos la sintaxis de <strong>React Hooks</strong>.</p>
                    </div>
                    <div class="flex items-center gap-4 bg-white/10 p-4 rounded-xl border border-white/20">
                        <span class="bg-indigo-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                        <p>Desplegaremos una App usando <strong>Expo Go</strong> en sus celulares reales.</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>

`;



