import Link from "next/link";
import { getAllInstruments } from "../../lib/api";
import DeleteInstrument from "./DeleteInstrument";

export default async function AdminPage() {
  const instruments = await getAllInstruments();

  return (
    <div>
      <h1>Admin Panel</h1>
      <Link href="/admin/create" style={{ display: "inline-block", marginBottom: "20px", color: "blue" }}>
        Create New
      </Link>

      <table border="1" cellPadding="10" cellSpacing="0" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Year Made</th>
            <th>D</th>
            <th>E</th>
          </tr>
        </thead>
        <tbody>
          {instruments.map((instrument) => (
            <tr key={instrument.id}>
              <td>{instrument.id}</td>
              <td>{instrument.instrument_name}</td>
              <td>{instrument.instrument_type}</td>
              <td>${instrument.price}</td>
              <td>{instrument.year_made}</td>
              <td><DeleteInstrument id={instrument.id} /></td>
              <td>
                <Link href={`/admin/edit/${instrument.id}`} style={{ color: "blue" }}>
                  E
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
