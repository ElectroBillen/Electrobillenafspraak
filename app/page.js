"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/api/book", {
      method: "POST",
      body: JSON.stringify({ name, email }),
    });

    alert("Afspraak aangevraagd!");
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>Afspraak maken</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Naam"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <button type="submit">Boek</button>
      </form>
    </main>
  );
}
