import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  addTask } from "../../tasks/taskSlice";
import { addDate } from "../../tasks/dateSlice";

function TableRow({ item1, item2, ocuped, actualDate }) {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.users).userState;
  const navigate = useNavigate();
  return (
    <tr key={item1.id}>
      <td className="tdItemOne">
        <button
          onClick={() => {!ocuped.includes(item1.num)? navigate(usuario.rol=="Client"?"/reservaCliente":"/reservas"):""; dispatch(addTask({
            "plaza":item1.num,
            "id":item1.id,
            "entryDate":actualDate.entryDate,
            "entryTime":actualDate.entryTime,
            "retirementTime":actualDate.retirementTime
          }))
        }}
          className={`place ${!ocuped.includes(item1.num) ? "Available" : "Busy"}`}
        >
          {item1.num}
        </button>
      </td>
      {item2 && (
        <td className="tdItemTwo">
          <button
            onClick={() => { !ocuped.includes(item2.num)? navigate(usuario.rol=="Client"?"/reservaCliente":"/reservas"):""; dispatch(addTask({
              "plaza":item2.num,
              "id":item2.id,
              "entryDate":actualDate.entryDate,
              "entryTime":actualDate.entryTime,
              "retirementTime":actualDate.retirementTime
            }))}}
            className={`place ${!ocuped.includes(item2.num) ? "Available" : "Busy"}`}
          >
            {item2.num}
          </button>
        </td>
      )}
    </tr>
  );
}

export default TableRow;
