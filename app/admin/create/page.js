import { createInstrument } from "../../../lib/actions";
import styles from "../../../styles/create.module.css";

export default function CreatePage() {
  return (
    <form action={createInstrument} className={styles.formContainer}>
      <h2>Create New Instrument</h2>

      <label>
        ID:
        <input name="id" type="text" required />
      </label>

      <label>
        Name:
        <input name="instrument_name" type="text" required />
      </label>

      <label>
        Type:
        <input name="type" type="text" required />
      </label>

      <label>
        Price:
        <input name="price" type="number" required />
      </label>

      <label>
        Year Made:
        <input name="year_made" type="number" required />
      </label>

      <button type="submit">Add Instrument</button>
    </form>
  );
}
