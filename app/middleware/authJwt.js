const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
	let token = req.headers["x-access-token"];

	// No token
	if (!token) {
		return res.status(403).send({
			message: "No token provided!",
		});
	}

	// Verify token is signed with secret and is valid (24h)
	jwt.verify(token, config.secret, (err, decoded) => {
		if (err) {
			return res.status(401).send({
				message: "Unauthorized!",
			});
		}
		if (req.body.userId != decoded.id) {
			return res.status(401).send({
				message: "Unauthorized!",
			});
		}
		req.userId = decoded.id;
		next();
	});
};

isCustomer = (req, res, next) => {
	User.findByPk(req.userId).then((user) => {
		user.getRoles().then((roles) => {
			for (let i = 0; i < roles.length; i++) {
				if (roles[i].name === "customer") {
					next();
					return;
				}
			}

			res.status(403).send({
				message: "Require customer Role!",
			});
			return;
		});
	});
};

isBusiness = (req, res, next) => {
	User.findByPk(req.userId).then((user) => {
		user.getRoles().then((roles) => {
			for (let i = 0; i < roles.length; i++) {
				if (roles[i].name === "business") {
					next();
					return;
				}
			}

			res.status(403).send({
				message: "Require business Role!",
			});
		});
	});
};

const authJwt = {
	verifyToken: verifyToken,
	isCustomer: isCustomer,
	isBusiness: isBusiness,
};
module.exports = authJwt;
