import type { FC } from "react";
import { useTranslation } from "react-i18next";

import { profileDataSelector } from "../../";

import { useAppSelector } from "@/shared/model";

const ProfileCard: FC = () => {
  const { t } = useTranslation("profile");

  const data = useAppSelector(profileDataSelector);

  return (
    <div>
      <p>
        {t("firstName")}: {data?.firstName}
      </p>
      <p>
        {t("lastName")}: {data?.lastName}
      </p>
    </div>
  );
};

export default ProfileCard;
