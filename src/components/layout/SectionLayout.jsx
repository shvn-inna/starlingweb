import { Outlet } from "react-router-dom"
import HeaderMain from "../navigation/HeaderMain"
import Sidebar from "../navigation/Sidebar"

export default function SectionLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderMain />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}



