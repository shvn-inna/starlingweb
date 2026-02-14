import NewsCard from "../components/NewsCard";
import { news } from "../content/news";

export default function NewsPage() {
  return (
    <>
    <div className="space-y-8">
        <h1 className="h1">
          Новости
        </h1>

        <div className="grid gap-6">
          {news.map((item) => (
            <NewsCard
              key={item.id}
              date={item.date}
              title={item.title}
              text={item.text} />
          ))}
        </div>
      </div></>
  );
}


