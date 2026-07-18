"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Book() {
  const params = useSearchParams();
  const day = params.get("day");

  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.reason) {
      alert("Alles invullen!");
      return;
    }

    alert(`Afspraak geboekt op dag ${day}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Afspraak voor dag {day}</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Naam"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />
        <br /><br />

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />
        <br /><br />

        <textarea
          placeholder="Reden afspraak"
          value={form.reason}
          onChange={(e) =>
            setForm({ ...form, reason: e.target.value })
          }
        />
        <br /><br />

        <button type="submit">Boek afspraak</button>
      </form>
    </div>
  );
}
