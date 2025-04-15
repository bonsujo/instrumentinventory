'use server';

import { revalidatePath } from 'next/cache';

export const updateInstrument = async (updatedInstrument) => {
    try {
      const response = await fetch(`/api/instruments/${updatedInstrument.id}`, {
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

  export const deleteInstrument = async (id) => {
    try {
      const response = await fetch(`/api/instruments/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete instrument');
      }
  
      revalidatePath('/collection');
      revalidatePath('/admin');
    } catch (error) {
      console.error('Error deleting instrument:', error);
      throw error; 
    }
  };