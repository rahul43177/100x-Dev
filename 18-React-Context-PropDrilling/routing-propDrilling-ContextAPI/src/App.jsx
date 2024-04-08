import { Landing } from "./components/Landing";
import { Dashboard } from './components/Dashboard'

import {BrowserRouter , Routes , Route} from 'react-router-dom'



function App() {
  return (
    <div>
      <div>
        <button onClick={()=> {
          window.location.href = "/dashboard"
        }}>Dashboard</button>

        <button onClick={()=> {
          window.location.href = "/"
        }}>Landing Page</button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path = "/dashboard"  element = {<Dashboard/>}/>
          <Route path = "/" element ={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App