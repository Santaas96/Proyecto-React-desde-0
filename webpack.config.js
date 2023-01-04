const path = require("path");

// PLUGINS Y MINIFICADORES DE CSS, SCSS O SASS
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Para el template html que usa webpack para empaquetar
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Para reducir los CSS
const { SourceMapDevToolPlugin } = require("webpack"); // Para conocer el source map de nuestro proyecto

// Configuraciones del puerto
const port = process.env.PORT || 3000;

// Exportar configuracion de webpack
module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.[fullhash].js",
    publicPath: "/",
  },
  context: path.resolve(__dirname),
  devServer: {
    port,
    historyApiFallback: true,
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      // Reglas para archivos JS y JSX
      // Tienen que pasar el linting para poder pasar
      {
        enforce: "pre",
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        use: ["source-map-loader"],
      },
      // Reglas para archivos JS y JSX
      // Reglas de Babel ES y JSX
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/env", "@babel/react"] },
        },
      },
      // Reglas para archivos CSS, SASS y SCSS para minificarlos y cargarlos enh el bundle
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      // Reglas para archivos de imagenes
      {
        test: /(\.png|\.jpe?g|\.gif)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    // Template HTML
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./css/styles.css",
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
    new ESLintPlugin(),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss", ".sass"],
    modules: ["node_modules"],
    alias: {
      "react=redux": path.join(__dirname, "/node_modules/react=redux/dist/react-redux.min")
    }
  },
};
