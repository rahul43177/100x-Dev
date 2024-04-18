import React from 'react'
import {netWorkAtom} from './atoms'
import {useRecoilValue} from 'recoil'

function App() {
  const networkNotification = useRecoilValue(netWorkAtom)

  return (
    <>
      <button>Home</button>

      
      <button>My Network</button>
      <button>Jobs</button>
      <button>Messaging</button>
      <button>Notification</button>

      <button>Me</button>
    
    </>
  )
}

export default App