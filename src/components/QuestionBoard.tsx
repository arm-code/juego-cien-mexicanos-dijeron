import { Respuesta } from "../types";
import correctoSound from "../assets/sounds/correcto.mp3";

interface Props {
  pregunta: string;
  respuestas: Respuesta[];
  reveladas: number[];
  onRevelar: (i: number) => void;
}

export default function QuestionBoard({
  pregunta,
  respuestas,
  reveladas,
  onRevelar,
}: Props) {
  const reproducirCorrecto = () => {
    const audio = new Audio(correctoSound);
    audio.play();
  };

  return (
    <section className="board">
      <h2 className="pregunta">{pregunta}</h2>

      <ul className="lista-respuestas">
        {respuestas.map((resp, i) => (
          <li key={i} className="respuesta">
            {reveladas.includes(i) ? (
              <>
                <span className="texto">{resp.texto}</span>
                <span className="puntos">{resp.puntos}</span>
              </>
            ) : (
              <button
                onClick={() => {
                  reproducirCorrecto();
                  onRevelar(i);
                }}
              >
                Mostrar
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
