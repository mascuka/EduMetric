'use server'

import { db } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';

export async function registrarPaciente(nombre: string, fechaNac: string, curso: string) {
  const client = await db.connect();
  try {
    await client.sql`
      INSERT INTO pacientes (nombre, fecha_nac, curso)
      VALUES (${nombre}, ${fechaNac}, ${curso});
    `;
    revalidatePath('/pacientes'); 
    return { success: true };
  } catch (error) {
    console.error('Error:', error);
    return { success: false };
  } finally {
    client.release();
  }
}