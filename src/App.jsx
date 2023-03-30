import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-black text-white container">
      <Header />

    </div>
  )
}

export default App
