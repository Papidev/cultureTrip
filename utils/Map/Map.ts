// import { ShallowRef } from '@vue/reactivity'
import { Map } from 'maplibre-gl'
import { markRaw } from 'vue'
import { MAP_MIN_ZOOM } from '../Constants'

const longitude = 2.349902
const latitude = 48.852966
const zoom = 14
const styleUrl =
  'https://api.maptiler.com/maps/81778db5-d7c4-4ae9-9974-6d1eb0c8de02/style.json'
// const marker = 'https://maplibre.org/maplibre-gl-js-docs/assets/osgeo-logo.png';

export const initMap = (mapContainer: any) => {
  const apiKey = 'AgQ7PM8YD5zEZghQORfd'
  const initialState = { lng: longitude, lat: latitude, zoom }
  return markRaw(
    new Map({
      container: mapContainer.value,
      style: `${styleUrl}?key=${apiKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
      minZoom: MAP_MIN_ZOOM,
    })
  )
  // const map = new Map({
  //   container: 'map',
  //   style: `${styleUrl}?key=${apiKey}`,
  //   center: [initialState.lng, initialState.lat],
  //   zoom: initialState.zoom,
  //   minZoom: MAP_MIN_ZOOM,
  // });
  // return map;
}
