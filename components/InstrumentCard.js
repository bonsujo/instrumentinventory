import Link from "next/link";

export default function InstrumentCard({ instrument }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "1rem",
        background: "#f9f9f9",
      }}
    >
      <p><strong>ID:</strong> {instrument.id}</p>
      <p><strong>Name:</strong> {instrument.instrument_name}</p>
      <Link href={`/collection/${instrument.id}`} style={{ color: "blue" }}>
        more
      </Link>
    </div>
  );
}
