const URL = require('url');

const { GET_USER, CREATE_USER } = require('../constants/routes');
const { getSingleUser, createUser } = require('../controllers/user.controller');

const router = async ({ req, res, body }) => {
  let result, error;
  const { method, url } = req;
  const { query, pathname } = URL.parse(url, true);

  switch (true) {
    case method === 'GET' && pathname === GET_USER:
      ({ result, error } = await getSingleUser(query));
      break;

    case method === 'POST' && pathname === CREATE_USER:
      ({ result, error } = await createUser(body));
      break;

    default:
      res.statusCode = 404;
      return res.end(JSON.stringify({ error: 'Route Not Found' }));
  }

  if (error) {
    res.statusCode = error.status;
    return res.end(JSON.stringify({ error }));
  }
  res.statusCode = result.status;
  res.end(JSON.stringify(result.data));
};

module.exports = { router };
