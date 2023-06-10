import TableRow from "./TableRow";

function ParkingSection({ data, ocuped, actualDate }) {
  const numRows = Math.ceil(data.length / 2);
  const tableRows = [];
  for (let i = 0; i < numRows; i++) {
    const item1 = data[i * 2];
    const item2 = data[i * 2 + 1];
    tableRows.push(
      <TableRow
        key={i}
        item1={item1}
        item2={item2}
        ocuped={ocuped}
        actualDate={actualDate}
      />
    );
  }

  return (
    <table hidden={data[0].status == "Hidden" ? true : false}>
      <thead>
        <tr>
          <th colSpan="2" className="tittleCentered">
            Automóvil
          </th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}

export default ParkingSection;
