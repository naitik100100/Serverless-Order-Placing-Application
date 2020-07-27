const mysql = require('mysql');
const Database = require('config/database');
const queries = require('app-data/queries');
const dbConfig = require('app-data/dbConfig');

/**
 * Creating a new database instance
 */
const database = new Database(dbConfig);

function SearchService() {}

/**
 * Services interacting with database and returning the results back to the controller
 */
SearchService.prototype.create = async function create(data) {
  const createSearchQuery = mysql.format(queries.createSearch, Object.values(data));
  console.log(`The Query for creating a search entry - ${createSearchQuery}`);
  try {
    let result = await database.query(createSearchQuery);
    return {
      success: true,
      statusCode: 201,
      result,
    };
  } catch (error) {
    return {
      success: false,
      statusCode: 500,
      error,
    };
  }
};

module.exports = SearchService;
