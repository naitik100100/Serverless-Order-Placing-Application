const { Joi } = require('express-validation');

const partOrderSchema = Joi.object({
  partId: Joi.number().required(),
  jobName: Joi.string().required(),
  userId: Joi.string().required(),
  qty: Joi.number().required().min(0),
  // todo: decide about the date and time
  result: Joi.string().required().valid('success', 'failure'),
});
const orderSchema = Joi.object({
  parts: Joi.array().min(1).items(partOrderSchema).required(),
});

module.exports = {
  // POST: /api/jobparts
  createOrder: {
    body: orderSchema,
  },
  // GET: /api/jobparts/:userId/:jobName
  getOrderByUserAndJob: {
    params: Joi.object({
      userId: Joi.string().required(),
      jobName: Joi.string().required(),
    }),
  },
};
