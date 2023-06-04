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
    resizeApp()    
  }  


  const graphics = new PIXI.Graphics();

  // Rectangle
  graphics.beginFill(0x1a5289);
  graphics.drawRect(0, 0, standardWidth, standardHeight);
  graphics.endFill();

  app.stage.addChild(graphics);

  const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
  });

  const loadingText = new PIXI.Text('loading..', style);
  loadingText.x = standardWidth/2 - loadingText.width;
  loadingText.y = 400;
  
  app.stage.addChild(loadingText);
  
  await loadAssets()

  await drawObject(app)

  

  // 애플리케이션 리사이징
  function resizeApp() {  

    if(el.value.clientWidth !== null && el.value.clientHeight !== null) {
      console.log('asdsd')
      
      let ratio_1 = 0.5625
      let ratio_2 = 0.75      
      let clientWidth = el.value.clientWidth
      let clientHeight = el.value.clientHeight
      let currentRatio = clientHeight/clientWidth

      if(currentRatio > ratio_1) {
        const targetWidth = standardWidth;
        const targetHeight = standardHeight
        app.renderer.resize(targetWidth, targetHeight);   
        app.view.style.objectFit = 'cover';
        app.view.style.width = clientWidth + 'px';
        app.view.style.height = clientHeight + 'px';               
      }else {
        app.view.style.objectFit = 'contain';
        app.view.style.width = clientWidth + 'px';
        app.view.style.height = clientHeight + 'px';
      }    
    }else {
      currentRatio = window.innerHeight/window.innerWidth 

      if(currentRatio > ratio_1) {
        const targetWidth = standardWidth;
        const targetHeight = standardHeight
        app.renderer.resize(targetWidth, targetHeight);   
        app.view.style.objectFit = 'cover';
        app.view.style.width = window.innerWidth + 'px';
        app.view.style.height = window.innerHeight + 'px';               
      }else {
        app.view.style.objectFit = 'contain';
        app.view.style.width = window.innerWidth + 'px';
        app.view.style.height = window.innerHeight + 'px';
      }
    }
  }

  window.addEventListener('resize', resizeApp);
 

}