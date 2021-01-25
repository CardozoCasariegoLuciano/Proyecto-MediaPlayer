class AutoPause {

    constructor(){

        this.threshold = 0.50
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handleVisibilitychange = this.handleVisibilitychange.bind(this)
    }

    run(player){      

        this.player = player

        const observer = new IntersectionObserver(this.handlerIntersection , {
            threshold: this.threshold
        })

        observer.observe(this.player.media)


        document.addEventListener("visibilitychange", this.handleVisibilitychange)
    }

    handlerIntersection(entries) {
        const entry = entries[0]

        if (entry.isIntersecting) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }

    handleVisibilitychange(){

        const isVisible = document.visibilityState === "visible"

        if (isVisible) {
            this.player.play()
        } else {
            this.player.pause()
        }
    }

}

export default AutoPause