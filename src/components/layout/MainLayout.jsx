import HeaderMain from "../navigation/HeaderMain";
import Sidebar from "../navigation/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Верхний хедер */}
      <HeaderMain />

      {/* Основной контент: сайдбар слева, страница справа */}
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
