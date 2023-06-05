<script setup>
import GameDisplay from './components/GameDisplay.vue'
import GameBoy from './components/GameBoy.vue'

let size = window.innerWidth

</script>

<template>
  <div>
    <div class="mobile" v-if="size < 600" >
      <game-boy/>
    </div>
    <div v-else>
      <game-display/>
    </div>
  </div>  
  
</template>

<style scoped lang="scss">
.mobile {
  display: flex; justify-content: center;
}
</style>
