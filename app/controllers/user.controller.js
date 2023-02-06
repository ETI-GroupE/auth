const User = db.user;

exports.allAccess = (req, res) => {
	res.status(200).send("Public Content.");
};

exports.userInfo = (req, res) => {
	User.findOne({
		where: {
			id: req.body.id,
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

exports.customerBoard = (req, res) => {
	res.status(200).send("Authorized customer");
};

exports.businessBoard = (req, res) => {
	res.status(200).send("Authorized business");
};
