import { useParams, Navigate } from "react-router-dom";
import { sections } from "../content/sections";
import SectionPage from "./SectionPage";




const CATEGORY_LABELS = {
  databases: "Базы данных",
  about: "О проекте",
  resources: "Ресурсы",
};


export default function SectionRoute() {
  const { section, page } = useParams();

  console.log("PARAMS:", section, page);
  console.log("SECTION EXISTS:", sections[section]);
  console.log("ALL KEYS:", Object.keys(sections));


  const sectionData = sections[section];

  if (!sectionData) {
    return <Navigate to="/" replace />;
  }

  const category = sectionData.category;



  // подстраница
  if (page) {
    const pageData = sectionData.pages?.[page];

    if (!pageData) {
      return <Navigate to={`/${category}/${section}`} replace />;
    }

    return (
      <>
        <SectionPage data={pageData} />
      </>
    );
  }

  const autoLinks = sectionData.pages
    ? Object.entries(sectionData.pages).map(([slug, page]) => ({
        label: page.title,
        path: `/${category}/${section}/${slug}`,
      }))
    : [];

  return (
    <>
      <SectionPage
        data={{
          ...sectionData,
          autoLinks,
        }}
      />
    </>
  );
}




