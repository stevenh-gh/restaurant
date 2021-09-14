const path = require("path")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    module: {
        rules: [{
            test: /\.css$/,
            // order from last to first
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: { importLoaders: 1 }
                },
                "postcss-loader"
            ]
        }]
    }
}