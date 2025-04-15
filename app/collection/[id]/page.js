import Link from "next/link";
import styles from "../../../styles/instrument.module.css";

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
      <div className={styles.container}>
        <Link href="/collection" className={styles.backLink}>← Back to Collection</Link>
        <h2 className={styles.heading}>{instrument.instrument_name}</h2>
        <table className={styles.table}>
          <tbody>
            {Object.entries(instrument).map(([key, value]) => (
              <tr key={key}>
                <td className={styles.key}>{key}</td>
                <td className={styles.value}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
  