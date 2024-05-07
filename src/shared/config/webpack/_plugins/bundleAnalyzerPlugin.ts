import webpackBundleAnalyzer from "webpack-bundle-analyzer";

export const bundleAnalyzerPlugin =
  new webpackBundleAnalyzer.BundleAnalyzerPlugin({
    openAnalyzer: false,
    analyzerPort: 8069,
  });
