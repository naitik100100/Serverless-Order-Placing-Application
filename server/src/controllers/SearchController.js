/**
 * Controller class handling search resource and delegating business work to the service layer
 * @param {instance of a SearchService class} service
 */
function SearchController(service) {
  this.service = service;
  this.create = this.create.bind(this);
}
SearchController.prototype.create = async function create(req, res) {
  let response = await this.service.create(req.body);
  res.status(response.statusCode).send(response);
};

module.exports = SearchController;
