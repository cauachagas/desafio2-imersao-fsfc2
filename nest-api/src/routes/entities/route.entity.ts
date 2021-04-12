// Usos de Intefaces
export interface Route {
  title: string;
  startPosition: StartPosition;
  endPosition: EndPosition;
}

export interface StartPosition {
  lat: number;
  lng: number;
}

export interface EndPosition {
  lat: number;
  lng: number;
}
