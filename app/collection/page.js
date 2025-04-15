import Link from "next/link";
import styles from "../../styles/collection.module.css";

export default async function CollectionPage() {
  const res = await fetch('http://localhost:4000/instruments');
  const instruments = await res.json();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Instrument Collection</h1>
      <ul className={styles.list}>
        {instruments.map(({ id, instrument_name }) => (
          <li key={id} className={styles.listItem}>
            <span>{id}: {instrument_name}</span>
            <Link href={`/collection/${id}`} className={styles.link}>More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}