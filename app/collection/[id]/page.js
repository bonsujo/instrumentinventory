import Link from "next/link";
import { getAllInstruments, getInstrumentById } from "../../lib/api";

export async function generateStaticParams() {
  const instruments = await getAllInstruments();
  return instruments.slice(0, 10).map(instr => ({ id: instr.id }));
}

export default async function InstrumentDetail({ params }) {
  const instrument = await getInstrumentById(params.id);

  if (!instrument) {
    return <p>Instrument with ID {params.id} not found.</p>;
  }

  return (
    <div>
      <Link href="/collection">Back</Link>
      <table>
        <tbody>
          {Object.entries(instrument).map(([key, value]) => (
            <tr key={key}>
              <td><strong>{key}</strong></td>
              <td>{value.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
