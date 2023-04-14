function TableRow({ item1, item2 }) {
  return (
    <tr key={item1.id}>
      <td className="tdItemOne">
        <button className={`place ${!item1.isBusy ? "Available" : "Busy"}`}>
          {item1.id}
        </button>
      </td>
      <td className="tdItemTwo">
        <button className={`place ${!item2.isBusy ? "Available" : "Busy"}`}>
          {item2.id}
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
