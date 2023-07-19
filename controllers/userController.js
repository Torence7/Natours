const fs = require('fs');

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/users.json`)
);

exports.getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    results: 'This route is not yet defined',
    data: {
      users,
    },
  });
};

exports.getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    results: 'This route is not yet defined',
    data: {
      users,
    },
  });
};

exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    results: 'This route is not yet defined',
    data: {
      users,
    },
  });
};

exports.updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    results: 'This route is not yet defined',
    data: {
      users,
    },
  });
};

exports.deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    results: 'This route is not yet defined',
    data: {
      users,
    },
  });
};
