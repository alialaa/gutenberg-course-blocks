const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// This plugin uses terser to minify your JavaScript.
const TerserPlugin = require("terser-webpack-plugin");

// It will search for CSS assets during the Webpack build and will optimize \ minimize the CSS 
// (by default it uses cssnano but a custom CSS processor can be specified).
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = (env, argv) => {
    function isDevelopment() {
        return argv.mode === "development";
    }
    var config = {
        entry: {
            editor: "./src/editor.js",
            script: "./src/script.js"
        },
        output: {
            filename: "[name].js"
        },
        optimization: {
            minimizer: [
                new TerserPlugin({
                    sourceMap: true
                }),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        map: {
                            inline: false,
                            annotation: true
                        }
                    }
                })
            ]
        },
        plugins: [
          
            new MiniCssExtractPlugin({
              chunkFilename: '[id].css',
            //   chunk типа webpack.compilation.Chunk
              moduleFilename: (chunk) => {
                const { name } = chunk;
                // chunk.entryModule.id) == './src/editor.js',
                // name == 'editor'
                return   name === "script" ? "style.css" : "[name].css";
              }
            }),
            new CleanWebpackPlugin(),

          ],
      
        devtool: isDevelopment() ? "cheap-module-source-map" : "source-map",
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                plugins: [
                                    "@babel/plugin-proposal-class-properties"
                                ],
                                presets: [
                                    "@babel/preset-env",
                                    [
                                        "@babel/preset-react",
                                        {
                                            pragma: "wp.element.createElement",
                                            pragmaFrag: "wp.element.Fragment",
                                            development: isDevelopment()
                                        }
                                    ]
                                ]
                            }
                        },
                        "eslint-loader"
                    ]
                },
                {
                    test: /\.(sass|scss|css)$/,
                    use: [
                         MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader"
                    ]
                }
             
            ]
        },
        externals: {
            jquery: "jQuery",
            "@wordpress/blocks": ["wp", "blocks"],
            "@wordpress/i18n": ["wp", "i18n"],
            "@wordpress/editor": ["wp", "editor"],
            "@wordpress/components": ["wp", "components"],
            "@wordpress/element": ["wp", "element"]
        }
    };
    return config;
};
