const pgClient = require('../index');

exports.getUserById = async (id) => {
  try {
    const user = await pgClient.query(`SELECT * FROM users WHERE id = ${id} LIMIT 1`);
    return { result: user.rows[0] };
  } catch (e) {
    return { error: e.message };
  }
};

exports.getUsers = async () => {
  try {

  } catch (e) {
    return null;
  }
};

exports.createUser = async (email, name) => {
  try {
    await pgClient.query(`INSERT INTO users(email, name) VALUES ('${email}', '${name}')`);
    return { result: true };
  } catch (e) {
    return { error: e.message };
  }
};
