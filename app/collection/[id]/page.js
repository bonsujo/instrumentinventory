import Link from "next/link";
import { getAllInstruments, getInstrumentById } from "../../../lib/api";

export async function generateStaticParams() {
    const instruments = await getAllInstruments();
    return instruments.map(instrument => ({ id: String(instrument.id) }));
  }
  
  export default async function InstrumentDetail({ params }) {
    const instrument = await getInstrumentById(params.id);
  
    if (!instrument) {
      return <p>Instrument with ID {params.id} not found.</p>;
    }
  
    return (
      <div>
        <Link href="/collection">Back</Link>
        <h2>{instrument.instrument_name}</h2>
        <table>
          <tbody>
            <tr>
              <td><strong>ID</strong></td>
              <td>{instrument.id}</td>
            </tr>
            <tr>
              <td><strong>Name</strong></td>
              <td>{instrument.instrument_name}</td>
            </tr>
            <tr>
              <td><strong>Type</strong></td>
              <td>{instrument.instrument_type}</td>
            </tr>
            <tr>
              <td><strong>Price</strong></td>
              <td>${instrument.price}</td>
            </tr>
            <tr>
              <td><strong>Year Made</strong></td>
              <td>{instrument.year_made}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  