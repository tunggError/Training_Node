const Joi = require('joi');
const _ = require('lodash');
module.exports = {
    login: async(req, res, next) => {
        // const { email, password } = req.body;

        // const schema = Joi.object({
        //     password: Joi.string()
        //         .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        //     email: Joi.string()
        //         .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
        // });
        // try {
        //     const value = await schema.validateAsync(req.body);
        //     console.log("login: value", value)
        // } catch (err) {
        //     const message = _.get(err, 'details.0.message', null);
        //     console.log(" login: err", message)
        //     return res.json({ message: message })
        // }
        // return res.json({ message: `Đăng nhập thành công , Hello ${email}` });
    }
}