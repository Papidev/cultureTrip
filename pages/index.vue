<template>
  <MyMap />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css',
        },
      ],
    }
  },
})
</script>
