<template>
  <TheHeader />
  <RouterView />
</template>


<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue';
</script>

<style scoped>

</style>
