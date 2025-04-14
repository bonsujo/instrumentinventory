const API_URL = "http://localhost:4000/instruments"

export async function getAllInstruments() {
    const res = await fetch(API_URL);
    return res.json();
}

export async function getInstrumentById(id){
    const res = await fetch(`${API_URL}/${id}`)
    return res.ok ? res.json() : null
}



