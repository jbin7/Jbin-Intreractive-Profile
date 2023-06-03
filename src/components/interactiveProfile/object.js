import * as PIXI from "pixi.js";
import { avatar } from "./avatar";


let standardWidth = 1680
let standardHeight = 900

export async function drawObject(app) {
  
  const loadAvatarAssets = await PIXI.Assets.loadBundle('load-object');   
  const loadBackgroundAssets = await PIXI.Assets.loadBundle('load-background');
  const loadFontAssets = await PIXI.Assets.loadBundle('load-font');      

  const ticker = PIXI.Ticker.shared;

  const backgroundContainer = new PIXI.Container();
  const container = new PIXI.Container();
  app.stage.addChild(backgroundContainer);
  app.stage.addChild(container);
  
  
  const text1 = new PIXI.Text('테스트 안녕하세요 Hi Everyone', new PIXI.TextStyle({ fontFamily: 'DungGeunMo', fontSize: 30, fill: '#ffffff' }));
  const text2 = new PIXI.Text('테스트 안녕하세요 Hi Everyone', new PIXI.TextStyle({ fontFamily: 'DungGeunMo', fontSize: 50, fill: '#ffffff' }));  
  container.addChild(text1)
  text2.y = 30
  container.addChild(text2)

  // 배경 이미지  
  
  const sprite = new PIXI.Sprite(loadBackgroundAssets.background);
  sprite.width = standardWidth;
  sprite.height = standardHeight;
  backgroundContainer.addChild(sprite);  
  

  // 타이틀
  const title = PIXI.Sprite.from(loadAvatarAssets.title);
  title.width = 600
  title.height = 350
  title.x = 550
  title.y = 150
  container.addChild(title)
  title.alpha = 0 
  ticker.add(showTitle)
  function showTitle(){
    title.alpha += 0.009
    if (title.alpha > 1) {
      ticker.remove(showTitle)
    }
  }

   // 전광판 1   
   const billboard = PIXI.Sprite.from(loadAvatarAssets.billboard1);
   billboard.width = 240 * 3.5
   billboard.height = 180 * 3.5
   billboard.x = 500
   billboard.y = standardHeight - billboard.height - 150
   container.addChild(billboard);    

  // 
  const wreck = PIXI.Sprite.from(loadAvatarAssets.wreck);
  wreck.width = 424 * 4
  wreck.height = 96 * 4
  wreck.x = 2000
  wreck.y = standardHeight - wreck.height - 150
  container.addChild(wreck);     

  // 나무
  let treeX = 0
  for(let i = 0 ; i < 100 ; i ++) {
    const tree = PIXI.Sprite.from(loadAvatarAssets.tree);
    tree.width = 42 * 3
    tree.height = 57 * 3
    tree.x = treeX;
    tree.y = standardHeight - tree.height - 150
    container.addChild(tree)
    treeX += tree.width
  }  

  // 바닥 블록
  let blockX = 0  
  for(let i = 0 ; i < 100 ; i ++) {
    const block = PIXI.Sprite.from(loadAvatarAssets.block);    
    block.width = 127 *2
    block.height = 78 *2   
    block.x = blockX;
    block.y = standardHeight - block.height
    container.addChild(block)
    blockX += block.width
  }  


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


  // 좌 우 클릭영역
  const leftArea = new PIXI.Graphics();
  const rightArea = new PIXI.Graphics();

  leftArea.beginFill(0, 0.01);
  leftArea.drawRect(0, 0, standardWidth/2, standardHeight);
  leftArea.endFill();
  leftArea.on('pointerdown', onClickLeft);
  leftArea.on('pointerup', onClickEnd);
  leftArea.cursor = 'pointer';
  container.addChild(leftArea);


  rightArea.beginFill(0, 0.01);
  rightArea.drawRect(standardWidth/2, 0, standardWidth/2, standardHeight);
  rightArea.endFill();
  rightArea.on('pointerdown', onClickRight);
  rightArea.on('pointerup', onClickEnd);
  rightArea.cursor = 'pointer';
  container.addChild(rightArea);    

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