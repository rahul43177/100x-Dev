import { RevenueCard } from "./components/RevenueCard";


function App() {

  return (
    <div className="grid grid-cols-3">
      <RevenueCard title={"Amount Pending "} amount={"92929292"} orderCount={12}/>
    </div>
  )
}

export default App;