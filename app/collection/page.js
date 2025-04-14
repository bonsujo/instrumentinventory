import InstrumentCard from "../../components/InstrumentCard";
import { getAllInstruments } from "../../lib/api";

export default async function CollectionPage() {
  const instruments = await getAllInstruments();

  return (
    <div>
      <h1>Instrument Collection</h1>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        marginTop: "20px"
      }}>
        {instruments.map((instrument) => (
          <InstrumentCard key={instrument.id} instrument={instrument} />
        ))}
      </div>
    </div>
  );
}