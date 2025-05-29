import { useState } from "react";
import { Equipo } from "../types";

interface Props {
  onAdd: (equipo: Equipo, puntos: number) => void;
  equipoSeleccionado: Equipo;
  setEquipoSeleccionado: (equipo: Equipo) => void;
  onReset: () => void;
}

export default function PointControl({
  onAdd,
  equipoSeleccionado,
  setEquipoSeleccionado,
  onReset,
}: Props) {
  const [puntos, setPuntos] = useState(0);

  const agregar = () => {
    if (puntos > 0) {
      onAdd(equipoSeleccionado, puntos);
      setPuntos(0);
    }
  };

  return (
    <div className="point-control">
      <select
        value={equipoSeleccionado}
        onChange={(e) => setEquipoSeleccionado(e.target.value as Equipo)}
      >
        <option value="equipo1">Equipo 1</option>
        <option value="equipo2">Equipo 2</option>
      </select>

      <input
        type="number"
        value={puntos}
        onChange={(e) => setPuntos(parseInt(e.target.value) || 0)}
        placeholder="Puntos"
      />
      <button onClick={agregar}>➕ Agregar puntos</button>
      <button onClick={onReset}>🧹 Limpiar</button>
    </div>
  );
}
