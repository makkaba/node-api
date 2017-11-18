var User = sequelize.define('user', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			len: [1,50]
		}
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isEmail: true,
			notEmpty: true,
			len: [1,255]
		}
	},
	password_digest: {
		type: Sequelize.STRING,
		validate: {
			notEmpty: true
		}
	},
	password: {
		type: Sequelize.VIRTUAL,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	password_confirmation: {
		type: Sequelize.VIRTUAL
	}
};

module.exports = User;

/*
ref
https://nodeontrain.xyz/tuts/secure_password/
*/
