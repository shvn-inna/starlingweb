import { Link } from "react-router-dom";
import bg from "../assets/welcome-bg.jpg";
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

      <p className="text-lg text-white md:text-xl leading-relaxed">
        Международный интернет-проект, посвящённый
        сравнительно-историческому языкознанию
      </p>
    </div>
  </div>

</section>


      <main className="relative bg-white -mt-24 rounded-t-xl items-center ">

                <div className="max-w-4xl mx-auto px-6 mt-16 text-center ">
 
                        <div className="mt-16 ">
                  <p className="text-base text-dark/80 leading-relaxed w-full">
                    «Вавилонская Башня» — название международного Интернет-проекта, посвященного сравнительно-историческому языкознанию. На настоящий момент это, пожалуй, крупнейший и наиболее содержательный из такого рода проектов в Сети.
                  </p>
                  
                  <p className="text-base text-dark/80 leading-relaxed w-full">
                    «Вавилонская башня» была запущена в 1998 г. в качестве персональной страницы Сергея Анатольевича Старостина (1953–2005), который вплоть до своей безвременной кончины 30 сентября 2005 г. был ведущим российским специалистом в области сравнительного языкознания и неофициальным главой т. н. «Московской школы компаративистики». (Памяти о нем посвящен специальный раздел сайта).
                  </p>
                  
                  <p className="text-base text-dark/80 leading-relaxed w-full">
                    Сегодня, десять лет спустя, «Вавилонская Башня» превратилась в колоссальный информационный ресурс по всем важнейшим языковым семьям Евразии, и новые базы данных создаются уже по языкам, распространенным далеко за пределами этого континента. Однако «Башня» по своей сути не является чисто информационным порталом; мы стараемся подавать материал как иерархическую структуру, отражающую как доказанные, так и гипотетические генетические связи между различными языковыми семьями. Наша цель не только и не столько в том, чтобы создать энциклопедию сведений о языках мира, а скорее в том, чтобы предоставить в распоряжение исследователей мощный инструментарий для дальнейших разысканий в области языковой предыстории человечества.
                  </p>
        </div>
          <WelcomeCollections />
          <WelcomeNews />
        </div>

      </main>

      <Footer />
    </div>
  );
}
