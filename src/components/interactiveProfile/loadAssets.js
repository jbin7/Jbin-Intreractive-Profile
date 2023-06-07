import * as PIXI from "pixi.js";

export async function loadAssets() {

  await PIXI.Assets.init({ manifest: manifestExample });  
  PIXI.Assets.backgroundLoadBundle(['load-background', 'load-object', 'load-avatar'], (onProgress)=> {
    
  });  

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
            name: 'biography',
            srcs: '/assets/img/object/biography.png',
          },      
          {
            name: 'biography_description',
            srcs: '/assets/img/object/biography_description.png',
          },     
          {
            name: 'ability',
            srcs: '/assets/img/object/ability.png',
          },      
          {
            name: 'ability_description',
            srcs: '/assets/img/object/ability_description.png',
          },
          {
            name: 'language',
            srcs: '/assets/img/object/language.png',
          },
          {
            name: 'frontend',
            srcs: '/assets/img/object/frontend.png',
          },
          {
            name: 'backend',
            srcs: '/assets/img/object/backend.png',
          },
          {
            name: 'tool',
            srcs: '/assets/img/object/tool.png',
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
            srcs: '/assets/font/DungGeunMo/DungGeunMo.woff',
        },
    ],
  }],
};