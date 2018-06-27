var path = require('path')
module.exports = {
    entry: ["./vendors/js/scripts.js"],
    output: {
        filename: "./assets/js/bundle.js",
        path: path.join(__dirname, '/')
    },
    watch: true // tự rebuild khi có thay đổi
}