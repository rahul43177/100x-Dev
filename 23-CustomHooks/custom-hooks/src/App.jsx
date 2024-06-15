import {useState} from 'react'
import {useIsOnline} from './hooks/useIsOnline'
import {useMousePosition} from './hooks/mousePointer'

export default function App() {
  const mouseMovement = useMousePosition()
  if(mouseMovement) {
    return <div>
      x : {mouseMovement.x} , y : {mouseMovement.y}
    </div>
  }
  // const isOnline = useIsOnline()
  // if(isOnline) {
  //   return <div
  //   style={{
  //     color : "green" ,
  //     fontWeight : "bold" ,
  //     fontSize : "50px"
  //   }}
  //   >You are online</div>
  // }else {
  //   return <div
  //   style={{
  //     color : "red" ,
  //     fontWeight : "bold" ,
  //     fontSize : "50px"
  //   }}
  //   >You are offline</div>
  // }
}