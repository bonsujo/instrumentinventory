import InstrumentCard from "../../components/InstrumentCard";
import { getAllInstruments } from "../../lib/api";

export default async function CollectionPage() {
  const instruments = await getAllInstruments();

  return (
    <div>
      <h1>Instruments Collection</h1>
      {instruments.map(instr => (
        <InstrumentCard key={instr.id} instrument={instr} />
      ))}
    </div>
  );
}
