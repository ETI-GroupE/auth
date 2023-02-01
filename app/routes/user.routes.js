const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
		next();
	});

	app.get("/api/v1/verify/public", controller.allAccess);

	app.get("/api/v1/verify/customer", [authJwt.verifyToken], controller.customerBoard);

	app.get("/api/v1/verify/business", [authJwt.verifyToken, authJwt.isBusiness], controller.businessBoard);
};