import * as PIXI from "pixi.js";
import {loadAssets} from './loadAssets'
import { drawObject } from "./object";



export async function drawPixi(el) {  
  
  // 가로세로 비율 유지를 위한 변수
  const heightRatio = 0.5625;
  let standardWidth = 1680
  let standardHeight = 900
  // el.value.clientWidth

  // 픽시 애플리케이션 생성
  const app = new PIXI.Application({     
    width: standardWidth,
    height: standardHeight,
    resolution: window.devicePixelRatio,
    autoDensity: true,
    eventMode: 'dynamic'
  });
  el.value.appendChild(app.view);
  

  // 현재 디스플레이 사이즈와 다를경우 화면 리사이징
  if(el.value.clientWidth < standardWidth) {
    app.view.style.width = el.value.clientWidth + 'px';
    app.view.style.height = (el.value.clientWidth * heightRatio) + 'px';        
  }  

  await loadAssets()

  const graphics = new PIXI.Graphics();

  // Rectangle
  graphics.beginFill(0x1a5289);
  graphics.drawRect(0, 0, standardWidth, standardHeight);
  graphics.endFill();

  app.stage.addChild(graphics);

  await drawObject(app)

  

  // 애플리케이션 리사이징
  function resizeApp() {    
    if(el.value.clientWidth !== null) {
      // app.renderer.resize(el.value.clientWidth, el.value.clientWidth*heightRatio);    
      app.view.style.width = el.value.clientWidth + 'px';
      app.view.style.height = (el.value.clientWidth * heightRatio) + 'px';         
    }    
  }

  window.addEventListener('resize', resizeApp);
 

}