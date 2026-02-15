import SecondaryLinks from "../components/navigation/SecondaryLinks";

export default function SectionPage({ data }) {
  return (
    <article className="max-w-3xl mx-auto space-y-6">
      
      <h1>{data.title}</h1>

      {data.description && (
        <p className="text-slate-600">{data.description}</p>
      )}

      <SecondaryLinks links={data.autoLinks} />

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
    </article>
  );
}
