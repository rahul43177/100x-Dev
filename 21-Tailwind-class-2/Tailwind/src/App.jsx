//grid in tailwind 

export default function App() {
  return (
    <div className="grid grid-cols-3">
      <div className="bg-red-500 col-span-4">Hi</div>
      <div className="bg-yellow-500 col-span-4">My</div>
      <div className="bg-green-500 col-span-2">Name</div>
      <div className="bg-blue-500">is</div>
      <div className="text-blue-400 col-span-5">Rahul</div>
      <div className="bg-indigo-500">hahaha</div>

    </div>
  )
}