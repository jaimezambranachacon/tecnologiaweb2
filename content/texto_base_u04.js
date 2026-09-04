// content/texto_base_u04.js

const pag_texto_base_u04 = `
<div class="bg-white min-h-screen p-8 md:p-16 text-slate-800 animate-in fade-in duration-700">
    
    <!-- HEADER PRINCIPAL -->
    <header class="mb-20">
        <span class="text-[#00aaff] font-black uppercase text-xs tracking-[0.3em] flex items-center gap-2">
            <i class="fas fa-terminal text-lg"></i> TEXTO GUÍA BASE / UNIDAD 4
        </span>
        <h1 class="text-4xl md:text-6xl font-black text-[#003366] tracking-tighter uppercase leading-none mt-2">
            GESTIÓN DE BASES DE DATOS<br>
            <span class="text-[#00aaff]">& LENGUAJE SQL INTEGRAL</span>
        </h1>
        <p class="mt-6 text-xl text-slate-500 font-light max-w-3xl leading-relaxed">
            Inmersión intensiva en SQL estándar (DDL, DML, DCL, TCL). Manual exhaustivo de 30 secciones con scripts ejecutables para diseño de esquemas, consultas analíticas, combinaciones, agrupaciones, subconsultas complejas y administración del motor.
        </p>
        <div class="h-2 w-24 bg-[#00aaff] mt-8 rounded-full"></div>
    </header>

    <div class="max-w-5xl space-y-16">

        <!-- INTRODUCCIÓN AL TEMA -->
        <section class="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-8 border-[#003366] rounded-r-3xl shadow-sm">
            <h4 class="text-xs font-black uppercase tracking-widest text-[#003366] mb-2">Fundamentación Teórica y Práctica</h4>
            <p class="text-lg md:text-xl text-slate-800 leading-relaxed font-semibold italic mb-4">
                "El lenguaje SQL no es un simple conjunto de instrucciones de consulta: es el estándar declarativo universal para materializar, proteger, transformar y extraer valor de los datos almacenados en cualquier motor relacional de la industria."
            </p>
            <p class="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                Esta unidad constituye el núcleo técnico y operativo de la materia. A lo largo de 30 secciones temáticas prácticas y detalladas, analizaremos la sintaxis formal de SQL estándar aplicable de forma cruzada a PostgreSQL, MySQL, MariaDB y Microsoft SQL Server, utilizando como hilo conductor un sistema hospitalario y clínico persistente.
            </p>
        </section>

        <!-- SECCIÓN 1: CREACIÓN DE BASE DE DATOS Y ESQUEMAS -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                1. Creación de Bases de Datos y Espacios de Nombres (Esquemas)
            </h3>
            <p class="text-xs text-slate-600 mb-3">La instrucción <code>CREATE DATABASE</code> inicializa el contenedor físico, mientras que <code>CREATE SCHEMA</code> organiza los objetos en espacios de nombres lógicos para separar áreas organizacionales.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Crear la base de datos definiendo codificación universal UTF-8</span>
<span class="text-blue-400">CREATE DATABASE</span> hospital_universitario
    <span class="text-yellow-400">ENCODING</span> = <span class="text-emerald-400">'UTF8'</span>;

<span class="text-slate-500">-- Crear esquemas para separar el módulo clínico del administrativo</span>
<span class="text-blue-400">CREATE SCHEMA</span> clinica;
<span class="text-blue-400">CREATE SCHEMA</span> facturacion;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 2: DDL TABLAS BÁSICAS -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                2. Sentencia CREATE TABLE y Tipos de Datos Escalares
            </h3>
            <p class="text-xs text-slate-600 mb-3">Definición de tablas con tipado estricto: enteros (<code>INT</code>, <code>BIGINT</code>), cadenas (<code>VARCHAR</code>), fechas (<code>DATE</code>) y números de coma fija (<code>NUMERIC</code>/<code>DECIMAL</code>).</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-blue-400">CREATE TABLE</span> clinica.medico (
    id_medico <span class="text-blue-400">INT</span>,
    matricula <span class="text-blue-400">VARCHAR</span>(<span class="text-amber-400">20</span>),
    nombres <span class="text-blue-400">VARCHAR</span>(<span class="text-amber-400">60</span>),
    apellidos <span class="text-blue-400">VARCHAR</span>(<span class="text-amber-400">60</span>),
    honorario_base <span class="text-blue-400">NUMERIC</span>(<span class="text-amber-400">10</span>, <span class="text-amber-400">2</span>),
    activo <span class="text-blue-400">BOOLEAN</span>
);</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 3: PRIMARY KEY Y UNICIDAD -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                3. Restricciones PRIMARY KEY y UNIQUE
            </h3>
            <p class="text-xs text-slate-600 mb-3">La clave primaria impone unicidad y no nulidad automática. Las restricciones <code>UNIQUE</code> impiden registros repetidos en identificadores alternativos (como el DNI o la matrícula médica).</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-blue-400">CREATE TABLE</span> clinica.paciente (
    id_paciente <span class="text-blue-400">INT</span>,
    ci <span class="text-blue-400">VARCHAR</span>(<span class="text-amber-400">15</span>) <span class="text-yellow-400">NOT NULL</span>,
    nombre_completo <span class="text-blue-400">VARCHAR</span>(<span class="text-amber-400">120</span>) <span class="text-yellow-400">NOT NULL</span>,
    correo <span class="text-blue-400">VARCHAR</span>(<span class="text-amber-400">100</span>),
    <span class="text-blue-400">CONSTRAINT</span> pk_paciente <span class="text-yellow-400">PRIMARY KEY</span> (id_paciente),
    <span class="text-blue-400">CONSTRAINT</span> uq_paciente_ci <span class="text-yellow-400">UNIQUE</span> (ci),
    <span class="text-blue-400">CONSTRAINT</span> uq_paciente_correo <span class="text-yellow-400">UNIQUE</span> (correo)
);</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 4: FOREIGN KEY Y ACCIONES EN CASCADA -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                4. Integridad Referencial: Claves Foráneas (FOREIGN KEY) y Reglas de Borrado
            </h3>
            <p class="text-xs text-slate-600 mb-3">Enlace relacional entre tablas padre e hija mediante <code>FOREIGN KEY</code>, configurando políticas ante eliminación (<code>RESTRICT</code>, <code>CASCADE</code>, <code>SET NULL</code>).</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-blue-400">CREATE TABLE</span> clinica.historia_clinica (
    id_historia <span class="text-blue-400">INT</span> <span class="text-yellow-400">PRIMARY KEY</span>,
    id_paciente <span class="text-blue-400">INT</span> <span class="text-yellow-400">NOT NULL</span>,
    fecha_apertura <span class="text-blue-400">DATE</span> <span class="text-yellow-400">NOT NULL</span>,
    antecedentes <span class="text-blue-400">TEXT</span>,
    <span class="text-blue-400">CONSTRAINT</span> fk_historia_paciente 
        <span class="text-yellow-400">FOREIGN KEY</span> (id_paciente) 
        <span class="text-blue-400">REFERENCES</span> clinica.paciente(id_paciente)
        <span class="text-yellow-400">ON UPDATE CASCADE</span>
        <span class="text-yellow-400">ON DELETE RESTRICT</span>
);</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 5: RESTRICCIONES CHECK Y VALORES POR DEFECTO -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                5. Restricciones CHECK y Valores Predeterminados (DEFAULT)
            </h3>
            <p class="text-xs text-slate-600 mb-3">La cláusula <code>CHECK</code> define reglas de validación en el motor para asegurar rangos lógicos; <code>DEFAULT</code> automatiza valores al omitir columnas en una inserción.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-blue-400">CREATE TABLE</span> clinica.signos_vitales (
    id_medicion <span class="text-blue-400">INT</span> <span class="text-yellow-400">PRIMARY KEY</span>,
    id_paciente <span class="text-blue-400">INT</span> <span class="text-yellow-400">REFERENCES</span> clinica.paciente(id_paciente),
    temperatura_c <span class="text-blue-400">NUMERIC</span>(<span class="text-amber-400">4</span>, <span class="text-amber-400">2</span>) <span class="text-yellow-400">NOT NULL</span>,
    frecuencia_cardiaca <span class="text-blue-400">INT</span> <span class="text-yellow-400">NOT NULL</span>,
    fecha_registro <span class="text-blue-400">TIMESTAMP</span> <span class="text-yellow-400">DEFAULT</span> <span class="text-blue-400">CURRENT_TIMESTAMP</span>,
    <span class="text-blue-400">CONSTRAINT</span> chk_temperatura <span class="text-yellow-400">CHECK</span> (temperatura_c <span class="text-blue-400">BETWEEN</span> <span class="text-amber-400">34.00</span> <span class="text-blue-400">AND</span> <span class="text-amber-400">44.00</span>),
    <span class="text-blue-400">CONSTRAINT</span> chk_frecuencia <span class="text-yellow-400">CHECK</span> (frecuencia_cardiaca &gt; <span class="text-amber-400">0</span>)
);</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 6: MODIFICACIÓN ESTRUCTURAL CON ALTER TABLE -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                6. Modificación Estructural: Sentencia ALTER TABLE
            </h3>
            <p class="text-xs text-slate-600 mb-3">Permite alterar tablas ya creadas: agregar nuevas columnas, eliminar atributos en desuso o cambiar tipos de datos sin destruir los registros preexistentes.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Agregar columna de grupo sanguíneo</span>
<span class="text-blue-400">ALTER TABLE</span> clinica.paciente <span class="text-blue-400">ADD COLUMN</span> grupo_sanguineo <span class="text-blue-400">VARCHAR</span>(<span class="text-amber-400">5</span>);

<span class="text-slate-500">-- Modificar la longitud permitida del nombre</span>
<span class="text-blue-400">ALTER TABLE</span> clinica.paciente <span class="text-blue-400">ALTER COLUMN</span> nombre_completo <span class="text-blue-400">TYPE</span> <span class="text-blue-400">VARCHAR</span>(<span class="text-amber-400">150</span>);

<span class="text-slate-500">-- Eliminar una columna obsoleta</span>
<span class="text-blue-400">ALTER TABLE</span> clinica.paciente <span class="text-blue-400">DROP COLUMN</span> correo;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 7: DESTRUCCIÓN CON DROP Y TRUNCATE -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                7. Eliminación de Objetos y Datos: DROP vs. TRUNCATE TABLE
            </h3>
            <p class="text-xs text-slate-600 mb-3">Diferencias críticas: <code>DROP</code> suprime la definición completa del catálogo del sistema; <code>TRUNCATE</code> vacía los datos de forma rápida reiniciando punteros sin borrar la estructura.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Elimina todos los registros de una tabla de forma ultra rápida (libera espacio físico)</span>
<span class="text-blue-400">TRUNCATE TABLE</span> clinica.signos_vitales;

<span class="text-slate-500">-- Destruye por completo la tabla y su esquema físico del diccionario de datos</span>
<span class="text-blue-400">DROP TABLE IF EXISTS</span> clinica.signos_vitales <span class="text-yellow-400">CASCADE</span>;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 8: POBLADO DE DATOS (INSERT) -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                8. Manipulación de Datos: Inserción Simple y Masiva (INSERT INTO)
            </h3>
            <p class="text-xs text-slate-600 mb-3">La instrucción <code>INSERT INTO</code> persiste nuevas tuplas especificando las columnas destino o cargando bloques continuos de registros en un solo viaje de red.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Inserción explícita de un registro individual</span>
<span class="text-blue-400">INSERT INTO</span> clinica.paciente (id_paciente, ci, nombre_completo, grupo_sanguineo)
<span class="text-blue-400">VALUES</span> (<span class="text-amber-400">1</span>, <span class="text-emerald-400">'5489123'</span>, <span class="text-emerald-400">'Carlos Zambrana'</span>, <span class="text-emerald-400">'O+'</span>);

<span class="text-slate-500">-- Inserción masiva de múltiples tuplas en un solo comando</span>
<span class="text-blue-400">INSERT INTO</span> clinica.paciente (id_paciente, ci, nombre_completo, grupo_sanguineo)
<span class="text-blue-400">VALUES</span> 
    (<span class="text-amber-400">2</span>, <span class="text-emerald-400">'7845129'</span>, <span class="text-emerald-400">'Mariana Aguilera'</span>, <span class="text-emerald-400">'A+'</span>),
    (<span class="text-amber-400">3</span>, <span class="text-emerald-400">'9654128'</span>, <span class="text-emerald-400">'Fernando Vargas'</span>, <span class="text-emerald-400">'B-'</span>),
    (<span class="text-amber-400">4</span>, <span class="text-emerald-400">'3214587'</span>, <span class="text-emerald-400">'Patricia Morales'</span>, <span class="text-emerald-400">'O+'</span>);</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 9: ACTUALIZACIÓN SELECTIVA (UPDATE) -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                9. Modificación de Registros: Sentencia UPDATE con Cláusula WHERE
            </h3>
            <p class="text-xs text-slate-600 mb-3">La instrucción <code>UPDATE</code> modifica valores de columnas existentes. Omitir el <code>WHERE</code> actualiza accidentalmente todas las tuplas de la tabla.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Actualizar el honorario incrementando un 10% solo a los médicos activos</span>
<span class="text-blue-400">UPDATE</span> clinica.medico
<span class="text-blue-400">SET</span> honorario_base = honorario_base * <span class="text-amber-400">1.10</span>
<span class="text-blue-400">WHERE</span> activo = <span class="text-blue-400">TRUE</span>;

<span class="text-slate-500">-- Modificación puntual de múltiples atributos en una tupla específica</span>
<span class="text-blue-400">UPDATE</span> clinica.paciente
<span class="text-blue-400">SET</span> nombre_completo = <span class="text-emerald-400">'Carlos Zambrana Ch.'</span>,
    grupo_sanguineo = <span class="text-emerald-400">'AB+'</span>
<span class="text-blue-400">WHERE</span> id_paciente = <span class="text-amber-400">1</span>;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 10: ELIMINACIÓN PUNTUAL (DELETE) -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                10. Supresión Selectiva de Datos: Sentencia DELETE
            </h3>
            <p class="text-xs text-slate-600 mb-3">La sentencia <code>DELETE FROM</code> elimina tuplas evaluando condiciones lógicas. Debe ejecutarse con extrema cautela y bajo transacciones atómicas.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Elimina un paciente específico respetando las restricciones referenciales</span>
<span class="text-blue-400">DELETE FROM</span> clinica.paciente
<span class="text-blue-400">WHERE</span> id_paciente = <span class="text-amber-400">4</span>;

<span class="text-slate-500">-- Eliminar registros clínicos de prueba antiguos</span>
<span class="text-blue-400">DELETE FROM</span> clinica.signos_vitales
<span class="text-blue-400">WHERE</span> fecha_registro &lt; <span class="text-emerald-400">'2025-01-01 00:00:00'</span>;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 11: PROYECCIÓN BÁSICA Y ALIAS -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                11. Consultas Básicas: Proyección (SELECT), Alias (AS) y Expresiones
            </h3>
            <p class="text-xs text-slate-600 mb-3">La cláusula <code>SELECT</code> escoge las columnas necesarias (evitando el uso indiscriminado de <code>SELECT *</code>) y permite renombrar campos con alias semánticos.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-blue-400">SELECT</span> 
    ci <span class="text-blue-400">AS</span> documento_identidad,
    nombre_completo <span class="text-blue-400">AS</span> paciente,
    grupo_sanguineo <span class="text-blue-400">AS</span> rh
<span class="text-blue-400">FROM</span> clinica.paciente;

<span class="text-slate-500">-- Cálculo matemático al vuelo en la proyección</span>
<span class="text-blue-400">SELECT</span> 
    matricula,
    honorario_base <span class="text-blue-400">AS</span> sueldo_neto,
    honorario_base * <span class="text-amber-400">0.13</span> <span class="text-blue-400">AS</span> retencion_iva
<span class="text-blue-400">FROM</span> clinica.medico;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 12: FILTRADO CON OPERADORES LÓGICOS -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                12. Filtrado de Tuplas: WHERE con Operadores AND, OR y NOT
            </h3>
            <p class="text-xs text-slate-600 mb-3">Filtrado lógico con álgebra booleana para restringir los registros que viajan desde el motor hacia la aplicación.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-blue-400">SELECT</span> id_medico, nombres, apellidos, honorario_base
<span class="text-blue-400">FROM</span> clinica.medico
<span class="text-blue-400">WHERE</span> (honorario_base &gt;= <span class="text-amber-400">5000</span> <span class="text-blue-400">AND</span> activo = <span class="text-blue-400">TRUE</span>)
   <span class="text-blue-400">OR</span> (apellidos = <span class="text-emerald-400">'Zambrana'</span> <span class="text-blue-400">AND NOT</span> honorario_base &lt; <span class="text-amber-400">3000</span>);</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 13: FILTRADO DE RANGOS, LISTAS Y NULOS -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                13. Predicados Especiales: BETWEEN, IN, IS NULL e IS NOT NULL
            </h3>
            <p class="text-xs text-slate-600 mb-3">Construcciones sintácticas para rangos continuos, pertenencia a conjuntos finitos y detección de valores nulos (los nulos no se comparan con <code>=</code>).</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Filtrado por rango cerrado continuo</span>
<span class="text-blue-400">SELECT</span> id_medicion, temperatura_c
<span class="text-blue-400">FROM</span> clinica.signos_vitales
<span class="text-blue-400">WHERE</span> temperatura_c <span class="text-blue-400">BETWEEN</span> <span class="text-amber-400">37.50</span> <span class="text-blue-400">AND</span> <span class="text-amber-400">39.00</span>;

<span class="text-slate-500">-- Filtrado por lista de opciones discretas</span>
<span class="text-blue-400">SELECT</span> * <span class="text-blue-400">FROM</span> clinica.paciente
<span class="text-blue-400">WHERE</span> grupo_sanguineo <span class="text-blue-400">IN</span> (<span class="text-emerald-400">'O+'</span>, <span class="text-emerald-400">'O-'</span>, <span class="text-emerald-400">'AB+'</span>);

<span class="text-slate-500">-- Comprobación obligatoria de nulidad</span>
<span class="text-blue-400">SELECT</span> * <span class="text-blue-400">FROM</span> clinica.historia_clinica
<span class="text-blue-400">WHERE</span> antecedentes <span class="text-blue-400">IS NOT NULL</span>;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 14: PATRONES DE TEXTO CON LIKE Y REGEX -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                14. Búsqueda por Patrones de Cadenas: Operador LIKE e ILIKE
            </h3>
            <p class="text-xs text-slate-600 mb-3">Uso de comodines: <code>%</code> (cero o más caracteres cualesquiera) y <code>_</code> (exactamente un carácter individual). <code>ILIKE</code> ignora mayúsculas/minúsculas en PostgreSQL.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Pacientes cuyo nombre inicia con 'Mar'</span>
<span class="text-blue-400">SELECT</span> * <span class="text-blue-400">FROM</span> clinica.paciente
<span class="text-blue-400">WHERE</span> nombre_completo <span class="text-blue-400">LIKE</span> <span class="text-emerald-400">'Mar%'</span>;

<span class="text-slate-500">-- Pacientes que contienen la palabra 'Vargas' en cualquier posición (Case-Insensitive)</span>
<span class="text-blue-400">SELECT</span> * <span class="text-blue-400">FROM</span> clinica.paciente
<span class="text-blue-400">WHERE</span> nombre_completo <span class="text-blue-400">ILIKE</span> <span class="text-emerald-400">'%vargas%'</span>;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 15: ORDENACIÓN Y PAGINACIÓN -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                15. Ordenación y Paginación: ORDER BY, LIMIT y OFFSET
            </h3>
            <p class="text-xs text-slate-600 mb-3">Organización ascendente (<code>ASC</code>) o descendente (<code>DESC</code>) y segmentación de resultados por páginas para interfaces de usuario.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Obtener los 10 médicos con mayores ingresos</span>
<span class="text-blue-400">SELECT</span> nombres, apellidos, honorario_base
<span class="text-blue-400">FROM</span> clinica.medico
<span class="text-blue-400">ORDER BY</span> honorario_base <span class="text-blue-400">DESC</span>, apellidos <span class="text-blue-400">ASC</span>
<span class="text-blue-400">LIMIT</span> <span class="text-amber-400">10</span>;

<span class="text-slate-500">-- Paginación: Página 2 mostrando 5 registros por página</span>
<span class="text-blue-400">SELECT</span> id_paciente, nombre_completo
<span class="text-blue-400">FROM</span> clinica.paciente
<span class="text-blue-400">ORDER BY</span> id_paciente <span class="text-blue-400">ASC</span>
<span class="text-blue-400">LIMIT</span> <span class="text-amber-400">5</span> <span class="text-blue-400">OFFSET</span> <span class="text-amber-400">5</span>;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 16: VALORES DISTINTOS (DISTINCT) -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                16. Supresión de Duplicados en Salida: Cláusula DISTINCT
            </h3>
            <p class="text-xs text-slate-600 mb-3">La cláusula <code>SELECT DISTINCT</code> filtra las filas redundantes en el conjunto de resultados, asegurando una lista de valores únicos para análisis.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Conocer el catálogo de grupos sanguíneos registrados en la clínica</span>
<span class="text-blue-400">SELECT DISTINCT</span> grupo_sanguineo
<span class="text-blue-400">FROM</span> clinica.paciente
<span class="text-blue-400">WHERE</span> grupo_sanguineo <span class="text-blue-400">IS NOT NULL</span>
<span class="text-blue-400">ORDER BY</span> grupo_sanguineo <span class="text-blue-400">ASC</span>;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 17: FUNCIONES DE AGREGACIÓN -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                17. Funciones de Agregación: COUNT, SUM, AVG, MIN y MAX
            </h3>
            <p class="text-xs text-slate-600 mb-3">Operaciones matemáticas que procesan múltiples tuplas para retornar un único valor escalar consolidado.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-blue-400">SELECT</span> 
    <span class="text-yellow-400">COUNT</span>(*) <span class="text-blue-400">AS</span> total_pacientes,
    <span class="text-yellow-400">COUNT</span>(grupo_sanguineo) <span class="text-blue-400">AS</span> pacientes_con_rh_registrado,
    <span class="text-yellow-400">MIN</span>(temperatura_c) <span class="text-blue-400">AS</span> temp_minima,
    <span class="text-yellow-400">MAX</span>(temperatura_c) <span class="text-blue-400">AS</span> temp_maxima,
    <span class="text-yellow-400">ROUND</span>(<span class="text-yellow-400">AVG</span>(temperatura_c), <span class="text-amber-400">2</span>) <span class="text-blue-400">AS</span> temp_promedio
<span class="text-blue-400">FROM</span> clinica.signos_vitales;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 18: AGRUPACIONES CON GROUP BY -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                18. Agrupación de Datos: Cláusula GROUP BY
            </h3>
            <p class="text-xs text-slate-600 mb-3">Segmenta los registros en grupos de acuerdo al valor de una o más columnas para aplicar funciones agregadas sobre cada subconjunto de tuplas.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Total de pacientes clasificados por tipo de sangre</span>
<span class="text-blue-400">SELECT</span> 
    grupo_sanguineo,
    <span class="text-yellow-400">COUNT</span>(*) <span class="text-blue-400">AS</span> cantidad_pacientes
<span class="text-blue-400">FROM</span> clinica.paciente
<span class="text-blue-400">GROUP BY</span> grupo_sanguineo
<span class="text-blue-400">ORDER BY</span> cantidad_pacientes <span class="text-blue-400">DESC</span>;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 19: FILTRADO DE GRUPOS CON HAVING -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                19. Filtrado sobre Agrupaciones: Cláusula HAVING vs. WHERE
            </h3>
            <p class="text-xs text-slate-600 mb-3"><code>WHERE</code> filtra filas <em>antes</em> de agrupar; <code>HAVING</code> filtra los grupos resultantes <em>después</em> de haber aplicado la función de agregación.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Mostrar solo los grupos sanguíneos que tengan más de 5 pacientes registrados</span>
<span class="text-blue-400">SELECT</span> 
    grupo_sanguineo,
    <span class="text-yellow-400">COUNT</span>(*) <span class="text-blue-400">AS</span> total
<span class="text-blue-400">FROM</span> clinica.paciente
<span class="text-blue-400">WHERE</span> grupo_sanguineo <span class="text-blue-400">IS NOT NULL</span>
<span class="text-blue-400">GROUP BY</span> grupo_sanguineo
<span class="text-blue-400">HAVING</span> <span class="text-yellow-400">COUNT</span>(*) &gt; <span class="text-amber-400">5</span>;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 20: INNER JOIN -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                20. Combinación Interna: INNER JOIN
            </h3>
            <p class="text-xs text-slate-600 mb-3">Retorna únicamente las tuplas que encuentran coincidencia exacta en ambas tablas evaluando la condición de enlace <code>ON</code>.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-blue-400">SELECT</span> 
    p.ci,
    p.nombre_completo,
    h.id_historia,
    h.fecha_apertura
<span class="text-blue-400">FROM</span> clinica.paciente p
<span class="text-blue-400">INNER JOIN</span> clinica.historia_clinica h 
    <span class="text-blue-400">ON</span> p.id_paciente = h.id_paciente;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 21: LEFT JOIN Y RIGHT JOIN -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                21. Combinaciones Externas: LEFT JOIN y RIGHT JOIN
            </h3>
            <p class="text-xs text-slate-600 mb-3"><code>LEFT JOIN</code> devuelve todas las filas de la tabla izquierda, completando con valores <code>NULL</code> si la tabla derecha no tiene coincidencias relacionadas.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Listar todos los pacientes, tengan o no historial clínico abierto</span>
<span class="text-blue-400">SELECT</span> 
    p.id_paciente,
    p.nombre_completo,
    h.id_historia
<span class="text-blue-400">FROM</span> clinica.paciente p
<span class="text-blue-400">LEFT JOIN</span> clinica.historia_clinica h 
    <span class="text-blue-400">ON</span> p.id_paciente = h.id_paciente;

<span class="text-slate-500">-- Detección de pacientes huérfanos (sin historia clínica asociada)</span>
<span class="text-blue-400">SELECT</span> p.id_paciente, p.nombre_completo
<span class="text-blue-400">FROM</span> clinica.paciente p
<span class="text-blue-400">LEFT JOIN</span> clinica.historia_clinica h <span class="text-blue-400">ON</span> p.id_paciente = h.id_paciente
<span class="text-blue-400">WHERE</span> h.id_historia <span class="text-blue-400">IS NULL</span>;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 22: FULL JOIN Y CROSS JOIN -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                22. Combinaciones Completas: FULL OUTER JOIN y CROSS JOIN
            </h3>
            <p class="text-xs text-slate-600 mb-3"><code>FULL OUTER JOIN</code> conserva las tuplas de ambos extremos; <code>CROSS JOIN</code> calcula el producto cartesiano matemático combinando cada fila de $A$ con todas las de $B$.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Combinación bidireccional completa</span>
<span class="text-blue-400">SELECT</span> p.nombre_completo, h.id_historia
<span class="text-blue-400">FROM</span> clinica.paciente p
<span class="text-blue-400">FULL OUTER JOIN</span> clinica.historia_clinica h 
    <span class="text-blue-400">ON</span> p.id_paciente = h.id_paciente;

<span class="text-slate-500">-- Producto cartesiano: emparejar todos los médicos con todos los turnos disponibles</span>
<span class="text-blue-400">SELECT</span> m.nombres, t.nombre_turno
<span class="text-blue-400">FROM</span> clinica.medico m
<span class="text-blue-400">CROSS JOIN</span> clinica.turno t;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 23: COMBINACIÓN MULTITABLA -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                23. Consultas Multitabla Complejas (3 o Más Tablas)
            </h3>
            <p class="text-xs text-slate-600 mb-3">Interconexión de entidades a través de tablas intermedias creadas para resolver relaciones Muchos a Muchos (N:M).</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-blue-400">SELECT</span> 
    p.nombre_completo <span class="text-blue-400">AS</span> paciente,
    m.apellidos <span class="text-blue-400">AS</span> medico_tratante,
    c.fecha_atencion,
    d.descripcion <span class="text-blue-400">AS</span> diagnostico_cie10
<span class="text-blue-400">FROM</span> clinica.consulta c
<span class="text-blue-400">INNER JOIN</span> clinica.paciente p <span class="text-blue-400">ON</span> c.id_paciente = p.id_paciente
<span class="text-blue-400">INNER JOIN</span> clinica.medico m <span class="text-blue-400">ON</span> c.id_medico = m.id_medico
<span class="text-blue-400">INNER JOIN</span> clinica.diagnostico d <span class="text-blue-400">ON</span> c.id_diagnostico = d.id_diagnostico
<span class="text-blue-400">WHERE</span> c.fecha_atencion &gt;= <span class="text-emerald-400">'2026-01-01'</span>;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 24: SUBCONSULTAS ESCALARES -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                24. Subconsultas Escalares (WHERE y SELECT)
            </h3>
            <p class="text-xs text-slate-600 mb-3">Una subconsulta escalar devuelve exactamente un único valor atómico (1 fila por 1 columna) consumible directamente en expresiones lógicas de filtrado.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Médicos que ganan por encima del honorario promedio de la clínica</span>
<span class="text-blue-400">SELECT</span> nombres, apellidos, honorario_base
<span class="text-blue-400">FROM</span> clinica.medico
<span class="text-blue-400">WHERE</span> honorario_base &gt; (
    <span class="text-blue-400">SELECT</span> <span class="text-yellow-400">AVG</span>(honorario_base) 
    <span class="text-blue-400">FROM</span> clinica.medico
);</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 25: SUBCONSULTAS CON IN, ANY Y ALL -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                25. Subconsultas de Lista: Operadores IN, ANY y ALL
            </h3>
            <p class="text-xs text-slate-600 mb-3">Permiten comparar un valor escalar contra una lista o columna vertical generada dinámicamente por una subconsulta anidada.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Pacientes que registran al menos una medición febril (&gt; 38.5)</span>
<span class="text-blue-400">SELECT</span> id_paciente, nombre_completo
<span class="text-blue-400">FROM</span> clinica.paciente
<span class="text-blue-400">WHERE</span> id_paciente <span class="text-blue-400">IN</span> (
    <span class="text-blue-400">SELECT</span> id_paciente 
    <span class="text-blue-400">FROM</span> clinica.signos_vitales 
    <span class="text-blue-400">WHERE</span> temperatura_c &gt; <span class="text-amber-400">38.50</span>
);</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 26: SUBCONSULTAS CORRELACIONADAS Y EXISTS -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                26. Subconsultas Correlacionadas y Predicado EXISTS
            </h3>
            <p class="text-xs text-slate-600 mb-3">La subconsulta depende y se evalúa para cada fila de la consulta principal. <code>EXISTS</code> verifica de forma rápida la presencia de filas coincidentes.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Listar médicos que efectivamente han realizado consultas</span>
<span class="text-blue-400">SELECT</span> m.id_medico, m.apellidos
<span class="text-blue-400">FROM</span> clinica.medico m
<span class="text-blue-400">WHERE</span> <span class="text-blue-400">EXISTS</span> (
    <span class="text-blue-400">SELECT</span> <span class="text-amber-400">1</span> 
    <span class="text-blue-400">FROM</span> clinica.consulta c 
    <span class="text-blue-400">WHERE</span> c.id_medico = m.id_medico
);</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 27: OPERADORES DE CONJUNTOS (UNION, INTERSECT, EXCEPT) -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                27. Operadores de Conjuntos: UNION, INTERSECT y EXCEPT
            </h3>
            <p class="text-xs text-slate-600 mb-3">Combinan horizontalmente los resultados de dos consultas independientes con esquemas compatibles (mismo número y tipo de columnas).</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-slate-500">-- Padrón consolidado de personas vinculadas a la clínica (Unión sin duplicados)</span>
<span class="text-blue-400">SELECT</span> ci, nombre_completo, <span class="text-emerald-400">'PACIENTE'</span> <span class="text-blue-400">AS</span> rol <span class="text-blue-400">FROM</span> clinica.paciente
<span class="text-blue-400">UNION</span>
<span class="text-blue-400">SELECT</span> matricula <span class="text-blue-400">AS</span> ci, (nombres || <span class="text-emerald-400">' '</span> || apellidos), <span class="text-emerald-400">'MEDICO'</span> <span class="text-blue-400">FROM</span> clinica.medico;

<span class="text-slate-500">-- Médicos que también son pacientes de la clínica (Intersección)</span>
<span class="text-blue-400">SELECT</span> ci <span class="text-blue-400">FROM</span> clinica.paciente
<span class="text-blue-400">INTERSECT</span>
<span class="text-blue-400">SELECT</span> matricula <span class="text-blue-400">FROM</span> clinica.medico;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 28: VISTAS (CREATE VIEW) -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                28. Vistas Lógicas (CREATE VIEW): Abstracción y Seguridad
            </h3>
            <p class="text-xs text-slate-600 mb-3">Una vista es una consulta SQL predefinida almacenada en el catálogo que funciona como tabla virtual, facilitando reportes complejos y limitando el acceso a columnas sensibles.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-blue-400">CREATE VIEW</span> clinica.vista_resumen_atenciones <span class="text-blue-400">AS</span>
<span class="text-blue-400">SELECT</span> 
    p.ci,
    p.nombre_completo <span class="text-blue-400">AS</span> paciente,
    m.apellidos <span class="text-blue-400">AS</span> medico,
    c.fecha_atencion
<span class="text-blue-400">FROM</span> clinica.consulta c
<span class="text-blue-400">JOIN</span> clinica.paciente p <span class="text-blue-400">ON</span> c.id_paciente = p.id_paciente
<span class="text-blue-400">JOIN</span> clinica.medico m <span class="text-blue-400">ON</span> c.id_medico = m.id_medico;

<span class="text-slate-500">-- Consumo directo de la vista como si fuese una tabla normal</span>
<span class="text-blue-400">SELECT</span> * <span class="text-blue-400">FROM</span> clinica.vista_resumen_atenciones <span class="text-blue-400">WHERE</span> fecha_atencion = <span class="text-blue-400">CURRENT_DATE</span>;</code></pre>
            </div>
        </section>

        <!-- SECCIÓN 29: TRANSACCIONES (TCL) -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                29. Control Transaccional: BEGIN, COMMIT, ROLLBACK y SAVEPOINT
            </h3>
            <p class="text-xs text-slate-600 mb-3">Gobernanza de la atomicidad transaccional (ACID): confirmar cambios definitivos en disco con <code>COMMIT</code> o cancelarlos con <code>ROLLBACK</code> ante cualquier error.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto">
<pre><code><span class="text-blue-400">BEGIN TRANSACTION</span>;

<span class="text-blue-400">UPDATE</span> clinica.cama_hospitalaria
<span class="text-blue-400">SET</span> ocupada = <span class="text-blue-400">TRUE</span>
<span class="text-blue-400">WHERE</span> id_cama = <span class="text-amber-400">105</span>;

<span class="text-blue-400">INSERT INTO</span> clinica.internacion (id_internacion, id_paciente, id_cama, fecha_ingreso)
<span class="text-blue-400">VALUES</span> (<span class="text-amber-400">801</span>, <span class="text-amber-400">1</span>, <span class="text-amber-400">105</span>, <span class="text-blue-400">CURRENT_TIMESTAMP</span>);

<span class="text-slate-500">-- Punto de guardado intermedio</span>
<span class="text-blue-400">SAVEPOINT</span> registro_cama_ok;

<span class="text-slate-500">-- Si todo fue exitoso, persistir irrevocablemente en disco</span>
<span class="text-blue-400">COMMIT</span>;

<span class="text-slate-500">-- Si ocurriese una falla técnica en la segunda sentencia:</span>
<span class="text-slate-500">-- ROLLBACK;</span></code></pre>
            </div>
        </section>

        <!-- SECCIÓN 30: SEGURIDAD (DCL) Y PERMISOS -->
        <section>
            <h3 class="text-2xl font-black text-[#003366] uppercase border-b-2 border-slate-100 pb-2 mb-4">
                30. Seguridad y Privilegios (DCL): CREATE USER, GRANT y REVOKE
            </h3>
            <p class="text-xs text-slate-600 mb-3">Administración granular de perfiles y permisos de usuario para salvaguardar la confidencialidad de los datos bajo el principio de mínimo privilegio.</p>
            <div class="bg-slate-900 rounded-xl p-4 font-mono text-xs text-slate-200 overflow-x-auto mb-8">
<pre><code><span class="text-slate-500">-- Creación de un usuario para el personal de recepción</span>
<span class="text-blue-400">CREATE USER</span> recepcion_usuario <span class="text-blue-400">WITH PASSWORD</span> <span class="text-emerald-400">'ClaveSegura2026!'</span>;

<span class="text-slate-500">-- Asignar solo permisos de lectura sobre pacientes y permisos de inserción en consultas</span>
<span class="text-blue-400">GRANT SELECT ON</span> clinica.paciente <span class="text-blue-400">TO</span> recepcion_usuario;
<span class="text-blue-400">GRANT INSERT, SELECT ON</span> clinica.consulta <span class="text-blue-400">TO</span> recepcion_usuario;

<span class="text-slate-500">-- Revocar permisos de eliminación (prohibir DELETE bajo cualquier circunstancia)</span>
<span class="text-blue-400">REVOKE DELETE ON ALL TABLES IN SCHEMA</span> clinica <span class="text-blue-400">FROM</span> recepcion_usuario;</code></pre>
            </div>
        </section>

        <!-- RESUMEN FINAL DEL TEMA -->
        <section class="bg-gradient-to-br from-[#001f3f] to-[#003366] p-8 md:p-12 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
            <i class="fas fa-terminal absolute -right-10 -bottom-10 text-white/5 text-[18rem] rotate-12 pointer-events-none"></i>
            
            <div class="relative z-10">
                <span class="text-xs font-black uppercase tracking-[0.3em] text-[#00aaff] block mb-2">Síntesis Formativa Técnica</span>
                <h3 class="text-3xl font-black uppercase text-white mb-6">Resumen Ejecutivo de la Unidad 4</h3>
                
                <div class="grid md:grid-cols-2 gap-6 text-xs leading-relaxed">
                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Dominio DDL: Definición Estructural</h4>
                        <p class="text-slate-200">
                            La creación de esquemas, tablas e índices mediante CREATE, ALTER y DROP con restricciones integradas (PRIMARY KEY, FOREIGN KEY, UNIQUE, CHECK) establece la base física para erradicar inconsistencias en el almacenamiento.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Poder Manipulativo DML</h4>
                        <p class="text-slate-200">
                            El ciclo de vida de los datos se controla mediante INSERT, UPDATE y DELETE selectivos, asegurando mutaciones controladas de tuplas sin degradar la consistencia relacional.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Análisis Multitabla y Agrupaciones</h4>
                        <p class="text-slate-200">
                            La combinación de tablas mediante INNER y LEFT JOIN, sumada al poder de agregación de GROUP BY, HAVING y subconsultas correlacionadas, permite resolver cualquier requerimiento de reportes analíticos complejos.
                        </p>
                    </div>

                    <div class="bg-white/10 p-5 rounded-xl border border-white/20">
                        <h4 class="font-bold text-[#00aaff] text-sm mb-2"><i class="fas fa-check-circle mr-2"></i> Gobierno Transaccional y Seguridad</h4>
                        <p class="text-slate-200">
                            El control transaccional estricto (COMMIT/ROLLBACK) protege las operaciones clínicas concurrentes, complementándose con vistas abstractas y privilegios DCL (GRANT/REVOKE) que garantizan confidencialidad bajo normas de seguridad de datos.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>
`;