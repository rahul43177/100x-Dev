import {BrowserRouter , Routes , Route, useNavigate} from 'react-router-dom';
import {lazy  , Suspense} from 'react'
//import Dashboard from './components/Dashboard'
//import Landing from './components/Landing'
const Dashboard = lazy(() => import("./components/Dashboard"))
const Landing = lazy(() => import("./components/Landing"));
export default function App() {
  return (
    <div>
      <h3
        style = {{
            padding : 10 , 
            margin : 10 , 
            color : "blue" , 
            width : "fit-content" ,
            border : "2px solid black"         
        }}
      >This is the constant header</h3>
      <BrowserRouter>
      <Appbar/>
        <Routes>
          <Route path = "/" element = {<Landing/>}/>
          <Route path = "/dashboard" element = {<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div>
        <button onClick={() => navigate("/")}>Landing</button>
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
    </div>
  )
}