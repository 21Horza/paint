import Tool from './Tool'

export default class Brush extends Tool {
    constructor(canvas) {
        super(canvas) // inherit all the methods from Tool
        this.listen()
    }

    // listen to changes in canvas when user manipulates with tools
    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }

    // ============
    // define all funct which are bind to the current class

    // 1 - start draw
    mouseDownHandler(e) {
        this.mouseDown = true
        this.ctx.beginPath() // start
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop) // move mouse to x, y coordinates
    }

    // 2 - continue drawing when user's mouse is down
    mouseMoveHandler(e) {
        if (this.mouseDown) {
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop) // draw lines
        }
    }

    // 3 - stop
    mouseUpHandler(e) {
        this.mouseDown = false // stop drawing
    }

    draw(x, y) {
        this.ctx.lineTo(x,y) // set final dots
        this.ctx.stroke() // stroke lines
    }
}