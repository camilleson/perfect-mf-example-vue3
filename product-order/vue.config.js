const PORT = 3003;

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
          name: "productOrder",
          filename: "remoteEntry.js",
          remotes: {},
          exposes: {
            "./ProductOrder": "./src/components/ProductOrder",
            "./store": "./src/store/modules/orders/store",
          },
          shared: [
            {
              vue: {
                eager: true,
                singleton: true,
              },
            },
            {
              vuex: {
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
