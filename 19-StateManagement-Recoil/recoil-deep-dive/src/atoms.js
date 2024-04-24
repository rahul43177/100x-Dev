import {atom} from 'recoil'


export const networkAtom = atom({
    key : "networkAtom" ,
    default : 103
})

export const jobsAtom = atom({
    key : "jobsAtom" , 
    default : 0
})

export const notificationAtom = atom({
    key : "notificationAtom" , 
    default : 12
})

export const messagingAtom = atom({
    key : "messagingAtom" ,
    default : 144
})


export const homeAtom = atom({
    key : "homeAtom" , 
    default : 1000
})

export const totalNotificationSelector = selector({
    key : "totalNotificationSelector" ,
    get : ({get}) => {
        const networkAtomCount = get(networkAtom)
        const jobsAtomCount = get(jobsAtom)
        const notificationAtomCount = get(notificationAtom)
        const messaginAtomCount = get(messagingAtom)
        return networkAtomCount + jobsAtomCount + notificationAtomCount + messaginAtomCount
    }
})