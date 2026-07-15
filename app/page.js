"use client";

import { useState } from "react";

export default function Home() {
  const [dag, setDag] = useState("");
  
  const tijden = {
    dinsdag: [
      "10:00 - 11:00",
      "11:00 - 12:00",
      "13:30 - 14:30",
      "15:30 - 16:30",
      "16:30 - 17:30"
    ],
    woensdag: [
      "10:00 - 11:00",
      "11:00 - 12:00",
      "13:30 - 14:30",
      "15:30 - 16:30",
      "16:30 - 17:30"
    ],
    vrijdag: [
      "10:00 - 11:00",
      "11:00 - 12:00",
      "13:30 - 14:30",
      "15:30 - 16:30",
      "16:30 - 17:30"
    ],
    donderdag: [
      "10:00 - 11:00",
      "11:00 - 12:00"
    ]
  };

  return (
    <main style={{
      maxWidth:"700px",
      margin:"auto",
      padding:"40px",
      fontFamily:"Arial"
    }}>

      <h1 style={{color:"green"}}>
        Electro Center Billen
      </h1>

      <h2>Afspraak maken</h2>

      <label>Kies een dag:</label><br/>

      <select 
        onChange={(e)=>setDag(e.target.value)}
      >
        <option>Kies...</option>
        <option value="dinsdag">Dinsdag</option>
        <option value="woensdag">Woensdag</option>
        <option value="donderdag">Donderdag</option>
        <option value="vrijdag">Vrijdag</option>
        <option value="zaterdag">Zaterdag (aanvraag)</option>
      </select>

      <br/><br/>

      {dag && tijden[dag] && (
        <>
        <label>Kies uur:</label><br/>

        <select>
          {tijden[dag].map((tijd)=>(
            <option key={tijd}>
              {tijd}
            </option>
          ))}
        </select>
        </>
      )}

      <br/><br/>

      <input placeholder="Naam" required/><br/><br/>
      <input placeholder="Telefoonnummer" required/><br/><br/>
      <input placeholder="E-mail" required/><br/><br/>
      <input placeholder="Adres" required/><br/><br/>
      <input placeholder="Woonplaats" required/><br/><br/>

      <textarea 
        placeholder="Waarvoor is de afspraak?"
        rows="4"
      />

      <br/><br/>

      <button>
        Afspraak aanvragen
      </button>

    </main>
  );
}
