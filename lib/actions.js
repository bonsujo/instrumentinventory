'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createInstrument(formData) {
  const newInstrument = {
    id: formData.get("id"),
    instrument_name: formData.get("instrument_name"),
    instrument_type: formData.get("instrument_type"),
    price: Number(formData.get("price")),
    year_made: Number(formData.get("year_made")),
  };

  await fetch("http://localhost:4000/instruments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newInstrument),
  });

  revalidatePath("/admin");
  revalidatePath("/collection");

  redirect("/admin");
}

export const updateInstrument = async (updatedInstrument) => {
    try {
      const response = await fetch(`http://localhost:4000/instruments/${updatedInstrument.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedInstrument),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update instrument');
      }
  
      revalidatePath('/collection');
      revalidatePath(`/collection/${updatedInstrument.id}`);
      revalidatePath('/admin');
    } catch (error) {
      console.error('Error updating instrument:', error);
      throw error; 
    }
  };

  export async function deleteInstrument(id) {
    await fetch(`http://localhost:4000/instruments/${id}`, {
      method: 'DELETE',
    });
  
    revalidatePath('/collection');
    revalidatePath(`/collection/${id}`);
    revalidatePath('/admin');
  }