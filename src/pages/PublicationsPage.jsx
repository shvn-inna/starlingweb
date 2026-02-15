import { useState, useMemo } from "react"
import { publications } from "../content/publications"
import PublicationsFilters from "../components/PublicationFilters"
import PublicationsTable from "../components/PublicationsTable"

export default function PublicationsPage() {

  const [selectedYear, setSelectedYear] = useState("")
  const [search, setSearch] = useState("")
  const [type, setType] = useState("")

  const years = [...new Set(publications.map(p => p.year))]
    .sort((a, b) => b - a)

  const filteredPublications = useMemo(() => {
    return publications
      .filter(p =>
        (!selectedYear || p.year === Number(selectedYear)) &&
        (!type || p.type === type) &&
        (
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.authors.join(" ").toLowerCase().includes(search.toLowerCase())
        )
      )
      .sort((a, b) => b.year - a.year)
  }, [selectedYear, search, type])

  return (
    <div className="space-y-8">

      <h1>
        Публикации
      </h1>

      <p>
        Работы Московской школы компаративистики по сравнительно-историческому языкознанию,
        дальнему родству языков и лексикостатистике.
      </p>
      

      <PublicationsFilters
        years={years}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
      />

      <PublicationsTable publications={filteredPublications} />

    </div>
  )
}
