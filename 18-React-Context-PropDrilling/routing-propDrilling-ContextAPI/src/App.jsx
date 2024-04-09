import {Suspense,lazy} from 'react'
import { BrowserRouter , Routes , Route} from 'react-router-dom'

const Dashboard = lazy(()=> import('./components/Dashboard'))
const Landing = lazy(()=> import('./components/Landing'))


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
          <Route path = "/dashboard"  element = { <Suspense fallback = {"...Loading"} >  <Dashboard/> </Suspense>}/>
          <Route path = "/" element ={  <Suspense  fallback = "..loading"> <Landing/> </Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App