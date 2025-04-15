import Link from "next/link";

export async function generateStaticParams() {
  const res = await fetch('http://localhost:4000/instruments');
  const instruments = await res.json();
  return instruments.slice(0, 10).map(({ id }) => ({ id: id.toString() }));
}
  
  export default async function InstrumentDetail({ params }) {
    const res = await fetch(`http://localhost:4000/instruments/${params.id}`);
    if (!res.ok) {
      return <div>No item with ID {params.id} exists.</div>;
    }
    const instrument = await res.json();

    return (
      <div>
        <Link href="/collection">Back</Link>
        <h2>{instrument.instrument_name}</h2>
        <table>
          <tbody>
            {Object.entries(instrument).map(([key, value]) => (
              <tr key={key}><td>{key}</td><td>{value}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  