// interface Props {
//   nombre: string;
//   puntaje: number;
//   onSumar: () => void;
//   onRestar: () => void;
// }

// export default function ScoreBoard({ nombre, puntaje, onSumar, onRestar }: Props) {
//   return (
//     <div className="scoreboard">
//       <h2>{nombre}</h2>
//       <div className="puntaje">{puntaje}</div>
//       <div className="controles">
//         <button onClick={onSumar}>+</button>
//         <button onClick={onRestar}>−</button>
//       </div>
//     </div>
//   );
// }


interface Props {
  nombre: string;
  puntaje: number;
  errores: number;
  imagen: string;
}

export default function ScoreBoard({ nombre, puntaje, errores, imagen }: Props) {
  return (
    <div className="scoreboard">
      <h2>{nombre}</h2>
      <div className="puntaje">{puntaje}</div>
      <div className="errores">
        {Array.from({ length: errores }).map((_, i) => (
          <span key={i} style={{ fontSize: "2rem", color: "red" }}>❌</span>
        ))}
      </div>
      <img
        src={imagen}
        alt={`Imagen de ${nombre}`}
        style={{ marginTop: "1rem", width: "100px", height: "auto" }}
      />
    </div>
  );
}
