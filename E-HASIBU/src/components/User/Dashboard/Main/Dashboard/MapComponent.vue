<template>
  <div id="map" class="w-1/2 h-72"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {

  name:"MapComponent",
  
  setup() {
    const map = ref(null);

    onMounted(() => {
      map.value = L.map('map', {
        zoom: 15,
        center: [-1.1393906526894229, 36.923879144596775],
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map.value);

      
      const markers = [
        { lat: 51.505, lng: -0.09, title: 'Marker 1' },
        { lat: 51.52, lng: -0.11, title: 'Marker 2' },
      ];

      markers.forEach((marker) => {
        L.marker([marker.lat, marker.lng]).bindPopup(marker.title).addTo(map.value);
      });
    });

    return { map }; 
  },
};
</script>
