'use client';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { UserPlus, Save, Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { registrarPaciente } from './actions';

export default function PacientesPage() {
  const [nombre, setNombre] = useState('');
  const [fechaNac, setFechaNac] = useState('');
  const [curso, setCurso] = useState('1ESO');
  const [cargando, setCargando] = useState(false);

  const handleGuardar = async (e: React.FormEvent) => {
    e.preventDefault();
    setCargando(true);
    const res = await registrarPaciente(nombre, fechaNac, curso);
    if (res.success) {
      alert("✅ Guardado en la base de datos");
      setNombre(''); setFechaNac('');
    } else {
      alert("❌ Error al guardar");
    }
    setCargando(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="p-8 max-w-2xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-slate-500 mb-6 font-bold">
          <ArrowLeft size={18} /> Volver
        </Link>
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-blue-600 p-6 text-white text-xl font-bold flex items-center gap-3">
            <UserPlus /> Registro de Paciente
          </div>
          <form onSubmit={handleGuardar} className="p-8 space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2">Nombre Completo</label>
              <input type="text" required className="w-full p-3 rounded-xl border bg-slate-50" 
                value={nombre} onChange={e => setNombre(e.target.value)} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">Fecha Nacimiento</label>
                <input type="date" required className="w-full p-3 rounded-xl border bg-slate-50"
                  value={fechaNac} onChange={e => setFechaNac(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Curso</label>
                <select className="w-full p-3 rounded-xl border bg-slate-50"
                  value={curso} onChange={e => setCurso(e.target.value)}>
                  <option value="1ESO">1º ESO</option>
                  <option value="2ESO">2º ESO</option>
                </select>
              </div>
            </div>
            <button type="submit" disabled={cargando} className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold flex justify-center items-center gap-2">
              {cargando ? <Loader2 className="animate-spin" /> : <Save />}
              {cargando ? "Guardando..." : "Guardar Ficha"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}