"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [weekOffset, setWeekOffset] = useState(0);

  const getWeek = () => {
    const today = new Date();
    const start = new Date(today);

    // start van week (maandag)
    start.setDate(today.getDate() - today.getDay() + 1 + weekOffset * 7);

    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      return d;
    });
  };

  const week = getWeek();

  const formatDate = (date) => {
    return date.toLocaleDateString("nl-BE", {
      day: "2-digit",
      month: "2-digit",
    });
  };

  const timeSlots = ["09:00", "10:00", "11:00", "13:00", "14:00"];

  return (
    <div style={{ padding: 20 }}>
      <h1>Boek een afspraak</h1>

      <button onClick={() => setWeekOffset(weekOffset - 1)}>←</button>
      <button onClick={() => setWeekOffset(weekOffset + 1)}>→</button>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        {week.map((day, index) => (
          <div key={index}>
            <h3>{formatDate(day)}</h3>

            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() =>
                  router.push(
                    `/book?date=${day.toISOString()}&time=${time}`
                  )
                }
                style={{ display: "block", marginBottom: 5 }}
              >
                {time}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
