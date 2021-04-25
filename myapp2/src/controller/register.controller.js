const Joi = require('joi').extend(require('@hapi/joi-date'));
const _ = require('lodash')
const moment = require('moment');
module.exports = {
    register: async(req, res, next) => {
        //     const { lastName, firstName } = req.body;
        //     const schema = Joi.object({
        //         firstName: Joi.string()
        //             .min(3)
        //             .max(30)
        //             .required(),
        //         lastName: Joi.string()
        //             .min(3)
        //             .max(30)
        //             .required(),
        //         userName: Joi.string()
        //             .alphanum()
        //             .min(3)
        //             .max(30)
        //             .required(),

        //         password: Joi.string()
        //             .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        //             .required(),

        //         repeat_password: Joi.ref('password'),

        //         birthDay: Joi.date().utc()
        //             .format("DD/MM/YYYY")
        //             .required(),

        //         email: Joi.string()
        //             .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
        //     });

        //     try {
        //         const value = await schema.validateAsync(req.body);
        //         console.log(" try value", value)
        //         console.log('Đăng ký thành công')
        //     } catch (err) {
        //         const message = _.get(err, 'details.0.message', null);
        //         console.log("error message", message)
        //         return res.json({ message: message });
        //     }

        //     return res.json({ message: `Đăng ký thành công , chào bạn ${lastName} ${firstName}` })
    }
}