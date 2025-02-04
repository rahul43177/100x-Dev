import {BrowserRouter , Routes , Route, useNavigate} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import LandingPage from './components/Landing'

export default function App() {
    return (
        <div>
            Hi there!! Learning prop <span>drilling</span>
        </div>
    )
}


function Appbar() {
    const navigate = useNavigate()
    
}