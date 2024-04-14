import {useEffect , useState} from 'react'

function App() {
  const [exchangeData , setExchangeData] = useState({})
  const [exchangeData2 , setExchangeData2] = useState({})
  const [bankData , setBankData] = useState({})

  useEffect(() => {
    setExchangeData({
      returns : 100
    })
  },[])

  useEffect(()=> {
    setExchangeData2({
      returns : 100
    })
  },[])

  useEffect(()=> {
    //some operations to get the data
    setTimeout(()=> {
      setBankData({
        income : 100
      })
    })
  },[])



  const cryptoReturns = exchangeData.returns  + exchangeData2.returnsr
}








export default App
