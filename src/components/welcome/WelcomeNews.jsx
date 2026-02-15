import { Link } from "react-router-dom";
import { news } from "../../content/news";

// Карточка одной новости
function NewsCard({ date, title, text }) {
  return (
    <article className="flex flex-col">
      <time className="text-sm text-slate-500 mb-3">
        {date}
      </time>

      <h3 className="text-xl font-heading font-semibold mb-4 text-dark leading-tight">
        {title}
      </h3>

      <p className="text-slate-600 leading-relaxed">
        {text}
      </p>
    </article>
  );
}

export default function WelcomeNews() {
  const recentNews = news.slice(0, 2);

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-12">

        <h2 className="text-2xl font-heading center font-semibold mb-14 text-dark">
          Новости проекта
        </h2>

        <div className="grid md:grid-cols-2 gap-12 relative">

        
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-slate-200" />

          {recentNews.map((item) => (
            <NewsCard
              key={item.id}
              date={item.date}
              title={item.title}
              text={item.text}
            />
          ))}

        </div>

        <div className="mt-16 text-right">
          <Link
            to="/about/news"
            className="text-sm font-semibold text-dark hover:text-slate-600 transition-colors"
          >
            Все новости →
          </Link>
        </div>
      </div>
    </section>
  );
}
