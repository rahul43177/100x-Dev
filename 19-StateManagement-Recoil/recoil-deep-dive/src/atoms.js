import {atom , selector} from 'recoil'


export const notifications = atom({
    key : "networkKey" , 
    default : {
        network : 0 , 
        jobs : 0 , 
        messaging : 0 , 
        notifications : 0
    }
})


export const totalNotificationSelector = selector({
    key : "totalNotificationKey" , 
    get : ({get}) => {
        const allNotification = get(notifications)
        return allNotification.network + 
        allNotification.jobs + 
        allNotification.messaging + 
        allNotification.notifications
    }
})