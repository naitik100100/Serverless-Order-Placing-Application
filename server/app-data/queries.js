/**
 * Centralized queries required for various endpoints
 */
module.exports = {
    createOrder: "insert into job_parts_z (partId, jobName, userId, qty, result) values ?",
    getOrderByUserAndJob: "select * from job_parts_z where userId = ? AND jobName = ?",
    createSearch: "insert into search_z (jobName) values (?)",
    signIn: "select * from users_z where userId = ?"
};
