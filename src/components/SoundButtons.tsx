import aJugarSound from "../assets/sounds/jugar.mp3";
import correctoSound from "../assets/sounds/correcto.mp3";
import incorrectoSound from "../assets/sounds/incorrecto.mp3";
import triunfoSound from "../assets/sounds/triunfo.mp3";

const SoundButtons = () => {
  const reproducir = (sonido: string) => {
    const audio = new Audio(sonido);
    audio.play();
  };

  return (
    <div style={{position: 'absolute', display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "-100px", marginBottom: "100px" }}>
      <button onClick={() => reproducir(aJugarSound)}>🎬 A Jugar</button>
      <button onClick={() => reproducir(correctoSound)}>✅ Correcto</button>
      <button onClick={() => reproducir(incorrectoSound)}>❌ Incorrecto</button>
      <button onClick={() => reproducir(triunfoSound)}>🏆 Triunfo</button>
    </div>
  );
};

export default SoundButtons;
