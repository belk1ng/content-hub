import axios from "axios";

import { LS_USER } from "@/shared/constants/localStorage";

const accessToken = localStorage.getItem(LS_USER);

export const http = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken && JSON.parse(accessToken).access_token}`,
  },
});
