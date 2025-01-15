import {useState , useEffect , useMemo , memo } from 'react'



export default function App() {
  const [exchange1Data , setExchange1Data] = useState({})
  const [exchange2Data , setExchange2Data] = useState({})
  const [bankData , setBankData] = useState({})

  useEffect(() => {
    setExchange1Data({
      returns : 100
    })
  } , [])
  useEffect(() => {
    setExchange2Data({
      returns : 100
    })
  } , [])

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income : 1000
      })
    }, 3*1000)
  }, [])

  //useCallback -> is about 
  const calculateCrytoRetuns = () => {
    return exchange1Data.returns + exchange2Data.returns;
  }
  return (
    <div>
      <CryptoGain cryptoReturns = {calculateCrytoRetuns}/>
      <Dummy/>
    </div>

  )
}

const Dummy = memo(() => {
  console.log("Dumy dummy - rerende")
  return (
    <div>
      HI tehre dummy dummy 
    </div>
  )

})

function CryptoGain({cryptoReturns}){
  console.log("Crypto child re-render")
  return (
    <div>
      The crypto returns are {cryptoReturns()}
    </div>
  )
}


