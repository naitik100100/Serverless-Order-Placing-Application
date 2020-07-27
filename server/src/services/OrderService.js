const mysql = require('mysql');
const Database = require('config/database');
const queries = require('app-data/queries');
const dbConfig = require('app-data/dbConfig');

/**
 * Creating a new database instance
 */
const database = new Database(dbConfig);

function OrderService() {}

/**
 * Services interacting with database and returning the results back to the controller
 */
OrderService.prototype.create = async function create(data) {
  const orderedParts = data.parts.map((item) => Object.values(item));
  console.log(`The Query for creating a order entry - ${mysql.format(queries.createOrder, [orderedParts])}`);
  try {
    let result = await database.query(queries.createOrder, [orderedParts]);
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

OrderService.prototype.getByUserAndJobname = async function getByUserAndJobname(params) {
  const getOrdersQuery = mysql.format(queries.getOrderByUserAndJob, [params.userId, params.jobName]);
  console.log(`The Query for finding the orders - ${getOrdersQuery}`);
  try {
    let result = await database.query(getOrdersQuery);
    return {
      success: true,
      statusCode: 200,
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

module.exports = OrderService;
