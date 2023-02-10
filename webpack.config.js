const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = {
    entry: "./src/index.tsx",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
            favicon: "./public/favicon.ico",
            filename: "index.html",
            manifest: "./public/manifest.json",
        })
    ],
    devServer:{
        static:{
            directory: path.join(__dirname, "build")
        },
        port: 3005,
    },
    module:{
        // exclude  node_modules

        rules:[
            //`js` and `jsx` are parsed using `babel`
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },

            // `ts` and `tsx` files are parsed using `ts-loader`

            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },

            // css loader
            {
                test: /\.css$/i,
                include: path.join(__dirname, "src/styles"),
                use:['style-loader', 'css-loader', 'postcss-loader']
            }
        ],
    },

    // pass all js files through Babel
    resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    }

}