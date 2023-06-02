import * as PIXI from "pixi.js";
import { avatar } from "./avatar";
import { drawObject } from "./object";

import backgroundImg from '@/assets/img/background/background1.png'



export async function drawPixi(el) {
    
  // 가로세로 비율 유지를 위한 변수
  const heightRatio = 0.5625;
  let standardWidth = 1680
  let standardHeight = 900
  // el.value.clientWidth

  
  // 픽시 애플리케이션 생성
  const app = new PIXI.Application({ 
    backgroundImg: backgroundImg, 
    width: standardWidth,
    height: standardHeight,
    resolution: window.devicePixelRatio,
    autoDensity: true,
    eventMode: 'dynamic'
  });
  el.value.appendChild(app.view);


  // 화면 리사이징
  if(el.value.clientWidth < standardWidth) {
    app.view.style.width = el.value.clientWidth + 'px';
    app.view.style.height = (el.value.clientWidth * heightRatio) + 'px';        
  }
  
  // 배경 이미지
  const texture = await PIXI.Assets.load(backgroundImg);  
  const sprite = new PIXI.Sprite(texture);
  sprite.width = standardWidth;
  sprite.height = standardHeight;
  app.stage.addChild(sprite);

  // 컨테이너 및 오브젝트
  const container = new PIXI.Container();
  app.stage.addChild(container);
  await drawObject(container)
  
  // 좌 우 클릭영역
  const leftArea = new PIXI.Graphics();
  const rightArea = new PIXI.Graphics();

  leftArea.beginFill(0, 0.01);
  leftArea.drawRect(0, 0, standardWidth/2, standardHeight);
  leftArea.endFill();
  leftArea.on('pointerdown', onClickLeft);
  leftArea.on('pointerup', onClickEnd);
  leftArea.cursor = 'pointer';
  app.stage.addChild(leftArea);


  rightArea.beginFill(0, 0.01);
  rightArea.drawRect(standardWidth/2, 0, standardWidth/2, standardHeight);
  rightArea.endFill();
  rightArea.on('pointerdown', onClickRight);
  rightArea.on('pointerup', onClickEnd);
  rightArea.cursor = 'pointer';
  app.stage.addChild(rightArea);  


  // 아바타
  let standing = await avatar.actinos.standing()
  let run = await avatar.actinos.run()
  let teleport = await avatar.actinos.teleport()
  let appear = await avatar.actinos.appear() 
  app.stage.addChild(standing);

  // window.setTimeout(()=>{
  //   app.ticker.add(startTeleport)
  // },1000)
  
  let is_telport = true
  
  // function startTeleport() {    
  //   teleport.y = teleport.y+50
  //   if(teleport.y > 660 ){
  //     app.ticker.remove(startTeleport)
  //     app.stage.removeChild(teleport)
  //     app.stage.addChild(appear);      
  //   }
  //   window.setTimeout(()=> {
  //     app.stage.removeChild(appear)
  //     app.stage.addChild(standing);
  //     is_telport = true
  //   },600)
  // }
  
  

  
  
  function onClickRight() {
    if(!is_telport) {
      return
    }
    standing.scale.x= 1.8;
    run.scale.x= 1.8;
    app.stage.removeChild(standing);
    app.stage.addChild(run);
    app.ticker.add(moveRight);    
  }

  function onClickLeft() {
    if(!is_telport) {
      return
    }    
    standing.scale.x=-1.8;
    run.scale.x=-1.8;
    app.stage.removeChild(standing);
    app.stage.addChild(run);    
    app.ticker.add(moveLeft);    
  }

  function onClickEnd() {
    if(!is_telport) {
      return
    }    
    app.stage.removeChild(run);
    app.stage.addChild(standing);
    app.ticker.remove(moveRight)
    app.ticker.remove(moveLeft)
  }

  function moveRight() {
    container.x -= 10
  }

  function moveLeft () {
    container.x += 10
  }  




  // 애플리케이션 크기 조정 함수
  function resizeApp() {    
    if(el.value.clientWidth !== null) {
      // app.renderer.resize(el.value.clientWidth, el.value.clientWidth*heightRatio);    
      app.view.style.width = el.value.clientWidth + 'px';
      app.view.style.height = (el.value.clientWidth * heightRatio) + 'px';         
    }    
  }

  window.addEventListener('resize', resizeApp);
  let keydown = false
  window.addEventListener('keydown', (e)=>{    
    if(keydown) {
      return
    }
    
    if(e.key == 'ArrowRight') {
      onClickRight()
    }
    if(e.key == 'ArrowLeft') {
      onClickLeft()
    }    
    keydown = true
  })
  window.addEventListener('keyup', (e)=>{
    keydown = false
    if(e.key == 'ArrowRight') {
      onClickEnd()
    }
    if(e.key == 'ArrowLeft') {
      onClickEnd()
    }    
  })  

}