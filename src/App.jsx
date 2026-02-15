import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Welcome from "./pages/Welcome";
import SectionRoute from "./pages/SectionRoute";
import NewsPage from "./pages/NewsPage";
import ConferencesPage from "./pages/ConferencesPage";
import PublicationsPage from "./pages/PublicationsPage";

export default function App() {
  return (
    <Routes>
  <Route element={<MainLayout />}>

    <Route path="/about" element={<div>странички нет</div>} />
    <Route path="/about/news" element={<NewsPage />} />

    <Route path="/about/:section" element={<SectionRoute />} />
    <Route path="/about/:section/ :page" element={<SectionRoute />} />

    <Route path="/databases/:section" element={<SectionRoute />} />
    <Route path="/databases/:section/:page" element={<SectionRoute />} />

    <Route path="/resources/publications" element={<PublicationsPage />} />
    <Route path="/resources/conferences" element={<ConferencesPage />} />
    <Route path="/resources/:section" element={<SectionRoute />} />

</Route>

<Route path="/" element={<Welcome />} />
<Route path="*" element={<Navigate to="/" replace />} />

</Routes>

  );
}
