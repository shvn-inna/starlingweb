export default function NewsCard({ date, title, text }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition duration-200">
      {date && (
        <p className="text-sm text-slate-400 mb-2">
          {date}
        </p>
      )}

      <h2 className="text-xl font-semibold mb-3 text-slate-900">
        {title}
      </h2>

      <p className="text-slate-700 leading-relaxed whitespace-pre-line">
        {text}
      </p>
    </article>
  );
}


