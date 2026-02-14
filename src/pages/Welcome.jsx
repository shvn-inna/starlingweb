import { Link } from "react-router-dom";
import bg from "../assets/welcome-bg.png";
import WelcomeCollections from "../components/welcome/WelcomeCollections";
//import HeaderMain from "../components/navigation/HeaderMain"
import Footer from "../components/Footer";

export default function Welcome() {
  return (
    <div>
      <header className=" z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
    
        <div className="flex items-center gap-3">
          <div className="logo" />
          <h1 className="m-0 text-xl font-bold whitespace-nowrap">
            Вавилонская башня
          </h1>
        </div>

        <div className="text-sm font-semibold">
          RU | EN
        </div>

      </div>
      </header>

          
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${bg})` }}
    >

      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        

        <div className="flex-1 flex flex-col mt-20 items-center justify-center text-center px-6 text-white">
          
          <h1 className="h1">
            Московская школа компаративистики
          </h1>

          <h2 className="h2">
            международный интернет-проект, посвящённый сравнительно-историческому языкознанию
          </h2>

          <Link
            to="/home"
            className="button">
            <div className="font-semibold">
              Проект «Вавилонская башня»
            </div>
            <div className="text-sm text-slate-600">
              Начать работу →
            </div>
          </Link>

        </div>
        <WelcomeCollections />
      </div>
    </div>
    <Footer />
    </div>
  );
}
