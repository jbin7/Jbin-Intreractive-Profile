import * as PIXI from "pixi.js";


let standardWidth = 1680
let standardHeight = 900

let bottomY = 635

export const Megaman = class {
  spritesheet
  async init() {
    this.spritesheet = await this.getSpirte()    
  }
  async getSpirte() {
    return await PIXI.Assets.load('/assets/img/avatar/megaman.json');
  }
  standing() {    
    let standing = new PIXI.AnimatedSprite(this.spritesheet.animations.standing);      
    standing.animationSpeed = 0.1 ;
    standing.play();
    standing.width = standing.width*1.8
    standing.height = standing.height*1.8
    standing.x = standardWidth/2
    standing.y = bottomY      
    return standing
  }
  run() {      
    let run = new PIXI.AnimatedSprite(this.spritesheet.animations.run);     
    run.animationSpeed = 0.1 ;
    run.play();
    run.width = run.width*1.8
    run.height = run.height*1.8 
    run.x = standardWidth/2
    run.y = bottomY       
    return run
  }
  teleport() {      
    let teleport = new PIXI.AnimatedSprite(this.spritesheet.animations.teleport);     
    teleport.animationSpeed = 0.1 ;
    teleport.play();
    teleport.width = teleport.width*1.8
    teleport.height = teleport.height*1.8 
    teleport.x = standardWidth/2
    teleport.y = -100       
    return teleport
  }
  appear() {      
    let appear = new PIXI.AnimatedSprite(this.spritesheet.animations.appear);     
    appear.animationSpeed = 0.1 ;
    appear.play();
    appear.width = appear.width*1.8
    appear.height = appear.height*1.8 
    appear.x = standardWidth/2
    appear.y = bottomY       
    return appear
  }
};


export const Elric = class {
  spritesheet
  async init() {
    this.spritesheet = await this.getSpirte()    
  }
  async getSpirte() {
    return await PIXI.Assets.load('/assets/img/avatar/elric.json');
  }
  standing() {    
    let standing = new PIXI.AnimatedSprite(this.spritesheet.animations.standing);      
    standing.animationSpeed = 0.1 ;
    standing.play();
    standing.width = standing.width*2.5
    standing.height = standing.height*2.5
    standing.x = standardWidth/2
    standing.y = bottomY      
    return standing
  }
  run() {      
    let run = new PIXI.AnimatedSprite(this.spritesheet.animations.run);     
    run.animationSpeed = 0.1 ;
    run.play();
    run.width = run.width*2.5
    run.height = run.height*2.5 
    run.x = standardWidth/2
    run.y = bottomY       
    return run
  }
  alchemy() {      
    let alchemy = new PIXI.AnimatedSprite(this.spritesheet.animations.alchemy);     
    alchemy.animationSpeed = 0.11 ;
    alchemy.play();
    alchemy.width = alchemy.width*2.5
    alchemy.height = alchemy.height*2.5
    alchemy.x = standardWidth/2
    alchemy.y = bottomY       
    return alchemy
  }
};