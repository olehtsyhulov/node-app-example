const queryString = require('query-string');

const { GET_USER, CREATE_USER } = require('../constants/routes');
const { getSingleUser, createUser } = require('../controllers/user.controller');

const router = async ({ req, res, body }) => {
  let result, error;
  const { method, url } = req;
  const [path, query] = url.split('?');
  const parsedQuery = queryString.parse(query);

  switch (true) {
    case method === 'GET' && path === GET_USER:
      ({ result, error } = await getSingleUser(parsedQuery));
      break;

    case method === 'POST' && path === CREATE_USER:
      ({ result, error } = await createUser(body));
      break;

    default:
      res.statusCode = 404;
      res.end(JSON.stringify({ error: 'Route Not Found' }));
  }

  if (error) {
    res.statusCode = error.status;
    res.end(JSON.stringify(error.data));
  }
  res.statusCode = result.status;
  res.end(JSON.stringify(result.data));
};

module.exports = { router };
