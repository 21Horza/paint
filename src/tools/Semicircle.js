import Circle from './CIrcle'
// import Tool from './Tool'

export default class Arc extends Circle {
    draw(x, y, radius) {
        const img = new Image()
        img.src = this.savedCanvasImg // pass canvas image
        img.onload = () => { // run this fn when we set image
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            this.ctx.beginPath()
            this.ctx.arc(x, y, radius, 0, 1*Math.PI) // draw semicircle
            this.ctx.fill() // fill the rect
            this.ctx.stroke() // and stroke
        }
    }
}