import type { FC } from "react";
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

import ProfileCard, { getProfile, profileReducer } from "@/entities/profile";
import ModuleLoader from "@/shared/lib/module-loader";
import { useAppDispatch } from "@/shared/model";

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

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
      <ProfileCard />
    </ModuleLoader>
  );
};

export default ProfilePage;
