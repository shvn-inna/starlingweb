
import {
  Database,
  BookOpen,
  Link as LinkIcon,
  Presentation,
  FileText,
  Cpu
} from "lucide-react";

export const sidebarNavigation = [
  {
    title: "Базы данных",
    icon: Database,
    items: [
      { label: "Русский язык", path: "/databases/russian" },
      { label: "Русские народные диалекты", path: "/databases/dialects" },
      { label: "Этимология", path: "/databases/etymology" },
      { label: "Каталог мифологических мотивов", path: "/databases/myths" },
      { label: "Монгольский язык", path: "/databases/mongolian" },
    ],
  },
  {
    title: "Ресурсы",
    icon: BookOpen,
    items: [
      { label: "Полезные ссылки", path: "/resources/resources", icon: LinkIcon },
      { label: "Конференции", path: "/resources/conferences", icon: Presentation },
      { label: "Публикации", path: "/resources/publications", icon: FileText },
    ],
  },
  {
    title: null,
    items: [
      { label: "STARLING", path: "/about/starling", icon: Cpu },
    ],
  },
];


export const HeaderMainNavigation = [
  { label: "О проекте", path: "/about/babel" },
  { label: "Новости", path: "/about/news" },
  { label: "Контакты", path: "/about/contacts" },
  
];
