import * as PIXI from "pixi.js";
import { avatar } from "./avatar";
import backgroundImg from '@/assets/img/background/background.png'
import blockImg from '@/assets/img/object/block.png'
import treeImg from '@/assets/img/object/tree.png'


export async function drawPixi(el) {
  // el: 캔버스 엘리먼트
  
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

  if(el.value.clientWidth < standardWidth) {
    app.view.style.width = el.value.clientWidth + 'px';
    app.view.style.height = (el.value.clientWidth * heightRatio) + 'px';        
  }
  
  // 배경 이미지
  const texture = PIXI.Texture.from(backgroundImg);
  const sprite = new PIXI.Sprite(texture);
  sprite.width = standardWidth;
  sprite.height = standardHeight;
  app.stage.addChild(sprite);

  // 컨테이너 및 오브젝트
  const container = new PIXI.Container();
  app.stage.addChild(container);
  
  // 바닥 블록
  let blockX = 0
  for(let i = 0 ; i < 100 ; i ++) {
    const block = PIXI.Sprite.from(blockImg);    
    block.width = 600
    block.height = 200    
    block.x = blockX;
    block.y = standardHeight - block.height
    container.addChild(block)
    blockX += block.width
  }
  // 나무
  let treeX = 0
  for(let i = 0 ; i < 100 ; i ++) {
    const tree = PIXI.Sprite.from(treeImg);
    tree.width = 120
    tree.height = 200
    tree.x = treeX;
    tree.y = standardHeight - 400
    container.addChild(tree)
    treeX += tree.width
  }

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
  standing.animationSpeed = 0.1 ;
  standing.play();
  standing.width = standing.width*1.8
  standing.height = standing.height*1.8
  standing.x = standardWidth/2
  standing.y = 660
  app.stage.addChild(standing);  

  let run = await avatar.actinos.run()
  run.animationSpeed = 0.1 ;
  run.play();
  run.width = run.width*1.8
  run.height = run.height*1.8 
  run.x = standardWidth/2
  run.y = 660
  
  

  
  
  function onClickRight() {
    standing.scale.x= 1.8;
    run.scale.x= 1.8;
    app.stage.removeChild(standing);
    app.stage.addChild(run);
    app.ticker.add(moveRight);    
  }

  function onClickLeft() {
    standing.scale.x=-1.8;
    run.scale.x=-1.8;
    app.stage.removeChild(standing);
    app.stage.addChild(run);    
    app.ticker.add(moveLeft);    
  }

  function onClickEnd() {
    app.stage.removeChild(run);
    app.stage.addChild(standing);
    app.ticker.remove(moveRight)
    app.ticker.remove(moveLeft)
  }

  let moveRight = ()=> {
    container.x -= 5
  }

  let moveLeft = ()=> {
    container.x += 5
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

}