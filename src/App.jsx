
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import LogIn from './pages/LogIn/LogIn'
import SignUp from './pages/SignUp/SignUp'

function App() {

  return (
    <>

<Router>
<Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<LogIn/> }/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
</Router>
   
    
     
    </>
  )
}

export default App
