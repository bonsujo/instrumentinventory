import Link from "next/link";
import { getAllInstruments } from "../../lib/api";

export default async function CollectionPage() {
  const instruments = await getAllInstruments();

  return (
    <div>
      <h1>Instruments</h1>
      {instruments.map(instr => (
        <div key={instr.id} style={{ marginBottom: '10px', border: '1px solid gray', padding: '10px' }}>
          <p><strong>{instr.id}</strong>: {instr.instrument_name}</p>
          <Link href={`/collection/${instr.id}`}>More</Link>
        </div>
      ))}
    </div>
  );
}
