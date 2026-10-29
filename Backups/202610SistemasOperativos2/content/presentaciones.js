const pag_presentaciones = `
<div style="width: 100% !important; display: flex !important; justify-content: center !important; font-family: sans-serif !important; animation: fade-in 0.7s ease-in-out;">
    <div style="width: 95% !important; max-width: 900px !important; margin: 15px 0 !important; background-color: #f8fafc !important; border: 1px solid #e2e8f0 !important; border-radius: 15px !important; padding: 35px !important; box-sizing: border-box !important; border-top: 6px solid #003366 !important; box-shadow: 0 4px 6px rgba(0,0,0,0.05) !important;">
        
        <!-- ENCABEZADO -->
        <div style="margin-bottom: 30px !important; text-align: left !important; border-bottom: 2px solid #e2e8f0 !important; padding-bottom: 20px !important;">
            <span style="display: block !important; font-size: 11px !important; color: #00aaff !important; text-transform: uppercase !important; margin-bottom: 5px !important; letter-spacing: 2px !important; font-weight: 800 !important;">Sistemas Operativos II</span>
            <h3 style="color: #003366 !important; margin: 0 0 10px 0 !important; font-size: 2rem !important; text-transform: uppercase !important; font-weight: 900 !important; letter-spacing: -1px !important;">Presentaciones y Recursos de Clase</h3>
            <p style="color: #64748b !important; font-size: 15px !important; line-height: 1.6 !important; margin: 0 !important;">
                Aquí encontrarás el material de apoyo directo, guías de laboratorio y entornos de práctica que utilizaremos durante nuestras sesiones. Este repositorio de recursos está pensado para acompañar cada unidad del módulo.
            </p>
        </div>

        <!-- SECCIÓN 1: PRESENTACIONES Y GUÍAS (PDFs) -->
        <div style="margin-bottom: 35px !important;">
            <h4 style="color: #003366 !important; font-size: 1.2rem !important; text-transform: uppercase !important; font-weight: 800 !important; margin-bottom: 15px !important; display: flex !important; align-items: center !important; gap: 8px !important;">
                <i class="fas fa-chalkboard-teacher" style="color: #00aaff !important;"></i> Guías de Clase y Apuntes Oficiales
            </h4>
            
            <div style="display: grid !important; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important; gap: 15px !important;">
                
                <a href="https://eines-informatiques.recursos.uoc.edu/wp-content/uploads/sites/5/2023/11/Introduccion_a-los-entornos_de-trabajo-GnuLinux.pdf" target="_blank" style="background-color: #ffffff !important; border: 1px solid #e2e8f0 !important; padding: 15px !important; border-radius: 10px !important; text-decoration: none !important; display: flex !important; align-items: flex-start !important; gap: 15px !important; transition: all 0.3s ease !important; border-left: 4px solid #f59e0b !important; box-shadow: 0 2px 4px rgba(0,0,0,0.02) !important;">
                    <div style="width: 40px !important; height: 40px !important; background-color: #fffbeb !important; border-radius: 8px !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; color: #f59e0b !important; font-size: 1.2rem !important;">
                        <i class="fas fa-file-pdf"></i>
                    </div>
                    <div>
                        <strong style="color: #1e293b !important; font-size: 14px !important; display: block !important; margin-bottom: 4px !important;">U1: Entornos de Trabajo GNU/Linux</strong>
                        <span style="color: #64748b !important; font-size: 12px !important; display: block !important; line-height: 1.4 !important;">Apuntes de clase: Estructura y gestión del sistema operativo (PDF).</span>
                    </div>
                </a>

                <a href="https://linuxcommand.org/tlcl.php" target="_blank" style="background-color: #ffffff !important; border: 1px solid #e2e8f0 !important; padding: 15px !important; border-radius: 10px !important; text-decoration: none !important; display: flex !important; align-items: flex-start !important; gap: 15px !important; transition: all 0.3s ease !important; border-left: 4px solid #3b82f6 !important; box-shadow: 0 2px 4px rgba(0,0,0,0.02) !important;">
                    <div style="width: 40px !important; height: 40px !important; background-color: #eff6ff !important; border-radius: 8px !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; color: #3b82f6 !important; font-size: 1.2rem !important;">
                        <i class="fas fa-terminal"></i>
                    </div>
                    <div>
                        <strong style="color: #1e293b !important; font-size: 14px !important; display: block !important; margin-bottom: 4px !important;">U3: The Linux Command Line</strong>
                        <span style="color: #64748b !important; font-size: 12px !important; display: block !important; line-height: 1.4 !important;">Recurso principal para las prácticas de terminal y scripting.</span>
                    </div>
                </a>

                <a href="https://www.gnu.org/software/bash/manual/bash.pdf" target="_blank" style="background-color: #ffffff !important; border: 1px solid #e2e8f0 !important; padding: 15px !important; border-radius: 10px !important; text-decoration: none !important; display: flex !important; align-items: flex-start !important; gap: 15px !important; transition: all 0.3s ease !important; border-left: 4px solid #8b5cf6 !important; box-shadow: 0 2px 4px rgba(0,0,0,0.02) !important;">
                    <div style="width: 40px !important; height: 40px !important; background-color: #f5f3ff !important; border-radius: 8px !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; color: #8b5cf6 !important; font-size: 1.2rem !important;">
                        <i class="fas fa-code"></i>
                    </div>
                    <div>
                        <strong style="color: #1e293b !important; font-size: 14px !important; display: block !important; margin-bottom: 4px !important;">U5: Programación Shell (Bash)</strong>
                        <span style="color: #64748b !important; font-size: 12px !important; display: block !important; line-height: 1.4 !important;">Manual técnico de consulta para automatización de scripts.</span>
                    </div>
                </a>

                <a href="https://fegalaz.usc.es/~gamallo/aulas/lingcomputacional/biblio/manualLinux.pdf" target="_blank" style="background-color: #ffffff !important; border: 1px solid #e2e8f0 !important; padding: 15px !important; border-radius: 10px !important; text-decoration: none !important; display: flex !important; align-items: flex-start !important; gap: 15px !important; transition: all 0.3s ease !important; border-left: 4px solid #f43f5e !important; box-shadow: 0 2px 4px rgba(0,0,0,0.02) !important;">
                    <div style="width: 40px !important; height: 40px !important; background-color: #fff1f2 !important; border-radius: 8px !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; color: #f43f5e !important; font-size: 1.2rem !important;">
                        <i class="fas fa-clipboard-list"></i>
                    </div>
                    <div>
                        <strong style="color: #1e293b !important; font-size: 14px !important; display: block !important; margin-bottom: 4px !important;">Anexo: Manual Práctico Linux</strong>
                        <span style="color: #64748b !important; font-size: 12px !important; display: block !important; line-height: 1.4 !important;">Guía de bolsillo y referencia rápida para administración diaria.</span>
                    </div>
                </a>

                <a href="https://learning.lpi.org/en/learning-materials/010-160/" target="_blank" style="background-color: #ffffff !important; border: 1px solid #e2e8f0 !important; padding: 15px !important; border-radius: 10px !important; text-decoration: none !important; display: flex !important; align-items: flex-start !important; gap: 15px !important; transition: all 0.3s ease !important; border-left: 4px solid #10b981 !important; box-shadow: 0 2px 4px rgba(0,0,0,0.02) !important;">
                    <div style="width: 40px !important; height: 40px !important; background-color: #ecfdf5 !important; border-radius: 8px !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; color: #10b981 !important; font-size: 1.2rem !important;">
                        <i class="fas fa-certificate"></i>
                    </div>
                    <div>
                        <strong style="color: #1e293b !important; font-size: 14px !important; display: block !important; margin-bottom: 4px !important;">Material: Certificación LPI</strong>
                        <span style="color: #64748b !important; font-size: 12px !important; display: block !important; line-height: 1.4 !important;">Diapositivas y material base oficial de Linux Professional Institute.</span>
                    </div>
                </a>

            </div>
        </div>

        <!-- SECCIÓN 2: HERRAMIENTAS Y LABORATORIOS -->
        <div>
            <h4 style="color: #003366 !important; font-size: 1.2rem !important; text-transform: uppercase !important; font-weight: 800 !important; margin-bottom: 15px !important; display: flex !important; align-items: center !important; gap: 8px !important;">
                <i class="fas fa-laptop-code" style="color: #00aaff !important;"></i> Laboratorios y Simuladores
            </h4>
            
            <div style="display: grid !important; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important; gap: 15px !important;">
                
                <a href="https://bellard.org/jslinux/" target="_blank" style="background-color: #0f172a !important; border: 1px solid #1e293b !important; padding: 15px !important; border-radius: 10px !important; text-decoration: none !important; display: flex !important; align-items: flex-start !important; gap: 15px !important; transition: all 0.3s ease !important; border-left: 4px solid #22d3ee !important;">
                    <div style="width: 40px !important; height: 40px !important; background-color: #1e293b !important; border-radius: 8px !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; color: #22d3ee !important; font-size: 1.2rem !important;">
                        <i class="fas fa-desktop"></i>
                    </div>
                    <div>
                        <strong style="color: #f8fafc !important; font-size: 14px !important; display: block !important; margin-bottom: 4px !important;">Emulador JSLinux</strong>
                        <span style="color: #94a3b8 !important; font-size: 12px !important; display: block !important; line-height: 1.4 !important;">Máquina virtual en el navegador para nuestras pruebas en vivo.</span>
                    </div>
                </a>

                <a href="https://explainshell.com/" target="_blank" style="background-color: #ffffff !important; border: 1px solid #e2e8f0 !important; padding: 15px !important; border-radius: 10px !important; text-decoration: none !important; display: flex !important; align-items: flex-start !important; gap: 15px !important; transition: all 0.3s ease !important; border-left: 4px solid #6366f1 !important; box-shadow: 0 2px 4px rgba(0,0,0,0.02) !important;">
                    <div style="width: 40px !important; height: 40px !important; background-color: #eef2ff !important; border-radius: 8px !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; color: #6366f1 !important; font-size: 1.2rem !important;">
                        <i class="fas fa-magic"></i>
                    </div>
                    <div>
                        <strong style="color: #1e293b !important; font-size: 14px !important; display: block !important; margin-bottom: 4px !important;">Herramienta: ExplainShell</strong>
                        <span style="color: #64748b !important; font-size: 12px !important; display: block !important; line-height: 1.4 !important;">Desglosa y explica visualmente cualquier comando complejo.</span>
                    </div>
                </a>

                <a href="https://labex.io/linuxjourney" target="_blank" style="background-color: #ffffff !important; border: 1px solid #e2e8f0 !important; padding: 15px !important; border-radius: 10px !important; text-decoration: none !important; display: flex !important; align-items: flex-start !important; gap: 15px !important; transition: all 0.3s ease !important; border-left: 4px solid #14b8a6 !important; box-shadow: 0 2px 4px rgba(0,0,0,0.02) !important;">
                    <div style="width: 40px !important; height: 40px !important; background-color: #ccfbf1 !important; border-radius: 8px !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important; color: #14b8a6 !important; font-size: 1.2rem !important;">
                        <i class="fas fa-gamepad"></i>
                    </div>
                    <div>
                        <strong style="color: #1e293b !important; font-size: 14px !important; display: block !important; margin-bottom: 4px !important;">Prácticas: Linux Journey</strong>
                        <span style="color: #64748b !important; font-size: 12px !important; display: block !important; line-height: 1.4 !important;">Ejercicios gamificados complementarios a los temas de clase.</span>
                    </div>
                </a>

            </div>
        </div>
        
    </div>
</div>
`;