export type Curso = '1ESO' | '2ESO' | '3ESO' | '4ESO' | '1BACH' | '2BACH';
export type NivelRiesgo = 'N' | 'D' | 'DD';

export interface Paciente {
  id?: string;
  nombre: string;
  fecha_nacimiento: string;
  curso: Curso;
}

export interface ResultadoPrueba {
  pruebaId: string;
  aciertos: number;
  tiempo?: number;
  puntuacionCI: number;
  nivel: NivelRiesgo;
}