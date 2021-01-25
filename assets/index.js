import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './Plugins/AutoPlay.js'
import AutoPause from './Plugins/AutoPause.js'
 
const video = document.querySelector('video')
const button = document.querySelector('button')
const btn_mute = document.getElementById('muted')


const player = new MediaPlayer( {el: video, plugins: [new AutoPlay(), new AutoPause()]} )


button.onclick = () => player.togglePlay()
btn_mute.onclick = () => player.toggleMute()