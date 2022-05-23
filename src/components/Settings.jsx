import React from 'react'
import '../styles/tools.scss'
import toolState from '../state/toolState'

const Settings = () => {
  return (
    <div className='settings'>
      <label htmlFor='line-width'>Line width</label>
       <input
       onChange={e => toolState.setWidth(e.target.value)}
        type='number' min={1} max={100} defaultValue={1}/> 
      <label htmlFor='stroke-color'>Stroke color</label>
       <input
       onChange={e => toolState.setStrokeColor(e.target.value)}
        type='color'
        id='stroke-color'
        /> 
    </div>
  )
}

export default Settings