import { RevenueCard } from "./components/RevenueCard";


export default function App() {

  return (
    <div className="grid grid-cols-3">
      <RevenueCard title={"Amount Pending "} amount={"92929292"} orderCount={12}/>
    </div>
  )
}