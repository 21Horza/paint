import { observer } from 'mobx-react-lite'
import React, {useEffect, useRef} from 'react'
import '../styles/canvas.scss'
import canvasState from '../state/canvasState'
import toolState from '../state/toolState'
import Brush from '../tools/Brush'
import {useParams} from 'react-router-dom'

const Canvas = observer(() => {
  const params = useParams()
  console.log('Params',params)
  const canvasRef = useRef()
  // on load page
  useEffect(() => {
    canvasState.setCanvas(canvasRef.current) // ref to canvas
    toolState.setTool(new Brush(canvasRef.current)) // ref toolBrush to canvas
  }, [])
   
  const mouseDownHandler = () => {
    canvasState.addToUndoList(canvasRef.current.toDataURL()) // add a canvas screenshot
  }

  return (
    <div className='canvas'>
        <canvas onMouseDown={() => mouseDownHandler()} ref={canvasRef} width={800} height={500}></canvas>
    </div>
  )
})

export default Canvas