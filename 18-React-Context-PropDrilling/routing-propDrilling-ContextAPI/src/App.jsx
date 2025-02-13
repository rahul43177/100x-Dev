import {BrowserRouter , Routes , Route, useNavigate} from 'react-router-dom'
import {lazy , Suspense} from 'react'
const Dashboard = lazy(() => import("./components/Dashboard"))
const Landing = lazy(() => import("./components/Landing"))

export default function App() {
  return (
    <div>
      <h4 
        style = {{
          color : "red" , 
          border : "2px solid black" , 
          width : "fit-content" ,
          margin : 10 , 
          padding : 10 
        }}
      >This is the constant heading</h4>
      <BrowserRouter>
      <Appbar/>
        <Routes>
          <Route path = "/" element = {<Suspense fallback ={"...Loading.."}> <Landing/> </Suspense>}/>
          <Route path = "/dashboard" element = {<Suspense fallback={"...loading..."}> <Dashboard/> </Suspense>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => navigate("/")}
      >Landing</button>
      <button onClick = {() => navigate("/dashboard")}>Dashboard</button>
    </div>
  )
}
