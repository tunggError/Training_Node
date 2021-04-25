const _ = require('lodash');

function validateRegister(schema) {
    return async(req, res, next) => {
        const { lastName, firstName } = req.body;
        try {
            const value = await schema.validateAsync(req.body);
            console.log(" try value", value)
            console.log('Đăng ký thành công')
        } catch (err) {
            const message = _.get(err, 'details.0.message', null);
            console.log("error message", message)
            return res.json({ message: message });
        }
        return res.json({ message: `Đăng ký thành công , chào bạn ${lastName} ${firstName}` })
    }

}
module.exports = validateRegister