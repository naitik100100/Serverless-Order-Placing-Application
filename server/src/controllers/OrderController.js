/**
 * Controller class handling order(JobParts) resource and delegating business work to the service layer
 * @param {instance of a OrderService class} service
 */
function OrderController(service) {
  this.service = service;
  this.create = this.create.bind(this);
  this.getByUserAndJobname = this.getByUserAndJobname.bind(this);
}
OrderController.prototype.create = async function create(req, res) {
  let response = await this.service.create(req.body);
  res.status(response.statusCode).send(response);
};
OrderController.prototype.getByUserAndJobname = async function getByUserAndJobname(req, res) {
  let response = await this.service.getByUserAndJobname(req.params);
  res.status(response.statusCode).send(response);
};
module.exports = OrderController;
