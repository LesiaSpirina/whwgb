import  "./howler.core.js";
// import src from'../audio/sound1.mp3';
// export function soundClick() {
//     let audio = new Audio(); 
//     audio.src = 'media/1.mp3' 
//     audio.autoplay = true; 
// }

export function soundClick(){
    let sound1 = new Howl({
        src: ['../media/sound1.mp3'],
        html5: true
      });
  sound1.play()
}