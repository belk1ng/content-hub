import HomeIcon from "@/shared/assets/icons/home.svg";
import ArticlesIcon from "@/shared/assets/icons/article.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import AboutIcon from "@/shared/assets/icons/about.svg";

export const navConfig = [
    {
        title: "Главная",
        to: "/",
        icon: <HomeIcon/>
    },
    {
        title: "Статьи",
        to: "/articles",
        icon: <ArticlesIcon/>
    },
    {
        title: "Профиль",
        to: "/me",
        icon: <ProfileIcon/>
    },
    {
        title: "О сайте",
        to: "/about",
        icon: <AboutIcon/>
    },
]

export type NavConfig = typeof navConfig;