import { useState, useEffect } from "react";

export default function useContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((contacts) => setContacts(contacts));
  }, []);

  function deleteContact(id) {
    const newContacts = contacts.filter((item) => item.id !== id);
    setContacts(newContacts);
  }
  function addContact(contact) {
    const newContacts = [...contacts, contact];
    setContacts(newContacts);
  }

  return {
    contacts,
    deleteContact,
    addContact,
  };
}
