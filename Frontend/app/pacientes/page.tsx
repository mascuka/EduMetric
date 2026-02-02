'use client';

import React, { useState } from 'react';
// Importamos la Navbar subiendo dos niveles
import Navbar from '../../components/Navbar';
import { UserPlus, Calendar, GraduationCap, ArrowLeft, Save } from 'lucide-react';
import Link from 'next/link';

export default function PacientesPage() {
  const [nombre, setNombre] = useState('');
  const [fechaNac, setFechaNac] = useState('');
  const [curso, setCurso] = useState('1ESO');

  const guardarPaciente = (e: React.FormEvent) => {
    e.preventDefault();
    const nuevoPaciente = { nombre, fechaNac, curso };
    console.log("Guardando en EduMetric:", nuevoPaciente);
    alert(`Paciente ${nombre} registrado localmente.`);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      
      <div className="p-8 max-w-2xl mx-auto">
        {/* Botón Volver */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-6 font-semibold transition-colors">
          <ArrowLeft size={18} /> Volver al Dashboard
        </Link>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-slate-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-white">
            <h1 className="text-2xl font-bold flex items-center gap-3">
              <UserPlus size={28} /> Registro de Paciente
            </h1>
            <p className="text-blue-100 mt-1 opacity-90">Ingrese los datos para la nueva ficha clínica.</p>
          </div>
          
          <form onSubmit={guardarPaciente} className="p-10 space-y-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-2 px-1">
                Nombre Completo del Estudiante
              </label>
              <input 
                type="text" 
                required
                className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-800 placeholder:text-slate-400 bg-slate-50/50"
                placeholder="Ej: Santiago Mascuka"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2 px-1">
                  <Calendar size={16} className="text-blue-500"/> Fecha de Nacimiento
                </label>
                <input 
                  type="date" 
                  required
                  className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-800 bg-slate-50/50"
                  value={fechaNac}
                  onChange={(e) => setFechaNac(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2 px-1">
                  <GraduationCap size={16} className="text-blue-500"/> Curso Escolar
                </label>
                <select 
                  className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all bg-slate-50/50 text-slate-800 cursor-pointer"
                  value={curso}
                  onChange={(e) => setCurso(e.target.value)}
                >
                  <option value="1ESO">1º ESO</option>
                  <option value="2ESO">2º ESO</option>
                  <option value="3ESO">3º ESO</option>
                  <option value="4ESO">4º ESO</option>
                  <option value="1BACH">1º Bachillerato</option>
                  <option value="2BACH">2º Bachillerato</option>
                </select>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 mt-4 flex items-center justify-center gap-2"
            >
              <Save size={20} /> Guardar Ficha Clínica
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}