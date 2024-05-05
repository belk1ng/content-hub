import "dotenv/config";

export const config = {
  PORT: process.env.PORT || 3000,
  IS_DEV: process.env.NODE_ENV === "development",
};
