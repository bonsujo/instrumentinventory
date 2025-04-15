import Link from "next/link";

export default async function CollectionPage() {
  const res = await fetch('http://localhost:4000/instruments');
  const instruments = await res.json();

  return (
    <div>
      <h1>Instrument Collection</h1>
      <ul>
        {instruments.map(({ id, instrument_name }) => (
          <li key={id}>
            {id}: {instrument_name} - <Link href={`/collection/${id}`}>more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}