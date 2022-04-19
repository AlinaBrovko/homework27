import "./Form.css";
import { useState } from "react";
import useForm from "./useForm";

export default function Form({ addContact }) {
  const [contact, setContact] = useState({
    name: "",
    surname: "",
    phone: "",
  });

  const { form, hideForm, showForm } = useForm();

  function changeHeandler(e) {
    const newContact = contact;
    newContact[e.target.name] = e.target.value;
    console.log(newContact);
    setContact({ ...contact, [e.target.name]: e.target.value });
  }
  function saveContact(e) {
    e.preventDefault();
    contact.id = new Date().getTime();
    contact.name += " " + contact.surname;
    addContact(contact);
    hideForm();
    setContact({
      name: "",
      surname: "",
      phone: "",
    });
  }
  return form ? (
    <div>
      <div className="new-contact">
        <div className="new-contact-body">
          <div className="new-contact-header">
            <h4>Новий контакт</h4>
          </div>
          <form onSubmit={saveContact}>
            <input
              id="name"
              name="name"
              value={contact.name}
              onChange={changeHeandler}
              placeholder="Імʼя"
              required
            />
            <input
              id="surname"
              name="surname"
              value={contact.surname}
              onChange={changeHeandler}
              placeholder="Прізвище"
              required
            />
            <input
              id="phone"
              name="phone"
              value={contact.phone}
              onChange={changeHeandler}
              placeholder="Номер телефону"
              pattern="\+?[0-9\s\-\(\)]+"
              required
            />
            <button type="submit">ТАК</button>
            <button type="reset" onClick={hideForm}>
              НІ
            </button>
          </form>
        </div>
      </div>
      <button onClick={showForm}>Додати</button>
    </div>
  ) : (
    <button onClick={showForm}>Додати</button>
  );
}
