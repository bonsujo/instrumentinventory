'use client';

import { deleteInstrument } from "../lib/api";

export default function InstrumentTable({ instrument }) {
  return (
    <tr>
      <td>{instrument.id}</td>
      <td>{instrument.instrument_name}</td>
      <td>{instrument.instrument_type}</td>
      <td>${instrument.price}</td>
      <td>{instrument.year_made}</td>
      <td>
        <form action={() => deleteInstrument(instrument.id)}>
          <button
            type="submit"
            style={{
              border: 'none',
              background: 'none',
              color: 'red',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            D
          </button>
        </form>
      </td>
      <td>
        <a
          href={`/admin/edit/${instrument.id}`}
          style={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          E
        </a>
      </td>
    </tr>
  );
}
