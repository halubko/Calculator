const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = (env) => {
   const isDev = env.mode ?? "development"

   return {
      module: {
         rules: [
            {
               test: /\.svg/,
               type: 'asset/resource',
            },
            {
               test: /\.s[ac]ss$/i,
               use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
               ],
            },
         ],
      },
      mode: env.mode ?? "development",
      entry: path.resolve(__dirname, "src", "main.js"),
      output: {
         path: path.resolve(__dirname, "build"),
         filename: "main.js",
         clean: true,
      },
      plugins: [
         new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
         }),
      ],
      devtool: isDev && "inline-source-map",
      devServer: isDev
         ? {
              port: env.port ?? 3000,
              open: true,
           }
         : undefined,
   }
}
