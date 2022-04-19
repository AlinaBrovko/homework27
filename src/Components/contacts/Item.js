export default function Item({ item, deleteContact }) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.phone}</td>
      <td
        className="delete"
        onClick={() => {
          deleteContact(item.id);
        }}
      >
        &#10006;
      </td>
    </tr>
  );
}
