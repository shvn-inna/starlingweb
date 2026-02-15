import HeaderMain from "../navigation/HeaderMain";
import Sidebar from "../navigation/Sidebar";
import HomeButton from "../navigation/HomeButton";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderMain />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
         <div className="fixed bottom-6 left-6 z-50">
        <HomeButton />
      </div>
      </div>
      <Footer />
    </div>
  );
}
