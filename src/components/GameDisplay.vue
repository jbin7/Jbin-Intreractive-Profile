<script setup>
import { ref, onMounted } from 'vue'
import {drawPixi} from './interactiveProfile/main'


const el = ref()
onMounted(() => {     
  drawPixi(el)
})


</script>

<template>
  <div ref="el" class="display-container">

  </div>
</template>

<style lang="scss">
  .display-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    canvas {
      border-radius: 8px;
    }
  }

  @media ( min-width: 460px ) {
    .display-container {
      position: fixed;
      left: 0%;
      top:0%;
      width: 100vw;
      height: 100vh;
      z-index: 9999;
      canvas {
        border-radius: 0px;
      }      
    }
  }  


</style>

