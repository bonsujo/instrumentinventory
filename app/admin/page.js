import Link from "next/link";
import InstrumentTableCard from "../../components/InstrumentTable";
import { getAllInstruments } from "../../lib/api";

export default async function AdminPage() {
  const instruments = await getAllInstruments();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link href="/admin/create" style={{ color: "blue", textDecoration: "underline" }}>
        Create New
      </Link>
      <table border="1" cellPadding="8" style={{ marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Instrument Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Year Made</th>
            <th>D</th>
            <th>E</th>
          </tr>
        </thead>
        <tbody>
          {instruments.map((instrument) => (
            <InstrumentTableCard key={instrument.id} instrument={instrument} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
