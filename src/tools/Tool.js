// need this parent class for all tools cz it has common methods for all the tools
// that we will pass
export default class Tool {
    constructor(canvas) {
        this.canvas = canvas
        this.ctx = canvas.getContext('2d')
        this.destroyEvent()
    }

    // change inner color
    set color(color) {
        this.ctx.fillStyle = color
    }

    // change stoke color
    set strokeColor(color) {
        this.ctx.strokeStyle = color
    }

    // change width
    set lineWidth(width) {
        this.ctx.lineWidth = width
    }

    // update events when user changes tools
    destroyEvent() {
        this.canvas.onmousedown = null
        this.canvas.onmouseup = null
        this.canvas.onmousemove = null
    }
}