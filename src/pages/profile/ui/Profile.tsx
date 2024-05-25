import type { FC } from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { profileReducer } from "@/entities/profile";
import ModuleLoader from "@/shared/lib/module-loader";

const ProfilePage: FC = () => {
  const { t } = useTranslation();

  const reducers = useMemo(
    () => ({
      profile: profileReducer,
    }),
    []
  );

  return (
    <ModuleLoader clearOnUnmount reducers={reducers}>
      <h2>{t("profile.title")}</h2>
    </ModuleLoader>
  );
};

export default ProfilePage;
