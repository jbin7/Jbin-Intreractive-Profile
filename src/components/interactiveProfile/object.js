import * as PIXI from "pixi.js";
import { avatar } from "./avatar";




export async function drawObject(app) {

  let standardWidth = app.stage.width
  let standardHeight = app.stage.height  
  
  const loadObjectAssets = await PIXI.Assets.loadBundle('load-object');     
  const loadBackgroundAssets = await PIXI.Assets.loadBundle('load-background');
  // const loadFontAssets = await PIXI.Assets.loadBundle('load-font');    bld  

  const ticker = PIXI.Ticker.shared;

  let stepCount = 0

  const backgroundContainer = new PIXI.Container();
  const objectContainer = new PIXI.Container();
  const avatarContainer = new PIXI.Container();
  app.stage.addChild(backgroundContainer);
  app.stage.addChild(objectContainer);
  app.stage.addChild(avatarContainer);
   

  // 배경 이미지  
  const sprite = new PIXI.Sprite(loadBackgroundAssets.background);
  sprite.width = standardWidth;
  sprite.height = standardHeight;
  backgroundContainer.addChild(sprite);  
  

  // 타이틀
  const title = PIXI.Sprite.from(loadObjectAssets.title);
  title.width = 600
  title.height = 350
  title.x = 550
  title.y = 150
  objectContainer.addChild(title)
  title.alpha = 0 
  ticker.add(showTitle)
  function showTitle(){
    title.alpha += 0.009
    if (title.alpha > 1) {
      ticker.remove(showTitle)
    }
  }

   // 바이오그래피     
   const biography = PIXI.Sprite.from(loadObjectAssets.biography);
   const biography_description = PIXI.Sprite.from(loadObjectAssets.biography_description);
   let biography_x = 2350
   let biography_y = 170

   biography.width = 720
   biography.height = 540
   biography.x = biography_x
   biography.y = biography_y

   biography.width = 720
   biography.height = 540
   biography_description.x = biography_x
   biography_description.y = biography_y   
   biography_description.alpha = 0 

   objectContainer.addChild(biography);    
   objectContainer.addChild(biography_description);  
   
   ticker.add(showBio)
   function showBio(){
    if(stepCount > 120) {
      biography_description.alpha += 0.02
    }    
    if (biography_description.alpha > 1) {
      ticker.remove(showBio)
    }
   }   


   // 어빌리티     
   const ability = PIXI.Sprite.from(loadObjectAssets.ability);
   const ability_description = PIXI.Sprite.from(loadObjectAssets.ability_description);
   let ability_x = 3600
   let ability_y = 170

   ability.width = 720
   ability.height = 540
   ability.x = ability_x
   ability.y = ability_y

   ability.width = 720
   ability.height = 540
   ability_description.x = ability_x
   ability_description.y = ability_y   
   ability_description.alpha = 0

   objectContainer.addChild(ability);    
   objectContainer.addChild(ability_description);  
   
   ticker.add(showability)
   function showability(){
    if(stepCount > 240) {
      ability_description.alpha += 0.02
    }    
    if (ability_description.alpha > 1) {
      ticker.remove(showability)
    }
   }      

  // wreck
  const wreck = PIXI.Sprite.from(loadObjectAssets.wreck);
  let wreckX = 2000
  wreck.width = 424 * 4
  wreck.height = 96 * 4
  wreck.x = wreckX
  wreck.y = standardHeight - wreck.height - 110
  objectContainer.addChild(wreck);     

  // 나무
  let treeX = 0
  for(let i = 0 ; i < 100 ; i ++) {
    const tree = PIXI.Sprite.from(loadObjectAssets.tree);
    tree.width = 42 * 3
    tree.height = 57 * 3
    tree.x = treeX;
    tree.y = standardHeight - tree.height - 190
    objectContainer.addChild(tree)
    treeX += tree.width
  }  

  // 바닥 블록
  let blockX = 0  
  for(let i = 0 ; i < 100 ; i ++) {
    const block = PIXI.Sprite.from(loadObjectAssets.block);    
    block.width = 127 *2.5
    block.height = 78 *2.5 
    block.x = blockX;
    block.y = standardHeight - block.height
    objectContainer.addChild(block)
    blockX += block.width
  }  


  // 아바타
  let standing = await avatar.actinos.standing()
  let run = await avatar.actinos.run()
  let teleport = await avatar.actinos.teleport()
  let appear = await avatar.actinos.appear() 
  avatarContainer.addChild(standing);
  
  let is_telport = true
  // ticker.add(startTeleport)
  // function startTeleport() {    
  //   teleport.y = teleport.y+50
  //   if(teleport.y > 660 ){
  //     ticker.remove(startTeleport)
  //     avatarContainer.removeChild(teleport)
  //     avatarContainer.addChild(appear);      
  //   }
  //   window.setTimeout(()=> {
  //     avatarContainer.removeChild(appear)
  //     avatarContainer.addChild(standing);
  //     is_telport = true
  //   },600)
  // }  

  // 좌 우 클릭영역
  const leftArea = new PIXI.Graphics();
  const rightArea = new PIXI.Graphics();

  leftArea.beginFill(0, 0.01);
  leftArea.drawRect(0, 0, standardWidth/2, standardHeight);
  leftArea.endFill();
  leftArea.on('pointerdown', onClickLeft);
  leftArea.on('pointerup', onClickEnd);
  leftArea.cursor = 'pointer';
  avatarContainer.addChild(leftArea);


  rightArea.beginFill(0, 0.01);
  rightArea.drawRect(standardWidth/2, 0, standardWidth/2, standardHeight);
  rightArea.endFill();
  rightArea.on('pointerdown', onClickRight);
  rightArea.on('pointerup', onClickEnd);
  rightArea.cursor = 'pointer';
  avatarContainer.addChild(rightArea);    

  function onClickRight() {
    if(!is_telport) {
      return
    }
    standing.scale.x= 1.8;
    run.scale.x= 1.8;
    avatarContainer.removeChild(standing);
    avatarContainer.addChild(run);
    ticker.add(moveRight);    
  }

  function onClickLeft() {
    if(!is_telport) {
      return
    }    
    standing.scale.x=-1.8;
    run.scale.x=-1.8;
    avatarContainer.removeChild(standing);
    avatarContainer.addChild(run);    
    ticker.add(moveLeft);    
  }

  function onClickEnd() {
    if(!is_telport) {
      return
    }    
    avatarContainer.removeChild(run);
    avatarContainer.addChild(standing);
    ticker.remove(moveRight)
    ticker.remove(moveLeft)
  }

  function moveRight() {    
    objectContainer.x -= 10
    stepCount += 1      
  }

  function moveLeft () {
    if (stepCount < 1) {
      return
    }
    objectContainer.x += 10
    stepCount -= 1
  }  

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