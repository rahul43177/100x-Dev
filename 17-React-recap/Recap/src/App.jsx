//fixing using the useMemo
import { useState, useEffect , useMemo} from "react";

function App() {
  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {  //these in real world will be a network call
    setExchange1Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    setExchange2Data({
      returns: 100,
    });
  }, []);

  useEffect(() => {
    setBankData({
      returns: 100,
    });
  }, []);
  const cryptoReturns = useMemo(()=> {
    exchange1Data.returns + exchange2Data.returns;
  },[exchange1Data , exchange2Data])

  const incomeTax = (cryptoReturns + bankData.returns) * 0.3;

  return <div>Hi there , your income tax return are {incomeTax}</div>;
}

export default App;
