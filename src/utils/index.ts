import { createContext } from "react";

const context: {
  map: mapboxgl.Map | null,
  draw: MapboxDraw | null
} = {
  map: null,
  draw: null,
}

export const MapContext = createContext(context);

export default {
  
}



