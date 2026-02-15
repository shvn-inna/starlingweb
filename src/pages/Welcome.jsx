import { Link } from "react-router-dom";
import bg from "../assets/welcome-bg.png";
import WelcomeCollections from "../components/welcome/WelcomeCollections";
import WelcomeNews from "../components/welcome/WelcomeNews";
import Footer from "../components/Footer";

export default function Welcome() {
  return (
    <div className="flex flex-col min-h-screen">

      <section
  className="relative h-[80vh] bg-cover bg-center"
  style={{ backgroundImage: `url(${bg})` }}
>

  <div className="absolute inset-0 bg-black/50" />

  <header className="absolute top-0 left-0 w-full z-20">
    <div className="flex items-center justify-between px-8 py-6 text-white">
      <div className="flex items-center gap-3">
        <div className="logo-white" />
        <span className="text-lg font-medium tracking-wide">
          Вавилонская башня
        </span>
      </div>

      <div className="text-sm font-medium opacity-90 hover:opacity-100 transition">
        RU | EN
      </div>

    </div>
  </header>

  <div className="relative z-10 h-full flex items-center justify-center text-center">
    <div className="max-w-3xl px-6 text-white">
      <h1>
        Московская школа компаративистики
      </h1>

      <p className="text-lg md:text-xl opacity-90 leading-relaxed">
        Международный интернет-проект, посвящённый
        сравнительно-историческому языкознанию
      </p>
    </div>
  </div>

</section>


      <main className="relative bg-white -mt-24 rounded-t-3xl shadow-lg">

        <div className="max-w-6xl mx-auto px-6 py-6 space-y-24">
          <WelcomeCollections />
          <WelcomeNews />
        </div>

      </main>

      <Footer />
    </div>
  );
}
