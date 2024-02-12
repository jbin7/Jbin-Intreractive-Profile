<script setup>
import { ref, onMounted } from 'vue'
import GameDisplay from './GameDisplay.vue'

import "./gameboy.scss"

const el = ref()
onMounted(() => {     

})

function onClickRight() {
  const event = new KeyboardEvent('keydown', { keyCode: 39, key: 'ArrowRight' });
  window.dispatchEvent(event);  
}

function onClickLeft() {
  const event = new KeyboardEvent('keydown', { keyCode: 37, key: 'ArrowLeft' });
  window.dispatchEvent(event);
}

function onMouseUp() {
  const event = new KeyboardEvent('keyup', { keyCode: 37, key: 'ArrowLeft' });  
  window.dispatchEvent(event);  
}


</script>

<template>
  <div class="gameboy" id="GameBoy">    
    <div class="screen-area">
      
      <!-- <div class="power">
        <div class="indicator">
          <div class="led"></div>
          <span class="arc" style="z-index:2"></span>
          <span class="arc" style="z-index:1"></span>
          <span class="arc" style="z-index:0"></span>
        </div>
        POWER
      </div> -->
      
      <!-- <canvas class="display" id="mainCanvas"></canvas> -->
      <div class="display">
        <game-display/>        
      </div>
      

      
    </div>
    
    <!-- <div class="nintendo">Nintendo</div> -->
    <div class="label">
        <div class="brand">nintendo </div>
        <div class="title">GAME BOY</div>
        <div class="subtitle">
          <!-- 
          <span class="c">C</span>
          <span class="o1">O</span>
          <span class="l">L</span>
          <span class="o2">O</span>
          <span class="r">R</span> 
          -->
        </div>
      </div>

    <div class="controls">
      <div class="dpad">
        <div class="up" @mousedown="onClickRight" @mouseup="onMouseUp" @touchstart="onClickRight" @touchend="onMouseUp">
          <i class="fa fa-caret-up"></i>
        </div>
        <div class="right" @mousedown="onClickRight" @mouseup="onMouseUp" @touchstart="onClickRight" @touchend="onMouseUp" >
          <i class="fa fa-caret-right"></i>
        </div>
        <div class="down" @mousedown="onClickLeft" @mouseup="onMouseUp" @touchstart="onClickLeft" @touchend="onMouseUp">
          <i class="fa fa-caret-down"></i>
        </div>
        <div class="left" @mousedown="onClickLeft" @mouseup="onMouseUp" @touchstart="onClickLeft" @touchend="onMouseUp">
          <i class="fa fa-caret-left"></i>
        </div>
        <div class="middle"></div>
      </div>
      <div class="a-b">
        <div class="b" @mousedown="onClickLeft" @mouseup="onMouseUp" @touchstart="onClickLeft" @touchend="onMouseUp"></div>
        <div class="a" @mousedown="onClickRight" @mouseup="onMouseUp" @touchstart="onClickRight" @touchend="onMouseUp"></div>
      </div>
    </div>
    
    <div class="start-select">
      <div class="select" @mousedown="onClickLeft" @mouseup="onMouseUp" @touchstart="onClickLeft" @touchend="onMouseUp">SELECT</div>
      <div class="start" @mousedown="onClickRight" @mouseup="onMouseUp" @touchstart="onClickRight" @touchend="onMouseUp">START</div>
    </div>
    
    <!-- <div class="speaker">
      <div class="dot placeholder"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot placeholder"></div>
      
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>

      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>

      <div class="dot placeholder"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot closed"></div>
      <div class="dot open"></div>
      <div class="dot placeholder"></div>
    </div> -->
    
  </div>
</template>

<style scoped lang="scss">



</style>

