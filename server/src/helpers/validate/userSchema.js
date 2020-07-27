const { Joi } = require('express-validation');

module.exports = {
  // POST: /api/authenticate
  authenticate: {
    body: Joi.object({
      userId: Joi.string().required(),
      password: Joi.string().required(),
    }),
  },
};
