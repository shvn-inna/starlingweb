import { Link } from "react-router-dom";

export default function ConferenceCard({ conference }) {
  return (
    <article className="py-8 border-b border-slate-200">

      <h3 className="text-xl font-heading font-semibold text-dark mb-2">
        {conference.title}
      </h3>

      <div className="text-sm text-slate-500 mb-4">
        {conference.location}, {conference.venue} · {conference.dates}
      </div>

      <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {conference.materials.map((material, index) => (
          <Link
            key={index}
            to="#"
            className="text-dark hover:text-teal transition-colors"
          >
            {material.label}
          </Link>
        ))}
      </div>

    </article>
  );
}
