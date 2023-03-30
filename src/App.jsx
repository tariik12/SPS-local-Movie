import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-black text-white container">
      <Header />
      <Home />

    </div>
  )
}

export default App
