import HomeIcon from "@/shared/assets/icons/home.svg";
import ArticlesIcon from "@/shared/assets/icons/article.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import AboutIcon from "@/shared/assets/icons/about.svg";

export const navConfig = [
    {
        titleTranslationKey: "nav.home",
        to: "/",
        icon: <HomeIcon/>
    },
    {
        titleTranslationKey: "nav.articles",
        to: "/articles",
        icon: <ArticlesIcon/>
    },
    {
        titleTranslationKey: "nav.profile",
        to: "/me",
        icon: <ProfileIcon/>
    },
    {
        titleTranslationKey: "nav.about",
        to: "/about",
        icon: <AboutIcon/>
    },
]

export type NavConfig = typeof navConfig;