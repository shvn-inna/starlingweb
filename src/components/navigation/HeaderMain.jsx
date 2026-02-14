import { NavLink } from "react-router-dom";
import { HeaderMainNavigation } from "../../content/navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-60 bg-white border-b border-slate-300">
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-left justify-between">
      <div className="max-w-8xl mx-0 px-4 py-3 flex items-left">
        <div className="flex items-center gap-2 mx-6">
          <div className="logo" />
          <h1 className="m-0 text-xl font-bold">
            Вавилонская башня
          </h1>
          </div>

          <nav className="flex items-center gap-4">
            {HeaderMainNavigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm px-3 py-1 rounded transition ${
                    isActive
                      ? "bg-slate-100 text-slate-900 font-medium"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          </div>
        

        <div className="flex items-center gap-2 text-sm">
          <button className="px-2 py-1 rounded hover:bg-slate-100">RU</button>
          <span className="text-slate-400">|</span>
          <button className="px-2 py-1 rounded hover:bg-slate-100">EN</button>
        </div>

      </div>
      
    </header>
  );
}
