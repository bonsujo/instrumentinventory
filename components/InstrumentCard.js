import Link from "next/link";

export default function InstrumentCard({ instrument }) {
  return (
    <div style={{ marginBottom: "10px", border: "1px solid gray", padding: "10px", borderRadius: "8px" }}>
      <h3>{instrument.instrument_name}</h3>
      <p><strong>Type:</strong> {instrument.instrument_type}</p>
      <p><strong>Price:</strong> ${instrument.price}</p>
      <p><strong>Year Made:</strong> {instrument.year_made}</p>
      <Link href={`/collection/${instrument.id}`} style={{ color: "blue", textDecoration: "underline" }}>
        More
      </Link>
    </div>
  );
}
