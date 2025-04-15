'use server';

import { revalidatePath } from 'next/cache';

export async function deleteInstrument(id) {
  const res = await fetch(`http://localhost:3000/api/instruments/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    throw new Error('Failed to delete instrument');
  }


  revalidatePath('/collection');
  revalidatePath(`/collection/${id}`);
  revalidatePath('/admin');
}
