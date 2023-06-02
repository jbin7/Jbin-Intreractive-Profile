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
		}          
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
	}
}