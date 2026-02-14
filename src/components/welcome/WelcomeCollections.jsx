import { Link } from "react-router-dom";

export default function WelcomeCollections() {
  const collections = [
    {
      type: "БАЗА ДАННЫХ",
      title: "Русский язык",
      description: "Лексикостатистические и этимологические ресурсы",
      path: "/databases/russian",
      color: "dark"
    },
    {
      type: "РАЗДЕЛ",
      title: "Конференции",
      description: "Программы и материалы научных мероприятий",
      path: "/resources/conferences",
      color: "dark"
    },
    {
      type: "ПРОЕКТ",
      title: "STARLING",
      description: "Система сравнительно-исторических баз данных",
      path: "/about/starling",
      color: "dark"
    },
    {
      type: "РЕСУРС",
      title: "Публикации",
      description: "Статьи и книги Московской школы компаративистики",
      path: "/resources/publications",
      color: "dark"
    }
  ];

  return (
    <section className=" mt-32 min-w-[800px] mx-auto px-1">

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
            className={`group relative h-64  overflow-hidden transition-all duration-300 transform hover:-translate-y-2 shadow-sm hover:shadow-xl ${item.color}`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="absolute bottom-0 w-full p-8 text-white">

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
