const path = require("path");
const HWP = require("html-webpack-plugin");
module.exports = {
    entry: path.join(__dirname, "/src/index.tsx"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "/dist")
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    devServer: {
        contentBase: __dirname + 'dist',
        compress: true,
        port: 9000
      },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins:[
        new HWP(
            {
                template:path.join(__dirname, "/public/index.html")
            }
        )
    ]
};