// content/texto_base_u04.js
// UNIDAD 04: DESARROLLO MÓVIL MULTIPLATAFORMA CON REACT NATIVE

const pag_texto_base_u04 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-indigo-500 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-mobile-alt text-lg"></i> TEXTO BASE / UNIDAD 04
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            REACT NATIVE:<br>
            <span class="text-indigo-500">MÓVILES NATIVOS</span>
        </h1>
        <div class="h-2 w-24 bg-indigo-500 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-24">

        <section>
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase">1. Filosofía y Funcionamiento</h3>
                <span class="bg-indigo-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Core Mobile</span>
            </div>

            <p class="text-lg text-slate-600 mb-8 font-light italic leading-relaxed">
                React Native no es una "Web View". A diferencia de herramientas como Ionic, React Native traduce tu código JavaScript en componentes reales de <strong>Android (Java/Kotlin)</strong> e <strong>iOS (Objective-C/Swift)</strong>.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="p-8 bg-slate-50 rounded-3xl border-l-8 border-indigo-500 shadow-sm">
                    <h4 class="font-black text-indigo-900 uppercase text-xs mb-4 tracking-widest">Learn Once, Write Anywhere</h4>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Utilizamos la misma lógica de la Unidad 03 (Hooks, Props, State) pero el resultado final son elementos de la interfaz original del teléfono. Esto garantiza una velocidad y respuesta fluida.
                    </p>
                </div>
                <div class="p-8 bg-slate-50 rounded-3xl border-l-8 border-cyan-500 shadow-sm">
                    <h4 class="font-black text-cyan-900 uppercase text-xs mb-4 tracking-widest">El Puente (The Bridge)</h4>
                    <p class="text-xs text-slate-500 leading-relaxed">
                        Existe un puente que comunica el hilo de ejecución de JavaScript con los módulos nativos del sistema operativo, permitiendo acceso a la cámara, GPS y almacenamiento.
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-8">2. Herramientas del Ingeniero</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-lg">
                    <i class="fab fa-node-js text-4xl text-green-600 mb-4"></i>
                    <h5 class="font-bold text-sm mb-2">Node.js</h5>
                    <p class="text-[10px] text-slate-500 uppercase tracking-widest">Motor de ejecución</p>
                </div>
                <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-lg">
                    <i class="fas fa-rocket text-4xl text-orange-500 mb-4"></i>
                    <h5 class="font-bold text-sm mb-2">Expo Go</h5>
                    <p class="text-[10px] text-slate-500 uppercase tracking-widest">Prueba en vivo (S23)</p>
                </div>
                <div class="p-6 bg-white border border-slate-100 rounded-3xl shadow-lg">
                    <i class="fas fa-terminal text-4xl text-slate-800 mb-4"></i>
                    <h5 class="font-bold text-sm mb-2">Watchman</h5>
                    <p class="text-[10px] text-slate-500 uppercase tracking-widest">Seguimiento de archivos</p>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-8">3. Hola Mundo: Primer Despegue</h3>
            
            <div class="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden mb-8 border border-slate-700">
                <div class="bg-slate-800 px-6 py-3 text-[10px] font-black text-slate-400 border-b border-slate-700 flex justify-between items-center uppercase tracking-widest">
                    <span>App.js - Estructura Nativa</span>
                    <i class="fas fa-mobile-alt text-indigo-400"></i>
                </div>
                <pre class="p-8 text-sm font-mono text-blue-300 overflow-x-auto">
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.titulo}&gt;¡Hola Mundo UPDS!&lt;/Text&gt;
      &lt;Text style={styles.sub}&gt;Sincronía Aérea Mobile&lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003366',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  sub: {
    color: '#00d4ff',
    marginTop: 10,
    fontSize: 16,
  }
});</pre>
            </div>

            <div class="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100">
                <h4 class="text-indigo-800 font-black text-xs uppercase mb-4 tracking-widest text-center">Diferencias Críticas Web vs Mobile</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm">
                    <div>
                        <strong class="text-indigo-900 block mb-2 font-black italic">Sin Etiquetas HTML:</strong>
                        <p class="text-slate-600 leading-relaxed italic">No usamos &lt;div&gt;, usamos <strong>&lt;View&gt;</strong>. No usamos &lt;h1&gt; o &lt;p&gt;, usamos <strong>&lt;Text&gt;</strong>. Cada componente debe importarse desde 'react-native'.</p>
                    </div>
                    <div>
                        <strong class="text-indigo-900 block mb-2 font-black italic">Flexbox por Defecto:</strong>
                        <p class="text-slate-600 leading-relaxed italic">En móviles, todos los contenedores son <code>display: flex</code> con <code>flexDirection: column</code> por defecto. El diseño es 100% responsivo para pantallas pequeñas.</p>
                    </div>
                </div>
            </div>
        </section>








        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">4. Estructura y Guía Oficial</h3>
                <a href="https://reactnative.dev/docs/getting-started" target="_blank" class="bg-indigo-600 text-white px-4 py-2 rounded-xl text-[10px] font-bold shadow-lg hover:bg-indigo-700 transition-all">
                    <i class="fas fa-external-link-alt"></i> MANUAL OFICIAL
                </a>
            </div>

            <p class="text-lg text-slate-600 mb-10 font-light italic leading-relaxed">
                Para dominar React Native, debemos comprender los pilares que propone su documentación oficial. Analizaremos cómo se organiza una aplicación y cómo interactúan sus componentes fundamentales.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div class="p-8 bg-slate-50 rounded-3xl border-t-8 border-indigo-500 shadow-sm">
                    <h4 class="font-black text-indigo-900 uppercase text-xs mb-4 tracking-widest">Componentes Core</h4>
                    <p class="text-[11px] text-slate-500 leading-relaxed">
                        El manual especifica que React Native proporciona <strong>"Core Components"</strong> que son la base de todo. A diferencia de la web, aquí no usamos semántica HTML, sino objetos de interfaz nativa ya mapeados para Android e iOS.
                    </p>
                </div>
                <div class="p-8 bg-slate-50 rounded-3xl border-t-8 border-cyan-500 shadow-sm">
                    <h4 class="font-black text-cyan-900 uppercase text-xs mb-4 tracking-widest">React vs Native</h4>
                    <p class="text-[11px] text-slate-500 leading-relaxed">
                        Es crucial entender el <strong>"Native Side"</strong> y el <strong>"JavaScript Side"</strong>. Según el manual, tu lógica vive en JS, pero la representación visual (UI) vive en el motor nativo del dispositivo móvil.
                    </p>
                </div>
            </div>

            

            <div class="bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-700">
                <div class="bg-slate-800 px-6 py-3 text-[10px] font-black text-slate-400 border-b border-slate-700 flex justify-between items-center uppercase tracking-widest">
                    <span>Equivalencias: Web vs. Native</span>
                    <i class="fas fa-exchange-alt text-indigo-400"></i>
                </div>
                <div class="p-8 overflow-x-auto">
                    <table class="w-full text-left text-xs text-blue-100">
                        <thead>
                            <tr class="border-b border-slate-700">
                                <th class="pb-4 font-black uppercase text-cyan-400">Elemento Web</th>
                                <th class="pb-4 font-black uppercase text-indigo-400">Componente Native</th>
                                <th class="pb-4 font-black uppercase text-slate-400">Uso Principal</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-800">
                            <tr>
                                <td class="py-4 font-mono">&lt;div&gt;</td>
                                <td class="py-4 font-mono font-bold">&lt;View&gt;</td>
                                <td class="py-4 opacity-70 italic">Contenedor base y Flexbox</td>
                            </tr>
                            <tr>
                                <td class="py-4 font-mono">&lt;p&gt; / &lt;span&gt;</td>
                                <td class="py-4 font-mono font-bold">&lt;Text&gt;</td>
                                <td class="py-4 opacity-70 italic">Todo el texto debe ir aquí</td>
                            </tr>
                            <tr>
                                <td class="py-4 font-mono">&lt;img&gt;</td>
                                <td class="py-4 font-mono font-bold">&lt;Image&gt;</td>
                                <td class="py-4 opacity-70 italic">Recursos locales o remotos (URI)</td>
                            </tr>
                            <tr>
                                <td class="py-4 font-mono">&lt;ul&gt; / &lt;li&gt;</td>
                                <td class="py-4 font-mono font-bold">&lt;FlatList&gt;</td>
                                <td class="py-4 opacity-70 italic">Listas largas con scroll eficiente</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="mt-12 bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100">
                <h4 class="text-indigo-800 font-black text-xs uppercase mb-4 tracking-widest text-center">Enfoque de Ingeniería</h4>
                <p class="text-sm text-slate-600 leading-relaxed italic text-center">
                    "Al seguir el manual oficial, entenderemos que el rendimiento de React Native se debe a que no intenta emular una web; simplemente le da órdenes al sistema operativo usando JavaScript como lenguaje de control."
                </p>
            </div>
        </section>






        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">5. Preparación del Laboratorio</h3>
                <span class="bg-emerald-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Setup & Versions</span>
            </div>

            <p class="text-lg text-slate-600 mb-10 font-light italic leading-relaxed">
                Antes de programar, debemos asegurar que nuestra estación de trabajo cumpla con los estándares de ingeniería. Una versión incorrecta puede causar errores críticos en la compilación nativa.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div class="p-8 bg-slate-50 rounded-3xl border-l-8 border-emerald-500 shadow-sm">
                    <h4 class="font-black text-emerald-900 uppercase text-xs mb-4 tracking-widest italic">Versión de React</h4>
                    <p class="text-sm text-slate-600 leading-relaxed mb-4">
                        React Native se basa actualmente en <strong>React 18.x</strong>. Es fundamental no intentar forzar versiones experimentales, ya que el framework móvil requiere una sincronía exacta con los hooks de React.
                    </p>
                    <div class="bg-white p-3 rounded-xl border border-slate-200 font-mono text-[10px] text-emerald-600">
                        "dependencies": { "react": "18.2.0", "react-native": "0.7x" }
                    </div>
                </div>
                <div class="p-8 bg-slate-50 rounded-3xl border-l-8 border-[#003366] shadow-sm">
                    <h4 class="font-black text-[#003366] uppercase text-xs mb-4 tracking-widest italic">Visual Studio Code</h4>
                    <p class="text-sm text-slate-600 leading-relaxed">
                        Usaremos <strong>VS Code</strong> como IDE principal. Para potenciar el desarrollo móvil, se recomienda instalar las extensiones:
                    </p>
                    <ul class="mt-2 space-y-1 text-[11px] font-bold text-slate-500 uppercase">
                        <li>• ES7+ React/Redux/React-Native snippets</li>
                        <li>• Prettier - Code formatter</li>
                        <li>• Error Lens</li>
                    </ul>
                </div>
            </div>

            <div class="bg-slate-900 rounded-3xl shadow-xl overflow-hidden mb-12 border border-slate-700">
                <div class="bg-slate-800 px-6 py-4 border-b border-slate-700 flex justify-between items-center">
                    <h4 class="text-white font-black text-xs uppercase tracking-[0.2em]">Secuencia de Instalación en Consola</h4>
                    <i class="fas fa-terminal text-emerald-400"></i>
                </div>
                <div class="p-8 space-y-6">
                    <div class="flex gap-4">
                        <span class="bg-emerald-500/20 text-emerald-400 w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0">1</span>
                        <div>
                            <p class="text-blue-100 font-bold text-sm">Instalar Node.js (LTS)</p>
                            <p class="text-slate-400 text-xs mt-1 italic">Descargar la versión Long Term Support desde nodejs.org. Esto incluye NPM.</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <span class="bg-emerald-500/20 text-emerald-400 w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0">2</span>
                        <div>
                            <p class="text-blue-100 font-bold text-sm">Instalar Expo CLI globalmente</p>
                            <code class="block bg-black/30 p-2 mt-2 rounded text-emerald-300 text-xs">npm install -g expo-cli</code>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <span class="bg-emerald-500/20 text-emerald-400 w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0">3</span>
                        <div>
                            <p class="text-blue-100 font-bold text-sm">Crear el primer proyecto</p>
                            <code class="block bg-black/30 p-2 mt-2 rounded text-emerald-300 text-xs">npx create-expo-app MiPrimeraApp</code>
                        </div>
                    </div>
                </div>
            </div>

            <div class="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex items-start gap-6">
                <i class="fas fa-info-circle text-3xl text-emerald-400"></i>
                <div>
                    <h5 class="text-emerald-900 font-black text-xs uppercase mb-2 tracking-widest">Nota Técnica para la Clase</h5>
                    <p class="text-sm text-slate-600 leading-relaxed italic">
                        "Jimmy, es vital recalcar que para probar la App en sus dispositivos físicos (como tu Galaxy S23), tanto la computadora como el celular deben estar conectados a la <strong>misma red Wi-Fi</strong>. Esto permite que el túnel de Expo transfiera el bundle de JavaScript correctamente."
                    </p>
                </div>
            </div>
        </section>






        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">6. Preparación del Entorno</h3>
                <span class="bg-emerald-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Setup Local</span>
            </div>

            <p class="text-lg text-slate-600 mb-10 font-light italic leading-relaxed">
                Utilizaremos la terminal de <strong>Laragon</strong> para gestionar nuestro entorno. El primer paso es validar que Node.js esté correctamente vinculado al PATH de nuestro sistema operativo.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div class="p-8 bg-slate-50 rounded-3xl border-l-8 border-emerald-500 shadow-sm">
                    <h4 class="font-black text-emerald-900 uppercase text-xs mb-4 tracking-widest italic">Verificación de Comandos</h4>
                    <p class="text-xs text-slate-500 mb-4">Abre tu terminal de Laragon y ejecuta:</p>
                    <code class="block bg-slate-900 text-emerald-400 p-4 rounded-xl text-xs font-mono">
                        node -v <br>
                        npm -v
                    </code>
                </div>
                <div class="p-8 bg-slate-50 rounded-3xl border-l-8 border-[#003366] shadow-sm italic">
                    <h4 class="font-black text-[#003366] uppercase text-xs mb-4 tracking-widest">¿Por qué Node.js?</h4>
                    <p class="text-[11px] text-slate-500 leading-relaxed">
                        Es el motor que permite compilar nuestro código JavaScript y enviarlo al dispositivo móvil. Sin Node, el ecosistema de React Native no puede empaquetar los assets de la App.
                    </p>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-8">7. Despliegue del Proyecto Base</h3>
            
            <div class="bg-slate-900 rounded-3xl shadow-xl overflow-hidden mb-8 border border-slate-700">
                <div class="bg-slate-800 px-6 py-3 text-[10px] font-black text-slate-400 border-b border-slate-700 flex justify-between items-center uppercase tracking-widest">
                    <span>Terminal Laragon / WWW</span>
                    <i class="fas fa-terminal text-blue-400"></i>
                </div>
                <div class="p-8">
                    <p class="text-blue-100 text-sm mb-4">Ejecuta el siguiente comando para inicializar la estructura:</p>
                    <code class="block bg-black/40 p-5 rounded-xl text-blue-300 text-sm font-mono border border-blue-900/50">
                        npx create-expo-app@latest MiAppNative
                    </code>
                    <p class="text-slate-500 text-[10px] mt-4 italic uppercase tracking-widest">
                        * Esto configurará automáticamente React 18 y las dependencias nativas necesarias.
                    </p>
                </div>
            </div>
                    </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-8">8. Sincronización con Dispositivos</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div class="space-y-6">
                    <p class="text-sm text-slate-600 leading-relaxed">
                        Una vez creado el proyecto, entramos a la carpeta y levantamos el servidor de desarrollo. Expo generará un <strong>Código QR</strong> que servirá de puente con tu dispositivo físico.
                    </p>
                    <code class="block bg-slate-100 p-4 rounded-xl text-[#003366] font-mono text-xs">
                        cd MiAppNative <br>
                        npx expo start
                    </code>
                </div>
                <div class="bg-indigo-50 p-6 rounded-[2rem] border border-indigo-100">
                    <h5 class="text-indigo-900 font-black text-[10px] uppercase mb-3 tracking-widest">El Proceso de Prueba:</h5>
                    <ul class="text-[11px] space-y-2 text-slate-600">
                        <li class="flex items-center gap-2"><i class="fas fa-check-circle text-indigo-500"></i> Instalar <strong>Expo Go</strong> en Android/iOS.</li>
                        <li class="flex items-center gap-2"><i class="fas fa-check-circle text-indigo-500"></i> Escanear el código QR de la terminal.</li>
                        <li class="flex items-center gap-2"><i class="fas fa-check-circle text-indigo-500"></i> Ver cambios instantáneos al guardar en VS Code.</li>
                    </ul>
                </div>
            </div>
        </section>

        <section>
            <h3 class="text-3xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-8">9. El Primer Componente Nativo</h3>
            
            <div class="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden mb-8">
                <div class="bg-slate-800 px-6 py-3 text-[10px] font-black text-slate-400 border-b border-slate-700 flex justify-between items-center uppercase tracking-widest">
                    <span>App.js - Lógica de Visual Studio Code</span>
                    <i class="fas fa-code text-blue-400"></i>
                </div>
                <pre class="p-8 text-sm font-mono text-blue-300 overflow-x-auto">
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    &lt;View style={styles.container}&gt;
      &lt;Text style={styles.txt}&gt;¡Unidad 4: Instalación Exitosa!&lt;/Text&gt;
    &lt;/View&gt;
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  txt: { fontSize: 20, fontWeight: 'bold' }
});</pre>
            </div>

            <div class="p-6 bg-slate-50 rounded-2xl border-l-4 border-[#003366] italic shadow-sm">
                <p class="text-xs text-slate-500 leading-relaxed">
                    <strong>Nota para el Laboratorio:</strong> En React Native no existe el concepto de "página". Todo el contenido visual debe estar envuelto en un componente <code>&lt;Text&gt;</code>, de lo contrario, el motor nativo lanzará un error de renderizado.
                </p>
            </div>
        </section>





        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">10. Guías en Video: Configuración Paso a Paso</h3>
                <span class="bg-red-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Multimedia Resources</span>
            </div>

            <p class="text-lg text-slate-600 mb-10 font-light italic leading-relaxed">
                Para complementar la teoría, dispones de esta serie de tutoriales que detallan el proceso de preparación del entorno de desarrollo y el despliegue de tu primera aplicación.
            </p>

            <div class="mt-12 p-6 bg-slate-900 rounded-3xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 bg-indigo-500 rounded-xl flex items-center justify-center text-white">
                        <i class="fas fa-list-ol"></i>
                    </div>
                    <p class="text-xs text-slate-400 font-medium">
                        Se recomienda seguir el orden correlativo para asegurar una configuración exitosa del laboratorio.
                    </p>
                </div>
                <a href="https://www.youtube.com/playlist?list=PLwjlDP2JJquEitkHJ1QukXGV6Q9R5vhmU" target="_blank" class="text-[10px] font-black text-indigo-400 uppercase tracking-widest hover:text-white transition-colors">
                    Ver Playlist Completa <i class="fas fa-arrow-right ml-2"></i>
                </a>
            </div>
        </section>



        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">11. Laboratorios Inicial en React Native</h3>
                <span class="bg-indigo-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Interactive Code</span>
            </div>

            <p class="text-lg text-slate-600 mb-10 font-light italic leading-relaxed">
                Utiliza estos fragmentos de código para experimentar en el panel interactivo de la <a href="https://reactnative.dev/docs/getting-started" target="_blank" class="text-indigo-600 font-bold underline">Documentación Oficial</a>. Copia, pega y observa los resultados instantáneamente.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                
                <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 bg-[#003366] rounded-2xl flex items-center justify-center text-white shadow-lg">
                            <i class="fas fa-file-signature"></i>
                        </div>
                        <h4 class="font-black text-[#003366] uppercase text-xs tracking-widest">A. Gestión de Formulario</h4>
                    </div>
                    <p class="text-[11px] text-slate-500 mb-6 leading-relaxed">
                        Control de entradas con <code>TextInput</code> y <code>Switch</code>. Aprende a capturar datos de técnicos y hangares en un solo objeto de estado.
                    </p>
                    <a href="https://gist.github.com/jaimezambranachacon/a1445fb29910ebf8d0b5db683a683c12" target="_blank" class="text-[10px] font-black text-indigo-500 uppercase tracking-widest flex items-center gap-2">
                        <i class="fab fa-github-alt"></i> Ver Gist de Ingeniería <i class="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 bg-cyan-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                            <i class="fas fa-calculator"></i>
                        </div>
                        <h4 class="font-black text-cyan-900 uppercase text-xs tracking-widest">B. Lógica de Contador</h4>
                    </div>
                    <p class="text-[11px] text-slate-500 mb-6 leading-relaxed">
                        Implementación de <code>useState</code> para disparar eventos táctiles. Ideal para entender la reactividad nativa y el renderizado condicional.
                    </p>
                    <a href="https://gist.github.com/jaimezambranachacon/0fac7cb6cf1312849f163aae20775275" target="_blank" class="text-[10px] font-black text-indigo-500 uppercase tracking-widest flex items-center gap-2">
                        <i class="fab fa-github-alt"></i> Ver Gist de Lógica <i class="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                            <i class="fas fa-paint-brush"></i>
                        </div>
                        <h4 class="font-black text-indigo-900 uppercase text-xs tracking-widest">C. Layout y Flexbox</h4>
                    </div>
                    <p class="text-[11px] text-slate-500 mb-6 leading-relaxed">
                        Domina el posicionamiento en móviles. Uso de <code>StyleSheet</code> para crear interfaces responsivas mediante el motor Flexbox nativo.
                    </p>
                    <a href="https://gist.github.com/jaimezambranachacon/7b53533e796f525da97c8d4db4cb0bd5" target="_blank" class="text-[10px] font-black text-indigo-500 uppercase tracking-widest flex items-center gap-2">
                        <i class="fab fa-github-alt"></i> Ver Gist de Estilos <i class="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:shadow-xl transition-all group">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
                            <i class="fas fa-cat"></i>
                        </div>
                        <h4 class="font-black text-emerald-900 uppercase text-xs tracking-widest">D. Consumo de API (Gatos)</h4>
                    </div>
                    <p class="text-[11px] text-slate-500 mb-6 leading-relaxed">
                        Consumo de datos asíncronos mediante <code>fetch</code> y visualización en <code>FlatList</code>. Preparación para conectar con tu backend de Laravel.
                    </p>
                    <a href="https://gist.github.com/jaimezambranachacon/7f45fa39fbe8112e58c38ff5a119f95f" target="_blank" class="text-[10px] font-black text-indigo-500 uppercase tracking-widest flex items-center gap-2">
                        <i class="fab fa-github-alt"></i> Ver Gist de Red <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>

           
        </section>

        

    </div>
</div>
`;