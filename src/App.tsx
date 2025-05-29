import { useState } from 'react';
import { preguntas } from './data/preguntas';
import QuestionBoard from './components/QuestionBoard';
import ScoreBoard from './components/ScoreBoard';
import PointControl from './components/PointControl';
import { Equipo } from './types';
import './App.css';
import equipo1Img from './assets/image1.png';
import equipo2Img from './assets/image3.png';
import img from './assets/image.png';
import SoundButtons from './components/SoundButtons';
import incorrectoSound from './assets/sounds/incorrecto.mp3';


function App() {
  const [indice, setIndice] = useState(0);
  const [reveladas, setReveladas] = useState<number[]>([]);
  const [equipoSeleccionado, setEquipoSeleccionado] =
    useState<Equipo>('equipo1');
  const [equipo1, setEquipo1] = useState(0);
  const [equipo2, setEquipo2] = useState(0);
  const [errores1, setErrores1] = useState(0);
  const [errores2, setErrores2] = useState(0);

  const actual = preguntas[indice];

  const revelar = (i: number) => {
    if (!reveladas.includes(i)) setReveladas([...reveladas, i]);
  };

  const siguiente = () => {
    setIndice((indice + 1) % preguntas.length);
    setReveladas([]);
    setErrores1(0);
    setErrores2(0);
  };

  const reproducirIncorrecto = () => {
  const audio = new Audio(incorrectoSound);
  audio.play();
};


  const agregarPuntos = (eq: Equipo, puntos: number) => {
    if (eq === 'equipo1') setEquipo1((p) => p + puntos);
    else setEquipo2((p) => p + puntos);
  };

  const registrarError = (eq: Equipo) => {
    if (eq === 'equipo1') {
      if (errores1 < 3) setErrores1(errores1 + 1);
    } else {
      if (errores2 < 3) setErrores2(errores2 + 1);
    }
  };

  const reiniciarPuntos = () => {
    if (equipoSeleccionado === 'equipo1') {
      setEquipo1(0);
      setErrores1(0);
    } else {
      setEquipo2(0);
      setErrores2(0);
    }
  };

  return (
    <main className='app'>
      <h1 className='titulo'>¡CIEN CORRUPTOS DIJERON!</h1>

      <div className='juego'>
        <ScoreBoard
          nombre='Equipo 1'
          puntaje={equipo1}
          errores={errores1}
          imagen={equipo1Img}
        />

        <QuestionBoard
          pregunta={actual.pregunta}
          respuestas={actual.respuestas}
          reveladas={reveladas}
          onRevelar={revelar}
        />

        <ScoreBoard
          nombre='Equipo 2'
          puntaje={equipo2}
          errores={errores2}
          imagen={equipo2Img}
        />

        <img
          src={img}
          style={{
            position: 'absolute',
            marginLeft: '80%',
            marginTop: '300px',
            width: 'auto',
            height: '200px',
          }}
        />
      </div>

      <PointControl
        onAdd={agregarPuntos}
        equipoSeleccionado={equipoSeleccionado}
        setEquipoSeleccionado={setEquipoSeleccionado}
        onReset={reiniciarPuntos}
      />

      <div className='controles-extras'>
  <button
    onClick={() => {
      reproducirIncorrecto();
      registrarError('equipo1');
    }}
  >
    ❌ Error Equipo 1
  </button>

  <button
    onClick={() => {
      reproducirIncorrecto();
      registrarError('equipo2');
    }}
  >
    ❌ Error Equipo 2
  </button>
</div>

      <SoundButtons />

      <button className='siguiente' onClick={siguiente}>
        Siguiente pregunta
      </button>
    </main>
  );
}

export default App;
