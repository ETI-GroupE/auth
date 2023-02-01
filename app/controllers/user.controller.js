exports.allAccess = (req, res) => {
	res.status(200).send("Public Content.");
};

exports.customerBoard = (req, res) => {
	res.status(200).send("Authorized customer");
};

exports.businessBoard = (req, res) => {
	res.status(200).send("Authorized business");
};
