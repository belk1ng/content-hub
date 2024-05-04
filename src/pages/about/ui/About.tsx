import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation()

    return (
        <main><h1>{t("about.title")}</h1></main>
    )
}

export default AboutPage