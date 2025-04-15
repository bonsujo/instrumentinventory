"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatePage() {
  const [form, setForm] = useState({
    id: "",
    instrument_name: "",
    instrument_type: "",
    price: 0,
    year_made: new Date().getFullYear()
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:4000/instruments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    router.push("/admin");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Instrument</h2>
      <input name="id" placeholder="ID" onChange={handleChange} required />
      <input name="instrument_name" placeholder="Name" onChange={handleChange} required />
      <input name="instrument_type" placeholder="Type" onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" onChange={handleChange} required />
      <input name="year_made" type="number" placeholder="Year Made" value={form.year_made} onChange={handleChange} required />
      <button type="submit">Create</button>
    </form>
  );
}
