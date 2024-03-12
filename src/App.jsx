import './App.css'
import { Board } from './components/Board.jsx'
import { Keyboard } from './components/Keyboard.jsx'


export default function App() {
  return (
    <>
      <div className="title">
        <h1>🗿MeanIng</h1>
      </div>
      <Board/>
      <Keyboard/>

    </>
  )
}
