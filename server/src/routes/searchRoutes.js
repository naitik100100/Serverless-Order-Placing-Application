const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');

const searchSchema = require('src/helpers/validate/searchSchema');
const SearchService = require('src/services/SearchService');
const SearchController = require('src/controllers/SearchController');
const searchController = new SearchController(new SearchService());
const { authenticateRoute } = require('src/helpers/auth');

/**
 * POST: /api/searches endpoint to add entry in search_z table
 * Add authenticateRoute as a param in post() to disable access without a token
 * Possible outcomes:
 * Successfully insert a record { "success": true, "statusCode": 201 }
 * Validation Errors: I.e., { "name": "ValidationError", "message": "Validation Failed", "statusCode": 400 }
 * SQL Errors: I.e., { "success": false, "statusCode": 500, "error": {} }
 */
router.route(`/searches`).post(validate(searchSchema.create), searchController.create);

module.exports = router;
