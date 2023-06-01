<script setup>
import * as PIXI from "pixi.js";
import { ref, onMounted } from 'vue'
import sample from '@/assets/img/sample.png'
import texture from '@/assets/img/megaman.png'
import {atlasData} from './spritesheet'

const el = ref()

onMounted(() => {    
  drawPixi()
})

async function drawPixi() {
  
  let standardWidth = el.value.clientWidth
  const heightRatio = 0.53
  
  

  const app = new PIXI.Application({ 
    background: 'black', 
    width: standardWidth,
    height: standardWidth*heightRatio,
    resolution: window.devicePixelRatio,
    autoDensity: true
  });
  el.value.appendChild(app.view);
  
const spritesheet = new PIXI.Spritesheet(
	PIXI.BaseTexture.from(texture),
	atlasData
);

await spritesheet.parse();

const run = new PIXI.AnimatedSprite(spritesheet.animations.run);
const standing = new PIXI.AnimatedSprite(spritesheet.animations.standing);

// run.animationSpeed = 0.08 ;
// run.play();
// run.x= 200
// run.y = 200
// run.width = run.width*(standardWidth/(standardWidth/1))
// run.height = run.height*(standardWidth/800)
// app.stage.addChild(run);

standing.animationSpeed = 0.1 ;
standing.play();
standing.x = standardWidth/2
standing.y = standardWidth*heightRatio/1.3
standing.width = standing.width*2
standing.height = standing.height*2
app.stage.addChild(standing);

  // let sprite = PIXI.Sprite.from(sample);
  // sprite.x = standardWidth/2.5
  // sprite.width=standardWidth/7
  // sprite.height=sprite.width
  // app.stage.addChild(sprite);

  app.ticker.add((delta) => {    
    
  });

  // 애플리케이션 크기 조정 함수
  function resizeApp() {    
    
    app.view.style.width = el.value.clientWidth + 'px';
    app.view.style.height = (el.value.clientWidth * heightRatio) + 'px';
    // if(el.value.clientWidth) {
    //   app.renderer.resize(el.value.clientWidth, el.value.clientWidth*heightRatio);       
    // }    
  }

  window.addEventListener('resize', resizeApp);

}




</script>

<template>
  <div ref="el" style="width: 100%; height:100%;">

  </div>
</template>

<style scoped>

</style>

