export default function PublicationsTable({ publications }) {
  return (
    <div className="rounded-xl border border-slate-200 overflow-x-auto">

      <table className="w-full border-collapse text-sm">

        <thead className="sticky top-0 bg-white border-b border-slate-200 z-10">
          <tr className="text-left text-xs uppercase tracking-wide text-slate-500">
            <th className="py-4 px-6">Автор</th>
            <th className="py-4 px-6">Название</th>
            <th className="py-4 px-6">Тип</th>
            <th className="py-4 px-6">Год</th>
            <th className="py-4 px-6">Язык</th>
            <th className="py-4 px-6 text-center">PDF</th>
          </tr>
        </thead>

        <tbody>
          {publications.map(pub => (
            <tr
              key={pub.id}
              className="border-b border-slate-100 hover:bg-slate-50 transition"
            >
              <td className="py-5 px-6 whitespace-nowrap">
                {pub.authors.join(", ")}
              </td>

              <td className="py-5 px-6">
                <div className="font-medium text-slate-800">
                  {pub.title}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  {pub.source}
                </div>
              </td>

              <td className="py-5 px-6">{pub.type}</td>
              <td className="py-5 px-6">{pub.year}</td>
              <td className="py-5 px-6">{pub.language}</td>

              <td className="py-5 px-6 text-center">
                <a
                  href={pub.file}
                  target="_blank"
                  className="text-teal-700 hover:text-slate-900 transition"
                >
                  PDF
                </a>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}
