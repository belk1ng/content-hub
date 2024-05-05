import HomeIcon from "@/shared/assets/icons/home.svg";
import ArticlesIcon from "@/shared/assets/icons/article.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import AboutIcon from "@/shared/assets/icons/about.svg";

export const routes = {
    home: "/",
    articles: "/articles",
    profile: "/profile",
    about: "/about",
    notFound: "*",
}

export const navConfig = [
    {
        titleTranslationKey: "nav.home",
        to: routes.home,
        icon: <HomeIcon/>
    },
    {
        titleTranslationKey: "nav.articles",
        to: routes.articles,
        icon: <ArticlesIcon/>
    },
    {
        titleTranslationKey: "nav.profile",
        to: routes.profile,
        icon: <ProfileIcon/>
    },
    {
        titleTranslationKey: "nav.about",
        to: routes.about,
        icon: <AboutIcon/>
    },
]

export type NavConfig = typeof navConfig;