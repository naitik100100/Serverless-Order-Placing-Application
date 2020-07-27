const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');

const userSchema = require('src/helpers/validate/userSchema');
const UserService = require('src/services/UserService');
const UserController = require('src/controllers/UserController');
const userController = new UserController(new UserService());
const auth = require('src/helpers/auth');

/**
 * POST: /api/authenticate endpoint to validate user credentials, generate a JWT token, and send to client
 * Possible outcomes:
 * 1. Successfully authenticates and returns a token:
 * {
 *  "token": "",
 *   "authenticate": {
 *      "success": true,
 *      "statusCode": 200
 *   }
 * }
 * 2. Validation Errors: { "name": "ValidationError", "message": "Validation Failed", "statusCode": 400 }
 * 3. User not found: { "authenticate": { "success": false, "statusCode": 404, "message": "User not found." } }
 * 4. Incorrect password: { "authenticate": { "success": false, "statusCode": 404, "message": "incorrect password" } }
 */
router.route(`/authenticate`).post(validate(userSchema.authenticate), userController.authenticate, auth.sendJwtToken);

module.exports = router;
