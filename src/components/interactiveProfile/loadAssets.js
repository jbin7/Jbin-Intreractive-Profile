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
              srcs: '/assets/img/background/background1.png',
          },
      ],
  },
  {
      name: 'load-object',
      assets: [
          {
              name: 'title',
              srcs: '/assets/img/object/title.png',
          },
          {
            name: 'block',
            srcs: '/assets/img/object/block2.png',
          },      
          {
            name: 'tree',
            srcs: '/assets/img/object/tree.png',
          },                  
          {
            name: 'wreck',
            srcs: '/assets/img/object/wreck.png',
          },    
          {
            name: 'billboard1',
            srcs: '/assets/img/object/billboard1.png',
          },                        
      ],
  },
  {
    name: 'load-avatar',
    assets: [
        {
            name: 'avatar',
            srcs: '/assets/img/avatar/megaman.png',
        },
    ],
  },{
    name: 'load-font',
    assets: [
        {
            name: 'dungGeunMo',
            srcs: '/assets/font/DungGeunMo.woff',
        },
    ],
  }],
};