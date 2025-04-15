"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../../../../styles/edit.module.css";

export default function EditForm({ instrument }) {
  const [form, setForm] = useState({ ...instrument });
  const [errors, setErrors] = useState([]);
  const router = useRouter();

  const validate = () => {
    const errs = [];
    if (form.instrument_name.length < 3 || form.instrument_name.length > 40)
      errs.push("Instrument name must be between 3 and 40 characters.");
    if (form.price <= 0 || form.price >= 10000)
      errs.push("Price must be between $1 and $10,000.");
    if (form.year_made < 1900 || form.year_made > 2025)
      errs.push("Year made must be between 1900 and 2025.");
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }

    await fetch(`http://localhost:4000/instruments/${form.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    router.push("/admin");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <h2>Edit Instrument</h2>
      {errors.length > 0 && (
        <ul>
          {errors.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      )}
      {Object.entries(form).map(([key, val]) => (
        <div key={key}>
          <label>{key}</label>
          <input
            value={val}
            onChange={(e) =>
              setForm({
                ...form,
                [key]: ["price", "year_made", "id"].includes(key)
                  ? Number(e.target.value)
                  : e.target.value,
              })
            }
          />
        </div>
      ))}
      <button type="submit">Submit Changes</button>
    </form>
  );
}
