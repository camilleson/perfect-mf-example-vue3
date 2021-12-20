const PORT = 3001;

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
          name: "productList",
          filename: "remoteEntry.js",
          remotes: {},
          exposes: {
            "./ProductList": "./src/components/ProductList",
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
