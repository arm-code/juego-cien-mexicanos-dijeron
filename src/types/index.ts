export interface Respuesta {
  texto: string;
  puntos: number;
}

export interface Pregunta {
  pregunta: string;
  respuestas: Respuesta[];
}

export type Equipo = "equipo1" | "equipo2";

