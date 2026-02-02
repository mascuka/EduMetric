'use client';

import Navbar from '../components/Navbar';
import Link from 'next/link';
import { Users, ClipboardCheck, ArrowRight, Activity, BookOpen } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      
      <header className="bg-gradient-to-b from-[#e0f2fe] to-white border-b border-blue-100 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <Activity size={16} />
            <span>Sistema de Monitoreo Psicopedagógico</span>
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Bienvenido a <span className="text-blue-600 italic">EduMetric</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            Optimice sus evaluaciones con herramientas de medición precisas, 
            baremos automatizados y seguimiento clínico personalizado.
          </p>
        </div>
      </header>

      <section className="p-8 max-w-6xl mx-auto -mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800">Pacientes</h3>
            <p className="text-slate-500 text-sm mt-2 mb-4">Gestione fichas clínicas.</p>
            <div className="text-3xl font-bold text-slate-900">24</div>
          </div>
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="bg-teal-50 w-12 h-12 rounded-2xl flex items-center justify-center text-teal-600 mb-4">
              <ClipboardCheck size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800">Evaluaciones</h3>
            <p className="text-slate-500 text-sm mt-2 mb-4">Tests realizados este mes.</p>
            <div className="text-3xl font-bold text-teal-600">12</div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="bg-purple-50 w-12 h-12 rounded-2xl flex items-center justify-center text-purple-600 mb-4">
              <BookOpen size={24} />
            </div>
            <h3 className="text-lg font-bold text-slate-800">Manuales</h3>
            <p className="text-slate-500 text-sm mt-2 mb-4">Acceso a baremos PROLEC.</p>
            <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">ACTUAL</span>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[2rem] p-10 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
          <div>
            <h2 className="text-3xl font-bold mb-2">Nueva Evaluación Digital</h2>
            <p className="text-slate-400 text-lg">Inicie un test rápido y obtenga resultados al instante.</p>
          </div>
          <Link 
            href="/pacientes" 
            className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-2 transition-all"
          >
            Comenzar <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}