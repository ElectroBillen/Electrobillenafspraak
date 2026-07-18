"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div style={{ padding: 20 }}>
      <h1>Kies een datum</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 10,
        }}
      >
        {days.map((day) => (
          <button
            key={day}
            onClick={() => router.push(`/book?day=${day}`)}
            style={{
              padding: 20,
              background: "#eee",
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
