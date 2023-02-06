const db = require("../models");
const User = db.user;
var bcrypt = require("bcryptjs");

exports.allAccess = (req, res) => {
	res.status(200).send("Public Content.");
};

exports.userInfo = (req, res) => {
	User.findOne({
		where: {
			id: req.body.userId,
		},
	})
		.then((user) => {
			// No such user
			if (!user) {
				return res.status(404).send({ message: "User Not found." });
			}

			//User found
			res.status(200).send({
				id: user.id,
				username: user.username,
				email: user.email,
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

exports.userUpdate = (req, res) => {
	User.findOne({
		where: {
			id: req.body.userId,
		},
	})
		.then((user) => {
			// No such user
			if (!user) {
				return res.status(404).send({ message: "User Not found." });
			}

			if (req.body.username) {
				User.update({ username: req.body.username }, { where: { id: req.body.userId } });
			}
			if (req.body.email) {
				User.update({ email: req.body.email }, { where: { id: req.body.userId } });
			}
			if (req.body.password) {
				User.update({ password: bcrypt.hashSync(req.body.password, 8) }, { where: { id: req.body.userId } });
			}
			//User found
			res.status(200).send({ message: "Succesfully updated user" });
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

exports.customerBoard = (req, res) => {
	res.status(200).send("Authorized customer");
};

exports.businessBoard = (req, res) => {
	res.status(200).send("Authorized business");
};

exports.adminBoard = (req, res) => {
	res.status(200).send("Authorized admin");
};
