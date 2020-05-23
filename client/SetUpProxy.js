const proxy = require("http-proxy-middleware");

const PORT = process.env.PORT || 3000;

module.exports = function(app) {

    app.use(proxy("/api", { target: "http://localhost:" + PORT }))
}