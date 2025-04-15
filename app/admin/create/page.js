import { createInstrument } from "../../../lib/actions";

export default function CreatePage() {
  return (
    <form action={createInstrument}>
      <h2>Create New Instrument</h2>
      
      <label>
        ID:
        <input name="id" type="text" required />
      </label>
      <br />
      <label>
        Name:
        <input name="instrument_name" type="text" required />
      </label>
      <br />
      <label>
        Type:
        <input name="type" type="text" required />
      </label>
      <br />
      <label>
        Price:
        <input name="price" type="number" required />
      </label>
      <br />
      <label>
        Year Made:
        <input name="year_made" type="number" required />
      </label>
      <br />
      <button type="submit">Create</button>
    </form>
  );
}
