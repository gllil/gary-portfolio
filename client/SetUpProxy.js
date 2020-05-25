const proxy = require("http-proxy-middleware");

const PORT = process.env.PORT || 3001;

module.exports = function(app) {

    app.use(proxy("/api/sendMail", { target: "http://localhost:" + PORT }))
}