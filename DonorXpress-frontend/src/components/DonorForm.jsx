import { useState } from "react";
import { addDonor } from "../api";

export default function DonorForm({ onAdd }) {
    const [form, setForm] = useState({
        name: "",
        bloodGroup: "",
        location: "",
        available: true,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDonor(form);
        onAdd();
        setForm({ name: "", bloodGroup: "", location: "", available: true });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
                placeholder="Blood Group"
                value={form.bloodGroup}
                onChange={(e) =>
                    setForm({ ...form, bloodGroup: e.target.value })
                }
            />
            <input
                placeholder="Location"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
            <button type="submit">Add Donor</button>
        </form>
    );
}
