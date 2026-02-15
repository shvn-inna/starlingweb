import { NavLink } from "react-router-dom";
import { sidebarNavigation } from "../../content/navigation";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen
border-r border-slate-200 bg-white">
      <nav className="px-6 py-8 space-y-10 text-sm text-left">

        {sidebarNavigation.map((group, idx) => (
  <div key={idx}>

    {group.title && (
      <div className="mb-4 flex items-center gap-2 text-xs uppercase tracking-wide text-slate-500">
        {group.icon && <group.icon size={14} />}
        {group.title}
      </div>
    )}

    <ul className="space-y-1">
      {group.items.map(item => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `
              flex items-center gap-3
              px-3 py-2 rounded-md
              transition-colors duration-200
              ${
                isActive
                  ? "bg-light text-dark"
                  : "text-slate-700 hover:bg-gray hover:text-dark"
              }
              `
            }
          >
            {item.icon && <item.icon size={16} />}
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>

  </div>
))}


      </nav>
    </aside>
  );
}
