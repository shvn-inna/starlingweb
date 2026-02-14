import { NavLink } from "react-router-dom";
import { sidebarNavigation } from "../../content/navigation";

export default function Sidebar() {
  return (
    <aside className="sticky top-20 h-auto w-64 bg-white border-r border-slate-300">
      <nav className="p-4 space-y-10 text-m">
        {sidebarNavigation.map((group, idx) => (
          <div key={idx}>
            {group.title && (
              <div className="mb-2 font-semibold text-slate-500 uppercase tracking-wide text-m">
                {group.title}
              </div>
            )}

            <ul className="space-y-3">
              {group.items.map(item => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link nav-link-active"
                        : "nav-link"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
              
          </div>
        ))}
      </nav>
       <NavLink
  to="/"
  end
  className="block mt-10 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded transition"
>
  На главную  

</NavLink>
    </aside>
  );
}
