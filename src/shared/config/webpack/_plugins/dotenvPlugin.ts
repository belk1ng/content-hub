import { config } from "dotenv";
import webpack from "webpack";

export const dotenvPlugin = new webpack.DefinePlugin({
  "process.env": JSON.stringify(config().parsed),
});
