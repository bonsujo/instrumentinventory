const API_URL = "http://localhost:4000/instruments";

export const getInstruments = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Failed to fetch instruments');
  return res.json();
};

export const getInstrumentById = async (id) => {
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error(`Failed to fetch instrument with id: ${id}`);
  return res.json();
};

export const createInstrument = async (data) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateInstrument = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteInstrument = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};
