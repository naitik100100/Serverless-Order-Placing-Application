const { Joi } = require('express-validation');

module.exports = {
  // POST: /api/searches
  create: {
    body: Joi.object({
      jobName: Joi.required(),
      // todo: decide about date & time
    }),
  },
};
