import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
 <Link
  to="/"
  end
  className="block mt-10 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 rounded transition"
>
  На главную  

</Link>
  )
}