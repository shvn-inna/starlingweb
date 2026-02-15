import { Link } from "react-router-dom";

export default function SecondaryLinks({ links }) {
  if (!links?.length) return null;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
      {links.map((link) => (
       <Link
  key={link.path}
  to={link.path}
  className="
    group block
    dark
    text-dark
    border border-slate-200
    p-6
    transition-colors duration-300
    hover:light
    hover:text-black
  "
>
  <h3 className="text-lg font-semibold">
    {link.label}
  </h3>

  <p className="mt-2 text-sm opacity-70">
    Перейти к разделу →
  </p>
</Link>


      ))}
    </div>
  );
}
