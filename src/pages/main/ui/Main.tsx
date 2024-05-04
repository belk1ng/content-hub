import {useTranslation} from 'react-i18next';


const MainPage = () => {
    const {t} = useTranslation();

    return (
        <main>
            <h1>{t("homepage.title")}</h1>
        </main>
    )
}

export default MainPage