const PORT = 3000;

module.exports = {
  publicPath: `http://localhost:${PORT}`,
  devServer: {
    port: PORT,
  },
  chainWebpack: (config) => {
    /* module federation plugin import */
    config
      .plugin("module-federation-plugin")
      .use(require("webpack").container.ModuleFederationPlugin, [
        {
          name: "main",
          remotes: {
            productList: "productList@http://localhost:3001/remoteEntry.js",
            productDetail: "productDetail@http://localhost:3002/remoteEntry.js",
            productOrder: "productOrder@http://localhost:3003/remoteEntry.js",
          },
          exposes: {},
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
