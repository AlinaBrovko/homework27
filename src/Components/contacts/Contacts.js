import Item from "./Item";
import useContacts from "./useContacts"
import Form from "../form/Form";

export default function Contacts() {
  const { contacts, deleteContact, addContact } = useContacts();
  return (
    <div>
      <table className="contacts">
        <tbody>
          {contacts.map((item) => (
            <Item item={item} key={item.id} deleteContact={deleteContact} />
          ))}
        </tbody>
      </table>
      <Form addContact={addContact}/>
    </div>
  );
}
