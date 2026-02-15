import { Link } from "react-router-dom";

export default function WelcomeCollections() {
  const collections = [
    {
      type: "БАЗА ДАННЫХ",
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
      type: "ПРОЕКТ",
      title: "STARLING",
      description: "Система сравнительно-исторических баз данных",
      path: "/about/starling"
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

      <div className="mb-10">
        <h2 className="text-2xl font-heading font-semibold tracking-tight">
          Исследуйте ресурсы проекта
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {collections.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="group relative h-64 overflow-hidden 
                       bg-light 
                       hover:bg-dark
                       transition-colors duration-300"
          >
            {/* затемнение поверх цвета */}
            <div className="absolute inset-0 bg-gradient-to-t 
                            from-dark/40 to-transparent 
                            opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300" />

            <div className="absolute bottom-0 w-full p-8 
                            text-dark 
                            group-hover:text-light 
                            transition-colors duration-300">

              <span className="text-xs tracking-widest opacity-80 block mb-3">
                {item.type}
              </span>

              <h3 className="text-2xl font-heading font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-sm opacity-90">
                {item.description}
              </p>

            </div>

          </Link>
        ))}
      </div>

    </section>
  );
}
