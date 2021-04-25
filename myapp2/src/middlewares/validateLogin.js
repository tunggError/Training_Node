const _ = require('lodash');

function validateLogin(schema) {
    return async(req, res, next) => {
        const { email, password } = req.body;
        try {
            const value = await schema.validateAsync(req.body);
            console.log("login: value", value)
        } catch (err) {
            const message = _.get(err, 'details.0.message', null);
            console.log(" login: err", message)
            return res.json({ message: message })
        }
        return res.json({ message: `Đăng nhập thành công , Hello ${email}` });
    }
}

module.exports = validateLogin