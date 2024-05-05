import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t} = useTranslation()

    return (
        <h2>{t("about.title")}</h2>
    )
}

export default AboutPage