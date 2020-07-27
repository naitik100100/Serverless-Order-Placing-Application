const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');

const orderSchema = require('src/helpers/validate/orderSchema');
const OrderService = require('src/services/OrderService');
const OrderController = require('src/controllers/OrderController');
const orderController = new OrderController(new OrderService());
const { authenticateRoute } = require('src/helpers/auth');

/**
 * POST: /api/jobparts endpoint to add entry in job_parts_z table
 * Possible outcomes:
 * Successfully insert a record { "success": true, "statusCode": 201, "result": {} }
 * Validation Errors: I.e., { "name": "ValidationError", "message": "Validation Failed", "statusCode": 400 }
 * SQL Errors: I.e., { "success": false, "statusCode": 500, "error": {} }
 */
router.route(`/jobparts`).post(authenticateRoute, validate(orderSchema.createOrder), orderController.create);

/**
 * GET: /api/jobparts/:userId/:jobname endpoint to get records for provided userId and jobname
 * Possible outcomes:
 * Successfully fetches matched records { "success": true, "statusCode": 200, "result": [] }
 * Validation Errors: I.e., { "name": "ValidationError", "message": "Validation Failed", "statusCode": 400 }
 * SQL Errors: I.e., { "success": false, "statusCode": 500, "error": {} }
 */
router
  .route(`/jobparts/:userId/:jobName`)
  .get(authenticateRoute, validate(orderSchema.getOrderByUserAndJob), orderController.getByUserAndJobname);

module.exports = router;
