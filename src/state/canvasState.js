import {makeAutoObservable } from "mobx";

// store canvas to refer it from different components
class CanvasState {
    undoList = [] // define arrays to store actions fro undo
    redoList = [] // define arrays to store actions fro redo

    username = ''

    constructor() {
        makeAutoObservable(this)
    }

    setCanvas(canvas) {
        this.canvas = canvas
    }

    addToUndoList(action) {
        this.undoList.push(action)
    }

    addToRedoList(action) {
        this.redoList.push(action)
    }

    undo() {
        let ctx = this.canvas.getContext('2d')
        if (this.undoList.length > 0) {
            let dataURL = this.undoList.pop() // take the last screenshot
            this.redoList.push(this.canvas.toDataURL()) // save undo action to redo array
            let img = new Image()
            img.src = dataURL
            img.onload = () => {
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            }
        } else {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) // if array is empty - clean canvas
        }
    }

    redo() {
        let ctx = this.canvas.getContext('2d')
        if (this.redoList.length > 0) {
            let dataURL = this.redoList.pop()
            this.undoList.push(this.canvas.toDataURL())
            let img = new Image()
            img.src = dataURL
            img.onload = () => {
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
            }
        } else {
            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        }
    }
}
export default new CanvasState()