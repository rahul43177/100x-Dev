import { networkAtom , jobsAtom , notificationAtom , messagingAtom ,homeAtom} from './atoms'
import {useRecoilValue , RecoilRoot , useRecoilState} from 'recoil'


function App() {
    return (
        <RecoilRoot>
            <MainApp/>
        </RecoilRoot>
    )
   
}


function MainApp() {
    const networkNotificationCount = useRecoilValue(networkAtom)
    const jobsNotificationCount = useRecoilValue(jobsAtom)
    const notificationCount = useRecoilValue(notificationAtom)
    const [messagingCount , setMessaginAtomCount] = useRecoilState(messagingAtom)
    const homeCount = useRecoilValue(homeAtom)
    return (
        <>
            <button>Home ({homeCount >=  100 ? "99+" : homeCount}) </button>
            <button>My network ({networkNotificationCount >= 100  ?  "99+" : networkNotificationCount})</button>
            <button>Jobs ({jobsNotificationCount})</button>
            <button>Messaging ({messagingCount})</button>
            <button>Notification ({notificationCount >= 100 ? "99+"  : notificationCount})</button>

            <button onClick={()=> {
                setMessaginAtomCount(messagingCount + 1)
            }} >Me</button>
        
        </>
    )
}

export default App