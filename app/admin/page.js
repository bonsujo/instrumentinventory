import Link from "next/link";
import { deleteInstrument } from "../../lib/actions";
import styles from "../../styles/admin.module.css";

export default async function AdminPage() {
  const res = await fetch('http://localhost:4000/instruments');
  const instruments = await res.json();

  const instrumentList = Array.isArray(instruments) ? instruments : [];
  console.log(instruments)
  return (
    <div className={styles.container}>
      <Link href="/admin/create" className={styles.createLink}>
        + Create New
      </Link>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th><th>Name</th><th>Type</th><th>Price</th><th>Year</th><th>D</th><th>E</th>
          </tr>
        </thead>
        <tbody>
          {instrumentList.map(i => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.instrument_name}</td>
              <td>{i.instrument_type}</td>
              <td>{i.price}</td>
              <td>{i.year_made}</td>
              <td>
                <form action={deleteInstrument.bind(null, i.id)}>
                  <button type="submit" className={styles.buttonDelete}>D</button>
                </form>
              </td>
              <td>
                <Link href={`/admin/edit/${i.id}`} className={styles.editLink}>E</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
