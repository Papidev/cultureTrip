<template>
  <div class="map-wrap">
    <a href="https://www.maptiler.com" class="watermark"
      ><img
        src="https://api.maptiler.com/resources/logo.svg"
        alt="MapTiler logo"
    /></a>
    <div ref="mapContainer" class="map"></div>
  </div>
</template>

<script setup lang="ts">
import { Map } from 'maplibre-gl'
import { shallowRef, onMounted, onUnmounted, ref } from 'vue'
import { initMap } from '@/utils/Map/Map'
// import { Query } from '../types/types'
// import { getAttractionsQuery } from '@/utils/map/Queries'

const mapContainer = shallowRef<HTMLElement | null>(null)
const map = shallowRef<Map | null>(null)
const selectedMarker = ref<string | null>(null)

// const { data: attractions } = await useAsyncQuery<Query>(getAttractionsQuery)

// watchEffect(() => {
//   if (attractions?.value && map?.value) {
//     attractions.value.attractions.data.forEach((attr) => {
//       const marker = new Marker().setLngLat([
//         attr.attributes.longitude,
//         attr.attributes.latitude,
//       ])
//       const markerElement = marker.getElement()
//       markerElement.id = attr.id
//       markerElement.addEventListener('click', (e) => {
//         const htmlElem = e.currentTarget as HTMLElement
//         selectedMarker.value = htmlElem.id
//       })
//       marker.addTo(map.value)
//     })
//   }
// })

onMounted(() => {
  map.value = initMap(mapContainer)
})

onUnmounted(() => {
  if (map.value) {
    map.value.remove()
  }
})
</script>

<style>
.map-wrap {
  position: relative;
  width: 100%;
  height: calc(100vh);
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
}

.watermark {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 999;
}

.marker {
  display: block;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
}
</style>
