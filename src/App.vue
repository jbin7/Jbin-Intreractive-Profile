<script setup>
import { reactive } from "vue"
import GameDisplay from './components/GameDisplay.vue'
import GameBoy from './components/GameBoy.vue'

const state = reactive({
  size: window.innerWidth
})

window.addEventListener('resize', ()=> {  
  state.size = window.innerWidth
});

</script>

<template>
  <div>    
    <div class="mobile" v-if="state.size < 500" >
      <game-boy/>
    </div>
    <div v-else>
      <game-display/>
    </div>
  </div>  
  
</template>

<style lang="scss">
html {
  background-color: #222222;
  width: 100%;
  height: 100%;
}
.mobile {
  display: flex; justify-content: center;
}

</style>
