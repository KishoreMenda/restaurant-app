import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './About';
import Home from './Home';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/dashboard/' element={<Dashboard/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App