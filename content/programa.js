const pag_programa = 
`
        <div class="space-y-12">
            <div class="bg-[#f0f7ff] p-6 rounded-2xl border-l-4 border-[#003366]">
                <h4 class="text-[#003366] font-bold text-xs uppercase tracking-widest mb-2">Micro Competencia Específica</h4>
                <p class="text-gray-700 italic text-sm">
                    "Escribe programas de aplicaciones web con acceso a bases de datos para plantear soluciones a problemas del contexto, considerando técnicas de optimización y paradigmas de programación del lado del servidor."
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div class="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 bg-[#003366] text-[#00aaff] rounded-lg flex items-center justify-center mr-3 font-black">01</div>
                        <h5 class="font-bold text-[#003366] uppercase text-sm">Entorno y Sintaxis</h5>
                    </div>
                    <ul class="text-xs space-y-2 text-gray-500">
                        <li><i class="fas fa-server mr-2 text-[#00aaff]"></i> Arquitectura Cliente/Servidor</li>
                        <li><i class="fas fa-terminal mr-2 text-[#00aaff]"></i> Instalación de servidores locales</li>
                        <li><i class="fas fa-code mr-2 text-[#00aaff]"></i> Sintaxis, variables y operadores PHP</li>
                        <li><i class="fas fa-random mr-2 text-[#00aaff]"></i> Estructuras de control de flujo</li>
                    </ul>
                </div>

                <div class="p-6 border border-gray-100 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 bg-[#003366] text-[#00aaff] rounded-lg flex items-center justify-center mr-3 font-black">02</div>
                        <h5 class="font-bold text-[#003366] uppercase text-sm">Lógica y Objetos</h5>
                    </div>
                    <ul class="text-xs space-y-2 text-gray-500">
                        <li><i class="fas fa-envelope mr-2 text-[#00aaff]"></i> Gestión de formularios (GET/POST)</li>
                        <li><i class="fas fa-box-open mr-2 text-[#00aaff]"></i> Inclusión de archivos y modularización</li>
                        <li><i class="fas fa-cube mr-2 text-[#00aaff]"></i> Programación Orientada a Objetos</li>
                        <li><i class="fas fa-exclamation-triangle mr-2 text-[#00aaff]"></i> Manejo de Excepciones</li>
                    </ul>
                </div>

                <div class="p-6 border border-gray-100 rounded-2xl bg-blue-50/50 shadow-sm border-t-4 border-t-[#00aaff]">
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 bg-[#003366] text-[#00aaff] rounded-lg flex items-center justify-center mr-3 font-black text-xs">DB</div>
                        <h5 class="font-bold text-[#003366] uppercase text-sm">Persistencia MySQL</h5>
                    </div>
                    <ul class="text-xs space-y-2 text-gray-600 font-medium">
                        <li><i class="fas fa-database mr-2 text-[#003366]"></i> Conexión a bases de datos</li>
                        <li><i class="fas fa-shield-alt mr-2 text-[#003366]"></i> Seguridad y usuarios de BD</li>
                        <li><i class="fas fa-table mr-2 text-[#003366]"></i> Consultas y manejo de registros</li>
                    </ul>
                </div>

                <div class="p-6 border border-gray-100 rounded-2xl bg-blue-50/50 shadow-sm border-t-4 border-t-[#00aaff]">
                    <div class="flex items-center mb-4">
                        <div class="w-10 h-10 bg-[#003366] text-[#00aaff] rounded-lg flex items-center justify-center mr-3 font-black text-xs">ADV</div>
                        <h5 class="font-bold text-[#003366] uppercase text-sm">Servicios y AJAX</h5>
                    </div>
                    <ul class="text-xs space-y-2 text-gray-600 font-medium">
                        <li><i class="fas fa-file-code mr-2 text-[#003366]"></i> Web Services (JSON / XML)</li>
                        <li><i class="fas fa-bolt mr-2 text-[#003366]"></i> Comunicación con AJAX</li>
                        <li><i class="fas fa-rss mr-2 text-[#003366]"></i> Implementación de lectores RSS</li>
                    </ul>
                </div>
            </div>

            <div class="mt-8">
                <h5 class="text-[#003366] font-black text-xs uppercase tracking-widest mb-4 flex items-center">
                    <i class="fas fa-bookmark mr-2 text-[#00aaff]"></i> Bibliografía Base
                </h5>
                <div class="grid grid-cols-1 gap-3">
                    <div class="flex items-center p-3 bg-gray-50 rounded-lg text-xs text-gray-600">
                        <i class="fas fa-book mr-3 opacity-40"></i>
                        <span><strong>Beati, Hernán (2016).</strong> PHP: Creación de páginas Web dinámicas.</span>
                    </div>
                    <div class="flex items-center p-3 bg-gray-50 rounded-lg text-xs text-gray-600">
                        <i class="fas fa-book mr-3 opacity-40"></i>
                        <span><strong>Rodriguez de la Fuente (2009).</strong> Programación de Aplicaciones Web.</span>
                    </div>
                    <div class="flex items-center p-3 bg-gray-50 rounded-lg text-xs text-gray-600">
                        <i class="fas fa-book mr-3 opacity-40"></i>
                        <span><strong>Patel, S.K. (2014).</strong> Developing Responsive Web Apps with AJAX and jQuery.</span>
                    </div>
                </div>
            </div>
        </div>

        `;