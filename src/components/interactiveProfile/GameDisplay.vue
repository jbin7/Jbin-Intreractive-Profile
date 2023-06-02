<script setup>
import { ref, onMounted } from 'vue'
import {drawPixi} from './main'


const el = ref()
onMounted(() => {    
  console.log('onmounted')
  drawPixi(el)
})


</script>

<template>
  <div ref="el" class="display-container">

  </div>
</template>

<style scoped>
  .display-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

