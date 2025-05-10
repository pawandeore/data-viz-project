import { RotateCwIcon, Share } from "lucide-react"
import Header from "./Header"
import ScenarioResults from "./ScenarioResults"
import Chart from "./Chart"
import StatsCard from "./StatsCard"
import VariableDetails from "./VariableDetails"
import { useAtom } from "jotai"
import { editDetailsAtom } from "../atoms"

const Dashboard = () => {
   const [open, setOpen] = useAtom(editDetailsAtom);

   const modalHandler = () => {
      setOpen(!open);
   }
  return (
    <>
      <Header />
      <div className="border border-neutral-700 rounded-md m-6 px-10">
        <div className="flex justify-between items-center mb-8 pt-10 pb-5">
          <div className="flex items-center">
            <div className="mr-4">
              <svg width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.75 18.75H7.5L16.25 1.25V11.25H22.5L13.75 28.75V18.75Z" fill="white"/>
              </svg>
            </div>
            <h1 className="text-[32px] font-bold">Charging Station</h1>
          </div>
          
          <div className="flex space-x-4">
            <button className="bg-neutral-800 border border-neutral-600 hover:bg-neutral-700 rounded-md p-3 transition-colors">
              <RotateCwIcon className="h-3.5 w-3.5 text-neutral-300" />
            </button>
            <button onClick={modalHandler} className="bg-neutral-800 border border-neutral-600 hover:bg-neutral-700 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors">
              Edit Variables
            </button>
            <button className="bg-neutral-800 border border-neutral-600 hover:bg-neutral-700 rounded-md p-3 transition-colors">
              <Share className="h-3.5 w-3.5 text-neutral-300" />
            </button>
          </div>
        </div>
        <ScenarioResults />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Chart />
          <StatsCard />
        </div>
        <VariableDetails />
      </div>
      
    </>
  )
}

export default Dashboard