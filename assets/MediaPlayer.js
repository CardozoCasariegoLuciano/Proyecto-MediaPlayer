

function MediaPlayer(config){
    this.media = config.el
    this.plugins = config.plugins || []

    this._initPlugins()
}


MediaPlayer.prototype._initPlugins = function(){

    const player = {

        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,

        get muted(){

            return this.media.muted
        },
        
        set muted(value){

            this.media.muted = value
        },

    }

    this.plugins.forEach(plugin => {
        plugin.run(player)
    });
}

// Play/Pause section

MediaPlayer.prototype.play = function(){
    this.media.play()
}

MediaPlayer.prototype.pause = function(){
    this.media.pause()
}

MediaPlayer.prototype.togglePlay = function(){

    if(this.media.paused){
        this.play()
    }else if(this.media.pause){
        this.pause()
    }
}

//  Mute/UnMute section

MediaPlayer.prototype.mute = function(){

    this.media.muted = true
}

MediaPlayer.prototype.unMute = function(){
    
    this.media.muted = false
}

MediaPlayer.prototype.toggleMute = function(){

    if(this.media.muted){
        this.unMute()
    }else if(!this.media.muted){
        this.mute()
    }
}

export default MediaPlayer



