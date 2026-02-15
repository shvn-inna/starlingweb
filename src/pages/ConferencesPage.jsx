import { useMemo, useState } from "react";
import { conferences } from "../content/conferences";
import ConferenceCard from "../components/ConferenceCard";

export default function ConferencesPage() {

  const [selectedYear, setSelectedYear] = useState("all");

  const years = useMemo(() => {
    const uniqueYears = [...new Set(conferences.map(c => c.year))];
    return uniqueYears.sort((a, b) => b - a);
  }, []);

  const filteredConferences = useMemo(() => {
    return conferences
      .filter(c => selectedYear === "all" || c.year === Number(selectedYear))
      .sort((a, b) => b.year - a.year);
  }, [selectedYear]);

  return (
    <section className="space-y-8">

      <h1 className="mb-6">
        Конференции
      </h1>

      <div className="mb-6 mt-6">

        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="w-48 px-3 py-2 rounded-md border border-slate-300
                     bg-white text-dark text-sm
                     focus:outline-none focus:ring-2 focus:ring-light
                     transition"
        >
          <option value="all">Все годы</option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div>
        {filteredConferences.map(conf => (
          <ConferenceCard key={conf.id} conference={conf} />
        ))}
      </div>

    </section>
  );
}
