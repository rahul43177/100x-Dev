import { notifications , totalNotificationSelector } from './atoms'
import {useRecoilValue , RecoilRoot , useRecoilState} from 'recoil'
import axios from 'axios'
import {useEffect } from 'react'

function App() {
    return (
        <RecoilRoot>
            <MainApp/>
        </RecoilRoot>
    )
   
}


// default : {
//   network : 4 , 
//   jobs : 6 , 
//   messaging : 3 , 
//   notifications : 3
// }
function MainApp() {
    
    const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  
    useEffect(async ()=> {
      const res = await axios.get("https://sum-server.100xdevs.com/notification")
      .then(res => {
        set
      })
    }) 


    return (
        <>
            <button>Home</button>
            <button>My network ({notifications.network >= 100  ?  "99+" : notifications.network})</button>
            <button>Jobs ({notifications.jobs})</button>
            <button>Messaging ({notification.messaging})</button>
            <button>Notification ({notification.notifications >= 100 ? "99+"  : notification.notifications})</button>

            <button>Me ({totalNotificationCount})</button>
        
        </>
    )
}

export default App