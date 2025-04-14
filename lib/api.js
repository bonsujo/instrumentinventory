const API_URL = "http://localhost:4000/instruments";

export async function getAllInstruments() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function getInstrumentById(id) {
  const res = await fetch(`${API_URL}/${id}`);
  return res.ok ? res.json() : null;
}

export async function deleteInstrument(id) {
  return await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}

export async function createInstrument(data) {
  return await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

export async function updateInstrument(id, data) {
  return await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}
