'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { UserPlus, Save, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { registrarPaciente } from './actions'; // Importamos la conexión

export default function PacientesPage() {
  const [nombre, setNombre] = useState('');
  const [fechaNac, setFechaNac] = useState('');
  const [curso, setCurso] = useState('1ESO');
  const [cargando, setCargando] = useState(false);

  const handleGuardar = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);
    
    const resultado = await registrarPaciente(nombre, fechaNac, curso);
    
    if (resultado.success) {
      alert("✅ ¡Paciente registrado con éxito!");
      setNombre('');
      setFechaNac('');
    } else {
      alert("❌ Hubo un problema al guardar.");
    }
    setCargando(false);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      <div className="p-8 max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-6 font-semibold transition-colors">
          <ArrowLeft size={18} /> Volver al Dashboard
        </Link>

        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-white">
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <UserPlus size={28} /> Registro de Paciente
            </h1>
          </div>
          
          <form onSubmit={handleGuardar} className="p-10 space-y-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700">Nombre Completo</label>
              <input type="text" required className="w-full p-4 rounded-2xl border bg-slate-50/50" 
                value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej: Juan Pérez" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Fecha de Nacimiento</label>
                <input type="date" required className="w-full p-4 rounded-2xl border bg-slate-50/50"
                  value={fechaNac} onChange={(e) => setFechaNac(e.target.value)} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Curso Escolar</label>
                <select className="w-full p-4 rounded-2xl border bg-slate-50/50"
                  value={curso} onChange={(e) => setCurso(e.target.value)}>
                  <option value="1ESO">1º ESO</option>
                  <option value="2ESO">2º ESO</option>
                  <option value="3ESO">3º ESO</option>
                  <option value="4ESO">4º ESO</option>
                </select>
              </div>
            </div>

            <button type="submit" disabled={cargando}
              className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-50">
              {cargando ? <Loader2 className="animate-spin" /> : <Save size={20} />}
              {cargando ? "Guardando..." : "Guardar Ficha Clínica"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}