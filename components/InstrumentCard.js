import Link from "next/link";

export default function InstrumentCard({ instrument }) {
  return (
    <div style={{
      width: "250px",
      border: "1px solid #ccc",
      padding: "16px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      flexShrink: 0 // prevents card from shrinking
    }}>
      <h2 style={{ margin: "0 0 8px" }}>{instrument.instrument_name}</h2>
      <p><strong>Type:</strong> {instrument.instrument_type}</p>
      <p><strong>Price:</strong> ${instrument.price}</p>
      <p><strong>Year Made:</strong> {instrument.year_made}</p>
      <Link href={`/collection/${instrument.id}`} style={{ color: "#0070f3", textDecoration: "underline" }}>
        More
      </Link>
    </div>
  );
}
