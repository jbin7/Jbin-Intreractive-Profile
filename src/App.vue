<script setup>
import GameDisplay from './components/GameDisplay.vue'
import GameBoy from './components/GameBoy.vue'


</script>

<template>
  <div>
    <div class="mobile">
      <game-boy/>
    </div>
  </div>  
  <!-- <game-display/> -->
</template>

<style scoped lang="scss">
.mobile {
  display: flex; justify-content: center;
}
</style>
