export const URL = {
  //do not add / at the end
  url_x: 'https://qcutoolbyi.execute-api.us-east-1.amazonaws.com/Dev',
  url_y: 'https://mjq7oae6m9.execute-api.us-east-1.amazonaws.com/companyY',
  url_z: 'http://companyzendpoints-env.eba-z3p9pymd.us-east-1.elasticbeanstalk.com',
};

export const ENDPOINTS_X = {
  getJobs: '/api/jobs/',
  makeOrder: '/api/partorders',
};

export const ENDPOINTS_Y = {
  getParts: '/api/parts/',
  getPart: '/api/apart/',
  updatePartsQty: '/api/parts/',
  makeOrder: '/api/partorders',
};

export const ENDPOINTS_Z = {
  authenticate: '/api/authenticate/',
  makePartsOrder: '/api/jobparts/',
  checkUser: '/api/jobparts/',
  search: '/api/searches/',
};
