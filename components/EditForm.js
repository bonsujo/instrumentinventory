import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditForm({ instrument }) {
    const [form, setForm] = useState(instrument)
    const router = useRouter();


    const handleChange = (e) => {
        const {name, value, type, checked } = e.target
        setForm({ ...form, [name]: type === "checkbox" ? checked : value})
    } 


const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:4000/instruments/${form.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    router.push("/admin");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="id" value={form.id} onChange={handleChange} disabled />
      <input name="instrument_name" value={form.instrument_name} onChange={handleChange} />
      <input name="instrument_type" value={form.instrument_type} onChange={handleChange} />
      <input name="price" type="number" value={form.price} onChange={handleChange} />
      <input name="year_made" type="number" value={form.year_made} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
}