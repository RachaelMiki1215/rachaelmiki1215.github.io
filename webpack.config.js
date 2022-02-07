const path = require('path');

module.exports = {
    stats: {
        assets: true,
        moduleAssets: true
    },
    mode: "production",
    watch: true,
    entry: path.join(__dirname, "src/main"),
    output: {
        filename: "[name].bundle.js",
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /.js$/,
                /*exclude: [
                    path.resolve(__dirname, "node_modules"),
                    path.resolve(__dirname, "bower_components")
                ],*/
                loader: "babel-loader",
                options: {
                    //presets: ["@babel/preset-env"],
                    compact: false
                }
            }
        ]
    },
    resolve: {
        extensions: [".json", ".js", ".jsx"]
    }
};