import { getAllInstruments } from "../../lib/api";

export default async function CollectionPage() {
  const instruments = await getAllInstruments();

  return (
    <div>
      <h1>Instrument Collection</h1>
      <div>
        {instruments.map((instrument) => (
           <div key={instrument.id} style={{ marginBottom: '10px', border: '1px solid gray', padding: '10px' }}>
           <p><strong>{instrument.id}</strong>: {instr.instrument_name}</p>
           <p>Type: {instrument.instrument_type}</p>
           <p>Price: ${instrument.price}</p>
           <p>Year Made: {instrument.year_made}</p>
           <Link href={`/collection/${instrument.id}`}>More</Link>
         </div>
        ))}
      </div>
    </div>
  );
}
