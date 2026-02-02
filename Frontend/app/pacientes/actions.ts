'use server'

import { db } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function registrarPaciente(nombre: string, fechaNac: string, curso: string) {
  const client = await db.connect();
  
  try {
    // Aquí insertamos los datos en la tabla que creaste en Neon
    await client.sql`
      INSERT INTO pacientes (nombre, fecha_nac, curso)
      VALUES (${nombre}, ${fechaNac}, ${curso});
    `;
    
    // Esto refresca la página para mostrar los datos nuevos
    revalidatePath('/pacientes'); 
    return { success: true };
  } catch (error) {
    console.error('Error en DB:', error);
    return { success: false };
  } finally {
    client.release();
  }
}