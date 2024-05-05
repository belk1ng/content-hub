import type {FC} from "react";
import {useTranslation} from "react-i18next";

const ProfilePage: FC = () => {
    const {t} = useTranslation();

    return (
        <h2>
            {t("profile.title")}
        </h2>
    )
}

export default ProfilePage