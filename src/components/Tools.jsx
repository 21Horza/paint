import React from 'react'
import '../styles/tools.scss'
import toolState from '../state/toolState'
import Brush from '../tools/Brush'
import canvasState from '../state/canvasState'
import Rectangle from '../tools/Rectangle'
import Circle from '../tools/CIrcle'
import Eraser from '../tools/Eraser'
import Line from '../tools/Line'
import Semicircle from '../tools/Semicircle'

const Tools = () => {

  const changeColor = (e) => {
    toolState.setStrokeColor(e.target.value)
    toolState.setFillColor(e.target.value)
  }

  const downloadScreenshot = () => {
    const dataURL = canvasState.canvas.toDataURL()
    const a = document.createElement('a')
    a.href = dataURL
    a.download = `${Math.floor(100000 + Math.random() * 900000)}.jpeg` 
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  // on click we pass canvas state from global state
  return (
    <div className='tools'>
        <button className='tools__btn brush' onClick={() => toolState.setTool(new Brush(canvasState.canvas))}></button> 
        <button className='tools__btn circle' onClick={() => toolState.setTool(new Circle(canvasState.canvas))}></button>
        <button className='tools__btn semicircle' onClick={()=> toolState.setTool(new Semicircle(canvasState.canvas))}></button>
        <button className='tools__btn rectangle' onClick={()=> toolState.setTool(new Rectangle(canvasState.canvas))}></button>
        <button className='tools__btn line' onClick={()=> toolState.setTool(new Line(canvasState.canvas))}></button>
        <button className='tools__btn eraser' onClick={()=> toolState.setTool(new Eraser(canvasState.canvas))}></button>
        <input onChange={e => changeColor(e)} type='color' />
        <button className='tools__btn undo' onClick={() => canvasState.undo()}></button>
        <button className='tools__btn redo' onClick={() => canvasState.redo()}></button>
        <button className='tools__btn save' onClick={() => downloadScreenshot()}></button>
    </div>
  )
}

export default Tools