import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../tasks/taskSlice";
import { toast } from 'react-toastify';

function TableRow({ item1, item2, ocuped, actualDate }) {
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.users).userState;
  const navigate = useNavigate();


  const handleNotification = () => {
    toast.warning('¡El espacio que quiere reservar ya esta ocupado!', { autoClose: 2000 });
};

  //console.log(ocuped,"dar", actualDate)
  //console.log(item2);
  return (
    <tr key={item1.id}>
      <td className="tdItemOne" hidden={item1.status == "Shown" ? false : true}>
        <button
          onClick={() => {
            !ocuped.includes(item1.num)
              ? navigate(
                usuario.rol == "Client" ? "/reservaCliente" : usuario.rol == "Guard" ? "/reservas" : ""
              )
<<<<<<< HEAD
              : handleNotification();
=======
              :  handleNotification();
>>>>>>> a7eacc456a396d9fd5ff8778336df1d49cc56c07
            dispatch(
              addTask({
                plaza: item1.num,
                id: item1.id,
                entryDate: actualDate.entryDate,
                entryTime: actualDate.entryTime,
                retirementTime: actualDate.retirementTime,
              })
            );
          }}
          className={`place ${!ocuped.includes(item1.num) ? "Available" : "Busy"
            }`}
        >
          {item1.num}
        </button>
      </td>
      {item2 && (
        <td
          className="tdItemTwo"
          hidden={item2.status == "Shown" ? false : true}
        >
          <button
            onClick={() => {
              !ocuped.includes(item2.num)
                ? navigate(
                  usuario.rol == "Client" ? "/reservaCliente" : usuario.rol == "Guard" ? "/reservas" : ""
                )
                : handleNotification();
              dispatch(
                addTask({
                  plaza: item2.num,
                  id: item2.id,
                  entryDate: actualDate.entryDate,
                  entryTime: actualDate.entryTime,
                  retirementTime: actualDate.retirementTime,
                })
              );
            }}
            className={`place ${!ocuped.includes(item2.num) ? "Available" : "Busy"
              }`}
          >
            {item2.num}
          </button>
        </td>
      )}
    </tr>
  );
}

export default TableRow;
