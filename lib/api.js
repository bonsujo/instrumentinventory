const API_URL = "http://localhost:4000/instruments"

export async function getAll(){
    const res = await fetch(API_URL)
    return res.json
}


