import { useState } from "react";

export default function NuevoDiv() {
  const guardias = [
    { id: 1, name: "Juan" },
    { id: 2, name: "Pedro" },
    { id: 3, name: "María" },
    { id: 4, name: "Ana" },
  ];
  const [selectedGuard, setSelectedGuard] = useState("");
  const handleGuardSelection = (event) => {
    setSelectedGuard(event.target.value);
  };

  return (
    <div>
      <select
        id="guardia"
        name="guardia"
        value={selectedGuard}
        onChange={handleGuardSelection}
      >
        <option value="">--Seleccione una guardia--</option>
        {guardias.map((guardia) => (
          <option key={guardia.id} value={guardia.name}>
            {guardia.name}
          </option>
        ))}
      </select>
    </div>
  );
}
