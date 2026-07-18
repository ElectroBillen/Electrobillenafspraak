"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Book() {
  const params = useSearchParams();

  const date = params.get("date");
  const time = params.get("time");

  // voorkomt crash
  if (!date || !time) {
    return <div style={{ padding: 20 }}>Geen geldige afspraak gekozen</div>;
  }

  const formattedDate = new Date(date).toLocaleDateString("nl-BE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

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

    alert(`Afspraak geboekt op ${formattedDate} om ${time}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>
        Afspraak op {formattedDate} om {time}
      </h1>

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
