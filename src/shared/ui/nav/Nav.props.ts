import type { HTMLAttributes } from "react";

import type { NavConfig } from "@/shared/config/nav";

export interface NavProps extends HTMLAttributes<HTMLUListElement> {
  links: NavConfig;
}
