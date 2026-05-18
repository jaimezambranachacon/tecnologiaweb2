// content/texto_base_u05.js
// UNIDAD 05: ESTILOS Y MAQUETACIÓN NATIVA (CSS-IN-JS)

const pag_texto_base_u05 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800">
    
    <header class="mb-20">
        <span class="text-rose-500 font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-paint-brush text-lg"></i> TEXTO BASE / UNIDAD 05
        </span>
        <h1 class="text-5xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            DISEÑO Y ESTILOS:<br>
            <span class="text-rose-500">CSS EN NATIVE</span>
        </h1>
        <div class="h-2 w-24 bg-rose-500 mt-8"></div>
    </header>

    <div class="max-w-5xl space-y-24">

        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">1. StyleSheet: El CSS de JavaScript</h3>
                <span class="bg-rose-600 text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Core Styling</span>
            </div>

            <p class="text-lg text-slate-600 mb-8 font-light italic leading-relaxed">
                En React Native no existen los archivos <code>.css</code>. Utilizamos una abstracción llamada <strong>StyleSheet</strong>. Los estilos se escriben como objetos de JavaScript, lo que permite una integración directa con la lógica del componente.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div class="p-8 bg-slate-50 rounded-3xl border-l-8 border-rose-500 shadow-sm">
                    <h4 class="font-black text-rose-900 uppercase text-xs mb-4 tracking-widest">Sintaxis CamelCase</h4>
                    <p class="text-[11px] text-slate-500 leading-relaxed">
                        A diferencia de la web donde usamos <code>background-color</code>, en Native usamos <strong>camelCase</strong>: <code>backgroundColor</code>. Además, los valores que no son números deben ir entre comillas.
                    </p>
                </div>
                <div class="p-8 bg-slate-50 rounded-3xl border-l-8 border-[#003366] shadow-sm">
                    <h4 class="font-black text-[#003366] uppercase text-xs mb-4 tracking-widest">Unidades de Medida</h4>
                    <p class="text-[11px] text-slate-500 leading-relaxed">
                        En móviles no usamos <code>px</code>, <code>em</code> o <code>rem</code>. Usamos <strong>puntos lógicos</strong> (dp/sp), que son independientes de la densidad de píxeles de la pantalla, asegurando que el diseño se vea igual en un iPhone o un Android.
                    </p>
                </div>
            </div>

            <div class="bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-700">
                <div class="bg-slate-800 px-6 py-3 text-[10px] font-black text-slate-400 border-b border-slate-700 flex justify-between items-center uppercase tracking-widest">
                    <span>Estructura de un StyleSheet</span>
                    <i class="fas fa-code text-rose-400"></i>
                </div>
                <pre class="p-8 text-sm font-mono text-blue-300 overflow-x-auto">
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#003366', // Azul UPDS
    padding: 20,
  },
  textoPrincipal: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});</pre>
            </div>
        </section>

        <section>
            <div class="flex items-center justify-between mb-8 border-b-2 border-slate-100 pb-4">
                <h3 class="text-3xl font-black text-[#003366] uppercase tracking-tighter">2. Flexbox en Móviles</h3>
                <span class="bg-[#003366] text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Layout Engine</span>
            </div>

            <p class="text-lg text-slate-600 mb-8 font-light italic leading-relaxed">
                React Native utiliza <strong>Flexbox</strong> para posicionar elementos. Es la herramienta más potente para crear interfaces responsivas en miles de modelos de celulares distintos.
            </p>

            <div class="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100 mb-10">
                <h4 class="text-indigo-800 font-black text-xs uppercase mb-4 tracking-widest italic text-center">Diferencias de Ingeniería</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
                    <div class="flex gap-4">
                        <span class="text-2xl">↔️</span>
                        <p class="text-slate-600"><strong>flexDirection:</strong> Por defecto en la web es <code>row</code>, pero en React Native es <strong>column</strong> (porque los celulares son verticales).</p>
                    </div>
                    <div class="flex gap-4">
                        <span class="text-2xl">📏</span>
                        <p class="text-slate-600"><strong>flex: 1:</strong> Indica que el componente debe ocupar todo el espacio disponible de su padre.</p>
                    </div>
                </div>
            </div>

            

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-6 bg-slate-50 rounded-2xl border-l-4 border-rose-500 shadow-sm">
                    <h4 class="font-bold text-rose-800 text-sm mb-2 uppercase italic">JustifyContent</h4>
                    <p class="text-xs text-slate-600">Alinea los hijos a lo largo del <strong>eje principal</strong> (por defecto, verticalmente).</p>
                </div>
                <div class="p-6 bg-slate-50 rounded-2xl border-l-4 border-[#003366] shadow-sm">
                    <h4 class="font-bold text-[#003366] text-sm mb-2 uppercase italic">AlignItems</h4>
                    <p class="text-xs text-slate-600">Alinea los hijos a lo largo del <strong>eje secundario</strong> (por defecto, horizontalmente).</p>
                </div>
            </div>
        </section>

    </div>
</div>
`;