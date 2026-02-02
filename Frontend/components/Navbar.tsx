'use client';
import Link from 'next/link';
import { LayoutDashboard, Users, ClipboardCheck, Settings, Bell } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 h-20 flex items-center justify-between px-10 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-xl shadow-lg shadow-blue-200">
          <ClipboardCheck className="text-white w-6 h-6" />
        </div>
        <span className="text-2xl font-black text-slate-800 tracking-tighter">
          Edu<span className="text-blue-600">Metric</span>
        </span>
      </div>

      <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500">
        <Link href="/" className="hover:text-blue-600 transition-colors flex items-center gap-2">
          <LayoutDashboard size={18} /> Dashboard
        </Link>
        <Link href="/pacientes" className="hover:text-blue-600 transition-colors flex items-center gap-2">
          <Users size={18} /> Pacientes
        </Link>
        <Link href="#" className="hover:text-blue-600 transition-colors flex items-center gap-2">
          <Bell size={18} /> Notificaciones
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-400 hover:text-slate-600">
          <Settings size={20} />
        </button>
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-xs shadow-inner">
          PM
        </div>
      </div>
    </nav>
  );
}