import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasks/taskSlice";

function TableRow({ item1, item2 }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <tr key={item1.id}>
      <td className="tdItemOne">
        <button
          onClick={() => {!item1.isBusy? navigate("/listaReserva"):""; dispatch(addTask(item1.num))}}
          className={`place ${!item1.isBusy ? "Available" : "Busy"}`}
        >
          {item1.num}
        </button>
      </td>
      {item2 && (
        <td className="tdItemTwo">
          <button
            onClick={() => { !item2.isBusy? navigate("/listaReserva"):""; dispatch(addTask(item2.num))}}
            className={`place ${!item2.isBusy ? "Available" : "Busy"}`}
          >
            {item2.num}
          </button>
        </td>
      )}
    </tr>
  );
}

export default TableRow;
