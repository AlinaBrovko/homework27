import { useState } from "react";

export default function useForm() {
  const [form, setForm] = useState(false);

  function hideForm() {
    setForm(false);
  }
  function showForm() {
    setForm(true);
  }

  return {
    form,
    hideForm,
    showForm,
  };
}
