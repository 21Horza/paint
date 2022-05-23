import React from 'react';
import Canvas from './components/Canvas';
import Settings from './components/Settings';
import Tools from './components/Tools';
import './styles/app.scss'

function App() {
  return (
    <div className="app">
      <Tools />
      <Settings />
      <Canvas />
    </div>
  );
}

export default App;
