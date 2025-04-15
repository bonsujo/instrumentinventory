"use client";
import { useState } from "react";
import { updateInstrument } from "../lib/actions";

export default function EditForm({ instrument }) {
    const [formData, setFormData] = useState({ ...instrument });
    const [errors, setErrors] = useState([]);
  
    const validate = () => {
      const validationErrors = [];
  
      // 1. instrument_name must be between 3 and 40 characters
      if (
        formData.instrument_name.trim().length < 3 ||
        formData.instrument_name.trim().length > 40
      ) {
        validationErrors.push("Instrument name must be between 3 and 40 characters in length.");
      }
  
      // 2. price must be a positive number less than 10,000
      if (formData.price <= 0 || formData.price >= 10000) {
        validationErrors.push("Price must be a positive number less than 10,000.");
      }
  
      // 3. year_made must be between 1900 and 2025
      if (formData.year_made < 1900 || formData.year_made > 2025) {
        validationErrors.push("Year made must be between 1900 and 2025.");
      }
  
      return validationErrors;
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: name === 'price' || name === 'year_made' ? Number(value) : value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const validationErrors = validate();
      if (validationErrors.length > 0) {
        setErrors(validationErrors);
        return;
      }
  
      await updateInstrument(formData);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        {errors.length > 0 && (
          <ul style={{ color: 'red' }}>
            {errors.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        )}
        <label>
          Name:
          <input
            name="instrument_name"
            value={formData.instrument_name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Type:
          <input
            name="instrument_type"
            value={formData.instrument_type}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            name="price"
            type="number"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Year Made:
          <input
            name="year_made"
            type="number"
            value={formData.year_made}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Update Instrument</button>
      </form>
    );
  }