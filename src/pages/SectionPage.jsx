import { Link } from "react-router-dom";

export default function SectionPage({ data }) {
  if (!data) {
    return <p className="text-slate-500">Раздел не найден</p>;
  }

  return (
    <article className="max-w-3xl mx-auto space-y-6">
      <h1>{data.title}</h1>

      {data.description && (
        <p className="text-slate-600">{data.description}</p>
      )}

      {data.content?.map((block, i) => {
        if (!block) return null;

        switch (block.type) {
          case "heading":
            return <h2 key={i}>{block.text}</h2>;

          case "paragraph":
            return <p key={i}>{block.text}</p>;

          case "list":
            return (
              <ul key={i} className="list-disc pl-6 space-y-1">
                {block.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            );

          default:
            return null;
        }
      })}
        {/* Автоген ссылки */}
      {data.autoLinks?.length > 0 && (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
    {data.autoLinks.map((link) => (
      <Link
  key={link.path}
  to={link.path}
  className="group light relative overflow-hidden border border-slate-200 bg-light p-6 transition-colors duration-300"
>
  <div className="absolute dark inset-0 bg-gradient-to-br from-dark/80 to-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

  <div className="relative z-10">
    <div className="text-lg font-semibold text-dark group-hover:text-white transition-colors duration-300">
      {link.label}
    </div>

    <div className="mt-2 text-sm text-slate-500 group-hover:text-slate-200 transition-colors duration-300">
      Перейти к разделу →
    </div>
  </div>
</Link>

    ))}
  </div>
)}
    </article>
  );
}







