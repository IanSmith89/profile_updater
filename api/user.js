'use strict';

const express = require('express');
const router = express.Router();

const users = require('../db/users');

router.get('/api/user/email_exists', (req, res, _next) => {
  const { email } = req.query;
  let exists = false;

  for (let i = 0; i < users.length; i++) {
    let user = users[i];

    if (user.email === email) {
      exists = true;
      break;
    }
  }

  if (exists) {
    res.sendStatus(409);
  } else {
    res.sendStatus(200);
  }
});

router.get('/api/user/username_exists', (req, res, _next) => {
  const { username } = req.query;
  let exists = false;

  for (let i = 0; i < users.length; i++) {
    let user = users[i];

    if (user.username === username) {
      exists = true;
      break;
    }
  }

  if (exists) {
    res.sendStatus(409);
  } else {
    res.sendStatus(200);
  }
});

router.get('/api/user/:id', (req, res, _next) => {
  let user;

  for (let i = 0; i < users.length; i++) {
    if (Number.parseInt(req.params.id) === users[i].id) {
      user = users[i];
      break;
    }
  }

  res.send(user);
});

router.put('/api/user/:id', (req, res, _next) => {
  const { email, password, username } = req.body;

  for (let i = 0; i < users.length; i++) {
    let user = users[i];

    if (Number.parseInt(req.params.id) === user.id) {
      if (email) {
        user.email = email;
      }
      if (password) {
        user.password = password;
      }
      if (username) {
        user.username = username;
      }

      res.send(user);
      break;
    }
  }
});

module.exports = router;
