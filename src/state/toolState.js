import { makeAutoObservable } from "mobx";

// class for every tool ()
class ToolState {
    tool = null

    constructor() {
        makeAutoObservable(this)
    }

    setTool(tool) {
        this.tool = tool
    }

    setFillColor(color) {
        this.tool.color = color
    }

    setStrokeColor(color) {
        this.tool.strokeColor = color
    }

    setWidth(width) {
        this.tool.lineWidth = width
    }

}
export default new ToolState()