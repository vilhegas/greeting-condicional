import { Clock } from "@/components/Clock";

function Page() {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center text-center text-white bg-linear-to-r from-sky-500 to-indigo-500">
      <Clock/>
    </div>
  )
}
 
export default Page;