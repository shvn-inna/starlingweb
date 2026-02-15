import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function WelcomeCollections() {
  const collections = [
    {
      type: "БАЗЫ ДАННЫХ И СЛОВАРИ",
      title: "Русский язык",
      description: "Лексикостатистические и этимологические ресурсы",
      path: "/databases/russian"
    },
    {
      type: "РАЗДЕЛ",
      title: "Конференции",
      description: "Программы и материалы научных мероприятий",
      path: "/resources/conferences"
    },
    
    {
      type: "РЕСУРС",
      title: "Публикации",
      description: "Статьи и книги Московской школы компаративистики",
      path: "/resources/publications"
    }
  ];

  return (
    <section className="mt-32 max-w-6xl mx-auto px-6">

      <div className="mb-10 text-center">
        <h2 className="text-2xl font-heading center font-semibold mb-14 text-dark">
        ДОПОЛНИТЕЛЬНЫЕ РЕСУРСЫ
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="group relative h-48 overflow-hidden 
                       bg-light 
                       hover:bg-dark
                       transition-colors duration-300 rounded-xl"
          >
            {/* Затемнение при наведении */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent 
                            opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300 rounded-xl" />
            
            {/* Стрелка справа вверху */}
            <div className="absolute top-4 right-4 text-dark group-hover:text-light transition-colors duration-300">
              <ArrowRight size={24} />
            </div>

            {/* Текст внизу слева */}
            <div className="absolute bottom-0 left-0 w-full p-6 
                            text-dark group-hover:text-light 
                            transition-colors duration-300">

              <h3 className="text-xl font-heading font-semibold mb-2 text-dark group-hover:text-light transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-sm opacity-90 text-dark group-hover:text-light transition-colors duration-300">
                {item.description}
              </p>

            </div>

          </Link>
        ))}
      </div>

    </section>
  );
}