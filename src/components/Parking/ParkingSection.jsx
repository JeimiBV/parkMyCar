import TableRow from "./TableRow";

function ParkingSection({ data }) {
  const numRows = Math.ceil(data.length / 2);
  const tableRows = [];

  for (let i = 0; i < numRows; i++) {
    const item1 = data[i * 2];
    const item2 = data[i * 2 + 1];
    tableRows.push(<TableRow key={i} item1={item1} item2={item2} />);
  }

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2" className="tittleCentered">
            Automovil
          </th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
}

export default ParkingSection;
