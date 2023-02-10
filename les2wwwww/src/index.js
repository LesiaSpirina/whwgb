import {Howl} from 'howler';


import src from '../media/sound1.mp3'
export function soundClick(){

    let sound1 = new Howl({
        src: src,
        html5: true
      });
  sound1.play()
}