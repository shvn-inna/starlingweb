export default function PublicationsFilters({
  years,
  selectedYear,
  setSelectedYear,
  search,
  setSearch,
  type,
  setType
}) {
  return (
    <div className="flex gap-6 items-end mb-10">

      {/* Поиск */}
      <div className="flex flex-col">
        <label className="text-xs uppercase text-slate-500 mb-2">
          Поиск
        </label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Название или автор"
          className="border border-slate-300 px-4 py-2 w-72 focus:outline-none focus:border-slate-500 transition"
        />
      </div>

      {/* Год */}
      <div className="flex flex-col">
        <label className="text-xs uppercase text-slate-500 mb-2">
          Год
        </label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="border border-slate-300 px-4 py-2 w-40 focus:outline-none focus:border-slate-500 transition"
        >
          <option value="">Все</option>
          {years.map(y => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>

      {/* Тип */}
      <div className="flex flex-col">
        <label className="text-xs uppercase text-slate-500 mb-2">
          Тип
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border border-slate-300 px-4 py-2 w-48 focus:outline-none focus:border-slate-500 transition"
        >
          <option value="">Все</option>
          <option value="Статья">Статья</option>
          <option value="Монография">Монография</option>
          <option value="Рукопись">Рукопись</option>
        </select>
      </div>

    </div>
  )
}
