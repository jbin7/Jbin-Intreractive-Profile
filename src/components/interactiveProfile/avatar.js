import * as PIXI from "pixi.js";
import texture from '@/assets/img/avatar/megaman.png'

let standardWidth = 1680
let standardHeight = 900

let bottomY = 675

export const avatar = {
  async base() {
    // 아바타 스프라이트 시트 기본 생성 및 리턴 함수
    const spritesheet = new PIXI.Spritesheet(
      PIXI.BaseTexture.from(texture),
      avatarFrameData
    );
  
    await spritesheet.parse();
    return spritesheet
  },
  actinos: {
    async standing() {
      let spritesheet = await avatar.base()
      let standing = new PIXI.AnimatedSprite(spritesheet.animations.standing);      
      standing.animationSpeed = 0.1 ;
      standing.play();
      standing.width = standing.width*1.8
      standing.height = standing.height*1.8
      standing.x = standardWidth/2
      standing.y = bottomY      
      return standing
    },
    async run() {
      let spritesheet = await avatar.base()
      let run = new PIXI.AnimatedSprite(spritesheet.animations.run);     
      run.animationSpeed = 0.1 ;
      run.play();
      run.width = run.width*1.8
      run.height = run.height*1.8 
      run.x = standardWidth/2
      run.y = bottomY       
      return run
    },
    async teleport() {
      let spritesheet = await avatar.base()
      let teleport = new PIXI.AnimatedSprite(spritesheet.animations.teleport);     
      teleport.animationSpeed = 0.1 ;
      teleport.play();
      teleport.width = teleport.width*1.8
      teleport.height = teleport.height*1.8 
      teleport.x = standardWidth/2
      teleport.y = -100       
      return teleport
    },
    async appear() {
      let spritesheet = await avatar.base()
      let appear = new PIXI.AnimatedSprite(spritesheet.animations.appear);     
      appear.animationSpeed = 0.1 ;
      appear.play();
      appear.width = appear.width*1.8
      appear.height = appear.height*1.8 
      appear.x = standardWidth/2
      appear.y = bottomY       
      return appear
    },        

  }
}

export const avatarFrameData = {
	frames: {
    standing1: {
			frame: { x: 1, y:145, w:74, h:80 },
			sourceSize: { w: 74, h: 80 },
			spriteSourceSize: { x: 0, y: 0, w: 74, h: 80 },
      anchor: {x:0.5, y:0.5}
		},
    standing2: {
			frame: { x: 79, y:145, w:74, h:80 },
			sourceSize: { w: 74, h: 80 },
			spriteSourceSize: { x: 0, y: 0, w: 74, h: 80 },
      anchor: {x:0.5, y:0.5}
		},
    standing3: {
			frame: { x: 157, y:145, w:74, h:80 },
			sourceSize: { w: 74, h: 80 },
			spriteSourceSize: { x: 0, y: 0, w: 74, h: 80 },
      anchor: {x:0.5, y:0.5}
		},        
		run1: {
			frame: { x: 141, y:249, w:54, h:84 },
			sourceSize: { w: 54, h: 84 },
			spriteSourceSize: { x: 0, y: 0, w: 54, h: 84 },
      anchor: {x:0.5, y:0.5}
		},
		run2: {
			frame: { x: 269, y:253, w:80, h:78 },
			sourceSize: { w: 80, h: 78 },
			spriteSourceSize: { x: 0, y: 0, w: 80, h: 78 },
      anchor: {x:0.5, y:0.5}
		},
		run3: {
			frame: { x: 499, y:249, w:50, h:80 },
			sourceSize: { w: 50, h: 80 },
			spriteSourceSize: { x: 0, y: 0, w: 50, h: 80 },
      anchor: {x:0.5, y:0.5}
		},
		run4: {
			frame: { x: 631, y:253, w:84, h:80 },
			sourceSize: { w: 84, h: 80 },
			spriteSourceSize: { x: 0, y: 0, w: 84, h: 80 },
      anchor: {x:0.5, y:0.5}
		},
		teleport1: {
			frame: { x: 13, y:21, w:16, h:96 },
			sourceSize: { w: 16, h: 96 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 96 },
      anchor: {x:0.5, y:0.5}
		},    
		teleport2: {
			frame: { x: 33, y:21, w:20, h:96 },
			sourceSize: { w: 20, h: 96 },
			spriteSourceSize: { x: 0, y: 0, w: 20, h: 96 },
      anchor: {x:0.5, y:0.5}
		},    
		teleport3: {
			frame: { x: 57, y:31, w:32, h:86 },
			sourceSize: { w: 32, h: 86 },
			spriteSourceSize: { x: 0, y: 0, w: 32, h: 86 },
      anchor: {x:0.5, y:0.5}
		},    
		teleport4: {
			frame: { x: 93, y:53, w:64, h:64 },
			sourceSize: { w: 64, h: 64 },
			spriteSourceSize: { x: 0, y: 0, w: 64, h: 64 },
      anchor: {x:0.5, y:0.5}
		},                

	},
	meta: {
		image: 'images/spritesheet.png',
		format: 'RGBA8888',
		size: { w: 972, h: 341 },
		scale: 1
	},
	animations: {
		run: ['run1', 'run2', 'run3', 'run4'],
    standing: [
			'standing1','standing1', 'standing1', 
			'standing1', 'standing1', 'standing1', 
			'standing1', 'standing1','standing1', 
			'standing1', 'standing1', 'standing1',
		 	'standing2', 'standing3'],		  
    teleport: ['teleport1'],
    appear: ['teleport2', 'teleport3', 'teleport4']      
	},
}