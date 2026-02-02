import { Curso, NivelRiesgo } from '../types';

// Baremos extraídos del manual (Ejemplo 1º ESO - Ampliable)
export const BAREMOS: Record<Curso, any> = {
  '1ESO': {
    emparejamiento: { media: 18.42, dt: 2.31 },
    lexica: { media: 25.10, dt: 4.50 },
  },
  '2ESO': {
    emparejamiento: { media: 19.10, dt: 1.80 },
    lexica: { media: 26.50, dt: 3.90 },
  },
  // Agregaremos el resto de cursos y pruebas aquí
  '3ESO': {}, '4ESO': {}, '1BACH': {}, '2BACH': {}
};

export const calcularDiagnostico = (aciertos: number, curso: Curso, prueba: string) => {
  const baremo = BAREMOS[curso][prueba];
  if (!baremo) return { ci: 100, nivel: 'N' as NivelRiesgo };

  const ci = ((aciertos - baremo.media) / baremo.dt) * 15 + 100;
  const ciRedondeado = Math.round(ci);

  let nivel: NivelRiesgo = 'N';
  if (ciRedondeado <= 70) nivel = 'DD';
  else if (ciRedondeado <= 85) nivel = 'D';

  return { ci: ciRedondeado, nivel };
};