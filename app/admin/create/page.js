import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreatePage(){
    const [form, setForm] = useState({ id: "", instrument_name: "", instrument_type: "", price: 0, instrument_year: 0 });
    const router = useRouter();


    const handleChange = (e) => {
        const { name, value, type} = e.target; 
        setForm({ ...form, [name]: type === "checkbox" ? checked : value})
    }
}