const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
    },
    // 配置 webpack-dev-server
    devServer: {
        contentBase: path.join(__dirname, "static"), // 静态文件根目录
        compress: false, // 不压缩
        port: 8080, // 端口号
        publicPath: "/virtual/", // 虚拟打包路径, bundle.js 文件并没有真正生成
    },
};
