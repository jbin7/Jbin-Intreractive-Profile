import * as PIXI from "pixi.js";


let standardWidth = 1680
let standardHeight = 900

let bottomY = 675

export async function drawObject(container) {
  const ticker = PIXI.Ticker.shared;
  const loadAvatarAssets = await PIXI.Assets.loadBundle('load-object');      
  
  const text1 = new PIXI.Text('테스트 안녕하세요 Hi Everyone', new PIXI.TextStyle({ fontFamily: 'DungGeunMo', fontSize: 30, fill: '#ffffff' }));
  const text2 = new PIXI.Text('테스트 안녕하세요 Hi Everyone', new PIXI.TextStyle({ fontFamily: 'DungGeunMo', fontSize: 50, fill: '#ffffff' }));  
  container.addChild(text1)
  text2.y = 30
  container.addChild(text2)

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



}