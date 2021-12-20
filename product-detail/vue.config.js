const PORT = 3002;

module.exports = {
  publicPath: `http://localhost:${PORT}`,
  devServer: {
    port: PORT,
  },
  chainWebpack: (config) => {
    /* module federation plugin import */
    config.optimization.delete("splitChunks");
    config
      .plugin("module-federation-plugin")
      .use(require("webpack").container.ModuleFederationPlugin, [
        {
          name: "productDetail",
          filename: "remoteEntry.js",
          remotes: {},
          exposes: {
            "./ProductDetail": "./src/components/ProductDetail",
          },
          shared: [
            {
              vue: {
                eager: true,
                singleton: true,
              },
            },
            {
              axios: {
                eager: true,
                singleton: true,
              },
            },
          ],
        },
      ]);
  },
};
