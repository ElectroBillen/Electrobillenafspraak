import { supabase } from "@/lib/supabase";

const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, email, reason } = form;

  const { error } = await supabase.from("appointments").insert([
    {
      date: selectedDate,
      time: selectedTime,
      name,
      email,
      reason,
    },
  ]);

  if (error) {
    console.error(error);
    alert("Fout ❌");
  } else {
    alert("Opgeslagen ✅");
  }
};
