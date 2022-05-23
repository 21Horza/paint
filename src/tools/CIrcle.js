import Tool from './Tool'

export default class Circle extends Tool {
    constructor(canvas) {
        super(canvas)
        this.listen()
    }

    // listen to changes in canvas when user manipulates with tools
    listen() {
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }

    // when user starts drawing
    mouseDownHandler(e) {
        this.mouseDown = true 
        this.ctx.beginPath() // start
        this.startX =  e.pageX - e.target.offsetLeft; // initiate x
        this.startY = e.pageY - e.target.offsetTop; // initiate y
        this.savedCanvasImg = this.canvas.toDataURL(); // save current canvas image when we draw a new rectangle
    }

    // moving mouse logic
    mouseMoveHandler(e) {
        // set all the dots and height with width
        let currentX =  e.pageX - e.target.offsetLeft; 
        let currentY = e.pageY - e.target.offsetTop;
        let width = currentX - this.startX
        let height = currentY - this.startY
        let radius = Math.sqrt(width**2 + height**2)
        if (this.mouseDown) {
            this.draw(this.startX, this.startY, radius) // pass all the params
        }
    }

    mouseUpHandler(e) {
        this.mouseDown = false // stop drawing
    }

    draw(x, y, radius) {
        const img = new Image()
        img.src = this.savedCanvasImg // pass canvas image
        img.onload = () => { // run this fn when we set image
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.arc(x, y, radius, 0, 2*Math.PI) // draw rectangle
            this.ctx.fill() // fill the rect
            this.ctx.stroke() // and stroke
        }
    }
}