import * as PIXI from "pixi.js";
import texture from '@/assets/img/avatar/megaman.png'
import {avatarFrameData} from './frame'

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
      return new PIXI.AnimatedSprite(spritesheet.animations.standing);      
    },
    async run() {
      let spritesheet = await avatar.base()
      return new PIXI.AnimatedSprite(spritesheet.animations.run);      
    },
    async blink() {
      let spritesheet = await avatar.base()
      return new PIXI.AnimatedSprite(spritesheet.animations.blink);      
    }
  }
}