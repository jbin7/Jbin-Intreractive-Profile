import * as PIXI from "pixi.js";

export async function loadAssets() {

  await PIXI.Assets.init({ manifest: manifestExample });  
  PIXI.Assets.backgroundLoadBundle(['load-background', 'load-object', 'load-avatar'], (onProgress)=> {
    console.log(onProgress)
  });
  const loadScreenAssets = await PIXI.Assets.loadBundle('load-object');

}

// manifest example
const manifestExample = {
  bundles: [{
      name: 'load-background',
      assets: [
          {
              name: 'background',
              srcs: 'src/assets/img/background/background1.png',
          },
      ],
  },
  {
      name: 'load-object',
      assets: [
          {
              name: 'title',
              srcs: 'src/assets/img/object/title.png',
          },
          {
            name: 'block',
            srcs: 'src/assets/img/object/block2.png',
          },      
          {
            name: 'tree',
            srcs: 'src/assets/img/object/tree.png',
          },                  
          {
            name: 'wreck',
            srcs: 'src/assets/img/object/wreck.png',
          },    
          {
            name: 'billboard1',
            srcs: 'src/assets/img/object/billboard1.png',
          },                        
      ],
  },
  {
    name: 'load-avatar',
    assets: [
        {
            name: 'avatar',
            srcs: 'src/assets/img/avatar/megaman.png',
        },
    ],
  },{
    name: 'load-font',
    assets: [
        {
            name: 'dungGeunMo',
            srcs: 'src/assets/font/DungGeunMo.woff',
        },
    ],
  }],
};